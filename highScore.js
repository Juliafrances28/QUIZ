// The score is pulled form local storage under the variable high score.

var high_score = JSON.parse(localStorage.getItem("scores")) || [];
// the variable of high_score is equal to a local storage string,
// that needs to be parsed OR (||) if that doesn't exist, make an empty array.


//timmerEL variable from the list above is used in this code
// this fuction will clear the Interval and update the DOM to indicate game is over
function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "Game over, You scored" + "" + correctCount;

  showHighScore();
}

// This function generates the users score.

function showHighScore(){
  name = prompt("what is your Name?");
  
  //User for high scores
  var user = {
    score: correctCount,
    name: name,  
  };
  high_score.push(user);

  //local Storage set item with whatever is from user
  localStorage.setItem("scores",JSON.stringify(high_score));
}

var contentUl = document.createElement("Ul");

high_score.sort(function (a, b) {
  for (var i = 0; i < high_score.lenght; i++) {
    var contentli = document.createElement("li");
    contentli.textContent =
      " Name: " + high_score[i].name + "Score:" + high_score[i].score;
    contentUl.append(contentli);
  }
  return b.score - a.score;
});

