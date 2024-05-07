import data from "./data.json";

const getData = () => {
  return data;
};

export const getVideoDetails = (id) => {
  return data.filter((item) => item._id === id);
};

export default getData;
