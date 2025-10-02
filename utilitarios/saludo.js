recuperarTexto=function(idComponente){
    let componente;
    let valoringresado;
    componente=document.getElementById(idComponente);
    valoringresado=componente.value;
    return valoringresado;

}
saludar=function(){
    let nombre =recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
     let estatura = recuperarFloat("txtEstatura");
}
recuperarInt=function(){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat= parseFloat(valorCaja);
    return valorFloat;
}