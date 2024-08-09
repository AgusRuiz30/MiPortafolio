import { useState } from "react";
import "./clientes.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Clientes = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const itemsToShow = 3;

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsToShow >= items.length ? 0 : prevIndex + itemsToShow
      );
      setAnimate(false);
    }, 300);
  };

  const handlePrev = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - itemsToShow < 0
          ? items.length - itemsToShow
          : prevIndex - itemsToShow
      );
      setAnimate(false);
    }, 300);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="container-main-clientes">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className={`carousel-items ${animate ? "fade" : ""}`}>
        {visibleItems.map((elemento) => (
          <div key={elemento.id} className="container-clientes">
            <img src={elemento.img} alt="" className="img-clientes" />
            <div className="container-text">
              <h2 className="text-name">
                {elemento.name}
                <VerifiedIcon className="veri-name" />
              </h2>
              <h4 className="text-desc">{elemento.description}</h4>
              <h2 className="text-subs">
                {elemento.subs}{" "}
                <img src={elemento.logo} alt="" width={"30px"} />
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Clientes;
