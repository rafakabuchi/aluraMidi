function tocarSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento != null && elemento.localName === 'audio') {
        elemento.currentTime = 0;
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocarSom;

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocarSom(idAudio)
    }

    tecla.onkeydown = function(e){
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}