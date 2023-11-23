import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../../redux/slices/userProfileSlice";
import "./UsernameForm.scss"; 

export default function UpdateUsernameForm({ closeModal }) {
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmUpdate = window.confirm(`Change username to: ${newUsername}?`);
        if (!confirmUpdate) {
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: newUsername }),
            });

            if (response.ok) {
                dispatch(setEditProfile(newUsername));
                closeModal(); // Fermer la modale après la mise à jour
            } else {
                alert("Failed to update username. Please try again.");
            }
        } catch (error) {
            console.error('Error updating username:', error);
            alert("An error occurred while updating username.");
        }
    };

    // Fonction pour fermer la modale si on clique en dehors
    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="modal-close" onClick={closeModal}>&times;</span>
                <div className="Title">
                    Edit Username
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="username-label-input">
                        <label>New Username : </label>
                        <input
                            type="text"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update Username</button>
                </form>
            </div>
        </div>
    );
}
