import React, { Component } from 'react';

import axios from 'axios';

class Example2 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            users: []

        }

    }

    componentDidMount() {

        let myurl = "https://jsonplaceholder.typicode.com/posts";

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
            (post)=>{
                return <tr>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                </tr>
            }
        )
        return (

            <div>
                <table>
                    <tr>
                        <td>UserID</td>
                        <td>Title</td>
                    </tr>
                    {userData}
                </table>
            </div>

        );

    }

}

export default Example2;
