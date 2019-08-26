import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { startLogout } from '../actions/authActions.js';
import sprite from '../sprite.svg';
import logo from '../logo.png';
import './header.scss';
import './animations.scss';
import './buttons.scss';

const Header = (props) => {
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={400}
            classNames="slide"       
        >
            <header className="header">
                <img className="header__logo" src={logo} alt="Gifter Logo"/>

                <div className="header__menu--desktop">
                    <button className="button" onClick={props.handleOpenAddPanel}>Dodaj prezent</button>
                    <button className="button button--inverted" onClick={props.dispatch(startLogout)}>Wyloguj</button>
                </div>

                <div className="header__menu--mobile">
                    <div className="svg-container" onClick={props.handleOpenAddPanel}>
                        <svg><use xlinkHref={`${sprite}#icon-plus`}></use></svg>
                    </div>
                    <div className="svg-container" onClick={props.dispatch(startLogout)}>
                        <svg><use xlinkHref={`${sprite}#icon-switch`}></use></svg>
                    </div>
                </div>

            </header>
        </CSSTransition>
    )
};

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(Header);