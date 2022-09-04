import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/homepage";
import About from "./About/about";
// import Services from "./Services/services";
// import Projects from "./Project/projects";
// import Contact from "./Contact/contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/services" element={<Services />} /> */}
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/contact-us" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
