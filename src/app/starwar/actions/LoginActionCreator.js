import createAsyncAction from '../../../utils/createAsyncActions';
import actions from './LoginActions.js';
import api from '../api/starwarapi';


const loginAction = createAsyncAction([
  actions.POST_LOGIN_REQUEST,
  actions.POST_LOGIN_SUCCESS,
  actions.POST_LOGIN_FAILURE,
], api.getUserList);

export {
  loginAction,
};
