import React from 'react'
import type { Todo } from '../pages/TodoList';

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (targetId: number) => void;
    toggleTodo :(targetId: number) => void;
}

export default function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          toggleTodo(todo.id);
        }}


      />
      <span
        className={todo.isDone ? 'text-decoration: line-through text-gray-400' : ''}
      >{todo.text}
      </span>
      <span></span>
      <button
        onClick={(e) => {
          e.stopPropagation(); //맨 위에 작성, 밑에 작성하면 에러가 발생했을 때 읽히지 않아서 추가 에러 발생 가능
          deleteTodo(todo.id);
        }}
      >삭제
      </button>
    </div>
  )
}