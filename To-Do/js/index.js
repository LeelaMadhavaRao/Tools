var ToDo = [];
var Completed = [];

setTimeout(()=>{
    Retrive_Data();
},300)

function RenderLayout(){
    if(ToDo.length === 0 && Completed.length === 0){
        document.getElementById('h3.Completed').classList.add('display-none');
        document.getElementById('h3.Todo').classList.add('display-none');
    }else{
        document.getElementById('h3.Completed').classList.remove('display-none');
        document.getElementById('h3.Todo').classList.remove('display-none');
    }
    //ToDo's
    var html = '';
    for(i=0;i<ToDo.length;i++){
        html += `<div class="option">
                <div class="checkboxcontainer">
                    <input type="checkbox">
                    <label>${ToDo[i]}</label>
                </div>
                <div style="margin-right: 10px;">
                    <img class="cu-p" src="./../Img/edit.svg" width="35px" height="30px" onclick="Edit(${i})">
                    <img class="cu-p" src="./../Img/Delete.svg" width="35px" height="30px" onclick="Delete(${i})">
                </div></div>`;
    }
    document.getElementById('listtodos').innerHTML = html;
    //Completed
    html = '';
    for(i=0;i<Completed.length;i++){
        html += `<div class="option">
                <div class="checkboxcontainer">
                    <input type="checkbox" checked>
                    <label class='strike'>${ToDo[i]}</label>
                </div></div>`;
    }
    document.getElementById('listcompleted').innerHTML = html;
}
function Save(){
    localStorage.setItem('ToDo',JSON.stringify(ToDo));
    localStorage.setItem('Completed',JSON.stringify(Completed));
}
function Retrive_Data(){
    ToDo = JSON.parse(localStorage.getItem('ToDo')) || [];
    Completed = JSON.parse(localStorage.getItem('Completed')) || [];
    RenderLayout();
}
function New(){
    ToDo.unshift("New ToDo");
    Save();
    RenderLayout();
}
function Delete(item){
    ToDo.pop(item);
    Save();
    RenderLayout();
}
function Edit(item){
    alert("Leela Code me First")
    
}