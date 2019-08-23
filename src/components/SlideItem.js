import React from 'react';
import './slideItem.scss';
import { connect } from 'react-redux';
import { startRemoveItem, startBookItem } from '../actions/listActions.js'
import sprite from '../sprite.svg';


class SlideItem extends React.Component {

    state = {
        chosen: false,
    }

    setActiveItem = () => {
        // // check if 
        // if(this.props.loggedPerson.includes(this.props.person)) return

        // change current gift item "booked" value to the opposite 
        let updatedItem = this.props.giftInfo;
        updatedItem.booked = !updatedItem.booked;
        
        // update firebase and redux store
        this.props.dispatch(startBookItem(updatedItem));

        this.setState( prevState => ({
            chosen: !prevState.chosen
        }))
    }

    check = () => {
        if(this.props.loggedPerson.includes(this.props.person)) {
            // ta sama osoba
            return 'slideItem'
        } else {
            // inna osoba
            return (this.state.chosen ? "slideItem slideItem--active" : "slideItem")
        }
    }


    render() {
        return (
            <div className="slideItemWrapper">
                <div className={this.state.chosen ? "slideItem slideItem--active" : "slideItem"} onClick={this.setActiveItem}>
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

const mapStateToProps = (state) => {
    return {
      loggedPerson: state.auth.displayName
    }
  };

export default connect(mapStateToProps)(SlideItem);