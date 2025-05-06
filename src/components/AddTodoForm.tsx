import { useState } from "react";
import { Todo } from "../models/Todo";

type TodoProps = {
  addTodo: (todo: Todo) => void;
};

export function AddTodoForm({ addTodo }: TodoProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !category.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
      category,
      priority,
    };

    addTodo(newTodo);

    setText("");
    setCategory("");
    setPriority(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vad ska göras?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Vem är ansvarig?"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        min={1}
        max={5}
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <button type="submit">Lägg till</button>
    </form>
  );
}
