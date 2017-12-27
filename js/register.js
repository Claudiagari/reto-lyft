$(document).ready(function() {
  var $firstname = $('#firstname');
  var $lastname = $('#lastname');
  var $email = $('#email');
  var $checkbox = $(':checkbox');
  var $submit = $('.submit');
  validateFirst = false;
  validateLast = false;
  validateEmail = false;
  validateCheckbox = false;

  $firstname.on('input', function() {
    var PATTERNNAME = /^([A-z ñáéíóú]{2,10})$/;
    if (PATTERNNAME.test($(this).val())) {
      validateFirst = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  $lastname.on('input', function() {
    var PATTERNLASTNAME = /^([A-z ñáéíóú]{2,15})$/;
    if (PATTERNLASTNAME.test($(this).val())) {
      validateLast = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  $email.on('input', function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (PATTERNEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      disabledButton();;
    }
  });
  $checkbox.on('click', function(event) {
    if ($checkbox.prop('checked')) {
      validateCheckbox = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  function activeButton() {
    if (validateFirst && validateLast &&  validateEmail && validateCheckbox) {
      $submit.removeAttr('disabled');
    }
  }
  function disabledButton() {
    $submit.attr('disabled', 'disabled');
  }
});
