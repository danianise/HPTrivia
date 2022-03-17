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
//variable for all answers
let answer = document.querySelectorAll(".answer")
//variables to increase score with correct answers
let score = 0
let scoreIncrement = 1/21
let scoreText = document.querySelector('#scoreNum')
//variable for the location of the question number
question = 1
let questionNum = document.querySelector('#questionNum')
//variable for the location of the question
let questionText = document.querySelector('#question')
//variables to help randomizer
let savedRandomLvl1
let savedRandomLvl2
let savedRandomLvl3
let savedRandomLvl4
let savedRandomLvl5
let savedRandomLvl6
let savedRandomLvl7
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

    {question: "Who is the Ravenclaw girl that Harry has a crush on in his 5th year?",
    answerA: "A. Romilda Vane",
    answerB: "B. Cho Chang",
    answerC: "C. Ginny Weasley",
    answerD: "D. Padma Patil",
    correctAnswer: "B"}
]

let level3 = [
    {question: "Where does Dumbledore's Army go to learn defensive magic?",
    answerA: "A. Ravenclaw Tower",
    answerB: "B. The Owlry",
    answerC: "C. The Hog's Head Pub",
    answerD: "D. The Room of Requirement",
    correctAnswer: "D"},

    {question: "Who does Scabbers the rat turn out to be?",
    answerA: "A. Sir Nicholas",
    answerB: "B. Peter Pettigrew",
    answerC: "C. Remus Lupin",
    answerD: "D. Bellatrix Lestrange",
    correctAnswer: "B"},

    {question: "What are the three Forbidden Curses?",
    answerA: "A. Imperius, Alohomora, Cruciatus",
    answerB: "B. Sectum Sempra, Cruciatus, Avada Kadavra",
    answerC: "C. Cruciatus, Imperius, Avada Kadavra",
    answerD: "D. Imperius, Impervius, Muffliato",
    correctAnswer: "C"},

    {question: "Where are the Hufflepuff common room and dorm rooms?",
    answerA: "A. The Dungeon",
    answerB: "B. Next to the kitchens",
    answerC: "C. North Tower",
    answerD: "D. Behind the main staircase",
    correctAnswer: "B"},

    {question: "What does it mean to be a parselmouth?",
    answerA: "A. You can speak to snakes",
    answerB: "B. You can speak any language you hear",
    answerC: "C. You can speak to the dead",
    answerD: "D. You are unable to speak due to a curse",
    correctAnswer: "A"},

    {question: "What is the name of the closest magical settlement to Hogwarts?",
    answerA: "A. Diagon Alley",
    answerB: "B. Knockturn Alley",
    answerC: "C. Godric's Hollow",
    answerD: "D. Hogsmeade",
    correctAnswer: "D"},

    {question: "What is the name of Hagrid's giant half-brother?",
    answerA: "A. Garrick",
    answerB: "B. Grawp",
    answerC: "C. Fridwulf",
    answerD: "D. Hengist",
    correctAnswer: "B"}
]

let level4 = [
    {question: "What is Severus Snape's Patronus?",
    answerA: "A. Snake",
    answerB: "B. Doe",
    answerC: "C. Otter",
    answerD: "D. Phoenix",
    correctAnswer: "B"},

    {question: "Which of the following lists all the Weasley children?",
    answerA: "A. Bill, Charlie, Percy, Fred, George, Rupert, Ginny",
    answerB: "B. Bill, Charlie, Percy, James, Oliver, Ron, Ginny",
    answerC: "C. Bill, Charlie, Percy, Fred, George, Ron, Ginny",
    answerD: "D. Bill, Charlie, Percy, Fred, George, Ron, Bonnie",
    correctAnswer: "C"},

    {question: "Why did Sirius Black go to Azkaban?",
    answerA: "A. He was framed for the murder of Peter Pettigrew",
    answerB: "B. He murdered Peter Pettigrew",
    answerC: "C. He was framed for the murders of Lily and James Potter",
    answerD: "D. He murdered Lily and James Potter",
    correctAnswer: "A"},

    {question: "What magical creatures pull the carriages that bring students from Hogsmeade Station to Hogwarts?",
    answerA: "A. House Elves",
    answerB: "B. Veela",
    answerC: "C. Centaur",
    answerD: "D. Thestrals",
    correctAnswer: "D"},

    {question: "Who is the half-blood prince?",
    answerA: "A. Severus Snape",
    answerB: "B. Voldemort",
    answerC: "C. Harry Potter",
    answerD: "D. Rubeus Hagrid",
    correctAnswer: "A"},

    {question: "What is a horcrux?",
    answerA: "A. A follower of Lord Voldemort",
    answerB: "B. A stone taken from the stomache of a goat",
    answerC: "C. An object in which a Wizard or Witch has hidden a fragment of their soul",
    answerD: "D. Another name for the Philosopher's Stone",
    correctAnswer: "C"},

    {question: "What does Professor Lupin offer to counteract how one feels after an encounter with a Dementor?",
    answerA: "A. Felix Felicis",
    answerB: "B. Chocolate",
    answerC: "C. Butter Beer",
    answerD: "D. Treacle Tart",
    correctAnswer: "B"}
]

