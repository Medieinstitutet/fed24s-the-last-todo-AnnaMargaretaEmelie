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
    emptyMessage: string,
    colorClass: string
  ) => (
    <section className="mb-10">
      <h2 className={`text-xl font-semibold mb-4 ${colorClass}`}>{text}</h2>
      {todosToShow.length > 0 ? (
        <ul className="space-y-3">
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
        <p className="text-gray-500 italic">{emptyMessage}</p>
      )}
    </section>
  );

  const activeTodos = todos.filter((todo) => !todo.done);
  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <>
      <div className="space-y-8">
        {showTodos(
          "Att göra",
          activeTodos,
          "Inga uppgifter kvar att göra!",
          "text-orange-800"
        )}
        {showTodos(
          "Klara",
          completedTodos,
          "Inga klara uppgifter än",
          "text-lime-800"
        )}
      </div>
    </>
  );
}
