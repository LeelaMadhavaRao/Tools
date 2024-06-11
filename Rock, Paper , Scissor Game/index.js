var SelectedChoice = null;
function ResetStats(){

}
function ComputerChoice(){
    return Math.floor(Math.random() * 4);
}
function SelectChoice(item){

}
function Go(){
    if(SelectChoice == null){
        alert("Please Select a Choice!");
        return;
    }
    Computer_Choice = ComputerChoice();
    //Render Computer Choice Animation


    //Display Result


    //Update Stats


    //Change Button from 'Go' to Start New Game
}
function NewGame(){
    SelectChoice = null;
    //Clear Computer Choice
    //Clear User Choice
    //Change Button from 'New Game' to 'Go'
}