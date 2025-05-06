import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";

type TodoProps = {
  todos: Todo[];
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoList({ todos, toggleDone, deleteTodo }: TodoProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
