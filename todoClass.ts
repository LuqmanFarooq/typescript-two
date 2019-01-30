import {toDoInterface} from './interface';

class toDoClass implements toDoInterface{
    myTasks:Array<string> = [];

    addTask(task:string):number {
        return this.myTasks.push(task);
    }

     listAllTasks():void {
        console.log("Begining of an array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        })
        console.log("end of an array");
    }// listAllTask
    
     deleteTask(task: string): number {
        let index: number = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
        } else {
            console.log("item " + task + "not found!")
        }
        return this.myTasks.length;
    }// delete Task
}

let testClass = new toDoClass();
testClass.addTask("element4");
testClass.addTask("element5");
testClass.addTask("element6");
testClass.listAllTasks();
testClass.deleteTask("element5");
testClass.listAllTasks();