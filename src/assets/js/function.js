function ShowMensajeGeneral(mensaje){
    document.querySelector("#txtMensaje").innerHTML = mensaje;
    var elem = document.querySelector('#MensajeGeneral');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}