names=[];

function submit(){

var name_1=document.getElementById("name1").value;
var name_2=document.getElementById("name2").value;
var name_3=document.getElementById("name3").value;
var name_4=document.getElementById("name4").value;

names.push(name_1);
names.push(name_2);
names.push(name_3);
names.push(name_4);


console.log(names);

document.getElementById("name_holder").innerHTML=names;

document.getElementById("Submit_bt").style.display="none";

document.getElementById("Sort_bt").style.display="inline-block";

}
function sort(){
    names.sort();
    console.log(names);
    document.getElementById("name_holder").innerHTML=names;
}


