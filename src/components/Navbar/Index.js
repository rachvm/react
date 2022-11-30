import { Link } from 'react-router-dom';

const linkStyle = {
    margin: "20px",
    color: "white",
}

export default function Navbar () {
    return(
        <nav className="navbar" style={{backgroundColor: "#37bbc7", paddingTop: "40px", paddingBottom: "10px", fontFamily: "Lucida Sans",}}>
            <Link to="/Home" style={linkStyle}>Home</Link>
            <Link to="/Page1" style={linkStyle}>Page1</Link>
            <Link to="/Page2" style={linkStyle}>Page2</Link> 
        </nav>
    );
};

