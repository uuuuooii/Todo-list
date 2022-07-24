import React from 'react';
import './style.css';

function Todo({ item, deleteItem, finishItem, cancelItem }) {
  return (
    <div className="todo-item">
     <div>
      <h2>{item.title}</h2>
      <div>{item.contents}</div>
      <div>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => finishItem(item.id )}className="finish-btn">Completion</button>
        <button onClick={() => cancelItem(item.id )}>{item.done ? 'Cancel' :'Completion'}</button>
      </div>
        
      </div> 
   </div>
  );
}
export default Todo;