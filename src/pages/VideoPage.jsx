import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dashboard from "../components/Dashboard/Dashboard";
import XFlixLogo from "../assets/XFlixLogo.svg";
import { Link, useParams } from "react-router-dom";
import "./VideoPage.css";
import { getVideoDetails } from "../dummy_data";
import Errorpage from "./ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { dislikeInc, likeInc, setState } from "../store/rating";
// import { setLocalStorage } from "../store/localStorage";
import { useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";

dayjs.extend(relativeTime);

export default function VideoPage() {
  const { id } = useParams();
  const [videoDetails] = getVideoDetails(id);
  const { votes } = useSelector((state) => state.rating);
  const dispatch = useDispatch();

  useScrollToTop();

  useEffect(() => {
    dispatch(setState(id));
  }, [dispatch, id]);

  // setLocalStorage(id, videoDetails);

  if (!videoDetails) {
    return <Errorpage />;
  }

  const timeAgo = dayjs().to(dayjs(videoDetails.releaseDate));

  return (
    <>
      <Link to="/">
        <img
          className="video-page-brand-logo"
          src={XFlixLogo}
          alt="XFlixLogo"
        />
      </Link>
      <div className="video-page-flex-container">
        <iframe
          title={videoDetails.title}
          allow="fullscreen"
          src={`https://www.${videoDetails.videoLink}`}
        ></iframe>
        <div className="video-info-container">
          <div>
            <p className="main-video-title">{videoDetails.title}</p>
            <p className="video-stats">
              {videoDetails.contentRating} &nbsp;{" "}
              <span className="video-dot"></span> &nbsp;{" "}
              <span className="video-time-period">{timeAgo}</span>{" "}
            </p>
          </div>
          <div className="video-btn-wrapper">
            <button
              className="btn btn-like"
              onClick={() => dispatch(likeInc(id))}
            >
              <i className="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp;{" "}
              {Number(votes.upVotes)}
            </button>
            <button
              className="btn btn-unlike"
              onClick={() => dispatch(dislikeInc(id))}
            >
              <i className="fa fa-thumbs-down" aria-hidden="true"></i> &nbsp;
              {votes.downVotes}
            </button>
          </div>
        </div>
        <hr className="hr-line-after-main-video" />
        <div className="dashboard-wrapper">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
