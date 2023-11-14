import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";

export default function Header() {
    return (
        <header>
            <nav className="main__nav">
                <Link className="main__nav__logo" to="/">
                    <img className="main__nav__logo__image" src={Logo} alt="Logo ArgentBank" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <Link className="main__nav__item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </nav>
        </header>
    )
}