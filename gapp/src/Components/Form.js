import React from "react";
import "./formStyle.css";

function Form(props) {
  return (
    <div className="form shadow-lg rounded p-5">
      <div className="row">
        <h2 className="title">Book Search</h2>
      </div>
      <div className="row">
        <label htmlFor="search">Book</label>
      </div>
      <div className="row">
        <input id="search" placeholder={props.placeholder} />
      </div>
      <div className="row">
        <div className="col-10" />
        <div className="col-2">
          <button
            className="btn btn-sm btn-danger mt-2"
            onClick={props.handleFormSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
