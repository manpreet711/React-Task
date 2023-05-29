import React from "react";

const MyForm = () => {
  return (
    <div className="container">
      <div className="my-4">
        <label className="mx-2">Rooms:</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="my-4">
        <label className="mx-2">FirstName:- </label>
        <input type="text" placeholder="First Name"></input>
        <label className="mx-2">LastName:- </label>
        <input type="text" placeholder="Last Name"></input>
        <label className="mx-2">Adult:</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label className="mx-2">Children:</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default MyForm;
