import React from "react";
import "./displayStyle.css";

function Display(props) {
  return (
    <div className="card shadow-lg mt-5">
      <div className="row cardTop">
        <div className="col-9">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="col-3">
          <button id={props.id} className="btn btn-warning btn-sm mr-3 shadow">View</button>
          <button id={props.id} name={props.name} onClick={props.saveBook} className="btn btn-info btn-sm shadow">Save</button>
        </div>
      </div>
      <div className="row">
        <h5 className="col-12 sub">{props.subtitle}</h5>
      </div>
      <div className="row">
        <h5 className="col-12 sub">{props.author}</h5>
      </div>
      <div className="row">
        <div className="card-body">
          <div className="col-3 image">
            <img className="" src={props.url} alt="" />
          </div>
          <div className="col-9 sum">
            <p>{props.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
