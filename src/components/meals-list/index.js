const controller = require('./meals-list.controller.js');
const template = require('./meals-list.html');

const MealsListComponent = {
    controller: controller,
    template: template,
    bindings: {
        meals: '<',
        mealAdded: '&',
        mealRemoved: '&'
    }
};

module.exports = MealsListComponent;