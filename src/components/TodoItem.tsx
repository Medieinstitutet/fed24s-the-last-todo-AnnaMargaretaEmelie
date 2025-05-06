import { Todo } from "../models/Todo";

type TodoProps = {
  todo: Todo;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ todo, toggleDone, deleteTodo }: TodoProps) {
  return (
    <li
      onClick={() => toggleDone(todo.id)}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      <strong>{todo.text}</strong>
      <br />
      <span>Ansvarig: {todo.category}</span>
      <br />
      <span>Prioritet: {todo.priority}</span>
      <br />

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      >
        Ta bort
      </button>
    </li>
  );
}
