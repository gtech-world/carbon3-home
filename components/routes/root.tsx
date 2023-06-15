import { HashRouter, Route, Routes } from "react-router-dom";
// import { CarbonActivities } from "./tools/activities";
// import { UserDashboard } from "./tools/dashboard";
import { Home } from "./home";
import { OpenQuery } from "./openQuery";
// import { PCF } from "./tools/pcf";
// import { ProductDefinition } from "./tools/product";
import { SignIn } from "./signIn";

export function Root() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<OpenQuery />} />
          <Route path="/sign" element={<SignIn />} />
          {/*<Route path="/dashboard" element={<UserDashboard />} />*/}
          {/*<Route path="/product" element={<ProductDefinition />} />*/}
          {/*<Route path="/activities" element={<CarbonActivities />} />*/}
          {/*<Route path="/pcf" element={<PCF />} />*/}
        </Routes>
    </HashRouter>
  );
}
export default Root;
