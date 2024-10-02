import { useOutletContext } from "react-router-dom";
import { Van } from "../../components/vanInterface";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext<{ currentVan?: Van }>();
  return (
    <div className="h-28 w-28 ">
      <img
        src={currentVan?.imageUrl}
        alt={`Photo of ${currentVan?.name}`}
        className="rounded-md"
      />
    </div>
  );
}
