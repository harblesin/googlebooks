import React from "react";
import "./displayStyle.css"

function Display (props) {
    return (
        <div className="card mt-5">
            <div className="row">
                <div className="card-title">
                    yes
                </div>
                <button className="btn btn-warning">View</button>
                <button className="btn btn-info">Save</button>
            </div>
            <div className="row">
                <img className="" src="" alt="" />
            </div>
        </div>
    )
}

export default Display;