import { Injectable } from '@angular/core';

export class Veiculo{
  constructor(
    public id_veiculo: number,
    public placa: string,
    public chassi: string,
    public renavam: string,
    public modelo: string,
    public marca: string,
    public ano: number
  ) {}
}

