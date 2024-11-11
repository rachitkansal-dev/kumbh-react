import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Profile() {
    const { user,logoutUser } = useContext(UserContext); // Include setUser to clear user state
    const navigate = useNavigate(); // Initialize useNavigate


    const onClick = async () => {
        logoutUser();
        try {
            const response = await fetch('http://localhost:8080/logout', {
                method: 'POST',
                credentials: 'include', // Include cookies if your session is managed by cookies
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

            // Clear user state after successful logout

            navigate('/signup'); // Redirect to signup or login page after successful logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleDelete = async () => {
        const confirmation = window.prompt("Enter 'CONFIRM' to delete your profile:");
        
        if (confirmation === 'CONFIRM') {
            try {
                const response = await fetch(`http://localhost:8080/profile/${user._id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    logoutUser();
                    navigate('/signup');
                } else {
                    console.error(data.message);
                }
            } catch (e) {
                console.log('Error in delete:', e);
            }
        } else {
            alert("Profile deletion canceled. You must enter 'CONFIRM' to delete.");
        }
    };

    return (
        <div>
            <section className="profile-center">
                <div className="prof-head">
                    <h2 className="text-yellow">Name : </h2>
                    <h2>{user ? (<>{user.name}</>) : ""}</h2>
                </div>
                <div className="prof-head">
                    <h2 className="text-yellow">Email : </h2>
                    <h2>{user ? (<>{user.email}</>) : ""}</h2>
                </div>
                <div className="prof-head">
                    <h2 className="text-yellow">Contact : </h2>
                    <h2>{user ? (<>{user.phoneNumber}</>) : ""}</h2>
                </div>
                <div className="prof-head">
                    <h2 className="text-yellow">Address : </h2>
                    <h2>{user ? (<>{user.address}</>) : ""}</h2>
                </div>
                <div className="profile-btns">
                    <Link to='/edit-profile' role='button' className="logout-btn">Edit Profile</Link>
                    <button onClick={onClick} className="logout-btn">Log-Out</button>
                    <button onClick={handleDelete} className="logout-btn">Delete</button>
                </div>
            </section>
        </div>
    );
}

export default Profile;
