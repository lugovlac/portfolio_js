class Fernet {

    constructor(tFernet, tCoca, obj){
        this.totalFernet = tFernet;
        this.totalCoca = tCoca;
        this.cubitos = obj.cubitos;
        this.porcFernet = obj.rangeFernet;
        this.porcCoca = obj.rangeCoca;
        this.cubXTrago = obj.rangeCubitos;
    }

    makeFernet(){
        // -~-~-~-~ Todos los números llegados acá llegaron en unidad MILILITROS (ml) -~-~-~-~

        // 1. Se calcula el volumen total de los cubitos x trago.
        // los cubitos tienen aprox 3cm de altura, 3 de ancho y 3 de profundidad
        // por lo tanto se calcula que cada uno tendría un volumen de 27cm3/ml
        const volCubitos = this.cubXTrago * 27;

        // 2. Se calcula cuanto ocupará la preparación que no será hielo.
        // *importante: se calculará en 250ml la medida de cada vaso.
        const preparacion = 250 - volCubitos;

        // 3. Se calculan las cantidades de fernet/coca por cada trago de acuerdo a los porcentajes
        const ferXTrago = (preparacion * this.porcFernet) / 100;
        const cocaXTrago = (preparacion * this.porcCoca) / 100;

        // 4. Se calcula cuántos tragos se podrán preparar de acuerdo al hielo, fernet y coca disponibles.
        const tragosFernet = Math.floor(this.totalFernet / ferXTrago);
        const tragosCoca = Math.floor(this.totalCoca / cocaXTrago);
        const tragosHielo = Math.floor(this.cubitos / this.cubXTrago);

        // 5. De esos 3 valores calculados me tengo que quedar con el más chico
        // si tengo ingredientes de menos no puedo preparar lo que planteé
        const tragosFinal = Math.min(tragosFernet, tragosCoca, tragosHielo);

        // 6. Levanto un modal en el dom con el resultado
        const modalTxt = document.querySelector('#modalTxt');
        modalTxt.innerHTML = `Con estas cantidades vas a poder hacer ${tragosFinal} vasos de fernet de 250ml cada uno.`;
        
        let myModal = new bootstrap.Modal(document.getElementById('modalResult'));
        myModal.show();
    }
}

export default Fernet;