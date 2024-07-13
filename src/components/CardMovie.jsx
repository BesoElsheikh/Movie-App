import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../components/Card.scss'
const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className=" mb-4">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p> Name Movie : {mov.original_title}</p>
              <p>Release Date : {mov.release_date}</p>
              <p>Count : {mov.vote_count}</p>
              <p> Rating: {mov.vote_average.toFixed(1)} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
