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
      className={`flex items-center justify-between p-4 rounded-md shadow-sm border ${
        todo.done
          ? "bg-green-50 text-gray-500 line-through"
          : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={() => toggleDone(todo.id)}
        className="flex items-center gap-4 text-left group"
      >
        <span
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full shrink-0 ${
            todo.done ? "bg-green-400 border-green-400" : "border-gray-400"
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
        className="text-red-500 hover:text-red-700"
        aria-label="Ta bort"
      >
        <Trash2 size={20} />
      </button>
    </li>
  );
}
