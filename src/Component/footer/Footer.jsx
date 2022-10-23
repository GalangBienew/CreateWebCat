import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Footer() {
  return (
    <Form className="">
      <CardHeader className="m-auto p-3 h-auto text-center fw-bold">
        Contact me
      </CardHeader>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="password" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Footer;
