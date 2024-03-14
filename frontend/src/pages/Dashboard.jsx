import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton'; // Assurez-vous que le chemin est correct

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <div>
            <h1>Welcome, {userInfo.first_name} </h1>
            <LogoutButton />
        </div>
    );
};

export default Dashboard;
