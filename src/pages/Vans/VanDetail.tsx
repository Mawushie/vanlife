import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Van } from "../../components/vanInterface";

export default function VanDetail() {
  const [van, setVan] = useState<Van>();
  const params = useParams();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVan(data.vans);
      });
  }, [params.id]);

  //checking for whether there is a state passed
  const searchParams = location.state?.searchParams || "";

  return (
    <div className="p-6 mt-9">
      <Link to={`..${searchParams}`} relative="path">
        &larr;{" "}
        <span className="underline">
          {" "}
          Back to {`${location.state.vanType}`} vans
        </span>
      </Link>
      {van ? (
        <div className="mt-9">
          <img src={`${van.imageUrl}`} alt={`Image for ${van.name}`} />
          <div className="flex flex-col gap-4 items-start">
            <div className={`van-type ${van.type} mt-12 `}>{van.type}</div>
            <h2 className="font-semibold text-3xl">{van.name}</h2>
            <p className="font-bold van-price">
              ${van.price}
              <span>/day</span>
            </p>
            <p>{van.description}</p>

            <div className="text-white bg-orange-400 w-full text-center items-center rounded p-2 font-bold cursor-pointer">
              Rent this van
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
}
