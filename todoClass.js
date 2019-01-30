"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("Begining of an array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("end of an array");
    }; // listAllTask
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
        }
        else {
            console.log("item " + task + "not found!");
        }
        return this.myTasks.length;
    }; // delete Task
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("element4");
testClass.addTask("element5");
testClass.addTask("element6");
testClass.listAllTasks();
testClass.deleteTask("element5");
testClass.listAllTasks();
