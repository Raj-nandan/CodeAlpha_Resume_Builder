function addNewfield2(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",4);
    newNode.setAttribute("placeholder","Add your projects");


    let project=document.getElementById("project");
    let projectAddButton=document.getElementById("projectAddButton");

    project.insertBefore(newNode, projectAddButton);

}

function addNewfield3(){
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('skillsfield');
    newNode.setAttribute("rows",2);
    newNode.style.marginTop = "4px";
    newNode.setAttribute("placeholder","Add your skills");

    let skills=document.getElementById("skills");
    let skillsAddButton= document.getElementById("skillsAddButton");

    skills.insertBefore(newNode, skillsAddButton);
}
function addNewfield4(){
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('achievementfield');
    newNode.setAttribute("rows",2);
    newNode.style.marginTop = "4px";
    newNode.setAttribute("placeholder","Add your achievements");

    let achievement=document.getElementById("achievement");
    let achievementAddButton= document.getElementById("achievementAddButton");

    achievement.insertBefore(newNode, achievementAddButton);
}
function addNewfield5(){
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('Intrestfield');
    newNode.setAttribute("rows",2);
    newNode.style.marginTop = "4px";
    newNode.setAttribute("placeholder","Add your intrest");

    let Intrest=document.getElementById("Intrest");
    let IntrestAddButton= document.getElementById("IntrestAddButton");

    Intrest.insertBefore(newNode, IntrestAddButton);
}
// --------------------------- 
function generateCv(){
    
    document.getElementById("name").innerHTML=document.getElementById("namefield").value;

   document.getElementById("email").innerHTML=" "+document.getElementById("mailfield").value;
   document.getElementById("linkedin").innerHTML=" "+document.getElementById("linkedinfield").value;
   document.getElementById("github").innerHTML=" "+document.getElementById("githubfield").value;
   document.getElementById("phone").innerHTML=" "+document.getElementById("phonefield").value;
   
   document.getElementById("colname").innerHTML=document.getElementById("colnamefield").value;
   document.getElementById("colyear").innerHTML=document.getElementById("colyearfield").value;
   document.getElementById("coldetail").innerHTML=document.getElementById("coldetailfield").value;

   document.getElementById("intername").innerHTML=document.getElementById("internamefield").value;
   document.getElementById("interyear").innerHTML=document.getElementById("interyearfield").value;
   document.getElementById("interdetail").innerHTML=document.getElementById("interdetailfield").value;

   document.getElementById("matricname").innerHTML=document.getElementById("matricnamefield").value;
   document.getElementById("matricyear").innerHTML=document.getElementById("matricyearfield").value;
   document.getElementById("matricdetail").innerHTML=document.getElementById("matricdetailfield").value;

   
   let projectS=document.getElementsByClassName("projectfield");
let str=" ";
for(let e of projectS){
  str+=`<li> ${e.value} </li>`;
}
document.getElementById("projectsT").innerHTML=str;


let skillS=document.getElementsByClassName("skillsfield");
let str1=" ";
for(let e of skillS){
    str1+=`<li> ${e.value} </li>`;
}
document.getElementById("skillsT").innerHTML=str1;


let achievementS=document.getElementsByClassName("achievementfield");
let str2=" ";
for(let e of achievementS){
    str2+=`<li> ${e.value} </li>`;
}
document.getElementById("achievementT").innerHTML=str2;


let Intrests=document.getElementsByClassName("Intrestfield");
let str3=" ";
for(let e of Intrests){
  str3+=`<li> ${e.value} </li>`;
}
document.getElementById("intrestT").innerHTML=str3;


document.getElementById("cv-template").style.display="block";
   document.getElementById("cv-form").style.display="none";

   

}

function Downloadcv(){
    window.print();
}