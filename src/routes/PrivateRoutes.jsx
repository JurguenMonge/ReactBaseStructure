//Libraries
import { Navigate, Route, Routes } from "react-router-dom";

//App Layout
import Layout from "../layout/Layout";

//Views / Pages
import Dashboard from "../views/Dashboard";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* These routes are rendered whithin the layout */}
        <Route path="/dashboard" element={<Dashboard />} index/>
        {/* Add anohter routes whithout index */}
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
