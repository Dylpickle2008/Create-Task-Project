///The list of All US State Abbreviations and a second list with their corresponding capital cities
///Variables: the score, question index (number), and # of lives (user attempts) are defined

let questionList = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ];
let answerList = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne' ];
let score = 0;
let questionIndex = 0;
let lives = 0;

///defines HTML elements as usable javascript elements 

const question = document.querySelector('.question-container');
const button = document.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');


///Displays the item from the question list in the question-container as the index

console.log(question); 
question.textContent = questionList[questionIndex];


///Function with parameters that accepts user input and displays the output
///if the player input matches the corresponding list item in the answer list (the correct answer for each question)
///increase the score by 1 and go to the next question (incr. question index), while resetting incorrect attempts to zero
///if it doesn't match, decrease the score by 1 and increase the attempts by 1, while displaying the updated score

let submitAnswer = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        } else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score; 
            lives += 1;
        }
        endGame(); 
    });
}


///Iteration called by the submit function:
///Once the player answers all 50 questions or after 8 total incorrect guesses, the end game function is triggered, 
/// displaying a thank you for playing message on screen

let endGame = () =>{
    if(questionIndex > 50|| lives > 8){
        scoreContainer.textContent = "Final Score: " + score; 
        question.textContent = "Congratulations: play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
};

submitAnswer();
