// Give access to the current user, IF using auth && user is available.

import { useEffect, useState } from "react";


// useUserData.js (Abstraction)
const useUserData = (userId) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchData(userId).then(setUser);
    }, [userId]);

    return user;
};

// UserProfile.js
const UserProfile = ({ userId }) => {
    const user = useUserData(userId);

    {
        !user ? (<p>Loading...</p>) : (<div><h1>{user.name}</h1 > </div>)}

    };