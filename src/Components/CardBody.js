import Card from "./Cards"

const { Fragment } = require("react")

const CardBody = (props)=> {
    return <Fragment>
        <div className="card-body">
            <span>{props.children}</span>
        </div>
    </Fragment>
}
export default CardBody;