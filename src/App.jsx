import './App.css'
import { useState } from 'react'
import List from './components/List'

function App() {
  let [todos, setTodos] = useState([
    'Wake up at 6:00 am',
    'Go to school',
    'Work on my project',
  ])
  const [todo, setTodo] = useState('')
  const addTodo = (event) => {
    event.preventDefault()
    if(todo.trim() === "") return 
    setTodos([...todos, todo])
    setTodo("")
  }

  return (
    <div className="App">
      <form className="todo-input" onSubmit={addTodo}>
        {/* <input type="text" name="todo" /> */}
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add task</button>
      </form>
      <List todos={todos} />
    </div>
  )
}

export default App
