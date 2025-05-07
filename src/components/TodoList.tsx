import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";

type TodoProps = {
  todos: Todo[];
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoList({ todos, toggleDone, deleteTodo }: TodoProps) {
  const showTodos = (
    text: string,
    todosToShow: Todo[],
    emptyMessage: string
  ) => (
    <section>
      <h2>{text}</h2>
      {todosToShow.length > 0 ? (
        <ul>
          {todosToShow.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
    </section>
  );

  const activeTodos = todos.filter((todo) => !todo.done);
  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <>
      <div>
        {showTodos("Att göra", activeTodos, "Inga uppgifter kvar att göra!")}
        {showTodos("Klara", completedTodos, "Inga klara uppgifter än")}
      </div>
    </>
  );
}
