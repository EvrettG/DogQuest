import { createContext, useReducer, useEffect, useContext } from 'react';
import { Reducer } from './reducers';
import {
  INCREASE_BONES,
  // INCREASE_XP,
  // INCREASE_LEVEL,
  // SET_ACTIVE_HOLE,

} from './actions';

// Helper function to match upgrade name with hole id
// Move this to a helper function file
const getUpgradeName = (holeId) => {
  switch (holeId) {
      case 1:
          return 'Soft Earth';
      case 2:
          return 'Hard Earth';
      case 3:
          return 'Compacted Rocks';
      default:
          return null;
  }
};


const increaseBones = (amount) => ({
  type: INCREASE_BONES,
  payload: amount,
});

// This sets the initial state of all values
const initialState = {
  bones: 0,
  activeHole: null,
  holes: [
      { id: 1, xp: 0, level: 1, baseValue: 1 },
      { id: 2, xp: 0, level: 1, baseValue: 2 },
      { id: 3, xp: 0, level: 1, baseValue: 5 },
  ],
  upgrades: [
      { id: 'Soft Earth', level: 1, cost: 5 },
      { id: 'Hard Earth', level: 1, cost: 20 },
      { id: 'Compacted Rocks', level: 1, cost: 50 },
  ],
};

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Increase bones based on the active hole's base value every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        if (state.activeHole !== null) {
            const activeHole = state.holes.find(hole => hole.id === state.activeHole);
            const upgrade = state.upgrades.find(upgrade => upgrade.id === getUpgradeName(activeHole.id));

            // Calculate the modified baseValue
            const modifiedBaseValue = activeHole.baseValue * (upgrade ? upgrade.level : 1);

            // console.log(modifiedBaseValue);

            dispatch(increaseBones(modifiedBaseValue));
        }
    }, 2000);

    return () => clearInterval(interval);
}, [state.activeHole, state.holes, state.upgrades]);

  return (
      <GameStateContext.Provider value={{ state, dispatch }}>
          {children}
      </GameStateContext.Provider>
  );
};

export const useGameState = () => useContext(GameStateContext);
export const useDispatch = () => {
  const { dispatch } = useGameState();
  return dispatch;
};