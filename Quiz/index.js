var Questions = [
    {'Question':' What is the chemical symbol for gold?','options':['Au','Ag','Pb','Fe'],'answer':'Au'},
    {'Question':'Who wrote the play "Romeo and Juliet"?','options':['William Shakespeare','Charles Dickens','Mark Twain','Jane Austen'],'answer':'William Shakespeare'},
    {'Question':'What is the capital city of Canada?','options':[' Toronto','Vancouver','Ottawa','Montreal'],'answer':' Ottawa'},
    {'Question':'What is the value of π (pi) up to two decimal places?','options':['3.12','3.14','3.16','3.18'],'answer':'3.14'},
    {'Question':'Who was the first President of the United States?','options':['Thomas Jefferson','Abraham Lincoln','George Washington','John Adams'],'answer':'George Washington'},
    {'Question':'Question 6','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
]
var CurrentQuestion = 0;
var Score = 0;

function RenderQuestion(id){
    id = Number(id);
    if(id === Questions.length - 1){
        alert("Reached Last Question!");
        //Display Result
        return;
    }
    document.getElementById('QuestionNo').innerHTML = id+1;
    document.getElementById('Question').innerHTML = Questions[id].Question;
    document.getElementById('Optiona').innerHTML = Questions[id].options[0];
    document.getElementById('Optionb').innerHTML = Questions[id].options[1];
    document.getElementById('Optionc').innerHTML = Questions[id].options[2];
    document.getElementById('Optiond').innerHTML = Questions[id].options[3];
    if(id === Questions.length - 2){
        document.getElementById('Next_Button').innerHTML = 'Submit';
    }
    CurrentQuestion += 1;
    
}
function NextQuestion(){
    RenderQuestion(CurrentQuestion);
}
setTimeout(()=>{
    RenderQuestion(0);
},300)