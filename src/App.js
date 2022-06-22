import React, {useState} from "react";
import './App.css'
import Game from "./components/Elements/Game/Game";
import { getGameObj, GameBlock } from './module/GameApp'

function App() {

  let GameObj = getGameObj();
  const [gameState, setGameState] = useState(GameObj);

  const processShot = function(gameBlock){
    GameBlock.processShot(gameBlock, gameState);
    setGameState({...gameState});
  }

  return (
    <div className="App">
      <Game gameState={gameState} processShot={processShot} />
    </div>
  );

}

export default App;
