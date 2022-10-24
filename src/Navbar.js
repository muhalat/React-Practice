import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>The Dojo Blog</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={{
                    // color:"white",
                    // backgroundColor: '#f1356d',
                    // borderRadius:'8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;