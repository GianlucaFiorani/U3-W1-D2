import { Container, Alert } from "react-bootstrap";
function Welcome() {
  return (
    <>
      <Container>
        <Alert className="mt-3 text-center fs-2" variant="secondary">
          Welcome to EpicBook
        </Alert>
      </Container>
    </>
  );
}
export default Welcome;