let level5 = [
    {question: "What does the scar above Albus Dumbledore's left knee look like?",
    answerA: "A. A dragon",
    answerB: "B. A map of the London Underground",
    answerC: "C. A bolt of lightening",
    answerD: "D. A spider",
    correctAnswer: "B"},

    {question: "What is the number of the vault at Gringott's that Hagrid empties before he accompanies Harry to the Potter's vault?",
    answerA: "A. 412",
    answerB: "B. 637",
    answerC: "C. 713",
    answerD: "D. 942",
    correctAnswer: "C"},

    {question: "What is the five digit code that one needs to dial to get inside the Ministry of Magic?",
    answerA: "A. 62442",
    answerB: "B. 75309",
    answerC: "C. 22738",
    answerD: "D. 58908",
    correctAnswer: "A"},

    {question: "What form will a boggart take when facing Remus Lupin?",
    answerA: "A. A giant spider",
    answerB: "B. A veela",
    answerC: "C. A basilisk",
    answerD: "D. A full moon",
    correctAnswer: "D"},

    {question: "Why does Snape call himself the half-blood prince?",
    answerA: "A. He is related to wizard royalty",
    answerB: "B. He is a half-blood wizard on his mother's side and her surname was Prince",
    answerC: "C. Voldemort is a stand-in and Snape has the real power",
    answerD: "D. He is a half-blood wizard and his middle name is Prince",
    correctAnswer: "B"},

    {question: "What is the code name that Hagrid gives to Buckbeak in Half-Blood Prince?",
    answerA: "A. Buckskin",
    answerB: "B. Bezoar",
    answerC: "C. Witherwings",
    answerD: "D. Leatherwings",
    correctAnswer: "C"},

    {question: "Where can you find the inscription, 'I mark the hours, every one. Nor have I yet outrun the sun.'?",
    answerA: "A. On a sun-dial in the courtyard at Hogwarts",
    answerB: "B. On a time-turner",
    answerC: "C. On the clock at the entrance to Gringott's Bank",
    answerD: "D. On the paving stones that lead to Diagon Alley",
    correctAnswer: "B"}
]

let level6 = [
    {question: "What type of dragon does Harry face in the first task of the Tri-Wizard tournament?",
    answerA: "A. Chinese fireball",
    answerB: "B. Hungarian Horntail",
    answerC: "C. Norwegian Ridgeback",
    answerD: "D. Swedish Short-Snout",
    correctAnswer: "B"},

    {question: "How many staircases are there at Hogwart's?",
    answerA: "A. 412",
    answerB: "B. 87",
    answerC: "C. 142",
    answerD: "D. 7",
    correctAnswer: "C"},

    {question: "Name the two house elves who have been freed from their positions with magical families and are employed at Hogwarts",
    answerA: "A. Dobby and Winky",
    answerB: "B. Dobby and Kreacher",
    answerC: "C. Winky and Hokie",
    answerD: "D. Dobby and Smeagol",
    correctAnswer: "A"},

    {question: "What is the name of the wizard radio program for those who rebelled against Lord Voldemort and supported Harry Potter during the height of the Second Wizarding War?",
    answerA: "A. Dumbledore's Army",
    answerB: "B. Pottermore",
    answerC: "C. Order of the Phoenix",
    answerD: "D. Potterwatch",
    correctAnswer: "D"},

    {question: "What are Albus Dumbledore's last words?",
    answerA: "A. Severus, stop!",
    answerB: "B. Severus, please.",
    answerC: "C. Harry, please.",
    answerD: "D. Harry, run!",
    correctAnswer: "B"},

    {question: "What is the Hogwart's motto?",
    answerA: "A. Where your treasure is, there your heart will be also",
    answerB: "B. Words are our most inexhaustible source of magic",
    answerC: "C. Never tickle a sleeping dragon",
    answerD: "D. While we may come from different places and speak in different tongues, our hearts beat as one",
    correctAnswer: "C"},

    {question: "What does the magical word 'episkey' achieve?",
    answerA: "A. Freezes time for 5 seconds",
    answerB: "B. Heals minor injuries",
    answerC: "C. Opens locks",
    answerD: "D. Disarms opponent",
    correctAnswer: "B"}
]

