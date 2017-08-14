PlanningPageController.$inject = ['MealService'];

function PlanningPageController(mealService) {
    var self = this;

    this.meals = [];
    this.progress = 0;
    this.course = 'lunch';
    this.week = new Date();
    this.weekEnd = new Date();

    function loadData() {
        mealService.getMealsForPlanning(self.week, self.course)
            .then(data => {
                self.meals = data;
                self.recalculateProgress();
            });
    };

    function initWeek(date) {
        self.week = date;
        while(self.week.getDay() != 0) {
            self.week.setDate(self.week.getDate() - 1);
        }
        self.week.setHours(0,0,0,0);
        self.weekEnd = new Date(self.week);
        self.weekEnd.setDate(self.week.getDate() + 6);
        self.weekEnd.setHours(0,0,0,0);
    };

    this.$onInit = function () {
        initWeek(new Date());
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
    };

    this.mealRemoved = function (meal) {
        meal.added = 0;
        self.recalculateProgress();
        mealService.removeMeal(self.week, self.course, meal);
    };

    this.like = function(meal) {
        meal.likes++;
    };

    this.nextWeek = function() {
        var d = new Date(self.week);
        d.setDate(d.getDate() + 7);
        initWeek(d);
        loadData();
    };

    this.previousWeek = function() {
        var d = new Date(self.week);
        d.setDate(d.getDate() - 7);
        initWeek(d);
        loadData();
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