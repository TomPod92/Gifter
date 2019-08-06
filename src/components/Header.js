import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { startLogout } from '../actions/authActions.js';
import logo from '../logo.png';
import './header.scss';
import './animations.scss';
import './buttons.scss';

const Header = (props) => {
    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={400}        
            transitionLeaveTimeout={400}        
            transitionAppear={true}        
            transitionAppearTimeout={400}        
        >
            <header className="header">
                <img className="header__logo" src={logo} alt="Gifter Logo"/>
                <button className="button" onClick={props.handleOpenAddPanel}>Dodaj prezent</button>
                <button className="button button--inverted" onClick={props.dispatch(startLogout)}>Wyloguj</button>
            </header>
        </ReactCSSTransitionGroup>
    )
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(Header);