let level7 = [
    {question: "Which row houses the prophecy about Harry and Lord Voldemort in the Hall of Prophecy?",
    answerA: "A. Row 7",
    answerB: "B. Row 97",
    answerC: "C. Row 42",
    answerD: "D. Row 83",
    correctAnswer: "B"},

    {question: "Which wizard can be seen teaching the trolls ballet in a tapestry across the wall in the room of requirement?",
    answerA: "A. Ulric the Uncoordinated",
    answerB: "B. Montague the Musical",
    answerC: "C. Barnabas the Barmy",
    answerD: "D. Lucius Left-Foot",
    correctAnswer: "C"},

    {question: "What is Voldemort's mother's name?",
    answerA: "A. Celestina Warbeck",
    answerB: "B. Ariana Riddle",
    answerC: "C. Merope Gaunt",
    answerD: "D. Hepzibah Smith",
    correctAnswer: "C"},

    {question: "What magical act is the word 'splinching' connected with?",
    answerA: "A. Premonitions",
    answerB: "B. Transfiguration",
    answerC: "C. Apparition",
    answerD: "D. Potion making",
    correctAnswer: "C"},

    {question: "Who was the Hogwart's groundskeeper before Hagrid?",
    answerA: "A. Warg",
    answerB: "B. Ogg",
    answerC: "C. Mag",
    answerD: "D. Rigg",
    correctAnswer: "B"},

    {question: "What is the name of the Apparition instructor who comes to Hogwarts in Harry’s sixth year?",
    answerA: "A. Armando Dippet",
    answerB: "B. Artemesia Lufkin",
    answerC: "C. Wilkie Twycross",
    answerD: "D. Cyprian Youdle",
    correctAnswer: "C"},

    {question: "Who does Voldemort steal Hufflepuff's cup from?",
    answerA: "A. Caractacus Burke",
    answerB: "B. Hepzibah Smith",
    answerC: "C. Geralt Borgin",
    answerD: "D. Morvolo Gaunt",
    correctAnswer: "B"}
]
 

//variable for random selection of question/answer objects level 1
// const randomLvl1 = Math.floor(Math.random() * level1.length);
// console.log(randomLvl1, level1[randomLvl1]);

//set question upon reload, also used with level 1 functionality
function loadQuestionLvl1() {
    const randomLvl1 = Math.floor(Math.random() * level1.length);
    savedRandomLvl1 = randomLvl1
    questionText.innerText = `${level1[randomLvl1].question}`
    A.innerText = `${level1[randomLvl1].answerA}`
    B.innerText = `${level1[randomLvl1].answerB}`
    C.innerText = `${level1[randomLvl1].answerC}`
    D.innerText = `${level1[randomLvl1].answerD}`
}

//call the function to set the first question on page load
loadQuestionLvl1()
// level1.splice(savedRandomLvl1)

