import React, { Component } from 'react';

import axios from 'axios';

class Example1 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            users: []

        }

    }

    componentDidMount() {

        let myurl = "https://jsonplaceholder.typicode.com/users";

        axios.get(myurl).then(

            (response) => {

                console.log(response)

                console.log(response.data)

                this.setState(
                    {
                    users:response.data
                    }
                )

            }

        )

    }

    render() {
        let userData=this.state.users.map(
            (user)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            }
        )
        return (

            <div>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Mail</td>
                    </tr>
                    {userData}
                </table>
            </div>

        );

    }

}

export default Example1;







