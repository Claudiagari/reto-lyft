$(document).ready(function() {
  // Cambiar la bandera en el dropdown
  $('.dropdown-select').on('click', '.dropdown-menu li a', function() {
    var target = $(this).html();
    $(this).parents('.dropdown-menu').find('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret"></span>');
  });
  // Para llamar los codigos según las banderas
  $('.peru').on('click', function() {
    $('.codigo').text('+51');
  });
  $('.mexico').on('click', function() {
    $('.codigo').text('+52');
  });
  $('.usa').on('click', function() {
    $('.codigo').text('+1');
  });
  // Validar que sea un numero de 9 digitos empezando por 9 (pensado para celulares en Perú)
  $('.phone').on('input', function() {
    var PHONEVALID = /^9[0-9]{8}$/;
    if (PHONEVALID.test($(this).val()) === true) {
      $('.submit').removeAttr('disabled');
    } else {
      $('.submit').attr('disabled', 'disabled');
    }
  });
  // funcion para generar numeros aleatorios de 3 digitos
  function generar(longitud) {
    var caracteres = '0123456789';
    var contraseña = '';
    for (i = 0; i < longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return contraseña;
  }
  var code = generar((3));
  console.log(code);
  // Evento submit para pasar a la siguiente vista
  $('#form').on('submit', function() {
    alert('Your code: LAB - ' + code) ;
    localStorage.codeNum = code;
  });
});

