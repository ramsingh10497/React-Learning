import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/RoutingExample/Layout.jsx";
import Home from "./components/RoutingExample/Home.jsx";
import Contact from "./components/RoutingExample/Contact.jsx";
import About from "./components/RoutingExample/About.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
