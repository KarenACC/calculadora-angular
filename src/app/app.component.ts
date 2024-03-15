import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  valorMostrado:string='';
  historial:string[]=[];

  constructor(){
    // Se recuperan los datos del localStorage
    this.historial=this.getDataFromLocalStorage('historial') || [];
  }

  actualizarValor(valor:string){
    if(valor=== '='){
      this.calcularResultado();
    } else{
      this.valorMostrado+= valor;
    }
  }

  calcularResultado() {
    try {
      if(this.valorMostrado.trim()===''){
        return;
      }
      const resultado = math.evaluate(this.valorMostrado);
      this.historial.push(`${this.valorMostrado} = ${resultado}`);
      localStorage.setItem('historial', JSON.stringify(this.historial))
      this.valorMostrado = resultado.toString();  
    } catch (error) {
      this.valorMostrado = '';
    }
  }

  reset(){
    this.valorMostrado='';
  }

  mostrarHistorial(){
    this.valorMostrado=this.historial.join('\n');
  }

  private getDataFromLocalStorage(key: string): string[] | null {
    const historialData = localStorage.getItem(key);
    return historialData ? JSON.parse(historialData) : null;
  }

}

