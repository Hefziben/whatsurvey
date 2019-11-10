import { Injectable } from '@angular/core';
import axios from "axios";
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  crearContacto(data){
   return axios.post('https://whatnotif.herokuapp.com/nuevoContacto', data);
  }
}
