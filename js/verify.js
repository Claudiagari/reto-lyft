// Cargando documento
$(document).ready(function() {
  // Obteniendo el codigo para compararlo
  $('.code').on('input', function() {
    var code = localStorage.getItem('codeNum');
    console.log(code);
    if ($(this).val() === code) {
      $('.submit').removeAttr('disabled');
    } else {
      $('.submit').attr('disabled', 'disabled');
    }
  });
  // funcion para generar numeros aleatorios de 3 digitos
  function generar(longitud) {
    var caracteres = '0123456789';
    var contraseña = '';
    for (i = 0; i < longitud; i++) {
      contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    };
    return contraseña;
  }
  var code = generar((3));
  console.log(code);
  $('.resend').on('click', function() {
    alert('Your new code: LAB - ' + code) ;
    localStorage.codeNum = code;
  });
});