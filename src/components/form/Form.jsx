import uuid from "react-uuid"
import { useState } from 'react';
import './style.css';
import { useDispatch,useSelector } from "react-redux"
import {addTodo} from "../../redux/modules/todos"

let num = 1

function Form() {
  const todos = useSelector((state) => state.todos.todos);

  console.log(todos)
  const [inputTitle, setInputTitle] = useState('');
  const [inputContents, setInputContents] = useState('');
  const dispatch = useDispatch();
  
  const newItem = {
    id: uuid(), // id 값
    title: inputTitle, // 제목
    contents: inputContents, // 내용
    done: false, // 완료했는지 아닌지
  };
  console.log(newItem.id)


  //데이터를 액션 크리에이터에 넣어서 dispatch 한다.
  const addItemList = () => {
    setInputTitle('');
    setInputContents('');
    dispatch(addTodo(newItem))
    num++
  }


  return (
    <div className='main'>
      <div className="form">
        <label className='box'>
          <p>Title</p>
          <input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <p>Contents</p>
          <input
            value={inputContents}
            onChange={(e) => setInputContents(e.target.value)}
          />
        </label>
        <button onClick={() => addItemList()} className="btn">
          Add todo
        </button>
      </div>
    </div>
  );
}
export default Form;