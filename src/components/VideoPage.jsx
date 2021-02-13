import React from 'react'
import '../css/VideoPage.scss'
import { useParams } from 'react-router-dom'

function VideoPage({ text, videoUrl }) {
  let { songItem } = useParams();

  return (
    <div className="videoPage">
      <h4>{songItem}</h4>
      <div className="videoPage__song">
        <p>{text}</p>
      </div>
      <div className="videoPage__video">
        <iframe width="560" height="315" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoPage
