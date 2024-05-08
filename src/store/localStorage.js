import { getVideoDetails } from "../dummy_data";

export const setLocalStorage = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

export const getLocalStorage = (id) => {
  return JSON.parse(localStorage.getItem(id)) || {};
};

export const initialStateHelper = (id) => {
  if (!getLocalStorage(id)) {
    const [videoData] = getVideoDetails(id);
    const { votes } = [videoData];
    setLocalStorage(id, videoData);
    return votes;
  } else {
    const { votes } = getLocalStorage(id);
    return votes;
  }
};
