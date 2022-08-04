import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const onLoading = () => {
    setLoading(() => false);
  };

  const [detail, setDetail] = useState([]);
  const detailMovieInfo = (info) => {
    for (let i = 0; i < info.length; i++) {
      if (info[i].id == { id }.id) {
        setDetail(info[i]);
      }
    }
  };
  console.log(detail);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_id=${id}`
      )
    ).json();
    detailMovieInfo(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <img src={detail.large_cover_image} />
          <h3>{detail.title}</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
