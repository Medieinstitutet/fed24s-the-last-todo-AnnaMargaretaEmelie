import { ArrowDown } from "lucide-react";

type SortProps = {
  sortByPriority: () => void;
  sortByCategory: () => void;
};

export function SortButtons({ sortByPriority, sortByCategory }: SortProps) {
  return (
    <div className="flex justify-end gap-4 mb-3">
      <button
        onClick={sortByPriority}
        className="bg-amber-700 text-white text-sm px-4 py-2 rounded hover:bg-amber-800 transition"
      >
        <ArrowDown size={16} className="inline-flex mr-1" />
        Prioritet
      </button>
      <button
        onClick={sortByCategory}
        className="bg-yellow-600 text-white text-sm px-4 py-2 rounded hover:bg-yellow-700 transition"
      >
        <ArrowDown size={16} className="inline-flex mr-1" />
        Ansvarig
      </button>
    </div>
  );
}
