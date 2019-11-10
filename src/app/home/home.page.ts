import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from "../providers/apiservice.service";
import { concat } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public subscriccion: FormGroup;
  public subscribe:Boolean = true;
  constructor(private fb: FormBuilder, private apiservice: ApiserviceService, private alertCtrl: AlertController) {

    this.subscriccion = fb.group({
      nombre: ["", Validators.compose([Validators.required])],
      apellido: ["", Validators.compose([Validators.required])],
      telefono: ["", Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(8),])],
      });

  }

  showForm(){
this.subscribe = true;
  }
  onSubmit(datos){
    const contacto = datos;
    console.log(contacto);
  this.apiservice.crearContacto(contacto).then(data =>{
    console.log(data.data);
    this.subscriccion.reset();
    this.presentAlert();    
  })
    
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Datos enviados",
      message:
        "¡Gracias por subcribirte a las WhatsApp promos!", 
      cssClass: "buttonCss",
      buttons: [
        {
          text: "OK",
          handler: () => {
            //this.subscribe = false;
            //this.router.navigate(["/inicio"]);
          }
        }
      ]
    });

    await alert.present();
  }
  

}
