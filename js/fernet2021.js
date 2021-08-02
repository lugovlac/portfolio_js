import Fernet from './Fernet.js';

const form = document.querySelector('#fernetForm');
const btn = document.querySelector('#btnSubmit');
btn.addEventListener('click', submit);


function submit(e){
    e.preventDefault();
    
    //spinner en el btn
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
     Espere...`;
    
    //borro todos los elementos invalid-feedback
    const feedb = document.querySelectorAll('.invalid-feedback');
    for (let el of feedb) {
        el.remove();
    }

    //borro todas las clases is-invalid
    const invalid = document.querySelectorAll('.is-invalid');
    for (let el of invalid) {
        el.classList.remove('is-invalid');
    }

    const fData = new FormData(form);

    fetch('validarFernet.php', {
        method: 'POST',     
        body: fData     
    })
        .then(res => {
            //error 1: si el response no da ok
            if(!res.ok){
                const txt = `Se ha producido un error: <br>
                ${res.statusText} <br>
                Por favor vuelva a intentar.`;
                launchModal(txt);
                disableBtn(btn);
            } else {
                return res.json();
            }
        })
        .catch(error => {
            //error 2: si hay problemas con el servidor
            const txt = `Se ha producido un error: <br>
            ${error} <br>
            Por favor vuelva a intentar.`;
            launchModal(txt);
            disableBtn(btn);
        })  
        .then(data => {
            let { errors, success } = data;

            if(success){
                //declarar variables de totales
                let totalFernet = 0;
                let totalCoca = 0;
                let obj = {};

                //iterar el formData
                for(let fd of fData){

                    const input = document.getElementById(fd[0]);
                    const cant = parseInt(input.getAttribute('data-cant'));

                    //inputs de fernet:
                    if(fd[0].includes('fernet')){                       
                        totalFernet += cant * fd[1];
                    }   
                    //inputs de coca:
                    else if(fd[0].includes('coca')){                        
                        totalCoca += cant * fd[1];
                    }
                    //el input de cubitos y los ranges:
                    else {
                        if(!isNaN(fd[1])){
                            obj[fd[0]] = parseFloat(fd[1]);
                        }                       
                    }       
                }
                //instancio clase fernet y hago uno
                let fernet = new Fernet(totalFernet, totalCoca, obj);
                fernet.makeFernet();

            } else {
                //itero los errores y los muestro en el dom
                errors.forEach(err => {

                    //clase is-invalid a títulos e inputs       
                    const key = Object.keys(err);
                    const value = Object.values(err);
                    const elms = document.getElementsByClassName(key[0]);

                    for (let el of elms) {
                        el.classList.add("is-invalid");
                    }
                    
                    //mensaje invalid-feedback a los títulos correspondientes
                    let titles = document.getElementsByClassName('title_'+key[0]);
                    let html = `<div class="invalid-feedback m0 mb-3">${value[0]}</div>`;

                    for (let title of titles) {
                        title.insertAdjacentHTML('afterend', html);
                    }
                });

                form.scrollIntoView({ 
                    behavior: 'smooth'
                });
            }

            disableBtn(btn);
        });
}

function launchModal(txt){

    const modalTxt = document.querySelector('#modalTxt');
    modalTxt.innerHTML = txt;
        
    let myModal = new bootstrap.Modal(document.getElementById('modalResult'));
    myModal.show();
}

function disableBtn(btn){   
    btn.disabled = false;
    btn.innerHTML = "Enviar";
}