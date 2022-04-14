import React, { Component } from 'react';

class CalculatorChild extends Component {
    onTrigger=(evt)=>{

        this.props.parentCallBack(evt.target.elements[0].value,evt.target.elements[1].value)
    
        evt.preventDefault();
    
      }
    
      render() {
    
        return (
    
          <div>
    
            <form onSubmit={this.onTrigger}>
    
              <input type="text" placeholder="Enter Number"></input><br></br>
    
              <input type="text" placeholder="Enter Number"></input>
    
              <button>Submit</button>
    
            </form>
    
          </div>
    
        );
    
      }
    
    }
export default CalculatorChild;