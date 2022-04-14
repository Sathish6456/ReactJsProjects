import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0

        }

    }

    countUpdate=(evt)=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    componentWillMount() {
        console.log("ComponentMountingWillStart")

    }

    componentDidMount() {
        console.log("ComponentMounted");
    }

    componentWillReceiveProps(nextProps) {
        console.log("ComponentReceving props...");
        console.log(nextProps.age);
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Static ComponentReceving props");
        console.log(props.age);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update i executed");
        console.log(nextProps);
        console.log(nextState);
        return true;

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.countUpdate}>Click </button>
            </div>
        );
    }
}

Example1.propTypes = {

};

export default Example1;