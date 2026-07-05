const toolsContainer = document.getElementById("tools");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");
const theme = document.getElementById("theme");

let currentCategory = "all";

function displayTools(list){

toolsContainer.innerHTML="";

list.forEach(tool=>{

toolsContainer.innerHTML+=`

<div class="card">

<img src="${tool.image}" alt="${tool.name}">

<h2>${tool.name}</h2>

<p>${tool.description}</p>

<a href="${tool.url}" target="_blank">

Visit Tool

</a>

</div>

`;

});

}

displayTools(tools);

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=tools.filter(tool=>{

const matchName=tool.name.toLowerCase().includes(value);

const matchCategory=currentCategory==="all" || tool.category===currentCategory;

return matchName && matchCategory;

});

displayTools(filtered);

});

buttons.forEach(btn=>{

btn.onclick=()=>{

currentCategory=btn.dataset.cat;

const value=search.value.toLowerCase();

const filtered=tools.filter(tool=>{

const matchName=tool.name.toLowerCase().includes(value);

const matchCategory=currentCategory==="all" || tool.category===currentCategory;

return matchName && matchCategory;

});

displayTools(filtered);

};

});

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.innerHTML="☀️";

}else{

theme.innerHTML="🌙";

}

};