function loadQuestionLvl2() {
    const randomLvl2 = Math.floor(Math.random() * level2.length);
    savedRandomLvl2 = randomLvl2
    questionText.innerText = `${level2[randomLvl2].question}`
    A.innerText = `${level2[randomLvl2].answerA}`
    B.innerText = `${level2[randomLvl2].answerB}`
    C.innerText = `${level2[randomLvl2].answerC}`
    D.innerText = `${level2[randomLvl2].answerD}`
}
function loadQuestionLvl3() {
    const randomLvl3 = Math.floor(Math.random() * level3.length);
    savedRandomLvl3 = randomLvl3
    questionText.innerText = `${level3[randomLvl3].question}`
    A.innerText = `${level3[randomLvl3].answerA}`
    B.innerText = `${level3[randomLvl3].answerB}`
    C.innerText = `${level3[randomLvl3].answerC}`
    D.innerText = `${level3[randomLvl3].answerD}`
}
function loadQuestionLvl4() {
    const randomLvl4 = Math.floor(Math.random() * level4.length);
    savedRandomLvl4 = randomLvl4
    questionText.innerText = `${level4[randomLvl4].question}`
    A.innerText = `${level4[randomLvl4].answerA}`
    B.innerText = `${level4[randomLvl4].answerB}`
    C.innerText = `${level4[randomLvl4].answerC}`
    D.innerText = `${level4[randomLvl4].answerD}`
}
function loadQuestionLvl5() {
    const randomLvl5 = Math.floor(Math.random() * level5.length);
    savedRandomLvl5 = randomLvl5
    questionText.innerText = `${level5[randomLvl5].question}`
    A.innerText = `${level5[randomLvl5].answerA}`
    B.innerText = `${level5[randomLvl5].answerB}`
    C.innerText = `${level5[randomLvl5].answerC}`
    D.innerText = `${level5[randomLvl5].answerD}`
}
function loadQuestionLvl6() {
    const randomLvl6 = Math.floor(Math.random() * level6.length);
    savedRandomLvl6 = randomLvl6
    questionText.innerText = `${level6[randomLvl6].question}`
    A.innerText = `${level6[randomLvl6].answerA}`
    B.innerText = `${level6[randomLvl6].answerB}`
    C.innerText = `${level6[randomLvl6].answerC}`
    D.innerText = `${level6[randomLvl6].answerD}`
}
function loadQuestionLvl7() {
    const randomLvl7 = Math.floor(Math.random() * level7.length);
    savedRandomLvl7 = randomLvl7
    questionText.innerText = `${level7[randomLvl7].question}`
    A.innerText = `${level7[randomLvl7].answerA}`
    B.innerText = `${level7[randomLvl7].answerB}`
    C.innerText = `${level7[randomLvl7].answerC}`
    D.innerText = `${level7[randomLvl7].answerD}`
}

//this function checks whether the level 1 selected answer is correct, with appropriate alerts
function submit1() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 3 questions, load another level 1 question
    if (buttonChecked === level1[savedRandomLvl1].correctAnswer && questionNum.innerText < 3){
        alert('Correct!')
        //remove question that has already been used from the level array
        level1.splice(savedRandomLvl1, 1)
        loadQuestionLvl1()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered more than 4 questions, load level 2 question
    } else if (buttonChecked === level1[savedRandomLvl1].correctAnswer && questionNum.innerText >= 3){
        alert('Correct!')
        loadQuestionLvl2()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 2
        document.querySelector('#level').innerText = `2. Rubeus Hagrid`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/aT5iCCt.png"
        //hide submit1 button
        document.querySelector('#submit1').style.display = "none"
        //show submit2 button
        document.querySelector('#submit2').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than 7 questions, load another level 1 question
    } else if (buttonChecked !== level1[savedRandomLvl1].correctAnswer && questionNum.innerText < 7){
        alert(`Incorrect! The correct answer is ${level1[savedRandomLvl1].correctAnswer}`)
        //remove question that has already been used from the level array
        level1.splice(savedRandomLvl1, 1)
        loadQuestionLvl1()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is greater than or equal to 7
    } else if (buttonChecked !== level1[savedRandomLvl1].correctAnswer && questionNum.innerText >=7){
        alert(`Incorrect! The correct answer is ${level1[savedRandomLvl1].correctAnswer}`)
        loadQuestionLvl2()
        //increment question number
        question+=1
        questionNum.innerText = question
        //change displayed level to level 2
        document.querySelector('#level').innerText = `2. Rubeus Hagrid`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/aT5iCCt.png"
        //hide submit1 button
        document.querySelector('#submit1').style.display = "none"
        //show submit2 button
        document.querySelector('#submit2').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
    }
}
//add event listener to submit1 button, runs submit1 function
document.querySelector('#submit1').addEventListener('click', submit1)

