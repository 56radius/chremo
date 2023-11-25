import React from "react";
import { useNavigate } from "react-router-dom";
import ".././assets/css/style.css";
import logo from ".././assets/img/chremo.jpg";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html"> </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  style={{
                    borderRadius: "20px",
                    textDecoration: "none",
                    background: "blue",
                  }}
                  className="getstarted scrollto"
                  href="dashboard/login.php"
                >
                  {" "}
                  Register{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Logo and Login Form using Bootstrap Grid */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Left side - Logo */}
          <div className="col-md-6">
            <div className="card" style={{ padding: "70px" }}>
              <img src={logo} alt="logo" style={{ width: "100%" }} />
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="col-md-6">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5
                        style={{
                          fontWeight: "bold",
                        }}
                        className="card-title text-center pb-0 fs-4"
                      >
                        {" "}
                        CHREMO{" "}
                      </h5>
                      <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        {" "}
                        Security State{" "}
                      </p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          {" "}
                          Email{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          required
                        />
                        <div className="invalid-feedback">
                          {" "}
                          Please enter your email!{" "}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          style={{
                            backgroundColor: "#55a5f5",
                            borderColor: "#55a5f5",
                            width: "50%",
                          }}
                          className="btn btn-primary w-100"
                          name="login"
                          type="submit"
                          onClick={() => navigate("/dashboard")}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
