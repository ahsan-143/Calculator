import inquirer from "inquirer";
let user_check;
do {
    let answers = await inquirer.prompt([{
            name: "val_1",
            type: "number",
            message: "Enter First Value",
        }]);
    let user_input = answers.val_1;
    answers = await inquirer.prompt([{
            name: "val_2",
            type: "number",
            message: "Enter Second Value",
        }]);
    let user_input2 = answers.val_2;
    answers = await inquirer.prompt([{
            name: "val_3",
            type: "string",
            message: "Enter Operator",
        }]);
    let user_op = answers.val_3;
    function calc() {
        if (user_op == '+') {
            return (user_input + user_input2);
        }
        else if (user_op == '-') {
            return (user_input - user_input2);
        }
        else if (user_op == '/') {
            return (user_input / user_input2);
        }
        else if (user_op == '*') {
            return (user_input * user_input2);
        }
    }
    console.log(calc());
    answers = await inquirer.prompt([{
            name: "val_check",
            type: "string",
            message: "Do you want to repeat, Press (Y or y)",
        }]);
    user_check = answers.val_check;
} while (user_check == 'Y' || user_check == 'y');
