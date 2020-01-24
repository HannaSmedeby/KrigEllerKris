import React, { Component } from 'react';
import Slide from './slide';
import RightArrow from './rightarrow';
import LeftArrow from './leftarrow';


class slideshow extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
          currentIndex: 0,
      }
    }


    goToPrevSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }))
    }

    goToNextSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }))
    }

  
    render() {
      return (
        <div className="slideshow">
            <Slide currentIndex={this.state.currentIndex} />
            <LeftArrow goToPrevSlide={this.goToPrevSlide} />
            <RightArrow goToNextSlide={this.goToNextSlide} />                 
        </div>
      );
    }
  }


export default slideshow;
