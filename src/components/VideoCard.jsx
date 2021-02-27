import React from 'react'
import { Link } from "react-router-dom"
import '../css/VideoCard.scss'

function VideoCard({ song }) {
  return (
    <Link to={{
      pathname: `/videoPage`,
      state: { song: song.data }
    }}>
      <div className="videoCard">
        <img className="videoCard__image" src={song.data.imageUrl} alt="" />
        <div className="videoCard__info">
          <div className="videoCard__title">
            {song.data.title}
          </div>
          <div className="videoCard__timestamp">
            {song.data.timestamp.toDate().toDateString()}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
