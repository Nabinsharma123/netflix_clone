import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav(){
    const [scroll,setscroll]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setscroll(true);
            }
            else
            setscroll(false);
        })
        return()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return(
        <div className={`nav ${scroll&&"nav_black"}` }>
        <img 
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
        alt="NETFLIX logo"
        />
        <img 
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="NETFLIX logo"
        />
        </div>
    )
}

export default Nav;