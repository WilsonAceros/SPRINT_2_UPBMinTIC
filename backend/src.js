// function calcularDepreciacionNIIF(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) {
//     if (vidaUtil < 0){
//         return 0;
//     }
//     if (numeroPeriodoAconsultar>vidaUtil){
//         return precioFinal;
//     }
//     else{
//         let operacion = ((precioInicial-precioFinal)/vidaUtil)*numeroPeriodoAconsultar;
//         return operacion;
//     }
// }

// function calcularDepreciacionNIIFEnDolares (precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar) {
//     if (precioInicial < 0){
//         console.log("El precio inicial no puede ser negativo");
//     }
//     else{
//         let calculo = calcularDepreciacionNIIF(precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar)/3778;
//         return calculo;
//     }
// }

// export{calcularDepreciacionNIIF,calcularDepreciacionNIIFEnDolares};


const calcularDepreciacionNIIF = (precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) => {
    if (vidaUtil <= 0){
        return 0;
    }
    if (numeroPeriodoAconsultar>vidaUtil){
        return precioFinal;
    }
    else{
        let operacion = ((precioInicial-precioFinal)/vidaUtil)*(numeroPeriodoAconsultar);
        return operacion;
    }
}

const calcularDepreciacionNIIFEnDolares = (precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar) => {
    if (precioInicial < 0){
        miExcepcionUsuario = new ExceptionUsuario("Error");
        throw miExcepcionUsuario;
    }
    else{
        let calculo = calcularDepreciacionNIIF(precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar)/3778;
        return calculo;
    }
}

module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;