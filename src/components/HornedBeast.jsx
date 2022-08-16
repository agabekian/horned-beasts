import React, { Component } from 'react';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }
    upvote = (e) => {
        console.log(this);
        this.setState({ likes: this.state.likes + 1 });
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.desciption} title="this.props.desciption"></img>
                <p>{this.props.description}</p>
                <h1>{this.state.likes}</h1>
                <button onClick={this.upvote}>VOTE</button>
            </div>
        );
    }
}

export default HornedBeast;