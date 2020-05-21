import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Veiculo } from './Veiculo';
import { VeiculoAdapter } from './VeiculoAdapter';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class VeiculoService {
  private apiUrl = "http://localhost:3000/veiculos";


 constructor(private http: HttpClient, private adapter: VeiculoAdapter) {}

 list(): Observable<Veiculo[]> {
   const url = this.apiUrl;
   return this.http
     .get(url)
     .pipe(map((data:any) => {
      return data.response.map(item => this.adapter.adapt(item));

     })
     );

    }


}



