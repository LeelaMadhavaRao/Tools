var ToDo = [];
var Completed = [];
var CurrOpen = 'inf';

setTimeout(()=>{
    Retrive_Data();
    // document.getElementById('EnterFunc').addEventListener('keypress',(event)=>{
    //     event.preventDefault();
    //     if(event.key === 'Enter'){
    //         if(CurrOpen == 'inf'){
    //             return;
    //         }else{
    //             EditSave(CurrOpen);
    //             CurrOpen = 'inf';
    //         }
    //     }
    // })
},300)

function RenderLayout(){
    if(ToDo.length === 0){
        document.getElementById('h3.Todo').classList.add('display-none');
    }else{
        document.getElementById('h3.Todo').classList.remove('display-none');
    }
    if(Completed.length === 0){
        document.getElementById('h3.Completed').classList.add('display-none');
    }else{
        document.getElementById('h3.Completed').classList.remove('display-none');
    }
    //ToDo's
    var html = '';
    for(i=0;i<ToDo.length;i++){
        html += `<div class="option">
                <div class="checkboxcontainer">
                    <input type="checkbox" onchange='Complete(${i})'>
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
                    <input type="checkbox" checked onchange='retodo(${i})'>
                    <label class='strike'>${Completed[i]}</label>
                </div>
                <div style="margin-right: 10px;">
                    <img class="cu-p" src="./../Img/Delete.svg" width="35px" height="30px" onclick="DeleteComp(${i})">
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
    Edit(0);
    //RenderLayout();
}
function Delete(item){
    ToDo.splice(item,1);
    Save();
    RenderLayout();
}
function Edit(item){
    if(ToDo.length === 0){
        document.getElementById('h3.Todo').classList.add('display-none');
    }else{
        document.getElementById('h3.Todo').classList.remove('display-none');
    }
    if(Completed.length === 0){
        document.getElementById('h3.Completed').classList.add('display-none');
    }else{
        document.getElementById('h3.Completed').classList.remove('display-none');
    }
    var html = '';
    for(i=0;i<ToDo.length;i++){
        if(i==item){
            html += `<div class="option">
                <div class="checkboxcontainer">
                    <input type='text' value = '${ToDo[i]}' id='Leela.input.${i}'/>
                </div>
                <div style="margin-right: 10px;">
                    <button onclick='EditSave(${i})'>Done</button>
                </div></div>`;
        }else{
            html += `<div class="option">
                <div class="checkboxcontainer">
                    <input type="checkbox" onchange='Complete(${i})'>
                    <label>${ToDo[i]}</label>
                </div>
                <div style="margin-right: 10px;">
                    <img class="cu-p" src="./../Img/edit.svg" width="35px" height="30px" onclick="Edit(${i})">
                    <img class="cu-p" src="./../Img/Delete.svg" width="35px" height="30px" onclick="Delete(${i})">
                </div></div>`;
        }
    }
    document.getElementById('listtodos').innerHTML = html;
    document.getElementById('Leela.input.'+item).focus();
    document.getElementById('Leela.input.'+item).setSelectionRange(0,ToDo[item].length);
    CurrOpen = item;
}
function EditSave(item){
    ToDo[item] = document.getElementById('Leela.input.'+item).value;
    Save();
    RenderLayout();
    CurrOpen = 'inf';
}
function Complete(item){
    var name = ToDo[item];
    ToDo.splice(item,1);
    Completed.unshift(name);
    Save();
    RenderLayout();
}
function DeleteComp(item){
    Completed.splice(item,1);
    Save();
    RenderLayout();
}
function retodo(item){
    var name=Completed[item];
    alert(`${name}`);
    ToDo.unshift(`${name}`);
    DeleteComp(item);
    save();
    RenderLayout();
}