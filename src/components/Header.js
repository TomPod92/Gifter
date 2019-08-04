import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActions.js';
import logo from '../logo.png';

const Header = (props) => {
    const handleAuth = (uid) => {
        if(uid) props.dispatch(logout())
        else props.dispatch(login())
    }

    return (
        <header>
            <img src={logo} alt="Gifter Logo"/>
            <button onClick={() => handleAuth(props.uid)}>{props.uid ? 'Logout' : 'Login'}</button>
            <p>{props.uid}</p>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(Header);