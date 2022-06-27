const Navbar = () => {
    const name = "Kunal"
    return (  
        <nav className="navbar">
            <h1>{name}'s Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create new post</a>
            </div>
        </nav>
    );
}

export default Navbar;