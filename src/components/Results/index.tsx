import * as React from "react"
import "./results.scss"

function pluralize(n: number, forms: Array<string>) {
  const correctForm = n % 10 === 1 && n % 100 !== 11
        ? forms[0]
        : (n % 10 >= 2 && n % 10 <= 4
        && (n % 100 < 10
            || n % 100 >= 20) ? forms[1] : forms[2])
  return `${n} ${correctForm}`
}

export const TodoResults = () => {
  const resultText = () => {
    // Исправить счетчик заданий, использовав функцию склонения
    return ''
  }

  return (
    <div className="todo-results">
      {resultText()}
    </div>
  )
}
