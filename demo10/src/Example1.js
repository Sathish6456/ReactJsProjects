import React, { Component } from 'react';
import axios from 'axios';

class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                olxUserId: 0,
                userName: "",
                firstName: "",
                lastName: "",
                emailId: "",
                phoneNumber: ""
            }
        }
    }
    process = (evt) => {
        evt.preventDefault();

        let url = "http://localhost:9051/user/";
        let userSearchId = document.frm.txt.value;
        let myurl = url + userSearchId;
        alert(myurl);
        axios.get(myurl).then(
            (response) => {
                console.log(response.data)
                this.setState(
                    {
                        user: response.data
                    }
                )
            }
        )
    }

    render() {
        return (
            <div>
                <form name="frm" onSubmit={this.process}>
                    <label>ID</label>
                    <input type="text" name="txt"></input><br></br>
                    <button >Retrieve</button>
                </form>

                <table>
                    <tr><td>ID</td><td>{this.state.user.olxUserId}</td></tr>
                    <tr><td>FullName</td><td>{this.state.user.userName}</td></tr>
                    <tr><td>First Name</td><td>{this.state.user.firstName}</td></tr>
                    <tr><td>LastName</td><td>{this.state.user.lastName}</td></tr>
                    <tr><td>Email</td><td>{this.state.user.emailId}</td></tr>
                    <tr><td>PhoneNumber</td><td>{this.state.user.phoneNumber}</td></tr>
                </table>
            </div>
        );
    }
}

export default Example1;