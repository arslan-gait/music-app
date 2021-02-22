import React from 'react'
import VideoCard from './VideoCard'
import "../css/Home.scss"
import db from '../firebase'

function Home() {
  const [songs, setSongs] = React.useState([])

  React.useEffect(() => {
    db.collection('songs').onSnapshot(snapshot => {
      setSongs(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className="home">
      <h2>Home</h2>
      <div className="home__videoCards">
        {songs && songs.map(song => (
          <VideoCard
            key={song.id}
            title={song.data.title}
            image={song.data.imageUrl}
            timestamp={song.data.timestamp.toDate().toDateString()}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
