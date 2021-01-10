const { Fragment } = require('react');

function CardHeading(props) {
    return <Fragment>
        <div className="card-heading">
            {props.children}
        </div>
    </Fragment>
}

export default CardHeading;