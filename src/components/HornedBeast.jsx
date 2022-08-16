import React, { Component } from 'react';

class HornedBeast extends Component {

    render() { 
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.desciption} title="this.props.desciption"></img>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
 
export default HornedBeast;