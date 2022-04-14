import React, { Component } from 'react';



class Example2 extends Component {

    render() {

        let playerNames = [

            "virat kohli",

            "shreyas Iyer",

            "Dinesh Karthik",

            "Ms Dhoni",

            "Rishabh Pant"

        ]



        let liItems = playerNames.map(

            (playerName) => {

                return <li>{playerName.toUpperCase()}</li>

            }

        )

        return (

            <div>

                <ol>

                    {liItems}

                </ol>

            </div>

        );

    }

}



export default Example2;