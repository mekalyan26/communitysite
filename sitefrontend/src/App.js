import { Routes, Route } from "react-router-dom";

// Custom Imports
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import HomePage from "./components/pages/Home/HomePage";
import Events from "./components/pages/Events/Events";
import AboutUsContent from "./components/pages/AboutUs/AboutUsContent";
import GalleryCard from "./components/pages/Gallery/GalleryCard";
import Register from "./components/pages/Register/Registeration";

// Constants
import ROUTES from "./constants/Routes";

// Style file
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="kwgc-app">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LANDING} element={<HomePage />} />
          <Route path={ROUTES.EVENTS} element={<Events />} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUsContent />} />
          <Route path={ROUTES.GALLERY} element={<GalleryCard />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
