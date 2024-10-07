//function to get the data from the api
//throw an error if the response from the api is not okay
export const getVans = async () => {
  const res = await fetch("/api/vans");
  // console.log(res);
  if (!res.ok) {
    // console.log("error thrown");
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  // console.log(data);
  // console.log(res.status, "no error thrown");
  return data.vans;
};
