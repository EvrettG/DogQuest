import { Outlet, } from 'react-router-dom';
import "./game.css"

function Game() {
  return (
    <div className="game">
         <Outlet />
    </div>
  );
}

export default Game;