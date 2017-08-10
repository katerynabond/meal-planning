require('./bulma.css');
require('./style.css');
const angular = require('angular');
const ngRoute = require('angular-route');

const MealService = require('./services/meal.service');
const DaySelectorComponent = require('./components/day-selector/index.js');
const CourseSelectorComponent = require('./components/course-selector/index.js');
const MealDescriptionComponent = require('./components/meal-description/index.js');
const MainPageComponent = require('./components/main-page/index.js');
//create our application
angular.module('meal-planning', [ ngRoute ]);

const RoutesConfig = require('./config/routes.js'); 

//
angular.module('meal-planning')
  .config(RoutesConfig)
  .factory('MealService', MealService)
  .component('daySelector', DaySelectorComponent)
  .component('courseSelector', CourseSelectorComponent)
  .component('mealDescription', MealDescriptionComponent)
  .component('mainPage', MainPageComponent);