//this function checks whether the level 2 selected answer is correct, with appropriate alerts
function submit2() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 6 questions, load another level 2 question
    if (buttonChecked === level2[savedRandomLvl2].correctAnswer && questionNum.innerText < 6){
        alert('Correct!')
        //remove question that has already been used from the level array
        level2.splice(savedRandomLvl2, 1)
        loadQuestionLvl2()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered more than 6 questions, load level 3 question
    } else if (buttonChecked === level2[savedRandomLvl2].correctAnswer && questionNum.innerText >= 6){
        alert('Correct!')
        loadQuestionLvl3()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 3
        document.querySelector('#level').innerText = `3. Ron Weasley`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/oIMmddd.png"
        //hide submit2 button
        document.querySelector('#submit2').style.display = "none"
        //show submit3 button
        document.querySelector('#submit3').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than 14 questions, load another level 2 question
    } else if (buttonChecked !== level2[savedRandomLvl2].correctAnswer && questionNum.innerText < 14){
        alert(`Incorrect! The correct answer is ${level2[savedRandomLvl2].correctAnswer}`)
        //remove question that has already been used from the level array
        level2.splice(savedRandomLvl2, 1)
        loadQuestionLvl2()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is greater than or equal to 14 load level 3 question
    } else if (buttonChecked !== level2[savedRandomLvl2].correctAnswer && questionNum.innerText >=14){
        alert(`Incorrect! The correct answer is ${level2[savedRandomLvl2].correctAnswer}`)
        loadQuestionLvl3()
        //increment question number
        question+=1
        questionNum.innerText = question
        //change displayed level to level 3
        document.querySelector('#level').innerText = `3. Ron Weasley`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/oIMmddd.png"
        //hide submit2 button
        document.querySelector('#submit2').style.display = "none"
        //show submit3 button
        document.querySelector('#submit3').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
    }
}

//add event listener to submit2 button, runs submit2 function
document.querySelector('#submit2').addEventListener('click', submit2)

//this function checks whether the level 3 selected answer is correct, with appropriate alerts
function submit3() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 9 questions, load another level 3 question
    if (buttonChecked === level3[savedRandomLvl3].correctAnswer && questionNum.innerText < 9){
        alert('Correct!')
        //remove question that has already been used from the level array
        level3.splice(savedRandomLvl3, 1)
        loadQuestionLvl3()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered more than 9 questions, load level 4 question
    } else if (buttonChecked === level3[savedRandomLvl3].correctAnswer && questionNum.innerText >= 9){
        alert('Correct!')
        loadQuestionLvl4()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 4
        document.querySelector('#level').innerText = `4. Harry Potter`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/uxNC7Hq.png"
        //hide submit3 button
        document.querySelector('#submit3').style.display = "none"
        //show submit4 button
        document.querySelector('#submit4').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than max(21), load another level 3 question
    } else if (buttonChecked !== level3[savedRandomLvl3].correctAnswer && questionNum.innerText < 21){
        alert(`Incorrect! The correct answer is ${level3[savedRandomLvl3].correctAnswer}`)
        //remove question that has already been used from the level array
        level3.splice(savedRandomLvl3, 1)
        loadQuestionLvl3()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is equal to max(21) **END GAME**
    } else if (buttonChecked !== level3[savedRandomLvl3].correctAnswer && questionNum.innerText >= 21){
        alert(`Incorrect! The correct answer is ${level3[savedRandomLvl3].correctAnswer}`)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
    }
}

//add event listener to submit3 button, runs submit3 function
document.querySelector('#submit3').addEventListener('click', submit3)

