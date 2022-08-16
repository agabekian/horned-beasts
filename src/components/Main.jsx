import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
import ListGroup from 'react-bootstrap/ListGroup';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <div>
                {
                    data.map((beast, idx) => <HornedBeast
                        key={idx}
                        title={beast.title}
                        description={beast.description}
                        image_url={beast.image_url}
                    />)
                }
            </div>
        );
    }
}

export default Main;