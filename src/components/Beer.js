import React from "react"


function Beer() {
    return (
      <div>
        <h3>Name: </h3>
        <p>Brand: </p>
        <p>Type: </p>
        <p>Price: </p>
        <p>Alcohol: </p>
        <p>Id: </p>

        <div>
            <h4>Ingridients</h4>
            {/* map through */}
            <p>Name:</p>
            <p>Ratio:</p>
        </div>

      </div>
    );
  }
  
  export default Beer;