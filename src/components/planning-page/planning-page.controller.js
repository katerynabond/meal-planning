PlanningPageController.$inject = ['MealService'];

function PlanningPageController(mealService) {
    var self = this;
    var meals = [];

    this.$onInit = function() {
        mealService.getMealsForPlanning('lunch')
        .then(data=>self.meals = data);
    };
    
    this.mealAdded = function(meal) {
        alert('added: '+JSON.stringify(meal));
    };

    this.mealRemoved = function(meal) {
        alert('removed: '+JSON.stringify(meal));
    };
};

module.exports = PlanningPageController;