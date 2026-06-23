import { useState } from "react";
import reactLogo from "../assets/react-logo.png";
import reactLogo2 from "../assets/react-logo2.jpeg";

function Header() {
    const [logo, setLogo] = useState(reactLogo);

    function changeLogo() {
        if (logo === reactLogo) {
            setLogo(reactLogo2);
        } else {
            setLogo(reactLogo);
        }
    }

    return (
        <header className="header">
            <div className="brand">
                <img src={logo} className="nav-logo" alt="Logo" />
                <h3>React Facts</h3>
            </div>
            <button onClick={changeLogo}>
                Change Logo

            </button>
            <nav>

                <ul className="nav-links">
                    <a href="#main-content">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;