import { Link } from "react-router-dom";
function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">React Router</Link>
                <div class="collapse navbar-collapse justify-content-end">
                    <div class="navbar-nav">
                        <Link to="/" className="navbar-brand">Home</Link>
                        <Link to="/about-us" className="navbar-brand">About Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;