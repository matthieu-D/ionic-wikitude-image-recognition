import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wikitudePlugin;
  requiredFeatures = [ "image_tracking" ];
  arExperienceUrl = "www/assets/experience/world/image-recognition/index.html";
  startupConfiguration = {
    "camera_position": "back"
  };

  constructor(public platform: Platform) {
     platform.ready().then(() => {
      this.wikitudePlugin = (<any> window).cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
      this.wikitudePlugin._sdkKey = "INSERT LICENSE HERE";
      this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
    });
  }


  onDeviceSupported = () => {
     this.wikitudePlugin.loadARchitectWorld(
      this.onARExperienceLoadedSuccessful,
      this.onARExperienceLoadError,
      this.arExperienceUrl,
      this.requiredFeatures,
      this.startupConfiguration
    );
  }

  onARExperienceLoadedSuccessful() {
  }

  onARExperienceLoadError(error) {
  }

  onDeviceNotSupported() {
  }
}
