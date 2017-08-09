require('./bulma.css');
require('./style.css');
const angular = require('angular');
const MealService = require('./services/meal.service');
const DaySelectorComponent = require('./components/day-selector/index.js');
const CourseSelectorComponent = require('./components/course-selector/index.js');
const MealDescriptionComponent = require('./components/meal-description/index.js');
const MainPageComponent = require('./components/main-page/index.js');
//create our application
angular.module('meal-planning', []);

//
angular.module('meal-planning')
  .factory('MealService', MealService)
  .component('daySelector', DaySelectorComponent)
  .component('courseSelector', CourseSelectorComponent)
  .component('mealDescription', MealDescriptionComponent)
  .component('mainPage', MainPageComponent);

