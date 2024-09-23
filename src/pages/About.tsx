export default function About() {
  return (
    <div>
      <img src="about-hero.png" alt="hero-image" className="w-full bg-cover" />
      <div className=" px-6 py-12">
        <h2 className="font-bold text-3xl mb-8">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="mb-14">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br></br> <br></br>Our team is full of vanlife enthusiasts who know
          firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className="h-52 px-8 py-9 border-transparent rounded bg-orange-200">
          <p className="font-bold text-2xl text-black mb-6">
            Your destination is waiting. <br></br>Your van is ready.
          </p>
          <button className="h-12 px-6 py-3 border-transparent bg-black text-white rounded-lg">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}
