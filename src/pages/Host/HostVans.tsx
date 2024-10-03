import { useEffect, useState } from "react";
import { Van } from "../../components/vanInterface";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vanlist, setVanList] = useState<[Van]>();
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVanList(data.vans);
      });
  }, []);

  const vanListElements = vanlist ? (
    vanlist.map((van) => (
      <Link to={van.id} key={van.id}>
        <div className="flex gap-4 h-28 px-6 py-4 bg-white rounded  ">
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name} van`}
            className="rounded"
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-xl">{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <h1>Loading...</h1>
  );
  return (
    <div>
      <h1 className="font-bold text-3xl mt-14">Your listed vans</h1>
      <main className="mt-8 flex flex-col gap-4">{vanListElements}</main>
    </div>
  );
}
