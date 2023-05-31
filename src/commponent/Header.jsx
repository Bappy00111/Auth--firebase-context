import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProviders";


const Header = () => {

    const {user,logOut} = useContext(AuthContex);

    const handleSingout = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='register'>Regester</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleSingout} className="btn btn-xs">Sing out</button>
                    </>
                     : <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;