import { FaRegClock } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import alternate from "../public/notavailable.png";

const Movies = () => {
  const { temp, loading, response } = useGlobalContext();

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (response === "False") {
    return <h2 className="loading movie-page">Type something valid...</h2>;
  }

  return (
    <div className="movies">
      {temp?.Search?.map((item, idx) => {
        return (
          <Link className="link" key={idx} to={`movie/${item?.imdbID}`}>
            <article className="movie">
              <img
                src={item?.Poster}
                onError={(e) => {
                  e.target.src = alternate;
                }}
                alt=""
                className="image"
              />
              <h2 className="title">{item.Title}</h2>
              <div className="flex">
                <FaRegClock className="clock" />
                <span className="run-time">{item.Type}</span>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
