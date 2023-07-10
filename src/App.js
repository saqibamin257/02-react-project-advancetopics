//#region Exe-1 Increment Decrement Counter

// import React from 'react';
// import Employee from './Exe-1-Increment&Decrement/Employee';
// import { legacy_createStore as createStore} from 'redux';
// import { Provider } from 'react-redux';

// const employeeData={
//   salary:15000
// };

// const reducer=(state=employeeData,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return {salary:state.salary+1000};
    
//     case 'DECREMENT':
//       return {salary:state.salary-1000};

//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);


// const App=()=>(
//   <Provider store={store}>
//     <Employee></Employee>
//   </Provider>
// );

// export default App;

//#endregion


//#region Exe-2 Different Increment Decrement Counter.
// import {useSelector,useDispatch} from 'react-redux'
// import {addOne,subOne,addSome,subSome,reset} from './Exe-2-DifferentIncrement&Decrement/store/actions/count.actions'

// function App (){
//   const dispatch = useDispatch();
//   const count = useSelector(state =>state.count);

//   return(    
//       <div className='App'>
//         <p>
//           Count is: {count}
//         </p>
//         <div>
//           <button onClick={()=>dispatch(addOne())}>Add 1</button>
//           <button onClick={()=>dispatch(subOne())}>Sub 1</button>
//           <button onClick={()=>dispatch(addSome(10))}>Add Some</button>
//           <button onClick={()=>dispatch(subSome(10))}>Sub Some</button>
//           <button onClick={()=>dispatch(reset())}>Reset</button>
//         </div>
//       </div>
    
//   )
// }
// export default App

//#region Exe-3 Redux ToolKit.

import {useSelector,useDispatch} from "react-redux";
import {addOne,subOne,addSome,subSome,reset} from "./Exe-3-ReduxToolKit/store/slices/count.slice";


function App () {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counter.count)

  return(
    <div className="App">
      <p>Count is: {count}</p>
      <div>
          <button onClick={() => dispatch(addOne())}>Add 1</button>          
          <button onClick={() => dispatch(subOne())}>Decrease 1</button>
          <button onClick={() => dispatch(addSome(10))}>Add 10</button>
          <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>
          <button onClick={() => dispatch(reset())}>Reset count</button>
        </div>
    </div>
  )
}

export default App