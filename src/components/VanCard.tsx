import { Van } from "./vanInterface";

//interface for props
//receiving a prop called van which has interface(type) of the vanInterface
interface Props {
  van: Van;
}

export default function VanCard({ van }: Props) {
  const { imageUrl, name, price, type } = van;

  let typeSytles;
  if (type === "simple") {
    typeSytles = {
      background: "#E17654",
      color: "#FFEAD0",
    };
  }
  if (type === "rugged") {
    typeSytles = {
      background: "#115E59",
      color: "#FFEAD0",
    };
  }
  if (type === "luxury") {
    typeSytles = {
      background: "#161616",
      color: "#FFEAD0",
    };
  }

  return (
    <div className="w-full">
      <div className="mb-1 w-full">
        <img src={imageUrl} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">{name}</h3>
        <div className="text-right">
          <p className="font-semibold text-xl">${price}</p>{" "}
          <span className="text-sm"> /day</span>
        </div>
      </div>
      <div
        className="inline-block w-20 h-8 font-semibold px-3 py-1 rounded-md text-center capitalize"
        style={typeSytles}
      >
        {type}
      </div>
    </div>
  );
}
