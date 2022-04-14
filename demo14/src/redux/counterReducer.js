
export const initialState={ 

    indexValue:10
   
   }
   
   export const counterReducer=(state=initialState,action)=>
   
   { 
   
    switch(action.type){ 
   
      case 'inc':      
   
   console.log('incrementing...')    
   
   return{
   
         ...state,      
   
   indexValue: state.indexValue+1    
   
   } 
      case 'dec':      
   
   console.log('Decrementing...');
   
         return{
   
           ...state,        
   
   indexValue:state.indexValue-1 
   
        } 
   
        default: return state;  
   
   }
   
   }
   
   
   
   