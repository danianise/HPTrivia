//variables for individual answer options
let aRadio = document.querySelector('#aRadio')
let bRadio = document.querySelector('#bRadio')
let cRadio = document.querySelector('#cRadio')
let dRadio = document.querySelector('#dRadio')
//variables for location of answer text
let A = document.querySelector('#A')
let B = document.querySelector('#B')
let C = document.querySelector('#C')
let D = document.querySelector('#D')
//variable for all radio buttons
let radioButtons = document.querySelectorAll(".radio")
// console.log(allRadioButtons)
//variable for all answers
let answer = document.querySelectorAll(".answer")
//variable to increase score with correct answers
let scoreIncrement = 1/21
//variable for the location of the question
let questionText = document.querySelector('#question')
//array of questions/answer objects for level 1
let level1 = [
    {question: "Who lives at Number 4 Privet Drive?",
    answerA: "A. Gellert Grindlewald",
    answerB: "B. Petunia Dursley",
    answerC: "C. Cho Chang",
    answerD: "D. Sirius Black",
    correctAnswer: "B"},

    {question: "Which Hogwarts House is Neville Longbottom sorted into?",
    answerA: "A. Gryffindor",
    answerB: "B. Slytherin",
    answerC: "C. Hufflepuff",
    answerD: "D. Ravenclaw",
    correctAnswer: "A"},

    {question: "What is Harry's position on the Quidditch Team?",
    answerA: "A. Keeper",
    answerB: "B. Chaser",
    answerC: "C. Beater",
    answerD: "D. Seeker",
    correctAnswer: "D"},

    {question: "What is Professor Dumbledore's full name?",
    answerA: "A. Alfred Percival Wulfric Brian Dumbledore",
    answerB: "B. Albus Peregrin Wulfric Alan Dumbeldore",
    answerC: "C. Albus Percival Wulfric Brian Dumbledore",
    answerD: "D. Aberforth Peter Wulfric Severus Dumbledore",
    correctAnswer: "C"},

    {question: "How many points do you get when you catch a snitch?",
    answerA: "A. 150",
    answerB: "B. 200",
    answerC: "C. 50",
    answerD: "D. 10",
    correctAnswer: "A"},

    {question: "At Which platform can you catch the Hogwarts Express?",
    answerA: "A. 8",
    answerB: "B. 9 3/4",
    answerC: "C. 10 1/2",
    answerD: "D. 42",
    correctAnswer: "B"},

    {question: "At what age will a young witch or wizard get their acceptence letter from Hogwarts?",
    answerA: "A. 16",
    answerB: "B. 14",
    answerC: "C. 11",
    answerD: "D. 7",
    correctAnswer: "C"}
]

//variable for random selection of question/answer objects level 1
const randomLvl1 = Math.floor(Math.random() * level1.length);
// console.log(random, level1[random]);

//set question upon reload
questionText.innerText = `${level1[randomLvl1].question}`
A.innerText = `${level1[randomLvl1].answerA}`
B.innerText = `${level1[randomLvl1].answerB}`
C.innerText = `${level1[randomLvl1].answerC}`
D.innerText = `${level1[randomLvl1].answerD}`

//this function checks whether the selected answer is correct, with appropriate alerts
function submit() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct, increase score by given increment
        if (buttonChecked === level1[randomLvl1].correctAnswer){
            alert('Correct!')
            document.querySelector('#scoreNum').innerText = Math.round((scoreIncrement * 100)).toFixed(0) + '%'
//if incorrect, a random level 1 question displays next **NOTE: THIS PART ISN'T WORKING
        } else if (buttonChecked !== level1[randomLvl1].correctAnswer){
            alert('Incorrect!')
            questionText.innerText = `${level1[randomLvl1].question}`
            A.innerText = `${level1[randomLvl1].answerA}`
            B.innerText = `${level1[randomLvl1].answerB}`
            C.innerText = `${level1[randomLvl1].answerC}`
            D.innerText = `${level1[randomLvl1].answerD}`
        }
    // }
}

//add event listener to submit button, runs submit function
document.querySelector('#submit').addEventListener('click', submit)