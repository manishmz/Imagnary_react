const intialState = {age: 0};
const reducer = (state = intialState, action) => {
    let newState = {...state};
    if(action.type == "add") {
        newState = {...state, age: state.age + action.val};
    }

    if(action.type == "subtract") {
        newState = {...state, age: state.age - action.val};
    }
    return newState;
}

export default reducer;