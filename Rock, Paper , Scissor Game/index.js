var SelectedChoice = null;
var score=document.getElementById("score");
var gobutton=document.getElementById("go_button");
var third=document.getElementById("img");
var but1round=document.getElementById("but1round").textContent="--";
var but2round=document.getElementById("but2round").textContent="--";
function choice(val){
    SelectedChoice=val;
}
function ResetStats(){

}
function ComputerChoice(){
    return Math.floor(Math.random() * 3);
}
function SelectChoice(item){

}
function Go(){
    if(SelectedChoice == null){
        alert("Please Select a Choice!");
        return;
    }
    Computer_Choice = ComputerChoice();
    if((Computer_Choice ==0 && SelectedChoice==0) ||(Computer_Choice ==2 && SelectedChoice==2) || (Computer_Choice ==1 && SelectedChoice==1))
        {
            var result=document.getElementById("result");
            result.textContent="Draw";
            gobutton.textContent="Next round";
            if(Computer_Choice ==0)
                {
                    img.src="./../Img/rock.jpg";
                }
            else if(Computer_Choice ==1)
                {
                    img.src="./../Img/paper.jpg";
                }
            else if(Computer_Choice ==2)
                {
                    img.src="./../Img/scissor.jpg";
                }
                but2round.textContent=but1round.textContent;
                but1round.textContent="--";
                SelectedChoice="null";
        }
    
    

    //Display Result


    //Update Stats


    //Change Button from 'Go' to Start Next round
}
function NewGame(){
    SelectChoice = null;
    //Clear Computer Choice
    //Clear User Choice
    //Change Button from 'New Game' to 'Go'
}