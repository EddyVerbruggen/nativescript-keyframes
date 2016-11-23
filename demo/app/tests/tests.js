var Keyframes = require("nativescript-keyframes").Keyframes;
var keyframes = new Keyframes();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(keyframes.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(keyframes.functionname()).toEqual(jasmine.any(Promise));
  });
});