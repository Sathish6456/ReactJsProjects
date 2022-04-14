import React from 'react';
import { connect } from 'react-redux';
import { decrementF, incrementF } from './redux/CounterActions';

function CounterContainer(props) {
  return (
    <div>
      <h2>Count:{props.indexValue}</h2>
      <button onClick={props.incrementF}>Increment</button>
      <button onClick={props.decrementF}>Decrement</button>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return{
    indexValue:state.indexValue
  }
}
const mapDispactchToProps =(dispatch)=>{
  return{
    incrementF:()=>dispatch(incrementF()),
    decrementF:()=>dispatch(decrementF())
  }
}
export default connect(mapStateToProps,mapDispactchToProps)(CounterContainer);
