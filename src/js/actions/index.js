import { ADD_WEAPONS, WEAPONS_HAVE_LOADED, QUERY_CONDITIONS } from "../constants/action-types";
export function addWeapons(payload) {
  return { type: ADD_WEAPONS, payload };
}

export function weaponsHaveLoaded(payload) {
  return {type: WEAPONS_HAVE_LOADED, payload}
}

export function queryConditions(payload) {
  return {type: QUERY_CONDITIONS, payload}
};