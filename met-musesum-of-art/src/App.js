import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import DetailedView from "./pages/DetailedView";
import About from "./pages/About";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Library from "./Library";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="" element={<About />} />
        <Route path="" element={<Library />} />
        <Route path="" element={<Favorites />} />
        <Route path="" element={<DetailedView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
