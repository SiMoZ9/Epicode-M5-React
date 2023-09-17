import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Col, Row } from 'react-bootstrap/'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(
            (prevstate) => prevstate + 1
        )
    }

    const decrementCounter = () => {
        setCounter(
            (prevstate) => (prevstate === 0) ? 0 : prevstate - 1
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        {counter}
                        </h1>
                </Col>
                <button onClick={incrementCounter}>Incrementa</button>
                <button onClick={decrementCounter}>Decrementa</button>
            </Row>
        </Container>
    )
}

export default Counter;