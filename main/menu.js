// Menu button
function toggleMenu() {
  var menuOverlay = document.getElementById("menuOverlay");
  if (menuOverlay.classList.contains("menu-active")) {
    menuOverlay.classList.remove("menu-active");
    menuOverlay.classList.add("menu-exit");
  } else {
    menuOverlay.classList.remove("menu-exit");
    menuOverlay.classList.add("menu-active");
  }
}
// function to add Items to the Menu button
function addItemToMenu(text, href) {
  // Find the menu's <ul> element
  const menu = document.querySelector(".menu ul");
  if (!menu) return; // Exit if the menu isn't found


  // Create a new <li> element
  const newItem = document.createElement("li");

  // Check if it's a button or a link
  if (href) {
    // Create an <a> element for a link
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.className = "button";
    newItem.appendChild(link);
  } else {
    // Create a <button> element for actions without a link
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "button"; // Apply the button class for styling


    // Optionally, you can add an onclick event to the button here
    // button.onclick = function() { /* Your code here */ };
    newItem.appendChild(button);
  }

  // Append the new item to the menu
  menu.appendChild(newItem);
}
