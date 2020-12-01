import React from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header-container">




            <div className="nav-items">
                <Link className="nav-item" to='/'>HELLO!</Link>
                <Link className="nav-item" to='/ourstory'>OUR<span>STORY</span></Link>
                <Link className="nav-item" to='/whatsgood'>WHATS<span>GOOD</span></Link>
                <Link className="nav-item" to='/ourfamily'>OUR<span>FAMILY</span></Link>
                <Link className="nav-item" to='/findus'>WHERE<span>TO</span>FIND<span>US</span></Link>
                <Link className="nav-item" to='/hive'>HIVE</Link>
                <Link className="nav-item" to='/videos'>VIDEOS</Link>
                <Link className="nav-item" to='/callus'>CALL<span>US</span></Link>

            </div>

            <div className="mobile-header">


                <MenuIcon />

            </div>
            
            


            
        </div>
    )
}

export default Header
