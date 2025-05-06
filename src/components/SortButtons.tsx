type TodoProps = {
  sortByPriority: () => void;
  sortByCategory: () => void;
};

export function SortButtons({ sortByPriority, sortByCategory }: TodoProps) {
  return (
    <div>
      <button onClick={sortByPriority}>Sortera efter prioritet</button>
      <button onClick={sortByCategory}>Sortera efter ansvarig</button>
    </div>
  );
}
