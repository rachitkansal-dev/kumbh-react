import React, { useState, useEffect } from 'react';

function AdminClaimed() {
    const [claimedItems, setClaimedItems] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchClaimedItems = async () => {
            try {
                const response = await fetch('http://localhost:8080/lf/admin-claim-requests'); // Replace with your backend URL
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setClaimedItems(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching claimed items:', err);
                setError('Failed to load items. Please try again later.');
                setLoading(false);
            }
        };

        fetchClaimedItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='admin-claimed-body'>
            {/* Sidebar */}
            <div className="admin-claimed-sidebar">
                <button className="admin-claimed-sidebar-button">Users</button>
                <button className="admin-claimed-sidebar-button">Blog Entries</button>
                <button className="admin-claimed-sidebar-button">Lost Items</button>
                <button className="admin-claimed-sidebar-button">Found Items</button>
                <button className="admin-claimed-sidebar-button admin-claimed-active">Claimed Items</button>
            </div>

            {/* Main Content */}
            <div className="admin-claimed-main-content">
                <h1 className="admin-claimed-main-title">Claimed Items</h1>
                <div className="admin-claimed-items-container">
                    {claimedItems.map(item => (
                        <div key={item._id} className="admin-claimed-item-card">
                            <div className="admin-claimed-item-image">
                                <img src={item.image || 'placeholder.jpg'} alt={item.reporterDescription} />
                            </div>
                            <div className="admin-claimed-item-info">
                                <h2 className="admin-claimed-item-title">Reporter Description:</h2>
                                <p className="admin-claimed-item-description">{item.reporterDescription}</p>
                                <h3 className="admin-claimed-contact-label">Reporter Contact:</h3>
                                <p className="admin-claimed-contact-number">{item.reporterContact}</p>
                                <h2 className="admin-claimed-item-title">Claimer Description:</h2>
                                <p className="admin-claimed-item-description">{item.claimerDescription}</p>
                                <h3 className="admin-claimed-contact-label">Claimer Contact:</h3>
                                <p className="admin-claimed-contact-number">{item.claimerContact}</p>
                            </div>
                            <div className="admin-claimed-item-actions">
                                <button
                                    className="admin-claimed-delete-button"
                                    onClick={() => console.log(`Delete item with id: ${item._id}`)}
                                >
                                    Delete Item
                                </button>
                                <button
                                    className="admin-claimed-delete-button"
                                    onClick={() => console.log(`Delete claim for item with id: ${item._id}`)}
                                >
                                    Delete Claim
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminClaimed;
