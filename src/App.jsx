import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {MovieList.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2 className="Title: ">{movie.title}</h2>
            <p className="Year: ">{movie.year}</p>
            <p className="Runtime: ">{movie.runtime}</p>
            <p className="Director: ">{movie.director}</p>
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <p className="Genres: ">{movie.genres.join(", ")}</p>
            <p className="IMDb Rating: ">{movie.imdbRating}</p>
            <p className="IMDb Votes: ">{movie.imdbVotes}</p>            
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
