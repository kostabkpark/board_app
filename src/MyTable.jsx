import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import  Table  from 'react-bootstrap/Table'

function MyTable(props) {
  const list = props.list;
  return (
    <Table striped bordered hover>
      <thead>
          <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>조회수</th>
          </tr>
      </thead>
      <tbody>
          {list.map((board)=>{
              return (
              <tr key={board.id}>
                  <td>
                    <Link to={{
                        pathname : `/api/boards/${board.id}`
                    }}>
                      {board.id}
                    </Link>
                  </td>
                  <td>
                    <Link to={{
                        pathname : `/api/boards/${board.id}`
                    }}>
                      {board.title}
                    </Link>
                  </td>
                  <td>{board.writer}</td>
                  <td>{board.createdAt}</td>
                  <td>{board.hits}</td>
              </tr>
              )
          })}
      </tbody>
    </Table>
  );
}

export default MyTable
