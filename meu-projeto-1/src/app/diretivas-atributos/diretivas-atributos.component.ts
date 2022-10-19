import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor:boolean=true;
  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }
  public dark(){
    if(this.valor){
      this.valor = false;
    }else{
      this.valor = true;
    }
  }
}
