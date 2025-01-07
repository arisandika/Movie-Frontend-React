const GenreSection = () => {
  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-semibold text-light">Browse Genre</h2>
      <div className="flex gap-2 overflow-x-auto">
        {["Action", "Horror", "Sci-Fi"].map((genre) => (
          <button
            key={genre}
            className="px-4 py-2 text-sm rounded-full bg-primary whitespace-nowrap"
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;
