import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  return (
    <header className="h-28 p-6 bg-orange-50 flex justify-between items-center main-nav">
      <Link to="/" className="font-black text-2xl">
        #VANLIFE
      </Link>
      <nav className="flex gap-6 font-semibold text-gray-600">
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "active-style" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-style" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-style" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="login"
          // className={({ isActive }) => (isActive ? "active-style" : "")}
          className={({ isActive }) =>
            `self-center ${isActive ? "active-style" : ""}`
          }
        >
          <CgProfile style={{ width: 24, height: 24 }} />
        </NavLink>
      </nav>
    </header>
  );
}
