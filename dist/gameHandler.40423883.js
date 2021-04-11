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
})({"gameHandler.js":[function(require,module,exports) {
var SolutionArray = ["Mexico", "China", "India", "Peru", "China", "Yemen", "Greece", "Germany", "China", "Pakistan", "China", "United States of America", "China", "Guatemala", "India", "Netherlands", "United Kingdom", "United States of America", "France", "Pakistan", "Hungary", "Egypt", "United Kingdom", "United States of America", "Egypt", "Iraq", "India", "Lebanon", "India", "Germany", "United Kingdom", "France", "Japan", "United Kingdom", "United States of America", "Russia", "Russia", "Italy", "Italy", "Greece", "Germany"];
var QuestionArray = ["Where did the Chili Pepper originate?", "Where was Pasta invented?", "Where were Chickens first domesticated?", "Where did Potatoes originate?", "Where was Salt first cultivated?", "Where were Coffee beans first used to make Coffee?", "Where were Magnets first discovered?", "Where was Protestantism Founded?", "Where were Candles invented?", "Where were Buttons invented?", "Where was Paper invented?", "Where were Headphones invented?", "Where was the Toothbrush invented?", "Where was the Syringe invented?", "Where was Chess invented?", "Where was the first-known Telescope invented?", "Where was the Fire-Extinguisher patented?", "Where was the first Stop-Sign created?", "Where was the Screwdriver invented?", "Where was the Cow domesticated?", "Where was the Rubik's Cube invented?", "Where were Umbrellas invented?", "Where did Baseball originate?", "Where was Basketball invented?", "Where were Scissors invented?", "Which country created the first Saddle?", "Where was steel first produced?", "Where were Coins first used?", "Which civilization first conceptualized the Numerical Zero? (0)", "Where was the First Newspaper printed?", "Where was the sewing Machine invented?", "Where did the Canning process first originate?", "Which country created the first Pocket Calculator?", "Where was the Lawnmower first invented?", "Which country created the first Atomic Bomb?", "Where was Powdered Milk invented?", "Which country invented the Space Toilet?", "Where was the Arduino Microcontroller created?", "Where was the Piano invented?", "Where were the first Olympic Games held?", "Where was the Printing Press invented?"];
var funFacts = ["All variety of Peppers originated in South America", "Marco Polo brough pasta back to Italy from china. The the proccess was industriallized and made world famous.", "All chickens are descendants of the Red Jungle Fowl.", "I swear its Idaho.", "The salt was harvested off of Lake Yungcheng in 6000 BC", "All coffee beans originated in Ethiopia, but a trader from Yemen was the first to drink them.", "A sheep herder noticed that the nails from his shoes stuck to the ground beneath him.", "Freedom of conscience had its limits.", "The first candles were made of whale fat.", "Buttons weren't designed to fasten clothes, but rather as a status symbol.", "Chinese invented paper from hemp. They later began to use tree bark, bamboo, and other plant fibers.", "Utah in 1910", "Life before 1400 must have smelled.", "The first syringe was made from a hollow bird bone.", "The horses were originally elephants.", "The first telescopes were used by sea merchants and the military", "The fire extinguisher was made from copper, held 3 gallons of extinguishing agent potassium carbonate solution (dry chemical), and contained compressed air.", "The original design for the stop-sign was black and white.", "They Were Invented During the Middle Ages.", "All cows are descendants from the now extinct 'Auroch'.", "The world record for solving a Rubik's Cube is 4.22 seconds.", "The word umbrella comes from the Latin word 'umbros' which means shade or shadow.", "Baseball fans eat enough hotdogs that can stretch from Dodger Stadium to Wrigley Field.", "The YMCA was the birthplace of Basketball.", "Most scissors are actually made to work best for people who are right-handed. Special reversed scissors for left-handed users are available.", "The first saddle is believed to have been invented in 365 AD by the Sarmations.", "Steel was first produced around 400 BC", "According to Herdotous (I, 94), coins were first minted by the Lydians, while Aristotle claims that the first coins were minted by Demodike of Kyrme, the wife of King Midas of Phrygia.", "The Myans also developed a concept for zero independantly of India in 3 BC", "The first paper was printed in 1690", "Sewing machines were an invention of the industrial revolution that made it possible to sew faster than people could sew by hand.", "Canned fruits and vegetables have the same nutrients as fresh and frozen options.", "abicus 2.0", "Beard Budding got the original idea from watching a cutting cylinder at a local cloth mill.", "Project Manhattan was considered the very first application of Project Managment.", "Powdered milk has the same nutrition as fresh milk.", "The astronauts fasten themselves to the toilet, so that, their body won't float away.", "Arduino is an open-source electronics platform based on easy-to-use hardware and software.", "The word piano is the shortened version of the word pianoforte, which means soft (piano) and loud (forte).", "he first Olympic Games took place in the 8th century B.C. in Olympia, Greece.", "The printing press was invented by German inventor Johannes Gutenberg around 1439."];
var strikes = 0;
var score = 0;
var randomNumber = Math.floor(Math.random() * QuestionArray.length);
document.getElementById("currQuest").innerHTML = QuestionArray[randomNumber];
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");
right.volume = 0.2;
wrong.volume = 0.2;
document.getElementById("displayGuess").addEventListener("click", function () {
  document.getElementById("correct").innerHTML = "";
  var previousQuestion = randomNumber;
  randomNumber = Math.floor(Math.random() * QuestionArray.length);
  document.getElementById("currQuest").innerHTML = QuestionArray[randomNumber];
  var guess = document.getElementById("info").innerHTML;

  if (guess == SolutionArray[previousQuestion]) {
    right.play();
    score = score + 1;
    document.getElementById("correct").innerHTML = "That is Correct!";
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("correct").style.color = "black";
    document.getElementById("funfact").innerHTML = funFacts[previousQuestion];
  } else {
    wrong.play();
    strikes = strikes + 1;
    document.getElementById("strike").innerHTML = "Strikes: " + strikes + "/3";
    document.getElementById("correct").innerHTML = "Sorry, the correct answer is " + SolutionArray[previousQuestion];
    document.getElementById("correct").style.color = "red";
    document.getElementById("funfact").innerHTML = " ";
  }

  if (strikes >= 3) {
    score = 0;
    strikes = 0;
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("strike").innerHTML = "Strike: 0/3";
    document.getElementById("correct").innerHTML = "Better luck next time";
  }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55415" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","gameHandler.js"], null)
//# sourceMappingURL=/gameHandler.40423883.js.map