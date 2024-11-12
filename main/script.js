function include(file) {
  let script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

include("/main/menu.js");
// include("~/code/idkanythin07.github.io/main/menu.js"); // FOR DEBUG
include("/main/callouts_main.js");
// include("~/code/idkanythin07.github.io/main/callouts_main.js"); // FOR DEBUG
