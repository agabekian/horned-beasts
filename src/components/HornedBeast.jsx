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
        this.setState({ likes: this.state.likes + 1 });
    }
    render() {
        return (
            <Card style={{ height: "100%" }} >
                <Card.Img onClick={this.props.handleOpen} alt={this.props.title} variant="bottom" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <h1>Likes: {this.state.likes}</h1>
                <Button style={{ margin: "20px" }} className="btn-small" variant="primary" onClick={this.upvote}>VOTE</Button>
            </Card>
        );
    }
}

export default HornedBeast;