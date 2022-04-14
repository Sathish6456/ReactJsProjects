import React, { Component } from 'react';

class Example1 extends Component {
    constructor(props){
        super(props)
        this.state={
            playerNames:[
                "MS Dhoni",
                "Ravindra Jadeja",
                "Bravo",
                "A Rayudu",
                "Gaikwad"
            ]
        }
    }
    render() {

        var listItems=this.state.playerNames.map(
            (playerName)=>{
                return <li>{playerName}</li>
            }
        )
        return (
            <div>
                <ul>{listItems}</ul>                
            </div>
        );
    }
}

export default Example1;