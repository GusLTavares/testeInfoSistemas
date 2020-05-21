import { Veiculo } from './veiculo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class VeiculoAdapter {
  adapt(item: any): Veiculo {
    return new Veiculo(item.id_veiculo, item.placa, item.chassi, item.renavam, item.modelo, item.marca, item.ano);
  }
}

