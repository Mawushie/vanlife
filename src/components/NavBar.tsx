import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="h-28 p-6 bg-orange-50 flex justify-between items-center main-nav">
      <Link to="/" className="font-black text-2xl">
        #VANLIFE
      </Link>
      <nav className="flex gap-3">
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
      </nav>
    </header>
  );
}
