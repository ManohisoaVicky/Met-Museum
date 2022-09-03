import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import DetailedView from "./pages/DetailedView";
import About from "./pages/About";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";

import { useState, useEffect } from "react";

function App() {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // 10 favourite objects ...
    // fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(response.status);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Debouncing/Throttling
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=sculpture&hasImages=true"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const itemsWanted = data.objectIDs.slice(0, 10); // There may be none!
        Promise.all(
          itemsWanted.map(async (id) => {
            const resp = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );

            const item = await resp.json();
            return item;
          })
        ).then((data) => console.log(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detailed" element={<DetailedView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
