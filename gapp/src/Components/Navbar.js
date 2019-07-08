import React from "react";
import "./navbarStyle.css";

function Navbar () {
    return (
        <div className="navbar navbar-expand-lg shadow mb-4">
            <img className="navbar-brand" src="https://odcspress.org/wp-content/uploads/2017/01/Stack-Books-Copy.jpg" alt=""></img>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                
                    <a className="nav-item nav-link" href="/">Search   </a>

                    <span>|</span>
                
                    <a className="nav-item nav-link" href="/books">   My Books</a>
                
                </div>
            </div>
           
            
        </div>

    )
}

export default Navbar;