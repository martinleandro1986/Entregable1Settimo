let clave="hendrix";
let saldo =980000;
const datosDeCuenta="CBU:2896575968369852369852 -ALIAS: GUITARRA-SUENA-FUERTE"
let tipoDeCambio=1475;
const montoPrestamo="$250.000  plazo:6 años 38% T.N.A"



function validarClave(){
    for(let i=2;i>=0;i--){
        let ingreso=prompt("Ingrese su clave");
        if(clave===ingreso){
            alert("Bienvenido Carlos Cerrano al Home Banking del Banco Progreso");
            return true;
        }else{
            alert("La clave es incorrecta , le quedan " + i + "oportunidades para ingresarla correctamente");
        }
    }
    return false;
}

function consultarCBU(){
   alert(datosDeCuenta);
}


function comprarDolares(){
    const montoPesos=Number(prompt("Ingrese el monto en pesos que desea cambiar a dólares"));
    const equivalente=montoPesos/tipoDeCambio;
    if (montoPesos>saldo){
        alert("El dinero disponible en cuenta es insuficiente .Su saldo es " + saldo);
        menu=prompt("Seleccione que operación desea realizar: \nA)CONSULTAR CBU/ALIAS de su cuenta \nB)COMPRAR DOLARES.\nC)REALIZAR TRANSFERENCIAS \nD)SOLICITAR PRESTAMOS \nE)CONSULTAR SALDO DE SU CUENTA.\nF)SALIR");
    } else {
        alert("Usted ha comprado la cantidad de "+ equivalente +" dólares debitando la suma de $"+  montoPesos + " de su caja de ahorros por dicha compra ");
    }     

    saldo= saldo -montoPesos
 
    
}

function transferir(){
    let montoTransferir= Number(prompt("Ingrese el monto a transferir"));
    if (montoTransferir>=saldo){
        alert("El dinero disponible en cuenta no es suficiente, su saldo actual es de $" +saldo);
         menu=prompt("Seleccione que operación desea realizar: \nA)CONSULTAR CBU/ALIAS de su cuenta \nB)COMPRAR DOLARES.\nC)REALIZAR TRANSFERENCIAS \nD)SOLICITAR PRESTAMOS \nE)CONSULTAR SALDO DE SU CUENTA.\nF)SALIR");
    } else {
        let cuentaDestino= (prompt("ingrese alias o cbu de la cuenta destino"));
        alert("La transferencia fue realizada por la suma de $" + montoTransferir +" a la cuenta "+ cuentaDestino);
        saldo= saldo-montoTransferir;
    }

}

function prestamo(){
    alert("Se le informa que usted posee un préstamo preaprobado con las siguientes caracteristicas " + montoPrestamo );
    let prestamo =prompt("Desea solicitar el préstamo Opción 1 /No desea solicitarlo opción 2 ");
    if (prestamo=="1"){
       alert("Hemos contabilizado su préstamo en su cuenta");
        saldo=saldo + 250000;
    } else {
        alert("El préstamo estara vigente hasta fin de año por si desea solicitarlo");
    }
  

}

function consultarSaldo(){
     alert(saldo); 
}
   

function inicioHomeBanking(){
    let ingresoValido=validarClave();
    if (ingresoValido){
        let menu=prompt("Seleccione que operación desea realizar: \nA)CONSULTAR CBU/ALIAS de su cuenta \nB)COMPRAR DOLARES.\nC)REALIZAR TRANSFERENCIAS \nD)SOLICITAR PRESTAMOS \nE)CONSULTAR SALDO DE SU CUENTA.\nF)SALIR");
        while(menu!="F"){
            if (menu=="A"){
                consultarCBU();
            }else if (menu=="B"){
                comprarDolares();
            }else if (menu=="C"){
                transferir();
            }else if (menu=="D"){
                prestamo();
            } else {
                consultarSaldo();
            }
        menu=prompt("Seleccione que operación desea realizar: \nA)CONSULTAR CBU/ALIAS de su cuenta \nB)COMPRAR DOLARES.\nC)REALIZAR TRANSFERENCIAS\nD)SOLICITAR PRESTAMOS\nE)CONSULTAR SALDO DE SU CUENTA.\nF)SALIR");    

        }
    }else{
        alert("CONCURRA CON SU TARJETA DE DEBITO AL CAJERO AUTOMATICO PARA SOLICITAR DESBLOQUEO DE CLAVE DE HOME BANKING");


    }
}
    inicioHomeBanking();