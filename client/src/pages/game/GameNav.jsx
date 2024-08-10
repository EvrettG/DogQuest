import { NavLink, } from "react-router-dom";

function GameNav() {


    return (
        <header className="game-header">
            <nav className="game-nav-container">
                <NavLink
                    to='/game/main'
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Digging
                </NavLink>
                <NavLink
                    to='/game/main/upgrades'
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Upgrades
                </NavLink>
                <NavLink
                    to='/game/main/stats'
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Stats
                </NavLink>
            </nav>
        </header>
    )
}

export default GameNav;