<div id="overlay">
    <div class="olContent">
        <img src="img/rotatedevice.png" alt="rotateDevice" class="rotateDevice">
        <h4 class="mt-4 mb-4">Para poder jugar de forma óptima, podés girar tu celular a modo landscape</h4>
        <h6>Pulsá la pantalla para cerrar</h6>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center mb-3">Chanchito!</h2>
            <p class="mb-3 pHeading">Listx para jugar?? En cada turno, cada jugador tira dos dados. Los números que arrojan estos se suman y se acumulan en su puntaje. Pero cuidado! Si alguno de estos números es el 1, el participante perderá el turno y los puntos acumulados. Cada jugador puede elegir en qué momento del turno "plantarse" para guardar los puntos acumulados y asegurarlos, evitando así la pérdida del turno y sus puntos (si sale el número 1). El objetivo del juego es llegar a 100 puntos.</p>
        </div>
    </div>
    <div class="row justify-content-center position-relative">
        <button class="btn btn-success btnReplay" id="btnReplay">Volver a Jugar!</button>
        <div class="col imgsWinCont">
            <img src="" alt="Win/Lose2_1" class="imgWin2" id="imgWin2J1">
            <img src="" alt="Win/Lose2_2" class="imgWin2" id="imgWin2J2">
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
            <div class="row justify-content-between">
                <div class="col-6 position-relative">
                    <img src="img/crown.png" alt="corona1" class="imgCrown" id="imgCrownJ1">
                    <h3 class="mb-4">Jugador 1 (vos)</h3>
                    <span>
                        <img src="img/blanc0.jpg" width="100" height="100" alt="Tu primer dado." id="dado1" class="dado me-4 mb2Mob">
                        <img src="img/blanc0.jpg" width="100" height="100" alt="Tu segundo dado." id="dado2" class="dado mb2Mob">
                        <img src="" alt="Win/LoseJ1" class="imgWin ms-2" id="imgWinJ1">
                    </span>
                    <div class="interactCont">
                        <button class="btn btn-primary me-3" id="btnStart">Empezar Turno</button>
                        <button class="btn btn-warning" id="btnStand" disabled>Plantarse</button>
                    </div>

                    <p class="text-info mb-2" id="j1info"></p>
                    <p id="j1Punt"></p>
                </div>
                <div class="col-6 position-relative text-end">
                    <h3 class="mb-4">Jugador 2 (PC)</h3>
                    <img src="img/crown.png" alt="corona2" class="imgCrown" id="imgCrownJ2">
                    <span>
                        <img src="" alt="Win/LoseJ2" class="imgWin me-2" id="imgWinJ2">
                        <img src="img/neg0.jpg" width="100" height="100" alt="El primer dado de la computadora." id="dado3" class="dado mb2Mob">
                        <img src="img/neg0.jpg" width="100" height="100" alt="El segundo dado de la computadora." id="dado4" class="dado ms-4 mb2Mob">
                    </span>
                    <div class="interactCont justify-content-end">
                        <div class="dialCont text-center">
                            <input type="text" value="0" class="dial" id="dial">
                        </div>                      
                    </div>
                    
                    <p class="text-info mb-2" id="j2info"></p>
                    <p id="j2Punt"></p>
                </div>
            </div>
        </div>      
    </div>
</div>

<div class="modal fade" id="modalResult" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p id="modalTxt"></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>