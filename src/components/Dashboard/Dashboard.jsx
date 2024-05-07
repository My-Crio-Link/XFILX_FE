import "./Dashboard.css";

import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";

dayjs.extend(relativeTime);

export default function Dashboard() {
  const { results } = useSelector((state) => state.results);
  const navigate = useNavigate();

  if (results.length === 0) {
    return (
      <div className="no-search-txt">
        No Search is found :( . Please try searching some other movies.
      </div>
    );
  } else {
    return (
      <div className="dashboard-grid">
        {results &&
          results.map((video) => {
            const timeAgo = dayjs().to(dayjs(video.releaseDate));
            return (
              <div
                onClick={() => navigate(`/video/${video["_id"]}`)}
                key={video["_id"]}
                id={video["_id"]}
                className="dashboard-grid-item"
              >
                <div className="video-card">
                  <img
                    className="video-img"
                    src={video.previewImage}
                    alt={video.title}
                  />
                  <p className="video-title">{video.title}</p>
                  <p className="video-time">{timeAgo}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
