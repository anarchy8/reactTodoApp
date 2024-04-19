import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import './index.css'

function App() {

  const [todoInput, SetTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const add = () => {
    if (!todoInput) {
      alert("todo boş")
      return;
    }
    const todo = {
      id: Math.floor(Math.random() * 999999),
      value: todoInput
    }
    setTodos(oldTodos => [...oldTodos, todo])
    SetTodoInput("")
  }

  const deleteTodo = (id) => {
    const newArr = todos.filter(todo => todo.id !== id)
    setTodos(newArr);
  }


  return (
    <>
      <h1 className='title'><FaReact className='titleIcon' />React ToDo App</h1>
      <div className='container'>
        <div className='input-btn-div'>
          <input onChange={e => SetTodoInput(e.target.value)} value={todoInput} className='todo-input' type="text" />
          <button onClick={add} className='add-btn'>add</button>
        </div>
        <div className='todolist custom-scroll'>
          {
            todos.map(todo => {
              return (
                <div key={todo.id} className='todobox'>
                  <p>{todo.value}</p>
                  <div className='box-icons'>
                    <IoMdTrash onClick={() => deleteTodo(todo.id)} className='box-icon' />
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
