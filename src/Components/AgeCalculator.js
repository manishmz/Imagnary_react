const { Fragment } = require("react")
const {connect} = require("react-redux");

const AgeCalculator = (props) => {
    const addAge = () => {
        props.addAge(1);
    }
    const subtractAge = () => {
        props.subtractAge(1);
    }

    return <Fragment>
        <h4>Age: {props.age}</h4>
        <button onClick={addAge}>Add Age</button>
        <button onClick={subtractAge}>Subtract Age</button>
    </Fragment>
}

const mapStateToProps = (state) => {
    return {age: state.age};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAge: (val) => {dispatch({val, type: "add"})},
        subtractAge: (val) => {dispatch({val, type: "subtract"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeCalculator);