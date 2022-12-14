import React, {useEffect, useState} from "react";
import { AiOutlineMenu  } from "@react-icons/all-files/ai/AiOutlineMenu";
import { NavLink, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { logout } from '../utils/auth'

export default function Navbar(props){
    // console.log(`${props} in navbar`);
    const [extendNav, setExpendNav] = useState(false);

    const location = useLocation();
    // responsibe
    useEffect(()=>{
        setExpendNav(false);
    }, [location])
    return(
        <div className="navbar" id={extendNav? "open": "close"}>
            <div className="toggleButton">
                <button onClick={()=>{setExpendNav((prev)=> !prev)}}>
                <AiOutlineMenu />
                </button>
            </div>
            <div className="links">
                
                {props.user && (
                    <>
                    <NavLink to="/dash">Dashboard</NavLink>
                    <NavLink to="/stats">Expenses Breakdown</NavLink>
                    <button onClick={logout}>Log Out</button>
                    </>
                )}
                {!props.user && (
                    <>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    </>
                )}
            </div>

        </div>
    ) 
}
