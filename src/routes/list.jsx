import { useEffect, useState } from "react";
import axios from "axios";
import MyTable from "../MyTable"

function List() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        const list_db = axios.get("http://localhost:5000/api/boards")
                            .then((res)=> {
                                console.log(res.data);
                            })
                            .catch((err)=>{
                                console.log(err);
                            });
        }, []);
    return (
        <>
            <h2>List.jsx</h2>
            <MyTable />
        </>
    )
}

export default List