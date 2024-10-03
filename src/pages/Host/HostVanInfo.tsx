import { useOutletContext } from "react-router-dom";
import { Van } from "../../components/vanInterface";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext<{ currentVan?: Van }>();

  return (
    <>
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold">Name :</span> {currentVan?.name}{" "}
        </p>
        <p className="capitalize">
          <span className="font-bold ">Category :</span> {currentVan?.type}{" "}
        </p>
        <p>
          <span className="font-bold">Description :</span>{" "}
          {currentVan?.description}{" "}
        </p>
        <p>
          <span className="font-bold">Visibility :</span> Public
        </p>
      </div>
    </>
  );
}
