import { ADD_WEAPONS, WEAPONS_HAVE_LOADED, QUERY_CONDITIONS } from "../constants/action-types";

const initialState = {
    weapons: {}
  };

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_WEAPONS: {
            return Object.assign({}, state, {
                weapons: action.payload
            });
        }

        case WEAPONS_HAVE_LOADED: {
            return Object.assign({}, state, {
                loaded: action.payload
            });
        }

        case QUERY_CONDITIONS: {
            return Object.assign({}, state, {
                query: action.payload
            });
        }

        default:
            return state;
    }
};

export default rootReducer;