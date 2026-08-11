import "./Navbar.css";
export default function Navbar(){
    return (
        <nav className="nav">
            <div>
                <img src="./Logo.png" alt="" />
            </div>
            <div>
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Portfolio</a>
                <a href="">Process</a>
                <a href="">Pricing</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
            </div>
            <button>Book a Free Call</button>
        </nav>
    );
}