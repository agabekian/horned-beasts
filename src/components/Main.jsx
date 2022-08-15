import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {
    render() { 
        return (
        <div>         
            <HornedBeast title="Unicorn" imageUrl="https://ctl.s6img.com/society6/img/oR0Rb4ywpKNNhJHXN9CREWWZ-hA/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8f09750116b447c4994628fa945dc54a/~~/unicorn3291983-prints.jpg?wait=0&attempt=0" description="pretty unicorn"/>
            <HornedBeast title="Unicorn" imageUrl="" description="fugly beast"/>
        </div>
        );
    }
}
 
export default Main ;