import React from "react";

import ".././assets/css/style.css";

import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function LoginScreen() {
    return(
       <div>
        <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">  </a></h1>
      

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="getstarted scrollto" href="dashboard/login.php"> Register </a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
       </div>
    );
}

export default LoginScreen;