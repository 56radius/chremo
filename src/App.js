import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import DashboardScreen from "./components/DashboardScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
