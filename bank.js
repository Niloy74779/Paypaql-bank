



const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
 const depositAmmount=document.getElementById("depositAmmount").value;

 const depositNumber=parseFloat(depositAmmount);

 const currentDeposit=document.getElementById("currentDeposit").innertext;
 const currentDepositNumber=parseFloat(currentDeposit);
 const total = depositNumber+currentDepositNumber;
 document.getElementById("currentDeposit").innertext= total;

})