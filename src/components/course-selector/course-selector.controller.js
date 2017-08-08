function CourseSelectorController() {
    var self = this;

    this.breakfastSelected = false;
    this.lunchSelected = true;
    this.dinnerSelected = false;
    this.courseName = 'lunch';

    this.selectCourse = function (courseName) {
        self.courseName = courseName;
        self.breakfastSelected = courseName === 'breakfast';
        self.lunchSelected = courseName === 'lunch';
        self.dinnerSelected = courseName === 'dinner';        
        if (self.courseChanged) self.courseChanged({course: self.courseName});
    };
};

module.exports = CourseSelectorController;