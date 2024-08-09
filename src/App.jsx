import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Aboutme } from "./pages/aboutme/Aboutme";
import { Navbar } from "./components/Navbar";
import { Works } from "./pages/works/Works";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aboutme />}></Route>
          <Route element={<Navbar />}>
            <Route path="/Portafolio" element={<Works />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
