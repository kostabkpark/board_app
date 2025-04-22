import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    return (
        <>
            <h2>Detail.jsx</h2>
            <h3>
                요청 id : {id}
            </h3>
        </>
    )
}

export default Detail