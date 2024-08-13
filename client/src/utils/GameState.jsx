// GameState.jsx
import { createContext, useReducer, useEffect, useContext } from 'react';
import { Reducer } from './reducers';
import {
  INCREASE_BONES,
  INCREASE_XP,
  INCREASE_LEVEL,
  SET_ACTIVE_HOLE,
  increaseBones
} from './actions';

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
      { id: 1, level: 0, cost: 5 },
      { id: 2, level: 0, cost: 20 },
      { id: 3, level: 0, cost: 50 },
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
              dispatch(increaseBones(activeHole.baseValue));
          }
      }, 2000);

      return () => clearInterval(interval);
  }, [state.activeHole, state.holes]);

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