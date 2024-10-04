import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import ColorsList from "./ColorsList";
import ColorsForm from "./ColorsForm";
import ColorsDetails from "./ColorsDetails";
import { v4 as uuid } from "uuid";
const defaultColors = [
  { id: uuid(), name: "red", value: "#FF0000" },
  { id: uuid(), name: "green", value: "#00ff00" },
];
function App() {
  
  const [colors, setColors] = useState(defaultColors);

  const addColor = (newColor) => {
    //.log("color being added", newColor);

    setColors((excolors) => [ newColor,...excolors]);
    console.log("updated", colors);
  };
  useEffect(() => {
    console.log("updated", colors);
  }, [colors]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/colors"
            element={<ColorsList colors={colors} />}
          ></Route>

          <Route
            path="/colors/new"
            element={<ColorsForm addColor={addColor} />}
          />
          <Route
            path="/colors/:name"
            element={<ColorsDetails colors={colors} />}
          />
          <Route path="*"element={<Navigate to="/colors"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
