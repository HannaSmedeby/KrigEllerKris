import React, { Component } from 'react'

export class search extends Component {
    render() {
        return (
            <div>
            <div id="shelterPageContainer" class="container">
            <a id="shelters" className="smooth"></a>
            <h1 id="shelterh1">HITTA SKYDDSRUM</h1>
            <p1>Sök på address, postnummer eller stad för att hitta skyddsrum i din närhet</p1><br />
            <input type="text" placeholder="adress, postnummer, stad, område..." name="search" required />
            <button id="searchShelter">SÖK</button>
            <br />
            <button onclick="slideShelterInfo()" id="shelterInfoBtn" class="slideBtns"><span>LÄS OM SKYDDSRUM </span></button>
          </div>
            </div>
        )
    }
}

export default search
