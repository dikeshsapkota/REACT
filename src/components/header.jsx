import viteLogo from "../assets/react-logo.png";
function Header() {
    return (
        <header className="header">
            <img src={viteLogo} className="nav-logo" alt="Vite logo" />
            
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