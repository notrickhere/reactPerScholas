import React from "react";

function GameDisplay({ symbol }) {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <div>
        <h1>{symbol.gameName}</h1>
        <h2>
          Rating: {symbol.gameRating}/5 average from {symbol.gameRatingCount}{" "}
          people!
        </h2>
        <img src={symbol.gameImage} alt={""} />
      </div>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No game to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  // return symbol && symbol.length > 0 ? loaded() : loading();
  return symbol ? loaded() : loading();
}

export default GameDisplay;
