let todoele = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")

document.getElementById("add").onclick = function(){
    if(todoele.ariaValueMax.length==0){
        alert("Enter a task details")
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+
    }
}