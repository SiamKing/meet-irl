(() => {
  'use strict';

  angular.module('components.missingno', [])
  .controller('MissingnoController', function() {
    let vm = this;
  })
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'components/missingno/missingno.html',
        controller: 'MissingnoController as mn'
      })
  }])
})();
