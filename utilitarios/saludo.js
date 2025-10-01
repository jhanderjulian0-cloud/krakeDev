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
}