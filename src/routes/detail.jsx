import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import MyListGroup from "../MyListGroup";

function Detail() {
    const {id} = useParams();
    const [board, setBoard] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/boards/${id}`)
            .then((res)=>{
                console.log(res.data);
                setBoard(res.data);
            });
        },[]);
    return (
        <>
            <h2>Detail.jsx</h2>
            <MyListGroup board={board} />
        </>
    )
}

export default Detail