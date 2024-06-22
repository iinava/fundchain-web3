import { Outlet } from "react-router-dom";
import NavbarNextui from "./components/Shared/Navbar";

export function Layout() {
  return (
    <div className="  ">
      <div className="navbar">
        <NavbarNextui />
      </div>
      <div className="  font-mono  ">
        <Outlet />
      </div>
    </div>
  );
}
