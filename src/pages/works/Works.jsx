import "./Works.css";
import ClientesContainer from "../../components/Clientes/ClientesContainer";
import { VideosContainer } from "../../components/videos/VideosContainer";
import Footer from "../../components/Footer/Footer";

export const Works = () => {
  return (
    <div>
      <div className="works-container-text reveal">
        <h1 className="title-works">HOLA SOY AGVSTIN30!</h1>
        <p className="text-works">
          Trabajé más de tres años como editor de videos para diferentes
          creadores de contenido y empresas, en donde me perfeccioné en una
          variedad muy grande con respecto al contenido gracias a mi fácil
          adaptamiento para ello.
        </p>
      </div>
      <div className="container-youtubers reveal">
        <h2 className="title-client">#CLIENTES</h2>
        <ClientesContainer />
      </div>

      <div id="trabajos" className="reveal">
        <h2 className="title-videos">MIS TRABAJOS</h2>
        <h3 className="text-trabajos">
          Te dejo aqui los mejores videos editados por mi!
        </h3>
        <VideosContainer />
      </div>

      <Footer />
    </div>
  );
};
