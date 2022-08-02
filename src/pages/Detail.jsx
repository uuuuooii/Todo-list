import { useSelector } from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
// useNavigate

export default function Detail() {
    let {id} = useParams()
    const navigate = useNavigate();
    const todoslist = useSelector((state)=> state.todos.todos)
    let copy = todoslist.find((x)=> x.id == id)


    return ( 
        <>
            <h2>상세페이지 입니다.</h2>
            <h1>ID {id.slice(-1)}</h1>
            <h1>{copy.title}</h1>
            <h1>{copy.contents}</h1>
            <button onClick={()=>navigate('/')}>돌아가기</button>
            {/* <button onClick={() => navigate(-1)}>Go back</button> */}
        </>
    );
}

