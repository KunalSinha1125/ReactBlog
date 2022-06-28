//Uses some inline styling
import {Link} from 'react-router-dom'

const Navbar = () => {
    const name = "Kunal"
    return (  
        <nav className="navbar">
            <h1>{name}'s Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create new post</Link>
            </div>
        </nav>
    );
}

export default Navbar;

//<a href="/create" style={{
    //color: "white",
    //backgroundColor: "#f1356d",
    //borderRadius: "8px"
//}}>Create new post</a>