import { Card, Button, Row, Col, Container } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import { Component } from "react";

class AllThrBooks extends Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={2} lg={4}>
          {fantasy.slice(0, 25).map((book) => (
            <Col key={`book-${book.asin}`}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">{book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllThrBooks;
