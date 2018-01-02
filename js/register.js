// Cargando documento
$(document).ready(function() {
  // Llamando las variables 
  var $firstname = $('#firstname');
  var $lastname = $('#lastname');
  var $email = $('#email');
  var $checkbox = $(':checkbox');
  var $submit = $('.submit');
  // Variables inicializadas en false para validar
  validateFirst = false;
  validateLast = false;
  validateEmail = false;
  validateCheckbox = false;
  // Obteniendo el contenido validando que sea letras maximo de 10
  $firstname.on('input', function() {
    var PATTERNNAME = /^([A-z ñáéíóú]{2,10})$/;
    if (PATTERNNAME.test($(this).val())) {
      validateFirst = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  // Obteniendo el contenido validando que sea letras maximo de 15
  $lastname.on('input', function() {
    var PATTERNLASTNAME = /^([A-z ñáéíóú]{2,15})$/;
    if (PATTERNLASTNAME.test($(this).val())) {
      validateLast = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  // Validando el email que contenga @ y .
  $email.on('input', function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (PATTERNEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      disabledButton();;
    }
  });
  // Validando que este maracado el checkbox
  $checkbox.on('click', function(event) {
    if ($checkbox.prop('checked')) {
      validateCheckbox = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  // Funcion que comprueba que los cuatro valores se encuntren en true para activar en boton
  function activeButton() {
    if (validateFirst && validateLast && validateEmail && validateCheckbox) {
      $submit.removeAttr('disabled');
    }
  }
  // Funcion que deshabilita el boton
  function disabledButton() {
    $submit.attr('disabled', 'disabled');
  }
});
