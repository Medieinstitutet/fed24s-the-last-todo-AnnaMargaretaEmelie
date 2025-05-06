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
      <label htmlFor="text">Syssla</label>
      <input
        type="text"
        id="text"
        placeholder="Vad ska göras?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="category">Ansvarig</label>
      <input
        type="text"
        id="category"
        placeholder="Vem är ansvarig?"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="priority">Prioritet</label>
      <input
        type="number"
        id="priority"
        min={1}
        max={5}
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <button type="submit">Lägg till</button>
    </form>
  );
}
