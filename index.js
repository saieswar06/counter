const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const Increasebtn=document.getElementById("Increasebtn");
const countLabel=document.getElementById("countLabel");
let count=0;

decreasebtn.onclick=function(){
   count--;
   countLabel.textContent=count;
}
Increasebtn.onclick=function(){
   count++;
   countLabel.textContent=count;
}
resetbtn.onclick=function(){
   count=0;
   countLabel.textContent=count;
}