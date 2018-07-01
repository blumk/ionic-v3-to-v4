import {Component} from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController) {

  }

  async openActionSheet() {
    const actionSheet: HTMLIonActionSheetElement = await this.actionSheetCtrl.create({
      header: 'Navigate to...',
      buttons: [
        {
          text: 'Camera page',
          role: 'destructive',
          handler: () => {
            this.navCtrl.goForward('/camera').then(() => {
              // Do nothing
            });
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
