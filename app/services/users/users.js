(() => {
  'use strict';

  angular
    .module('api.users', [])
    .factory('Users', () => {
      var Users = {};

      var userList = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane',
        pokemon: { name: 'blastoise' }
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'growlithe' }
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo',
        pokemon: { name: 'hitmonchan' }
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill',
        pokemon: { name: 'barney' }
      }
    ];

      Users.all = () => {
        return userList;
      }

      Users.findById = (id) => {
        return userList.find(user => {
          return user.id === id;
        });
      };

      return Users;
    })
})();
