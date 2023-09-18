import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {allBooks, getBooksFromApi} from "../../reducers/booksReducer";


const Counter = () => {

    const dispatch = useDispatch()

    const completeBooks = useSelector(allBooks)

    const [counter, setCounter] = useState(0)

    const incrementCount = () => {
        setCounter((prevState) => prevState + 1)
    }

    const decrementCount = () => {
        setCounter(prevState => prevState - 1)
    }

    useEffect(() => {
        dispatch(getBooksFromApi())
    }, []);


    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        {counter}
                    </h1>
                    <button onClick={incrementCount}>
                        Incrementa
                    </button>
                    <button onClick={decrementCount}>
                        Decrementa
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Counter;
