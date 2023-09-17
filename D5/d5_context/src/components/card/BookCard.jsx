import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {PostProvider} from "../../context/BooksContext";

// Le props sono passate come parametro

const BookCard = () => {
    const {posts, isLoading, getPosts} = useContext(PostProvider)
    console.log('Card: ', posts)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top"/>
      <Card.Body>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
