import { Card, Button } from "react-bootstrap";

const CardProject = ({ list }) => {
  return (
    <Card className="text-center">
      <Card.Header>
        {list.title}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {list.subtitle}
        </Card.Title>
        <Card.Text>
          {list.description}
        </Card.Text>
        <Button variant="primary">Github Repo</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {list.time}
      </Card.Footer>
    </Card>
  );
};
export default CardProject;
