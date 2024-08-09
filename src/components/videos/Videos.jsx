import ReactPlayer from "react-player";
import "./videos.css";
import VerifiedIcon from "@mui/icons-material/Verified";

export const Videos = ({ videos }) => {
  return (
    <div className="container-main-videos">
      {videos.map((elemento) => {
        return (
          <div key={elemento.id} className="container-videos">
            <ReactPlayer
              url={elemento.video}
              controls={true}
              className="react-player"
            />
            <div className="container-videos-text">
              <img
                src={elemento.img}
                alt=""
                width={"60px"}
                className="img-videos"
              />
              <h2 className="text-videos">
                {elemento.yt}
                <VerifiedIcon className="veri-name" />
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
