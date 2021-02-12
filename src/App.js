import React from "react";
import "./css/Header.scss"
import "./css/Intro.scss"
import "./css/Sidebar.scss"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Intro/> */}
      <div className="app__page">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
