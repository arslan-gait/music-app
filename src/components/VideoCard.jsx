import React from 'react'
import { Link } from "react-router-dom"
import '../css/VideoCard.scss'

function VideoCard({ image, title, timestamp }) {
  return (
    <Link to={`/song/${title}`}>
      <div className="videoCard">
        <img className="videoCard__image" src={image} alt="" />
        <div className="videoCard__info">
          <div className="videoCard__title">
            {title}
          </div>
          <div className="videoCard__timestamp">
            {timestamp}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
