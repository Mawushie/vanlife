import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Van } from "../../components/vanInterface";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState<Van>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
      });
  }, []);
  return (
    <section className="mb-5 mt-14">
      <Link to="../" relative="path">
        &larr; <span> Back to all vans</span>
      </Link>
      <div className="flex bg-white p-6 h-40 gap-5 mt-9">
        <img
          src={currentVan?.imageUrl}
          alt={`Image of ${currentVan?.name}`}
          className="rounded"
        />
        <div className="flex flex-col justify-center gap-4">
          <div className={`van-type ${currentVan?.type}`}>
            {currentVan?.type}
          </div>
          <h2 className="font-bold text-2xl">{currentVan?.name}</h2>
          <p className="font-bold text-xl van-price ">
            ${currentVan?.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    </section>
  );
}
