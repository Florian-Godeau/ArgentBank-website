import "./login.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setToken } from "../../redux/slices/authSlice";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckbox = () => {
        setRememberMe(!rememberMe);
    };

    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('email');
        }
    }, [rememberMe, email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill out all the fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                dispatch(setToken(data.body.token));
                navigate('/user'); // Redirection vers la page utilisateur
            } else {
                alert("Login failed: " + data.message); // Afficher l'erreur
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <section className="login">
                    <i className="fa fa-user-circle login__icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login__form__inputWrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login__form__inputWrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login__form__inputRemember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleCheckbox} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="login__form__button" type="submit">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}