let clave='hendrix';
let saldo=980000;
const tipoDeCambio= 1475;
const datosDeCuenta="CBU:2896575968369852369852 -ALIAS: GUITARRA-SUENA-FUERTE"
const prestamoPreaprobado[monto:250000,tasa:38,plazo:5];

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
    alert(datosDeCuenta);
}


function comprarDolares(){
    const montoPesos=Number(prompt("Ingrese el monto en pesos que desea cambiar a dólares"));

    if (montoPesos>saldo){
        alert("El dinero disponible en cuenta es insuficiente .Tu saldo es " + saldo);
        breack;
    } else {
        saldo= saldo -ventaMontoDefinitivo
    }     

    const equivalente=parseInt(montoPesos/tipoDeCambio);

    const ventaMontoDefinitivo=tipoDeCambio*equivalente;

    alert("La cantidad de dólares que le podemos vender es " + equivalente  + " y el monto a debitar de su cuenta seria $" +ventaMontoDefinitivo )
    
}

function transferir(){
    let montoTransferir= Number(prompt("Ingrese el monto a transferir"));
    if (montoTransferir>=saldo){
        alert("El dinero disponible en cuenta no es suficiente, su saldo actual es de $" +saldo);
        break;
    } else {
        let cuentaDestino= (prompt("ingrese alias o cbu de la cuenta destino"));
        alert("La transferencia fue realizada por la suma de $" + montoTransferir +"a la cuenta"+ cuentaDestino);
        saldo= saldo-montoTransferir;
    }

}


function prestamo(){
    alert("Se le informa que uste posee un préstamo preaprobado con las siguientes caracteristicas " + prestamoPreaprobado );


    

}


function consultarSaldo(){
    console.log(saldo);
}

function inicioHomeBanking(
    let ingresoValido=validarClave();
    if (ingresoValido){
        let menu=prompt("Seleccione que operación desea realizar: \nA)-CONSULTAR CBU/ALIAS de su cuenta \nB) - COMPRAR DOLARES. \nC) -REALIZAR TRANSFERENCIAS \nD)SOLICITAR PRESTAMOS \nE)CONSULTAR SALDO DE SU CUENTA.F)SALIR");
        while(menu!="F"){
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
