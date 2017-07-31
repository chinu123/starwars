import http from '../../../utils/http';

const urls = {
  starwar: 'https://swapi.co/api',
  getOrgNamespace: '/p/export/hydra/seraph/orgs',
};

export default {
  getUserList ({ userName, password }) {
    return http.get(`${urls.starwar}/people?search=${userName}`);
  },

  searchPlanet ({ planetName = '' }) {
    return http.get(`${urls.starwar}/planets?search=${planetName}`);
  },

};
