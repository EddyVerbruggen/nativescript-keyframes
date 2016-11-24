import { ad } from "utils/utils";
import { Image } from "ui/image";
import * as fs from "file-system";

declare var android, com, java: any;

let appPath = fs.knownFolders.currentApp().path;

export class KeyframesView extends Image {
  private _source: string;
  private _androidViewId: number;
  private _android; // : android.widget.ImageView;

  get android(): any {
    return this._android;
  }

  get _nativeView(): any {
    return this._android;
  }

  set source(value: string) {
    this._source = value;
  }

  public _createUI() {
    this._android = new android.widget.ImageView(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    let src = appPath + (this._source.indexOf("/") === 0 ? "" : "/") + this._source;
    if (!fs.File.exists(src)) {
      console.log("Keyframe source not found at " + src + "; showing an empty image");
      return;
    }

    let fis = new java.io.FileInputStream(src);
    let kfImage = com.facebook.keyframes.deserializers.KFImageDeserializer.deserialize(fis);
    let kfDrawable = new com.facebook.keyframes.KeyframesDrawableBuilder()
      .withImage(kfImage)
      // .withMaxFrameRate(60) // default 60
      .build();

    kfDrawable.startAnimation();

    this._android.setLayerType(android.view.View.LAYER_TYPE_SOFTWARE, null);
    this._android.setImageDrawable(kfDrawable);
  }
}