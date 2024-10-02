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
          to="."
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
