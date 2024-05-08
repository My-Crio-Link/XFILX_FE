import { useState } from "react";
import "./GenrePanel.css";
import RenderGenrePills from "./RenderGenrePills";
import RenderAgePills from "./RenderAgePills";
import { useDispatch, useSelector } from "react-redux";
import { sortDisplay } from "../../store/results";
import getData from "../../dummy_data";

export default function GenrePanel() {
  const { results } = useSelector((state) => state.results);
  const dispatch = useDispatch();

  function sortVideos(videos, sortBy) {
    if (sortBy === "date") {
      return [...videos].sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (sortBy === "viewCount") {
      return [...videos].sort((a, b) => b.viewCount - a.viewCount);
    }
  }

  const handleSelect = (e) => {
    let sortedArr = [];
    if (e.target.value === "viewCount") {
      sortedArr = sortVideos(results, "viewCount");
    } else {
      sortedArr = sortVideos(results, "date");
    }
    dispatch(sortDisplay(sortedArr));
  };

  const handleGenreFilter = (genre) => {
    return results.filter((item) => item.genre === genre);
  };

  const handleAgeFilter = (value) => {
    return results.filter((item) => item.contentRating.includes(value));
  };

  const [genreObj, setGenreObj] = useState({
    "All Genre": false,
    Education: false,
    Sports: false,
    Comedy: false,
    LifeStyle: false,
  });

  const [agePillsObj, setAgePillsObj] = useState({
    "All Age": false,
    7: false,
    12: false,
    16: false,
    18: false,
  });

  function handleGenrePillSelction(event) {
    if (event.target.dataset.value === "All Genre") {
      setGenreObj({
        ...genreObj,
        "All Genre": !genreObj["All Genre"],
        Education: false,
        Sports: false,
        Comedy: false,
        LifeStyle: false,
      });
    } else if (event.target.dataset.value !== undefined) {
      genreObj[event.target.dataset.value]
        ? dispatch(sortDisplay(getData()))
        : dispatch(sortDisplay(handleGenreFilter(event.target.dataset.value)));
      setGenreObj({
        ...genreObj,
        "All Genre": false,
        [event.target.dataset.value]: !genreObj[event.target.dataset.value],
      });
    }
  }

  function handleAgePillSelection(event) {
    if (event.target.dataset.value === undefined) {
      return;
    }
    agePillsObj[event.target.dataset.value] ||
    event.target.dataset.value === "All Age"
      ? dispatch(sortDisplay(getData()))
      : dispatch(sortDisplay(handleAgeFilter(event.target.dataset.value)));
    setAgePillsObj({
      "All Age": false,
      7: false,
      12: false,
      16: false,
      18: false,
      [event.target.dataset.value]: !agePillsObj[event.target.dataset.value],
    });
  }

  return (
    <>
      <div
        className="genre-panel-pill-flex-container"
        onClick={(event) => handleGenrePillSelction(event)}
      >
        <RenderGenrePills genreObj={genreObj} />
        <div className="genre-pill genre-pill-selected arrow-icon-wrapper">
          <i className="fa fa-arrows-v" aria-hidden="true"></i>
          &nbsp;
          <select
            onChange={(event) => handleSelect(event)}
            name="sortBySelect"
            id="sortBySelect"
          >
            <option value="releaseDate">Sort By: Uploaded Date</option>
            <option value="viewCount">Sort By: View Count</option>
          </select>
        </div>
      </div>
      <div
        className="age-panel-flex-container"
        onClick={(event) => handleAgePillSelection(event)}
      >
        <RenderAgePills agePillsObj={agePillsObj} />
      </div>
    </>
  );
}
