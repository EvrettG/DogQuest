import { NavLink } from "react-router-dom";
import { useGameState } from '../../utils/GameState';
import { useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';

function GameNav() {
    const { state } = useGameState();
    const [saveGame, { data, loading, error }] = useMutation(SAVE_GAME);

    const handleSave = async () => {
        try {
            // console.log(state.activeHole)
            const { data } = await saveGame({
                variables: {
                    input: {
                        bones: state.bones,
                        activeHole: state.activeHole,
                        holes: state.holes.map(hole => ({
                            id: hole.id,
                            xp: hole.xp,
                            level: hole.level,
                            baseValue: hole.baseValue,
                        })),
                        upgrades: state.upgrades.map(upgrade => ({
                            id: upgrade.id,
                            level: upgrade.level,
                            cost: upgrade.cost,
                        })),
                    },
                },
            });
            console.log(data) //Should contain save data
            console.log("Game saved successfully for user:", data.saveGame.userName);
        } catch (err) {
            console.error("Error saving the game:", err);
        }
    };

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
                <p>Total Bones: {state.bones}</p>
                <button onClick={handleSave} disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
                {error && <p>Error: {error.message}</p>}
            </nav>
        </header>
    );
}

export default GameNav;