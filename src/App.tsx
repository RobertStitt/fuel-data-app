import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AppLayout from "./Layouts/AppLayout";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import SpeciesGallery from "./Pages/SpeciesGallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/species-gallery" element={<SpeciesGallery />} />
            <Route index path="/favorites" element={<Favorites />} />
            <Route index path="/about" element={<About />} />
          </Route>

          {/* Auth Layout */}
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}

          {/* Fallback Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
