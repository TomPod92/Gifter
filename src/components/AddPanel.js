import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './addPanel.scss';
import './animations.scss';
import './buttons.scss';

class AddPanel extends React.Component {
    state = {
        person: '',
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

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={400}        
                transitionLeaveTimeout={400}        
                transitionAppear={true}        
                transitionAppearTimeout={400}        
            >
                <form className="addPanel">
                    <div className="addPanel__group">
                        <label htmlFor="name">Nazwa: </label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleFormChange}/>
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
                        <input type="textarea" id="links" name="links" value={this.state.links} onChange={this.handleFormChange}/>
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

const mapStateToProps = (state) => {

};

export default connect()(AddPanel);