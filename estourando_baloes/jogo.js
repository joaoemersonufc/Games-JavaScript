var timerId = null // Variável do cronometro para a função setTimeout

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

	contagem_tempo(tempo + 1);
}

function contagem_tempo(tempo_segundos){
	tempo_segundos = tempo_segundos - 1;

	if(tempo_segundos == -1){
		clearTimeout(timerId); //para a execução da função timeOut
		game_over();
		return false;
	}

	document.getElementById('cronometro').innerHTML = tempo_segundos;

	timerId = setTimeout("contagem_tempo("+tempo_segundos+")", 1000);
}

function game_over(){
	remove_eventos_baloes()
	alert("Fim de jogo, você perdeu!!!");
	window.location.href = 'index.html';
}

function criar_baloes(qntd){
	for(var i = 1; i<=qntd; i++){

		var balao = document.createElement("img");
		balao.src = "imagens/balao_azul_pequeno.png";
		balao.style.margin = '10px';
		balao.id = "balao" + i;
		balao.onclick = function(){ estourar(this); }

		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){
	var id_balao = e.id;

	document.getElementById(id_balao).setAttribute("onclick","");

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1);
}

function pontuacao(acao){
	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;
	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;

	situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros){
	if(baloes_inteiros == 0){
		alert("Parabéns, você venceu o jogo!!!");
		parar_jogo();
	}
}

function parar_jogo(){
	clearTimeout(timerId);
}

function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('balao'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('balao'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}