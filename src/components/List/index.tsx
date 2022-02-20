import * as React from "react"
import { Checkbox } from "../Checkbox"
import "./list.scss"
import { useAppSelector } from "../../app/hooks"
import { TodoActions } from "../../app/store"

export const TodoList = () => {
  const todos = useAppSelector(state => state.todo.todos)
  const completeTodos = todos.filter(todo => todo.checked)

  const handleDelete = (id: number) => {
    TodoActions.deleteTodo(id)
  }

  const toggleCheck = (id: number) => {
    TodoActions.toggleCheckTodo(id)
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Список заданий {todos.length ? `(${completeTodos.length}/${todos.length})` : ''}</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              text={todoItem.text}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          У Вас нет заданий на ближайшее время!
        </div>
      )}
    </div>
  )
}
