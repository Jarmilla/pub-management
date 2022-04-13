import React, {useState} from "react"
import BeerIngredient from "./BeerIngredient";


function Beer({beer}) {
const [ingrIsShown, setIngrIsShown] = useState(false)

    return (
      <div className="beer-container">
        <h3>{beer.name}</h3>
        <p>Brand: {beer.brand}</p>
        <p>Type: {beer.type}</p>
        <p>Price: {beer.price}</p>
        <p>Alcohol: {beer.alcohol}</p>
        <p>Id: {beer.id}</p>

        <div>
          <h4>Ingredients</h4>
          <button onClick={()=> setIngrIsShown(!ingrIsShown)}>{ingrIsShown ? "Show less" : "Show more"}</button>
        </div>

        {ingrIsShown ?
          <div>
            {beer?.ingredients.map((ingredient, i) => 
            <BeerIngredient ingredient={ingredient} key={i}/>)} 
          </div>
          : ""
        }
      
      </div>
    );
  }
  
  export default Beer;