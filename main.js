#! /usr/bin/env node
import inquirer from "inquirer";
let answer = [];
let message = await inquirer.prompt([
    {
        message: "What do you want to add in your todo list?",
        type: "input",
        name: "todo",
    }
]);
answer.push(message.todo);
let message1 = await inquirer.prompt([
    {
        message: "Do you want to add more?",
        type: "list",
        name: "options",
        choices: ["Yes", "No"]
    }
]);
while (message1.options === "Yes") {
    let message2 = await inquirer.prompt([
        {
            message: "What do you want to add in your todo list?",
            type: "input",
            name: "todo",
        }
    ]);
    answer.push(message2.todo);
    message1 = await inquirer.prompt([
        {
            message: "Do you want to add more?",
            type: "list",
            name: "options",
            choices: ["Yes", "No"]
        }
    ]);
}
console.log(`Your TO-DO list is: ${answer}`);
