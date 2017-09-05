(() => {
  'use strict';

  angular.module('api.pokemon', [])
  .factory('Pokemon', ($http) => {
    var Pokemon = {},
        API = 'http://pokeapi.co/api/v2/pokemon/';

    Pokemon.findByName = name => {
      return $http.get(API + name)
        .then(res => res.data)
        .catch(res => res.data)
    }

    return Pokemon;
  })
})();
