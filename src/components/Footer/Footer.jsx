import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img
            src="https://res.cloudinary.com/dlmljdft1/image/upload/v1720721792/logo_blanco_ghza2h.png"
            alt="Logo"
            className="footer-logo"
          />
        </div>
        <div className="about-section">
          <h3>Agustín Ruiz</h3>
          <p>
            Soy un editor de videos apasionado por capturar y transformar
            momentos en historias visuales impactantes. Trabajo para darle vida
            a tus ideas a través del poder del video.
          </p>
        </div>
        <div className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                HUB
              </Link>
            </li>
            <li>
              <Link to="/trabajos" className="footer-link">
                TRABAJOS
              </Link>
            </li>
            <li>
              <Link to="/contactame" className="footer-link">
                CONTACTAME
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-media-section">
          <h4>Sígueme</h4>
          <div className="icons">
            <a
              href="https://www.instagram.com/agvstin30/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="redes" />
            </a>
            <a
              href="https://x.com/Agvstin30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="redes" />
            </a>
            <a
              href="https://www.linkedin.com/in/agustin-ruiz-318b432b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="redes" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Agustín Ruiz. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
