import React from "react"


function SearchSection() {
    return (
      <div>
        <input type="text" placeholder="Search for"/>
        <div>
          <button>Group By Brands</button>
          <button>Filter By Type</button>
          <button>Sort By WaterRatio</button>
          <button>Rounded Price</button>
        </div>
      </div>
    );
  }
  
  export default SearchSection;