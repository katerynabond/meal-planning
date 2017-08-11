PlanningPageController.$inject = ['MealService'];

function PlanningPageController(mealService) {
    var self = this;
    var meals = [];

    this.$onInit = function() {
        self.meals = mealService.getMealsForPlanning('lunch');
    };
    
    this.mealAdded = function(meal) {
        alert('added: '+JSON.stringify(meal));
    };

    this.mealRemoved = function(meal) {
        alert('removed: '+JSON.stringify(meal));
    };
};

module.exports = PlanningPageController;