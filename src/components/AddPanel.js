import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { startAddItem } from '../actions/listActions.js';
import './addPanel.scss';
import './animations.scss';
import './buttons.scss';

class AddPanel extends React.Component {
    state = {
        person: 'Tomek',
        name: '',
        image: '',
        price: '',
        links: '',
        note: ''
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        // prevent autoreload
        event.preventDefault();

        // dispatch the action that adds item to firebase
        // and then it dispatches the action that adds item to redux
        this.props.dispatch(startAddItem(this.state));
        
        // clear form inputs and reset state
        this.setState({
            person: 'Tomek',
            name: '',
            image: '',
            price: '',
            links: '',
            note: ''           
        })

        // close AddPanel and Overlay after a second
        setTimeout(() => {
            this.props.handleOpenAddPanel()
        }, 1000);
        
    };

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={400}        
                transitionLeaveTimeout={400}        
                transitionAppear={true}        
                transitionAppearTimeout={400}        
            >
                <form className="addPanel" onSubmit={this.handleFormSubmit}>
                    <div className="addPanel__group">
                        <label htmlFor="person">Prezent dla: </label>
                        <select name="person" value={this.state.person} onChange={this.handleFormChange}>
                            <option value="Tomek">Tomka</option>
                            <option value="Wiola">Wioli</option>
                            <option value="Dorota">Doroty</option>
                            <option value="Darek">Darka</option>
                            <option value="Przemek">Przemka</option>
                            <option value="Ala">Ali</option>
                            <option value="Iwona">Iwony</option>
                            <option value="Zygmunt">Zygmunta</option>
                        </select>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="name">Nazwa: </label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleFormChange} required/>
                    </div>
                    
                    <div className="addPanel__group">
                        <label htmlFor="image">Link do obrazka: </label>
                        <input type="text" id="image" name="image" value={this.state.image} onChange={this.handleFormChange}/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="price">Cena: </label>
                        <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleFormChange}/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="links">Linki do sklepów: </label>
                        <input type="textarea" id="links" name="links" value={this.state.links} onChange={this.handleFormChange} required/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="note">Dodatkowe informacje: </label>
                        <input type="textarea" id="note" name="note" value={this.state.note} onChange={this.handleFormChange}/>
                    </div>

                    <button className="button button--inverted">Dodaj</button>
                </form>
            </ReactCSSTransitionGroup>
        )
    }
}

// const mapStateToProps = (state) => {

// };

export default connect()(AddPanel);