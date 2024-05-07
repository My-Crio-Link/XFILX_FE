import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { searchFailure, searchSuccess } from "../../../store/results";
import getData from "../../../dummy_data";

export default function SearchBar() {
  const dispatch = useDispatch();

  const dataArr = getData();

  const filterSearch = (value) => {
    const filteredArr = dataArr.filter((video) => {
      return video.title.toLowerCase().includes(value.toLowerCase());
    });
    if (filteredArr.length !== 0) {
      dispatch(searchSuccess(filteredArr));
    } else {
      dispatch(searchFailure());
    }
  };
  return (
    <div className="search-bar-wrapper">
      <input
        onChange={(event) => filterSearch(event.target.value)}
        className="search-input"
        type="search"
        placeholder="Search"
      />
      <div className="icon">
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  );
}
