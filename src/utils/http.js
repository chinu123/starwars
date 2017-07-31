/* eslint-env browser */
import fetch from 'isomorphic-fetch';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
  redirect: 'follow',
};

function fireRequest (url, config) {
  const conf = Object.assign({}, defaultConfig, config);
  return fetch(url, conf)
    .then((response) => {
      if (response.ok) {
        if (response.status === 204) return Promise.resolve();
        if (conf.method === 'delete') return Promise.resolve(response.text());
        return Promise.resolve(response.json());
      }
      return response
        .json()
        .then(error =>
          Promise.reject({ status: response.status, response: error }));
    })
    .catch(error => Promise.reject(error));
}

export default {
  get (url, requestParams, config) {
    return fireRequest(
      url,
      Object.assign(
        {
          method: 'get',
        },
        config,
      ),
    );
  },
};
