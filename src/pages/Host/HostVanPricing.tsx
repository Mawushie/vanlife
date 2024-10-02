import { useOutletContext } from "react-router-dom";
import { Van } from "../../components/vanInterface";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext<{ currentVan?: Van }>();
  return (
    <div>
      <p>
        <span className="font-medium text-2xl">${currentVan?.price}</span>/day
      </p>
    </div>
  );
}
