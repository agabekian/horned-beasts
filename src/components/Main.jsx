import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
    render() {

        return (

            // <div>
            <Container fluid>
                <Row>

                    {
                        this.props.allBeastData.map((beast, idx) =>
                            <Col lg ={3} md={4} sm={6} >
                                <HornedBeast
                                    key={beast._id}
                                    title={beast.title}
                                    description={beast.description}
                                    image_url={beast.image_url}
                                    showModal = {this.props.showModal}
                                    handleOpen = {this.props.handleOpen}
                                    // modalPop = {modalPop}
                                    
                                />
                            </Col>)
                    }
                </Row>
            </Container>
            // </div>
        );
    }
}

export default Main;