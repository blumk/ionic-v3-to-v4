import {Component} from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController,
              private router: Router) {

  }

  async openActionSheet() {
    const actionSheet: HTMLIonActionSheetElement = await this.actionSheetCtrl.create({
      header: 'Navigate to...',
      buttons: [
        {
          text: 'Camera page',
          role: 'destructive',
          handler: () => {
            this.router.navigate(['/camera']);
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
