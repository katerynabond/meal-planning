const angular = require('angular');

//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
}