import { useLocation, Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};


