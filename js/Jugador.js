import UI from './UI.js';

class Jugador {

    constructor(isPc){
        this.isPc = isPc;
        this.ui = new UI();
        this.puntaje = 0;
        this.puntajeTurno = 0;
        this.puntajeAdversario = 0;
        this.turno = false;
        this.supero100 = false;
        this.gano = false;
        this.dado1id = isPc ? "dado3" : "dado1";
        this.dado2id = isPc ? "dado4" : "dado2";
        this.dadoPrefix = isPc ? "neg" : "blanc";
        this.msg = this.mensajes();
    }

    mensajes(){
        //objeto mensajes: a) compartidos por ambos jugadores
        let msg = {
            dobleUno: "Si saca doble 1 suma 25 puntos y salva el turno!",
            doble: "Si saca doble el puntaje sumado también dobla!",
            gana1: ((j1Punt, j2Punt) => `Ganaste!! Tu puntaje final es de ${j1Punt} puntos, contra mis insuficientes ${j2Punt} puntos.`),
            gana2: ((j1Punt, j2Punt) => `Gané!! Mi puntaje final es de ${j2Punt} puntos, contra tus insuficientes ${j1Punt} puntos. Más suerte la próxima vez!`),
            empate: ((j1Punt) => `Increíble, pero hemos empatado. Ambos tenemos ${j1Punt} puntos.`)
        };  
        //obj mensajes b) solo de la PC
        if(this.isPc){
            msg.sacasteUno = "Me salió un 1 y perdí mi turno ¬¬, te toca a vos.";
            msg.sacasteUnoIfWin = "Me salió un 1 y perdí mi turno....";
            msg.mePlanto = "Decidí plantarme. Es tu turno!";
            msg.mePlantoIfWin = "Decidí plantarme. .....";
            msg.llego100 = ((puntaje) => `Llegué a los 100 puntos! Mi puntaje actual es de ${puntaje} puntos. Decidiré si seguir o plantarme...`);

        } //obj mensajes c) solo del jugador 1
        else {
            msg.sacasteUno = "Sacaste un 1 y perdiste el turno! Le toca al otro jugador.";
            msg.llego100 = ((puntaje) => `Llegaste a los 100 puntos! Tu puntaje actual es de ${puntaje} puntos. Podés decidir plantarte con esto o continuar y tener puntaje más alto...`);         
        }
        return msg;
    }

    sacarDado(dadoId){
        const dadoVal = Math.floor((Math.random() * 6) + 1);
        const dadoDom = document.getElementById(dadoId);
        dadoDom.src = `img/${this.dadoPrefix}${dadoVal}.jpg`;

        return dadoVal;
    }

    async perderTurno(){

        const txt = this.checkTxtIfWin('sacasteUno');
        await this.ui.mostrarModal(txt);
        this.ui.pintarPuntaje(this.puntaje, this.isPc);
        this.terminarTurno();       
    }   

    async plantarse(){
        this.puntaje = this.puntajeTurno;

        if(this.isPc){
            const txt = this.checkTxtIfWin('mePlanto');
            await this.ui.mostrarModal(txt);
        }        
        this.terminarTurno();       
    }

    async autoPlantarse(){
        // Genero num entero random del 1 al 10
        const random = Math.floor((Math.random() * 10) + 1);

        // Variables sobre Casos Diferenciales / Return:
        const adversario100 = this.puntajeAdversario >= 100;
        const yo100 = this.puntajeTurno >= 100;
        let mePlanto;

        // Caso Diferencial 1: El adversario llegó a 100 PERO yo también voy por arriba de los 100.
        if(adversario100 && yo100){

            if(this.puntajeAdversario >= this.puntajeTurno){

                mePlanto = false;
            } else {

                mePlanto = true;
            }
        } // Caso Diferencial 2: El jugador contrario llegó a 100, pero yo no. NO me voy a plantar
        else if(adversario100){

            mePlanto = false;

        } // Caso Diferencial 3: Yo pasé los 100 y el otro no, no tengo motivo para no plantarme ¯\_(ツ)_/¯
        else if(yo100){

            mePlanto = true;

        } // Caso Default: Subcasos a, b y c:
        else {
            const array1 = [5, 7, 8];
            const array2 = [5, 7, 8, 1, 3];
            const difAdv = this.puntajeAdversario - this.puntajeTurno;            

            // a) si tiene más de 92 puntos, 30% chance de plantarse (array1)
            if(this.puntajeTurno >= 92){
                if(array1.indexOf(random) != -1){
                    mePlanto = true;
                }
            } else {
                // b) si está a menos de 25 puntos o está arriba, 50% de chance (array2)
                if(difAdv <= 25){
                    if(array2.indexOf(random) != -1){

                        mePlanto = true;
                    }
                // c) si está más de 25 abajo, 30% chance (array1)
                } else {
                    if(array1.indexOf(random) != -1){

                        mePlanto = true;
                    }
                }
            }
        }
        // Dependiendo qué resolví me planto o no me planto:

        if(mePlanto){
            await this.plantarse();
            return true;

        } else {
            return false;
        }
    }

