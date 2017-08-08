const htmlTemplate = require('./course-selector.html');
const controller = require('./course-selector.controller');

const CourseSelectorComponent = {
    template: htmlTemplate,
    controller: controller,
    bindings: {
        courseChanged : '&'
    }
};

module.exports = CourseSelectorComponent;