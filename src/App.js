import React from 'react'
import { Route } from 'react-router-dom';
import { Header, Sidebar, Home, Intro, VideoPage, ConverterPage } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/converterPage" component={ConverterPage} />
      </div>
    </div>
  )
}

export default App;
