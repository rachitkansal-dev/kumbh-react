import React, { useState, useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom';

function Admin() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch users from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/users'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this User?");
        if(confirmDelete) {
            try {
                const response = await fetch(`/users/${id}`, {
                    method: 'DELETE',
                });
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || 'Failed to delete user');
                }

                // Update the users list after successful deletion
                setUsers(users.filter((user) => user._id !== id));
                console.log(result.message); // Optionally log success message
            } catch (err) {
                console.error('Error deleting user:', err.message);
                setError(err.message); // Optionally show an error message
            }
        }
        else {
            alert('deletion failed');
        }
    };

    const onclick = () => {
        navigate('/admin-claimed');
    };

    return (
        <div className="admin-body">
            <div className="admin-sidebar">
                <button className="admin-sidebar-button active">Users</button>
                <button className="admin-sidebar-button" onClick={()=>{navigate('/finder')}}>Lost/Found Items</button>
                <button className="admin-sidebar-button" onClick={onclick}>
                    Claimed Items
                </button>
            </div>

            <div className="admin-main-content">
                <h1 className="admin-main-title">Users</h1>
                {error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <table className="admin-data-table">
                        <thead>
                            <tr>
                                <th className="admin-table-header">Username</th>
                                <th className="admin-table-header">Contact Number</th>
                                <th className="admin-table-header">Email</th>
                                <th className="admin-table-header">Address</th>
                                <th className="admin-table-header">blogs</th>                                
                                <th className="admin-table-header">comments</th>                                
                                <th className="admin-table-header">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="admin-table-cell">{user.name}</td>
                                    <td className="admin-table-cell">{user.phoneNumber}</td>
                                    <td className="admin-table-cell">{user.email}</td>
                                    <td className="admin-table-cell">{user.address}</td>
                                    <td className="admin-table-cell"><Link to={`/blogs/${user._id}`}>View Blogs</Link></td>
                                    <td className="admin-table-cell"><Link to={`/usercomments/${user._id}`}>View Comments</Link></td>
                                    <td className="admin-table-cell">
                                        <button
                                            className="admin-delete-button"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Admin;
