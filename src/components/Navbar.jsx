import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const menuIcon = document.querySelector(".MenuIcon");
      if (window.innerWidth > 768) {
        menuIcon.style.display = "none";
      } else {
        menuIcon.style.display = "block";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="container-navbar">
        <MenuIcon className="MenuIcon" onClick={toggleMenu} />
        <div className="container-navbar-img-text">
          <ul className={`container-tags ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="portafolio-text">
                HUB
              </Link>
            </li>
            <li>
              <a href="#trabajos" className="portafolio-text">
                TRABAJOS
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Agvstin30"
                className="portafolio-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACTAME
              </a>
            </li>
          </ul>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dlmljdft1/image/upload/v1720721792/logo_blanco_ghza2h.png"
              alt="Logo"
              className="img-logo"
            />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
