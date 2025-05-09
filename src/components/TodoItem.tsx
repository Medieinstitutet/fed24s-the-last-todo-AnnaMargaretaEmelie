import { Todo } from "../models/Todo";
import { Check, Trash2 } from "lucide-react";

type TodoProps = {
  todo: Todo;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ todo, toggleDone, deleteTodo }: TodoProps) {
  return (
    <li
      className={`flex items-center justify-between p-4 rounded-md shadow-sm border-gray-50 ${
        todo.done
          ? "bg-green-800/10 text-gray-500 line-through"
          : "bg-amber-100 text-gray-900"
      }`}
    >
      <button
        onClick={() => toggleDone(todo.id)}
        className="flex items-center gap-4 text-left group"
      >
        <span
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full shrink-0 ${
            todo.done ? "bg-lime-700 border-lime-700" : "border-amber-700"
          }`}
        >
          {todo.done && <Check size={16} className="text-white" />}
        </span>
        <span>
          <p className="font-medium">{todo.text}</p>
          <div className="text-sm text-gray-500">
            {todo.category} • Prioritet: {todo.priority}
          </div>
        </span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="text-red-800 hover:text-red-800"
        aria-label="Ta bort"
      >
        <Trash2 size={20} />
      </button>
    </li>
  );
}
