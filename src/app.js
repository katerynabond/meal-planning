require('./bulma.css');
require('./style.css');
const angular = require('angular');
const MealService = require('./services/meal.service');
const DaySelectorComponent = require('./components/day-selector/index.js');

//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .factory('MealService', MealService)
  .component('daySelector', DaySelectorComponent)
  .controller('MainController', MainController);

MainController.$inject = ['MealService'];

function MainController(mealService){

  this.currentDate = new Date();
  
  this.breakfastSelected = false;
  this.lunchSelected = true;
  this.dinnerSelected = false;
  this.courseName = 'lunch';
  this.liked = false;
  this.date2 = new Date();

  this.currentMeal = {};

  var self = this;

  this.dateChangedHandler = function(date) {
    self.currentDate = date;
    self.loadMeal();
  };

  this.loadMeal = function() {
    mealService.getMeal(self.currentDate, self.courseName)
      .then(meal => this.currentMeal = meal);
  };

  this.selectCourse = function(courseName){
    self.courseName = courseName;
    self.breakfastSelected = courseName === 'breakfast';
    self.lunchSelected = courseName === 'lunch';
    self.dinnerSelected = courseName === 'dinner';
    self.loadMeal();
  };

  this.toggleLike = function() {
    self.liked = !self.liked;
  };
}