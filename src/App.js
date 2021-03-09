import React, { useState, useEffect } from "react";
import "./App.css";
import { Recipe } from "./Recipe";

const App = () => {
  const APP_ID = "30d2cea4";
  const APP_KEY = "46666b757c73f2cf64d838ad0f6eb57f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(2)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cautions={recipe.recipe.cautions}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
