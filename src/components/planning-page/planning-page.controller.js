PlanningPageController.$inject = ['MealService'];

function PlanningPageController(mealService) {
    var self = this;

    this.meals = [];
    this.progress = 0;

    this.$onInit = function() {
        mealService.getMealsForPlanning('lunch')
        .then(data=>{
            self.meals = data;
            self.recalculateProgress();
        })
    };
    
    this.mealAdded = function(meal) {
        meal.added = 1;
        self.recalculateProgress();
        
        //self.meals[0].added = 1;
        //alert('added: '+JSON.stringify(meal));
    };

    this.mealRemoved = function(meal) {
        meal.added = 0;
        self.recalculateProgress();
        //self.meals[0].added = 0;
        //alert('removed: '+JSON.stringify(meal));
    };

    this.recalculateProgress = function() {
        var totalAdded = 0;
        for(var meal of self.meals) {
            totalAdded += meal.added;
        }
        self.progress = totalAdded;
    };
};

module.exports = PlanningPageController;