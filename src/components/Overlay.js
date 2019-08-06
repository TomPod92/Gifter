import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './animations.scss';
import './overlay.scss';

const Overlay = (props) => (
    <ReactCSSTransitionGroup
        transitionName="zoom"
        transitionEnterTimeout={400}        
        transitionLeaveTimeout={400}        
        transitionAppear={true}        
        transitionAppearTimeout={400}        
    >
        <div className="overlay" onClick={props.handleOpenAddPanel}></div>
    </ReactCSSTransitionGroup>
    
);

export default Overlay;