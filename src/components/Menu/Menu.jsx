import React, { useState } from 'react'
import { BsBell, BsSearch } from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import { customers, businesses, settings } from './sidebarData';

import './menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../contexts/AuthContext';

const Menu = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    console.log(user)

    const handleClick = () => {
        setShowLogout(!showLogout)
    }

    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/')
        }catch(err){
            console.log(err.message)
        }
    }
    
  return (
    <div className='nav-section'>
    <div>
    <nav className='nav-container'>
        <div className="logo">
            <img src='/images/logo.svg' alt='' className='logo-img1'/>
            <img src="/images/lendsqr.svg" alt="logo" className='logo-img2'/>
        </div>
        <div className="search">
            <input type="text" placeholder='Search for anything' className='search-input'/>
            <button className='search-btn'>
                <BsSearch className='search-icon'/>
            </button>
        </div>
        <div className="profile">
            <a href='#' className='link'>Docs</a>
            <BsBell />
            <div className="login-detail">
                <div className="menu-profile">
                <img src='/images/1.jpg' alt='profile-pic' className='profile-pic'/>
                <p className='user'>{user.displayName ? user.displayName : user.email}
                <button onClick={() => handleClick()}><IoIosArrowDown/></button>
                </p>
                </div>
                { showLogout && <p className='nav-logout' onClick={handleLogout}>Logout</p> }  
            </div>
            
        </div>
    </nav>
    </div>
    
    <div className='side-bar-container'>
        <div className='side-bar'>
        <p className='switch-title'>Switch Organization<span><IoIosArrowDown /></span></p>
        <p className='dashboard-title'>Dashboard</p>
        <div className="section">
        <h4>CUSTOMERS</h4>
        <ul>
            {
                customers.map((item) => {
                    return (
                    <li key={item.id}>
                        <Link className='links' to={item.to}>
                        <span className='sidebar-icon'>{item.icons}</span>
                        <p>{item.name}</p>
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
        </div>
        <div className="section">
        <h4>BUSINESSES</h4>
        <ul>
            {
                businesses.map((item) => {
                    return (
                    <li key={item.id}>
                        <Link className='links' to={item.to}>
                        <span className='sidebar-icon'>{item.icons}</span>
                        <p>{item.name}</p>
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
        </div>
        <div className="section">
        <h4>SETTINGS</h4>
        <ul>
            {
                settings.map((item) => {
                    return (
                    <li key={item.id}>
                        <Link className='links' to={item.to}>
                        <span className='sidebar-icon'>{item.icons}</span>
                        <p>{item.name}</p>
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Menu