import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     likes: 0
        // }
    }
    // upvote = (e) => {
    //     console.log(this);
    //     this.setState({ likes: this.state.likes + 1 });
    // }
    // increment = (e) => {
    //     // increment the counter
    //     let nextState = {
    //         count: this.state.count + 1
    //     }
    //     this.setState(nextState);
        // this.setState( { count: this.state.count + 1 })
        // this.setState( { count })
    // }
    render() {

        return (

            <div>
                {
                    data.map((beast, idx) => <HornedBeast
                        key={idx}
                        title={beast.title}
                        description={beast.description}
                        image_url={beast.image_url}
                        // upvote={this.upvote}
                        // likes={this.state.likes}
                    />)
                }
            </div>
        );
    }
}

export default Main;