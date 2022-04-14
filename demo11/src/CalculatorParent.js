import React, { Component } from 'react';
import CalculatorChild from './CalculatorChild';
class CalculatorParent extends Component {
    constructor(props) {

        super(props);
    
        this.state={
            total:0
        }
      }
      handleCallBack=(childData1,childData2)=>{
    
        this.setState(
    
          {
    
          total:parseInt(childData1)+parseInt(childData2)
    
          }
    
        )
    
      }
    
      render() {
    
        return (
    
          <div>
    
            <CalculatorChild parentCallBack={this.handleCallBack}></CalculatorChild>
    
            {this.state.total}
    
          </div>
    
        );
    
      }
    
    }
export default CalculatorParent;