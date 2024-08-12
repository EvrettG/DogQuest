import {
    INCREASE_BONES,
    INCREASE_XP,
    INCREASE_LEVEL,
    SET_ACTIVE_HOLE,
  } from './actions';
  
  export const Reducer = (state, action) => {
    switch (action.type) {
      case INCREASE_BONES:
        return {
          ...state,
          bones: state.bones + action.payload,
        };
      case INCREASE_XP:
        return {
          ...state,
          holes: state.holes.map((hole) =>
            hole.id === action.payload.holeId
              ? { ...hole, xp: hole.xp + action.payload.xp }
              : hole
          ),
        };
      case INCREASE_LEVEL:
        return {
          ...state,
          holes: state.holes.map((hole) =>
            hole.id === action.payload.holeId
              ? { ...hole, level: hole.level + 1 }
              : hole
          ),
        };
      case SET_ACTIVE_HOLE:
        return {
          ...state,
          activeHole: action.payload,
        };
      default:
        return state;
    }
  };