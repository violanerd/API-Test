postEl = document.querySelector("#container");

function getuserInput () {
    postEl.innerHtml =""; 
    var formEl = document.createElement("form");
    postEl.appendChild(formEl);

    var gridContainerEl = document.createElement("div");
    gridContainerEl.setAttribute("class", "grid-container");
    formEl.appendChild(gridContainerEl);

    var gridXEl = document.createElement("div");
    gridXEl.setAttribute("class", "grid-x grid-padding-x");
    gridContainerEl.appendChild(gridXEl);

    var cellEl = document.createElement("div");
    cellEl.setAttribute("class", "medium-6 cell");
    gridXEl.appendChild(cellEl);
    
    var labelEl = document.createElement("label");
    labelEl.textContent = "Find a Recipe"
    cellEl.appendChild(labelEl);

    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("id", "recipe-input");
    inputEl.setAttribute("placeholder", "chicken enchiladas");
    labelEl.appendChild(inputEl);

    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("class", "button hollow");
    buttonEl.setAttribute("id", "button");
    buttonEl.textContent = "Find it for Me!";
    cellEl.appendChild(buttonEl);

    buttonEl.addEventListener('click', function (event) {
        event.preventDefault();
        var form = document.querySelector("#recipe-input");
        var input = form.value.trim().replace(" ", "%20");;
        console.log(input);
    });    
}

// could do this by listening to the whole document and making sure buttons have the correct id's
// if var buttonId === "whatever", run this code
//document.addEventListener('click', function (event) {
//         event.preventDefault();
        
//         getRecipe();
  
// });



getuserInput();


