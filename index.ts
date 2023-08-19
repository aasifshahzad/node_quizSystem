import inquirer from "inquirer"; //import required modules
import { faker } from "@faker-js/faker";
import chalk from "chalk";

interface Student {
  //declaring interface for student
  name: string;
  email: string;
}

// const createUsers = (numberOfUser: number) => { //generating fake student data using faker
//     let usersArray: User[] = [];
//     for (let u = 1; u < numberOfUser; u++) {
//         let user: User = {
//             id: u + 1000,
//             name: faker.person.fullName(),
//             email: faker.internet.email(),
//         };
//         usersArray.push(user);
//     }
//     return usersArray;
// };

// const users = createUsers(10); // Create 10 Users
// console.log(users);
let users: Student[] = [
  //hard written student data
  {
    name: "Cheryl Wolff V",
    email: "Earlene_Kovacek@yahoo.com",
  },
  {
    name: "Melissa Outman",
    email: "Mike_Olson@hotmail.com",
  },
  {
    name: "Lloyd Pfannerstill",
    email: "Nelson.Wisoky35@yahoo.com",
  },
  {
    name: "Ella Franck",
    email: "Clotilde_Stoltenberg@hotmail.com",
  },
  {
    name: "Jorge Fisher",
    email: "Hugh_Bayer49@hotmail.com",
  },
  {
    name: "Gretchen Pours",
    email: "Vita_Harber12@hotmail.com",
  },
  {
    name: "Jenna Kulak-Kalis",
    email: "Chelsey23@yahoo.com",
  },
  {
    name: "Dr. Cassandra Carter",
    email: "Bernhard99@hotmail.com",
  },
  {
    name: "asif",
    email: "asif@gmail.com",
  },
];

// console.log(users[0].name);      //access the name, email, and users array length
// console.log(users[0].email);
// console.log(users.length);

const identityCheck = async () => {
  let nameEmailCheck = await inquirer.prompt([
    //student name and email inquiring for verification
    {
      type: "input",
      message: "Enter your full name: ",
      name: "userName",
    },
    {
      type: "input",
      message: "Enter your email address: ",
      name: "email",
    },
  ]);
  // console.log(nameEmailCheck.userName);
  // console.log(nameEmailCheck.email);
  let nameToCheck: string = nameEmailCheck.userName; // getting user name
  let emailToCheck: string = nameEmailCheck.email; // getting user email address
  function isUserPresent() {
    // Loop through the users array to check if the provided name and email exists
    for (let i = 0; i < users.length; i++) {
      if (users[i].name == nameToCheck && users[i].email === emailToCheck) {
        // console.log("Student identity verified");
        return true; // User with the provided name and email exists
      }
    }
    return false; // User with the provided name and email does not exists
  }
  let verification = isUserPresent(); //calling verification function
  //console.log(verification);

  if (verification == true) {
    console.log(chalk.bold.greenBright("Identification OK")); // identification Ok
    let askConfirmation = await inquirer.prompt([
      //confirming to start quiz
      {
        type: "confirm",
        message: "Start Quiz",
        name: "start",
        default: "Yes",
      },
    ]);
    if (askConfirmation.start) {
      console.log("You chose to continue.");

      //The Quiz
      let quiz = await inquirer.prompt([
        {
          type: "list",
          message: "Question 1: What is TypeScript primarily used for?  ",
          name: "q1",
          choices: [
            "Building mobile applications",
            "Writing server-side code",
            "Developing web applications",
            "Enhancing JavaScript with static types",
          ],
        },
        {
          type: "list",
          message:
            "Question 2: Which keyword is used to declare a variable with a specific type in TypeScript?  ",
          name: "q2",
          choices: ["var", "let", "const", "type"],
        },
        {
          type: "list",
          message:
            "Question 3: TypeScript supports which of the following in JavaScript?  ",
          name: "q3",
          choices: [
            "Dynamic typing",
            "Static typing",
            "Both dynamic and static typing",
            "No typing at all",
          ],
        },
        {
          type: "list",
          message:
            "Question 4: What is the purpose of TypeScript interfaces?  ",
          name: "q4",
          choices: [
            "To define classes",
            "To create instances of objects",
            "To define the shape of objects",
            "To declare variables",
          ],
        },
        {
          type: "list",
          message:
            "Question 5: Which TypeScript feature allows you to use the features of the latest ECMAScript versions in your code?  ",
          name: "q5",
          choices: ["Type inference", "Modules", "Generics", "Downlevel"],
        },
        {
          type: "list",
          message:
            "Question 6:  In TypeScript, what is the keyword used to declare a function that doesn't return any value?   ",
          name: "q6",
          choices: ["void", "null", "undefined", "empty"],
        },
        {
          type: "list",
          message:
            "Question 7: What is the purpose of TypeScript's readonly modifier?  ",
          name: "q7",
          choices: [
            "To make a variable constant",
            "To prevent a class from being inherited",
            "To specify optional properties in an interface",
            "To declare a variable without a type",
          ],
        },
        {
          type: "list",
          message:
            "Question 8: Which TypeScript construct allows you to create reusable code templates with placeholder types?  ",
          name: "q8",
          choices: ["Interfaces", "Enums", "Generics", "Decorators"],
        },
        {
          type: "list",
          message: "Question 9:   ",
          name: "q9",
          choices: ["number", "boolean", "object", "string"],
        },
        {
          type: "list",
          message:
            "Question 10: What is the TypeScript equivalent of a union type in JavaScript?  ",
          name: "q10",
          choices: ["any", "never", "[]", "|"],
        },
        {
          type: "confirm",
          message: "Do you want to end test?",
          name: "end",
          default: "Yes",
        },
      ]);

      //Result Formulation
      let totalQuestions: number = 10;
      let totalScore = 100;
      let score: number = 0;

      const correctAnswers = [
        // correct answers in the `quiz` object
        "Enhancing JavaScript with static types",
        "type",
        "Static typing",
        "To define the shape of objects",
        "Downlevel",
        "void",
        "To make a variable constant",
        "Generics",
        "object",
        "|",
      ];
      for (let i = 1; i <= totalQuestions; i++) {
        // loop through the correct answers and user selected options
        const userAnswer = quiz[`q${i}`];
        const correctAnswer = correctAnswers[i - 1];

        if (userAnswer === correctAnswer) {
          score++;
        }
      }

      //Result
      const percentageScore = (score / totalQuestions) * 100;

      console.log(chalk.bold.blueBright(`Your Score: ${chalk.bold.redBright(score)} out of ${chalk.bold.redBright(totalQuestions)}`));
      console.log(chalk.bold.blueBright(`Percentage Score: ${chalk.bold.redBright(percentageScore.toFixed(2))}%`));
    } else {
      console.log("You chose to cancel.");
    }
  } else {
    console.log("Identity not verified"); // identification not Ok
  }
};
identityCheck();
