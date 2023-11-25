import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "movies-api/Api";
import { BASE_POSTER_URL } from "movies-api/constant-images";
import { PLACEHOLDER } from "movies-api/constant-images";
import styled from "styled-components"; 
import { Loader } from "components/Loader/Loader";



 const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

   
     const getImagePath = (profilePath) => {
    return profilePath ? `${BASE_POSTER_URL}${profilePath}` : PLACEHOLDER;
     };
   
   return (
     <>
        {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
       {!loading && !error && cast.length > 0 ? (
        <WrapperStyled>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <ActorCard key={id}>
                <img
                  src={getImagePath(profile_path)}
                  alt={original_name}
                  width="180"
                />
                <h4>
                  {original_name}
                </h4>
                <p>
                 {character}
                </p>
              </ActorCard>
            ))}
          </WrapperStyled>
  ) : (
      <p>No actors found for this movie</p>
    )}
   </>
  );
};

export default Cast;


const WrapperStyled = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ActorCard = styled.li`
  text-align: center;
  width: 25%; 
`;