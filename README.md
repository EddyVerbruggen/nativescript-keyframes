# NativeScript Facebook Keyframes plugin
-- a {N} wrapper for [this awesome animation library](https://github.com/facebookincubator/Keyframes)

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-keyframes/master/media/keyframes-logo.png" />

## Why use this?
Good question, as NativeScript already has [outstanding CSS animation support](https://docs.nativescript.org/ui/animation-css.html)!

Make sure you check that out as well, but if you or your designed is a sucker for __After Effects__
to create crazily complex animations then this is the plugin for you.

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
<Page xmlns:Keyframes="nativescript-keyframes">
  <Keyframes:KeyframesView
      class="keyframe"
      width="200"
      height="200"
      source="keyframes/logo.json">
  </Keyframes:KeyframesView>
</Page>
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