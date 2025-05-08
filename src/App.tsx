import { useState } from "react";
import { Todo } from "./models/Todo";
import "./App.css";
import { SortButtons } from "./components/SortButtons";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Köpa mjölk",
      done: false,
      category: "Fredrik",
      priority: 2,
    },
    {
      id: 2,
      text: "Plugga React",
      done: false,
      category: "Anna",
      priority: 1,
    },
  ]);
  const addTodo = (newTodo: Todo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const sortByPriority = () => {
    setTodos([...todos].sort((a, b) => a.priority - b.priority));
  };

  const sortByCategory = () => {
    setTodos([...todos].sort((a, b) => a.category.localeCompare(b.category)));
  };

  return (
    <>
      <div>
        <h1 className="text-7xl mb-5">Family todos</h1>
        <AddTodoForm addTodo={addTodo} />
        <SortButtons
          sortByPriority={sortByPriority}
          sortByCategory={sortByCategory}
        ></SortButtons>
        <TodoList
          todos={todos}
          toggleDone={(id) =>
            setTodos((todos) =>
              todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
              )
            )
          }
          deleteTodo={(id) =>
            setTodos((todos) => todos.filter((todo) => todo.id !== id))
          }
        ></TodoList>
      </div>
    </>
  );
}

export default App;
