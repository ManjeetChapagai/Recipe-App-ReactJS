import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "30d2cea4";
  const APP_KEY = "46666b757c73f2cf64d838ad0f6eb57f";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="form">
        <input className="search-form" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
