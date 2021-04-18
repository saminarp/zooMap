//Student Name: Samina Rahman Purba
//Student NO  : 101855203
//================================================
function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  //Custom latitude
  var lat = document.getElementById("latitude").value;

  //Custom longitude
  var log = document.getElementById("longitude").value;

  if (isNaN(lat) || lat < -90 || lat > 90 ) {
    var err = document.querySelector(".latitudeError"); //custom Err
    err.innerHTML = "must be a valid Latitude (-90 to 90)";

    return false;
  } else if (!isNaN(lat) && lat >= -90 && lat <= 90 ) {
    var err = document.querySelector(".latitudeError");
    err.innerHTML = "";
  }

  if (isNaN(log) || log < -180 || log > 180 ) {
    var err = document.querySelector(".longitudeError"); //custom Err
    err.innerHTML = "must be a valid Longitude (-180 to 180)";

    return false;
  } else if (log >= -180 && log <= 180) {
    var err = document.querySelector(".longitudeError");
    err.innerHTML = "";
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
