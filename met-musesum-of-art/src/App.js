import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import DetailedView from "./pages/DetailedView";
import About from "./pages/About";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";
import Footer from "./components/Footer";
import data from "./data.js";

import { useState, useEffect } from "react";

function App() {
  const [artwork, setArtwork] = useState([]);
  const [staticData, setStaticData] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [load, setLoad] = useState(10);

  useEffect(() => {
    // Old Fetch Request
    // fetch(
    //   `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}medium=${filter.join(
    //     "|"
    //   )}&hasImages=true`
    // );

    // New Fetch Request
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=${filter.join(
        "|"
      )}&hasImages=true&q=${search || "*"}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const itemsWanted = data.objectIDs.slice(load - 10, load - 1); // There may be none!
        console.log(itemsWanted);
        Promise.all(
          itemsWanted.map(async (id) => {
            const resp = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );
            const item = await resp.json();
            return item;
          })
        ).then((data) => {
          setArtwork([...artwork, ...data]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, load]);

  return (
    <>
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
                setArtwork={setArtwork}
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
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
