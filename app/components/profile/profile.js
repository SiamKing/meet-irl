(() => {
  'use strict';

  angular
    .module('components.profile', [])
    .controller('ProfileController', function(resolvedUser) {
      let vm = this;
      vm.user = resolvedUser;
    })
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('profile', {
          url: '/user/:id',
          templateUrl: 'components/profile/profile.html',
          controller: 'ProfileController as pc',
          resolve: {
            resolvedUser: function(Users, $stateParams) {
              return Users.findById($stateParams.id);
            }
          }
        })
    }])
})();
