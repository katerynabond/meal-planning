require('./bulma.css');
const angular = require('angular');

//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
  this.previousWeekDay = 'Sunday';
  this.nextWeekDay = 'Tuesday';
  this.breakfastSelected = false;
  this.lunchSelected = true;
  this.dinnerSelected = false;
  var self = this;

  this.selectCourse = function(courseName){
    self.breakfastSelected = courseName === 'breakfast';
    self.lunchSelected = courseName === 'lunch';
    self.dinnerSelected = courseName === 'dinner';
  };

}