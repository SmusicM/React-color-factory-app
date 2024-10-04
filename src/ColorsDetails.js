import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function ColorsDetails({ colors }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const [color, setColors] = useState(null);
  useEffect(() => {
    const findColor = colors.find(
      (color) => color.name.toLowerCase() === name.toLowerCase()
     
    );
    console.log(findColor)
    setColors(findColor);
  }, [name, colors]);
  console.log(color)
  if (!color) {
    return <p>Color: {name} not found , sorry...</p>;
  }
  return (
    <div className="Color-cont" style={{ backgroundColor: color.value }}>
      <h2>THIS IS {color.name}</h2>
      <h2>ISNT IT BEAUTIFUL</h2>
      <button onClick={() => navigate(-1)}>GO BACK!!</button>
    </div>
  );
}
export default ColorsDetails;
