import {Component} from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {CameraPage} from '../camera/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController) {

  }

  openActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Navigate to camera page',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(CameraPage);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Do nothing
          }
        }
      ]
    });
    actionSheet.present().then(() => {
      // Do nothing
    });
  }
}
