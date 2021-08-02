<div class="container">
    <div class="row">
        <div class="col-12">
            <p class="pHeading mb-5">Para preparar un fernet con coca, nada mejor que esta maravillosa aplicación. Simplemente indicá cuántas botellas tenés de fernet y de Coca, de qué medida son, cuántas unidades de hielo tenés, y cómo querés variar tu receta. Y listo! El sistema te calculará cuántos tragos podés preparar.</p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
            <form method="POST" name="fernetForm" id="fernetForm">
                <div class="row">
                    <div class="col-12 col-lg-5">
                        <div class="groupInputs mb-4">
                            <h3 class="botFernet title_botFernet mb-0">Botellas de fernet</h3>                      
                            <div class="row mt-4">
                                <div class="col-4">                 
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check450cc" id="check450cc" onchange="habilitarInput('fernet450cc', this.checked)">
                                        <label class="form-check-label" for="check450cc">450 cc.</label>
                                    </div>                          
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botFernet" name="fernet450cc" id="fernet450cc" placeholder="Cantidad de botellas" data-cant="450" disabled>
                                    </div>                      
                                </div>
                            </div>  
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check750cc" id="check750cc" onchange="habilitarInput('fernet750cc', this.checked)">
                                        <label class="form-check-label" for="check750cc">750 cc.</label>
                                    </div>                                  
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botFernet" name="fernet750cc" id="fernet750cc" placeholder="Cantidad de botellas" data-cant="750" disabled>
                                    </div>                      
                                </div>
                            </div>  
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check1l" id="check1l" onchange="habilitarInput('fernet1l', this.checked)">
                                        <label class="form-check-label" for="check1l">1 L.</label>
                                    </div>                                  
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botFernet" name="fernet1l" id="fernet1l" placeholder="Cantidad de botellas" data-cant="1000" disabled>
                                    </div>                      
                                </div>
                            </div>
                        </div>              
                        
                        <div class="groupInputs mb-4">
                            <h3 class="botCoca title_botCoca mb-0">Botellas/latas de coca</h3>
                            <div class="row mt-4">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check220ml" id="check220ml" onchange="habilitarInput('coca220ml', this.checked)">
                                        <label class="form-check-label" for="check220ml">220 ml.</label>
                                    </div>                              
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca220ml" id="coca220ml" placeholder="Cantidad de botellas" data-cant="220" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check354ml" id="check354ml" onchange="habilitarInput('coca354ml', this.checked)">
                                        <label class="form-check-label" for="check354ml">354 ml.</label>
                                    </div>                                          
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca354ml" id="coca354ml" placeholder="Cantidad de botellas" data-cant="354" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check600ml" id="check600ml" onchange="habilitarInput('coca600ml', this.checked)">
                                        <label class="form-check-label" for="check600ml">600 ml.</label>
                                    </div>                                          
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca600ml" id="coca600ml" placeholder="Cantidad de botellas" data-cant="600" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check125l" id="check125l" onchange="habilitarInput('coca125l', this.checked)">
                                        <label class="form-check-label" for="check125l">1.25 L.</label>
                                    </div>                                          
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca125l" id="coca125l" placeholder="Cantidad de botellas" data-cant="1250" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check15l" id="check15l" onchange="habilitarInput('coca15l', this.checked)">
                                        <label class="form-check-label" for="check15l">1.5 L.</label>
                                    </div>                                          
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca15l" id="coca15l" placeholder="Cantidad de botellas" data-cant="1500" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check2l" id="check2l" onchange="habilitarInput('coca2l', this.checked)">
                                        <label class="form-check-label" for="check2l">2 L.</label>
                                    </div>                                      
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca2l" id="coca2l" placeholder="Cantidad de botellas" data-cant="2000" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check225l" id="check225l" onchange="habilitarInput('coca225l', this.checked)">
                                        <label class="form-check-label" for="check225l">2.25 L.</label>
                                    </div>                              
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca225l" id="coca225l" placeholder="Cantidad de botellas" data-cant="2250" disabled>
                                    </div>                      
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-switch mt-2">
                                        <input type="checkbox" class="form-check-input" name="check25l" id="check25l" onchange="habilitarInput('coca25l', this.checked)">
                                        <label class="form-check-label" for="check25l">2.5 L.</label>
                                    </div>                                      
                                </div>  
                                <div class="col-8">
                                    <div class="mb-3">
                                        <input type="number" class="form-control botCoca" name="coca25l" id="coca25l" placeholder="Cantidad de botellas" data-cant="2500" disabled>
                                    </div>                      
                                </div>
                            </div>
                        </div>              
                    </div>
                    <div class="d-none d-lg-block col-lg-2">
                        
                    </div>
                    
                    <div class="col-12 col-lg-5">
                        <div class="groupInputs mb-4">
                            <h3 class="nroCubitos title_nroCubitos mb-0">Cubitos de hielo</h3>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <input type="number" class="form-control nroCubitos" name="cubitos" id="cubitos" placeholder="Cantidad de cubitos">
                                    </div>      
                                </div>
                            </div>
                        </div>
                        
                        <div class="groupInputs mb-4">
                            <h3 class="porcFerCoca title_porcFerCoca mb-0">Porcentaje de fernet</h3>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="rangeFernet" id="lblRangeFernet" class="form-label">30</label>
                                        <input type="range" class="form-range" name="rangeFernet" id="rangeFernet" min="0" max="100" value="30" data-thisrange="Fernet" data-oprange="Coca" onchange="updtRange(this, true)"/>
                                    </div>      
                                </div>
                            </div>
                        </div>
                        
                        <div class="groupInputs mb-4">
                            <h3 class="porcFerCoca title_porcFerCoca mb-0">Porcentaje de coca</h3>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="rangeCoca" id="lblRangeCoca" class="form-label">70</label>
                                        <input type="range" class="form-range" name="rangeCoca" id="rangeCoca" min="0" max="100" value="70" data-thisrange="Coca" data-oprange="Fernet" onchange="updtRange(this, true)"/>
                                    </div>      
                                </div>
                            </div>
                        </div>
                        
                        <div class="groupInputs mb-4">
                            <h3 class="cantCubitos title_cantCubitos mb-0">Cantidad de cubitos de hielo por trago</h3>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="rangeCubitos" id="lblRangeCubitos" class="form-label">1</label>
                                        <input type="range" class="form-range" name="rangeCubitos" id="rangeCubitos" min="0" max="5" value="1" data-thisrange="Cubitos" onchange="updtRange(this, false)"/>
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <button type="submit" id="btnSubmit" class="btn btn-primary mb-5" data-style="slide-right">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>      
    </div>
</div>

<div class="modal fade" id="modalResult" tabindex="-1">
    <div class="modal-dialog">
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