//this function checks whether the level 4 selected answer is correct, with appropriate alerts
function submit4() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 12 questions, load another level 4 question
    if (buttonChecked === level4[savedRandomLvl4].correctAnswer && questionNum.innerText < 12){
        alert('Correct!')
        //remove question that has already been used from the level array
        level4.splice(savedRandomLvl4, 1)
        loadQuestionLvl4()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered 12 or more questions, load level 5 question
    } else if (buttonChecked === level4[savedRandomLvl4].correctAnswer && questionNum.innerText >= 12){
        alert('Correct!')
        loadQuestionLvl5()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 5
        document.querySelector('#level').innerText = `5. Hermoine Granger`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/pOnCXIz.png"
        //hide submit4 button
        document.querySelector('#submit4').style.display = "none"
        //show submit5 button
        document.querySelector('#submit5').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than max(21), load another level 4 question
    } else if (buttonChecked !== level4[savedRandomLvl4].correctAnswer && questionNum.innerText < 21){
        alert(`Incorrect! The correct answer is ${level4[savedRandomLvl4].correctAnswer}`)
        //remove question that has already been used from the level array
        level4.splice(savedRandomLvl4, 1)
        loadQuestionLvl4()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is equal to max(21) **END GAME**
    } else if (buttonChecked !== level4[savedRandomLvl4].correctAnswer && questionNum.innerText >= 21){
        alert(`Incorrect! The correct answer is ${level4[savedRandomLvl4].correctAnswer}`)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
    }
}

//add event listener to submit4 button, runs submit4 function
document.querySelector('#submit4').addEventListener('click', submit4)

//this function checks whether the level 5 selected answer is correct, with appropriate alerts
function submit5() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 15 questions, load another level 5 question
    if (buttonChecked === level5[savedRandomLvl5].correctAnswer && questionNum.innerText < 15){
        alert('Correct!')
        //remove question that has already been used from the level array
        level5.splice(savedRandomLvl5, 1)
        loadQuestionLvl5()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered 15 or more questions, load level 6 question
    } else if (buttonChecked === level5[savedRandomLvl5].correctAnswer && questionNum.innerText >= 15){
        alert('Correct!')
        loadQuestionLvl6()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 6
        document.querySelector('#level').innerText = `6. Minerva McGonagall`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/DwVayM2.png"
        //hide submit5 button
        document.querySelector('#submit5').style.display = "none"
        //show submit6 button
        document.querySelector('#submit6').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than max(21), load another level 5 question
    } else if (buttonChecked !== level5[savedRandomLvl5].correctAnswer && questionNum.innerText < 21){
        alert(`Incorrect! The correct answer is ${level5[savedRandomLvl5].correctAnswer}`)
        //remove question that has already been used from the level array
        level5.splice(savedRandomLvl5, 1)
        loadQuestionLvl5()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is equal to max(21) **END GAME**
    } else if (buttonChecked !== level5[savedRandomLvl5].correctAnswer && questionNum.innerText >= 21){
        alert(`Incorrect! The correct answer is ${level5[savedRandomLvl5].correctAnswer}`)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
    }
}

//add event listener to submit5 button, runs submit5 function
document.querySelector('#submit5').addEventListener('click', submit5)

//this function checks whether the level 6 selected answer is correct, with appropriate alerts
function submit6() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 18 questions, load another level 6 question
    if (buttonChecked === level6[savedRandomLvl6].correctAnswer && questionNum.innerText < 18){
        alert('Correct!')
        //remove question that has already been used from the level array
        level6.splice(savedRandomLvl6, 1)
        loadQuestionLvl6()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered 18 or more questions, load level 7 question
    } else if (buttonChecked === level6[savedRandomLvl6].correctAnswer && questionNum.innerText >= 18){
        alert('Correct!')
        loadQuestionLvl7()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //change displayed level to level 7
        document.querySelector('#level').innerText = `7. Albus Dumbledore`
        //change levelCharacter image
        document.querySelector('#levelCharacter').src = "https://i.imgur.com/4MEVf10.png"
        //hide submit6 button
        document.querySelector('#submit6').style.display = "none"
        //show submit7 button
        document.querySelector('#submit7').style.display = "block"
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect, and have answered less than max(21), load another level 6 question
    } else if (buttonChecked !== level6[savedRandomLvl6].correctAnswer && questionNum.innerText < 21){
        alert(`Incorrect! The correct answer is ${level2[savedRandomLvl2].correctAnswer}`)
        //remove question that has already been used from the level array
        level6.splice(savedRandomLvl6, 1)
        loadQuestionLvl6()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is equal to max(21) **END GAME**
    } else if (buttonChecked !== level6[savedRandomLvl6].correctAnswer && questionNum.innerText >= 21){
        alert(`Incorrect! The correct answer is ${level6[savedRandomLvl6].correctAnswer}`)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
    }
}

