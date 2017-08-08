require('./bulma.css');
require('./style.css');
const angular = require('angular');
const MealService = require('./services/meal.service');
const DaySelectorComponent = require('./components/day-selector/index.js');
const CourseSelectorComponent = require('./components/course-selector/index.js');
//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .factory('MealService', MealService)
  .component('daySelector', DaySelectorComponent)
  .component('courseSelector', CourseSelectorComponent)
  .controller('MainController', MainController);

MainController.$inject = ['MealService'];

function MainController(mealService){

  this.currentDate = new Date();
  this.courseName = 'lunch';
  this.liked = false;

  this.currentMeal = {};

  var self = this;

  this.dateChangedHandler = function(date) {
    self.currentDate = date;
    self.loadMeal();
  };

  this.courseChanged = function(course) {
    self.courseName = course;
    self.loadMeal();
  };

  this.loadMeal = function() {
    mealService.getMeal(self.currentDate, self.courseName)
      .then(meal => this.currentMeal = meal);
  };

  this.toggleLike = function() {
    self.liked = !self.liked;
  };
}