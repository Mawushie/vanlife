import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
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
    <section className="mb-5 mt-14 ">
      <Link to="../" relative="path">
        &larr; <span> Back to all vans</span>
      </Link>
      <div className="flex flex-col bg-white rounded-md p-6 mt-9">
        <div className="flex  gap-5 items-center mb-6">
          <img
            src={currentVan?.imageUrl}
            alt={`Image of ${currentVan?.name}`}
            className="rounded h-40"
          />
          <div>
            <div className={`van-type ${currentVan?.type} inline-flex`}>
              {currentVan?.type}
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-2">{currentVan?.name}</h2>
            <p className="font-bold text-xl van-price ">
              ${currentVan?.price}
              <span>/day</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 mb-7">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active-style" : "")}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "active-style" : "")}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "active-style" : "")}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
