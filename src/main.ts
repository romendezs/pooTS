import './CSS/style.css'
import {cabecera} from '../components/cabecera'

const appContainer = document.getElementById('app')

appContainer!.innerHTML = cabecera()
//Ejercicio Cabecera


//Ejercicio Calculadora
class Calculadora{
  private n1:number;
  private n2:number;

  constructor(n1:number, n2:number){
    this.n1 = n1;
    this.n2 = n2;
  }

  public Sumar(){
    return(this.n1 + this.n2)
  }

  public Restar(){
    return(this.n1 - this.n2)
  }
  
  public Multiplicar(){
    return(this.n1 * this.n2)
  }

  public Dividir(){
    return(this.n1/this.n2)
  }

  public Potencia(){
    return(Math.pow(this.n1, this.n2))
  }

  public Factorial(){
    let factorialN1:number = 1;
    for (let i = this.n1; i >0 ; i--) {
      factorialN1 = factorialN1 * i;
    }

    let factorialN2:number = 1;
    for (let i = this.n2; i >0 ; i--) {
      factorialN2 = factorialN2 * i;
    }

    return(`El factorial de ${this.n1} es ${factorialN1} \n y el factorial de ${this.n2} es ${factorialN2}`)
  }
}

const calculadora:Calculadora = new Calculadora(4,3);
console.log(calculadora.Dividir());
console.log(calculadora.Factorial());
console.log(calculadora.Multiplicar());
console.log(calculadora.Potencia());
console.log(calculadora.Restar());
console.log(calculadora.Sumar());


//Ejercicio Cancion

class Cancion{
  private titulo:string;
  private genero:string;
  private autorName:string = "";

  constructor(titulo:string, genero:string){
    this.titulo = titulo;
    this.genero = genero;
  }
  
  public get getAutor():string {
    console.log(this.autorName);
    return this.autorName;
  }

  
  public set setAutor(v : string) {
    this.autorName = v;
  }

  public datosCanciones():Array<string>{
    let data:Array<string> = [this.autorName, this.genero, this.titulo]
    console.log(data)
    return data
  }
  
}

const cancion:Cancion = new Cancion("Lamento Boliviano", "buen generoxd");
cancion.setAutor = "Enanitos Verdes";
cancion.getAutor;
cancion.datosCanciones();


//Ejercicio Cuentas

class Cuentas{
  private nombre:string;
  private cantidad:number;
  private tipoCuenta:string;
  private numeroCuenta:number;
  private retiro:number = 0;

  constructor(nombre:string, cantidad:number, numeroCuenta:number, tipoCuenta:string){
    this.nombre = nombre;
    this.cantidad = this.Depositar(cantidad);
    this.numeroCuenta = numeroCuenta;
    this.tipoCuenta = tipoCuenta;
  }

  public Depositar(cantidad:number):number{
    if(cantidad<5){
      alert("El valor debe ser mayor que 5");
      return 0;
    }else{
      return this.cantidad
    }
  }

  public Retirar(valor:number):void{
    if(valor>=5){this.retiro = valor;
    this.cantidad = this.cantidad - this.retiro;}else{
      alert("El valor debe ser mayor que 5")
    }
  }

  public Datos():string{
    return `
      nombre: ${this.nombre}
      tipo de cuenta: ${this.tipoCuenta}
      numero cuenta: ${this.numeroCuenta}
    `
  }

}

const cuenta:Cuentas = new Cuentas("Roberto", 25, 1542, "Corriente");
cuenta.Retirar(10);
console.log(cuenta.Datos());


//Ejercicio Persona

abstract class Persona{
  private nombre:string;
  private apellido:string;
  private direccion:string;
  private telefono:number;
  private edad:number;

  constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.edad = edad;
    this.telefono = telefono;
  }

  public esMayor(){
    if(this.edad<18){
      alert('Es menor de edad')
    }else{
      alert('Es mayor de edad')
    }
  }

  datosPersonales():string{
    return `
      nombre: ${this.nombre}
      apellido: ${this.apellido}
      direccion: ${this.direccion}
      edad: ${this.edad}
      telefono: ${this.telefono}
    `
  }

}

class Empleado extends Persona{

  private sueldo:number = 0;

  
  public get getSueldo() : number {
    console.log(this.sueldo)
    return  this.sueldo;
  }

  
  public set setSueldo(v:number) {
    this.sueldo = v;
  }
  
  
}

const empleado:Empleado = new Empleado("Roberto", "Mendez", "San Salvador", 89019, 19);
empleado.setSueldo = 500;
empleado.getSueldo;
(empleado.datosPersonales());
console.log(empleado.datosPersonales());

