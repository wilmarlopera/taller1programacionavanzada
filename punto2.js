function robarPlano(id, despegarNave) {

    if (id > 0 && id <= 10) {
        let mensaje = "nos robamos el plano" + id;
        console.log(mensaje)
        despegarNave(true);
    } else {
        let mensaje = "nos robamos un plano fake";

        console.log(mensaje);
        despegarNave(false);
    }

}

robarPlano(15, bandera => bandera ? console.log("despegando...") :
    console.log("quedate ahi..."));

let urtar = (id, alzarnave) => {
    if (id > 0 && id <= 10) {
        let mensaje = "nos robamos el plano " + id;
        console.log(mensaje)
        alzarnave(true);
    } else {
        let mensaje = "nos robamos un plano fake";
        console.log(mensaje);
        alzarnave(false);
    }

}

urtar(7, bandera => bandera ? console.log("despegando...") :
    console.log("quedate ahi..."));
