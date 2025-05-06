import { useState } from "react";
import { Todo } from "./models/Todo";

import "./App.css";

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
      </div>
    </>
  );
}

export default App;
