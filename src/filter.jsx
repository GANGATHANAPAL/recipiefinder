import { useState } from "react";
import { FaFilter } from "react-icons/fa";   // ✅ import filter icon

function Filter({ onChange }) {
  const [showFilters, setShowFilters] = useState(false); // toggle filters
  const [level, setLevel] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");

  function handleFilterChange(updatedFilters) {
    onChange({
      level: updatedFilters.level ?? level,
      rating: updatedFilters.rating ?? rating,
      time: updatedFilters.time ?? time,
    });
  }

  return (
    <div className="filter-box">
      {/* Filter Icon Button */}
      <button className="fun"
        type="button"
        onClick={() => setShowFilters((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        
        
        }}
      >
        <FaFilter size={25} />
      </button>

      {/* Show options only if clicked */}
      {showFilters && (
        <form >
          {/* Level Filter */}
          <label></label> 
          <select
            value={level} 
            onChange={(e) => {
              setLevel(e.target.value);
              handleFilterChange({ level: e.target.value });
            }} 
          >
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
<br/>
          {/* Rating Filter */}
          <label></label>
          <select
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              handleFilterChange({ rating: e.target.value });
            }}
          >
            <option value="">All </option>
            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
            <option value="4">⭐⭐⭐⭐ (4+)</option>
            <option value="3">⭐⭐⭐ (3+)</option>
          </select>
<br/>          {/* Time Filter */}
          <label></label>
          <select
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              handleFilterChange({ time: e.target.value });
            }}
          >
            <option value="">All Times</option>
            <option value="15">≤ 15 min</option>
            <option value="30">≤ 30 min</option>
            <option value="60">≤ 60 min</option>
          </select>
        </form>
      )}
    </div>
  );
}

export default Filter;
