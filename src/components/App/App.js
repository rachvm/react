import { Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Index.js"
import Home from "../Home/index.js"
import PageOne from "../Page1/index.js"
import PageTwo from "../Page2/index.js"
import "./style.css"


function App() {
  return (
    
      <div>
        <h1 className="title">Simple Multiple Page Website with Navigation Bar</h1>
        <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Page1" element={<PageOne />} />
              <Route path="/Page2" element={<PageTwo />} />
            </Routes>
          </div>
      </div>
    
  );
}

export default App;
