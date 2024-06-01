import { Card, Button } from "react-bootstrap";

const CardProject = ({ list }) => {
  return (
    <Card className="shadow p-3 mb-5 bg-white rounded">
      <Card.Header as="h5">
        {list.title} {list.icon}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {list.description}
        </Card.Text>
        <Card.Text>
          Skills: {list.skills}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <Button href={list.link} variant="outline-secondary">
          <i className="fa fa-brands fa-github" /> Github Repo
        </Button>
        <p>
          {list.time}
        </p>
      </Card.Footer>
    </Card>
  );
};
export default CardProject;
