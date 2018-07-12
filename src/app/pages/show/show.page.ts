import {Component} from '@angular/core';

import {ImageService} from '../../services/image.service';

@Component({
  selector: 'page-show',
  templateUrl: 'show.page.html',
  styleUrls: ['./show.page.scss']
})
export class ShowPage {

  image: string;

  constructor(private imageService: ImageService) {
  }

  ionViewWillEnter() {
    this.image = this.imageService.image;
  }

}
