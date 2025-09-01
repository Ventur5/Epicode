const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


let currentIndex = 0
let score = 0

const containerQuestion = document.querySelector(".div-question")
const containerButtons = document.createElement("div")
const questionsIndex = document.createElement("p")
const main = document.querySelector(".main")
const divGoodBad = document.createElement("div")

main.appendChild(containerButtons)
main.appendChild(questionsIndex)
main.appendChild(divGoodBad)


containerButtons.classList.add("class", "answer-buttons")
divGoodBad.classList.add("class", "div-goodBad")

questionsIndex.innerText = (`QUESTION ${currentIndex + 1}/${questions.length}`)

function generateQuestions() {
  containerQuestion.innerText = questions[currentIndex].question
}
generateQuestions()


function generateButtons() {
  const arrayAnswer = questions[currentIndex].incorrect_answers.concat(questions[currentIndex].correct_answer)
  const shuffleArray = arrayAnswer.sort(() => Math.random() - 0.5)

  for (let i = 0; i < shuffleArray.length; i++) {
    const newButton = document.createElement("button")
    newButton.innerText = shuffleArray[i]
    containerButtons.appendChild(newButton)
    newButton.addEventListener("click", () => {
      validateAnswer(newButton.innerText)
    })
  }
}
generateButtons()

function clear() {
  containerQuestion.innerHTML = ""
  containerButtons.innerHTML = ""
}

function validateAnswer(button) {
  const correct = questions[currentIndex].correct_answer

  if (button === correct) {
    score++
  }

  currentIndex++

  if (currentIndex < questions.length) {
    questionsIndex.innerText = (`QUESTIONS ${currentIndex + 1}/${questions.length}`)
    clear()
    generateQuestions()
    generateButtons()
  } else {
    clear()
    goodBad()
  }

}

function goodBad(){
    
  if(score >= 6){
    divGoodBad.innerText = "Complimenti!!! 🥳"  
    containerQuestion.innerText = (`Quiz Finito! Punteggio:${score}/${questions.length}`)
    questionsIndex.innerText = ""
  } else if (score < 6){
    divGoodBad.innerText = "Fai 🤮🤮!!!" 
    containerQuestion.innerText = (`Quiz Finito! Punteggio:${score}/${questions.length}`)
    questionsIndex.innerText = ""
  }

}