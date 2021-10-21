//business logic
let bart = 0;
let lisa = 0;
let nelson = 0;

function addPoint(character) {
  if (character === "bart") {
    bart += 1;
  } else if (character === "lisa") {
    lisa += 1;
  } else if (character === "nelson") {
    nelson += 1;
  }
}

function winner(bart, lisa, nelson) {
  if (bart > lisa && bart > nelson) {
    return "Bart";
  } else if (lisa > nelson && lisa > bart) {
    return "Lisa";
  } else if (nelson > bart && nelson > lisa) {
    return "Nelson"
  } else if (bart === nelson || bart === lisa || nelson === lisa) {
    return "Ralph";
  } else {
    return "Broken";
  }
}

function percentScore(character) {
  return character / 4;
}

// ui logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    addPoint($("input:radio[name=hobby]:checked").val());
    addPoint($("input:radio[name=school]:checked").val());
    addPoint($("input:radio[name=food]:checked").val());
    addPoint($("input:radio[name=phrase]:checked").val());

    $("#result").text(winner(bart, lisa, nelson));
    bart = 0;
    lisa = 0;
    nelson = 0;
  });
});