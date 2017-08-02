require('./bulma.css');
require('./style.css');
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

  this.liked = false;

  this.currentMeal = {
    description: 'This Giant BBQ Sandwich Is Everything You\'ve Ever Wanted In Life',
    ingredients: ['1 rack baby back ribs, membrane removed (this is essential for de-boning)',
                  'Some time and patience'],
    ingredientSections: [
      {
        title: 'Dry Rub',
        ingredients: [
          '2 tablespoons paprika',
          '1 tablespoon pepper',
          '2 tablespoons brown sugar',
          '2 teaspoons salt',
          '1 teaspoons garlic powder',
          '1 teaspoons onion powder',
          '1 teaspoons cumin',
          '1 teaspoons chili powder',
        ]
      },
      {
        title: 'Glaze',
        ingredients: [
          '1 cup barbecue sauce',
          '¼ cup honey',
          '1 large loaf bread',
          '¼ cup melted butter',
        ]
      },
      {
        title: 'The rest',
        ingredients: [
          '1 tablespoon sesame seeds ',
          '2 large onions, sautéed or caramelized ',
          '2 tablespoons parsley, chopped ',
          'Pickles',
          'White onion slices',
        ]
      }
    ],
    preparationSteps: [
      'Preheat oven to 300°F/150°C.',
      'Lay the ribs on a long sheet of aluminum foil.',
      'Combine the dry rub ingredients in a small bowl, then cover the ribs evenly on both sides, making sure to press the rub into any cracks and smooth out any large lumps.',
      'Wrap the foil around the ribs, making sure they’re completely sealed. Use additional sheets if necessary. It’s important that the juices of the ribs stay inside the foil to keep the ribs moist during cooking.',
      'Bake the ribs for 3 to 3½ hours, until tender.',
      'Unwrap the ribs carefully, then wiggle the bones out slowly. If you’re having trouble removing the bones, use a knife to make small cuts to help their removal.',
      'Combine the glaze ingredients in a bowl and brush both sides of the deboned slab of ribs generously, being sure to carefully handle the ribs since they’re super tender.',
      'Broil the ribs for about 5 minutes until the glaze is bubbling and starting to brown. Set aside.',
      'Slice the bread in half into the thickness of your choice, then butter both sides of the bread. Sprinkle sesame seeds on top, then toast your bread by broiling it for a few minutes. Keep a careful eye on it as it will burn extremely quickly.',
      'With two long spatulas or knives, carefully transfer the glazed ribs to the bread, then top with onions, parsley, and the top bun.',
      'Slice into about 2-inch sandwiches, and serve!      ',
    ]
  };

  var self = this;

  this.selectCourse = function(courseName){
    self.breakfastSelected = courseName === 'breakfast';
    self.lunchSelected = courseName === 'lunch';
    self.dinnerSelected = courseName === 'dinner';
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