//add event listener to submit6 button, runs submit6 function
document.querySelector('#submit6').addEventListener('click', submit6)

//this function checks whether the level 7 selected answer is correct, with appropriate alerts
function submit7() {
    let buttonChecked = document.querySelector('input[name = "radio"]:checked').value
//if correct and have answered less than 18 questions, load another level 6 question
    if (buttonChecked === level7[savedRandomLvl7].correctAnswer && questionNum.innerText < 21){
        alert('Correct!')
        //remove question that has already been used from the level array
        level7.splice(savedRandomLvl7, 1)
        loadQuestionLvl7()
        //increment question number
        question+=1
        questionNum.innerText = question
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if correct and have answered 21 questions, **END GAME
    } else if (buttonChecked === level7[savedRandomLvl7].correctAnswer && questionNum.innerText >= 21){
        alert('Correct! GAME OVER')
        //increment score 
        score+=scoreIncrement
        //display the score as a percent
        scoreText.innerText = Math.round((score * 100)).toFixed(0)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
//if incorrect, and have answered less than max(21), load another level 7 question
    } else if (buttonChecked !== level7[savedRandomLvl7].correctAnswer && questionNum.innerText < 21){
        alert(`Incorrect! The correct answer is ${level7[savedRandomLvl7].correctAnswer}`)
        //remove question that has already been used from the level array
        level7.splice(savedRandomLvl7, 1)
        loadQuestionLvl7()
        //increment question number
        question+=1
        questionNum.innerText = question
        //clear radio button selection
        document.querySelector('input[name= "radio"]:checked').checked = false
//if incorrect and number of questions answered is equal to max(21) **END GAME**
    } else if (buttonChecked !== level7[savedRandomLvl7].correctAnswer && questionNum.innerText >= 21){
        alert(`Incorrect! The correct answer is ${level7[savedRandomLvl7].correctAnswer}`)
        setTimeout(function endScreen() {
            document.querySelector('#headerContent').style.display = 'none';
            document.querySelector('#content').style.display = 'none';
            document.querySelector('#scoreDiv').style.display = 'none';
            document.body.style.background = "url('https://i.imgur.com/j6fB2OX.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
            document.querySelector('#endGame').style.display = 'flex';
            document.querySelector('#gameCompleted').style.marginTop = '2%';
            document.querySelector('#gameCompleted').style.margin = '0%';
            document.querySelector('#gameCompleted').style.fontSize = '200%';
            document.querySelector('.heading2').style.margin = '0%';
            document.querySelector('.heading2').style.marginBottom = '4%';
            document.querySelector('#wizardType').style.marginTop = '0%';
            document.querySelector('#wizardType').style.fontSize = '120%';
            document.querySelector('.endScore').style.color = 'firebrick';
            document.querySelector('#endScore').innerText = `${scoreText.innerText}`}, 900)
        if(scoreText.innerText <= 20){
            document.querySelector('#wizardType').innerText = `a MUGGLE`
        } else if (scoreText.innerText > 20 && scoreText.innerText <= 40){
            document.querySelector('#wizardType').innerText = `a FIRST-YEAR HOGWARTS STUDENT`
        } else if (scoreText.innerText > 40 && scoreText.innerText <= 60){
            document.querySelector('#wizardType').innerText = `a HOGWARTS GRADUATE`
        } else if (scoreText.innerText > 60 && scoreText.innerText <= 80){
            document.querySelector('#wizardType').innerText = `a HOGWARTS PROFESSOR`
        } else if (scoreText.innerText > 80) {
            document.querySelector('#wizardType').innerText = `an EXPERT WIZARD`
        }
    }
}

//add event listener to submit7 button, runs submit7 function
document.querySelector('#submit7').addEventListener('click', submit7)