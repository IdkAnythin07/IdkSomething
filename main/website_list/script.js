function include(file) {
  let script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

include("/main/menu.js");
include("/main/website_list/list_websites.js");
include("/main/callouts_main.js");
include("/main/website_list/callouts.js");

// FOR DEBUG
// include("~/code/idkanythin07.github.io/main/menu.js");
// include("~/code/idkanythin07.github.io/main/website_list/list_websites.js");
// include("~/code/idkanythin07.github.io/main/callouts_main.js");
// include("~/code/idkanythin07.github.io/main/website_list/callouts.js");
