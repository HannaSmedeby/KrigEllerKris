import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div id='page1'>
                <a id="home" className="smooth"></a>
                <div id="firstPageLogoContainer" className="container">
                    <p id="logoText"><br/>HÖJ DIN CIVILA BEREDSKAP - TILLSAMMANS HÖJER VI SVERIGES</p>
                </div>
                <div id="firstPageTextContainer" className="container">
                    <p id="firstPageText">HEJ MEDBORGARE!<br/>DEN HÄR HEMSIDAN TAR AVSTAMP I DEN BROSCHYR SOM MYNDIGHETEN FÖR SAMHÄLLSSKYDD OCH BEREDSKAP (MSB) SKICKADE UT I MAJ 2018. HÄR PÅ SIDAN FINNS DET SAMLAD INFORMATION, MÖJLIGHET ATT HITTA SKYDDSRUM I DIN NÄRHET OCH GENOM ATT SKAPA EN PROFIL KAN DU UNDERLÄTTA DIN BEREDSKAP MED CHECKLISTOR BASERADE PÅ DINA BEHOV.</p>
                    <a href="#login"><button type="button" id="createloginbtn" className="createloginbtn">DIN PROFIL</button></a>
                </div>
            </div>
        )
    }
}

export default Home;
