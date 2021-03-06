import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { startAddItem } from '../actions/listActions.js';
import './addPanel.scss';
import './buttons.scss';
import './animations.scss';


class AddPanel extends React.Component {
    state = {
        person: 'Tomasz',
        name: '',
        price: '',
        link: '',
        note: '',
        booked: false,
        bookedBy: ''
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
            price: '',
            link: '',
            note: '',
            bookedBy: ''           
        })

        // close AddPanel and Overlay after a second
        setTimeout(() => {
            this.props.handleOpenAddPanel()
        }, 1000);
        
    };

    render() {
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={400}
                classNames="zoom"   
            >
                <form className="addPanel" onSubmit={this.handleFormSubmit}>
                    <div className="addPanel__group">
                        <label htmlFor="person">Dodaj prezent dla: </label>
                        <select name="person" value={this.state.person} onChange={this.handleFormChange}>
                            <option value="Tomasz">Tomka</option>
                            <option value="Wioletta">Wioli</option>
                            <option value="Dorota">Doroty</option>
                            <option value="Darek">Darka</option>
                            <option value="Przemek">Przemka</option>
                            <option value="Alicja">Ali</option>
                            <option value="Iwa">Iwony</option>
                            <option value="Zygmunt">Zygmunta</option>
                        </select>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="name">Nazwa: </label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleFormChange} required/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="price">Cena: </label>
                        <input type="number" id="price" name="price" value={this.state.price} onChange={this.handleFormChange} required/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="link">Link do sklepu: </label>
                        <input type="textarea" id="link" name="link" value={this.state.link} onChange={this.handleFormChange}/>
                    </div>

                    <div className="addPanel__group">
                        <label htmlFor="note">Dodatkowe informacje: </label>
                        <input type="textarea" id="note" name="note" value={this.state.note} onChange={this.handleFormChange}/>
                    </div>

                    <div className="addPanel__button-container">
                        <button type="submit" className="button button--inverted">Dodaj</button>
                        <button type="button" className="button" onClick={this.props.handleOpenAddPanel}>Zamknij</button>
                    </div>
                </form>
            </CSSTransition>
        )
    }
}

// const mapStateToProps = (state) => {

// };

export default connect()(AddPanel);