function iniciarJogo(){

	var url = window.location.search;

	var nivel = url.replace("?", "");

	var tempo = 0;

	//nível 1 - 120s
	if(nivel == 1){
		tempo = 120;
	}
	//nível 2 - 60s
	if(nivel == 2){
		tempo = 60;
	}
	//nível 3 - 30s
	if(nivel == 3){
		tempo = 30;
	}

	//inserindo o tempo na figura
	document.getElementById('cronometro').innerHTML = tempo;

	//qntd de balões
	var qntd = 10;

	criar_baloes(qntd);

	//Colocar no HTML qntd de baloes inteiros e estourados
	document.getElementById('baloes_inteiros').innerHTML = qntd;
	document.getElementById('baloes_estourados').innerHTML = 0;
}

function criar_baloes(qntd){
	for(var i = 1; i<=qntd; i++){

		var balao = document.createElement("img");
		balao.src = "imagens/balao_azul_pequeno.png";
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);
	}
}