import { useEffect, useState } from "react";
import { Van } from "../../components/vanInterface";
import VanCard from "../../components/VanCard";

export default function Vans() {
  const [vans, setVans] = useState<[Van]>();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVans(data.vans);
      });
  }, []);

  const vanElements = vans?.map((van) => {
    // console.log(van);
    return <VanCard van={van} key={van.id} />;
  });

  return (
    <main className="p-6">
      <h1 className="font-bold text-3xl"> Explore our van options</h1>
      <div className="mt-14 grid sm:grid-cols-2 gap-6">{vanElements}</div>
    </main>
  );
}
