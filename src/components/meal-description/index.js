const htmlTemplate = require('./meal-description.html');
const mealDescriptionController = require('./meal-description.controller');

const MealDescriptionComponent = {
    template: htmlTemplate,
    controller: mealDescriptionController,
    bindings : {
        currentMeal: '<'
    }
};

module.exports = MealDescriptionComponent;