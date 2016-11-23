import { Image } from "ui/image";
import * as fs from "file-system";

declare var KFVectorLayer, KFVector, KFVectorFromDictionary, KFVectorView,
            NSData, NSJSONSerialization, kNilOptions, CGRectMake, UIView, CALayer: any;

let appPath = fs.knownFolders.currentApp().path;

export class KeyframesView extends Image {
  private _source: string;
  private _ios: any; // = KFVectorLayer;

  constructor() {
    super();
  }

  public onLoaded() {
    let src = appPath + (this._source.indexOf("/") === 0 ? "" : "/") + this._source;
    if (!fs.File.exists(src)) {
      console.log("Keyframe source not found at " + src + "; showing an empty image");
      return;
    }

    let data = NSData.dataWithContentsOfFile(src);
    let vectorDictionary = NSJSONSerialization.JSONObjectWithDataOptionsError(data, kNilOptions, null);
    let kfVector = KFVectorFromDictionary(vectorDictionary);
    let kfVectorLayer = KFVectorLayer.layer();

    kfVectorLayer.frame = CGRectMake(0, 0, this._ios.layer.frame.size.width, this._ios.layer.frame.size.height);
    kfVectorLayer.faceModel = kfVector;
    this.ios.layer.addSublayer(kfVectorLayer);
    kfVectorLayer.startAnimation();
  }

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    if (!this._ios) {
      this._ios = KFVectorLayer.layer();
    }
    return this._ios;
  }

  set source(value: string) {
    this._source = value;
  }
}