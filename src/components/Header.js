import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import user from './../assets/reddit.png'

class Header extends Component{
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Jumbotron fluid>
                <img src={user} className="logo" alt=""/>
                <h1>MemeBot</h1>
                <h6><i>Curated Memes Just For You.</i></h6>

                
   
        <div class="credits" >
            <p>Made with ♥ by <a href="https://github.com/dishanp">Dishan Purkayastha</a></p>
        </div>



            </Jumbotron>
        )
    }
}

export default Header