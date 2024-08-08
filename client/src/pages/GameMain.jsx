import { Outlet, } from 'react-router-dom';
// Consider moving game state here
// import { GameProvider } from './utils/GameState';
import GameNav from './game/GameNav'

function GameMain(){
return (
    <div>
        <GameNav/>
        <Outlet />
    </div>
)
};

export default GameMain;