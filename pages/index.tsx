import Home from "@components/routes/home";
// import dynamic from "next/dynamic";
// const Root = dynamic(() => import("../components/routes/root"), { ssr: false });

export default function Index() {
  return <Home />;
}
