const Filters = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-5 p-5">
      <button className="px-6 py-2 rounded-3xl border-2 border-orange-300">All</button>
      <button className="px-6 py-2 rounded-3xl border-2 border-orange-300">Breakfast</button>
      <button className="px-6 py-2 rounded-3xl border-2 border-orange-300">Launch</button>
      <button className="px-6 py-2 rounded-3xl border-2 border-orange-300">Dinner</button>
    </div>
  );
};

export default Filters;
