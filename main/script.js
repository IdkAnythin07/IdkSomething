function include(file) {
  let script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

include("/main/menu.js");
//include("/prog/html/test/main/website_list/list_websites.js");
include("/main/callouts_main.js");
