import { GameStateContext } from './GameState';


/* function updateResources() {
    console.log("Updating resources...");
    // Logic to update game resources (e.g., bones, coins)
} */

/* function checkUpgrades() {
    console.log("Checking for upgrades...");
    // Logic to check if any upgrades are unlocked
} */

function progressDigging() {
    console.log("Progressing digging...");
    // Logic to progress digging actions
    const { selectedHole, setBones, updateHoleProgress, holes } = useContext(GameStateContext);

    if (selectedHole) {
      // Increment bones by 1
      setBones((prevBones) => prevBones + 1);
      // Increment the hole's experience by 1
      updateHoleProgress(selectedHole, holes[selectedHole].progressLevel + 1);
    }
}

// Main function that runs every 5 seconds
function gameTick() {
    console.log("Game tick...");
    // updateResources();
    // checkUpgrades();
    progressDigging();
    gameTick();
}

// Set up the interval to run gameTick every 5 seconds
setInterval(gameTick, 5000);

export default gameTick;