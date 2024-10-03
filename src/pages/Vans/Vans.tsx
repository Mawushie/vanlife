import { useEffect, useState } from "react";
import { Van } from "../../components/vanInterface";
import VanCard from "../../components/VanCard";
import { Link, NavLink, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState<[Van]>();
  const [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);
  const displayedVans = typeFilter
    ? vans?.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans?.map((van) => {
    return <VanCard van={van} key={van.id} />;
  });

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };
  return (
    <main className="p-6">
      <h1 className="font-bold text-3xl"> Explore our van options</h1>
      <div className="grid grid-cols-2 gap-5 mt-6 sm:grid-cols-4">
        <button
          className={`filters simple  ${
            typeFilter === "simple" ? "  selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>

        <button
          className={`filters rugged  ${
            typeFilter === "rugged" ? " selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        <button
          className={`filters  luxury${
            typeFilter === "luxury" ? "  selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            className="self-end text-center underline"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="mt-14 grid sm:grid-cols-2 gap-6">{vanElements}</div>
    </main>
  );
}
