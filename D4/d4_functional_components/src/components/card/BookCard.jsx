import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Le props sono passate come parametro

const BookCard = ({ title, category, img, btn }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
