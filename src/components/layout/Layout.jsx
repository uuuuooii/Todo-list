import { useState } from 'react';
// import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import Header from '../header/Header';

const Layout = () => {
  const [todoList, setTodoList] = useState([]);
  const addItem = (title, contents) => {
    const newItem = {
      id: todoList.length + 1, // id 값
      title: title, // 제목
      contents: contents, // 내용
      done: false, // 완료했는지 아닌지
    };
    const newItems = [...todoList, newItem];
    setTodoList(newItems);
  };
  
  //디스패치하고 딜리트 투드 하고 아이디
  
  const deleteItem = (id) => { //삭제 기능을 핸들링 할수 있는 함수 추가
    const newItems = [...todoList].filter((item) => item.id !== id); //리액트가 제 랜더링하면 화면에 반영이 됩니다. 이럴때 리액트에서는 useState를 사용합니다.
    setTodoList(newItems);
  };

  const finishItem = (id) => {
    console.log(id);
    const newTodos = [...todoList].map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    console.log(newTodos);

    setTodoList(newTodos);
  };

  const cancelItem = (id) => {
    const newTodos = [...todoList].map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    setTodoList(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem} />
      <List 
      todoList={todoList} 
      deleteItem={deleteItem} 
      finishItem={finishItem} 
      cancelItem={cancelItem} />
    </div>
  );
};

export default Layout;