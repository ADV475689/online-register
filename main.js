 var names=[];

 function submitfuc(){
var n1=document.getElementById("name1").value;
var n2=document.getElementById("name2").value;
var n3=document.getElementById("name3").value;
var n4=document.getElementById("name4").value;

names.push(n1);
names.push(n2);
names.push(n3);
names.push(n4);
console.log(names);
document.getElementById("show1").innerHTML=names;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
 }

function sorting(){
    names.sort();
    document.getElementById("show2").innerHTML=names;
    console.log(names);
}