import React from 'react';
import './slideItem.scss';
import { connect } from 'react-redux';
import { startRemoveItem, startBookItem } from '../actions/listActions.js'
import sprite from '../sprite.svg';


class SlideItem extends React.Component {

    setActiveItem = (event) => {

        // prevent user from unbooking a gift that was booked by someone else
        if(this.props.loggedPerson !== this.props.giftInfo.bookedBy ) return;

        // prevent booking an item after "a tag" was clicked
        const clickedElement = event.target.className;
        if(clickedElement === "slideItem__info slideItem__info--link" || clickedElement === "slideItem__info-aTag") return;
        
        // check if logged in person tries to book his own item
        // if he is, do not do anything (dont change the class, dont change redux/firebase)
        if(this.props.loggedPerson.includes(this.props.person)) return

        // change current gift item "booked" value to the opposite 
        let updatedItem = this.props.giftInfo;
        updatedItem.booked = !updatedItem.booked;

        // if item was already booked by someone reset "bookedBy" value
        if(updatedItem.bookedBy) updatedItem.bookedBy= ''; 
        // if item was not booked by anyone set "bookedBy" value to currently logged person
        else updatedItem.bookedBy = this.props.loggedPerson;

        // update firebase and redux store
        this.props.dispatch(startBookItem(updatedItem));
    }

    removeItem = (event, id) => {
        // prevent "this.setActiveItem" from firing
        event.stopPropagation();

        // ask the user if he really wants to delete that item
        const areYouSure = window.confirm('Na pewno chcesz usunąć ten prezent?');
        if(!areYouSure) return
      
        // remove item from firebase
        this.props.dispatch(startRemoveItem(id))
    }

    render() {
        return (
            <div className="slideItemWrapper">
                <div className={ (this.props.loggedPerson && (this.props.giftInfo.booked && !this.props.loggedPerson.includes(this.props.person))) ? "slideItem slideItem--active" : "slideItem"} onClick={this.setActiveItem}>

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
                            <a href={this.props.giftInfo.link} target="_blank" rel="noopener noreferrer" className="slideItem__info-aTag">Zobacz w sklepie</a>
                        </div>
                    }

                    <div className="slideItem__button" onClick={(event) => this.removeItem(event, this.props.giftInfo.id)}>
                        <svg><use xlinkHref={`${sprite}#icon-bin`}></use></svg>
                    </div>              
                </div>

                {(this.props.loggedPerson && (this.props.giftInfo.booked && !this.props.loggedPerson.includes(this.props.person)))  &&
                    <div className="bookedInfo" onClick={this.setActiveItem}>
                        Zarezerwowane przez: <br/>
                        <span>{this.props.giftInfo.bookedBy.split(" ")[0]}</span>
                    </div>
                }
                
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