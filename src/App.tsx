import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AppLayout from "./Layouts/AppLayout";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Detail from "./Pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/:id" element={<Detail />} />

            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
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
