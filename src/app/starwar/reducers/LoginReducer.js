import actionTypes from '../actions/LoginActions';

const INITIAL_STATE = {
  asyncStatus: 'INIT',
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.POST_LOGIN_REQUEST:
      return Object.assign({}, { asyncStatus: 'PENDING' });

    case actionTypes.POST_LOGIN_FAILURE:
      return Object.assign({}, { asyncStatus: 'FAILURE', present: false });

    case actionTypes.POST_LOGIN_SUCCESS: {
      const list = action.payload.res.results;
      const { userName, password } = action.payload.req;
      const isPresent = list.find(user => ((user.name === userName) && (user.birth_year == password)));
      return Object.assign({}, {
        asyncStatus: 'SUCCESS',
        present: isPresent ? true : false,
      });
    }
    default: return state;
  }
}
