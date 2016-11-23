
To update the jar download the latest master repo to a local folder, and use a decent build tool,
or do this commandline struggle:

$ cd /Users/eddyverbruggen/Downloads/Keyframes-master/android/keyframes/src/main
$ mkdir out
$ find java -name *.java > sources.txt

Delete the reference to BuildConfig at the bottom of this file to satisfy the compiler:
$ vi java/com/facebook/keyframes/KeyframesDrawable.java

$ javac -source 1.7 -target 1.7  -d out -cp ~/Toolshed/android-sdk-macosx/platforms/android-23/android.jar @sources.txt
$ cd out
$ jar cf keyframes.jar com
$ cp keyframes.jar /Users/eddyverbruggen/sandboxes/nativescript-keyframes/platforms/android/