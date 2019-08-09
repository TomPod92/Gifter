import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.scss';
import './overlay.scss';

const Overlay = (props) => (
    <CSSTransition
        in={true}
        appear={true}
        timeout={400}
        classNames="zoom"   
    >
        <div className="overlay" onClick={props.handleOpenAddPanel}></div>
    </CSSTransition>
    
);

export default Overlay;