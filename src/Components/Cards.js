import React, {Component, Fragment} from 'react';
import CardHeading from './CardHeading';
import CardBody from './CardBody';
class Card extends Component{
    render(){
        return <Fragment>
            <div className="card">
                <CardHeading>{this.props.title}</CardHeading>
                <CardBody>{this.props.children}</CardBody>
            </div>
        </Fragment>
    }
}

export default Card;