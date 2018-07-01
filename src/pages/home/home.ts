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
      title: 'Navigate to...',
      buttons: [
        {
          text: 'Camera page',
          role: 'destructive',
          handler: () => {
            this.navigateToCamera();
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

  navigateToCamera() {
    this.navCtrl.push(CameraPage);
  }
}
