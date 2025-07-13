import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movienum = 1;

  return (
    <>
      {movienum === 1 && (
        <MovieCard movie={{ title: "hello", release_date: "ddgdg" }} />
      )}
    </>
  );
}

export default App;
