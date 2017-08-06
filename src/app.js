require('./bulma.css');
require('./style.css');
const angular = require('angular');
const MealService = require('./services/meal.service');


//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .factory('MealService', MealService)
  .controller('MainController', MainController);

MainController.$inject = ['MealService'];

function MainController(mealService){

  this.dayNames = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
  };

  this.currentDate = new Date();
  this.previousWeekDay = 'Nothing';
  this.currentWeekDay = 'Nothing';
  this.nextWeekDay = 'Nothing';
  
  this.breakfastSelected = false;
  this.lunchSelected = true;
  this.dinnerSelected = false;
  this.courseName = 'lunch';
  this.liked = false;

  this.currentMeal = {};

  var self = this;

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

  this.setDate = function(newDate) {
    self.currentDate = newDate;
    self.currentWeekDay = self.dayNames[self.currentDate.getDay()];
    
    var yesterday = new Date(newDate);
    yesterday.setDate(yesterday.getDate()-1);
    self.previousWeekDay = self.dayNames[yesterday.getDay()];

    var tomorrow = new Date(newDate);
    tomorrow.setDate(tomorrow.getDate()+1);
    self.nextWeekDay = self.dayNames[tomorrow.getDay()];
    self.loadMeal();
  };

  this.nextDay = function(){
    var nextDate = new Date(self.currentDate);
    nextDate.setDate(nextDate.getDate()+1);
    self.setDate(nextDate);
  };

  this.previousDay = function(){
    var prevDate = new Date(self.currentDate);
    prevDate.setDate(prevDate.getDate()-1);
    self.setDate(prevDate);
  };

  this.setDate(new Date());
}