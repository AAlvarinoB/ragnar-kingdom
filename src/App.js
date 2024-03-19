import './App.css'
import MainBackground from "./components/mainbackground";
import StartButton from "./components/start_button";
import MainTitle from "./components/main_title"
import title from './img/EMPIRE-OF-RAGNAR.png'
import React from "react";

function App() {
  return (
      <div className='App'>
          <MainBackground/>
          <MainTitle/>
          <StartButton/>
      </div>
  );
}
export default App;