this.xFlag = true;
function toggle(id){
console.log(id);
let elem = document.getElementById(id).value;
if(elem !== ""){
return;
}
else{
if(this.xFlag){
document.getElementById(id).value = "X";
document.getElementById(id).readOnly = true;
}
if(!this.xFlag){
document.getElementById(id).value = "O";
document.getElementById(id).readOnly = true;
}
this.xFlag = !this.xFlag ;
return;
}

}