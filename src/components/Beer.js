import React from "react"
import BeerIngredient from "./BeerIngredient";


function Beer({beer}) {
    return (
      <div>
        <h3>{beer.name}</h3>
        <p>Brand: {beer.brand}</p>
        <p>Type: {beer.type}</p>
        <p>Price: {beer.price}</p>
        <p>Alcohol: {beer.alcohol}</p>
        <p>Id: {beer.id}</p>

        <h4>Ingredients</h4>
        {beer?.ingredients.map((ingredient, i) => 
        <BeerIngredient ingredient={ingredient} key={i}/>)} 
      
      </div>
    );
  }
  
  export default Beer;