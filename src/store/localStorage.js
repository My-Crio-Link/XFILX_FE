import { getVideoDetails } from "../dummy_data";

export const setLocalStorage = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

export const getLocalStorage = (id) => {
  return JSON.parse(localStorage.getItem(id)) || "";
};

export const initialStateHelper = (id) => {
  const val = getLocalStorage(id);
  if (!val || val === "") {
    const [videoData] = getVideoDetails(id);
    const { votes } = [videoData];
    setLocalStorage(id, videoData);
    console.log("setting for the first time", votes);
    return votes;
  } else {
    const { votes } = getLocalStorage(id);
    return votes;
  }
};
