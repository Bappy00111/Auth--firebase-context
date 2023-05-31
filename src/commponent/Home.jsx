import {  useContext } from "react";
import { AuthContex } from '../Providers/AuthProviders'


const Home = () => {
    const {user} = useContext(AuthContex);
    console.log(user)
    return (
        <div>
            <h1>this is home : {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;