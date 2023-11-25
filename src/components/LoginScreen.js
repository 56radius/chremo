import React from "react";

import ".././assets/css/style.css";

//importing photo files
import logo from ".././assets/img/chremo.jpg";

import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function LoginScreen() {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html"> </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="getstarted scrollto" href="dashboard/login.php">
                  {" "}
                  Register{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* left side locating the picture */}
      <div>
        <img src={logo} alt="logo" style={{ width: "30%", height: "30%" }} />
      </div>

      {/* The login forms */}
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex justify-content-center py-4"></div>

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5
                        style={{ fontWeight: "bold" }}
                        class="card-title text-center pb-0 fs-4"
                      >
                        {" "}
                        CHREMO{" "}
                      </h5>
                      <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        {" "}
                        Security State{" "}
                      </p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="email" class="form-label">
                          {" "}
                          Email{" "}
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="email"
                          id="email"
                          required
                        />
                        <div class="invalid-feedback">
                          {" "}
                          Please enter your email!{" "}
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="yourPassword"
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div class="col-12">
                        <button
                          style={{
                            backgroundColor: "lightblue",
                            borderColor: "lightblue",
                            width: "50%",
                          }}
                          class="btn btn-primary w-100"
                          name="login"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginScreen;
