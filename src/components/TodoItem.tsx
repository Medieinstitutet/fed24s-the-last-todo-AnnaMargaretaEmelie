import { Todo } from "../models/Todo";

type TodoProps = {
  todo: Todo;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ todo, toggleDone, deleteTodo }: TodoProps) {
  return (
    <li onClick={() => toggleDone(todo.id)}>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
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
