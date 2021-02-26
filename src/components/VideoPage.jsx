import React from 'react'
import '../css/VideoPage.scss'

function VideoPage({ location }) {
  const song = location.state.song

  return (
    <div className="videoPage">
      <h4>{song.title}</h4>
      <div className="videoPage__song">
        {song.text.split("$").map(txt => (
          <div><br />{txt}</div>
        ))}
      </div>
      <div className="videoPage__video">
        <iframe width="560" height="315" src={song.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default VideoPage
