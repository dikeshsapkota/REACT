import viteLogo from "../assets/react-logo.png";
function Header() {
    return (
        <header className="header">
            <div className="brand">
                <img className="nav-logo" src={viteLogo} alt="React logo" />
                <h3>React Facts</h3>
            </div>

            <nav>

                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;