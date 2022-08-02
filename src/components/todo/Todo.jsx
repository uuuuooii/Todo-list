import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import { removeTodo, createTodo, cancelTodo } from '../../redux/modules/todos'


function Todo({ item, deleteItem, finishItem, cancelItem }) {
  const dispatch = useDispatch();
  return (
    <div className="todo-item">
     <div>
     <Link to= {`/detail/${item.id}`}>상세보기</Link>
      <h2>{item.title}</h2>
      <div>{item.contents}</div>
      <div>
        <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
        <button onClick={() => dispatch(cancelTodo(item.id))}>{item.done ? 'Cancel' :'Completion'}</button>
      </div>
        
      </div> 
   </div>
  );
}
export default Todo;