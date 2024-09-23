export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-around h-96 px-6 py-16  text-white bg-[url('bghome.png')] bg-cover bg-no-repeat ">
        <h1 className="font-extrabold text-4xl ">
          You got the travel plans, we got the travel vans
        </h1>
        <p className="mb-12">
          Add adventure to your life by joining #vanlife movement. <br></br>Rent
          the perfect van to make your perfect road trip.
        </p>
        <button className="w-full h-12 border-transparent rounded bg-orange-400 font-bold">
          Find your van
        </button>
      </div>
    </>
  );
}
