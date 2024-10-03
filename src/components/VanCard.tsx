import { Link } from "react-router-dom";
import { Van } from "./vanInterface";

//interface for props
//receiving a prop called van which has interface(type) of the vanInterface
interface Props {
  van: Van;
}

export default function VanCard({ van }: Props) {
  const { imageUrl, name, price, type, id } = van;

  return (
    <div className="w-full">
      <Link
        to={id}
        aria-label={`View details for ${name} at $${price} per day`}
      >
        <div className="mb-1 w-full">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={`Image of ${name}`}
          />
        </div>
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">{name}</h2>
          <div className="text-right">
            <p className="font-semibold text-xl">${price}</p>
            <span className="text-sm"> /day</span>
          </div>
        </div>
        <div className={`van-type ${type}`}>{type}</div>
      </Link>
    </div>
  );
}
