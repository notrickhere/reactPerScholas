import { useState, useEffect } from "react";
import GameDisplay from "./components/GameDisplay";
import Form from "./components/Form";

import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0);

  const apiKey = "606cd48afa294e25804bcb3af895655c";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cb23bcf2b3mshd6f3e3a33b21fe8p110837jsn8f11dd1525fb",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };
  // state to hold game data
  const [games, setGames] = useState(null);
  // fetch game
  const getGame = async (pageNumber) => {
    const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${apiKey}&page=${pageNumber}`;
    try {
      // make fetch request and store response
      const response = await fetch(url, options);
      // Parse JSON response into a javascript object
      const data = await response.json();

      //set the game state to the game
      console.log(data.results);
      setGames({
        gameName: data.results[0].name,
        gameImage: data.results[0].background_image,
        gameRating: data.results[0].rating,
        gameRatingCount: data.results[0].ratings_count,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getGame(2);
  }, []);

  return (
    <div className="App">
      <Form gamesearch={getGame} />
      <GameDisplay symbol={games} />
    </div>
  );
}

export default App;
