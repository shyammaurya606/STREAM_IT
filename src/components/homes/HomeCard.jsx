import React from "react"
import { Link } from "react-router-dom"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div className='palyButton row'>
            <a href={`/singlepage/${id}`} aria-label="Watch trailer">
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='Play button' />
                  <img src='./images/play.png' className='change' alt='Play icon' />
                </div>
                WATCH TRAILER
              </button>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
