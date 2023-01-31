import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { OpenQuery } from "./openQuery";
import { SignIn } from "./signIn";

import { Home } from "./home";
export function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<OpenQuery />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
}
export default Root;