    terminarTurno(){
        this.ui.limpiarInfo();

        if(this.isPc){
            this.ui.terminarTurnoJug2();
        } else {
            this.ui.terminarTurnoJug1();
        }
        // Si el puntaje global supera los 100 activo el flag de supero100:
        if(this.puntaje >= 100){
            this.supero100 = true;
        } else {
            this.supero100 = false;
        }
        this.turno = false;
    }

    checkTxtIfWin(label){ 
        // si es PC cambian los textos del modal porque no va a ceder el turno, va a terminar el juego. Hay que comparar los puntajes.
        const alguienGano = this.puntaje >= 100 || this.puntajeAdversario >= 100;     
        if(this.isPc && alguienGano){            
            return this.msg[label+"IfWin"];
        } else {
            return this.msg[label];
        }
    }

    async checkIf100(){

        if(this.puntajeTurno >= 100){
            const txt = this.msg.llego100(this.puntajeTurno);
            await this.ui.mostrarModal(txt);
            this.supero100 = true;
        }
    }

    async ganador(jug1, jug2, txt){
            
        await this.ui.mostrarModal(txt);

        return {
            status: true,
            jug1Gano: jug1,
            jug2Gano: jug2
        };
    }

    async checkIfWin(){
        // 1) seteos iniciales
        let data = {};      

        // 2) chequeo si alguno de los 2 puntajes es mayor a 100
        const j1Punt = this.isPc ? this.puntajeAdversario : this.puntaje;
        const j2Punt = this.isPc ? this.puntaje : this.puntajeAdversario;

        if(j1Punt >= 100 || j2Punt >= 100){

            // 3) hago la comparativa de valores
            if(j1Punt > j2Punt){ //a) gana jug 1
                data = await this.ganador(true, false, this.msg.gana1(j1Punt, j2Punt));
                this.ui.ganoJ1();
                
            } else if(j2Punt > j1Punt){ //b) gana jug 2
                data = await this.ganador(false, true, this.msg.gana2(j1Punt, j2Punt));
                this.ui.ganoJ2();

            } else if(j1Punt == j2Punt){ //c) empatan
                data = await this.ganador(true, true, this.msg.empate(j1Punt));
                this.ui.empate();
            }

            // 4) Otros cambios DOM
            this.ui.terminarTurnoJug1();
            this.ui.showReplayBtn();

        } else {
            data.status = false;            
        }
        return data;
    }

    tirarDados(){
        return new Promise(async(resolve, reject) => {

            // El puntaje de turno tomará para arrancar el puntaje global, SOLO si recién arranca el turno
            if(!this.turno){
                this.puntajeTurno = this.puntaje;
                this.turno = true;
                // Si no es pc además cambia el botón principal y habilita el de plantarse
                if(!this.isPc){
                    this.ui.empezarTurno();
                }           
            }

            // Limpio los casilleros de info del DOM
            this.ui.limpiarInfo();

            // Generar un random de cada dado:
            const dado1 = this.sacarDado(this.dado1id);
            const dado2 = this.sacarDado(this.dado2id);
            const dosUnos = dado1 == 1 && dado2 == 1;
            const suma = dado1 + dado2;

            // si salió 1 en alguno de los dos, pero NO en los dos, pierde el turno
            if((dado1 == 1 || dado2 == 1) && !dosUnos){

                await this.perderTurno();
                resolve(false);

            } else {    
                //a) saca dos unos, suma 25 puntos en total.        
                if(dosUnos){                
                    this.puntajeTurno += 25;
                    this.ui.pintarInfo(this.msg.dobleUno, this.isPc);
                } 
                //b) los tiros doble (ej los 2 dados dan 5) valen doble
                else if(dado1 == dado2){
                    this.puntajeTurno += suma * 2;
                    this.ui.pintarInfo(this.msg.doble, this.isPc);
                } 
                //c) el resto de los casos suman los puntos de los dados normales
                else {
                    this.puntajeTurno += suma;
                }
                
                this.ui.pintarPuntaje(this.puntajeTurno, this.isPc);
                
                //chequear si el puntajeTurno pasó los 100:
                if(!this.supero100){
                    await this.checkIf100();
                }

                //Si es PC generar un mecanismo de auto-plantado:
                if(this.isPc) {
                    const autoP = await this.autoPlantarse();
                    resolve(autoP ? false : true);
    
                } else {
                    resolve(true);
                }               
            }
        });     
    }
}

export default Jugador;