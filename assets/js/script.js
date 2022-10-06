//Chirstian Groselle

//assigning html elements to variables
var mainEl = document.querySelector("#mainContainer");
//var listEL = document.querySelector('#parentList');
//var o1El = document.querySelector('#o1');
//var o2El = document.querySelector('#o2');
//var o3El = document.querySelector('#o3');
//var o4El = document.querySelector('#o4');
var startBtnEl = document.querySelector('#start-button');

//building the array of questions and answers
//questions came from W3schools.com
var questions = [
    {
        "question": "HTML - What does HTML stands for?",
        "correctA": "Hypertext Markup Language.",
        "wrong1": "Hypertext Machine language.",
        "wrong2": "Hypertext and links markup language.",
        "wrong3": "Hightext machine language.",
    },
    {
        "question": "HTML - How is document type initialized in HTML5.?",
        "correctA": "<!DOCTYPE HTML>",
        "wrong1": "</DOCTYPE HTML>",
        "wrong2": "</DOCTYPE>",
        "wrong3": "</DOCTYPE html>",
    },
    {
        "question": "HTML - Which of the following HTML Elements is used for making any text bold ?",
        "correctA": "<b>",
        "wrong1": "<p>",
        "wrong2": "<i>",
        "wrong3": "<li>",
    },
    {
        "question": "HTML - Which of the following HTML element is used for creating an unordered list?",
        "correctA": "<ul>",
        "wrong1": "<i>",
        "wrong2": "<em>",
        "wrong3": "<ui>",
    },
    {
        "question": "HTML - Which of the following characters indicate closing of a tag?",
        "correctA": "/",
        "wrong1": ".",
        "wrong2": "//",
        "wrong3": "!",
    },
    {
        "question": "CSS - What is the correct HTML for referring to an external style sheet?",
        "correctA": "<link rel='stylesheet' href='./assets/css/style.css' />",
        "wrong1": "<style src='style.css'/>",
        "wrong2": "<stylesheet>style.css</stylesheet>",
        "wrong3": "<link src='stylesheet' />",
    },
    {
        "question": "CSS - Where in an HTML document is the correct place to refer to an external style sheet?",
        "correctA": "in the <head> section",
        "wrong1": "in the <body> section",
        "wrong2": "At the end of the document",
        "wrong3": "The stylesheet dosent need to be refrenced",
    },
    {
        "question": "CSS - Which HTML tag is used to define an internal style sheet?",
        "correctA": "<style>",
        "wrong1": "<css>",
        "wrong2": "<script>",
        "wrong3": "<main>",
    },
    {
        "question": "CSS - Wich CSS tag is used to refer to a class",
        "correctA": ".",
        "wrong1": "#",
        "wrong2": "/",
        "wrong3": "*",
    },
    {
        "question": "CSS - What does CSS stand for?",
        "correctA": " Cascading Style Sheets",
        "wrong1": " Colorful Style Sheets",
        "wrong2": " Computer Style Sheets",
        "wrong3": " Creative Style Sheets",
    },
    {
        "question": "JS - Inside which HTML element do we put the JavaScript?",
        "correctA": "<script>",
        "wrong1": "<js>",
        "wrong2": "<javascript>",
        "wrong3": "<scripting>",
    },
    {
        "question": "JS - What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id='demo'>This is a demonstration.</p>",
        "correctA": " document.getElementById('demo').innerHTML = 'Hello World!';",
        "wrong1": " #demo.innerHTML = 'Hello World!';",
        "wrong2": " document.getElementByName('p').innerHTML = 'Hello World!';",
        "wrong3": " document.getElement('p').innerHTML = 'Hello World!';",
    },
    {
        "question": "JS - Where is the correct place to insert a JavaScript?",
        "correctA": "Both the <head> section and the <body> section are correct",
        "wrong1": "The <head> section",
        "wrong2": "The <body> section",
        "wrong3": "The <footer> section",
    },
    {
        "question": "JS - What is the correct syntax for referring to an external script called 'xxx.js'?",
        "correctA": "<script src='xxx.js'>",
        "wrong1": "<script name='xxx.js'>",
        "wrong2": "<script href='xxx.js'>",
        "wrong3": "<style href='xxx.js'",
    },
    {
        "question": "JS - How do you write 'Hello World' in an alert box?",
        "correctA": "alert('Hello World');",
        "wrong1": "alertBox('Hello World');",
        "wrong2": "msg('Hello World');",
        "wrong3": "msgBox('Hello World');",
    },
]


