import React, { Component } from 'react';
import axios  from 'axios';
class Example2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postResponse: []
        }
    }
    getData = (evt) => {
        evt.preventDefault()
                let baseUrl="http://localhost:9053/user/advertise";
                let username=evt.target.elements[0].value;
                baseUrl=baseUrl+"/"+username;
                axios.get(baseUrl).then(
                    (response)=>{
                        console.log(response.data);
                    }
                )
            }
    render() {
        return (
            <div>
                <form onSubmit={this.getData}>
                    <label>UserName</label>
                    <input></input>
                    <hr></hr>
                    <button>Submit the Value</button>
                </form>
            </div>
        );
    }
}

export default Example2;