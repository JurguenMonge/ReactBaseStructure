//Libraries
import { Routes, Route } from "react-router-dom";

//Routes
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRouter() {
  /*
   * Logic to verify if the user is not authenticated,
   * only public routes are shown
   * 
   * If u want see the private routes, only modify the netx line like:
   * status = isAuth ? "authenticated" : "authenticated";
   */
  let status = "unauthenticated";
  const isAuth = !!sessionStorage.getItem("token");
  status = isAuth ? "authenticated" : "unauthenticated";
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes/>} />
      )}
    </Routes>
  );
}
