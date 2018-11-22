
function load () {

    var num = parseInt(document.getElementById('number').value);
    var porcentage = document.getElementById('progress');


    porcentage.value=num;
  
}

function load2 () {

    /*=======función principal===========*/
    var num = parseInt(document.getElementById('number').value);
    var num2 = parseInt(document.getElementById('number2').value);

    /*=======Validacion de entregas===========*/

    if(num > num2){
       alert("No puedes realizar mas entregas, haz realizado tu Misión");

    }else if(num==0){
        alert("No has realizado tus entregas");

    }

    var num3_res = 100*num/num2;
    var conde = num3_res.toFixed(0);
    var porcentage = document.getElementById('progress');


    /*=======validación de entregas 2  ===========*/

    /*=======Si el número de ENTREGAS REALIZADAS es MAYOR al
             NUMERO DE ENTREGAS A REALIZAR entonces la barra
             pintará solo el 100%===========*/

    if(num3_res <= 100){

        porcentage.value=num3_res;
        document.getElementById('progress').innerHTML=num3_res+"%";
        document.getElementById('ind_por').innerHTML=(conde + "%");

    }else if(num3_res > 100){

        porcentage.value=100;
        document.getElementById('progress').innerHTML=100+"%";
        document.getElementById('ind_por').innerHTML=(100 + "%");
    }

    
    /*=======Titles & Subtitles===========*/
    document.getElementById('etq1').innerHTML=num2;
    document.getElementById('etq2').innerHTML=num;
    document.getElementById('ind').innerHTML=(num + "-"+ num2);
    
}


