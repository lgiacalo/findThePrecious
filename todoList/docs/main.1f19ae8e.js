// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var superToggle = function superToggle(el, classes) {
  classes.forEach(function (cl) {
    return el.classList.toggle(cl);
  });
};

function getItemLocalStorage(id) {
  var items = getItemsLocalStorage();
  return items.find(function (it) {
    return it.id == id;
  });
}

function getItemsLocalStorage() {
  return JSON.parse(localStorage.getItem("items"));
}

function removeItemLocalStorage(value) {
  var items = JSON.parse(localStorage.getItem("items"));
  var newItems = items.filter(function (i) {
    return i.title !== value;
  });
  localStorage.setItem("items", JSON.stringify(newItems));
}

function recordItemLocalStorage(value) {
  var _JSON$parse;

  var items = (_JSON$parse = JSON.parse(localStorage.getItem("items"))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  var id = items.length ? items[items.length - 1].id + 1 : 1;
  if (items.some(function (i) {
    return i.title === value;
  })) return false;
  items.push({
    id: id,
    title: value,
    check: false,
    comm: {}
  });
  localStorage.setItem("items", JSON.stringify(items));
  return id;
}

function toggleCheckLocalStorage(value) {
  var items = JSON.parse(localStorage.getItem("items"));
  var it = items.find(function (it) {
    return it.title === value;
  });
  it.check = !it.check;
  localStorage.setItem("items", JSON.stringify(items));
}

var templateLi = document.querySelector(".d-none li");
var classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];
var listItems = document.getElementById("list-items");

function initTodoListItems() {
  var _getItemsLocalStorage;

  var items = (_getItemsLocalStorage = getItemsLocalStorage()) !== null && _getItemsLocalStorage !== void 0 ? _getItemsLocalStorage : [];
  items.forEach(function (it) {
    var li = createNewItem(it.title, it.id, it.check);
    setEventButton(li);
  });
}

function createNewItem(value, id, check) {
  var cloneli = templateLi.cloneNode(true);
  cloneli.querySelector("a").textContent = value;

  if (check) {
    superToggle(cloneli.querySelector("i"), classNameButton);
    cloneli.querySelector("span").classList.toggle("item-check");
  }

  listItems.insertAdjacentElement('afterbegin', cloneli);
  cloneli.querySelector("a").href += id;
  return cloneli;
}

function setEventButton(item) {
  var value = item.querySelector("a").textContent.trim();
  item.querySelector(".button-check").addEventListener("click", function (e) {
    superToggle(e.target, classNameButton);
    item.querySelector("span").classList.toggle("item-check");
    toggleCheckLocalStorage(value);
  });
  item.querySelector(".button-delete").addEventListener("click", function (e) {
    var li = this.parentElement;
    li.remove();
    removeItemLocalStorage(value);
  });
} // submit form - add new todo


var formTodo = document.querySelector(".js-form");

function gestionInputComm(id) {
  formTodo.onsubmit = function (e) {
    var inputComm = document.querySelector(".js-todo-input");
    e.preventDefault();

    if (inputComm.value.trim()) {
      console.log('input :>> ', inputComm.value);
    }

    inputComm.value = "";
  };
}

function gestionInputTodo() {
  formTodo.onsubmit = function (e) {
    var inputTodo = document.querySelector(".js-todo-input");
    e.preventDefault();

    if (inputTodo.value.trim()) {
      var id = recordItemLocalStorage(inputTodo.value.trim());

      if (id) {
        var newItem = createNewItem(inputTodo.value.trim(), id, false);
        setEventButton(newItem);
      }
    }

    inputTodo.value = "";
  };
} // gestion page.js
// page('/', index);
// page('/item/:id', item);
// page();


initTodoListItems(); // function index(e) {
// e.preventDefault();

toggleDisplayTodoItem("todo");
var desc = document.querySelector(".description");
desc.textContent = "What do you want to get done today?";
gestionInputTodo(); // }

function item(e) {
  e.preventDefault();
  console.log('e :>> ', e);
  var id = e.params.id || 0;
  toggleDisplayTodoItem("item");
  var desc = document.querySelector(".description");
  desc.textContent = "What comment would you like to add?";
  var item = getItemLocalStorage(id);

  if (!item) {
    console.log("pas d'item");
    page.redirect('/');
    return;
  }

  var h2 = document.querySelector(".title-todo");
  console.log('h2 :>> ', h2);
  h2.textContent = item.title;
  gestionInputComm(id);
}

function toggleDisplayTodoItem(cible) {
  var listTodo = document.querySelector("#list-items");
  var showItem = document.getElementById("show-item");
  var imgShow = document.querySelector(".img");
  console.log('imgShow :>> ', imgShow);

  if (cible === "todo") {
    listTodo.classList.remove("d-none");
    showItem.classList.add("d-none");
    imgShow.classList.remove("d-none");
  } else {
    listTodo.classList.add("d-none");
    showItem.classList.remove("d-none");
    imgShow.classList.add("d-none");
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64147" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map