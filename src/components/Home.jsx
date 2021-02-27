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
      <h2>Нахшилар</h2>
      <div className="home__videoCards">
        {songs && songs.map(song => (
          <div key={song.data.id}>
            <VideoCard
              song={song}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
