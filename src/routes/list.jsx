import { useEffect, useState } from "react";
import axios from "axios";
import MyTable from "../MyTable"
import 'bootstrap/dist/css/bootstrap.min.css'
import  Table  from 'react-bootstrap/Table'

function List() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/boards")
            .then((res)=> {
                setList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });         
    }, []);
    //console.log("list", list);
    return (
        <>
            <h2>List.jsx</h2>
            <MyTable list={list} />
        </>
    )
}

export default List