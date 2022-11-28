import { Link } from 'react-router-dom';

const linkStyle = {
    margin: "20px",
    color: "white",
}

function Navbar () {
    return(
        <nav className="navbar">
            <div className="links" style={{backgroundColor: "#37bbc7", paddingTop: "40px", paddingBottom: "10px", fontFamily: "Lucida Sans",}}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/Page1" style={linkStyle}>Page1</Link>
                <Link to="/Page2" style={linkStyle}>Page2</Link>
            </div>
        </nav>
    );
};

export default Navbar;