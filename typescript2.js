var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
    console.log("Task is added: " + task);
} // addTask
function listAllTasks() {
    console.log("Begining of an array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("end of an array");
} // listAllTask
function deleteTask(task) {
    var index = myTasks.indexOf(task, 0);
    if (index > -1) {
        myTasks.splice(index, 1);
    }
    else {
        console.log("item " + task + "not found!");
    }
    return myTasks.length;
} // delete Task
addTask("element1");
addTask("element2");
addTask("element3");
listAllTasks();
deleteTask("element2");
listAllTasks();
