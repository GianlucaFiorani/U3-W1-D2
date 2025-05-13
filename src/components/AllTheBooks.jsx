import { Card, Button, Row, Col, Container, Dropdown } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import { Component } from "react";

class AllThrBooks extends Component {
  state = {
    type: fantasy,
    drop: "Fantasy",
  };
  render() {
    return (
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="success my-2" id="dropdown-basic">
            {this.state.drop}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={() => this.setState({ type: fantasy, drop: "Fantasy" })}>
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => this.setState({ type: history, drop: "History" })}>
              History
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => this.setState({ type: horror, drop: "Horror" })}>
              Horror
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => this.setState({ type: romance, drop: "Romance" })}>
              Romance
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => this.setState({ type: scifi, drop: "Scifi" })}>
              Scifi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row xs={1} md={2} lg={4}>
          {this.state.type.slice(0, 28).map((book) => (
            <Col key={`book-${book.asin}`}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="warning">{book.price}$</Button>
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
