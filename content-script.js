function deleteCommentAndLogo() {
  try {
    document.getElementsByClassName("_30BbATRhFv3V83DHNDjJAO")[0].innerHTML =
      "";
  } catch (err) {}

  try {
    document.getElementsByClassName("_2l7c_Oz0UVsamALvPrlznq")[0].innerHTML =
      "";
  } catch (err) {}
}

chrome.storage.sync.get(["userData"], function (result) {
  whiteList = [];
  blackList = [];
  showSideBar = true;
  if (result.userData != undefined) {
    whiteList = result.userData.whiteList;
    blackList = result.userData.blackList;
    showSideBar = result.userDaa.showSideBar;
  }

  pathName = window.location.pathname;

  // check if not a comment section, and not a whitelisted subreddit
  if (pathName != null) {
    if (pathName.includes("comments")) {
      // check the blacklist to see
      blackList.forEach((element) => {
        if (pathName.toLowerCase().includes("/r/" + element.toLowerCase())) {
          //document.getElementsByTagName('body')[0].innerHTML = "<k>STOP PROCRASTINATING ON REDDIT</k> <p>You may only go to reddit comment pages</p> <p>Extension built by <a style=\"color:blue\" href=\"https://henryz.dev/\">Henry Zhang</a></p>";
          window.location.href =
            "https://hz757.github.io/PortfolioWebsite/RedditLiberationRedirect.html";
        }
      });
    } else {
      console.log("2");
      // check each member of the whitelist, if the website isn't there, block it
      willBlock = true;
      whiteList.forEach((element) => {
        if (pathName.toLowerCase().includes("/r/" + element.toLowerCase())) {
          willBlock = false;
        }
      });

      // I need to do testing to see if this works, because it could very well not work
      if (willBlock) {
        //document.getElementsByTagName('body')[0].innerHTML = "<k>STOP PROCRASTINATING ON REDDIT</k> <p>You may only go to reddit comment pages</p> <p>Extension built by <a style=\"color:blue\" href=\"https://henryz.dev/\">Henry Zhang</a></p>";
        window.location.href =
          "https://hz757.github.io/PortfolioWebsite/RedditLiberationRedirect.html";
      }
    }
  } else {
    //document.getElementsByTagName('body')[0].innerHTML = "<k>STOP PROCRASTINATING ON REDDIT</k> <p>You may only go to reddit comment pages</p> <p>Extension built by <a style=\"color:blue\" href=\"https://henryz.dev/\">Henry Zhang</a></p>";
    window.location.href =
      "https://hz757.github.io/PortfolioWebsite/RedditLiberationRedirect.html";
  }

  setInterval(deleteCommentAndLogo, 500);
});
