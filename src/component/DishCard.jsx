 function DishCard({ dish }) {
  return (
    <div className="dish-card" >
      <img src={dish.image} alt={dish.name} width="200" />
      <h2>{dish.name}</h2>
      <h4>Steps to Prepare:</h4>
      <ol>
        {dish.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
export default DishCard;
