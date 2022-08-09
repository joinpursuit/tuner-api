import { Card, Button } from "react-bootstrap";

function Error() {
  return (
    <Card style={{ width: "18rem" }} className="m-auto mt-5">
      <Card.Body>
        <Card.Title>ERROR</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Oops, Invalid Page.
        </Card.Subtitle>

        <Button variant="outline-success" type="submit" className="mt-3">
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Error;
