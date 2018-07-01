import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Camera, CameraOptions, CameraPopoverOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  image: string;

  constructor(private camera: Camera) {
  }

  pickPhoto() {
    const popoverOptions: CameraPopoverOptions = {
      x: 0,
      y: 0,
      width: 1080,
      height: 1080,
      arrowDir: this.camera.PopoverArrowDirection.ARROW_ANY
    };

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1080,
      targetHeight: 1080,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: false,
      cameraDirection: this.camera.Direction.BACK,
      popoverOptions: popoverOptions
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.image = null;
    });
  }
}
