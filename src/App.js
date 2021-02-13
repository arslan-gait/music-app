import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Intro from './components/Intro'
import VideoPage from './components/VideoPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/intro" />
          </Route>
          <Route path="/intro">
            <Header isDark />
            <Intro />
          </Route>
          <Route path="/home">
            <Header />
            <div className="app__page">
              <Sidebar />
              <Home />
            </div>
          </Route>
          <Route path="/song/:songItem" children={<VideoPage />} >
            <Header />
            <div className="app__page">
              <Sidebar />
              <VideoPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
