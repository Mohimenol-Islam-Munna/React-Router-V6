import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Settings from "./Components/Settings";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* header  */}
      <Header />

      {/* navigation   */}
      <Navigation />

      {/* main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
