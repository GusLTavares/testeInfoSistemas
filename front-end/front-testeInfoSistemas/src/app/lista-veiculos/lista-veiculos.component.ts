import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent implements OnInit {


  veiculos: Veiculo[];

  constructor(private veiculoService : VeiculoService) {

    this.veiculos = [ ];

  }


  ngOnInit(): void {

    this.veiculoService.list().subscribe((veiculo: Veiculo[]) => {
      this.veiculos = veiculo;

  });
}

}

