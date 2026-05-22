function MovieCard({ title }) {
  return (
    <div className="movie-card">

      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="movie"
      />

      <div className="movie-info">

        <h3>{title}</h3>

        <p>Sci-Fi / Action</p>

        <button>
          Book Ticket
        </button>

      </div>

    </div>
  );
}

export default MovieCard;