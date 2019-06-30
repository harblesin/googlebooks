import React from "react";

const quickStyle = {
    textAlign: 'left'
};

function Results (props) {
    return (
        <div className="shadow-lg p-5 mt-5">
        <h2 style={quickStyle}>Results</h2>{props.children}</div>
    )
}

export default Results;