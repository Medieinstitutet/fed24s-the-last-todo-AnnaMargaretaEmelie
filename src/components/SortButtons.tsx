type SortProps = {
  sortByPriority: () => void;
  sortByCategory: () => void;
};

export function SortButtons({ sortByPriority, sortByCategory }: SortProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={sortByPriority}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Sortera efter prioritet
      </button>
      <button
        onClick={sortByCategory}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
      >
        Sortera efter ansvarig
      </button>
    </div>
  );
}
