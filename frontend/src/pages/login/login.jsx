import "./login.scss";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

export default function Login() {
    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="login">
                    <i class="fa fa-user-circle login__icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="login__form__inputWrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="login__form__inputWrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="login__form__inputRemember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <Link className="login__form__button" to="/user">Sign In</Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}