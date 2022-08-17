import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            <Card style={{ width: "40%", margin: "auto", padding: "15px" }}>
                <Card.Img style={{ width: "40%", margin: "auto" }} variant="bottom" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <h1>Likes: {this.state.likes}</h1>
                <Button style={{ width: "15%", margin: "auto" }} className="btn-small" variant="primary" onClick={this.upvote}>VOTE</Button>
            </Card>
        );
    }
}

export default HornedBeast;