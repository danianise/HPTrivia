# Harry Potter Trivia
## Overview
A self-scoring trivia game about Harry Potter and the Wizarding World. Questions will increase in difficulty as the game progresses.
This game has 7 levels of difficulty, each with 7 questions to answer. The levels are both numbered and given a name based on a Harry Potter character whose magical skill level corresponds to the difficulty of questions in that level.
If the user is answering correctly, they will progress through the levels quickly. If the user is answering incorrectly, they will stay in the same level of difficulty longer.
At the end of the game, a new screen will appear to show the user their final score and give them a rating based on how well they did.
## Languages used:
- HTML
- CSS
- JavaScript
## Links
[GitHub Repository](https://github.com/danianise/HPTrivia)
## Game Screenshots
### Game play
![Screen Shot 2022-03-16 at 9 05 21 PM](https://user-images.githubusercontent.com/97096664/158716387-f21810b4-2420-4d73-9086-91d41b757e94.png)
### End game
![Screen Shot 2022-03-16 at 9 09 53 PM](https://user-images.githubusercontent.com/97096664/158716798-6dea148d-a8f6-4b0a-87bf-83682a936075.png)
## User Stories
### MVP Goals
As a player, I will be able to select the answer which I believe is correct, and submit my choice.
At the end of the game, I would like to see what percentage of the questions I've answered correctly.
### Stretch Goals
As a player, I would like to be informed whether my answer is correct. If I have chosen incorrectly, I want to be shown what the actual correct answer is.
As a player, I would like to answer more difficult questions when I am consistently answering correctly, and stay in the same level if I'm consistently answering wrong.
As a player I would like to see a new variety of questions if I choose to play again.
## Major Hurdles
The biggest issue I had making this game was figuring out how to randomly generate a question without breaking any other parts of the code. Initially, I was able to randomize the questions, but it created a bug in the scoring. Then, I realized the questions were repeating before the user progressed into a new level. As of now, these issues have been corrected.
