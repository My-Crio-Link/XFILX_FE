import { useState } from "react";
import "./UploadVideoModal.css";

export default function UploadVideoModal({ isModalShown, closeModal }) {
  const [videoFormData, setVideoFormData] = useState({
    videoLink: "",
    title: "",
    previewImage: "",
    contentRating: "",
    releaseDate: "",
    ageDropdown: "",
    genreDropdown: "",
  });

  function setFormData(event) {
    setVideoFormData({
      ...videoFormData,
      [event.target.name]: event.target.value,
    });
  }

  function validateFormData() {
    let errorMsg = "";
    let isFormValid = false;
    const {
      videoLink,
      previewImage,
      title,
      genreDropdown,
      ageDropdown,
      releaseDate,
    } = videoFormData;
    let youtubeEmbedVideoLinkFormat = /youtube.com\/embed\/[A-z0-9-]{11}/gi;
    if (videoLink === "") {
      errorMsg += "VideoLink should not be empty.\n";
    } else if (!youtubeEmbedVideoLinkFormat.test(videoLink)) {
      errorMsg += "VideoLink is not in correct youtube embed format.\n";
    }
    if (previewImage === "") {
      errorMsg += "PreviewImage should not be empty.\n";
    }
    if (title === "") {
      errorMsg += "Title should not be empty.\n";
    }
    if (genreDropdown === "") {
      errorMsg += "GenreDropdown should not be empty.\n";
    }
    if (releaseDate === "") {
      errorMsg += "ReleaseDate should not be empty. \n";
    }
    if (ageDropdown === "") {
      errorMsg += "AgeDropdown should not be empty. \n";
    }
    if (errorMsg === "") {
      isFormValid = true;
      return isFormValid;
    }
    alert(errorMsg);
    return isFormValid;
  }

  function submitFormData(event) {
    event.preventDefault();
    const isFormValid = validateFormData();
    if (isFormValid) {
      alert("Video Posted Successfully!");
      closeModal();
    }
  }

  return isModalShown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        closeModal();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="modal-title">
          <div>Upload Video</div>
          <div
            onClick={() => {
              setVideoFormData({
                videoLink: "",
                title: "",
                previewImage: "",
                contentRating: "",
                releaseDate: "",
                ageDropdown: "",
                genreDropdown: "",
              });
              closeModal();
            }}
            className="close-icon-wrapper"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <form onSubmit={(event) => submitFormData(event)}>
          <input
            onChange={(event) => setFormData(event)}
            type="text"
            value={videoFormData.videoLink}
            placeholder="Video Link"
            name="videoLink"
          />
          <p>This link will be used to derive the video</p>
          <input
            type="text"
            placeholder="Thumbnail Image Link"
            onChange={(event) => setFormData(event)}
            value={videoFormData.previewImage}
            name="previewImage"
          />
          <p>This link will be used to derive the video</p>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setFormData(event)}
            value={videoFormData.title}
            name="title"
          />
          <p>The title will be the representative text for video</p>
          <select
            name="genreDropdown"
            onChange={(event) => setFormData(event)}
            id="genre-modal-dropdown"
            defaultValue="Genre"
          >
            <option value="Genre" disabled>
              Genre
            </option>
            <option value="Education">Education</option>
            <option value="Sports">Sports</option>
            <option value="Comedy">Comedy</option>
            <option value="Lifestyle">LifeStyle</option>
          </select>
          <p>Genre will help in categorizing your videos</p>
          <select
            name="ageDropdown"
            onChange={(event) => setFormData(event)}
            id="age-modal-dropdown"
            defaultValue="Suitable age group for the clip"
          >
            <option value="Suitable age group for the clip" disabled>
              Suitable age group for the clip
            </option>
            <option value="7+">7+</option>
            <option value="12+">12+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
          </select>
          <p>This will be used to filter videos on age group suitability</p>
          <input
            type="date"
            name="releaseDate"
            data-placeholder="Release Date"
            onChange={(event) => setFormData(event)}
            value={videoFormData.releaseDate}
          />
          <p>This will be used to sort videos</p>
          <div className="btn-flex-container">
            <button
              type="submit"
              value="submit"
              className="btn-modal btn-modal-upload"
            >
              upload video
            </button>
            <button
              onClick={() => {
                setVideoFormData({
                  videoLink: "",
                  title: "",
                  previewImage: "",
                  contentRating: "",
                  releaseDate: "",
                  ageDropdown: "",
                  genreDropdown: "",
                });
                closeModal();
              }}
              className="btn-modal btn-modal-cancel"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
}
