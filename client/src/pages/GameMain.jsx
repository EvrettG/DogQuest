import { Outlet, } from 'react-router-dom';
// Consider moving game state here

import GameNav from './game/GameNav'
import './GameMain.css'

function GameMain(){
return (
    <div className="game-body">
        <GameNav/>
        <Outlet />
    </div>
)
};

export default GameMain;