import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends Component {
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