import React from "react";
import "./header.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { resetProfile } from "../../redux/slices/userProfileSlice";
import { Link } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const userProfile = useSelector((state) => state.userProfile);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetProfile());
        navigate('/');
    };

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {token && (
                        <Link className="main-nav-item" to="/user">
                            <i className="fas fa-user-circle"></i> {userProfile.userName}
                        </Link>
                    )}
                    {token ? (
                        <button onClick={handleLogout} className="main-nav-button">
                            <i className="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                    ) : (
                        <Link className="main-nav-item" to="/login">
                            <i className="fas fa-user-circle"></i> Sign In
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}