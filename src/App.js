import React, { useState, useReducer } from 'react'
import { act } from 'react-dom/test-utils';
import { ACTIONS } from "./actionTypes";
import Todo from './components/Todo';

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.TODO_EKLE:
      return [...todos, yeniTodoEkle(action.payload.name)]
    case ACTIONS.TODO_TAMAMLA:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, tamam: !todo.tamam }
        }
        return { ...todo };
      });

    case ACTIONS.TODO_SIL:
      return todos.filter(todo => todo.id !== action.id);

    default:
      return todos;
  }
};

const yeniTodoEkle = name => {
  return { id: Date.now(), name: name, tamam: false };
}

function App() {

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.TODO_EKLE, payload: { name: name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  )
}
export default App;