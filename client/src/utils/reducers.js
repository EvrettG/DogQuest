import {
    INCREASE_BONES,
    INCREASE_XP,
    INCREASE_LEVEL,
    SET_ACTIVE_HOLE,
    BUY_UPGRADE,
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
        case BUY_UPGRADE:
          return {
            ...state,
            bones: state.bones - action.payload.cost,
            holes: state.holes.map((hole) => {
              if (hole.id === action.payload.holeId) {
                return { ...hole, baseValue: hole.baseValue + action.payload.value };
              }
              return hole;
            }),
            upgrades: state.upgrades.map((upgrade) =>
              upgrade.id === action.payload.id
                ? { ...upgrade, level: upgrade.level + 1 }
                : upgrade
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