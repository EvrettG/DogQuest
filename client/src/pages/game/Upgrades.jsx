import { useContext } from 'react';
import { GameStateContext } from '../../utils/GameState';
import { buyUpgrade } from '../../utils/actions';

function Upgrades() {
    const { state, dispatch } = useContext(GameStateContext);

    const handleUpgradePurchase = (id, cost, value) => {
        if (state.bones >= cost) {
            dispatch(buyUpgrade(id, cost, value));
        } /* else {
            alert("Not enough bones to buy this upgrade!");
        } */
    };

    return (
        <div className="upgrades-container">
            {state.upgrades.map(upgrade => (
                <div
                    key={upgrade.id}
                    className={`upgrade-item ${upgrade.id.replace(/\s+/g, '')}`}
                    onClick={() => handleUpgradePurchase(upgrade.id, upgrade.cost, upgrade.id === 1 ? 1 : upgrade.id === 2 ? 2 : 5)}
                >
                    <p>Upgrade {upgrade.id}</p>
                    <p>Cost: {upgrade.cost} bones</p>
                    <p>Level: {upgrade.level}</p>
                </div>
            ))}
        </div>
    );
}

export default Upgrades;