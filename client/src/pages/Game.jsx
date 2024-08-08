import { Outlet, } from 'react-router-dom';

function Game() {
  return (
    <div className="game">
         <Outlet />
    </div>
  );
}

export default Game;