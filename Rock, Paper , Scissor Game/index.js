var SelectedChoice = null;
var NewGame = false;
// var score=document.getElementById("score");
// var gobutton=document.getElementById("go_button");
// var third=document.getElementById("img");
// var but1round=document.getElementById("but1round").textContent="--";
// var but2round=document.getElementById("but2round").textContent="--";
function choice(val){
    if(NewGame == true){
        return;
    }
    var fir,sec,thr = null;
    switch(val){
        case 0:
            fir = 'rock';
            sec = 'paper';
            thr = 'scissor';
        break;
        case 1:
            sec = 'rock';
            fir = 'paper';
            thr = 'scissor';
        break;
        case 2:
            thr = 'rock';
            sec = 'paper';
            fir = 'scissor';
        break;
    }
    document.getElementById(fir).classList.add('selected');
    document.getElementById(sec).classList.remove('selected');
    document.getElementById(thr).classList.remove('selected');
    SelectedChoice=val;
}
function ResetStats(){

}
function ComputerChoice(){
    return Math.floor(Math.random() * 3);
}

async function Go(){
    if(NewGame == true){
        NewGame = false;
        SelectedChoice = null;
        document.getElementById('img').classList.add('display-none');
        document.getElementById('rock').classList.remove('selected');
        document.getElementById('paper').classList.remove('selected');
        document.getElementById('scissor').classList.remove('selected');
        document.getElementById('go_button').innerHTML = 'Go';
        document.getElementById('result').innerHTML = '--';
        return;
    }
    if(SelectedChoice == null){
        alert("Please Select a Choice!");
        return;
    }
    var Computer_Choice = ComputerChoice();
    // if((Computer_Choice ==0 && SelectedChoice==0) ||(Computer_Choice ==2 && SelectedChoice==2) || (Computer_Choice ==1 && SelectedChoice==1))
    //     {
    //         var result=document.getElementById("result");
    //         result.textContent="Draw";
    //         gobutton.innerHTML="Next round";
    //         if(Computer_Choice ==0)
    //             {
    //                 img.src="./../Img/rock.jpg";
    //             }
    //         else if(Computer_Choice ==1)
    //             {
    //                 img.src="./../Img/paper.jpg";
    //             }
    //         else if(Computer_Choice ==2)
    //             {
    //                 img.src="./../Img/scissor.jpg";
    //             }
    //             but2round.textContent=but1round.textContent;
    //             but1round.textContent="--";
    //             SelectedChoice="null";
    //     }
    //Display Animation
    document.getElementById('img').classList.remove('display-none');
    var Img_Links = ['./../Img/rock.jpg','./../Img/paper.jpg','./../Img/scissor.jpg'];
    i = 0;
    var Animation = setInterval(()=>{
        document.getElementById('img').src = Img_Links[i];
        i = (i+1)%3;
    },100);
    //Wait for Animation to Complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    clearInterval(Animation);
    
    //Display Computer Choice
    // var src = null;
    // if(Computer_Choice === 0){
    //     src = './../Img/rock.jpg';  
    // }else if(Computer_Choice === 1){
    //     src = './../Img/paper.jpg';
    // }else{
    //     src = './../Img/scissor.jpg';
    // }
    document.getElementById('img').src = Img_Links[Computer_Choice];

    //Caluculate Result
    var Result = Caluculate_Result(SelectedChoice,Computer_Choice); // 0-draw 1-User Won -1-Computer Won

    //Show Result
    document.getElementById('result').innerHTML = (Result===0)?'Draw':(Result===1)?'Won':'Lost';


    //Update Stats




    //Change Button from 'Go' to Start Next round
    document.getElementById('go_button').innerHTML = 'Next Round';
    NewGame = true;
    
}
function Caluculate_Result(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 0; // Draw
    } else if ((userChoice === 0 && computerChoice === 2) ||
               (userChoice === 1 && computerChoice === 0) ||
               (userChoice === 2 && computerChoice === 1)) {
        return 1; // User wins
    } else {
        return -1; // Computer wins
    }
}
