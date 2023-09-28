
function dispaly(value){
  document.getElementById('textarea').value+=value;
}
function calculate(){
   let val= document.getElementById('textarea').value
   let ans=eval(val)
    document.getElementById('textarea').value=ans;
   
}
function clr(){
    document.getElementById('textarea').value=''
}