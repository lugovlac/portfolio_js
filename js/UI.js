class UI {

    constructor(){
        // Botones
        this.btnStart = document.querySelector('#btnStart');
        this.btnStand = document.querySelector('#btnStand');
        this.btnReplay = document.querySelector('#btnReplay');  
        // Puntajes
        this.j1Punt = document.querySelector('#j1Punt');
        this.j2Punt = document.querySelector('#j2Punt');
        // Infos
        this.j1info = document.querySelector('#j1info');
        this.j2info = document.querySelector('#j2info');
        // Modal
        this.modal = document.querySelector('#modalResult');
        this.modalTxt = document.querySelector('#modalTxt');
        // Dados
        this.dados = document.getElementsByClassName('dado');
        // Gifs e Imgs        
        this.imgsWinCont = document.querySelector('.imgsWinCont');
        this.imgWin = document.getElementsByClassName('imgWin');
        this.imgWin2 = document.getElementsByClassName('imgWin2');
        this.imgCrown = document.getElementsByClassName('imgCrown');
        // Media Queries
        this.mq575 = window.matchMedia('(max-width: 575px)').matches;
        this.portrait = window.matchMedia('(orientation: portrait)').matches;
        this.mq992 = window.matchMedia('(min-width: 992px)').matches;
    }

    pintarPuntaje(puntos, isPc){

        const pronombre = isPc ? "Mi" : "Tu";
        const el = isPc ? this.j2Punt : this.j1Punt;
        el.innerHTML = `${pronombre} puntaje es de <strong>${puntos}</strong>`;
    }

    pintarInfo(txt, isPc){

        const el = isPc ? this.j2info : this.j1info;
        el.style.display = "block";
        el.innerHTML = txt;
    }

    limpiarInfo(){
        this.j1info.style.display = "none";
        this.j2info.style.display = "none";
    }

    empezarTurno(){     
        this.btnStart.innerHTML = "Acumular puntos y seguir";
        this.btnStand.disabled = false;
    }

    terminarTurnoJug1(){
        this.btnStart.innerHTML = "Empezar turno";
        this.btnStart.disabled = true;
        this.btnStand.disabled = true;
    }

    terminarTurnoJug2(){
        this.btnStart.disabled = false;
    }

    mostrarModal(txt){

        this.modalTxt.innerHTML = txt;
        let myModal = new bootstrap.Modal(this.modal);
        myModal.show();      

        return new Promise((resolve, reject) => {
            this.modal.addEventListener('hidden.bs.modal', e => {            
                resolve();
            });         
        });
    }

    restartUI(){
        confetti.stop();
        this.limpiarInfo();
        this.btnStart.disabled = false;
        this.btnReplay.style.display = "none";
        this.j1Punt.innerHTML = "";
        this.j2Punt.innerHTML = "";

        // 1. Reseteo dados
        for (let el of this.dados) {

            if(el.id == "dado1" || el.id == "dado2"){
                el.src = "img/blanc0.jpg";

            } else if(el.id == "dado3" || el.id == "dado4"){
                el.src = "img/neg0.jpg";
            }           
        }   

        // 2. Reseteo Imagen 1 (GIF)
        for(let el of this.imgWin){
            el.style.display = "none";            
        } 

        //3. Reseteo Imagen 2 (GIF)
        for(let el of this.imgWin2){
            el.style.display = "none";
        }  

        //4. Reseteo Imagen Crown
        for(let el of this.imgCrown){
            el.style.display = "none";
        } 

        this.imgsWinCont.style.display = 'none';
    }

    setWinner(jug){
        // 1. Confetti (solo si es Jugador 1)
        if(jug == "J1"){
            confetti.start();
        }

        //2. Imagen 1 (GIF)
        for(let el of this.imgWin){
            if(el.id == "imgWin"+jug){
                el.src = "img/winner.gif";
                el.style.display = "inline";
            }
        }

        //3. Imagen 2 (GIF) (solo si el viewport es más de 992)
        if(this.mq992){
            for(let el of this.imgWin2){
                if(el.id == "imgWin2"+jug){
                    el.src = "img/dealWith.gif";
                    el.style.display = "block";
                }
            }
        }        

        //4. Imagen Crown
        for(let el of this.imgCrown){
            if(el.id == "imgCrown"+jug){
                el.style.display = "block";
            }
        }
    }

    setLoser(jug){
        //1. Imagen 1 (GIF)
        for(let el of this.imgWin){
            if(el.id == "imgWin"+jug){
                el.src = "img/loser.gif";
                el.style.display = "inline";
            }
        }

        //2. Imagen 2 (GIF) (solo si el viewport es más de 992)
        if(this.mq992){
            for(let el of this.imgWin2){
                if(el.id == "imgWin2"+jug){
                    el.src = "img/defeat.gif";
                    el.style.display = "block";
                }
            }  
        }      
    }

    ganoJ1(){
        this.imgsWinCont.style.display = 'flex';
        this.setWinner('J1');
        this.setLoser('J2');
    }

    ganoJ2(){
        this.imgsWinCont.style.display = 'flex';
        this.setWinner('J2');
        this.setLoser('J1');
    }

    empate(){
        this.imgsWinCont.style.display = 'flex';
        this.setWinner('J1');
        this.setWinner('J2');
    }

    showReplayBtn(){        
        this.btnReplay.style.display = "block";
    }

    showOverlay(){        
        if(this.mq575 && this.portrait){
            overlay.style.opacity = 1;
        }        
    }

    hideOverlay(){
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = "none";          
        }, 1000);
    }
}

export default UI;