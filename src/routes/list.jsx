import { useEffect, useState } from "react";
import axios from "axios";
//import MyTable from "../MyTable"
import 'bootstrap/dist/css/bootstrap.min.css'
import  Table  from 'react-bootstrap/Table'

function List() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/boards")
            .then((res)=> {
                console.log("res.data", res.data);
                setList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });         
    }, []);
    console.log("list", list);
    return (
        <>
            <h2>List.jsx</h2>
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
                            <td>{board.id}</td>
                            <td>{board.title}</td>
                            <td>{board.writer}</td>
                            <td>{board.createdAt}</td>
                            <td>{board.hits}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default List