import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public c1 = '';
  public c2 = '';

  public credito1 = '';
  public credito2 = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  calcular(){
 
    var sumaCreditos = (parseInt(this.credito1)+parseInt(this.credito2));
    
    var sumaCalificacion = 
      (parseInt(this.credito1)*parseInt(this.c1))+
      (parseInt(this.credito2)*parseInt(this.c2));


    var total = 0;

    if(sumaCalificacion > sumaCreditos){
      total = (sumaCalificacion / sumaCreditos);
    }else{
      total = (sumaCreditos / sumaCalificacion);
    }
  

    const alert = this.alertCtrl.create({
      title: 'Promedio!',
      subTitle: 'Tu promedio es: '+total+'<br>calificacion: '+sumaCalificacion+'<br>creditos: '+sumaCreditos,
      buttons: ['OK']
    });
    alert.present();

  }

}
