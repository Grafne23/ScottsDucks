document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('fixPage');
  checkPageButton.addEventListener('click', function() {

    console.log("Not so fast!");
    chrome.tabs.getSelected(null, function(tab) {
    });
  }, false);
}, false);

 