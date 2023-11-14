import "./home.scss";
import Header from "../../components/header/header";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";
import Footer from "../../components/footer/footer"

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="banner" aria-label="seedlings grow in a glass filled with money">
                    <section className="banner__content">
                        <h2 className="banner__content__title">Promoted Content</h2>
                        <p className="banner__content__subtitle">No fees.</p>
                        <p className="banner__content__subtitle">No minimum deposit.</p>
                        <p className="banner__content__subtitle">High interest rates.</p>
                        <p className="banner__content__text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="features__title">Features</h2>
                    <div className="features__item">
                        <img
                            src={IconChat}
                            alt="Chat Icon"
                            className="features__item__icon"
                        />
                        <h3 className="features__item__title">You are our #1 priority</h3>
                        <p>
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="features__item">
                        <img
                            src={IconMoney}
                            alt="Money Icon"
                            className="features__item__icon"
                        />
                        <h3 className="features__item__title">More savings means higher rates</h3>
                        <p>
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>
                    <div className="features__item">
                        <img
                            src={IconSecurity}
                            alt="Security Icon"
                            className="features__item__icon"
                        />
                        <h3 className="features__item__title">Security you can trust</h3>
                        <p>
                            We use top of the line encryption to make sure your data and money
                            is always safe.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}