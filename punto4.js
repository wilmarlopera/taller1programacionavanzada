let vEnergia = [2.4,-8.5,-6];

function calcular(vEnergia,cNegativa){
    let cantidad=0;
    for (let i = 0 ; i <= vEnergia.length; i++){
        if (vEnergia[i]< 0){
            cantidad++;
        }
    }
    cNegativa(cantidad);
}

calcular(vEnergia,function(cantidad){console.log("sables defectuosos con energia negativa "+cantidad)})


//funcion flecha

let calcularEnergia = (vEnergia,cNegativa) =>{
    let cantidad=0;
    for (let i = 0 ; i <= vEnergia.length; i++){
        if (vEnergia[i]< 0){
            cantidad++;
        }
    }
    cNegativa(cantidad);
}


calcularEnergia(vEnergia,function(cantidad){console.log("sables defectuosos con energia negativa "+cantidad)})