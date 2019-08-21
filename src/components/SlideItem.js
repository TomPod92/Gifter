import React from 'react';
import './slideItem.scss';
import { connect } from 'react-redux';
import { startRemoveItem } from '../actions/listActions.js'
import sprite from '../sprite.svg';


class SlideItem extends React.Component {

    render() {
        return (
            <div className="slideItem">
                {this.props.giftInfo.name}

                <div className="svg-container" onClick={() => this.props.dispatch(startRemoveItem(this.props.giftInfo.id))}>
                    <svg><use xlinkHref={`${sprite}#icon-bin`}></use></svg>
                </div>
            </div>
        );
    }
};

export default connect()(SlideItem);