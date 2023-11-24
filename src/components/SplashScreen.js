import React, { useEffect, useState } from "react";
import ".././assets/css/SplashScreen.css";

//import photo files
import logo from ".././assets/img/chremo.jpg";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default SplashScreen;
