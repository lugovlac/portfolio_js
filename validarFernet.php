<?php

function validateArray($array, $txt, $ref, $result) {

    $invalid = array();
    $valid = array();

    foreach($array as $a){
        $float = floatval($a);

        //a) que sea null o vacío b) que no contenga números c) que sea negativo
        if(is_null($a) || $a == "" || $float == 0 || $a < 0){
            array_push($invalid, 1);
        } else {
            array_push($valid, 1);
        }
    }

    if(empty($valid)){
        $error[$ref] = $txt;
        array_push($result['errors'], $error);      
    }   
    return $result;
}


function validateInput($input, $txt, $ref, $result) {   
    $float = floatval($input);

    //a) que sea null o vacío b) que no contenga números c) que sea negativo
    if(is_null($input) || $input == "" || $float == 0 || $input < 0){
        $error[$ref] = $txt;
        array_push($result['errors'], $error);
    } 

    return $result;
}

function validateRange($array, $txt, $ref, $result) {   

    $invalid = array();

    foreach($array as $key => $a){
        
        $float[$key] = floatval($a);

        if(is_null($a) || $a == "" || $float[$key] == 0 || $a < 0){
            array_push($invalid, 1);
        }
    }

    //la suma de los dos porcentajes tiene que dar el 100% del trago
    $calculo = $float['rangeFernet'] + $float['rangeCoca'];

    if($calculo != 100){
        array_push($invalid, 1);
    }

    if(!empty($invalid)){
        $error[$ref] = $txt;
        array_push($result['errors'], $error);
    }
    return $result;
}


$result['errors'] = array();

//inputs fernet
$botFer = array();
$botFer['fernet450cc'] = isset($_POST['fernet450cc']) ? $_POST['fernet450cc'] : null;
$botFer['fernet750cc'] = isset($_POST['fernet750cc']) ? $_POST['fernet750cc'] : null;
$botFer['fernet1l'] = isset($_POST['fernet1l']) ? $_POST['fernet1l'] : null;
$txt = "Por favor ingresa una cantidad válida de botellas de fernet.";
$result = validateArray($botFer, $txt, "botFernet", $result);


//inputs coca
$botCoca = array();
$botCoca['coca220ml'] = isset($_POST['coca220ml']) ? $_POST['coca220ml'] : null;
$botCoca['coca354ml'] = isset($_POST['coca354ml']) ? $_POST['coca354ml'] : null;
$botCoca['coca600ml'] = isset($_POST['coca600ml']) ? $_POST['coca600ml'] : null;
$botCoca['coca125l'] = isset($_POST['coca125l']) ? $_POST['coca125l'] : null;
$botCoca['coca15l'] = isset($_POST['coca15l']) ? $_POST['coca15l'] : null;
$botCoca['coca2l'] = isset($_POST['coca2l']) ? $_POST['coca2l'] : null;
$botCoca['coca225l'] = isset($_POST['coca225l']) ? $_POST['coca225l'] : null;
$botCoca['coca25l'] = isset($_POST['coca25l']) ? $_POST['coca25l'] : null;
$txt = "Por favor ingresa una cantidad válida de botellas de coca.";
$result = validateArray($botCoca, $txt, "botCoca", $result);


//input cubitos
$cubitos = isset($_POST['cubitos']) ? $_POST['cubitos'] : null;
$txt = "Por favor ingresa un valor numérico y positivo de cubitos";
$result = validateInput($cubitos, $txt, "nroCubitos", $result);

//range cubitos
$rangeCubitos = isset($_POST['rangeCubitos']) ? $_POST['rangeCubitos'] : null;
$txt = "Por favor ingresa un número entero y positivo de cubitos por trago";
$result = validateInput($rangeCubitos, $txt, "cantCubitos", $result);


//range fernet/coca
$porcentaje = array();
$porcentaje['rangeFernet'] = isset($_POST['rangeFernet']) ? $_POST['rangeFernet'] : null;
$porcentaje['rangeCoca'] = isset($_POST['rangeCoca']) ? $_POST['rangeCoca'] : null;
$txt = "Por favor revisa los valores de los rangos fernet/coca";
$result = validateRange($porcentaje, $txt, "porcFerCoca", $result);


if(empty($result['errors'])){
    $result['success'] = TRUE;
} else {
    $result['success'] = FALSE;
}

echo json_encode($result);