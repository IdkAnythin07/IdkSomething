// function to add a new website to the list
function addWebsite(name, info, url1, url2) {
  // Create a new div element with the class "card"
  var card = document.createElement("div");
  card.className = "card";

  // Set the inner HTML for the card
  card.innerHTML = `
      <div class="container">
        <h2><b>${name}</b></h2>
        <h4>${info}</h4>
        <button class="button" onclick="window.open('${url1}', '_blank')">
          Visit Site
        </button>
        <button class="button" onclick="window.open('${url2}', '_blank')">
          See tutorial
        </button>
      </div>
    `;

  // Append the card to the websiteList container
  document.getElementById("websiteList").appendChild(card);
}
