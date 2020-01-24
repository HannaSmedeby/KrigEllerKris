import React, { Component } from 'react'
import SlideShow from '../components/slideshow/slideshow';


export class Information extends Component {

    flyerImages = [
        "../scss/images/flyer/kek_page1.png",
        "../scss/images/flyer/kek_page2.png",
        "../scss/images/flyer/kek_page3.png",
        "../scss/images/flyer/kek_page4.png",
        "../scss/images/flyer/kek_page5.png",
        "../scss/images/flyer/kek_page6.png",
        "../scss/images/flyer/kek_page7.png",
        "../scss/images/flyer/kek_page8.png",
        "../scss/images/flyer/kek_page9.png",
        "../scss/images/flyer/kek_page10.png",
        "../scss/images/flyer/kek_page11.png"
    ];

    render() {
        return (
            <div id="page2">
            <a id="information" className="smooth"></a>
            <div id="flyerContainer" className="container">
                <SlideShow images={this.flyerImages}/>
            </div>
          <div id= "linkContainer" className ="container">
            <div id="krisContainer" className="container">
              <p>Information om</p>
              <h2>KRISFÖRBEREDELSE</h2>
              <ul id="krisLinks" className="lists">
                <li><a href="#">VATTEN</a></li>
                <li><a href="#">VÄRME</a></li>
                <li><a href="#">MAT</a></li>
                <li><a href="#">KOMMUNIKATION</a></li>
              </ul>
            </div>
            <div id="krigContainer" className="container">
              <p>Information</p>
              <h2>OM KRIGET KOMMER</h2>
              <ul id="krigLinks" className="lists">
                <li><a href="#">VÅRT FÖRSVAR</a></li>
                <li><a href="#">RISKER OCH HOT</a></li>
                <li><a href="#">VARNINGSSYSTEM VID KRIG OCH KRIGSFÖRBEREDELSE</a></li>
              </ul>
            </div>
          </div>
      </div>
        )
    }
}

export default Information
