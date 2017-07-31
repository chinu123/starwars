import { createAction } from 'redux-actions';

/**
* Dispatches
* @param Action Types for PENDING, SUCCESS AND FAILURE
* @param Api call function that takes a parameter and returns a promise
* @returns thunk
*/
export default function createAsyncAction (actionTypes, apiCall) {
  const [requestActionType, successActionType, failureActionType, authorizeActionType] = actionTypes;

  return apiCallParams =>
    (dispatch) => {
      dispatch(createAction(requestActionType)({ req: apiCallParams }));

      return apiCall(apiCallParams).then(
        response =>
          Promise.resolve(
            dispatch(
              createAction(successActionType)({
                req: apiCallParams,
                res: response,
              }),
            ),
          ),
        (error) => {
          // handle unauthenticated api, redirect as per server response
          if (authorizeActionType && error.status === 401
            && error.response.data && error.response.data.redirect) {
            window.location.href = error.response.data.redirect;
          }

          return Promise.reject(
            dispatch(
              createAction(failureActionType)({
                req: apiCallParams,
                res: error,
              }),
            ),
          );
        }
      );
    };
}
