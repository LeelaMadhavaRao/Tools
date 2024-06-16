function calculate(){
    var weight=document.getElementById('weight').value;
    var height=document.getElementById('height').value;
    if(weight.trim()==="" && height.trim()===""){
        alert("Enter valid Weight and Height ");
        return;
    }
    else if(weight.trim()===""){
        alert("Enter valid Weight ");
        return;
    }
    else if(height.trim()===""){
        alert("Enter valid Height ");
        return;
    }
    var bmi=(document.getElementById('bmi').innerHTML==="--")?0:Number(document.getElementById("bmi").innerHTML);
    bmi=(Number(weight)/((Number(height)/100)*(Number(height)/100)));
    document.getElementById('bmi').innerHTML=bmi;
    if(bmi<18.5){
        document.getElementById('descp').innerHTML="  UnderWeight";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById('descp').innerHTML="  Normal Weight";
    }
    else if(bmi>=25 && bmi<=29.9){
        document.getElementById('descp').innerHTML="  OverWeight";
    }
    else if(bmi>=30){
        document.getElementById('descp').innerHTML="  Obesity";
    }
}
function reset(){
    window.location.reload();
 }