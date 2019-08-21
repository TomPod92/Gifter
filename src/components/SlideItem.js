import React from 'react';
import './slideItem.scss';
import { connect } from 'react-redux';
import { startRemoveItem } from '../actions/listActions.js'
import sprite from '../sprite.svg';


class SlideItem extends React.Component {

    state = {
        chosen: false,
    }

    render() {
        return (
            <div className="slideItemWrapper">
                <div className="slideItem">
                    <div className="slideItem__info">
                        Nazwa: <span>{this.props.giftInfo.name} </span>
                    </div>

                    <div className="slideItem__info">
                        Cena: <span>{this.props.giftInfo.price} </span> zł
                    </div>

                    {!!this.props.giftInfo.note && 
                        <div className="slideItem__info">
                            Dodatkowe informacje: {this.props.giftInfo.note}
                        </div>
                    }

                    {!!this.props.giftInfo.link && 
                        <div className="slideItem__info slideItem__info--link">
                            <a href={this.props.giftInfo.link} target="_blank" rel="noopener noreferrer">Zobacz w sklepie</a>
                        </div>
                    }

                    <div className="slideItem__button" onClick={() => this.props.dispatch(startRemoveItem(this.props.giftInfo.id))}>
                        <svg><use xlinkHref={`${sprite}#icon-bin`}></use></svg>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect()(SlideItem);