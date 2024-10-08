import { useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  return (
    <div>
      <h1 className="font-bold text-xl">There was an error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
