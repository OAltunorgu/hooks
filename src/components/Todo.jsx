import React from 'react'
import { ACTIONS } from "../actionTypes"

const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span style={{ background: todo.tamam ? "#564" : "red" }}> {todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TODO_TAMAMLA, id: todo.id })}>Tamamla</button>
            <button onClick={() => dispatch({ type: ACTIONS.TODO_SIL, id: todo.id })}>Sil</button>
        </div >
    );
}
export default Todo;