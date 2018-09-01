function getIt() {
  $("p").on("click", () => {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", () => {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $(document).on("keydown", e => {
    if (e.which);
    console.log(e);
  })
}

$(document).ready(function(){
  getIt();
});
