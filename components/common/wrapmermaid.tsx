import dynamic from "next/dynamic";

export const Wrapmermaid = dynamic(() => import("./mermaid"), { ssr: false });
