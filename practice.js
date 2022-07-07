// used css to add flex-box, functionality in foundation??? did not understand grid - that is up next; 

postEl = document.querySelector("#container");

var divRow = document.createElement("div");
divRow.setAttribute("class", "row small-up-2 medium-up3");
divRow.setAttribute('id', "flex-container");
postEl.appendChild(divRow);

var i = 6;
while (i>0) {
    var recipeName = "Recipe Name"
    var img = "https://via.placeholder.com/140x100"

    var divColumn = document.createElement("div");
    divColumn.setAttribute("class", "column");
    divRow.appendChild(divColumn); 

    var card = document.createElement("div");
    card.classList.add("card");
 

    var cardDivider = document.createElement("div");
    cardDivider.setAttribute("class", "card-divider");
    cardDivider.textContent = recipeName;
    card.appendChild(cardDivider);


    var imgContent = document.createElement("img");
    imgContent.setAttribute("src", img);
    card.appendChild(imgContent);

    var cardSection = document.createElement("div");
    cardSection.setAttribute("class", "card-section");
    var servings = document.createElement("h4");
    servings.textContent = "This is a placholder";
    cardSection.appendChild(servings);
    card.appendChild(cardSection);

    divColumn.appendChild(card);
    i--;
}