import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import { useState } from "react";
import getData from "../dummy_data";
import GenrePanel from "../components/GenrePanel/GenrePanel";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");

  const setSearch = (search) => {
    setSearchData(search);
  };

  return (
    <>
      <Header setSearch={setSearch} />
      <GenrePanel />
      <Dashboard data={getData()} searchData={searchData} />
    </>
  );
};

export default HomePage;
