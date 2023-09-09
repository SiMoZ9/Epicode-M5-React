import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Col, Row} from 'react-bootstrap/'

class Counter extends Component {
    constructor(props) {
        super(props);
        
        // stati componente
        this.state = {
            counter: 0
        }

    }

    incrementCounter() {
        this.setState((prevstate) => ({
            counter: prevstate.counter + 1
        }))
    }

    decrementCounter() {
        this.setState((prevstate) => ({
            counter: prevstate.counter === 0 ? 0 : prevstate.counter - 1
        }))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                            {this.state.counter}
                            </h1>
                    </Col>
                    <button onClick={() => this.incrementCounter()}>Incrementa</button>
                    <button onClick={() => this.decrementCounter()}>Decrementa</button>
                </Row>
            </Container>
        )
    }
}

export default Counter