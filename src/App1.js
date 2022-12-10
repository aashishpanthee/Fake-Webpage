import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const App1 = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={<App />}
        />
        <Route
          path='/footer'
          element={<Footer />}
        />
        <Route
          path='/home'
          element={<App />}
        />
      </Routes>
    </div>
  );
};

export default App1;
