class Question {
   constructor (text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;


    isCorrectAnswer(choice){
             return this.answer === choice;
            }

}
}

var questions = [
new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
new Question("What has not been covered in PUI lab?", ["HTML", "CSS","Javascript", "Java"], "Java"),
];

class Quiz {
        constructor(questions) {
            this.score = 0;
    this.questions = questions;
            this.questionIndex = 0;


    guess(answer) {
    if(this.getQuestion().isCorrectAnswer(answer)) {
     this.score++;
            }
        
        this.questionIndex++;
}

}   

    
    getQuestion() {

        return this.questions[this.questionIndex];
    
}

}


function populate() {

     var element = document.getElementById("question");
     element.innerHTML = quiz.getQuestion().text;
 
     // show options
     var choices = quiz.getQuestion().choices;
     for(var i = 0; i < choices.length; i++) {
         var element = document.getElementById("choice" + i);
         element.innerHTML = choices[i];
         guess("btn" + i, choices[i]);
     }
 
    
};

