# UWS


### Dynamic HTML
Dynamic HTMl is HTML that is always "running and changing".  It is more interesting 
    and allows a person to to do much more with sites as oposed to static HTML. 

   ### What the quiz will do
   like this quiz when it is complete and will generate ask for the persons name
    but, it will also generate the persons scores. The quiz will let the participant know if answer is right/wrong  This data is constantly changing based on the particular user.  

### How the quiz will work with HTML
 The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    this a big part of how I will make the HTML Dynamic and make it work with Javascript. 
    
  ### proccess 
   Below is some of the code in my Script.js file. I think that I should use HTML to  generate information that will fill inthe "" section of this syntax.the content in "" will be the item that is contanstly regenerated and changing  
       opitionListEl.innerHTML = ""; 
       opitionResultsEL.innterHTML = "";

       
### Javascript 

## The Queestions 
The first code is questions for the quiz Question trivia concerning the chicago fire tv show?

## variables
Next is the variables for different parts of the questions. 

## Question Index 
The questionIndex is the index point of the answer on the list

### Timer 
 if the time = 0 the function will end the quiz


### RenderQuestion
 the function renderQuestion is exactly how it is named. It allows the questions to be 
  
  ### concerns questions 
   The following line is about the acutally question- meaning the text. and it questions index point.

  intervalId = setInterval(updateTime, 1000);


   ### connect to HTML
  This these two lines of code will be connect to the HTMl code when it is written

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";
  
  ### choices 
  This line is about the quanity of choices and position of a particular choice. The questionIndex applies to the choice being choosen.  
  var choices = questions[questionIndex].choices;
  var choiceslength = choices.length;

  ### for Loop
  This is a for the loop for the lenght. This loop is based on the list of opitions to choose from. There is a variable for the items on the list.
  choices at position [i] on the list.

### Index Questions 
This particular function is to index all the questions in the quiz

### checkAnswer
This is the function checkanswer. This question will check if the answer is right or wrong and generate the results accordingly. It will update the correct count if nessecary and wait two seconds and call the next question

