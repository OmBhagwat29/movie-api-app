import React, { useState, useEffect } from 'react'
import axios from '../../../api/axios';
import requests from '../../../api/request';
import './banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){

            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])

        }

        fetchData()
   
     
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;

    }
    
  return (
    <div className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
        backgroundPosition: "center center",

    }}>
        <div className="banner__content">
            <h1 className="banner__title">
                {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <div className="banner__description">
                <p>{truncate(movie?.overview, 150)}</p>
            </div>
            <div className="banner--fadeBottom"></div>

        </div>
    </div>
  )
}

export default Banner