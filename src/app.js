require('./bulma.css');
const angular = require('angular');

//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){

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

  var self = this;

  this.selectCourse = function(courseName){
    self.breakfastSelected = courseName === 'breakfast';
    self.lunchSelected = courseName === 'lunch';
    self.dinnerSelected = courseName === 'dinner';
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