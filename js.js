let clave='hendrix';
let saldo=980000
const tipoDeCambio= 1475;
const DatosDeCuenta="CBU:2896575968369852369852 -ALIAS: GUITARRA-SUENA-FUERTE"

function validarClave(){
    for(let i=2;i>=0;i--){
        let ingreso=prompt("Ingrese su clave");
        if (clave === ingreso){
            alert("Bienvenido Carlos Cerrano al Home Banking del Banco Progreso");
            return true;
        } else {
            alert("La clave es incorrecta , le quedan " + i +" oportunidades para volver ingresarla");
        }
    }
    return false;
}



function consultarCBU(){
    console.log(DatosDeCuenta);
}


function comprarDolares(){
    const montoPesos=Number(prompt("Ingrese el monto en pesos que desea cambiar a dólares"));

    if (montoPesos>saldo){
        alert("El dinero disponible en cuenta es insuficiente .Tu saldo es " + saldo);
    } else {
        saldo= saldo -ventaMontoDefinitivo
    }     

    const equivalente=parseInt(montoPesos/tipoDeCambio);

    const ventaMontoDefinitivo=tipoDeCambio*equivalente;

    alert("La cantidad de dólares que le podemos vender es " + equivalente  + " y el monto a debitar de su cuenta seria $" +ventaMontoDefinitivo )
    
}

function transferir(){
    let montoTransferir= Number(prompt("Ingrese el monto a transferir"));
}


function prestamo(){

}


function consultarSaldo(){
    console.log(saldo);
}

function inicioHomeBanking(
    let ingresoValido=validarClave();
    if (ingresoValido){
        let menu=prompt("Seleccione que operación desea realizar: \nA)-CONSULTAR CBU/ALIAS de su cuenta \nB) - COMPRAR DOLARES. \nC) -REALIZAR TRANSFERENCIAS \n D)SOLICITAR PRESTAMOS \n E)CONSULTAR SALDO DE SU CUENTA.F)SALIR");
        while(menu!="D"){
            if (menu=="A"){
                consultarCBU();
            }else if (menu=="B"){
                comprarDolares();
            }else if (menu=="C"){
                transferir();
            }else if (menus=="D"){
                prestamo();
            } else {
                consultarSaldo();
            }
        menu=prompt("Seleccione que operación desea realizar: \nA)-CONSULTAR CBU/ALIAS de su cuenta \nB) - COMPRAR DOLARES. \nC) -REALIZAR TRANSFERENCIAS \n D)SOLICITAR PRESTAMOS \n E)CONSULTAR SALDO DE SU CUENTA.F)SALIR");    

        }
    }else{
        alert("CONCURRA CON SU TARJETA DE DEBITO AL CAJERO AUTOMATICO PARA SOLICITAR DESBLOQUE DE CLAVE DE HOME BANKING");


    }
)

inicioHomeBanking();
