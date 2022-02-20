import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoItem = {
  id: number
  text: string
  checked: boolean
}

const todosTemplate: Array<TodoItem> = [
  {
    id: 0,
    text: "Исправить отображение задач",
    checked: false
  },
  {
    id: 1,
    text: "Исправить лэйаут, отображение должно быть в колонках",
    checked: false
  },
  {
    id: 2,
    text: "Исправить добавление задач",
    checked: false
  },
  {
    id: 3,
    text: "Исправить функцию завершения задания",
    checked: false
  },
  {
    id: 4,
    text: "Исправить удаление задания",
    checked: false
  },
  {
    id: 5,
    text: "Исправить счетчик завершенных заданий",
    checked: false
  }
]

export interface TodoState {
  todos: Array<TodoItem>
}

const initialState: TodoState = {
  todos: [],
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoItem['text']>) => {
      const newTodo = {
        id: state.todos.length,
        text: action.payload,
        checked: false
      }
      state.todos = state.todos.concat(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<TodoItem['id']>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleCheckTodo: (state, action: PayloadAction<TodoItem['id']>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {...todo, checked: !todo.checked}
        }
        return todo
      })
    },
  },
})

export const { createTodo, deleteTodo, toggleCheckTodo } = counterSlice.actions

export default counterSlice