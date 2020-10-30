// This are the questions for the quiz Question trivia concerning the chicago fire tv show?



var questions = [
  {
    questions:
      "In Season 1, Who was Firehouse 51's Candidate before Peter Mill's shows up?",
    choices: [
      'Matthew Casey',
      'Peter Mills',
      'Gabby Dawson',
      'Brain Otis Zvonneck',
      'Lesley Shay',
    ],
    answer: 'Brain Otis Zvonneck',
  },

  {
    questions: 'In Season 1, Who did Gabriella Dawson had a crush on?',
    choices: [
      'Matthew Casey',
      'Joe Cruz',
      'Christopher Herman',
      'Kelly Severide',
      'Chief Boden',
    ],
    answer: 'Matthew Casey',
  },

  {
    questions: 'Mouch means Man and Couch',
    choices: ['True', 'False'],
    answer: 'True',
  },

  {
    questions:
      'In Season 1, Why did Kelly Severide ask Shay for Insulin for his Shoulder?',
    choices: [
      'Because he was on drugs',
      ' Because he had a sore back',
      'He hurt himself on the job',
      "It didn't say why he needed it",
    ],
    answer: 'He hurt himself on the job',
  },
  {
    questions: "Who was Casey's Girlfriend in Season 1?",
    choices: [
      'Gabriella Dawson',
      'Leslie Shay',
      'Hallie Thomas',
      'Gail Mcleod',
    ],
    answer: 'Hallie Thomas',
  },
  {
    questions:
      'Sylvie Brett is the new Paramedic in Charge [PIC] in Firehouse 51?',
    choices: ['True', 'False'],
    answer: 'True',
  },
  {
    questions:
      'In CrossOver Week, What did Severide find in a Suitcase on a call?',
    choices: [
      'Business related sheets',
      'Photos of Family',
      'Children Chained up',
      'Pornography of the victims neighbor',
    ],
    answer: 'Children Chained Up',
  },
  {
    questions:
      "In Season 3, What position does Mills take because he can't be on Squad?",
    choices: ['Paramedic', 'Lieutenant', 'Head Chief', 'candidate'],
    answer: 'Paramedic',
  },
  {
    questions: 'Dawson and Casey have gotten married',
    choices: ['True', 'False'],
    answer: 'False',
  },
  {
    questions: "Who is Dawson's new Boss on calls?",
    choices: ['Casey', 'Severide', 'Boden', 'Herman'],
    answer: 'Herman',
  },
];

// The following are the variables for the different parts of the questions

var questionEl = document.querySelector('#question');
var optionListEl = document.querySelector('#option-list');
var questionResultEl = document.querySelector('#question-result');
var timerEl = document.querySelector('#timer');

// The questionIndex is the index point of the answer on the list
var questionIndex = 0;
var correctCount = 0;
//Timer for quiz
var timer = 30;
var intervalId;

// This function will decrement (decrease) the time
// if the time = 0 the function will end the quiz
function updateTime() {
  console.log(timer);
  timer--;
  timerEl.textContent = timer;
  if (timer <= 0) {
    endQuiz();
  }
}

// this function is exactly how it is named. It allows the questions to be rendered
function renderQuestion() {
  if (timer == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  // This line is about the acutally question- meaning the text. and it questions index point.
  questionEl.textContent = questions[questionIndex].questions;
  // if (questions[questionIndex].questions === undefined) {
  //   endQuiz()
  // }
  //console.log(questions[questionIndex].questions);

  // This these two lines of code will be connect to the HTMl code when it is written

  optionListEl.innerHTML = '';
  questionResultEl.innerHTML = '';

  // This line is about the quanity of choices and position of a particular choice. I am thinking the questionIndex applies to the right choice.
  var choices = questions[questionIndex].choices;
  var choiceslength = choices.length;

  // This is a for the loop for the lenght. This loop is based on the list of opitions to choose from
  //  There is a variable for the items on the list.
  // choices at position [i] on the list.

  for (var i = 0; i < choiceslength; i++) {
    var questionListItem = document.createElement('li');
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
    // regeneration the list
  }
}

// This function is to index all the questions in the quiz
function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    timer = 0;
  }
  optionListEl.addEventListener('click', checkAnswer);
  renderQuestion();
}

// This question will check if the answer is right or wrong and generate the results accordingly
// It will update the correct count if nessecary and wait two seconds and call the next question

function checkAnswer(event) {
  clearInterval(intervalId);

  if (event.target.matches('li')) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContext = 'Correct';
      correctCount++;
    } else {
      questionResultEl.textContent = 'Incorrect';
    }
  }
  optionListEl.removeEventListener('click', checkAnswer);
  setTimeout(nextQuestion, 2000);
}
if (optionListEl) {
  optionListEl.addEventListener('click', checkAnswer);
}

renderQuestion();
