import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ poster, title, summary, genres, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={poster} />
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
      <hr />
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
