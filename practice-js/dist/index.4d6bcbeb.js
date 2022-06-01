// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aOoxC":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bookJs = require("./controllers/book.js");
var _bookJsDefault = parcelHelpers.interopDefault(_bookJs);
var _bookJs1 = require("./models/book.js");
var _bookJsDefault1 = parcelHelpers.interopDefault(_bookJs1);
var _bookJs2 = require("./views/book.js");
var _bookJsDefault2 = parcelHelpers.interopDefault(_bookJs2);
const controller = new _bookJsDefault.default(new _bookJsDefault1.default(), new _bookJsDefault2.default());
controller.init();

},{"./controllers/book.js":"dkA5j","./models/book.js":"b4yEX","./views/book.js":"8rls2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkA5j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.model.bindBookListChanged(this.onBookListChanged);
        this.view.bindAddBook(this.handleAddBook);
        this.view.bindDeleteBook(this.handleDeleteBook);
        this.view.bindSearchBook(this.handleSearchBook);
        this.view.bindFilterBook(this.handleFilterBook);
        this.onBookListChanged(this.model.getBook);
        this.view.bindUpdateBook(this.handleUpdateBook);
    }
    init = async ()=>{
        const books = await this.model.getBook();
        this.view.display(books);
    };
    onBookListChanged = (books)=>{
        this.view.display(books);
    };
    handleAddBook = async (title, author, description, category, image)=>{
        const books = await this.model.addBook(title, author, description, category, image);
        this.view.display(books);
    };
    handleUpdateBook = async (id, title, author, description, category, image)=>{
        const books = await this.model.updateBook(id, title, author, description, category, image);
        this.view.display(books);
    };
    handleDeleteBook = async (id)=>{
        const books = await this.model.deleteBook(id);
        this.view.display(books);
    };
    handleSearchBook = async (title)=>{
        const books = await this.model.searchBook(title);
        this.view.display(books);
    };
    handleFilterBook = async (category)=>{
        const books = await this.model.filterBook(category);
        this.view.display(books);
    };
}
exports.default = Controller;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"b4yEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../helpers/service");
var _serviceDefault = parcelHelpers.interopDefault(_service);
var _constant = require("../constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
class Model {
    books = [];
    constructor(){
    // this.books = []
    }
    bindBookListChanged(callback) {
        this.onBookListChanged = callback;
    }
    /**
   * Use API url from fetch import in read data
   * @returns {array} books.
   */ getBook = async ()=>{
        const book = await _serviceDefault.default.get(`/${_constantDefault.default.PATH}`);
        this.books = book;
        return book;
    };
    /**
     * 
     * @param {number} id
     * @param {string} title
	 * @param {string} author
	 * @param {string} description
	 * @param {string} image 
     */ //Add book
    addBook = async (title, author, description, category, image)=>{
        const bookAdded = {
            id: new Date().getTime().toString(),
            title: title,
            author: author,
            description: description,
            category: category,
            image: image
        };
        this.books.push(bookAdded);
        await _serviceDefault.default.create(`/${_constantDefault.default.PATH}`, bookAdded);
        return this.books;
    };
    /**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */ deleteBook = async (id)=>{
        const index = this.books.findIndex((item)=>item.id === id
        );
        const book = this.books[index];
        this.books.splice(index, 1);
        await _serviceDefault.default.remove(`/${_constantDefault.default.PATH}/${id}`, book);
        return this.books;
    };
    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {string} id 
     * @param {string} updateTitle 
     */ updateBook = async (id, updateTitle, updateAuthor, updateDes, updateCate, updateImg)=>{
        const index = this.books.findIndex((item)=>item.id === id
        );
        const bookUpdate = {
            id,
            title: updateTitle,
            author: updateAuthor,
            description: updateDes,
            category: updateCate,
            image: updateImg
        };
        this.books.splice(index, 1, bookUpdate);
        await _serviceDefault.default.update(`/${_constantDefault.default.PATH}/${id}`, bookUpdate);
        return this.books;
    };
    searchBook = async (title)=>{
        const book = await _serviceDefault.default.get(`/${_constantDefault.default.PATH}?q=${title}`);
        this.books = book;
        return book;
    };
    filterBook = async (category)=>{
        const book = await _serviceDefault.default.get(`/${_constantDefault.default.PATH}?category=${category}`);
        this.books = book;
        return book;
    };
}
exports.default = Model;

},{"../helpers/service":"6aoQt","../constant":"jVIFP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aoQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("../constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
/**
 * Function uses url, params and method to return the result requested by the user
 * @param {string} url 
 * @param {let} params 
 * @param {method} method 
 * @returns {} result 
 */ async function request(url, params, method = 'GET') {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (params) {
        if (method === 'GET') url += '?' + objectToQueryString(params);
        else options.body = JSON.stringify(params);
    }
    const response = await fetch(_constantDefault.default.API_HOST + url, options);
    if (response.status !== 200) return generateErrorResponse('The server responded with an unexpected status.');
    const result = await response.json();
    return result;
}
/**
 * 
 * @param {object} obj 
 * @returns object
 */ function objectToQueryString(obj) {
    return Object.keys(obj).map((key)=>key + '=' + obj[key]
    ).join('&');
}
/**
 * 
 * @param {string} message 
 * @returns string
 */ function generateErrorResponse(message) {
    return {
        status: 'error',
        message
    };
}
/**
 * Use url and id to return result request to read data
 * @param {string} url 
 * @param {number} id 
 * @returns result request to read data
 */ function get(url, params) {
    return request(url, params);
}
/**
 * Use url and id to return result request to create data
 * @param {string} url 
 * @param {number} id 
 * @returns result request to create data
 */ function create(url, params) {
    return request(url, params, 'POST');
}
/**
 * Use url and id to return result request to update data
 * @param {string} url 
 * @param {number} id 
 * @returns result request to update data
 */ function update(url, params) {
    return request(url, params, 'PUT');
}
/**
 * Use url and id to return result request to delete data
 * @param {string} url 
 * @param {number} id 
 * @returns result request to delete data
 */ function remove(url, params) {
    return request(url, params, 'DELETE');
}
exports.default = {
    get,
    create,
    update,
    remove
};

},{"../constant":"jVIFP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVIFP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const API_HOST = 'http://localhost:3000';
const PATH = 'books';
exports.default = {
    API_HOST,
    PATH
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rls2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    constructor(){
        this.inputTitle = document.getElementById('add-title');
        this.inputAuthor = document.getElementById('add-author');
        this.inputDescription = document.getElementById('add-des');
        this.inputImg = document.getElementById('add-img');
        this.inputCate = document.getElementById('add-cate');
        this.booklist = document.getElementById('booklist');
        this.updateForm = document.getElementById('update-form');
        this.addBtn = document.getElementById("submit");
        this.formUpdate = document.getElementById('update-form');
        this.search = document.getElementById('search-btn');
        this.inputSearch = document.getElementById('search-input');
        this.checkCate = document.getElementsByClassName('check');
    }
    display(books) {
        if (books.length !== 0) {
            const wrapper = document.getElementsByClassName("booklist");
            wrapper[0].innerHTML = "";
            books.forEach((book)=>{
                // console.log(book)
                const cardBook = document.createElement("div");
                cardBook.id = book.id;
                cardBook.className = "card-book";
                const title = document.createElement("h2");
                title.className = "book-title";
                title.textContent = book.title;
                const bookBody = document.createElement("div");
                bookBody.className = "body";
                const img = document.createElement("div");
                img.className = "book-img";
                img.style.backgroundImage = `url(${book.image})`;
                const des = document.createElement("div");
                des.className = "book-des";
                des.textContent = book.description;
                const author = document.createElement("h2");
                author.className = "book-author";
                author.textContent = book.author;
                bookBody.append(title, author, des);
                const btnDelete = document.createElement("button");
                btnDelete.className = "delete-btn";
                btnDelete.textContent = "Delete";
                const btnEdit = document.createElement("button");
                btnEdit.className = "edit-btn";
                btnEdit.textContent = "Edit";
                btnEdit.addEventListener('click', ()=>{
                    const overlay = document.getElementById('overlay');
                    const updateForm = document.getElementById("update-form");
                    this.editBook(booklist);
                    updateForm.style.visibility = "visible";
                    overlay.style.opacity = "1";
                // updateForm.style.opacity = '1'
                });
                const formUpdate = document.getElementById("update-form");
                cardBook.append(img, bookBody, btnDelete, btnEdit);
                this.booklist.appendChild(cardBook);
            });
        }
    }
    bindAddBook(handler) {
        this.addBtn.addEventListener('click', (e)=>{
            // e.preventDefault()
            handler(this.inputTitle.value, this.inputAuthor.value, this.inputDescription.value, this.inputCate.value, this.inputImg.value);
        });
    }
    editBook(booklist) {
        const update = document.getElementById('update-form');
        update.className = 'update-form';
        // update.id = booklist.id
        // update.style.opacity = '0'
        const popup = document.createElement('div');
        popup.className = 'popup';
        update.style.visibility = 'hidden';
        popup.id = 'popup';
        const editTitle = document.createElement('h2');
        editTitle.className = 'form-title';
        editTitle.textContent = 'Update Book';
        const updateFieldTT = document.createElement('div');
        updateFieldTT.className = 'field';
        const updateFieldDes = document.createElement('div');
        updateFieldDes.className = 'field';
        const updateFieldCate = document.createElement('div');
        updateFieldCate.className = 'field';
        const updateFieldAu = document.createElement('div');
        updateFieldAu.className = 'field';
        const updateFieldImg = document.createElement('div');
        updateFieldImg.className = 'field';
        const labelUpdateTT = document.createElement('label');
        labelUpdateTT.textContent = 'Title';
        const inputUpdateTT = document.createElement('input');
        inputUpdateTT.className = 'update-title';
        inputUpdateTT.id = 'update-title';
        const labelUpdateDes = document.createElement('label');
        labelUpdateDes.textContent = 'Description';
        const inputUpdateDes = document.createElement('textarea');
        inputUpdateDes.className = 'update-des';
        inputUpdateDes.id = 'update-des';
        const labelUpdateCate = document.createElement('label');
        labelUpdateCate.textContent = 'Categories';
        const inputUpdateCate = document.createElement('select');
        inputUpdateCate.className = 'update-cate';
        let option = document.createElement('option');
        option.value = "Cooking";
        option.text = "Cooking";
        let option1 = document.createElement('option');
        option1.value = "Comic";
        option1.text = "Comic";
        // inputUpdateCate.add(option1)
        let option2 = document.createElement('option');
        option2.value = "Horror";
        option2.text = "Horror";
        // inputUpdateCate.add(option2)
        let option3 = document.createElement('option');
        option3.value = "Bussiness";
        option3.text = "Bussiness";
        // inputUpdateCate.add()
        inputUpdateCate.add(option);
        inputUpdateCate.id = 'update-cate';
        const labelUpdateAu = document.createElement('label');
        labelUpdateAu.textContent = 'Author';
        const inputUpdateAu = document.createElement('input');
        inputUpdateAu.className = 'update-author';
        inputUpdateAu.id = 'update-author';
        const labelUpdateImg = document.createElement('label');
        labelUpdateImg.textContent = 'Image Link';
        const inputUpdateImg = document.createElement('input');
        inputUpdateImg.className = 'update-image';
        inputUpdateImg.id = 'update-image';
        const btnUpdate = document.createElement('button');
        btnUpdate.textContent = 'Update';
        btnUpdate.className = 'btn-update';
        btnUpdate.addEventListener('click', ()=>{
            const overlay = document.getElementById('overlay');
            const updateForm = document.getElementById('update-form');
            const updateBtn = document.getElementById('update-form-btn');
            updateForm.style.visibility = 'hidden';
            overlay.style.opacity = '0';
        });
        const btnClose = document.createElement('button');
        btnClose.textContent = 'Close';
        btnClose.className = "btn-close";
        btnClose.addEventListener('click', ()=>{
            const overlay = document.getElementById('overlay');
            const updateForm = document.getElementById('update-form');
            const updateBtn = document.getElementById('update-form-btn');
            updateForm.style.visibility = 'hidden';
            overlay.style.opacity = '0';
            popup.remove();
            updateBtn.remove();
        });
        updateFieldTT.append(labelUpdateTT, inputUpdateTT);
        updateFieldDes.append(labelUpdateDes, inputUpdateDes);
        updateFieldCate.append(labelUpdateCate, inputUpdateCate);
        updateFieldAu.append(labelUpdateAu, inputUpdateAu);
        updateFieldImg.append(labelUpdateImg, inputUpdateImg);
        const btn = document.createElement('div');
        btn.className = "update-form-btn";
        btn.id = "update-form-btn";
        btn.append(btnUpdate, btnClose);
        popup.append(editTitle, updateFieldTT, updateFieldDes, updateFieldCate, updateFieldAu, updateFieldImg);
        update.append(popup, btn);
    }
    bindUpdateBook(handler) {
        this.booklist.addEventListener('click', (e1)=>{
            if (e1.target.className === 'edit-btn') {
                const id = e1.target.parentElement.id;
                // console.log(id)
                this.updateTitle = document.getElementById('update-title');
                this.updateAuthor = document.getElementById('update-author');
                this.updateDes = document.getElementById('update-des');
                this.updateImg = document.getElementById('update-image');
                this.updateCate = document.getElementById('update-cate');
                this.formUpdate.addEventListener('click', (e)=>{
                    if (e.target.className === 'btn-update') {
                        console.log(id);
                        handler(id, this.updateTitle.value, this.updateAuthor.value, this.updateDes.value, this.updateCate.value, this.updateImg.value);
                        const popup = document.getElementById('popup');
                        popup.remove();
                        const updateForm = document.getElementById('update-form-btn');
                        updateForm.remove();
                    }
                });
            }
        });
    }
    bindDeleteBook(handler) {
        this.booklist.addEventListener('click', (e)=>{
            // e.preventDefault()
            if (e.target.className === 'delete-btn') {
                const id = e.target.parentElement.id;
                handler(id);
            }
        });
    }
    bindSearchBook(handler) {
        this.search.addEventListener('click', ()=>{
            if (this.inputSearch.vale !== "") handler(this.inputSearch.value);
        });
    }
    bindFilterBook(handler) {
        // console.log(this.checkCate)
        for (let check of this.checkCate)check.addEventListener('click', ()=>{
            if (check.checked) {
                console.log(check.value);
                handler(check.value);
            }
        });
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aOoxC","gLLPy"], "gLLPy", "parcelRequire09fa")

//# sourceMappingURL=index.4d6bcbeb.js.map
