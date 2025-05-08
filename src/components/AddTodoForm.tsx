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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col mb-3 md:flex-row items-stretch md:items-end gap-4"
    >
      <div className="flex-1">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="text"
        >
          Syssla
        </label>
        <input
          type="text"
          id="text"
          placeholder="Vad ska göras?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="category"
        >
          Ansvarig
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 bg-white"
        >
          <option>Anna</option>
          <option>Fredrik</option>
          <option>Frank</option>
          <option>Hjördis</option>
          <option>Vem som helst</option>
        </select>
        {/* <input
          type="text"
          id="category"
          placeholder="Vem är ansvarig?"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /> */}
      </div>

      <div>
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Prioritet
        </label>
        <input
          type="number"
          id="priority"
          min={1}
          max={5}
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 bg-white"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Lägg till
      </button>
    </form>
  );
}
