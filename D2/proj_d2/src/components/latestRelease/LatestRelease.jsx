import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap/';
import fantasyBooks from "../../data/fantasy.json"
import { nanoid } from 'nanoid';
import BookCard from '../card/BookCard';

class LatestRelese extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
<Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-4'>
                        {
                            //Metodo giusto 
                        }
                        {fantasyBooks.map((book) => (
                            <BookCard key={nanoid()}
                                img={book.img}
                                title={book.title}
                                category={book.category}
                                btn="Ciao"
                            />
                        ))}
                    </Col>
                </Row>
            </Container>        )
    }
}


export default LatestRelese;