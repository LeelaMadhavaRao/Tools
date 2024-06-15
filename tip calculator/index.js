function calculate(){
    var am=document.getElementById('amount').value;
    var tip=document.getElementById('tip').value;
    if(am.trim()==="" && tip.trim()===""){
        alert("Enter valid Amount and Tip percent ");
        return;
    }
    else if(am.trim()===""){
        alert("Enter valid Amount ");
        return;
    }
    else if(tip.trim()===""){
        alert("Enter valid Tip percentage ");
        return;
    }
    var tipAmount=(document.getElementById('tip_amount').innerHTML==="--")?0:Number(document.getElementById("tip_amount").innerHTML);
    var tot=(document.getElementById('total').innerHTML==="--")?0:Number(document.getElementById("total").innerHTML);
    tipAmount= ((tip/100)*am);
    tot=(Number(am) + Number(tipAmount));
    document.getElementById('tip_amount').innerHTML=tipAmount;
    document.getElementById('total').innerHTML=tot;
}

function reset(){
    window.location.reload();
 }