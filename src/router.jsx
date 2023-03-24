import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
