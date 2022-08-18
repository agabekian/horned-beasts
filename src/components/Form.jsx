import React from 'react';
import Form from 'react-bootstrap/Form';

class Formz extends React.Component {
    render() {
        return (
            <div style={{margin:"auto", width:"30%", textAlign:"center"}}>
                <Form >
                    <Form.Label htmlFor='selector'> With how many horns? </Form.Label>
                    <Form.Select onChange={this.props.handleChange} id='selector' >
                        <option>Show all</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Select>
                </Form>
            </div>
        )
    }
}

export default Formz;