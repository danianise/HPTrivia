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
//variables to help randomizer
let savedRandomLvl1
let savedRandomLvl2
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

    {question: "At which platform can you catch the Hogwarts Express?",
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

let level2 = [
    {question: "How did Harry get to school for his second year?",
    answerA: "A. Hogwarts Express",
    answerB: "B. Driven by Uncle Vernon",
    answerC: "C. Arthur Weasley's flying Ford Anglia",
    answerD: "D. Driven by Hagrid on his flying motorcycle",
    correctAnswer: "C"},

    {question: "Which of the following is NOT a Hogwarts House ghost?",
    answerA: "A. The Bloody Baron",
    answerB: "B. Nearly Headless Nick",
    answerC: "C. The Fat Friar",
    answerD: "D. Moaning Myrtle",
    correctAnswer: "D"},

    {question: "How does Harry catch his first snitch?",
    answerA: "A. Caught in his left hand while falling off his broom",
    answerB: "B. In his mouth, accidentally",
    answerC: "C. By knocking Draco off his broom and getting to the snitch first",
    answerD: "D. Fred Weasley knocks a bludger into the other team's seeker, Harry gets to the snitch first",
    correctAnswer: "B"},

    {question: "What is the name of the three-headed dog that guards the Philosopher's Stone?",
    answerA: "A. Fluffy",
    answerB: "B. Cuddles",
    answerC: "C. Snuggles",
    answerD: "D. Terror",
    correctAnswer: "A"},

    {question: "What do you say to clear the Marauder's Map?",
    answerA: "A. I solemnly swear that I'm done making trouble",
    answerB: "B. Finite Incantatem",
    answerC: "C. Mischief Managed",
    answerD: "D. Nihil",
    correctAnswer: "C"},

    {question: "Who are the Marauders?",
    answerA: "A. James Potter, Sirius Black, Severus Snape, Remus Lupin",
    answerB: "B. Arthur Weasley, Sirius Black, Peter Pettigrew, Aberforth Dumbledore",
    answerC: "C. James Potter, Gellert Grindlewald, Remus Lupin, Peter Pettigrew",
    answerD: "D. James Potter, Sirius Black, Remus Lupin, Peter Pettigrew",
    correctAnswer: "D"},

    {question: "What is Harry's patronus?",
    answerA: "A. Doe",
    answerB: "B. Stag",
    answerC: "C. Stallion",
    answerD: "D. Dragon",
    correctAnswer: "B"}
]

//variable for random selection of question/answer objects level 1
// const randomLvl1 = Math.floor(Math.random() * level1.length);
// console.log(random, level1[random]);

//set question upon reload, also used with incorrect level 1 input
function loadQuestionLvl1() {
    const randomLvl1 = Math.floor(Math.random() * level1.length);
    savedRandomLvl1 = randomLvl1
    questionText.innerText = `${level1[randomLvl1].question}`
    A.innerText = `${level1[randomLvl1].answerA}`
    B.innerText = `${level1[randomLvl1].answerB}`
    C.innerText = `${level1[randomLvl1].answerC}`
    D.innerText = `${level1[randomLvl1].answerD}`
    
}

loadQuestionLvl1()

function loadQuestionLvl2() {
    const randomLvl2 = Math.floor(Math.random() * level2.length);
    savedRandomLvl2 = randomLvl2
    questionText.innerText = `${level2[randomLvl2].question}`
    A.innerText = `${level2[randomLvl2].answerA}`
    B.innerText = `${level2[randomLvl2].answerB}`
    C.innerText = `${level2[randomLvl2].answerC}`
    D.innerText = `${level2[randomLvl2].answerD}`
    
}

//this function checks whether the level 1 selected answer is correct, with appropriate alerts
function submit1() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct,
    if (buttonChecked === level1[savedRandomLvl1].correctAnswer){
        alert('Correct!')
        loadQuestionLvl2()
        //increment score
        document.querySelector('#scoreNum').innerText = Math.round((scoreIncrement * 100)).toFixed(0) + '%'
        //change displayed level to level 2
        document.querySelector('#level').innerText = `2: Rubeus Hagrid`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/W4BiAuo.png"
        //hide submit1 button
        document.querySelector('#submit1').style.display = "none"
        //show submit2 button
        document.querySelector('#submit2').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, a random level 1 question displays next
    } else if (buttonChecked !== level1[savedRandomLvl1].correctAnswer){
        loadQuestionLvl1()
        alert('Incorrect!')
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
    }
}

//add event listener to submit1 button, runs submit1 function
document.querySelector('#submit1').addEventListener('click', submit1)

//this function checks whether the level 2 selected answer is correct, with appropriate alerts
function submit2() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct,
    if (buttonChecked === level2[savedRandomLvl2].correctAnswer){
        alert('Correct!')
        // loadQuestionLvl3()
        //increment score
        document.querySelector('#scoreNum').innerText = Math.round((scoreIncrement * 100)).toFixed(0) + '%'
        //change displayed level to level 2
        document.querySelector('#level').innerText = `3: Ron Weasley`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/oIMmddd.png"
        //hide submit1 button
        document.querySelector('#submit2').style.display = "none"
        //show submit2 button
        document.querySelector('#submit3').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, a random level 1 question displays next
    } else if (buttonChecked !== level2[savedRandomLvl2].correctAnswer){
        loadQuestionLvl2()
        alert('Incorrect!')
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
    }
}

//add event listener to submit1 button, runs submit1 function
document.querySelector('#submit2').addEventListener('click', submit2)