import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Index.js"
import "./style.css"

export default function App() {
  return (
    
      <div>
        <h1 className="title">Simple Multiple Page Website with Navigation Bar</h1>
        <Navbar/>
        <Outlet/>
      </div>
    
  );
}


