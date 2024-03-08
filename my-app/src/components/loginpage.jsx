import React from "react";
import "./loginpage.css";
function Loginpage() {
  return (
    <div className="maincontainer">
      
      <div class="navdiv">
            <nav class="navbar navbar-expand-lg fixed-top px-4">
                <a class="navbar-brand" href="index.html">
                    <img src="Edupoly.png" height="30px" alt="edupolyLogo" />
                </a>

                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav" type="none">
                        <li class="nav-item active">
                            <a class="nav-link active" aria-current="page" href="index.html">
                                <b class="nav-b btn btn-primary">Register</b>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="filter.html">
                                <b class="nav-b btn btn-primary">All Enquiries</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    </div>
  );
}

export default Loginpage;
