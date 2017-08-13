PlanningPageController.$inject = ['MealService'];

function PlanningPageController(mealService) {
    var self = this;

    this.meals = [];
    this.progress = 0;
    this.course = 'lunch';
    this.week = new Date('2017-01-01T12:00:00Z');

    function loadData() {
        mealService.getMealsForPlanning(self.week, self.course)
            .then(data => {
                self.meals = data;
                self.recalculateProgress();
            });
    };

    this.$onInit = function () {
        loadData();
    };

    this.courseChanged = function(course) {
        self.course = course;
        loadData();
    };

    this.mealAdded = function (meal) {
        meal.added = 1;
        self.recalculateProgress();
        mealService.addMeal(self.week, self.course, meal);
        //self.meals[0].added = 1;
        //alert('added: '+JSON.stringify(meal));
    };

    this.mealRemoved = function (meal) {
        meal.added = 0;
        self.recalculateProgress();
        mealService.removeMeal(self.week, self.course, meal);
        //self.meals[0].added = 0;
        //alert('removed: '+JSON.stringify(meal));
    };

    this.like = function(meal) {
        meal.likes++;
    };

    this.recalculateProgress = function () {
        var totalAdded = 0;
        for (var meal of self.meals) {
            totalAdded += meal.added;
        }
        self.progress = totalAdded;
    };
};

module.exports = PlanningPageController;