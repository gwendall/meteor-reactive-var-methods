Package.describe({
  name: "gwendall:reactive-var-methods",
  summary: "Useful methods for reactive vars",
  git: "https://github.com/gwendall/meteor-reactive-var-methods.git",
  version: "0.1.0"
});

Package.onUse(function (api, where) {

  api.use([
    "underscore@1.0.2",
    "reactive-var@1.0.4"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

});
