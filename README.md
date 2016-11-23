# NativeScript [Facebook Keyframes](https://github.com/facebookincubator/Keyframes) plugin

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-keyframes/master/media/keyframes-logo.png" />

## Installation
From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-keyframes
```

## Demo app
Want to dive in quickly? Check out [the demo](demo)! Otherwise, continue reading.

You can run the demo app from the root of the project by typing `npm run demo.ios.device`.

## API

This plugin makes most sense when used from XML, which is done like this:

```xml
  <Keyframes:KeyframesView
      class="keyframe"
      width="200"
      height="200"
      source="keyframes/logo.json">
  </Keyframes:KeyframesView>
```

To make the image look transparent on Android currently,
you need to set the background color to that of the parent container, so in your `css` file add:

```css
.keyframe {
  background-color: #DDD;
}
```

The `source` property refers to a folder inside your app,
so in this case we expect this file: `app/keyframes/logo.json`