var Questions = [
    {'Question':'Question 1','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
    {'Question':'Question 2','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
    {'Question':'Question 3','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
    {'Question':'Question 4','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
    {'Question':'Question 5','options':['optiona','optionb','optionc','optiond'],'answer':'optiona'},
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