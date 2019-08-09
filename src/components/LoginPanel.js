import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions.js';
import { CSSTransition } from 'react-transition-group';
import './loginPanel.scss';
import './animations.scss';
import './buttons.scss';
import logo from '../logo.png';

const LoginPanel = (props) => {
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={400}
            classNames="fade"       
        >
            <div className="loginPanel">
                <img className="loginPanel__logo" src={logo} alt="Gifter Logo"/>
                <h2 className="loginPanel__header">Witaj!</h2>
                <p className="loginPanel__text">Musisz się zalogować aby korzystać z aplikacji</p>
                <button className="button" onClick={props.dispatch(startLogin)}>Zaloguj się</button>
            </div>
        </CSSTransition>
    );
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(LoginPanel);