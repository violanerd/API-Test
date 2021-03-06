// code to get random recipe by title 


postEl = document.querySelector("#container");

var apiKey = "";

function getAPIdata (recipeInput) { 

    // this url gives a random recipe by title
    var url = "https://api.edamam.com/api/recipes/v2?type=public&q=" + recipeInput + "&app_id=f060c488&app_key=8d00a9731a468460c3a7966ff703a4f7";
 
    fetch(url)
        .then(function(response) {
            // Convert to JSON object
            return response.json();
        })
        .then(function(data) {
           console.log(data);
           
           displayData(data);
        })
}

function displayData(data) {
    postEl.innerHtml = "";
    // create the html to hold the content
    var divRow = document.createElement("div");
    divRow.setAttribute("class", "row small-up-2 medium-up3");
    // used css to add flex-box, functionality in foundation??? did not understand grid - that is up next; 
    divRow.setAttribute('id', "flex-container");
    postEl.appendChild(divRow);
    
    for (var i=0; i < 4; i++){
        var recipeName = data.hits[i].recipe.label;
        var recipeUrl = data.hits[i].recipe.shareAs; // can do shareAs OR url
        var img = data.hits[i].recipe.images.THUMBNAIL["url"];

        var divColumn = document.createElement("div");
        divColumn.setAttribute("class", "column");
        divRow.appendChild(divColumn); 
        
        var card = document.createElement("div");
        card.classList.add("card");

        var cardDivider = document.createElement("div");
        cardDivider.setAttribute("class", "card-divider");
        cardDivider.textContent = recipeName;
        card.appendChild(cardDivider);

        var imgContainer = document.createElement("a");
        imgContainer.setAttribute("href", recipeUrl);
        imgContainer.setAttribute("target", "_blank");
        var imgContent = document.createElement("img");
        imgContent.setAttribute("src", img);
        imgContainer.appendChild(imgContent);
        card.appendChild(imgContainer);

        var cardSection = document.createElement("div");
        cardSection.setAttribute("class", "card-section");
        var servings = document.createElement("h4");
        servings.textContent = "This is a placholder";
        cardSection.appendChild(servings);
        card.appendChild(cardSection);

        divColumn.appendChild(card);
    }
}

function getuserInput () {
    postEl.innerHtml =""; 
    
}


var input = prompt("what recipe would you like to search for?");
recipeInput = input.trim().replace(" ", "%20");

getAPIdata(recipeInput);

