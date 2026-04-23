import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {

    let [todos,setTodos] = useState([{task:"Sample Task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos,{task: newTodo, id:uuidv4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue= (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };


    let upperCaseAll = () => {
        setTodos((prevTodos)=>(
            prevTodos.map((todo) => {
              return {
                  ...todo,
                  task: todo.task.toUpperCase(),
                };
            })
        ))
    }

    let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
        )
    );
};


    return(
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr width="300px"></hr>
            <h4>Task To Do</h4>
            <ul>
                {
                    todos.map((todo) => (
                       <li key = {todo.id}>
                         <span>{todo.task}</span>
                         &nbsp; &nbsp; &nbsp; 
                         <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                         &nbsp;&nbsp;
                         <button onClick={()=>upperCaseOne(todo.id)}>UpperCase</button>
                       </li>
                    )) 
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}