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
        <Route path="/about" element={<About />}>
          <Route path="" element={<h4>About Component Home Page</h4>} />
          <Route path="student" element={<h4>Studnet Nested Component</h4>} />
          <Route path="teacher" element={<h4>Teacher Nested Component</h4>} />
          <Route path="*" element={<h4>404 Page Note Found</h4>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/*" element={<h2>Multiple Match</h2>} />
        <Route path="/contact/:contactId" element={<h2>Dynamic Match</h2>} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
