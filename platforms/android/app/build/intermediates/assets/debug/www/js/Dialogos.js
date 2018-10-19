
/*$('#formularioLogin').submit(function(){
    var telefono = $('#telefonoLogin').val();
    var pass = $('#passLogin').val();
    
    if(telefono && pass){
         navigator.notification.alert('Intentando acceder', alertDismissed, 'Datos completos', 'OK');
    }else{
        alert('Llene todos los campos');
    }
    return false;
});*/
/*function formulario(){
var tel=document.getElementById("telefonoLogin").value;

    alert(document.getElementById("telefonoLogin").value);
    alert(tel);
}*/


$(document).ready(function(e) {
$("#traer").click(function(){
$("#datos").load(
        "/uf/www/combo.html");

});
});
    
function alertDismissed(){
    $.mobile.loading('show', {
        text : 'Iniciando sesión',
        textVisible : true,
        theme : 'b',
        html : ''
    });
    
    setTimeout(ocultaDialogo, 3000);
}

function ocultaDialogo(){
    $.mobile.loading('hide');
}
