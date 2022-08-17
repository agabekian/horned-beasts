import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        data.map((beast, idx) =>
                            <Col key={beast._id} lg={3} md={4} sm={6} >
                                <HornedBeast
                                    title={beast.title}
                                    description={beast.description}
                                    image_url={beast.image_url}
                                    showModal={this.props.showModal}
                                    handleOpen={this.props.handleOpen}
                                />
                            </Col>)
                    }
                </Row>
            </Container>
        );
    }
}

export default Main;