import { useState } from "react";
import "./Header.css";
import UploadVideoModal from "../UploadVideoModal/UploadVideoModal";
import XFlixLogo from "../../assets/XFlixLogo.svg";
import ProfilePhoto from "../../assets/ProfilePhoto.svg";
import SearchBar from "./SearchBar/SearchBar";

export default function Header({ setSearch }) {
  const [isModalShown, setToggleModal] = useState(false);

  const toggleModal = () => {
    setToggleModal(!isModalShown);
  };

  return (
    <div className="header-flex-container">
      <div className="header-logo">
        <img src={XFlixLogo} alt="XFlixLogo" />
      </div>
      <SearchBar setSearch={setSearch} />
      <button onClick={toggleModal} className="header-btn btn-upload">
        <i className="fa fa-upload upload-icon" aria-hidden="true"></i>
        &nbsp; Upload
      </button>
      <img className="header-profile-img" src={ProfilePhoto} alt="profile" />
      <UploadVideoModal
        isModalShown={isModalShown}
        closeModal={() => {
          setToggleModal(false);
        }}
      />
    </div>
  );
}
