import { combineReducers, createStore } from "redux";

// const initalState = {
//   value: 0,
//   showLabel: true,
// };

// function appReducer(prevState = initalState, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         value: prevState.value + 1,
//       };
//     case "decrement":
//       return {
//         value: prevState.value - 1,
//       };
//     case 'show-label':
//         return{
//             ...prevState,
//             showLabel:action.payload
//         }
//     default:
//       return prevState;
//   }
// }

// function appReducer(prevState = initalState, action) {
//     return{
//         value : valueReducer(prevState.value,action),
//         showLabel : showLabelReducer(prevState.showLabel,action)
//     }
// }

//CombineReducers

const appReducer = combineReducers({
    value : valueReducer,
    showLabel :showLabelReducer
})

function valueReducer(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
    default:
      return prevState;
  }
}

function showLabelReducer(prevState = true, action) {
  switch (action.type) {
    case "show-label":
      return action.payload;

    default:
      return prevState;
  }
}

function increment(){
    return{
        type :'increment'
    }
}

function decrement(){
    return{
        type :'decrement'
    }
}

function setShowLabel(payload){
    return{
        type :'show-label',
        payload:payload
    }
}
const store = createStore(appReducer);

export default store;

export {
    increment,
    decrement,
    setShowLabel
}
