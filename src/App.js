import React from 'react'
import { Route } from 'react-router-dom';
import { Header, Sidebar, Home, Intro, VideoPage, ConverterPage } from './components'

function App() {
  return (
    <div>
      <div className="App">
        {/* <Route exact path="/" component={Intro} /> */}
        <Header />
        <div className="app__page">
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route exact path="/converterPage" component={ConverterPage} />
          <Route exact path="/videoPage" component={VideoPage} />
        </div>
      </div>
    </div>
  )
}

export default App;
