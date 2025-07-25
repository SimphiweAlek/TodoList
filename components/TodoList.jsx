import React from 'react'

export default function TodoList() {

    //An array of todo list items
    let todoList = ['Example 1'];

  return (
    <div>
        <ul className='main'>
            {todoList.map((todo, todoIndex) => {
                return (
                    <li className='todoItem' key={ todoIndex }> { todo } </li>
                )
            })}
        </ul>
    </div>
  )
}
