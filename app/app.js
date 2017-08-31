(() => {
  'use strict';

  angular
    .module('meetIrl', ['ui.router'])
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
    })
})();
