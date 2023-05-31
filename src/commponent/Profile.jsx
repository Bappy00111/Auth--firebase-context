import React, { useContext, useState } from 'react';
import { AuthContex } from '../Providers/AuthProviders';

const Profile = () => {
    const {lodding} = useContext(AuthContex);
    return (
        <div>
            <h1>this is profile</h1>
        </div>
    );
};

export default Profile;