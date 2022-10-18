import './todos.css'
import { useState } from 'react';
import Loading from './Loading'
import { fetchCreate, fetchPatch } from '../util/api'

function Todos({todos, isPending}) {
  const [todoText, setTodoText] = useState('');

  const changeTodoText = (e) => {
    e.preventDefault()
    setTodoText(e.target.value)
  }

  const submitTodoItem = (e) => {
    e.preventDefault()
    debugger
    if (todoText !== '') {
  
      const fetchData = { 
        createAt: new Date().toLocaleDateString(),
        todo: todoText,
        status: "yet" 
      }
  
      fetchCreate('http://localhost:3001/todos/', fetchData)
      setTodoText('')
    }
  }

  const changeTodoStatus = (e) => {
    e.preventDefault()
    if (!e.target.checked) {
      let id = e.target.id
      const fetchData = {
        status: "done"
      }
      fetchPatch('http://localhost:3001/todos/', id, fetchData)
    }
  }

	return (
		<div className="todos">
      {isPending  && <Loading />}
			<form className="todos__task">
				<input type="text" name="" id="" placeholder="지금 당장 시작할 일은 무엇인가요?" onKeyUp={changeTodoText} />
				<button type="submit" className="todos__submit" onClick={submitTodoItem}>
					<i className="fa-solid fa-plus">+</i>
				</button>
			</form>
			<ul className="todos__list">
        {todos && todos.map(todo => (
          <li className="todos__list--item" key={todo.id}>
            <input type="checkbox" id={todo.id} name="" value="1" checked={todo.status === "done"? true : false} onChange={changeTodoStatus} />
            <label htmlFor={todo.id}>
              {todo.todo}<span></span>
            </label>
          </li>
        ))}
			</ul>
		</div>
	)
}

export default Todos
