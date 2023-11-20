import { Component } from 'react';

import Card from './Card';
import Navbar from './Navbar';
import ProfileSection from './Header';

import './Main.css'

const data = require('./Matter.json');

class Home extends Component {
    state = {fullData : data};

    imageFunction = (id) => (
        this.setState(prevState => (
            {fullData : prevState.fullData.map(eachValue => {
                if (eachValue.id === id){
                    return {...eachValue, isLiked: ! eachValue.isLiked}
                }
                return eachValue
            })}
        ))
    )
    render(){    
        const {fullData} = this.state; 
        return (
        <div>
              <Navbar/>
              <ProfileSection/>
              <div className="container">
               <div className="row">
                    {fullData.map(eachItem => (
                    <Card eachItem = {eachItem} key = {eachItem.id} imageFunction = {this.imageFunction}/>
                ))}
           
        </div>
    </div>
        </div>
        )
    }
}

export default Home;