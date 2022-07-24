import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

// props안에는 TodoList가 있음
function List({ todoList, deleteItem, finishItem, cancelItem,item}) {
  return (
    <div className='title'>
      <div>
        {/* 완료 전 */}
        <h3 >Working.. 🔥</h3>
        
        {[...todoList].map((item) => {
          if (item.done === false) {
            return (
              <Todo
                item={item}
                deleteItem={deleteItem}
                finishItem={finishItem}
                cancelItem={cancelItem}
                key={item.id}
              />
            );
          }
        })}
      </div>

      {/* 완료  */}
      <div>
        <h3>Done..! 🎉</h3>
        
        {[...todoList].map((item) => {
          if (item.done === true) {
            return (
              <Todo
                item={item}
                deleteItem={deleteItem}
                finishItem={finishItem}
                cancelItem={cancelItem}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
export default List;
