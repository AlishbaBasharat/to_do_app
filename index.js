import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let answer = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "what is the name of your list?",
        },
        {
            name: "todo",
            type: "input",
            message: "what do you want to include in it?",
        }
    ]);
    todos.push(answer.task);
    todos.push(answer.todo);
    let addtask = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: "Do you want to add somthing",
            default: false,
        }
    ]);
    condition = (addtask.more);
    console.log("your todo list is:" + todos);
}
