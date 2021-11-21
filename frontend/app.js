document.getElementById('calcular').addEventListener('click',consultar_depreciacion);

function consultar_depreciacion(){
    let precio_inicial = document.getElementById('precio_inicial').value;
    let precio_final = document.getElementById('precio_final').value;
    let vida_util = document.getElementById('vida_util').value;
    let periodos = document.getElementById('periodos').value;

    // alert(precio_final + " " + precio_inicial + " " + vida_util + " " + periodos);
}