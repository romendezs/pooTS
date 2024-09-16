//Template for cabecera
class cabeceraTemplate{
    private titulo:string ="Titulo por defecto"
    private color:string  ="#89e3a0";
    private fuente:string  = "Montserrat";
    private alineacion:string  ="";
  
    public setValues(title:string, color:string, fuente:string){
        this.titulo = title;
        this.color = color;
        this.fuente = fuente;
    }
  
    public setAlineacion(alineacion:string){
      this.alineacion = alineacion
    }
  
    public printProps():Array<string | never>{
        let valores:Array<string> = [this.titulo, this.color, this.fuente, this.alineacion]
        return valores;
    }  
}

//Creating new cabecera
const cabeceraI:cabeceraTemplate = new cabeceraTemplate()
const valores = cabeceraI.printProps()

//Printing cabecera props in the DOM
export const cabecera = ()=>{
    return`
        <header>
            <h1 class="flex justify-center text-cyan-600 ">${valores[0]}<h1>
        </header>
    `
}

export const changeCabecera = ()=>{

}


/*   
  const cabecera:cabeceraTemplate = new cabeceraTemplate();
  cabecera.setValues("Compras","Azul","Comic Sans");
  cabecera.setAlineacion("centro");
  cabecera.printProps(); */
  