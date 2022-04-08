import React from "react"


function BeerIngredient({ingredient}) {
    return (
        <div>
            <p>Name: {ingredient.name}</p>
            <p>Ratio: {ingredient.ratio}</p>
        </div> 
    );
  }
  
  export default BeerIngredient;