import React, { useEffect, useState } from 'react'
import './navbar.css'

function Navbar() {

    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        });

        return () => {
            window.removeEventListener("scroll", null);
        }
   
    }, [])
    
  return (
    <div className={`navbar ${handleShow && "navbar__black" }`}>
        <img className="navbar__logo" src="moviea-logo.png" alt="Moviea Logo" />
        <img className="navbar__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default Navbar