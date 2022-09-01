import React, {useEffect, useState} from "react";
import { AiOutlineMenu  } from "@react-icons/all-files/ai/AiOutlineMenu";
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"

export default function(props){
    const [extendNav, setExpendNav] = useState(false);

    const location = useLocation();
    // responsibe
    useEffect(()=>{
        setExpendNav(false);
    }, [location])
    return(
        <div className="navbar" id={extendNav? "open": "close"}>
            <div className="setMobile">
                <button onClick={()=>{setExpendNav((prev)=> !prev)}}>
                <AiOutlineMenu />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="page2">Page2</Link>
                <Link to="page3">Page3</Link>
                {/* <Link to="/">Log out</Link> */}
            </div>

        </div>
    ) 
}
