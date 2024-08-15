export const SET_ACTIVE_HOLE = 'SET_ACTIVE_HOLE';
export const INCREASE_BONES = 'INCREASE_BONES';
export const INCREASE_XP = 'INCREASE_XP';
export const INCREASE_LEVEL = 'INCREASE_LEVEL';
export const BUY_UPGRADE = 'BUY_UPGRADE';
// export const LEVEL_UP_HOLE = 'LEVEL_UP_HOLE';

export const buyUpgrade = (id, cost, value) => ({
    type: BUY_UPGRADE,
    payload: { id, cost, value },
});
