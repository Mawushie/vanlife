import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-9 p-6 mt-10">
      <h1 className="font-bold text-3xl">
        Sorry, the page you were looking for was not found
      </h1>
      <div className="bg-black rounded text-white p-3 font-bold text-center">
        <Link to="/">Return to home</Link>
      </div>
    </div>
  );
}
