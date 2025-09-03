
function Remage({ image, name ,level,cookingTime,rating}) {
  return (
    <div className="remage">
     
        <img className="image" src={image} alt={name} />
        <div className="content">
               <h3>{name}</h3>
               <div className="level">
                 <p className="l">{level}</p>
                 <p className="c">{cookingTime}</p>
                  <p className="r">⭐{rating}/5</p>
                
               </div>
               
         
        
        </div>
        
        
         
      
    

  

    
    </div>
  );
}

export default Remage;

