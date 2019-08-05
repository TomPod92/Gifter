import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/authActions.js';
import logo from '../logo.png';
import './header.scss';

const Header = (props) => {

    // if user is logged in display "logout button" which lets you logout
    // if user i logged out display "login button"
    const handleAuth = (uid) => {
        if(uid) props.dispatch(startLogout())
        else props.dispatch(startLogin())
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Gifter Logo"/>
            <button className="header__button" onClick={() => handleAuth(props.uid)}>{props.uid ? 'Logout' : 'Login'}</button>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(Header);