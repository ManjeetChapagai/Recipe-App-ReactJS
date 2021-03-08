import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients, cautions }) => {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text} </li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="" />
      <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
        Calories: {calories}
      </p>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          lineHeight: "15px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Cautions:</p>
        <ul>
          {cautions.map((caution) => (
            <li> {caution} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
