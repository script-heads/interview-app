import * as React from "react"
import "./checkbox.scss"

type CheckboxTypes = {
  onClick: () => void
  checked: boolean
  onDelete: () => void
  text: string
  onKeyUp: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

export const Checkbox = ({ checked, text, onClick, onDelete, onKeyUp }: CheckboxTypes) => (
  <div className="checkbox">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span className={checked ? "checkbox-checked" : ""}>{text}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
)