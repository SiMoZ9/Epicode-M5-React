import React from "react";
import {Col, Row} from "react-bootstrap";
import BookCard from "../card/BookCard";
import Container from "react-bootstrap/Container";


const LatestRelease = ({ fantasyBooks }) => {
    return (
        <Container>
            <Row>
                <Col className="d-flex flex-wrap gap-4">
                    {fantasyBooks.map((book) => (
                        <BookCard
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            btn="Bottone"
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default LatestRelease;
