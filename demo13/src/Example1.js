import React, { Component } from 'react';
import axios from 'axios'

class Example1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            advtpost: {
                title: "",
                categoryId: 0,
                description: "",
                price: 0.0,
                statusId: 0
            }
        }
    }
    submitData = (evt) => {
        evt.preventDefault()
        this.setState(
            {
                advtpost: {
                    title: evt.target.elements[1].value,
                    categoryId: evt.target.elements[2].value,
                    description: evt.target.elements[3].value,
                    price: evt.target.elements[4].value,
                    statusId: evt.target.elements[5].value,
                }
            },
            ()=>{
                let baseUrl="http://localhost:9053/advertise";
                let username=evt.target.elements[0].value;
                baseUrl=baseUrl+"/"+username;
                axios.post(baseUrl, this.state.advtpost).then(
                    (response)=>{
                        console.log(response.data);
                    }
                )
            }
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <label>UserName</label>
                    <input></input>
                    <hr></hr>

                    <label>Title</label>
                    <input></input>
                    <br></br>

                    <label>Category Id</label>
                    <input></input>
                    <br></br>

                    <label>Description</label>
                    <input></input>
                    <br></br>

                    <label>Price</label>
                    <input></input>
                    <br></br>

                    <label>Status Id</label>
                    <input></input>
                    <br></br>

                    <button>Submit the advertisement</button>
                </form>
            </div>
        );
    }
}

export default Example1;