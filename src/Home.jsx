import { useState } from "react";



import Recipie from "./recepie";
import Filter from "./filter";

function Home({username}){
    
    const [filters, setFilters] = useState({
    search: "",
    level: "",
    rating: "",
    time: ""
  });
    function handlesearchchange(e){
           const value = e.target.value;
    setFilters((prev) => ({ ...prev, search: value }));
    }
    return(
        <div className="Home">
            <h4 className="well"> Hi {username}!<br/>Find Your Favorite Recipie 🍲</h4>
   
            <form className="form1">
                <label></label> 
                <input className="inp"
                type='search'
                value={ filters.search}
                placeholder="  🔍Search here"
                onChange={handlesearchchange}  
                  

                />
                 <Filter className="filter" onChange={setFilters}  />
                

                
            </form>
           
             
          <Recipie  search={filters.search}
        levelFilter={filters.level}
        ratingFilter={filters.rating}
        timeFilter={filters.time}/>
         
          
          
        </div>
    
    )
}
export default Home;