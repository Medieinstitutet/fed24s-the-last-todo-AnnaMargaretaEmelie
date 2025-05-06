import { useState } from "react";
import { Todo } from "./models/Todo";

import "./App.css";
import { TodoList } from "./components/TodoList";

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
  return (
    <>
      <div>
        <h1>Family todos</h1>
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
