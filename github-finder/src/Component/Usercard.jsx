import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Usercard = ({ data }) => {
  console.log(data);
  return (
    <Container className="container_card">
      {data.map((user) => (
        <Row key={user.avatar_url}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
              <Card.Title>{user.login}</Card.Title>
              <Link to={`/${user?.login}`}>
                <Button>View details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  );
};

export default Usercard;
