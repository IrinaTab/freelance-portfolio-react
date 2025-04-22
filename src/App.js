import "./styles/style.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar.js";

import Home from "./pages/Home.js";

import Projects from "./pages/Projects.js";
import Aboutme from "./pages/Aboutme.js";
import Myskills from "./pages/Myskills.js";

import ScrollToTop from "./utils/ScrollToTop.js";


function App() {
  return (
    <div className="App center">
      <Router>

        <ScrollToTop />

        <Navbar />

          <Routes>
            
            <Route path="/freelance-portfolio-react" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/myskills" element={<Myskills />} />
            <Route path="/projects" element={<Projects />} />


          </Routes>

      </Router>
        
    </div>
  );
}

export default App;
