import React from "react";
import { Link } from "react-router-dom";
function ColorsList({ colors }) {
  console.log("colors at colorsList.js", colors);
  return (
    <div>
      <div>
        <h1>React Routes Colors</h1>

        <Link to={"/colors/new/"}>ADD A NEW COLOR HERE</Link>
      </div>

      <h2>Please Select a Color:</h2>
      <ul>
        {colors.map((color) => (
          <li className="Color-li" key={color.id}>
            <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ColorsList;
