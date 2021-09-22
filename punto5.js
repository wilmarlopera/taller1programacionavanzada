let salariobase=3500000;

function calcularSalario(salario, licencias, deduccion){
    salario = salario +(licencias*1500000);
    deduccion(salario);
}

calcularSalario(salariobase, 5, function(salario){
    salario = salario - (salario * 5 / 100 );
    console.log("el salario es: "+ salario);

})


let calcular=(salario, licencias, deduccion)=>{
    salario = salario +(licencias*1500000);
    deduccion(salario);
}

calcular(salariobase, 7, function(salario){
    salario = salario - (salario * 5 / 100 );
    console.log("el salario es: "+ salario);

})


