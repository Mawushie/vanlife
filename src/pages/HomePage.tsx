import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="home-container flex flex-col justify-around  px-6 py-16  text-white bg-cover bg-no-repeat">
        <h1 className="font-extrabold text-4xl  mb-6">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mb-12">
          Add adventure to your life by joining #vanlife movement. <br></br>Rent
          the perfect van to make your perfect road trip.
        </p>
        <Link
          to="vans"
          className="w-full py-3 text-center  rounded bg-orange-400 font-bold"
        >
          Find your van
        </Link>
      </div>
    </>
  );
}
