import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicWriter">
        <Form.Label>writer</Form.Label>
        <Form.Control type="text" placeholder="Enter writer" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContents">
        <Form.Label>contents</Form.Label>
        <Form.Control type="text" placeholder="Enter contents" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm