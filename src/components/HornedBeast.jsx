import React, { Component } from 'react';

class HornedBeast extends Component {

    render() { 
        return (
            <div>
                {this.props.title}
                <img src={this.props.ImageUrl}></img>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
 
export default HornedBeast;