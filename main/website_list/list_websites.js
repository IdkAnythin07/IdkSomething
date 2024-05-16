// function to add a new website to the list
function addWebsite(name, info, url) {
  // Create a new div element with the class "card"
  var card = document.createElement("div");
  card.className = "card";

  // Set the inner HTML for the card
  card.innerHTML = `
      <div class="container">
        <h2><b>${name}</b></h2>
        <h4>${info}</h4>
        <button class="button" onclick="window.open('${url}', '_blank')">
          Visit Site
        </button>
      </div>
    `;

  // Append the card to the websiteList container
  document.getElementById("websiteList").appendChild(card);
}
