import React from 'react'

function List({todos}) {
  return (
    <ul className='todo-items'>
      {todos.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

export default List
