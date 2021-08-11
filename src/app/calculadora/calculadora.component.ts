import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
numero1: number =  0;
numero2: number =  0;
resultado: number = 0;

suma(): void{
  this.resultado = this.numero1 + this.numero2;
}

resta(): void{
  this.resultado = this.numero1 - this.numero2;
} 

multiplicar(): void{
  this.resultado = this.numero1 * this.numero2;
}  

dividir(): void{
  this.resultado = this.numero1 / this.numero2;
}

}
