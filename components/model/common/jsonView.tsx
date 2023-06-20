import dynamic from "next/dynamic";

const JsonView_ = dynamic(() => import("react-json-view"), { ssr: false });

export function JsonView(p: { data?: any }) {
  if (!p.data) return null;
  return <JsonView_ src={p.data} />;
}
