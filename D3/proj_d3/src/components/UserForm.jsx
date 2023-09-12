import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

class UserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FirstName: '',

            LastName: '',
            email: '',
            errors: {
                FirstName: '',
                LastName: ''
            }
        };
    }

    validateForm() {
        const { FirstName, LastName } = this.state;
        let errors = {};

        if (FirstName.trim() === "") errors.FirstName = "First name is required";
        if (LastName.trim() === "") errors.LastName = "Last name is required";
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { FirstName, LastName, email } = this.state;

        this.validateForm();
        // POST invia questo come payload
        console.log("Done")
    }

    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name='FirstName'
                            value={this.state.FirstName}
                            type="text"
                            placeholder="First name"
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name='LastName'
                            value={this.state.LastName}
                            type="text"
                            placeholder="Last name"
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            required
                            name='email'
                            value={this.state.email}
                            type="email"
                            placeholder="email"
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                </Row>

                <Button type="submit">Submit form</Button>
            </Form>
        );

    }
}

export default UserForm;