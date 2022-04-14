import React, { Component } from 'react';

class Child extends Component {

    onTrigger = (evt) => {



        this.props.parentCallBack(evt.target.elements[0].value);

        evt.preventDefault();

    }

    render() {

        return (

            <div>

                <form onSubmit={this.onTrigger}>

                    <input type="text" placeholder="Enter Name"></input>

                    <button>Submit</button>

                </form>

            </div>

        );

    }

}

export default Child;