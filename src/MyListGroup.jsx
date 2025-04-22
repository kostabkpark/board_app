import ListGroup from 'react-bootstrap/ListGroup';

function MyListGroup({board}) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>{board.id}</ListGroup.Item>
      <ListGroup.Item>{board.title}</ListGroup.Item>
      <ListGroup.Item>{board.contents}</ListGroup.Item>
      <ListGroup.Item>{board.hits}</ListGroup.Item>
      <ListGroup.Item>{board.createdAt}</ListGroup.Item>
      <ListGroup.Item>{board.writer}</ListGroup.Item>
    </ListGroup>
  );
}

export default MyListGroup;