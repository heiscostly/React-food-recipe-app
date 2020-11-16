import React from 'react';
import style from "./recipe.module.css"


function recipe ({tittle,calories,image, ingredients}){
  return (
    <div className={style.recip}>
    <h1>{tittle}</h1>
    {ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
    ))}
    <p> No of Calories: {calories}</p>
    <img src={image} alt="myimage" />

    </div>
  );
}
export default recipe;
