MainController.$inject = ['MealService'];

function MainController(mealService){

  this.currentDate = new Date().setHours(0,0,0,0);
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
module.exports = MainController;