import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasyBooks from "../../data/fantasy.json"
import { nanoid } from 'nanoid';

class Main extends Component {

    constructor(self) {
        super(self);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {fantasyBooks.map((books) => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img key={ nanoid() } variant="top" src={books.img} />
                                <Card.Body>
                                    <Card.Title>{books.title}</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main