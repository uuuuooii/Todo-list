// 액션
const ADD_TODO = "todo/ADD_TODO"; //창 추가
const REMOVE_TODO = "todo/REMOVE"; //창 없앰
const CREATE_TODO = "todo/CREATE"; //완료
const CANCEL_TODO = "todo/CANCEL"; //취소

// 액션 크리에이터
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
}
export function createTodo(todo) {
  return { type: CREATE_TODO, todo };
}
export function cancelTodo(todo) {
  return { type: CANCEL_TODO, todo };
}

// 초기값
const initialState = {
  todos: [],
};

// 리듀서
function reducer(state = initialState, action) {
  //state 초기값 , action 받아온 값
  switch (action.type) {
    case "todo/ADD_TODO": {
      console.log(action.todo);
      const newTodos = [...state.todos, action.todo];
      return { todos: newTodos };
    }
    case "todo/REMOVE": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.todo);
      return { todos: newTodos };
    }
    // case "todo/CANCEL": {
    //   const newTodos = state.todos.map((todo) => {
    //     if (todo.id === action.todo) {
    //       todo.done = !todo.done;
    //     }
    //   });
    //   return { todos: newTodos };
    // }

    // case "todo/CANCEL":
    //   return {
    //     ...state,
    //     todos: state.todos.map(function (todo) {
    //       if (todo.id === action.todo) {
    //         return {
    //           ...todo,
    //           done: !todo.done,
    //         };
    //       } else {
    //         return { ...todo };
    //       }
    //     }),
    //   };

    case "todo/CANCEL": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.todo) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default reducer;
