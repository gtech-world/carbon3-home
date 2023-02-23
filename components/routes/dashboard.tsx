import { useIsMobile, useUser } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getProductList } from "@lib/http";
import { Product } from "@lib/@types/type";
import { CAR_SRC, ORG_SRC } from "@components/const";
import { SiFord } from "react-icons/si"

export function ProfileInfo(p: { label: string; text: string }) {
  const isMobile = useIsMobile();
  return (
    <div className="text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre">
      {isMobile ? (
        <div className="hidden whitespace-normal mo:block text-gray-6">
          <span className="text-black font-bold">{p.label}:</span> {p.text}
        </div>
      ) : (
        <>
          <div className="text-black font-bold">{p.label}</div>
          <div className="text-gray-6">{p.text}</div>
        </>
      )}
    </div>
  );
}

function MLink(p: { to: string; text: string }) {
  return (
    <a
      href={p.to}
      className="inline-block whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]"
    >
      {p.text}
    </a>
  );
}
function TargetInventory(p: { data: Product }) {
  const { data } = p;
  return (
    <div className="bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5">
      <img
        className="bg-transparent outline-none border-none w-full aspect-[2/1] object-contain"
        src={data.imageUrl || CAR_SRC}
      />
      <div className="font-semibold text-lg text-black mo:text-base">{data.displayName}</div>
      <div className="w-full flex flex-wrap">
        <MLink to={`/product?product_id=${data.id}`} text="View Product Definition" />
        <MLink to={`/activities?product_id=${data.id}`} text="View PCF Template" />
        <MLink to={`/pcf`} text="Query PCF Data" />
      </div>
    </div>
  );
}
/**
Account Role
Regular User

Authorization Level
Read-Only / Specified Products

Last Login
2022-12-30 14:24
 */
export function UserDashboard() {
  const { user } = useUser();
  const { value: products } = useAsyncM(getProductList);
  if (!user) return null;
  return (
    <MainLayout className="text-black mo:w-full">
      <span className="text-2xl font-bold mo:text-lg">PROFILE</span>
      <div className="mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5">
        <img
          className="object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]"
          src={user.organization.imageUrl || ORG_SRC}
        />
        <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Organization" text={user.organization.displayName} />
          <ProfileInfo label="Orgnization Type" text={user.organization.type} />
          <ProfileInfo label="Site" text={user.organization.sitList[0]?.displayName || "-"} />
          <ProfileInfo label="Account Owner" text={user.name} />
        </div>
        <div className="py-1 ml-[5rem] mo:ml-0 mo:py-0">
          <ProfileInfo label="Account Role" text={user.role} />
          <ProfileInfo
            label="Authorization Level"
            text={user.authLevel === 0 ? "Read-Only" : "Read-Only / Specified Products"}
          />
          <ProfileInfo label="Last Login" text={user.lastLoginTime} />
        </div>
      </div>
      <span className="text-2xl font-bold mo:text-lg">TARGET INVENTORIES</span>
      {products && (
        <div className="mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))]">
          {products.map((product, i) => {
            return <TargetInventory data={product} key={`product_item_${i}`} />;
          })}
        </div>
      )}
    </MainLayout>
  );
}

export default UserDashboard;
