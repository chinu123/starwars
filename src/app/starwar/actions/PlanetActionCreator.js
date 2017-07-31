import createAsyncAction from '../../../utils/createAsyncActions';
import actions from './PlanetAction.js';
import api from '../api/starwarapi';

const searchPlanetAction = createAsyncAction([
  actions.SEARCH_PLANETS_REQUEST,
  actions.SEARCH_PLANETS_SUCCESS,
  actions.SEARCH_PLANETS_FAILURE,
], api.searchPlanet);

export {
  searchPlanetAction,
};
