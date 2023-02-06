import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { OpenQuery } from "./openQuery";
import { SignIn } from "./signIn";
import { Home } from "./home";
import { UserDashboard } from "./dashboard";
import { ProductDefinition } from "./product";
import { CarbonActivities } from "./activities";
import { PCF } from "./pcf";

export function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<OpenQuery />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/product" element={<ProductDefinition />} />
        <Route path="/activities" element={<CarbonActivities />} />
        <Route path="/pcf" element={<PCF />} />
      </Routes>
    </HashRouter>
  );
}
export default Root;
