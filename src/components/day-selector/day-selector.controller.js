function DaySelectorController() {
    this.currentDate = new Date();
    this.previousWeekDay = 'Nothing';
    this.currentWeekDay = 'Nothing';
    this.nextWeekDay = 'Nothing';

    this.dayNames = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    };

    var self = this;

    this.setDate = function (newDate) {
        newDate.setHours(0,0,0,0);
        self.currentDate = newDate;
        self.currentWeekDay = self.dayNames[self.currentDate.getDay()];

        var yesterday = new Date(newDate);
        yesterday.setDate(yesterday.getDate() - 1);
        self.previousWeekDay = self.dayNames[yesterday.getDay()];

        var tomorrow = new Date(newDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        self.nextWeekDay = self.dayNames[tomorrow.getDay()];

        //self.selectedDate = self.currentDate; // setting date for binding -- TODO: remove?
        if (self.dateChanged) self.dateChanged({ date: self.currentDate }); // triggering event
    };


    this.nextDay = function () {
        var nextDate = new Date(self.currentDate);
        nextDate.setDate(nextDate.getDate() + 1);
        self.setDate(nextDate);
    };

    this.previousDay = function () {
        var prevDate = new Date(self.currentDate);
        prevDate.setDate(prevDate.getDate() - 1);
        self.setDate(prevDate);
    };

    this.$onInit = function () {
        self.setDate(new Date());
    };

};

module.exports = DaySelectorController;