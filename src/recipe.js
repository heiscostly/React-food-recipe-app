import React from 'react';
import style from "./recipe.module.css"


function recipe({ tittle, calories, image, ingredients }) {
  return (
    <div className={style.recip}>
      <h1 style={{ display: "flex", color: "black", fontSize: "1rem", padding: "10px" }}>{tittle}</h1>
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", listStyle: "none" }}>
        <h2>INGREDIENTS</h2>
        {ingredients.map(({ text }, index) => (
          <li key={index.toString()}>{text}</li>
        ))}
      </div>
      <h2>CALORIES</h2>
      <p>{calories}</p>
      <img style={{ width: "40%", borderRadius: "10px", height: "" }} src={image} alt="myimage" />

    </div>
  );
}
export default recipe;
