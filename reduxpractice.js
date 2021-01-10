const {createStore} = require("redux");

const initialState = {val: 1};

const reducer = (state = initialState, action) => {
    if(action.type == "add") {
        return {...state, val: state.val + action.val};
    }

    if(action.type == "subtract") {
        return {...state, val: state.val - action.val};
    }

    return state;
}
const store = createStore(reducer);

store.subscribe(()=>{ console.log(store.getState());});

store.dispatch({val: 1, type: "add"});
store.dispatch({val: 2, type: "add"});
store.dispatch({val: 3, type: "add"});