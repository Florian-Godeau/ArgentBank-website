import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGetProfile } from "../../redux/slices/userProfileSlice";
import "./user.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import UsernameForm from "../../components/UsernameForm/UsernameForm";

export default function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const userProfile = useSelector((state) => state.userProfile);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (token) {
                try {
                    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
        
                    if (response.ok) {
                        const profileData = await response.json();
                        dispatch(setGetProfile(profileData));
                    } else {
                        console.error('Failed to fetch user profile:', response.status);
                    }
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                }
            }
        };

        fetchUserProfile();
    }, [token, dispatch]);

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <div className="user">
                    <h1 className="user__title">Welcome back<br />{`${userProfile.firstName} ${userProfile.lastName}`}</h1>
                    <button className="user__editButton" onClick={() => setIsModalOpen(true)}>Edit Username</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Checking (x8349)</h3>
                        <p className="userAccount__content__amount">$2,082.79</p>
                        <p className="userAccount__content__amountDescription">Available Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Savings (x6712)</h3>
                        <p className="userAccount__content__amount">$10,928.42</p>
                        <p className="userAccount__content__amountDescription">Available Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="userAccount">
                    <div className="userAccount__content">
                        <h3 className="userAccount__content__title">Argent Bank Credit Card (x8349)</h3>
                        <p className="userAccount__content__amount">$184.30</p>
                        <p className="userAccount__content__amountDescription">Current Balance</p>
                    </div>
                    <div className="userAccount__content cta">
                        <button className="userAccount__content__transactionButton">
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
            {isModalOpen && <UsernameForm closeModal={() => setIsModalOpen(false)} />}
        </>
    );
}