function nextQuestion() {
    mainEl.innerHTML = '';
    let index = Math.floor(Math.random() * questions.length);
    let currQuestion = questions[index];
    questions.splice(index, 1);
    console.log(currQuestion);

    let qHeader = document.createElement('header');
    qHeader.textContent = currQuestion.question;
    mainEl.appendChild(qHeader);

    let ansList = document.createElement('ul');
    mainEl.appendChild(ansList);

    let ans0 = document.createElement('li');
    let ans0In = document.createElement('input');
    let ans0L = document.createElement('label');
    ansList.appendChild(ans0);
    ans0.appendChild(ans0In);
    ans0.appendChild(ans0L);
    ans0In.setAttribute('class', 'checkbox');
    ans0In.setAttribute('type', 'checkbox');

    let ans1 = document.createElement('li');
    let ans1In = document.createElement('input');
    let ans1L = document.createElement('label');
    ansList.appendChild(ans1);
    ans1.appendChild(ans1In);
    ans1.appendChild(ans1L);
    ans1In.setAttribute('class', 'checkbox');
    ans1In.setAttribute('type', 'checkbox');

    let ans2 = document.createElement('li');
    let ans2In = document.createElement('input');
    let ans2L = document.createElement('label');
    ansList.appendChild(ans2);
    ans2.appendChild(ans2In);
    ans2.appendChild(ans2L);
    ans2In.setAttribute('class', 'checkbox');
    ans2In.setAttribute('type', 'checkbox');

    let ans3 = document.createElement('li');
    let ans3In = document.createElement('input');
    let ans3L = document.createElement('label');
    ansList.appendChild(ans3);
    ans3.appendChild(ans3In);
    ans3.appendChild(ans3L);
    ans3In.setAttribute('class', 'checkbox');
    ans3In.setAttribute('type', 'checkbox');

    for(let i = 0; i < 4; i++){
        let ans0 = document.createElement('li');
        let ans0In = document.createElement('input');
        let ans0L = document.createElement('label');
        ansList.appendChild(ans0);
        ans0.appendChild(ans0In);
        ans0.appendChild(ans0L);
        ans0In.setAttribute('class', 'checkbox');
        ans0In.setAttribute('type', 'checkbox');
    }
    var ran = [0,1,2,3];
    for(let i = 0; i < 4; i++){        

        let ranIndex = Math.floor(Math.random() * ran.length) 
        if(ranIndex === 0){
            ans0L.textContent = currQuestion.correctA;
            ans0L.setAttribute('id', 'correct');
            ran.splice(ranIndex, 1);
        } else if(ranIndex === 1){
            ans0L.textContent = currQuestion.wrong1;
            ran.splice(ranIndex, 1);
        } else if(ranIndex === 2){
            ans0L.textContent = currQuestion.wrong2;
            ran.splice(ranIndex, 1);
        } else if(ranIndex === 3){
            ans0L.textContent = currQuestion.wrong3;
            ran.splice(ranIndex, 1);
        }
    }

    //adding the submit and restart button to the DOM
    let nxtBtn = document.createElement('button');
    mainEl.append(nxtBtn);
    nxtBtn.textContent = 'Submit';

    let rstBtn = document.createElement('button');
    mainEl.append(rstBtn);
    rstBtn.textContent = 'Restart';

    let corIndex = Math.floor(Math.random() * 4);

}

function startQuiz() {
    if(questions.length > 0){
        nextQuestion();
    } else {
        alert('No more questions');
    }
    
}

startBtnEl.addEventListener('click', startQuiz);