import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './loginPanel.scss';
import './animations.scss';
import './buttons.scss';
import logo from '../logo.png';

const LoginPanel = (props) => {
    return (
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={400}        
            transitionLeaveTimeout={400}        
            transitionAppear={true}        
            transitionAppearTimeout={400}        
        >
            <div className="loginPanel">
                <img className="loginPanel__logo" src={logo} alt="Gifter Logo"/>
                <h2 className="loginPanel__header">Witaj!</h2>
                <p className="loginPanel__text">Musisz się zalogować aby korzystać z aplikacji</p>
                <button className="button" onClick={props.dispatch(startLogin)}>Zaloguj się</button>
            </div>
        </ReactCSSTransitionGroup>
    );
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(LoginPanel);