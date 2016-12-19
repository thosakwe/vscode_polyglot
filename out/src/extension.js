var self = Object.create(global);

// TODO: This isn't really a correct transformation. For example, it will fail
// for paths that contain characters that need to be escaped in URLs. Once
// dart-lang/sdk#27979 is fixed, it should be possible to make it better.
self.location = {
  href: "file://" + (function() {
    var cwd = process.cwd();
    if (process.platform != "win32") return cwd;
    return "/" + cwd.replace("\\", "/");
  })() + "/"
};

self.scheduleImmediate = setImmediate;
self.require = require;
self.exports = exports;
self.process = process;

function computeCurrentScript() {
  try {
    throw new Error();
  } catch(e) {
    var stack = e.stack;
    var re = new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$", "mg");
    var lastMatch = null;
    do {
      var match = re.exec(stack);
      if (match != null) lastMatch = match;
    } while (match != null);
    return lastMatch[1];
  }
}

var cachedCurrentScript = null;
self.document = {
  get currentScript() {
    if (cachedCurrentScript == null) {
      cachedCurrentScript = {src: computeCurrentScript()};
    }
    return cachedCurrentScript;
  }
};

self.dartDeferredLibraryLoader = function(uri, successCallback, errorCallback) {
  try {
    load(uri);
    successCallback();
  } catch (error) {
    errorCallback(error);
  }
};

(function() {
  'use strict';
  const dart_sdk = require('./dart_sdk');
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const web__extension = Object.create(null);
  const vscode = Object.create(null);
  const js = Object.create(null);
  let ListOfDisposable = () => (ListOfDisposable = dart.constFn(core.List$(dart.lazyJSType(() => dart.global.vscode.Disposable, "vscode.Disposable"))))();
  let Event = () => (Event = dart.constFn(vscode.Event$()))();
  let ExtensionContextTovoid = () => (ExtensionContextTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.lazyAnonymousJSType("ExtensionContext")])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  web__extension.activate = function(context) {
    html.window[dartx.alert]('Hello!');
  };
  dart.lazyFn(web__extension.activate, () => ExtensionContextTovoid());
  web__extension.deactivate = function() {
  };
  dart.fn(web__extension.deactivate, VoidTovoid());
  vscode.Event$ = dart.generic(T => {
    const Event = dart.typedef('Event', () => dart.functionType(dart.lazyJSType(() => dart.global.vscode.Disposable, "vscode.Disposable"), [dart.functionType(dart.dynamic, [T])], [dart.dynamic, ListOfDisposable()]));
    return Event;
  });
  vscode.Event = Event();
  js.JS = class JS extends core.Object {
    new(name) {
      if (name === void 0) name = null;
      this.name = name;
    }
  };
  dart.setSignature(js.JS, {
    constructors: () => ({new: dart.definiteFunctionType(js.JS, [], [core.String])}),
    fields: () => ({name: core.String})
  });
  js._Anonymous = class _Anonymous extends core.Object {
    new() {
    }
  };
  dart.setSignature(js._Anonymous, {
    constructors: () => ({new: dart.definiteFunctionType(js._Anonymous, [])})
  });
  js.anonymous = dart.const(new js._Anonymous());
  // Exports:
  exports.web__extension = web__extension;
  exports.vscode = vscode;
  exports.js = js;
})();

//# sourceMappingURL=extension.js.map
