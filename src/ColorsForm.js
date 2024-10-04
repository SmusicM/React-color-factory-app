import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
function ColorsForm({ addColor }) {
  const INITIAL_STATE = { name: "", value: "#000000" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (formData.name.trim() && formData.value) {
      const createdColor = { ...formData, id: uuid() };
      addColor(createdColor);
      setFormData(INITIAL_STATE);
      navigate(`/colors/${createdColor.name.toLowerCase()}`);
    } else {
      alert("fill out form ,no data");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name of color"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="value">Color Value</label>
        <input
          id="value"
          type="color"
          name="value"
          placeholder="Value of color"
          value={formData.value}
          onChange={handleChange}
        ></input>
        <button type="submit">Add color</button>
      </form>
      <button onClick={() => navigate(-1)}>GO BACK!!</button>
    </div>
  );
}
export default ColorsForm;
