//function to get the data from the api

export const getVans = async () => {
  const res = await fetch("/api/vans");
  const data = await res.json();
  return data.vans;
};
