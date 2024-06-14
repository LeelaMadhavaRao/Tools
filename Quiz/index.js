var Questions = [
    {'Question':'What is the chemical symbol for gold?','options':['Au','Ag','Pb','Fe'],'answer':'Au'},
    {'Question':'Who wrote the play "Romeo and Juliet"?','options':['William Shakespeare','Charles Dickens','Mark Twain','Jane Austen'],'answer':'William Shakespeare'},
    {'Question':'What is the capital city of Canada?','options':['Toronto','Vancouver','Ottawa','Montreal'],'answer':'Ottawa'},
    {'Question':'What is the value of π (pi) up to two decimal places?','options':['3.12','3.14','3.16','3.18'],'answer':'3.14'},
    {'Question':'Who was the first President of the United States?','options':['Thomas Jefferson','Abraham Lincoln','George Washington','John Adams'],'answer':'George Washington'}
];

var CurrentQuestion = 0;
var Score = 0;

function RenderQuestion(id){
    if(id === Questions.length){
        var html = `<h4 style="font-weight: bolder; color: green;">Score: ${Score}</h4>`;
        document.getElementById('score').innerHTML = html;
        return;
    }

    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;

    document.getElementById('QuestionNo').innerHTML = id + 1;
    document.getElementById('Question').innerHTML = Questions[id].Question;
    document.getElementById('Optiona').innerHTML = Questions[id].options[0];
    document.getElementById('Optionb').innerHTML = Questions[id].options[1];
    document.getElementById('Optionc').innerHTML = Questions[id].options[2];
    document.getElementById('Optiond').innerHTML = Questions[id].options[3];

    if(id === Questions.length - 1){
        document.getElementById('Next_Button').innerHTML = 'Submit';
    } else {
        document.getElementById('Next_Button').innerHTML = 'Next';
    }

    CurrentQuestion = id;
    
}

function NextQuestion(){
    var selectedOption = document.querySelector('input[name="QuizApp"]:checked');
    if (selectedOption) {
        var answer = selectedOption.nextElementSibling.innerHTML.trim();
        if (answer === Questions[CurrentQuestion].answer) {
            Score++;
            
        }
    }
    RenderQuestion(CurrentQuestion + 1);
}

setTimeout(() => {
    RenderQuestion(0);
}, 300);
