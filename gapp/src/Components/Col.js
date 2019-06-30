import React from "react";

function Col (props) {
    return (
        <div className={props.width}>{props.children}</div>
    )
}

export default Col;