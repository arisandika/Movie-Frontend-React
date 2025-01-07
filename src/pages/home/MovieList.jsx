import { MapPin, Star } from "lucide-react";

const MovieList = ({ movies }) => (
  <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-4">
    {movies.map((movie) => (
      <div
        key={movie.title}
        className="flex gap-4 overflow-hidden md:items-start md:flex-col"
      >
        <div className="relative w-2/4 md:w-full">
          <img
            src={movie.cover}
            alt={movie.title}
            className="object-cover w-full rounded-xl aspect-square md:aspect-[2/3]"
          />
        </div>
        <div className="w-2/3 md:w-full">
          <h5 className="text-sm font-semibold md:text-base">{movie.title}</h5>
          <div className="flex flex-col items-start gap-1 mt-2 text-sm text-secondary">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <small>{movie.genre}</small>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <small>{movie.location}</small>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <small className="text-[12px]">{movie.rating}/5</small>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MovieList;
