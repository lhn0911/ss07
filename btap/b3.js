"use strict";
var weekDays;
(function (weekDays) {
    weekDays["MONDAY"] = "Monday";
    weekDays["TUESDAY"] = "Tuesday";
    weekDays["WEDNESDAY"] = "Wednesday";
    weekDays["THURSDAY"] = "Thursday";
    weekDays["FRIDAY"] = "Friday";
    weekDays["SATURDAY"] = "Saturday";
    weekDays["SUNDAY"] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays);
