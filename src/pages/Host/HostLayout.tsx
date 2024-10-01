import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div className=" bg-orange-50 p-7">
      <nav className="flex gap-7 host-nav">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
