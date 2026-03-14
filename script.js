function showTool(tool){

let tools=document.getElementsByClassName("tool");

for(let i=0;i<tools.length;i++){
tools[i].style.display="none";
}

document.getElementById(tool).style.display="block";

}

async function chat(){

let input=document.getElementById("chatInput").value;

let box=document.getElementById("chatbox");

box.innerHTML += "<p><b>You:</b> "+input+"</p>";

box.innerHTML += "<p><b>AI:</b> Thinking...</p>";

}

async function image(){

let prompt=document.getElementById("imagePrompt").value;

document.getElementById("imgResult").src =
"https://dummyimage.com/300x300/000/fff&text="+prompt;

}

function story(){

let idea=document.getElementById("storyPrompt").value;

document.getElementById("storyResult").innerHTML =
"AI Story about "+idea;

}

function code(){

let idea=document.getElementById("codePrompt").value;

document.getElementById("codeResult").innerText =
"// Code for "+idea;

}

function translate(){

let text=document.getElementById("translateText").value;

document.getElementById("translateResult").innerText =
"Translated: "+text;

  }
