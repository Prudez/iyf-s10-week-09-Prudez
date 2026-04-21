import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);

            // Example API (you can replace it)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();

            setUser(data);
            setLoading(false);
        }

        fetchUser();
    }, [userId]);

    if (loading) return <p>Loading...</p>;

    return <div>{user.name}</div>;
}

export default UserProfile;