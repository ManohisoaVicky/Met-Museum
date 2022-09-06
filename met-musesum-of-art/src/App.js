import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import DetailedView from "./pages/DetailedView";
import About from "./pages/About";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";
import data from "./data.js";

import { useState, useEffect } from "react";

function App() {
  const [artwork, setArtwork] = useState(null);
  const [staticData, setStaticData] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [load, setLoad] = useState(21);

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
    console.log(filter);
    const filterJoined = filter.join("|");
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}&medium=${filterJoined}&hasImages=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const itemsWanted = data.objectIDs.slice(0, load); // There may be none!
        Promise.all(
          itemsWanted.map(async (id) => {
            const resp = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );

            const item = await resp.json();
            return item;
          })
        ).then((data) => {
          setArtwork(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, filter, load]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/library"
          element={
            <Library
              artwork={artwork}
              favorites={favorites}
              setFavorites={setFavorites}
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
              reviews={reviews}
              setReviews={setReviews}
              load={load}
              setLoad={setLoad}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              staticData={staticData}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/detailed/:id"
          element={
            <DetailedView
              reviews={reviews}
              setReviews={setReviews}
              art={artwork}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
