import "./Aboutme.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Aboutme = () => {
  return (
    <div className="container-main">
      <div className="container-main-a">
        <img
          src="https://res.cloudinary.com/dlmljdft1/image/upload/v1720721792/logo_blanco_ghza2h.png"
          alt=""
          className="img-main"
        />

        <h1>Agvstin30 Portafolio</h1>
        <h3 className="sub-main">Video Editor & Front End Developer</h3>
      </div>
      <Link to="/Portafolio">
        {" "}
        <button className="button-porta">Mi Portafolio</button>
      </Link>

      <div className="icon-redes">
        <a href="https://www.instagram.com/agvstin30/" target="_blank">
          <InstagramIcon className="redes" />
        </a>
        <a href="https://x.com/Agvstin30">
          <XIcon className="redes" />
        </a>
        <a
          href="https://www.linkedin.com/in/agustin-ruiz-318b432b4/"
          target="_blank"
        >
          <LinkedInIcon className="redes" />
        </a>
      </div>
    </div>
  );
};
