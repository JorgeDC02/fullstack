import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://prova3-b13e7-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);
    });


    // this.equipo = resp
  }

}