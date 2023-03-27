import React from "react";
import BaseLayout from "./components/baselayout/BaseLayout";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/aboutpage/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
