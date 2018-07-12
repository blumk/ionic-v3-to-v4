import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  image: string;

  constructor(private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.image = this.navParams.get('image');
  }

}
