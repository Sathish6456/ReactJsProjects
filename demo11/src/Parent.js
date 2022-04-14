import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {

    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }

    handleCallBack=(childData)=>{
        this.setState(
            {
                name:childData
            }
        )
    }
    render() {
        return (
            <div>
                <Child parentCallBack={this.handleCallBack}></Child>
                {this.state.name}
            </div>
        );
    }
}

export default Parent;