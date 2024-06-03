import { Card, Button, Badge } from "react-bootstrap";

const CardProject = ({ list }) => {
  return (
    <Card className="shadow bg-white rounded p-3 mb-5">
      <Card.Body>
        <Card.Title>
          {list.title} {list.icon}
        </Card.Title>
        <Card.Text>
          {list.description}
        </Card.Text>
        <div className="d-flex">
          <Button href={list.link} variant="outline-secondary" className="mx-2">
            <i className="fa fa-brands fa-github" /> Clone Project
          </Button>
          <Button href={list.link} variant="outline-secondary">
            <i className="fa fa-brands fa-github" /> Repo
          </Button>
        </div>
        <hr />
        <Card.Text className="d-flex flex-wrap">
          Languages:{" "}
          {list.skills.map((skill, index) =>
            <Badge key={index} bg="light" text="dark" className="mx-2">
              {skill}
            </Badge>
          )}
        </Card.Text>
        <Card.Text>
          <span>
            <a
              className="link-dark"
              style={{ textDecoration: "none" }}
              href={`${list.link}/stargazers`}
            >
              <i className="fa fa-brands fa-github" /> Stars
            </a>
          </span>
          <span className="text-secondary mx-4">
            {list.time}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardProject;
