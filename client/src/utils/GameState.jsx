// GameState.jsx
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { Reducer } from './reducers';
import {
  INCREASE_BONES,
  INCREASE_XP,
  INCREASE_LEVEL,
  SET_ACTIVE_HOLE,
} from './actions';

const initialState = {
  bones: 0,
  activeHole: null,
  holes: [
    { id: 1, name: 'Soft Earth', xp: 0, level: 1, baseValue: 1 },
    { id: 2, name: 'Hard Earth', xp: 0, level: 1, baseValue: 2 },
    { id: 3, name: 'Compacted Rocks', xp: 0, level: 1, baseValue: 3 },
  ],
};

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Effect to handle incrementing bones every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.activeHole) {
        const activeHole = state.holes.find(hole => hole.id === state.activeHole);
        if (activeHole) {
          dispatch({ type: INCREASE_BONES, payload: activeHole.baseValue });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [state.activeHole, state.holes, dispatch]);

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