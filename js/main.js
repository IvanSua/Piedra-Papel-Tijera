var Eleccion = ["papel", "roca", "tijera"];
var i = Math.floor(Math.random() * 3);
var PcEleccion = Eleccion[i];
var UsuarioPuntos = 0;
var PcPuntos = 0;
function puntaje(){
	var puntaje = document.getElementById("puntuacion").innerHTML = UsuarioPuntos + " - " + PcPuntos;
}
setInterval(puntaje, 50);
function convert(Palabra){
	if(Palabra === "papel") return '<i class="far fa-hand-paper"></i>';
	if(Palabra === "roca") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
function juego(UsuarioEleccion){
	var box = document.getElementById("desafio");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("tu-objeto");
	userDiv.innerHTML = convert(UsuarioEleccion);
	var comDiv = document.getElementById("pc-objeto");
	comDiv.innerHTML = convert(PcEleccion);
	if(UsuarioEleccion === "papel" && PcEleccion === "roca" || UsuarioEleccion === "roca" && PcEleccion === "tijera" || UsuarioEleccion === "tijera" && PcEleccion === "papel"){
		ganador(UsuarioEleccion);
	}
	else if(UsuarioEleccion === PcEleccion){
		empate(UsuarioEleccion);
	}
	else{
		perdedor(UsuarioEleccion);
	}
	function continuarjuego(){
		i = Math.floor(Math.random() * 3);
		PcEleccion = Eleccion[i];
		box.style.display = "none";
	}
	setTimeout(continuarjuego, 1200);
}
function ganador(bn){
	UsuarioPuntos++;
    document.getElementById("quien").innerHTML = "Tu ganas";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("verde");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("verde");
    }, 1200);
}
function empate(bn){
	document.getElementById("quien").innerHTML = "Tu y la pc empatan.";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gris");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gris");
    }, 1200);
}
function perdedor(bn){
	PcPuntos++;
	document.getElementById("quien").innerHTML = "Tu pierdes.";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("rojo");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("rojo");
    }, 1200);
}