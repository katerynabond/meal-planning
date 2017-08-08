const htmlTemplate = require('./day-selector.html');
const daySelectorController = require('./day-selector.controller');

const DaySelectorComponent = {
    template: htmlTemplate,
    controller: daySelectorController,
    bindings : {
        dateChanged : '&', // expression binding (can pass function)
        selectedDate : '=' // two way binding
    }
};

module.exports = DaySelectorComponent;