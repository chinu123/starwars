import actionTypes from '../actions/PlanetAction';

const INITIAL_STATE = {
  asyncStatus: 'INIT',
  list: [],
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.SEARCH_PLANETS_REQUEST:
      return Object.assign({}, state, { asyncStatus: 'PENDING' });

    case actionTypes.SEARCH_PLANETS_FAILURE:
      return Object.assign({}, state, { asyncStatus: 'FAILURE' });

    case actionTypes.SEARCH_PLANETS_SUCCESS: {
      const planetList = [...state.list, ...action.payload.res.results];
      return Object.assign({}, {
        asyncStatus: 'SUCCESS',
        list: action.payload.res.results,
      });
    }
    default: return state;
  }
}
