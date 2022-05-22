import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../../api/axios';
import Loader from '../loader/Loader';
import './row.css';


function Row({ title, fetchUrl, IsLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [IsLoading, setIsloading] = useState(true);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setIsloading(false);
      setMovies(request.data.results);
      
      return request;
    }
    fetchData();
    

  }, [fetchUrl]);



  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },

  }


  const handleClick = (movie) => {

   
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.title || "").then((url) => {

       const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      console.log(url);

      }).catch((err) => console.log(err))
    }

  }




  return (
    <div className="row">
      <h2>{title}</h2>
      {
        IsLoading ? <Loader /> : 
        <div className="row__posters">
        {movies.map(movie => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${IsLargeRow && "row__posterLarge"}`}
              src={`${base_url}${IsLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          )
        })}


      </div>
      }

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )


}

export default Row