import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className=" bg-orange-50 p-7">
      <nav className="flex gap-7 host-nav">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>

      <Outlet />
    </div>
  );
}
