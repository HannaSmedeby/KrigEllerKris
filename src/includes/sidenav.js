import React, { Component } from 'react'

export class sidenav extends Component {

/*
 * DISPLAY TOP BUTTON FUNCTION
 */

// When the user scrolls down 600px from the top of the document, show the top-button
componentDidMount(){
    window.addEventListener('scroll', this.scrollFunction());
}

scrollFunction = () => {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("topBtn").style.display = "block";
    console.log('hej');
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    render() {
        return (
            <div>
                <button onClick={this.topFunction()} id="topBtn" title="Go to top">&#8673 HEM</button>
                <div id="mySidenav" className="sidenav">
                    <a href="#page2">INFORMATION</a> 
                    <a href="#page3">HITTA SKYDDSRUM</a>
                    <a href="#page4">PROFIL</a>
                    <a href="#page5">CHECKLISTOR</a>
                </div> 
            </div>
        )
    }


}

export default sidenav
