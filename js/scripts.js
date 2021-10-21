//business logic
function addPoint(character) {
  return character += 1;
}

function winner(bart, nelson, lisa) {
  if (bart === nelson || bart === lisa || nelson === lisa) {
    return "Ralph";
  } else if (bart > lisa && bart > nelson) {
    return "Bart";
  } else if (lisa > nelson && lisa > bart) {
    return "Lisa";
  } else if (nelson > bart && nelson > lisa) {
    return "Nelson"
  } else {
    return "Broken";
  }
}

function percentScore(character) {
  return character / 4;
}

// ui logic
