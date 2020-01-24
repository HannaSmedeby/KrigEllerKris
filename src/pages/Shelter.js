import React, { Component } from 'react'
import Search from '../components/shelter/search'
import ShelterInfo from '../components/shelter/shelterinfo'

export class Shelter extends Component {


    render() {
        return (          
        <div id="page3">
            <Search />
            <ShelterInfo />
        </div>
        )
    }
}

export default Shelter
