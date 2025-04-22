import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import MyForm from "../MyForm"
function Save() {
    const [board, setBoard] = useState({
        title : "",
        contents : "",
        writer : "",
        passwd : ""
    })
    const onChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name] : value
        });
    };
    const boardSave = (e)=>{
        e.preventDefault();
        console.log(board);
        axios.post("http://localhost:5000/api/boards", {
            board : board
        }).then((res)=>{
            console.log(res);
        });
    }
    return (
        <>
            <h2>Save.jsx</h2>
            <Form onSubmit={boardSave}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={board.title} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWriter">
                    <Form.Label>writer</Form.Label>
                    <Form.Control type="text" placeholder="Enter writer" name="writer" value={board.writer} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContents">
                    <Form.Label>contents</Form.Label>
                    <Form.Control type="text" placeholder="Enter contents" name="contents" value={board.contents} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="passwd" value={board.passwd} onChange={onChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Save