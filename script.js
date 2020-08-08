// start button
let userAnswer = ""
let rightAnswer = ""
let interval
let startingTime = 30;
let time = startingTime * 30;
var startTimeButton = document.querySelector("#start");
var msgDiv = document.querySelector("#controls-box");


startTimeButton.addEventListener("click", function () {
  console.log("start click");
  startQuestions();
  updateCoundown();

});

function updateCoundown() {
  interval = setInterval(() => {
    document.getElementById("timer").innerHTML = startingTime;
    if (startingTime <= 0) {
      clearInterval(interval);
      console.log("Time's up!");
      location.replace("score.html");

    }
    else {
      startingTime--;
    }

  }, 1000);

};

// questions
var questions = [
  {
    title: "What is your favorite color?",
    choices: ["Yellow", "Blue", "Red", "Green"],
    answer: "Purple"
  },
  {
    title: "Who is the president of the United States?",
    choices: ["George Washington", "George Jetson", "George Bush", "George Costanza"],
    answer: "Dwayne Eliondo Mountain Dew Herbert Camacho"
  },
  {
    title: "What is your favorite food?",
    choices: ["Pizza", "Sushi", "Tacos", "Soilent Green"],
    answer: "Burgers"
  },
  {
    title: "What planet do we live on?",
    choices: ["Venus", "Mars", "Uranus", "Other"],
    answer: "Earth"
  },
  {
    title: "When did Oregon become a state?",
    choices: ["1849", "1984", "1776", "2020"],
    answer: "1859"
  },
  {
    title: "What is your middle name?",
    choices: ["Louis", "Lewis", "Lois", "Louise"],
    answer: "Robert"
  }
];

let questionNumber = 0
function startQuestions() {
  var firstQuestion = 0;
  var questionBox = document.getElementById("question-box");


  if (questionNumber < questions.length) {
    rightAnswer = questions[questionNumber].answer
    questionBox.textContent = questions[questionNumber].title;
    let choices = questions[questionNumber].choices;

    for (let i = 0; i < choices.length; i++) {
      let answerbutton = document.createElement("button");
      answerbutton.setAttribute("class", "answer");

      answerbutton.textContent = choices[i];
      questionBox.append(answerbutton);
    }

  }
  else {
    console.log("game over!")
    location.replace("score.html");
  }

};
document.addEventListener("click", function (event) {
  // console.log(event.target);
  if (event.target && event.target.matches(".answer")) {
    
    userAnswer = event.target.textContent;

    console.log("wrong");
    displayMessage("error", "WRONG");
    //check if right or wrong
    questionNumber++;
    startQuestions();
    updateCoundown().seconds -= 5;
  }
});

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
  
}