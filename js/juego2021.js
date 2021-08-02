import Jugador from './Jugador.js';
import UI from './UI.js';

// Setup
const ui = new UI();
let jugador1, jugador2;
initPlayers();
ui.showOverlay();

// Elementos del DOM / Eventos
const btnStart = document.querySelector('#btnStart');
const btnStand = document.querySelector('#btnStand');
const btnReplay = document.querySelector('#btnReplay');
const dialCont = document.querySelector('.dialCont');
const overlay = document.querySelector('#overlay');
btnStart.addEventListener('click', tiraJugador1);
btnStand.addEventListener('click', plantaJugador1);
btnReplay.addEventListener('click', replay);
overlay.addEventListener('click', ui.hideOverlay);

// Create knob element
const knob = pureknob.createKnob(35, 35);
knobSetup();

function knobSetup() {
    // Set properties.
    knob.setProperty('colorFG', '#87ceeb');
    knob.setProperty('colorBG', '#eeeeee');
    knob.setProperty('trackWidth', 0.4);
    knob.setProperty('valMin', 0);
    knob.setProperty('valMax', 100);
    knob.setProperty('readonly', true);
    knob.setProperty('textScale', 0);

    // Set initial value.
    knob.setValue(0);

    // Create element node.
    const node = knob.node();

    // Add it to the DOM
    dialCont.appendChild(node);
}

function initPlayers() {
    jugador1 = new Jugador(false);
    jugador2 = new Jugador(true);
}

async function tiraJugador1() {

    let jugada = await jugador1.tirarDados();

    //si devolvió false tengo que darle el turno a la computadora
    if(!jugada){ 
        jugador2.puntajeAdversario = jugador1.puntaje;       
        turnoJugador2();
    }
}

async function plantaJugador1() {

    await jugador1.plantarse();
    jugador2.puntajeAdversario = jugador1.puntaje;
    turnoJugador2();
}

async function turnoJugador2() {

    dialCont.style.display = "block";
    let juega = true;

    while(juega){

        let tirar = await tiraJugador2();        
        juega = tirar;
    }
    if(!juega){

        dialCont.style.display = "none";
        jugador1.puntajeAdversario = jugador2.puntaje;
        const resp = await jugador2.checkIfWin();

        if(resp.status == true){
            if(resp.jug1Gano){
                jugador1.gano = true;
            }
            if(resp.jug2Gano){
                jugador2.gano = true;
            }            
        }
    }
}

function tiraJugador2() {

    runKnob();

    return new Promise((resolve, reject) => {

        setTimeout(async() => {
            let jugada = await jugador2.tirarDados();        
            resolve(jugada);            
        }, 1500);
    });
}

function runKnob() { 

    knob.setValue(0);
    let n = 1;

    let int = setInterval(() =>{
        knob.setValue(n);
        n++;
        if(n > 100){
            clearInterval(int);            
        }
    }, 15); 
}

function replay() {
    ui.restartUI();
    initPlayers();
}
