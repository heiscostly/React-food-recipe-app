import React from 'react';


function recipe ({tittle,calories,image}){
  return (
    <div>
    <h1>{tittle}</h1>
    <p> No of Calories: {calories}</p>
    <img src={image} alt="myimage" />

    </div>
  );
}
export default recipe;
