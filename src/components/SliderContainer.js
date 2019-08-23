import React from 'react';
import "slick-carousel/slick/slick.css"; //test
import "slick-carousel/slick/slick-theme.css"; //test
import Slider from "react-slick"; //test
import SlideItem from './SlideItem.js';
import './sliderContainer.scss';
import { connect } from 'react-redux';



class SliderContainer extends React.Component {
    state = {
        slidesToShow: 1
    }

    updateDimensions = () => {
        if(window.innerWidth <= 450) {
            this.setState({slidesToShow: 1})
        } else if(window.innerWidth >= 450 && window.innerWidth <= 800) {
            this.setState({slidesToShow: 2})
        } else if(window.innerWidth >= 800) {
            this.setState({slidesToShow: 3})
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }


    render(){
        const gifts = this.props.gifts.filter(current => current.person === this.props.person);

        return (
            <div className="sliderWrapper">
                { (!!gifts.length) && <>
                <h2 className="sliderWrapper__person">{this.props.person}</h2>
                <Slider
                    // dots = {true}
                    arrows = {true}
                    infinite = {gifts.length > this.state.slidesToShow}
                    speed = {500}
                    slidesToShow = {this.state.slidesToShow}
                    slidesToScroll = {1}
                >
                    {/* <div className="page page--one">1</div> */}
                    {/* <div className="page page--two">2</div> */}
                    {/* <div className="page page--three">3</div> */}

                    {gifts.map( current => <SlideItem key={current.name} giftInfo={current} person={this.props.person}/> )}
                </Slider>
                </>}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    gifts: state.list
  }
};

export default connect(mapStateToProps)(SliderContainer);