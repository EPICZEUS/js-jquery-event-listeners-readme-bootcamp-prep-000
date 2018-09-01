function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load", () => {
    
  })
}

$(document).ready(function(){
  getIt();
});
