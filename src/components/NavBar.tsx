import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-28 p-6 bg-orange-50 flex  justify-between items-center">
      <Link to="/" className="font-black text-2xl">
        #VANLIFE
      </Link>
      <div className="flex gap-3">
        <Link to="about" className="active:underline ">
          About
        </Link>
        <Link to="vans">Vans</Link>
      </div>
    </div>
  );
}
