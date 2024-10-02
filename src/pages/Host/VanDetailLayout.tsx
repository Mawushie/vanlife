import { NavLink, Outlet } from "react-router-dom";

export default function VanDetailLayout() {
  return (
    <div className="flex flex-col">
      <Outlet />
      <div className="flex gap-5 ">
        <NavLink to={`#`}>Details</NavLink>
        <NavLink to={`#`}>Pricing</NavLink>
        <NavLink to={`#`}>Photos</NavLink>
      </div>
    </div>
  );
}
