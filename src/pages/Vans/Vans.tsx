import { useEffect, useState } from "react";
import { Van } from "../../components/vanInterface";
import VanCard from "../../components/VanCard";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function Vans() {
  const [vans, setVans] = useState<[Van]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //getting the filter type in the url parameter
  let typeFilter = searchParams.get("type");

  //calling the getVans function in our useEffect with an async function
  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await getVans();
        // console.log(data);
        setVans(data);
      } catch (err: any) {
        setError(err.message || "Something went  wrong");
      } finally {
        setLoading(false);
      }
    };
    loadVans();
  }, []);

  //function that handles setting the url parameters to include the search params
  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      //if no filter, delete the type key from the params
      //else, set the search params with key and value
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  //this is used to display the filtered vans based on the search parameters
  const displayedVans = typeFilter
    ? vans?.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans?.map((van) => {
    return (
      <VanCard
        van={van}
        key={van.id}
        searchParams={`?${searchParams.toString()}`}
        vanType={typeFilter}
      />
    );
  });

  if (loading) {
    //aria-live to indicate to the screen reader to announce changes in the DOM
    return <h1 aria-live="polite">Loading....</h1>;
  }
  if (error) {
    return <h1 aria-live="assertive"> There was an error: {error}</h1>;
  }
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
