import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { ImSearch } from 'react-icons/im';
import { IoNotifications } from 'react-icons/io5';
import './NavBar.css';
import { IconContext } from "react-icons";
import { Link, useNavigate} from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()

  const butNavigate = ()=>{
    navigate('/')
  } 

  return (
    <div
      className="full"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0e0e0e",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        className="navbar"
      >
        <div
          className="main"
          style={{ width: "50%", display: "flex", alignItems: "center" }}
        >
          <Link to={'.'}>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          /></Link>
          <div onClick={butNavigate} className="padd-left">Home</div>
          <div className="padd-left">TV Shows</div>
          <div className="padd-left">Movies</div>
          <div className="padd-left">New & Popular</div>
        </div>
        <div className="second" style={{ width: "50%" }}>
          <div style={{ float: "right" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconContext.Provider
                value={{ color: "white", className: "global-class-name" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                <ImSearch />
              <IoNotifications />
              <img
                style={{ paddingLeft: "10px", paddingRight: "7px" }}
                className="avatar"
                src="https://i.pinimg.com/564x/bf/a3/e1/bfa3e1784d2e94769f9475a6461cece9.jpg"
                alt="Avatar"
              />
              <IoMdArrowDropdown />
                </div>
              </IconContext.Provider>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar