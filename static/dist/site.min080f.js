(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    "use strict";

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    /*! modernizr 3.6.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-svgfilters-setclasses !*/
    !function (n, e, s) {
      function o(n, e) {
        return _typeof(n) === e;
      }

      function a() {
        var n, e, s, a, t, r, f;

        for (var c in l) {
          if (l.hasOwnProperty(c)) {
            if (n = [], e = l[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) {
              for (s = 0; s < e.options.aliases.length; s++) {
                n.push(e.options.aliases[s].toLowerCase());
              }
            }

            for (a = o(e.fn, "function") ? e.fn() : e.fn, t = 0; t < n.length; t++) {
              r = n[t], f = r.split("."), 1 === f.length ? Modernizr[f[0]] = a : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), Modernizr[f[0]][f[1]] = a), i.push((a ? "" : "no-") + f.join("-"));
            }
          }
        }
      }

      function t(n) {
        var e = f.className,
          s = Modernizr._config.classPrefix || "";

        if (c && (e = e.baseVal), Modernizr._config.enableJSClass) {
          var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
          e = e.replace(o, "$1" + s + "js$2");
        }

        Modernizr._config.enableClasses && (e += " " + s + n.join(" " + s), c ? f.className.baseVal = e : f.className = e);
      }

      var i = [],
        l = [],
        r = {
          _version: "3.6.0",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
          },
          _q: [],
          on: function on(n, e) {
            var s = this;
            setTimeout(function () {
              e(s[n]);
            }, 0);
          },
          addTest: function addTest(n, e, s) {
            l.push({
              name: n,
              fn: e,
              options: s
            });
          },
          addAsyncTest: function addAsyncTest(n) {
            l.push({
              name: null,
              fn: n
            });
          }
        },
        Modernizr = function Modernizr() { };

      Modernizr.prototype = r, Modernizr = new Modernizr();
      var f = e.documentElement,
        c = "svg" === f.nodeName.toLowerCase();
      Modernizr.addTest("svgfilters", function () {
        var e = !1;

        try {
          e = "SVGFEColorMatrixElement" in n && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
        } catch (s) { }

        return e;
      }), a(), t(i), delete r.addTest, delete r.addAsyncTest;

      for (var u = 0; u < Modernizr._q.length; u++) {
        Modernizr._q[u]();
      }

      n.Modernizr = Modernizr;
    }(window, document);

  }, {}], 2: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var gdprHack = function gdprHack() {
      var gdprLink = document.querySelector(".gdpr-link");

      if (!gdprLink) {
        return;
      }

      gdprLink.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#moove_gdpr_save_popup_settings_button").click();
      });
    };

    var _default = gdprHack;
    exports.default = _default;

  }, {}], 3: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var hotspot = function hotspot() {
      var hotspots = document.querySelectorAll(".js-hotspot");
      var _a = hotspots;

      var _f = function _f(spot) {
        spot.querySelector(".js-hotspot-indicator").addEventListener("click", function () {
          if (spot.classList.contains("active")) {
            spot.classList.remove("active");
          } else {
            spot.classList.add("active");
          }
        });
      };

      for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
      }

      undefined;
    };

    var _default = hotspot;
    exports.default = _default;

  }, {}], 4: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var loadGifs = function loadGifs() {
      var gifs = document.querySelectorAll(".js-gif"); // if (window.innerWidth > 767) {

      var _a = gifs;

      var _f = function _f(gif) {
        gif.setAttribute("src", gif.getAttribute("data-src"));
      };

      for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
      }

      undefined; // }
    };

    var _default = loadGifs;
    exports.default = _default;

  }, {}], 5: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var mail = function mail() {
      var mailButton = document.querySelector(".js-footer-mail");
      var footerForm = document.querySelector(".js-footer-form");
      var footer = document.querySelector(".js-footer");
      var footerFormInner = document.querySelector(".js-footer-form-inner");

      if (!mailButton) {
        return;
      }

      mailButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (footerForm.getAttribute("data-status") === "opened") {
          footerForm.style.height = 0;
          footerForm.setAttribute("data-status", "closed");
          footer.classList.remove("opened");
          mailButton.classList.remove("active");
        } else {
          footerForm.style.height = footerFormInner.getBoundingClientRect().height + "px";
          footerForm.setAttribute("data-status", "opened");
          footer.classList.add("opened");
          mailButton.classList.add("active");
        }
      });
    };

    var _default = mail;
    exports.default = _default;

  }, {}], 6: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _gsap = _interopRequireDefault(require("gsap"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var menu = function menu() {
      var hamburger = document.querySelector(".js-hamburger");
      var menu = document.querySelector(".js-menu");
      var menuBg = document.querySelector(".js-menu-bg");
      var logo = document.querySelector(".js-menu-logo");
      var navItems = document.querySelectorAll(".js-menu-nav-item");
      var socialIcons = document.querySelectorAll(".js-menu-nav-icon");

      var timeline = _gsap.default.timeline({
        paused: true,
        reversed: true
      });

      timeline.to(menuBg, {
        duration: 0.3,
        scaleY: 1
      });
      timeline.to(logo, {
        duration: 0.3,
        opacity: 1,
        y: 0
      }, "-=0.25");
      var _a = navItems;

      var _f = function _f(item) {
        timeline.to(item, {
          duration: 0.3,
          opacity: 1,
          y: 0
        }, "-=0.25");
      };

      for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
      }

      undefined;
      var _a2 = socialIcons;

      var _f2 = function _f2(item, index) {
        timeline.to(item, {
          duration: 0.3,
          opacity: 1,
          y: 0
        }, index * 0.1 + 0.2);
      };

      for (var _i2 = 0; _i2 < _a2.length; _i2++) {
        _f2(_a2[_i2], _i2, _a2);
      }

      undefined;
      hamburger.addEventListener("click", function () {
        if (hamburger.classList.contains("active")) {
          hamburger.classList.remove("active");
          menu.classList.remove("active");
          timeline.reverse();
        } else {
          hamburger.classList.add("active");
          menu.classList.add("active");
          timeline.play();
        }
      });

      window.closeMenu = function () {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        timeline.reverse();
      };

      var skip = document.querySelector(".js-skip-intro");

      if (!skip) {
        hamburger.classList.add("active");
        menu.classList.add("active");
        timeline.play();
      }
    };

    var _default = menu;
    exports.default = _default;

  }, { "gsap": 16 }], 7: [function (require, module, exports) {
    "use strict";

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _gsap = _interopRequireWildcard(require("gsap"));

    var _ScrollTrigger = _interopRequireDefault(require("gsap/dist/ScrollTrigger"));

    var _ScrollToPlugin = _interopRequireDefault(require("gsap/dist/ScrollToPlugin"));

    var _locomotiveScroll = _interopRequireDefault(require("locomotive-scroll"));

    var _loadGifs = _interopRequireDefault(require("./loadGifs"));

    var _howler = require("howler");

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") { return null; } var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    _gsap.default.registerPlugin(_ScrollTrigger.default, _ScrollToPlugin.default);

    var parallax = function parallax() {
      window.scrollTo(0, 0);
      var skip = document.querySelector(".js-skip-intro");

      if (!skip) {
        document.documentElement.style.overflow = "auto";
        document.querySelector("body").style.overflow = "auto";
        return;
      }

      if (window.innerWidth <= 767) {
        _ScrollTrigger.default.config({
          // default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
        });
      }

      var itsLoco = false;
      var locoScroll;
      var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || window.innerWidth < 1024;

      if (!isMobile) {
        itsLoco = true;
        locoScroll = new _locomotiveScroll.default({
          el: document.querySelector(".smooth-scroll"),
          smooth: true
        });
        locoScroll.on("scroll", _ScrollTrigger.default.update);

        _ScrollTrigger.default.scrollerProxy(".smooth-scroll", {
          scrollTop: function scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect: function getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          pinType: "transform"
        });

        _ScrollTrigger.default.addEventListener("refresh", function () {
          return locoScroll.update();
        });
      } else {
        document.querySelector(".js-main").classList.remove("smooth-scroll");
        document.documentElement.style.overflow = "auto";
        document.querySelector("body").style.overflow = "auto";
      }

      var skipTarget = document.querySelector(".js-skip-target");
      var skipDuration = 3;
      skip.addEventListener("click", function () {
        skip.classList.remove("show");
        skip.classList.add("remove");

        if (itsLoco) {
          locoScroll.scrollTo(skipTarget, {
            duration: skipDuration * 1000
          });
        } else {
          _gsap.default.to(window, {
            duration: skipDuration,
            scrollTo: skipTarget,
            ease: _gsap.Power1.easeInOut
          });
        }
      });
      var menuLogo = document.querySelector(".js-menu-logo");
      var scrollTopDuration = 0.5;
      menuLogo.addEventListener("click", function (e) {
        e.preventDefault();
        window.closeMenu();

        if (itsLoco) {
          locoScroll.scrollTo(0, {
            duration: scrollTopDuration * 1000
          });
        } else {
          _gsap.default.to(window, {
            duration: scrollTopDuration * 0.8,
            scrollTo: 0,
            ease: _gsap.Power1.easeInOut
          });
        }
      });


       

      var activeVolume = "sea";
      var soundControl = document.querySelector(".js-sound-control");
      var musicPlayed = false; // const seaAudio = document.querySelector(".js-sea-music");

      var seaAudio = new _howler.Howl({
        src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/sea.ogg"), "".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/sea.mp4")],
        loop: true,
        volume: 0
      });
      var seaVolume = 0.35;
      var seaVolumeObject = {
        volume: 0
      }; // const rocksAudio = document.querySelector(".js-rocks-music");

      var rocksAudio = new _howler.Howl({
        src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/rocks.ogg"), "".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/rocks.mp3")],
        loop: true,
        volume: 0
      });
      var rocksVolume = 0;
      var rocksVolumeObject = {
        volume: 0
      }; // const forestAudio = document.querySelector(".js-forest-music");

      var forestAudio = new _howler.Howl({
        src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/forest.ogg"), "".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/forest.mp3")],
        loop: true,
        volume: 0
      });
      var forestVolume = 0;
      var forestVolumeObject = {
        volume: 0
      }; // const waterfallAudio = document.querySelector(".js-waterfall-music");

      var waterfallAudio = new _howler.Howl({
        src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/waterfall.ogg"), "".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/waterfall.mp3")],
        loop: true,
        volume: 0
      });
      var waterfallVolume = 0;
      var waterfallVolumeObject = {
        volume: 0
      }; // const branchAudio = document.querySelector(".js-branch-music");

      var branchAudio = new _howler.Howl({
        src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/branch.mp3")],
        loop: false,
        volume: 1
      });

      var setVolume = function setVolume(audioObj, audioEl, volume) {
        if (window.musicActive) {
          if (!musicPlayed) {
            seaAudio.play();
            rocksAudio.play();
            forestAudio.play();
            waterfallAudio.play();
            musicPlayed = true;
          }

          _gsap.default.to(audioObj, {
            volume: volume,
            duration: 0.5,
            onUpdate: function onUpdate() {
              audioEl.volume(audioObj.volume);
            }
          });
        }
      }; // if (musicPromise !== undefined) {
      //   musicPromise
      //     .then(() => {
      //       soundControl.classList.add("active");
      //       seaAudio.volume = 0.35;
      //       seaVolumeObject.volume = 0.35;
      //       window.musicActive = true;
      //     })
      //     .catch((error) => {
      //       seaAudio.volume = 0;
      //       seaVolumeObject.volume = 0;
      //       window.musicActive = false;
      //     });
      // }


      soundControl.addEventListener("click", function () {
        if (soundControl.classList.contains("active")) {
          soundControl.classList.remove("active");
          setVolume(seaVolumeObject, seaAudio, 0);
          setVolume(rocksVolumeObject, rocksAudio, 0);
          setVolume(forestVolumeObject, forestAudio, 0);
          setVolume(waterfallVolumeObject, waterfallAudio, 0);
          window.musicActive = false;
        } else {
          window.musicActive = true;
          soundControl.classList.add("active");
          setVolume(seaVolumeObject, seaAudio, seaVolume);
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });
      var scrollActive = false;
      var seaBox = document.querySelector(".js-sea-box");
      var seaText = document.querySelector(".js-sea-text");

      if (window.innerWidth > 767) {
        _gsap.default.to(seaBox, {
          scrollTrigger: {
            trigger: seaBox,
            start: "top top",
            end: function end() {
              return 4.94791666667 * window.innerWidth;
            },
            pin: true,
            scroller: itsLoco ? ".smooth-scroll" : window
          }
        });
      }

      var sea = document.querySelector(".js-sea");
      var seaTrigger = document.querySelector(".js-sea-trigger");

      if (window.innerWidth > 767) {
        _gsap.default.to(sea, {
          scrollTrigger: {
            trigger: seaTrigger,
            start: "top top",
            end: function end() {
              return 2.60416666667 * window.innerWidth;
            },
            scrub: true,
            scroller: itsLoco ? ".smooth-scroll" : window
          },
          y: -320,
          x: 180,
          rotation: -3
        });
      }

      var seaTextTriggerThree = document.querySelector(".js-sea-text-trigger-three");

      _gsap.default.to(seaTextTriggerThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: seaTextTriggerThree,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          skip.classList.remove("show");

          if (!scrollActive) {
            seaText.classList.remove("show-first");
            seaText.classList.add("show-second");
            seaText.classList.remove("show-third");
            seaText.classList.remove("show-fourth");
          }
        },
        onReverseComplete: function onReverseComplete() {
          if (!scrollActive) {
            seaText.classList.add("show-first");
            seaText.classList.remove("show-second");
            seaText.classList.remove("show-third");
            seaText.classList.remove("show-fourth");
          }
        }
      });

      var scrollActiveRock = false;
      var rockText = document.querySelector(".js-rock-text");
      var scrollActiveBush = false;
      var bushText = document.querySelector(".js-bushes-text");
      var rockTextTriggerOne = document.querySelector(".js-rock-text-trigger-two");

      _gsap.default.to(rockTextTriggerOne, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockTextTriggerOne,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          if (!scrollActiveRock) {
            rockText.classList.add("show-first");
            rockText.classList.remove("show-second");
            rockText.classList.remove("show-third");
            rockText.classList.remove("show-fourth");
          }
        }
      });

      var rockTextTriggerTwo = document.querySelector(".js-rock-text-trigger-two");

      _gsap.default.to(rockTextTriggerTwo, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockTextTriggerTwo,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          rocksVolume = 0.1;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rocksVolume = 0.25;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      var rockTextTriggerThree = document.querySelector(".js-rock-text-trigger-three");

      _gsap.default.to(rockTextTriggerThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockTextTriggerThree,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          rocksVolume = 0.05;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);

          if (!scrollActiveRock) {
            rockText.classList.remove("show-first");
            rockText.classList.add("show-second");
            rockText.classList.remove("show-third");
            rockText.classList.remove("show-fourth");
          }
        },
        onReverseComplete: function onReverseComplete() {
          rocksVolume = 0.15;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);

          if (!scrollActiveRock) {
            rockText.classList.add("show-first");
            rockText.classList.remove("show-second");
            rockText.classList.remove("show-third");
            rockText.classList.remove("show-fourth");
          }
        }
      });

      var rockSoundTriggerOne = document.querySelector(".js-rock-sound-one");

      _gsap.default.to(rockSoundTriggerOne, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockSoundTriggerOne,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          rocksVolume = 0.03;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rocksVolume = 0.05;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      var rockSoundTriggerTwo = document.querySelector(".js-rock-sound-two");

      _gsap.default.to(rockSoundTriggerTwo, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockSoundTriggerTwo,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          rocksVolume = 0;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          forestVolume = 0.1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rocksVolume = 0.05;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          forestVolume = 0;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        }
      });

      var rockSoundTriggerThree = document.querySelector(".js-rock-sound-three");

      _gsap.default.to(rockSoundTriggerThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockSoundTriggerThree,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          forestVolume = 0.5;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        },
        onReverseComplete: function onReverseComplete() {
          forestVolume = 0.1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        }
      });

      var bushTextTriggerTwo = document.querySelector(".js-bush-text-trigger-two");

      _gsap.default.to(bushTextTriggerTwo, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: bushTextTriggerTwo,
          start: "top top",
          scrub: true,
          end: 10
        }
      });

      var bushTextTriggerThree = document.querySelector(".js-bush-text-trigger-three");

      _gsap.default.to(bushTextTriggerThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: bushTextTriggerThree,
          start: "top top",
          scrub: true,
          end: 10
        },
        onStart: function onStart() {
          if (!scrollActiveBush) {
            bushText.classList.remove("show-first");
            bushText.classList.add("show-second");
            bushText.classList.remove("show-third");
            bushText.classList.remove("show-fourth");
          }
        },
        onReverseComplete: function onReverseComplete() {
          if (!scrollActiveBush) {
            bushText.classList.add("show-first");
            bushText.classList.remove("show-second");
            bushText.classList.remove("show-third");
            bushText.classList.remove("show-fourth");
          }
        }
      });

      var bushTextTriggerFour = document.querySelector(".js-bush-text-trigger-four");

      if (window.innerWidth > 767) {
        var cloudOne = document.querySelector(".js-cloud-one");

        _gsap.default.to(cloudOne, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: seaTrigger,
            start: "top top",
            end: function end() {
              return 3.125 * window.innerWidth;
            },
            scrub: true
          },
          y: "-78.125vw"
        });

        var cloudTwo = document.querySelector(".js-cloud-two");

        _gsap.default.to(cloudTwo, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: seaTrigger,
            start: "top top",
            end: function end() {
              return 2.08333333333 * window.innerWidth;
            },
            scrub: true
          },
          y: "-20.83333333vw",
          x: "2.604166667vw"
        });

        var cloudThree = document.querySelector(".js-cloud-three");

        _gsap.default.to(cloudThree, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: seaTrigger,
            start: "top top",
            end: function end() {
              return 3.125 * window.innerWidth;
            },
            scrub: true
          },
          y: "-41.6666666vw",
          x: "5.208333333vw"
        });

        var cloudFour = document.querySelector(".js-cloud-four");

        _gsap.default.to(cloudFour, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: seaTrigger,
            start: "top top",
            end: function end() {
              return 3.125 * window.innerWidth;
            },
            scrub: true
          },
          y: "-104.1666667vw",
          x: "5.208333333vw"
        });
      }

      var rockZero = document.querySelector(".js-rock-zero");
      var rockZeroTrigger = document.querySelector(".js-rock-trigger-zero");

      _gsap.default.to(rockZero, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockZeroTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        scale: 1,
        onStart: function onStart() {
          seaVolume = 0.7;
          setVolume(seaVolumeObject, seaAudio, 0.25);
        },
        onReverseComplete: function onReverseComplete() {
          seaVolume = 1;
          setVolume(seaVolumeObject, seaAudio, 0.35);
        }
      });

      var rockOne = document.querySelector(".js-rock-one");
      var rockOneTrigger = document.querySelector(".js-rock-trigger-one");

      _gsap.default.to(rockOne, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockOneTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        scale: 1
      });

      var rockTwo = document.querySelector(".js-rock-two");
      var rockBoxTwo = document.querySelector(".js-rock-box-two");
      var rockTwoTrigger = document.querySelector(".js-rock-trigger-two");

      _gsap.default.to(rockTwo, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockTwoTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        scale: 1,
        onStart: function onStart() {
          rockBoxTwo.style.display = "block";
          skipDuration = 2.5;
          fruskaGoraDuration = 3;
          negaziranaDuration = 3.5;
          vitaminskaDuration = 4.5;
          imunoDuration = 4.5;
          contactDuration = 5;
          seaVolume = 0.3;
          setVolume(seaVolumeObject, seaAudio, 0.1);
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxTwo.style.display = "none";
          skipDuration = 3;
          fruskaGoraDuration = 3.5;
          negaziranaDuration = 4;
          vitaminskaDuration = 5;
          imunoDuration = 5;
          contactDuration = 5.5;
          seaVolume = 0.7;
          setVolume(seaVolumeObject, seaAudio, 0.25);
        }
      });

      var rockThree = document.querySelector(".js-rock-three");
      var rockBoxThree = document.querySelector(".js-rock-box-three");
      var rockThreeTrigger = document.querySelector(".js-rock-trigger-three");

      _gsap.default.to(rockThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockThreeTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        scale: 1,
        onStart: function onStart() {
          rockBoxThree.style.visibility = "visible";
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxThree.style.visibility = "hidden";
        }
      });

      if (window.innerWidth > 767) {
        var rockFour = document.querySelector(".js-rock-four");
        var rockBoxFour = document.querySelector(".js-rock-box-four");
        var rockFourTrigger = document.querySelector(".js-rock-trigger-four");

        _gsap.default.to(rockFour, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockFourTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxFour.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxFour.style.opacity = 0;
          }
        });
      }

      var rockFive = document.querySelector(".js-rock-five");
      var rockBoxFive = document.querySelector(".js-rock-box-five");
      var rockFiveTrigger = document.querySelector(".js-rock-trigger-five");

      _gsap.default.to(rockFive, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockFiveTrigger,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              return "+=".concat(0.078125 * window.innerWidth);
            } else {
              return 10;
            }
          },
          scrub: true
        },
        scale: function scale() {
          if (window.innerWidth > 767) {
            return 1;
          } else {
            return 0;
          }
        },
        onStart: function onStart() {
          rockBoxFive.style.opacity = 1;
          seaVolume = 0.02;
          setVolume(seaVolumeObject, seaAudio, 0.02);
          rocksVolume = 0.02;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxFive.style.opacity = 0;
          seaVolume = 0.1;
          setVolume(seaVolumeObject, seaAudio, 0.1);
          rocksVolume = 0;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      if (window.innerWidth > 767) {
        var rockSix = document.querySelector(".js-rock-six");
        var rockBoxSix = document.querySelector(".js-rock-box-six");
        var rockSixTrigger = document.querySelector(".js-rock-trigger-six");

        _gsap.default.to(rockSix, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockSixTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxSix.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxSix.style.opacity = 0;
          }
        });

        var rockSeven = document.querySelector(".js-rock-seven");
        var rockBoxSeven = document.querySelector(".js-rock-box-seven");
        var rockSevenTrigger = document.querySelector(".js-rock-trigger-seven");

        _gsap.default.to(rockSeven, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockSevenTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxSeven.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxSeven.style.opacity = 0;
          }
        });

        var rockEight = document.querySelector(".js-rock-eight");
        var rockBoxEight = document.querySelector(".js-rock-box-eight");
        var rockEightTrigger = document.querySelector(".js-rock-trigger-eight");

        _gsap.default.to(rockEight, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockEightTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxEight.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxEight.style.opacity = 0;
          }
        });
      }

      var rockNine = document.querySelector(".js-rock-nine");
      var rockBoxNine = document.querySelector(".js-rock-box-nine");
      var rockNineTrigger = document.querySelector(".js-rock-trigger-nine");

      _gsap.default.to(rockNine, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockNineTrigger,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              "+=".concat(0.078125 * window.innerWidth);
            } else {
              return 10;
            }
          },
          scrub: true
        },
        scale: function scale() {
          if (window.innerWidth > 767) {
            return 1;
          } else {
            return 0;
          }
        },
        onStart: function onStart() {
          rockBoxNine.style.opacity = 1;
          rocksVolume = 0.25;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxNine.style.opacity = 0;
          rocksVolume = 0.1;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      if (window.innerWidth > 767) {
        var rockTen = document.querySelector(".js-rock-ten");
        var rockBoxTen = document.querySelector(".js-rock-box-ten");
        var rockTenTrigger = document.querySelector(".js-rock-trigger-ten");

        _gsap.default.to(rockTen, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockTenTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxTen.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxTen.style.opacity = 0;
          }
        });
      }

      var rockElewen = document.querySelector(".js-rock-elewen");
      var rockBoxElewen = document.querySelector(".js-rock-box-elewen");
      var rockElewenTrigger = document.querySelector(".js-rock-trigger-elewen");

      _gsap.default.to(rockElewen, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockElewenTrigger,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              "+=".concat(0.078125 * window.innerWidth);
            } else {
              return 10;
            }
          },
          scrub: true
        },
        scale: function scale() {
          if (window.innerWidth > 767) {
            return 1;
          } else {
            return 0;
          }
        },
        onStart: function onStart() {
          rockBoxElewen.style.opacity = 1;
          rocksVolume = 0.3;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxElewen.style.opacity = 0;
          rocksVolume = 0.1;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      if (window.innerWidth > 767) {
        var rockTwelve = document.querySelector(".js-rock-twelve");
        var rockBoxTwelve = document.querySelector(".js-rock-box-twelve");
        var rockTwelveTrigger = document.querySelector(".js-rock-trigger-twelve");

        _gsap.default.to(rockTwelve, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: rockTwelveTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(0.078125 * window.innerWidth);
            },
            scrub: true
          },
          scale: 1,
          onStart: function onStart() {
            rockBoxTwelve.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            rockBoxTwelve.style.opacity = 0;
          }
        });
      }

      var rockThirteen = document.querySelector(".js-rock-thirteen");
      var rockBoxThirteen = document.querySelector(".js-rock-box-thirteen");
      var rockThirteenTrigger = document.querySelector(".js-rock-trigger-thirteen");

      _gsap.default.to(rockThirteen, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockThirteenTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        x: 0,
        y: 0,
        onStart: function onStart() {
          rockBoxThirteen.style.display = "block";
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxThirteen.style.display = "none";
        }
      });

      var rockFourteen = document.querySelector(".js-rock-fourteen");
      var rockBoxFourteen = document.querySelector(".js-rock-box-fourteen");

      _gsap.default.to(rockFourteen, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rockThirteenTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(0.078125 * window.innerWidth);
          },
          scrub: true
        },
        x: 0,
        y: 0,
        onStart: function onStart() {
          rockBoxFourteen.style.display = "block";
          seaVolume = 0;
          setVolume(seaVolumeObject, seaAudio, 0);
          rocksVolume = 0.4;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        },
        onReverseComplete: function onReverseComplete() {
          rockBoxFourteen.style.display = "none";
          seaVolume = 0.05;
          setVolume(seaVolumeObject, seaAudio, 0.05);
          rocksVolume = 0.25;
          setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
        }
      });

      var skyTrigger = document.querySelector(".js-sky-trigger");
      var skyImg = document.querySelector(".js-sky-img");

      _gsap.default.to(skyImg, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: skyTrigger,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              return "+=".concat(4.16666666667 * window.innerWidth);
            } else {
              return "+=".concat(2.96666666667 * window.innerWidth);
            }
          },
          scrub: true
        },
        y: function y() {
          if (window.innerWidth > 767) {
            return "100%";
          } else {
            return "77%";
          }
        },
        onStart: function onStart() {
          rockText.classList.add("active");
          scrollTopDuration = 0.8;
          (0, _loadGifs.default)();

          if (window.innerWidth < 767) {
            rocks.classList.add("active");
          }
        },
        onReverseComplete: function onReverseComplete() {
          rockText.classList.remove("active");
          scrollTopDuration = 0.5;

          if (window.innerWidth < 767) {
            rocks.classList.remove("active");
          }
        }
      });

      var rocks = document.querySelector(".js-rocks");

      if (window.innerWidth > 767) {
        _gsap.default.to(rocks, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: skyTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(1.82291666667 * window.innerWidth);
            },
            scrub: true
          },
          y: "10.83333333vw",
          ease: _gsap.Power1.easeIn,
          onStart: function onStart() {
            skipDuration = 2;
            fruskaGoraDuration = 2.5;
            negaziranaDuration = 3;
            vitaminskaDuration = 4;
            imunoDuration = 4;
            contactDuration = 4.5;
          },
          onReverseComplete: function onReverseComplete() {
            skipDuration = 3;
            fruskaGoraDuration = 3.5;
            fruskaGoraDuration = 4;
            vitaminskaDuration = 5;
            imunoDuration = 5;
            contactDuration = 5.5;
          }
        });
      } else {
        _gsap.default.to(rocks, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: skyTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(1.82291666667 * window.innerWidth);
            },
            scrub: true
          },
          ease: _gsap.Power1.easeIn,
          onStart: function onStart() {
            skipDuration = 2;
            fruskaGoraDuration = 2.5;
            negaziranaDuration = 3;
            vitaminskaDuration = 4;
            imunoDuration = 4;
            contactDuration = 4.5;
          },
          onReverseComplete: function onReverseComplete() {
            skipDuration = 3;
            fruskaGoraDuration = 3.5;
            fruskaGoraDuration = 4;
            vitaminskaDuration = 5;
            imunoDuration = 5;
            contactDuration = 5.5;
          }
        });
      }

      var cloudsTrigger = document.querySelector(".js-clouds-trigger");
      var cloudsImg = document.querySelector(".js-clouds-img");

      if (window.innerWidth > 767) {
        _gsap.default.to(cloudsImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: cloudsTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(2.86458333333 * window.innerWidth);
            },
            scrub: true
          },
          x: 0,
          y: "-33vw",
          onStart: function onStart() {
            cloudsImg.style.opacity = 1;
            rocksVolume = 0.4;
            setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          },
          onReverseComplete: function onReverseComplete() {
            cloudsImg.style.opacity = 0;
            rocksVolume = 0.5;
            setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          }
        });
      } else {
        _gsap.default.to(cloudsImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: cloudsTrigger,
            start: "top top",
            end: 10,
            scrub: true
          },
          onStart: function onStart() {
            rocksVolume = 0.4;
            setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          },
          onReverseComplete: function onReverseComplete() {
            rocksVolume = 0.5;
            setVolume(rocksVolumeObject, rocksAudio, rocksVolume);
          }
        });
      }

      var bushes = document.querySelector(".js-bushes-box");

      if (window.innerWidth > 767) {
        _gsap.default.to(bushes, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: bushes,
            start: "top top",
            end: function end() {
              return "+=".concat(3.86458333333 * window.innerWidth);
            },
            pin: true
          }
        });
      }

      var bushesImg = document.querySelector(".js-bushes-img");
      var bushesTrigger = document.querySelector(".js-bushes-trigger");

      _gsap.default.to(bushesImg, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: bushesTrigger,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              return "+=".concat(1.82291666667 * window.innerWidth);
            } else {
              return "+=".concat(3.2291666667 * window.innerWidth);
            }
          },
          scrub: true
        },
        y: function y() {
          if (window.innerWidth > 1500) {
            return "82vw";
          } else if (window.innerWidth > 767) {
            return "89vw";
          } else {
            return "140vh";
          }
        },
        onStart: function onStart() {
          scrollTopDuration = 2.5;
          bushText.classList.add("active");
          skip.classList.add("remove");
          skyImg.style.opacity = 0;
          rocks.style.opacity = 0;
          skipDuration = 1.5;
          fruskaGoraDuration = 2;
          negaziranaDuration = 2.5;
          vitaminskaDuration = 3.5;
          imunoDuration = 3.5;
          contactDuration = 4;
          forestVolume = 1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          jungleImg.style.opacity = 1;

          if (window.innerWidth < 767) {
            bushesImg.style.position = "fixed";
          }
        },
        onReverseComplete: function onReverseComplete() {
          scrollTopDuration = 1.2;
          bushText.classList.remove("active");
          skyImg.style.opacity = 1;
          rocks.style.opacity = 1;
          skipDuration = 2;
          fruskaGoraDuration = 2.5;
          negaziranaDuration = 3;
          vitaminskaDuration = 4;
          imunoDuration = 4;
          contactDuration = 4.5;
          forestVolume = 0.5;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          jungleImg.style.opacity = 0;

          if (window.innerWidth < 767) {
            bushesImg.style.position = "relative";
          }
        }
      });

      var jungleImg = document.querySelector(".js-jungle-img");

      if (window.innerWidth > 767) {
        _gsap.default.to(jungleImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: bushesTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(4.42708333333 * window.innerWidth);
            },
            scrub: true
          },
          x: "50%",
          onStart: function onStart() {
            jungleImg.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            jungleImg.style.opacity = 0;
          }
        });
      }

      var treeImg = document.querySelector(".js-tree-img");
      var treeTrigger = document.querySelector(".js-tree-trigger");

      if (window.innerWidth > 767) {
        _gsap.default.to(treeImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: treeTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(1.5625 * window.innerWidth);
            },
            scrub: true
          },
          x: "150vw",
          onStart: function onStart() {
            skipDuration = 1;
            fruskaGoraDuration = 1.5;
            negaziranaDuration = 1.8;
            vitaminskaDuration = 2.8;
            imunoDuration = 2.8;
            contactDuration = 3.2;
            treeImg.style.opacity = 1;
            forestVolume = 0.75;
            setVolume(forestVolumeObject, forestAudio, forestVolume);
          },
          onReverseComplete: function onReverseComplete() {
            skipDuration = 1.5;
            fruskaGoraDuration = 2;
            negaziranaDuration = 2.2;
            vitaminskaDuration = 3.2;
            imunoDuration = 3.2;
            contactDuration = 3.7;
            treeImg.style.opacity = 0;
            forestVolume = 1;
            setVolume(forestVolumeObject, forestAudio, forestVolume);
          }
        });
      } else {
        _gsap.default.to(treeImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: treeTrigger,
            start: "top top",
            end: 10,
            scrub: true
          },
          onStart: function onStart() {
            skipDuration = 1;
            fruskaGoraDuration = 1.5;
            negaziranaDuration = 1.8;
            vitaminskaDuration = 2.8;
            imunoDuration = 2.8;
            contactDuration = 3.2;
            treeImg.style.opacity = 1;
            forestVolume = 0.75;
            setVolume(forestVolumeObject, forestAudio, forestVolume);
          },
          onReverseComplete: function onReverseComplete() {
            skipDuration = 1.5;
            fruskaGoraDuration = 2;
            negaziranaDuration = 2.2;
            vitaminskaDuration = 3.2;
            imunoDuration = 3.2;
            contactDuration = 3.7;
            treeImg.style.opacity = 0;
            forestVolume = 1;
            setVolume(forestVolumeObject, forestAudio, forestVolume);
          }
        });
      }

      var fernImg = document.querySelector(".js-fern-img");
      var fernTrigger = document.querySelector(".js-fern-trigger");

      if (window.innerWidth > 767) {
        _gsap.default.to(fernImg, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: fernTrigger,
            start: "top top",
            end: function end() {
              return "+=".concat(1.5625 * window.innerWidth);
            },
            scrub: true
          },
          x: "150vw",
          onStart: function onStart() {
            fernImg.style.opacity = 1;
          },
          onReverseComplete: function onReverseComplete() {
            fernImg.style.opacity = 0;
          }
        });
      }

      var rightBush = document.querySelector(".js-right-bush-img");
      var rightBushTrigger = document.querySelector(".js-right-bush-trigger");
      var bannerBranchTwo = document.querySelector(".js-banner-branch-two");

      _gsap.default.to(rightBush, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: rightBushTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(2.86458333333 * window.innerWidth);
          },
          scrub: true
        },
        x: "150vw",
        onStart: function onStart() {
          rightBush.style.opacity = 1;
          rockText.style.display = "none";
          seaText.style.display = "none";
        },
        onReverseComplete: function onReverseComplete() {
          rightBush.style.opacity = 0;
          rockText.style.display = "block";
          seaText.style.display = "block";
        },
        onComplete: function onComplete() {
          bannerBranchTwo.classList.add("active");
        }
      });

      var leftBushBox = document.querySelector(".js-left-bush-box");
      var leftBush = document.querySelector(".js-left-bush-img");
      var leftBushTrigger = document.querySelector(".js-left-bush-trigger");

      _gsap.default.to(leftBushBox, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: leftBushTrigger,
          start: "top top",
          end: function end() {
            return "+=".concat(2.60416666667 * window.innerWidth);
          },
          scrub: true
        },
        x: function x() {
          if (window.innerWidth > 767) {
            return "150vw";
          } else {
            return "220vw";
          }
        },
        onStart: function onStart() {
          bushText.classList.remove("active");
          leftBush.style.opacity = 1;
        },
        onReverseComplete: function onReverseComplete() {
          bushText.classList.add("active");
          leftBush.style.opacity = 0;
        }
      });

      var forestSoundOne = document.querySelector(".js-forest-sound-trigger-one");

      _gsap.default.to(forestSoundOne, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: forestSoundOne,
          start: "top top",
          end: 10,
          scrub: true
        },
        onStart: function onStart() {
          forestVolume = 0.4;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        },
        onReverseComplete: function onReverseComplete() {
          forestVolume = 0.75;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        }
      });

      var forestSoundTwo = document.querySelector(".js-forest-sound-trigger-two");

      _gsap.default.to(forestSoundTwo, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: forestSoundTwo,
          start: "top top",
          end: 10,
          scrub: true
        },
        onStart: function onStart() {
          forestVolume = 0.1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          waterfallVolume = 0.01;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        },
        onReverseComplete: function onReverseComplete() {
          forestVolume = 0.4;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          waterfallVolume = 0;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var forestSoundThree = document.querySelector(".js-forest-sound-trigger-three");

      _gsap.default.to(forestSoundThree, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: forestSoundThree,
          start: "top top",
          end: 10,
          scrub: true
        },
        onStart: function onStart() {
          waterfallVolume = 0.15;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        },
        onReverseComplete: function onReverseComplete() {
          waterfallVolume = 0.1;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var forestSoundFour = document.querySelector(".js-forest-sound-trigger-four");

      _gsap.default.to(forestSoundFour, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: forestSoundFour,
          start: "top top",
          end: 10,
          scrub: true
        },
        onStart: function onStart() {
          waterfallVolume = 0.25;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        },
        onReverseComplete: function onReverseComplete() {
          waterfallVolume = 0.1;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var leftBushTriggerReverse = document.querySelector(".js-left-bush-trigger-reverse");
      var bannerLogo = document.querySelector(".js-banner-logo");
      var simbol = document.querySelector(".js-simbol");
      var butterfly = document.querySelector(".js-banner-butterfly");
      var butterflyTimeout;
      var showButterfly = true;
      var contentFix = document.querySelector(".js-content-fix");

      _gsap.default.to(leftBush, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: leftBushTriggerReverse,
          start: "top top",
          end: function end() {
            return "+=".concat(2.60416666667 * window.innerWidth);
          },
          scrub: true,
          onUpdate: function onUpdate(self) {
            leftBush.style.opacity = 1.25 - self.progress * 2;
            rightBush.style.opacity = 1.25 - self.progress * 2; // if (window.innerWidth <= 767) return;

            if (self.progress > 0.1 && window.innerWidth > 767) {
              bannerLogo.classList.add("active");
              simbol.classList.add("active");

              if (!butterflyTimeout && showButterfly) {
                showButterfly = false;
                butterfly.src = butterfly.getAttribute("data-src");
                butterfly.style.display = "block";
                butterflyTimeout = setTimeout(function () {
                  butterfly.src = "";
                  butterfly.style.display = "none";
                  butterflyTimeout = null;
                }, 11280);
              }
            } else if (self.progress > 0.25) {
              bannerLogo.classList.add("active");
              simbol.classList.add("active");

              if (!butterflyTimeout && showButterfly) {
                showButterfly = false;
                butterfly.src = butterfly.getAttribute("data-src");
                butterfly.style.display = "block";
                butterflyTimeout = setTimeout(function () {
                  butterfly.src = "";
                  butterfly.style.display = "none";
                  butterflyTimeout = null;
                }, 11280);
              }
            }
          }
        },
        x: function x() {
          if (window.innerWidth > 767) {
            return "-300vw";
          } else {
            return "-400vw";
          }
        },
        onStart: function onStart() {
          scrollTopDuration = 3;
          jungleImg.style.opacity = 0;
          bushesImg.style.display = "none";

          if (window.innerWidth <= 767) {
            contentFix.style.opacity = 1;
          }

          waterfallVolume = 0.1;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
          forestVolume = 0;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
        },
        onReverseComplete: function onReverseComplete() {
          scrollTopDuration = 2.5;
          jungleImg.style.opacity = 1;
          bushesImg.style.display = "block";
          waterfallVolume = 0.01;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
          forestVolume = 0.1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);

          if (!butterflyTimeout) {
            showButterfly = true;
          }

          if (window.innerWidth <= 767) {
            contentFix.style.opacity = 0;
            return;
          }

          bannerLogo.classList.remove("active");
          simbol.classList.remove("active");
          aboutHeadingVisible = false;
          about2HeadingVisible = false;
          about3HeadingVisible = false;
          aboutHeading.classList.remove("active");
          aboutRight.classList.remove("active");
          aboutLeafs.classList.remove("active");
          about2Heading.classList.remove("active");
          about2Right.classList.remove("active");
          about2Leafs.classList.remove("active");
          about3Heading.classList.remove("active");
          about3Right.classList.remove("active");
          aboutBranch.classList.remove("active");
        }
      });

      var bannerBuah = document.querySelector(".js-banner-bush-box");

      _gsap.default.to(bannerBuah, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: leftBushTriggerReverse,
          start: "top top",
          end: function end() {
            return "+=".concat(0.33083333333 * window.innerWidth);
          },
          scrub: true
        },
        y: "0"
      });

      var heroCloudOne = document.querySelector(".js-hero-cloud-one");
      var heroCloudTwo = document.querySelector(".js-hero-cloud-two");

      if (window.innerWidth > 767) {
        _gsap.default.to(heroCloudOne, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: leftBushTriggerReverse,
            start: "top top",
            end: function end() {
              return "+=".concat(6.25 * window.innerWidth);
            },
            scrub: true
          },
          x: "40%"
        });

        _gsap.default.to(heroCloudTwo, {
          scrollTrigger: {
            scroller: itsLoco ? ".smooth-scroll" : window,
            trigger: leftBushTriggerReverse,
            start: "top top",
            end: function end() {
              return "+=".concat(6.25 * window.innerWidth);
            },
            scrub: true
          },
          x: "40%"
        });
      }

      var content = document.querySelector(".js-content");
      var bushesMain = document.querySelector(".js-bushes");

      _gsap.default.to(content, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: content,
          start: "top top",
          end: function end() {
            if (window.innerWidth > 767) {
              return "+=".concat(0.8 * window.innerWidth);
            } else {
              return "+=".concat(1.25 * window.innerWidth);
            }
          },
          pin: true,
          scrub: true
        },
        onReverseComplete: function onReverseComplete() {
          bushesMain.classList.remove("hide");
        },
        onComplete: function onComplete() {
          bushesMain.classList.add("hide");
        }
      });

      var aboutHeading = document.querySelector(".js-about-heading");
      var aboutRight = document.querySelector(".js-about-right");
      var aboutHeadingTrigger = document.querySelector(".js-about-heading-trigger");
      var aboutLeafs = document.querySelector(".js-about-leafs");
      var aboutHeadingVisible = false;

      _gsap.default.to(aboutHeading, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: aboutHeadingTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onStart: function onStart() {
          scrollTopDuration = 3.6;
          vitaminskaDuration = 1.5;
          imunoDuration = 1.5;
          contactDuration = 2;
          forestVolume = 0.1;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          waterfallVolume = 0.1;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);

          if (window.innerWidth <= 767 || aboutHeadingVisible) {
            return;
          }

          if (window.musicActive) {
            branchAudio.play();
          }

          aboutHeading.classList.add("active");
          aboutRight.classList.add("active");
          aboutLeafs.classList.add("active");
          aboutHeadingVisible = true;
        },
        onReverseComplete: function onReverseComplete() {
          scrollTopDuration = 3;
          vitaminskaDuration = 2.2;
          imunoDuration = 2.2;
          contactDuration = 2.5;
          forestVolume = 0;
          setVolume(forestVolumeObject, forestAudio, forestVolume);
          waterfallVolume = 0.3;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var aboutBranchTrigger = document.querySelector(".js-about-branch-trigger");
      var aboutBranch = document.querySelector(".js-about-text-branch");

      _gsap.default.to(aboutBranchTrigger, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: aboutBranchTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onComplete: function onComplete() {
          if (window.innerWidth > 767) {
            aboutBranch.classList.add("active");
          }
        },
        onStart: function onStart() {
          waterfallVolume = 0.05;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        },
        onReverseComplete: function onReverseComplete() {
          waterfallVolume = 0.1;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var about2Heading = document.querySelector(".js-about2-heading");
      var about2Right = document.querySelector(".js-about2-right");
      var about2HeadingTrigger = document.querySelector(".js-about2-heading-trigger");
      var about2Leafs = document.querySelector(".js-about2-leafs");
      var about2HeadingVisible = false;

      _gsap.default.to(about2Heading, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: about2HeadingTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onStart: function onStart() {
          scrollTopDuration = 4.5;
          contactDuration = 2;

          if (about2HeadingVisible || window.innerWidth <= 767) {
            return;
          }

          if (window.musicActive) {
            branchAudio.play();
          }

          about2Heading.classList.add("active");
          about2Right.classList.add("active");
          about2Leafs.classList.add("active");
          about2HeadingVisible = true;
        },
        onReverseComplete: function onReverseComplete() {
          scrollTopDuration = 3.6;
          contactDuration = 2.5;
        }
      });

      var about3Heading = document.querySelector(".js-about3-heading");
      var about3Right = document.querySelector(".js-about3-right");
      var about3HeadingTrigger = document.querySelector(".js-about3-heading-trigger");
      var about3Leafs = document.querySelector(".js-about3-leafs");
      var about3HeadingVisible = false;

      _gsap.default.to(about3Heading, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: about3HeadingTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onStart: function onStart() {
          contactDuration = 1;
          scrollTopDuration = 5.5;
          waterfallVolume = 0;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);

          if (window.innerWidth <= 767 || about3HeadingVisible) {
            return;
          }

          if (window.musicActive) {
            branchAudio.play();
          }

          about3Heading.classList.add("active");
          about3Right.classList.add("active");
          about3Leafs.classList.add("active");
          about3HeadingVisible = true;
        },
        onReverseComplete: function onReverseComplete() {
          scrollTopDuration = 4.5;
          contactDuration = 1.5;
          waterfallVolume = 0.05;
          setVolume(waterfallVolumeObject, waterfallAudio, waterfallVolume);
        }
      });

      var about4Heading = document.querySelector(".js-about4-heading");
      var about4Right = document.querySelector(".js-about4-right");
      var about4HeadingTrigger = document.querySelector(".js-about4-heading-trigger");
      var about4Leafs = document.querySelector(".js-about4-leafs");
      var about4HeadingVisible = false;

      _gsap.default.to(about4Heading, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: about4HeadingTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onStart: function onStart() {
          if (window.innerWidth <= 767 || about4HeadingVisible) {
            return;
          }

          if (window.musicActive) {
            branchAudio.play();
          }

          about4Heading.classList.add("active");
          about4Right.classList.add("active");
          about4Leafs.classList.add("active");
          about4HeadingVisible = true;
        }
      });

      var imunoBottole = document.querySelector(".js-imuno-flasa");
      var imunoTitle = document.querySelector(".js-imuno-title");
      var imunoBottoleTrigger = document.querySelector(".js-imuno-flasa-trigger");
      var imunoActive = false;

      _gsap.default.to(imunoBottole, {
        scrollTrigger: {
          scroller: itsLoco ? ".smooth-scroll" : window,
          trigger: imunoBottoleTrigger,
          start: "top top",
          end: "+=10",
          pin: true,
          scrub: true
        },
        onStart: function onStart() {
          if (imunoActive) {
            return;
          }

          if (window.musicActive) {
            branchAudio.play();
          }

          imunoBottole.classList.remove("hidden");
          imunoTitle.classList.remove("hidden");
          imunoActive = true;
        }
      });

      _ScrollTrigger.default.refresh();

      setTimeout(function () {
        main.classList.remove("loading");
      }, 100);
      setTimeout(function () {
        if (window.location.search) {
          var dur = 0;
          var target;

          if (window.location.search === "?fruska-gora") {
            dur = fruskaGoraDuration;
            target = fruskaGoraTarget;
          } else if (window.location.search === "?negazirana") {
            dur = negaziranaDuration;
            target = negaziranaTarget;
          } else if (window.location.search === "?vitaminska") {
            dur = vitaminskaDuration;
            target = vitaminskaTarget;
          } else if (window.location.search === "?kontakt") {
            dur = contactDuration;
            target = contactTarget;
          } else if (window.location.search === "?imuno") {
            dur = imunoDuration;
            target = imunoTarget;
          }

          if (!target) {
            return;
          }

          if (locoScroll) {
            locoScroll.scrollTo(target, {
              duration: dur * 1000
            });
          } else {
            _gsap.default.to(window, {
              duration: dur,
              scrollTo: target,
              ease: _gsap.Power1.easeInOut
            });
          }
        }
      }, 300);
      var originaWidth = window.innerWidth;
      window.addEventListener("resize", function () {
        if (Math.abs(window.innerWidth - originaWidth) > 10) {
          location.reload();
        }
      });
    };

    var _default = parallax;
    exports.default = _default;

  }, { "./loadGifs": 4, "gsap": 16, "gsap/dist/ScrollToPlugin": 14, "gsap/dist/ScrollTrigger": 15, "howler": 17, "locomotive-scroll": 18 }], 8: [function (require, module, exports) {
    (function (global) {
      (function () {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        /* Polyfill service v3.102.0
         * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
         *
         * Features requested: CustomEvent
         *
         * - _ESAbstract.Call, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
         * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes")
         * - _ESAbstract.Get, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
         * - _ESAbstract.IsCallable, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
         * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.SameValueZero")
         * - _ESAbstract.ToObject, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.GetMethod", "_ESAbstract.GetV")
         * - _ESAbstract.GetV, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.GetMethod")
         * - _ESAbstract.GetMethod, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive")
         * - _ESAbstract.Type, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
         * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive")
         * - _ESAbstract.SameValueZero, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes")
         * - _ESAbstract.ToInteger, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToLength")
         * - _ESAbstract.ToLength, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes")
         * - _ESAbstract.ToPrimitive, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToString")
         * - _ESAbstract.ToString, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes")
         * - Array.prototype.includes, License: MIT (required by "CustomEvent", "Event")
         * - Event, License: CC0 (required by "CustomEvent")
         * - CustomEvent, License: CC0 */
        (function (self, undefined) {
          // _ESAbstract.Call

          /* global IsCallable */
          // 7.3.12. Call ( F, V [ , argumentsList ] )
          function Call(F, V
            /* [, argumentsList] */
          ) {
            // eslint-disable-line no-unused-vars
            // 1. If argumentsList is not present, set argumentsList to a new empty List.
            var argumentsList = arguments.length > 2 ? arguments[2] : []; // 2. If IsCallable(F) is false, throw a TypeError exception.

            if (IsCallable(F) === false) {
              throw new TypeError(Object.prototype.toString.call(F) + "is not a function.");
            } // 3. Return ? F.[[Call]](V, argumentsList).


            return F.apply(V, argumentsList);
          } // _ESAbstract.CreateMethodProperty
          // 7.3.5. CreateMethodProperty ( O, P, V )


          function CreateMethodProperty(O, P, V) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: Type(O) is Object.
            // 2. Assert: IsPropertyKey(P) is true.
            // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
            var newDesc = {
              value: V,
              writable: true,
              enumerable: false,
              configurable: true
            }; // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).

            Object.defineProperty(O, P, newDesc);
          } // _ESAbstract.Get
          // 7.3.1. Get ( O, P )


          function Get(O, P) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: Type(O) is Object.
            // 2. Assert: IsPropertyKey(P) is true.
            // 3. Return ? O.[[Get]](P, O).
            return O[P];
          } // _ESAbstract.IsCallable
          // 7.2.3. IsCallable ( argument )


          function IsCallable(argument) {
            // eslint-disable-line no-unused-vars
            // 1. If Type(argument) is not Object, return false.
            // 2. If argument has a [[Call]] internal method, return true.
            // 3. Return false.
            // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
            return typeof argument === "function";
          } // _ESAbstract.SameValueNonNumber
          // 7.2.12. SameValueNonNumber ( x, y )


          function SameValueNonNumber(x, y) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: Type(x) is not Number.
            // 2. Assert: Type(x) is the same as Type(y).
            // 3. If Type(x) is Undefined, return true.
            // 4. If Type(x) is Null, return true.
            // 5. If Type(x) is String, then
            // a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
            // 6. If Type(x) is Boolean, then
            // a. If x and y are both true or both false, return true; otherwise, return false.
            // 7. If Type(x) is Symbol, then
            // a. If x and y are both the same Symbol value, return true; otherwise, return false.
            // 8. If x and y are the same Object value, return true. Otherwise, return false.
            // Polyfill.io - We can skip all above steps because the === operator does it all for us.
            return x === y;
          } // _ESAbstract.ToObject
          // 7.1.13 ToObject ( argument )
          // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
          // Table 12: ToObject Conversions

          /*
            |----------------------------------------------------------------------------------------------------------------------------------------------------|
            | Argument Type | Result                                                                                                                             |
            |----------------------------------------------------------------------------------------------------------------------------------------------------|
            | Undefined     | Throw a TypeError exception.                                                                                                       |
            | Null          | Throw a TypeError exception.                                                                                                       |
            | Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
            | Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
            | String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
            | Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
            | Object        | Return argument.                                                                                                                   |
            |----------------------------------------------------------------------------------------------------------------------------------------------------|
            */


          function ToObject(argument) {
            // eslint-disable-line no-unused-vars
            if (argument === null || argument === undefined) {
              throw TypeError();
            }

            return Object(argument);
          } // _ESAbstract.GetV

          /* global ToObject */
          // 7.3.2 GetV (V, P)


          function GetV(v, p) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: IsPropertyKey(P) is true.
            // 2. Let O be ? ToObject(V).
            var o = ToObject(v); // 3. Return ? O.[[Get]](P, V).

            return o[p];
          } // _ESAbstract.GetMethod

          /* global GetV, IsCallable */
          // 7.3.9. GetMethod ( V, P )


          function GetMethod(V, P) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: IsPropertyKey(P) is true.
            // 2. Let func be ? GetV(V, P).
            var func = GetV(V, P); // 3. If func is either undefined or null, return undefined.

            if (func === null || func === undefined) {
              return undefined;
            } // 4. If IsCallable(func) is false, throw a TypeError exception.


            if (IsCallable(func) === false) {
              throw new TypeError("Method not callable: " + P);
            } // 5. Return func.


            return func;
          } // _ESAbstract.Type
          // "Type(x)" is used as shorthand for "the type of x"...


          function Type(x) {
            // eslint-disable-line no-unused-vars
            switch (_typeof(x)) {
              case "undefined":
                return "undefined";

              case "boolean":
                return "boolean";

              case "number":
                return "number";

              case "string":
                return "string";

              case "symbol":
                return "symbol";

              default:
                // typeof null is 'object'
                if (x === null) {
                  return "null";
                } // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.


                if ("Symbol" in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) {
                  return "symbol";
                }

                return "object";
            }
          } // _ESAbstract.OrdinaryToPrimitive

          /* global Get, IsCallable, Call, Type */
          // 7.1.1.1. OrdinaryToPrimitive ( O, hint )


          function OrdinaryToPrimitive(O, hint) {
            // eslint-disable-line no-unused-vars
            // 1. Assert: Type(O) is Object.
            // 2. Assert: Type(hint) is String and its value is either "string" or "number".
            // 3. If hint is "string", then
            if (hint === "string") {
              // a. Let methodNames be « "toString", "valueOf" ».
              var methodNames = ["toString", "valueOf"]; // 4. Else,
            } else {
              // a. Let methodNames be « "valueOf", "toString" ».
              methodNames = ["valueOf", "toString"];
            } // 5. For each name in methodNames in List order, do


            for (var i = 0; i < methodNames.length; ++i) {
              var name = methodNames[i]; // a. Let method be ? Get(O, name).

              var method = Get(O, name); // b. If IsCallable(method) is true, then

              if (IsCallable(method)) {
                // i. Let result be ? Call(method, O).
                var result = Call(method, O); // ii. If Type(result) is not Object, return result.

                if (Type(result) !== "object") {
                  return result;
                }
              }
            } // 6. Throw a TypeError exception.


            throw new TypeError("Cannot convert to primitive.");
          } // _ESAbstract.SameValueZero

          /* global Type, SameValueNonNumber */
          // 7.2.11. SameValueZero ( x, y )


          function SameValueZero(x, y) {
            // eslint-disable-line no-unused-vars
            // 1. If Type(x) is different from Type(y), return false.
            if (Type(x) !== Type(y)) {
              return false;
            } // 2. If Type(x) is Number, then


            if (Type(x) === "number") {
              // a. If x is NaN and y is NaN, return true.
              if (isNaN(x) && isNaN(y)) {
                return true;
              } // b. If x is +0 and y is -0, return true.


              if (1 / x === Infinity && 1 / y === -Infinity) {
                return true;
              } // c. If x is -0 and y is +0, return true.


              if (1 / x === -Infinity && 1 / y === Infinity) {
                return true;
              } // d. If x is the same Number value as y, return true.


              if (x === y) {
                return true;
              } // e. Return false.


              return false;
            } // 3. Return SameValueNonNumber(x, y).


            return SameValueNonNumber(x, y);
          } // _ESAbstract.ToInteger

          /* global Type */
          // 7.1.4. ToInteger ( argument )


          function ToInteger(argument) {
            // eslint-disable-line no-unused-vars
            if (Type(argument) === "symbol") {
              throw new TypeError("Cannot convert a Symbol value to a number");
            } // 1. Let number be ? ToNumber(argument).


            var number = Number(argument); // 2. If number is NaN, return +0.

            if (isNaN(number)) {
              return 0;
            } // 3. If number is +0, -0, +∞, or -∞, return number.


            if (1 / number === Infinity || 1 / number === -Infinity || number === Infinity || number === -Infinity) {
              return number;
            } // 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).


            return (number < 0 ? -1 : 1) * Math.floor(Math.abs(number));
          } // _ESAbstract.ToLength

          /* global ToInteger */
          // 7.1.15. ToLength ( argument )


          function ToLength(argument) {
            // eslint-disable-line no-unused-vars
            // 1. Let len be ? ToInteger(argument).
            var len = ToInteger(argument); // 2. If len ≤ +0, return +0.

            if (len <= 0) {
              return 0;
            } // 3. Return min(len, 253-1).


            return Math.min(len, Math.pow(2, 53) - 1);
          } // _ESAbstract.ToPrimitive

          /* global Type, GetMethod, Call, OrdinaryToPrimitive */
          // 7.1.1. ToPrimitive ( input [ , PreferredType ] )


          function ToPrimitive(input
            /* [, PreferredType] */
          ) {
            // eslint-disable-line no-unused-vars
            var PreferredType = arguments.length > 1 ? arguments[1] : undefined; // 1. Assert: input is an ECMAScript language value.
            // 2. If Type(input) is Object, then

            if (Type(input) === "object") {
              // a. If PreferredType is not present, let hint be "default".
              if (arguments.length < 2) {
                var hint = "default"; // b. Else if PreferredType is hint String, let hint be "string".
              } else if (PreferredType === String) {
                hint = "string"; // c. Else PreferredType is hint Number, let hint be "number".
              } else if (PreferredType === Number) {
                hint = "number";
              } // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).


              var exoticToPrim = typeof self.Symbol === "function" && _typeof(self.Symbol.toPrimitive) === "symbol" ? GetMethod(input, self.Symbol.toPrimitive) : undefined; // e. If exoticToPrim is not undefined, then

              if (exoticToPrim !== undefined) {
                // i. Let result be ? Call(exoticToPrim, input, « hint »).
                var result = Call(exoticToPrim, input, [hint]); // ii. If Type(result) is not Object, return result.

                if (Type(result) !== "object") {
                  return result;
                } // iii. Throw a TypeError exception.


                throw new TypeError("Cannot convert exotic object to primitive.");
              } // f. If hint is "default", set hint to "number".


              if (hint === "default") {
                hint = "number";
              } // g. Return ? OrdinaryToPrimitive(input, hint).


              return OrdinaryToPrimitive(input, hint);
            } // 3. Return input


            return input;
          } // _ESAbstract.ToString

          /* global Type, ToPrimitive */
          // 7.1.12. ToString ( argument )
          // The abstract operation ToString converts argument to a value of type String according to Table 11:
          // Table 11: ToString Conversions

          /*
            |---------------|--------------------------------------------------------|
            | Argument Type | Result                                                 |
            |---------------|--------------------------------------------------------|
            | Undefined     | Return "undefined".                                    |
            |---------------|--------------------------------------------------------|
            | Null	        | Return "null".                                         |
            |---------------|--------------------------------------------------------|
            | Boolean       | If argument is true, return "true".                    |
            |               | If argument is false, return "false".                  |
            |---------------|--------------------------------------------------------|
            | Number        | Return NumberToString(argument).                       |
            |---------------|--------------------------------------------------------|
            | String        | Return argument.                                       |
            |---------------|--------------------------------------------------------|
            | Symbol        | Throw a TypeError exception.                           |
            |---------------|--------------------------------------------------------|
            | Object        | Apply the following steps:                             |
            |               | Let primValue be ? ToPrimitive(argument, hint String). |
            |               | Return ? ToString(primValue).                          |
            |---------------|--------------------------------------------------------|
            */


          function ToString(argument) {
            // eslint-disable-line no-unused-vars
            switch (Type(argument)) {
              case "symbol":
                throw new TypeError("Cannot convert a Symbol value to a string");

              case "object":
                var primValue = ToPrimitive(argument, String);
                return ToString(primValue);
              // eslint-disable-line no-unused-vars

              default:
                return String(argument);
            }
          } // Array.prototype.includes

          /* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
          // 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )


          CreateMethodProperty(Array.prototype, "includes", function includes(searchElement
            /* [ , fromIndex ] */
          ) {
            "use strict"; // 1. Let O be ? ToObject(this value).

            var O = ToObject(this); // 2. Let len be ? ToLength(? Get(O, "length")).

            var len = ToLength(Get(O, "length")); // 3. If len is 0, return false.

            if (len === 0) {
              return false;
            } // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)


            var n = ToInteger(arguments[1]); // 5. If n ≥ 0, then

            if (n >= 0) {
              // a. Let k be n.
              var k = n; // 6. Else n < 0,
            } else {
              // a. Let k be len + n.
              k = len + n; // b. If k < 0, let k be 0.

              if (k < 0) {
                k = 0;
              }
            } // 7. Repeat, while k < len


            while (k < len) {
              // a. Let elementK be the result of ? Get(O, ! ToString(k)).
              var elementK = Get(O, ToString(k)); // b. If SameValueZero(searchElement, elementK) is true, return true.

              if (SameValueZero(searchElement, elementK)) {
                return true;
              } // c. Increase k by 1.


              k = k + 1;
            } // 8. Return false.


            return false;
          }); // Event

          (function () {
            var unlistenableWindowEvents = {
              click: 1,
              dblclick: 1,
              keyup: 1,
              keypress: 1,
              keydown: 1,
              mousedown: 1,
              mouseup: 1,
              mousemove: 1,
              mouseover: 1,
              mouseenter: 1,
              mouseleave: 1,
              mouseout: 1,
              storage: 1,
              storagecommit: 1,
              textinput: 1
            }; // This polyfill depends on availability of `document` so will not run in a worker
            // However, we asssume there are no browsers with worker support that lack proper
            // support for `Event` within the worker

            if (typeof document === "undefined" || typeof window === "undefined") {
              return;
            }

            var existingProto = window.Event && window.Event.prototype || null;

            function Event(type, eventInitDict) {
              if (!type) {
                throw new Error("Not enough arguments");
              }

              var event; // Shortcut if browser supports createEvent

              if ("createEvent" in document) {
                event = document.createEvent("Event");
                var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
                var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
                event.initEvent(type, bubbles, cancelable);
                return event;
              }

              event = document.createEventObject();
              event.type = type;
              event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
              event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
              return event;
            }

            Event.NONE = 0;
            Event.CAPTURING_PHASE = 1;
            Event.AT_TARGET = 2;
            Event.BUBBLING_PHASE = 3;
            window.Event = Window.prototype.Event = Event;

            if (existingProto) {
              Object.defineProperty(window.Event, "prototype", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: existingProto
              });
            }

            if (!("createEvent" in document)) {
              window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
                var element = this,
                  type = arguments[0],
                  listener = arguments[1];

                if (element === window && type in unlistenableWindowEvents) {
                  throw new Error("In IE8 the event: " + type + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                }

                if (!element._events) {
                  element._events = {};
                }

                if (!element._events[type]) {
                  element._events[type] = function (event) {
                    var list = element._events[event.type].list,
                      events = list.slice(),
                      index = -1,
                      length = events.length,
                      eventElement;

                    event.preventDefault = function preventDefault() {
                      if (event.cancelable !== false) {
                        event.returnValue = false;
                      }
                    };

                    event.stopPropagation = function stopPropagation() {
                      event.cancelBubble = true;
                    };

                    event.stopImmediatePropagation = function stopImmediatePropagation() {
                      event.cancelBubble = true;
                      event.cancelImmediate = true;
                    };

                    event.currentTarget = element;
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.target || event.srcElement || element;
                    event.timeStamp = new Date().getTime();

                    if (event.clientX) {
                      event.pageX = event.clientX + document.documentElement.scrollLeft;
                      event.pageY = event.clientY + document.documentElement.scrollTop;
                    }

                    while (++index < length && !event.cancelImmediate) {
                      if (index in events) {
                        eventElement = events[index];

                        if (list.includes(eventElement) && typeof eventElement === "function") {
                          eventElement.call(element, event);
                        }
                      }
                    }
                  };

                  element._events[type].list = [];

                  if (element.attachEvent) {
                    element.attachEvent("on" + type, element._events[type]);
                  }
                }

                element._events[type].list.push(listener);
              };

              window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
                var element = this,
                  type = arguments[0],
                  listener = arguments[1],
                  index;

                if (element._events && element._events[type] && element._events[type].list) {
                  index = element._events[type].list.indexOf(listener);

                  if (index !== -1) {
                    element._events[type].list.splice(index, 1);

                    if (!element._events[type].list.length) {
                      if (element.detachEvent) {
                        element.detachEvent("on" + type, element._events[type]);
                      }

                      delete element._events[type];
                    }
                  }
                }
              };

              window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
                if (!arguments.length) {
                  throw new Error("Not enough arguments");
                }

                if (!event || typeof event.type !== "string") {
                  throw new Error("DOM Events Exception 0");
                }

                var element = this,
                  type = event.type;

                try {
                  if (!event.bubbles) {
                    event.cancelBubble = true;

                    var cancelBubbleEvent = function cancelBubbleEvent(event) {
                      event.cancelBubble = true;
                      (element || window).detachEvent("on" + type, cancelBubbleEvent);
                    };

                    this.attachEvent("on" + type, cancelBubbleEvent);
                  }

                  this.fireEvent("on" + type, event);
                } catch (error) {
                  event.target = element;

                  do {
                    event.currentTarget = element;

                    if ("_events" in element && typeof element._events[type] === "function") {
                      element._events[type].call(element, event);
                    }

                    if (typeof element["on" + type] === "function") {
                      element["on" + type].call(element, event);
                    }

                    element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
                  } while (element && !event.cancelBubble);
                }

                return true;
              }; // Add the DOMContentLoaded Event


              document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                  document.dispatchEvent(new Event("DOMContentLoaded", {
                    bubbles: true
                  }));
                }
              });
            }
          })(); // CustomEvent


          self.CustomEvent = function CustomEvent(type, eventInitDict) {
            if (!type) {
              throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
            }

            var event;
            eventInitDict = eventInitDict || {
              bubbles: false,
              cancelable: false,
              detail: null
            };

            if ("createEvent" in document) {
              try {
                event = document.createEvent("CustomEvent");
                event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
              } catch (error) {
                // for browsers which don't support CustomEvent at all, we use a regular event instead
                event = document.createEvent("Event");
                event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
                event.detail = eventInitDict.detail;
              }
            } else {
              // IE8
              event = new Event(type, eventInitDict);
              event.detail = eventInitDict && eventInitDict.detail || null;
            }

            return event;
          };

          CustomEvent.prototype = Event.prototype;
        })("object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || "object" === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || "object" === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

        if (typeof Object.assign != "function") {
          Object.assign = function (target) {
            "use strict";

            if (target == null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }

            target = Object(target);

            for (var index = 1; index < arguments.length; index++) {
              var source = arguments[index];

              if (source != null) {
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
            }

            return target;
          };
        }

        (function (arr) {
          var _a = arr;

          var _f = function _f(item) {
            if (item.hasOwnProperty("append")) {
              return;
            }

            Object.defineProperty(item, "append", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                  docFrag = document.createDocumentFragment();
                var _a2 = argArr;

                var _f2 = function _f2(argItem) {
                  var isNode = argItem instanceof Node;
                  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                };

                for (var _i2 = 0; _i2 < _a2.length; _i2++) {
                  _f2(_a2[_i2], _i2, _a2);
                }

                undefined;
                this.appendChild(docFrag);
              }
            });
          };

          for (var _i = 0; _i < _a.length; _i++) {
            _f(_a[_i], _i, _a);
          }

          undefined;
        })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

        if (window.NodeList && !NodeList.prototype.forEach) {
          NodeList.prototype.forEach = Array.prototype.forEach;
        }

        if (!Object.entries) {
          Object.entries = function (obj) {
            var ownProps = Object.keys(obj),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array

            while (i--) {
              resArray[i] = [ownProps[i], obj[ownProps[i]]];
            }

            return resArray;
          };
        }

      }).call(this)
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {}], 9: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var redirectToHome = function redirectToHome() {
      var skip = document.querySelector(".js-skip-intro");

      if (skip) {
        return;
      }

      var navItems = document.querySelectorAll(".js-menu-nav-item");
      var baseUrl = document.querySelector(".js-site").getAttribute("data-url");
      var _a = navItems;

      var _f = function _f(item) {
        item.addEventListener("click", function () {
          window.location.href = "".concat(baseUrl, "?").concat(item.getAttribute("data-search"));
        });
      };

      for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
      }

      undefined;
    };

    var _default = redirectToHome;
    exports.default = _default;

  }, {}], 10: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _howler = require("howler");

    var slider = function slider() {
      var sliders = document.querySelectorAll(".js-slider");
      var leafsTimeout = setTimeout(function () { });

      var animateLeafs = function animateLeafs(leafs) {
        if (!leafs.classList.contains("active")) {
          leafs.classList.add("active");
          leafsTimeout = setTimeout(function () {
            leafs.classList.remove("active");
          }, 1000);
        }
      };

      var _a = sliders;

      var _f = function _f(slider) {
        var left = slider.querySelector(".js-slider-left");
        var right = slider.querySelector(".js-slider-right");
        var slides = slider.querySelectorAll(".js-slider-slide");
        var leafs = slider.querySelector(".js-slider-leafs");
        var activeBottle = 0; // const audio = document.querySelector(".js-bottle-music");

        var audio = new _howler.Howl({
          src: ["".concat(document.querySelector(".js-site").getAttribute("data-theme-url"), "/assets/audio/bottle.mp4")],
          loop: false,
          volume: 1
        });
        right.addEventListener("click", function () {
          animateLeafs(leafs);
          slides[activeBottle].classList.remove("active");

          if (activeBottle + 1 < slides.length) {
            activeBottle++;
          } else {
            activeBottle = 0;
          }

          slides[activeBottle].classList.add("active");

          if (window.musicActive) {
            audio.play();
          }
        });
        left.addEventListener("click", function () {
          animateLeafs(leafs);
          leafs.classList.add("active");
          slides[activeBottle].classList.remove("active");

          if (activeBottle - 1 < 0) {
            activeBottle = slides.length - 1;
          } else {
            activeBottle--;
          }

          slides[activeBottle].classList.add("active");

          if (window.musicActive) {
            audio.play();
          }
        });
        var initialX = 0;
        var dragActive = false;
        slider.addEventListener("mousedown", function (e) {
          e = e || window.event;
          dragActive = true;
          initialX = e.clientX;
        });
        slider.addEventListener("mousemove", function (e) {
          e = e || window.event;

          if (dragActive) {
            if (e.clientX - initialX > 100) {
              animateLeafs(leafs);
              dragActive = false;
              slides[activeBottle].classList.remove("active");

              if (activeBottle + 1 < slides.length) {
                activeBottle++;
              } else {
                activeBottle = 0;
              }

              slides[activeBottle].classList.add("active");

              if (window.musicActive) {
                audio.play();
              }
            }

            if (e.clientX - initialX < -100) {
              animateLeafs(leafs);
              dragActive = false;
              slides[activeBottle].classList.remove("active");

              if (activeBottle - 1 < 0) {
                activeBottle = slides.length - 1;
              } else {
                activeBottle--;
              }

              slides[activeBottle].classList.add("active");

              if (window.musicActive) {
                audio.play();
              }
            }
          }
        });
        slider.addEventListener("mouseup", function (e) {
          dragActive = false;
        });
      };

      for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
      }

      undefined;
    };

    var _default = slider;
    exports.default = _default;

  }, { "howler": 17 }], 11: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var table = function table() {
      var subsCard = document.querySelector(".js-table-box");
      var subsTable = document.querySelector(".js-table");

      if (!subsTable) {
        return;
      }

      dragElement();
      var currentLeft = 0;
      var cursorPosition = 0;

      function dragElement() {
        subsTable.onmousedown = dragMouseDown;
        subsTable.addEventListener("touchstart", function (e) {
          e = e || window.event;
          cursorPosition = e.clientX || e.touches[0].clientX;
        });
        subsTable.addEventListener("touchmove", function (e) {
          elementDrag(e);
        });
        subsTable.addEventListener("touchend", function (e) {
          closeDragElement();
        });

        function dragMouseDown(e) {
          e = e || window.event;
          cursorPosition = e.clientX || e.touches[0].clientX;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
          document.touchend = closeDragElement;
        }

        function elementDrag(e) {
          if (window.innerWidth > 1200) {
            return;
          }

          e = e || window.event;
          var newCursorPosition = e.clientX || e.touches[0].clientX;
          var positionDifference = cursorPosition - newCursorPosition;
          currentLeft = parseInt(currentLeft);
          var cardMargin = window.innerWidth <= 767 ? 0 : 0;

          if (currentLeft - positionDifference >= 0) {
            subsTable.style.left = "0px";
          } else if (currentLeft - positionDifference <= -(subsTable.offsetWidth - subsCard.offsetWidth)) {
            subsTable.style.left = -(subsTable.offsetWidth - subsCard.offsetWidth) + "px";
          } else {
            subsTable.style.left = currentLeft - positionDifference + "px";
          }
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
          currentLeft = subsTable.style.left;
        }
      }

      window.addEventListener("resize", function () {
        subsTable.style.left = "0px";
        currentLeft = 0;
      });
    };

    var _default = table;
    exports.default = _default;

  }, {}], 12: [function (require, module, exports) {
    "use strict";

    /*!
     * Useragnt
     * v0.6.1
     * 
     * Copyright (c) 2016 Yuichiroh Arai
     * Released under the MIT license
     * https://opensource.org/licenses/mit-license.php
     * 
     * detects: mobile, tablet, pc, windows, mac, linux, ios, android, edge, ie, safari, webkit, chrome, firefox, opera, webview
    !*/
    !function (e, o) {
      function a(e) {
        return n.indexOf(e) != -1;
      }

      function r(e) {
        var o = e.split("."),
          a = {};
        return a.str = e, a.float = parseFloat(e) || 0, a.major = o.length > 0 ? parseInt(o[0]) || 0 : 0, a.minor = o.length > 1 ? parseInt(o[1]) || 0 : 0, a.build = o.length > 2 ? parseInt(o[2]) || 0 : 0, a.revision = o.length > 3 ? parseInt(o[3]) || 0 : 0, a;
      }

      var i = {};
      i._detects = ["mobile", "tablet", "pc", "windows", "mac", "linux", "ios", "android", "edge", "ie", "safari", "webkit", "chrome", "firefox", "opera", "webview"];
      var n = i.userAgent = e.navigator.userAgent.toLowerCase();

      try {
        i.mobile = a("iphone") || a("ipod") || a("android") && a("mobile") || a("windows") && a("phone") || a("firefox") && a("mobile") || a("blackberry");
      } catch (e) { }

      try {
        i.tablet = a("ipad") || a("android") && !a("mobile") || a("windows") && a("touch") && !a("tablet pc") || a("firefox") && a("tablet") || a("kindle") || a("silk") || a("playbook");
      } catch (e) { }

      try {
        i.pc = !a("iphone") && !a("ipod") && !a("ipad") && !a("android") && (!a("windows") || !a("phone") && (!a("touch") || a("tablet pc"))) && (!a("firefox") || !a("mobile") && !a("tablet")) && !a("blackberry") && !a("kindle") && !a("silk") && !a("playbook");
      } catch (e) { }

      try {
        i.windows = a("windows"), i.windows && (i.windows = new Boolean(!0), n.match(/nt ([\d.]+)/g) && (i.windows.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.mac = a("mac os x") && !a("iphone") && !a("ipad") && !a("ipod"), i.mac && (i.mac = new Boolean(!0), n.match(/ mac os x ([\d_\.]+)/g) && (i.mac.version = r(RegExp.$1.replace(/_/g, "."))));
      } catch (e) { }

      try {
        i.linux = a("linux") && !a("android");
      } catch (e) { }

      try {
        i.ios = a("iphone") || a("ipad") || a("ipod"), i.ios && (i.ios = new Boolean(!0), n.match(/ os ([\d_]+)/g) && (i.ios.version = r(RegExp.$1.replace(/_/g, "."))));
      } catch (e) { }

      try {
        i.android = a("android"), i.android && (i.android = new Boolean(!0), n.match(/android ([\d\.]+)/g) && (i.android.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.edge = a("edge"), i.edge && (i.edge = new Boolean(!0), n.match(/edge\/([\d.]+)/g) && (i.edge.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.ie = a("trident") || a("msie"), i.ie && (i.ie = new Boolean(!0), n.match(/(msie|rv:?)\s?([\d.]+)/g) && (i.ie.version = r(RegExp.$2)));
      } catch (e) { }

      try {
        i.safari = a("safari") && !a("android") && !a("edge") && !a("opera") && !a("opr") && !a("chrome"), i.safari && (i.safari = new Boolean(!0), n.match(/version\/([\d.]+)/g) && (i.safari.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.webkit = a("applewebkit") && !a("safari") && !a("android") && !a("edge") && !a("opera") && !a("opr") && !a("chrome");
      } catch (e) { }

      try {
        i.chrome = a("chrome") && !a("edge") && !a("opera") && !a("opr"), i.chrome && (i.chrome = new Boolean(!0), n.match(/chrome\/([\d.]+)/g) && (i.chrome.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.firefox = a("firefox") && !a("edge"), i.firefox && (i.firefox = new Boolean(!0), n.match(/firefox\/([\d.]+)/g) && (i.firefox.version = r(RegExp.$1)));
      } catch (e) { }

      try {
        i.opera = a("opera") || a("opr"), i.opera && (i.opera = new Boolean(!0), n.match(/(opera|opr)\/([\d.]+)/g) && (i.opera.version = r(RegExp.$2)));
      } catch (e) { }

      try {
        i.webview = (a("iphone") || a("ipad") || a("ipod")) && (!a("safari") || a("crios") || a("fxios") || a("opios") || a("twitter") || a("fbav") || a("line"));
      } catch (e) { }

      var t,
        c,
        d,
        s = i._classPrefix = "",
        p = o.documentElement,
        l = p.className;

      for (c = i._detects.length, t = 0; t < c; t++) {
        d = i._detects[t], l += i[d] ? " " + s + d : " " + s + "no-" + d;
      }

      p.className = l, e.Useragnt = i;
    }(window, document);

  }, {}], 13: [function (require, module, exports) {
    "use strict";

    require("./components/polifyls");

    var _parallax = _interopRequireDefault(require("./components/parallax"));

    var _hotspot = _interopRequireDefault(require("./components/hotspot"));

    var _slider = _interopRequireDefault(require("./components/slider"));

    var _menu = _interopRequireDefault(require("./components/menu"));

    var _redirectToHome = _interopRequireDefault(require("./components/redirectToHome"));

    var _mail = _interopRequireDefault(require("./components/mail"));

    var _loadGifs = _interopRequireDefault(require("./components/loadGifs"));

    var _table = _interopRequireDefault(require("./components/table"));

    var _gdprHack = _interopRequireDefault(require("./components/gdprHack"));

    require("./components/useragnt");

    require("./components/detectSvgFilterSupport");

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var load = function load() {
      (0, _parallax.default)();
      (0, _hotspot.default)();
      (0, _slider.default)();
      (0, _menu.default)();
      (0, _redirectToHome.default)();
      (0, _mail.default)();
      (0, _table.default)();
      (0, _gdprHack.default)();
    };

    var interval;

    if (document.querySelector(".js-loader")) {

      if (window.loaded) {

        load();
      } else {
        interval = setInterval(function () {

          // if (window.loaded) {

          load();
          clearInterval(interval);
          // }
        }, 4000);
      }
      // } else {
      //   load();
    }

    console.log("created by %c PopArt Studio ", "background: #333; color: #facc16");
    document.addEventListener("contextmenu", function (event) {
      return event.preventDefault();
    });

  }, { "./components/detectSvgFilterSupport": 1, "./components/gdprHack": 2, "./components/hotspot": 3, "./components/loadGifs": 4, "./components/mail": 5, "./components/menu": 6, "./components/parallax": 7, "./components/polifyls": 8, "./components/redirectToHome": 9, "./components/slider": 10, "./components/table": 11, "./components/useragnt": 12 }], 14: [function (require, module, exports) {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
          (global = global || self, factory(global.window = global.window || {}));
    }(this, (function (exports) {
      'use strict';

      /*!
       * ScrollToPlugin 3.6.0
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
      */
      var gsap,
        _coreInitted,
        _window,
        _docEl,
        _body,
        _toArray,
        _config,
        _windowExists = function _windowExists() {
          return typeof window !== "undefined";
        },
        _getGSAP = function _getGSAP() {
          return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
        },
        _isString = function _isString(value) {
          return typeof value === "string";
        },
        _isFunction = function _isFunction(value) {
          return typeof value === "function";
        },
        _max = function _max(element, axis) {
          var dim = axis === "x" ? "Width" : "Height",
            scroll = "scroll" + dim,
            client = "client" + dim;
          return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
        },
        _buildGetter = function _buildGetter(e, axis) {
          var p = "scroll" + (axis === "x" ? "Left" : "Top");

          if (e === _window) {
            if (e.pageXOffset != null) {
              p = "page" + axis.toUpperCase() + "Offset";
            } else {
              e = _docEl[p] != null ? _docEl : _body;
            }
          }

          return function () {
            return e[p];
          };
        },
        _clean = function _clean(value, index, target, targets) {
          _isFunction(value) && (value = value(index, target, targets));

          if (typeof value !== "object") {
            return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
              x: value,
              y: value
            } : {
              y: value
            };
          } else if (value.nodeType) {
            return {
              y: value,
              x: value
            };
          } else {
            var result = {},
              p;

            for (p in value) {
              p !== "onAutoKill" && (result[p] = _isFunction(value[p]) ? value[p](index, target, targets) : value[p]);
            }

            return result;
          }
        },
        _getOffset = function _getOffset(element, container) {
          element = _toArray(element)[0];

          if (!element || !element.getBoundingClientRect) {
            return console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0
            };
          }

          var rect = element.getBoundingClientRect(),
            isRoot = !container || container === _window || container === _body,
            cRect = isRoot ? {
              top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
              left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
            } : container.getBoundingClientRect(),
            offsets = {
              x: rect.left - cRect.left,
              y: rect.top - cRect.top
            };

          if (!isRoot && container) {
            offsets.x += _buildGetter(container, "x")();
            offsets.y += _buildGetter(container, "y")();
          }

          return offsets;
        },
        _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
          return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
        },
        _initCore = function _initCore() {
          gsap = _getGSAP();

          if (_windowExists() && gsap && document.body) {
            _window = window;
            _body = document.body;
            _docEl = document.documentElement;
            _toArray = gsap.utils.toArray;
            gsap.config({
              autoKillThreshold: 7
            });
            _config = gsap.config();
            _coreInitted = 1;
          }
        };

      var ScrollToPlugin = {
        version: "3.6.0",
        name: "scrollTo",
        rawVars: 1,
        register: function register(core) {
          gsap = core;

          _initCore();
        },
        init: function init(target, value, tween, index, targets) {
          _coreInitted || _initCore();
          var data = this;
          data.isWin = target === _window;
          data.target = target;
          data.tween = tween;
          value = _clean(value, index, target, targets);
          data.vars = value;
          data.autoKill = !!value.autoKill;
          data.getX = _buildGetter(target, "x");
          data.getY = _buildGetter(target, "y");
          data.x = data.xPrev = data.getX();
          data.y = data.yPrev = data.getY();

          if (value.x != null) {
            data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets, Math.round);

            data._props.push("scrollTo_x");
          } else {
            data.skipX = 1;
          }

          if (value.y != null) {
            data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets, Math.round);

            data._props.push("scrollTo_y");
          } else {
            data.skipY = 1;
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt,
            target = data.target,
            tween = data.tween,
            autoKill = data.autoKill,
            xPrev = data.xPrev,
            yPrev = data.yPrev,
            isWin = data.isWin,
            x,
            y,
            yDif,
            xDif,
            threshold;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }

          x = isWin || !data.skipX ? data.getX() : xPrev;
          y = isWin || !data.skipY ? data.getY() : yPrev;
          yDif = y - yPrev;
          xDif = x - xPrev;
          threshold = _config.autoKillThreshold;

          if (data.x < 0) {
            data.x = 0;
          }

          if (data.y < 0) {
            data.y = 0;
          }

          if (autoKill) {
            if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
              data.skipX = 1;
            }

            if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
              data.skipY = 1;
            }

            if (data.skipX && data.skipY) {
              tween.kill();
              data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
            }
          }

          if (isWin) {
            _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
          } else {
            data.skipY || (target.scrollTop = data.y);
            data.skipX || (target.scrollLeft = data.x);
          }

          data.xPrev = data.x;
          data.yPrev = data.y;
        },
        kill: function kill(property) {
          var both = property === "scrollTo";

          if (both || property === "scrollTo_x") {
            this.skipX = 1;
          }

          if (both || property === "scrollTo_y") {
            this.skipY = 1;
          }
        }
      };
      ScrollToPlugin.max = _max;
      ScrollToPlugin.getOffset = _getOffset;
      ScrollToPlugin.buildGetter = _buildGetter;
      _getGSAP() && gsap.registerPlugin(ScrollToPlugin);

      exports.ScrollToPlugin = ScrollToPlugin;
      exports.default = ScrollToPlugin;

      Object.defineProperty(exports, '__esModule', { value: true });

    })));

  }, {}], 15: [function (require, module, exports) {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
          (global = global || self, factory(global.window = global.window || {}));
    }(this, (function (exports) {
      'use strict';

      /*!
       * ScrollTrigger 3.6.0
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
      */
      var gsap,
        _coreInitted,
        _win,
        _doc,
        _docEl,
        _body,
        _root,
        _resizeDelay,
        _raf,
        _request,
        _toArray,
        _clamp,
        _time2,
        _syncInterval,
        _refreshing,
        _pointerIsDown,
        _transformProp,
        _i,
        _prevWidth,
        _prevHeight,
        _autoRefresh,
        _sort,
        _suppressOverwrites,
        _ignoreResize,
        _limitCallbacks,
        _startup = 1,
        _proxies = [],
        _scrollers = [],
        _getTime = Date.now,
        _time1 = _getTime(),
        _lastScrollTime = 0,
        _enabled = 1,
        _passThrough = function _passThrough(v) {
          return v;
        },
        _windowExists = function _windowExists() {
          return typeof window !== "undefined";
        },
        _getGSAP = function _getGSAP() {
          return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
        },
        _isViewport = function _isViewport(e) {
          return !!~_root.indexOf(e);
        },
        _getProxyProp = function _getProxyProp(element, property) {
          return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        },
        _getScrollFunc = function _getScrollFunc(element, _ref) {
          var s = _ref.s,
            sc = _ref.sc;

          var i = _scrollers.indexOf(element),
            offset = sc === _vertical.sc ? 1 : 2;

          !~i && (i = _scrollers.push(element) - 1);
          return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
            return arguments.length ? element[s] = value : element[s];
          }));
        },
        _getBoundsFunc = function _getBoundsFunc(element) {
          return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
            _winOffsets.width = _win.innerWidth;
            _winOffsets.height = _win.innerHeight;
            return _winOffsets;
          } : function () {
            return _getBounds(element);
          });
        },
        _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
          var d = _ref2.d,
            d2 = _ref2.d2,
            a = _ref2.a;
          return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
            return a()[d];
          } : function () {
            return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
          };
        },
        _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
          return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
            return _winOffsets;
          };
        },
        _maxScroll = function _maxScroll(element, _ref3) {
          var s = _ref3.s,
            d2 = _ref3.d2,
            d = _ref3.d,
            a = _ref3.a;
          return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
        },
        _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
          for (var i = 0; i < _autoRefresh.length; i += 3) {
            (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
          }
        },
        _isString = function _isString(value) {
          return typeof value === "string";
        },
        _isFunction = function _isFunction(value) {
          return typeof value === "function";
        },
        _isNumber = function _isNumber(value) {
          return typeof value === "number";
        },
        _isObject = function _isObject(value) {
          return typeof value === "object";
        },
        _callIfFunc = function _callIfFunc(value) {
          return _isFunction(value) && value();
        },
        _combineFunc = function _combineFunc(f1, f2) {
          return function () {
            var result1 = _callIfFunc(f1),
              result2 = _callIfFunc(f2);

            return function () {
              _callIfFunc(result1);

              _callIfFunc(result2);
            };
          };
        },
        _abs = Math.abs,
        _scrollLeft = "scrollLeft",
        _scrollTop = "scrollTop",
        _left = "left",
        _top = "top",
        _right = "right",
        _bottom = "bottom",
        _width = "width",
        _height = "height",
        _Right = "Right",
        _Left = "Left",
        _Top = "Top",
        _Bottom = "Bottom",
        _padding = "padding",
        _margin = "margin",
        _Width = "Width",
        _Height = "Height",
        _px = "px",
        _horizontal = {
          s: _scrollLeft,
          p: _left,
          p2: _Left,
          os: _right,
          os2: _Right,
          d: _width,
          d2: _Width,
          a: "x",
          sc: function sc(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
          }
        },
        _vertical = {
          s: _scrollTop,
          p: _top,
          p2: _Top,
          os: _bottom,
          os2: _Bottom,
          d: _height,
          d2: _Height,
          a: "y",
          op: _horizontal,
          sc: function sc(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
          }
        },
        _getComputedStyle = function _getComputedStyle(element) {
          return _win.getComputedStyle(element);
        },
        _makePositionable = function _makePositionable(element) {
          return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
        },
        _setDefaults = function _setDefaults(obj, defaults) {
          for (var p in defaults) {
            p in obj || (obj[p] = defaults[p]);
          }

          return obj;
        },
        _getBounds = function _getBounds(element, withoutTransforms) {
          var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1),
            bounds = element.getBoundingClientRect();
          tween && tween.progress(0).kill();
          return bounds;
        },
        _getSize = function _getSize(element, _ref4) {
          var d2 = _ref4.d2;
          return element["offset" + d2] || element["client" + d2] || 0;
        },
        _getLabelRatioArray = function _getLabelRatioArray(timeline) {
          var a = [],
            labels = timeline.labels,
            duration = timeline.duration(),
            p;

          for (p in labels) {
            a.push(labels[p] / duration);
          }

          return a;
        },
        _getClosestLabel = function _getClosestLabel(animation) {
          return function (value) {
            return gsap.utils.snap(_getLabelRatioArray(animation), value);
          };
        },
        _getLabelAtDirection = function _getLabelAtDirection(timeline) {
          return function (value, st) {
            var a = _getLabelRatioArray(timeline),
              i;

            a.sort(function (a, b) {
              return a - b;
            });

            if (st.direction > 0) {
              for (i = 0; i < a.length; i++) {
                if (a[i] >= value) {
                  return a[i];
                }
              }

              return a.pop();
            } else {
              i = a.length;

              while (i--) {
                if (a[i] <= value) {
                  return a[i];
                }
              }
            }

            return a[0];
          };
        },
        _multiListener = function _multiListener(func, element, types, callback) {
          return types.split(",").forEach(function (type) {
            return func(element, type, callback);
          });
        },
        _addListener = function _addListener(element, type, func) {
          return element.addEventListener(type, func, {
            passive: true
          });
        },
        _removeListener = function _removeListener(element, type, func) {
          return element.removeEventListener(type, func);
        },
        _markerDefaults = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        _defaults = {
          toggleActions: "play",
          anticipatePin: 0
        },
        _keywords = {
          top: 0,
          left: 0,
          center: 0.5,
          bottom: 1,
          right: 1
        },
        _offsetToPx = function _offsetToPx(value, size) {
          if (_isString(value)) {
            var eqIndex = value.indexOf("="),
              relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

            if (~eqIndex) {
              value.indexOf("%") > eqIndex && (relative *= size / 100);
              value = value.substr(0, eqIndex - 1);
            }

            value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
          }

          return value;
        },
        _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
          var startColor = _ref5.startColor,
            endColor = _ref5.endColor,
            fontSize = _ref5.fontSize,
            indent = _ref5.indent,
            fontWeight = _ref5.fontWeight;

          var e = _doc.createElement("div"),
            useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
            isScroller = type.indexOf("scroller") !== -1,
            parent = useFixedPosition ? _body : container,
            isStart = type.indexOf("start") !== -1,
            color = isStart ? startColor : endColor,
            css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

          css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
          (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
          matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
          e._isStart = isStart;
          e.setAttribute("class", "gsap-marker-" + type);
          e.style.cssText = css;
          e.innerText = name || name === 0 ? type + "-" + name : type;
          parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
          e._offset = e["offset" + direction.op.d2];

          _positionMarker(e, 0, direction, isStart);

          return e;
        },
        _positionMarker = function _positionMarker(marker, start, direction, flipped) {
          var vars = {
            display: "block"
          },
            side = direction[flipped ? "os2" : "p2"],
            oppositeSide = direction[flipped ? "p2" : "os2"];
          marker._isFlipped = flipped;
          vars[direction.a + "Percent"] = flipped ? -100 : 0;
          vars[direction.a] = flipped ? "1px" : 0;
          vars["border" + side + _Width] = 1;
          vars["border" + oppositeSide + _Width] = 0;
          vars[direction.p] = start + "px";
          gsap.set(marker, vars);
        },
        _triggers = [],
        _ids = {},
        _sync = function _sync() {
          return _request || (_request = _raf(_updateAll));
        },
        _onScroll = function _onScroll() {
          if (!_request) {
            _request = _raf(_updateAll);
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
          }
        },
        _onResize = function _onResize() {
          return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
        },
        _listeners = {},
        _emptyArray = [],
        _media = [],
        _creatingMedia,
        _lastMediaTick,
        _onMediaChange = function _onMediaChange(e) {
          var tick = gsap.ticker.frame,
            matches = [],
            i = 0,
            index;

          if (_lastMediaTick !== tick || _startup) {
            _revertAll();

            for (; i < _media.length; i += 4) {
              index = _win.matchMedia(_media[i]).matches;

              if (index !== _media[i + 3]) {
                _media[i + 3] = index;
                index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
              }
            }

            _revertRecorded();

            for (i = 0; i < matches.length; i++) {
              index = matches[i];
              _creatingMedia = _media[index];
              _media[index + 2] = _media[index + 1](e);
            }

            _creatingMedia = 0;
            _coreInitted && _refreshAll(0, 1);
            _lastMediaTick = tick;

            _dispatch("matchMedia");
          }
        },
        _softRefresh = function _softRefresh() {
          return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
        },
        _dispatch = function _dispatch(type) {
          return _listeners[type] && _listeners[type].map(function (f) {
            return f();
          }) || _emptyArray;
        },
        _savedStyles = [],
        _revertRecorded = function _revertRecorded(media) {
          for (var i = 0; i < _savedStyles.length; i += 4) {
            if (!media || _savedStyles[i + 3] === media) {
              _savedStyles[i].style.cssText = _savedStyles[i + 1];
              _savedStyles[i + 2].uncache = 1;
            }
          }
        },
        _revertAll = function _revertAll(kill, media) {
          var trigger;

          for (_i = 0; _i < _triggers.length; _i++) {
            trigger = _triggers[_i];

            if (!media || trigger.media === media) {
              if (kill) {
                trigger.kill(1);
              } else {
                trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll());
                trigger.revert();
              }
            }
          }

          _revertRecorded(media);

          media || _dispatch("revert");
        },
        _refreshAll = function _refreshAll(force, skipRevert) {
          if (_lastScrollTime && !force) {
            _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

            return;
          }

          var refreshInits = _dispatch("refreshInit");

          _sort && ScrollTrigger.sort();
          skipRevert || _revertAll();

          for (_i = 0; _i < _triggers.length; _i++) {
            _triggers[_i].refresh();
          }

          refreshInits.forEach(function (result) {
            return result && result.render && result.render(-1);
          });
          _i = _triggers.length;

          while (_i--) {
            _triggers[_i].scroll.rec = 0;
          }

          _resizeDelay.pause();

          _dispatch("refresh");
        },
        _lastScroll = 0,
        _direction = 1,
        _updateAll = function _updateAll() {
          var l = _triggers.length,
            time = _getTime(),
            recordVelocity = time - _time1 >= 50,
            scroll = l && _triggers[0].scroll();

          _direction = _lastScroll > scroll ? -1 : 1;
          _lastScroll = scroll;

          if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
              _lastScrollTime = 0;

              _dispatch("scrollEnd");
            }

            _time2 = _time1;
            _time1 = time;
          }

          if (_direction < 0) {
            _i = l;

            while (_i--) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }

            _direction = 1;
          } else {
            for (_i = 0; _i < l; _i++) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
          }

          _request = 0;
        },
        _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex"],
        _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
        _swapPinOut = function _swapPinOut(pin, spacer, state) {
          _setState(state);

          if (pin.parentNode === spacer) {
            var parent = spacer.parentNode;

            if (parent) {
              parent.insertBefore(pin, spacer);
              parent.removeChild(spacer);
            }
          }
        },
        _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
          if (pin.parentNode !== spacer) {
            var i = _propNamesToCopy.length,
              spacerStyle = spacer.style,
              pinStyle = pin.style,
              p;

            while (i--) {
              p = _propNamesToCopy[i];
              spacerStyle[p] = cs[p];
            }

            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
            cs.display === "inline" && (spacerStyle.display = "inline-block");
            pinStyle[_bottom] = pinStyle[_right] = "auto";
            spacerStyle.overflow = "visible";
            spacerStyle.boxSizing = "border-box";
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
            spacerStyle[_height] = _getSize(pin, _vertical) + _px;
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

            _setState(spacerState);

            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
            pinStyle[_padding] = cs[_padding];
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
        },
        _capsExp = /([A-Z])/g,
        _setState = function _setState(state) {
          if (state) {
            var style = state.t.style,
              l = state.length,
              i = 0,
              p,
              value;
            (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;

            for (; i < l; i += 2) {
              value = state[i + 1];
              p = state[i];

              if (value) {
                style[p] = value;
              } else if (style[p]) {
                style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
              }
            }
          }
        },
        _getState = function _getState(element) {
          var l = _stateProps.length,
            style = element.style,
            state = [],
            i = 0;

          for (; i < l; i++) {
            state.push(_stateProps[i], style[_stateProps[i]]);
          }

          state.t = element;
          return state;
        },
        _copyState = function _copyState(state, override, omitOffsets) {
          var result = [],
            l = state.length,
            i = omitOffsets ? 8 : 0,
            p;

          for (; i < l; i += 2) {
            p = state[i];
            result.push(p, p in override ? override[p] : state[i + 1]);
          }

          result.t = state.t;
          return result;
        },
        _winOffsets = {
          left: 0,
          top: 0
        },
        _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
          _isFunction(value) && (value = value(self));

          if (_isString(value) && value.substr(0, 3) === "max") {
            value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
          }

          if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self));

            var element = _toArray(trigger)[0] || _body,
              bounds = _getBounds(element) || {},
              offsets = value.split(" "),
              localOffset,
              globalOffset,
              display;

            if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
              display = element.style.display;
              element.style.display = "block";
              bounds = _getBounds(element);
              display ? element.style.display = display : element.style.removeProperty("display");
            }

            localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
            value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
            markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
            scrollerSize -= scrollerSize - globalOffset;
          } else if (markerScroller) {
            _positionMarker(markerScroller, scrollerSize, direction, true);
          }

          if (marker) {
            var position = value + scrollerSize,
              isStart = marker._isStart;
            scrollerMax = "scroll" + direction.d2;

            _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

            if (useFixedPosition) {
              scrollerBounds = _getBounds(markerScroller);
              useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
            }
          }

          return Math.round(value);
        },
        _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
        _reparent = function _reparent(element, parent, top, left) {
          if (element.parentNode !== parent) {
            var style = element.style,
              p,
              cs;

            if (parent === _body) {
              element._stOrig = style.cssText;
              cs = _getComputedStyle(element);

              for (p in cs) {
                if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                  style[p] = cs[p];
                }
              }

              style.top = top;
              style.left = left;
            } else {
              style.cssText = element._stOrig;
            }

            gsap.core.getCache(element).uncache = 1;
            parent.appendChild(element);
          }
        },
        _getTweenCreator = function _getTweenCreator(scroller, direction) {
          var getScroll = _getScrollFunc(scroller, direction),
            prop = "_scroll" + direction.p2,
            lastScroll1,
            lastScroll2,
            getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
              var tween = getTween.tween,
                onComplete = vars.onComplete,
                modifiers = {};
              tween && tween.kill();
              lastScroll1 = Math.round(initialValue);
              vars[prop] = scrollTo;
              vars.modifiers = modifiers;

              modifiers[prop] = function (value) {
                value = Math.round(getScroll());

                if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
                  tween.kill();
                  getTween.tween = 0;
                } else {
                  value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
                }

                lastScroll2 = lastScroll1;
                return lastScroll1 = Math.round(value);
              };

              vars.onComplete = function () {
                getTween.tween = 0;
                onComplete && onComplete.call(tween);
              };

              tween = getTween.tween = gsap.to(scroller, vars);
              return tween;
            };

          scroller[prop] = getScroll;
          scroller.addEventListener("mousewheel", function () {
            return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
          });
          return getTween;
        };

      _horizontal.op = _vertical;
      var ScrollTrigger = function () {
        function ScrollTrigger(vars, animation) {
          _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
          this.init(vars, animation);
        }

        var _proto = ScrollTrigger.prototype;

        _proto.init = function init(vars, animation) {
          this.progress = this.start = 0;
          this.vars && this.kill(1);

          if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough;
            return;
          }

          vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
            trigger: vars
          } : vars, _defaults);

          var direction = vars.horizontal ? _horizontal : _vertical,
            _vars = vars,
            onUpdate = _vars.onUpdate,
            toggleClass = _vars.toggleClass,
            id = _vars.id,
            onToggle = _vars.onToggle,
            onRefresh = _vars.onRefresh,
            scrub = _vars.scrub,
            trigger = _vars.trigger,
            pin = _vars.pin,
            pinSpacing = _vars.pinSpacing,
            invalidateOnRefresh = _vars.invalidateOnRefresh,
            anticipatePin = _vars.anticipatePin,
            onScrubComplete = _vars.onScrubComplete,
            onSnapComplete = _vars.onSnapComplete,
            once = _vars.once,
            snap = _vars.snap,
            pinReparent = _vars.pinReparent,
            isToggle = !scrub && scrub !== 0,
            scroller = _toArray(vars.scroller || _win)[0],
            scrollerCache = gsap.core.getCache(scroller),
            isViewport = _isViewport(scroller),
            useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
            callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
            toggleActions = isToggle && vars.toggleActions.split(" "),
            markers = "markers" in vars ? vars.markers : _defaults.markers,
            borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
            self = this,
            onRefreshInit = vars.onRefreshInit && function () {
              return vars.onRefreshInit(self);
            },
            getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
            getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
            tweenTo,
            pinCache,
            snapFunc,
            isReverted,
            scroll1,
            scroll2,
            start,
            end,
            markerStart,
            markerEnd,
            markerStartTrigger,
            markerEndTrigger,
            markerVars,
            change,
            pinOriginalState,
            pinActiveState,
            pinState,
            spacer,
            offset,
            pinGetter,
            pinSetter,
            pinStart,
            pinChange,
            spacingStart,
            spacerState,
            markerStartSetter,
            markerEndSetter,
            cs,
            snap1,
            snap2,
            scrubTween,
            scrubSmooth,
            snapDurClamp,
            snapDelayedCall,
            prevProgress,
            prevScroll,
            prevAnimProgress;

          self.media = _creatingMedia;
          anticipatePin *= 45;

          _triggers.push(self);

          self.scroller = scroller;
          self.scroll = _getScrollFunc(scroller, direction);
          scroll1 = self.scroll();
          self.vars = vars;
          animation = animation || vars.animation;
          "refreshPriority" in vars && (_sort = 1);
          scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, _vertical),
            left: _getTweenCreator(scroller, _horizontal)
          };
          self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

          if (animation) {
            animation.vars.lazy = false;
            animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            scrubSmooth = _isNumber(scrub) && scrub;
            scrubSmooth && (scrubTween = gsap.to(animation, {
              ease: "power3",
              duration: scrubSmooth,
              onComplete: function onComplete() {
                return onScrubComplete && onScrubComplete(self);
              }
            }));
            snap1 = 0;
            id || (id = animation.vars.id);
          }

          if (snap) {
            _isObject(snap) || (snap = {
              snapTo: snap
            });
            "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
              scrollBehavior: "auto"
            });
            snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
              min: 0.1,
              max: 2
            };
            snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
              if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
                var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
                  velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
                  change1 = _abs(velocity / 2) * velocity / 0.185,
                  naturalEnd = totalProgress + change1,
                  endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
                  scroll = self.scroll(),
                  endScroll = Math.round(start + endValue * change),
                  tween = tweenTo.tween;

                if (scroll <= end && scroll >= start && endScroll !== scroll) {
                  if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
                    return;
                  }

                  tweenTo(endScroll, {
                    duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                    ease: snap.ease || "power3",
                    data: Math.abs(endScroll - scroll),
                    onComplete: function onComplete() {
                      snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                      onSnapComplete && onSnapComplete(self);
                    }
                  }, scroll, change1 * change, endScroll - scroll - change1 * change);
                }
              } else if (self.isActive) {
                snapDelayedCall.restart(true);
              }
            }).pause();
          }

          id && (_ids[id] = self);
          trigger = self.trigger = _toArray(trigger || pin)[0];
          pin = pin === true ? trigger : _toArray(pin)[0];
          _isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
          });

          if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
            self.pin = pin;
            vars.force3D !== false && gsap.set(pin, {
              force3D: true
            });
            pinCache = gsap.core.getCache(pin);

            if (!pinCache.spacer) {
              pinCache.spacer = spacer = _doc.createElement("div");
              spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
              pinCache.pinState = pinOriginalState = _getState(pin);
            } else {
              pinOriginalState = pinCache.pinState;
            }

            self.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap.getProperty(pin);
            pinSetter = gsap.quickSetter(pin, direction.a, _px);

            _swapPinIn(pin, spacer, cs);

            pinState = _getState(pin);
          }

          if (markers) {
            markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
            markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

            if (!useFixedPosition) {
              _makePositionable(isViewport ? _body : scroller);

              gsap.set([markerStartTrigger, markerEndTrigger], {
                force3D: true
              });
              markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
              markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
            }
          }

          self.revert = function (revert) {
            var r = revert !== false || !self.enabled,
              prevRefreshing = _refreshing;

            if (r !== isReverted) {
              if (r) {
                prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
                prevProgress = self.progress;
                prevAnimProgress = animation && animation.progress();
              }

              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
                return m.style.display = r ? "none" : "block";
              });
              r && (_refreshing = 1);
              self.update(r);
              _refreshing = prevRefreshing;
              pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
              isReverted = r;
            }
          };

          self.refresh = function (soft) {
            if (_refreshing || !self.enabled) {
              return;
            }

            if (pin && soft && _lastScrollTime) {
              _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

              return;
            }

            _refreshing = 1;
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.progress(0).invalidate();
            isReverted || self.revert();

            var size = getScrollerSize(),
              scrollerBounds = getScrollerOffsets(),
              max = _maxScroll(scroller, direction),
              offset = 0,
              otherPinOffset = 0,
              parsedEnd = vars.end,
              parsedEndTrigger = vars.endTrigger || trigger,
              parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
              triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
              i = triggerIndex,
              cs,
              bounds,
              scroll,
              isVertical,
              override,
              curTrigger,
              curPin,
              oppositeScroll,
              initted;

            while (i--) {
              curPin = _triggers[i].pin;
              curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
            }

            start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
            _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

            if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
              if (~parsedEnd.indexOf(" ")) {
                parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
              } else {
                offset = _offsetToPx(parsedEnd.substr(2), size);
                parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
                parsedEndTrigger = trigger;
              }
            }

            end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
            change = end - start || (start -= 0.01) && 0.001;
            offset = 0;
            i = triggerIndex;

            while (i--) {
              curTrigger = _triggers[i];
              curPin = curTrigger.pin;

              if (curPin && curTrigger.start - curTrigger._pinPush < start) {
                cs = curTrigger.end - curTrigger.start;
                curPin === trigger && (offset += cs);
                curPin === pin && (otherPinOffset += cs);
              }
            }

            start += offset;
            end += offset;
            self._pinPush = otherPinOffset;

            if (markerStart && offset) {
              cs = {};
              cs[direction.a] = "+=" + offset;
              gsap.set([markerStart, markerEnd], cs);
            }

            if (pin) {
              cs = _getComputedStyle(pin);
              isVertical = direction === _vertical;
              scroll = self.scroll();
              pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
              !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");

              _swapPinIn(pin, spacer, cs);

              pinState = _getState(pin);
              bounds = _getBounds(pin, true);
              oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

              if (pinSpacing) {
                spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                spacerState.t = spacer;
                i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                i && spacerState.push(direction.d, i + _px);

                _setState(spacerState);

                useFixedPosition && self.scroll(prevScroll);
              }

              if (useFixedPosition) {
                override = {
                  top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                  left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                  boxSizing: "border-box",
                  position: "fixed"
                };
                override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                override[_padding] = cs[_padding];
                override[_padding + _Top] = cs[_padding + _Top];
                override[_padding + _Right] = cs[_padding + _Right];
                override[_padding + _Bottom] = cs[_padding + _Bottom];
                override[_padding + _Left] = cs[_padding + _Left];
                pinActiveState = _copyState(pinOriginalState, override, pinReparent);
              }

              if (animation) {
                initted = animation._initted;

                _suppressOverwrites(1);

                animation.progress(1, true);
                pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
                animation.progress(0, true);
                initted || animation.invalidate();

                _suppressOverwrites(0);
              } else {
                pinChange = change;
              }
            } else if (trigger && self.scroll()) {
              bounds = trigger.parentNode;

              while (bounds && bounds !== _body) {
                if (bounds._pinOffset) {
                  start -= bounds._pinOffset;
                  end -= bounds._pinOffset;
                }

                bounds = bounds.parentNode;
              }
            }

            for (i = 0; i < triggerIndex; i++) {
              curTrigger = _triggers[i].pin;
              curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
            }

            self.start = start;
            self.end = end;
            scroll1 = scroll2 = self.scroll();
            scroll1 < prevScroll && self.scroll(prevScroll);
            self.revert(false);
            _refreshing = 0;
            animation && isToggle && animation._initted && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);

            if (prevProgress !== self.progress) {
              scrubTween && animation.totalProgress(prevProgress, true);
              self.progress = prevProgress;
              self.update();
            }

            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            onRefresh && onRefresh(self);
          };

          self.getVelocity = function () {
            return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
          };

          self.update = function (reset, recordVelocity) {
            var scroll = self.scroll(),
              p = reset ? 0 : (scroll - start) / change,
              clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
              prevProgress = self.progress,
              isActive,
              wasActive,
              toggleState,
              action,
              stateChanged,
              toggled;

            if (recordVelocity) {
              scroll2 = scroll1;
              scroll1 = scroll;

              if (snap) {
                snap2 = snap1;
                snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
              }
            }

            anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

            if (clipped !== prevProgress && self.enabled) {
              isActive = self.isActive = !!clipped && clipped < 1;
              wasActive = !!prevProgress && prevProgress < 1;
              toggled = isActive !== wasActive;
              stateChanged = toggled || !!clipped !== !!prevProgress;
              self.direction = clipped > prevProgress ? 1 : -1;
              self.progress = clipped;

              if (!isToggle) {
                if (scrubTween && !_refreshing && !_startup) {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                } else if (animation) {
                  animation.totalProgress(clipped, !!_refreshing);
                }
              }

              if (pin) {
                reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

                if (!useFixedPosition) {
                  pinSetter(pinStart + pinChange * clipped);
                } else if (stateChanged) {
                  action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

                  if (pinReparent) {
                    if (!reset && (isActive || action)) {
                      var bounds = _getBounds(pin, true),
                        _offset = scroll - start;

                      _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                    } else {
                      _reparent(pin, spacer);
                    }
                  }

                  _setState(isActive || action ? pinActiveState : pinState);

                  pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
                }
              }

              snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
              toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
                return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
              });
              onUpdate && !isToggle && !reset && onUpdate(self);

              if (stateChanged && !_refreshing) {
                toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

                if (isToggle) {
                  action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];

                  if (animation && (action === "complete" || action === "reset" || action in animation)) {
                    if (action === "complete") {
                      animation.pause().totalProgress(1);
                    } else if (action === "reset") {
                      animation.restart(true).pause();
                    } else {
                      animation[action]();
                    }
                  }

                  onUpdate && onUpdate(self);
                }

                if (toggled || !_limitCallbacks) {
                  onToggle && toggled && onToggle(self);
                  callbacks[toggleState] && callbacks[toggleState](self);
                  once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

                  if (!toggled) {
                    toggleState = clipped === 1 ? 1 : 3;
                    callbacks[toggleState] && callbacks[toggleState](self);
                  }
                }
              } else if (isToggle && onUpdate && !_refreshing) {
                onUpdate(self);
              }
            }

            if (markerEndSetter) {
              markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
              markerEndSetter(scroll);
            }
          };

          self.enable = function () {
            if (!self.enabled) {
              self.enabled = true;

              _addListener(scroller, "resize", _onResize);

              _addListener(scroller, "scroll", _onScroll);

              onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
              !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
                return start || end || self.refresh();
              }) && (change = 0.01) && (start = end = 0);
            }
          };

          self.disable = function (reset, allowAnimation) {
            if (self.enabled) {
              reset !== false && self.revert();
              self.enabled = self.isActive = false;
              allowAnimation || scrubTween && scrubTween.pause();
              prevScroll = 0;
              pinCache && (pinCache.uncache = 1);
              onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

              if (snapDelayedCall) {
                snapDelayedCall.pause();
                tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
              }

              if (!isViewport) {
                var i = _triggers.length;

                while (i--) {
                  if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                    return;
                  }
                }

                _removeListener(scroller, "resize", _onResize);

                _removeListener(scroller, "scroll", _onScroll);
              }
            }
          };

          self.kill = function (revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            id && delete _ids[id];

            var i = _triggers.indexOf(self);

            _triggers.splice(i, 1);

            i === _i && _direction > 0 && _i--;

            if (animation) {
              animation.scrollTrigger = null;
              revert && animation.render(-1);
              allowAnimation || animation.kill();
            }

            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
              return m.parentNode.removeChild(m);
            });

            if (pin) {
              pinCache && (pinCache.uncache = 1);
              i = 0;

              _triggers.forEach(function (t) {
                return t.pin === pin && i++;
              });

              i || (pinCache.spacer = 0);
            }
          };

          self.enable();
        };

        ScrollTrigger.register = function register(core) {
          if (!_coreInitted) {
            gsap = core || _getGSAP();

            if (_windowExists() && window.document) {
              _win = window;
              _doc = document;
              _docEl = _doc.documentElement;
              _body = _doc.body;
            }

            if (gsap) {
              _toArray = gsap.utils.toArray;
              _clamp = gsap.utils.clamp;
              _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
              gsap.core.globals("ScrollTrigger", ScrollTrigger);

              if (_body) {
                _raf = _win.requestAnimationFrame || function (f) {
                  return setTimeout(f, 16);
                };

                _addListener(_win, "mousewheel", _onScroll);

                _root = [_win, _doc, _docEl, _body];

                _addListener(_doc, "scroll", _onScroll);

                var bodyStyle = _body.style,
                  border = bodyStyle.borderTop,
                  bounds;
                bodyStyle.borderTop = "1px solid #000";
                bounds = _getBounds(_body);
                _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
                _syncInterval = setInterval(_sync, 200);
                gsap.delayedCall(0.5, function () {
                  return _startup = 0;
                });

                _addListener(_doc, "touchcancel", _passThrough);

                _addListener(_body, "touchstart", _passThrough);

                _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
                  return _pointerIsDown = 1;
                });

                _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
                  return _pointerIsDown = 0;
                });

                _transformProp = gsap.utils.checkPrefix("transform");

                _stateProps.push(_transformProp);

                _coreInitted = _getTime();
                _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [_doc, "visibilitychange", function () {
                  var w = _win.innerWidth,
                    h = _win.innerHeight;

                  if (_doc.hidden) {
                    _prevWidth = w;
                    _prevHeight = h;
                  } else if (_prevWidth !== w || _prevHeight !== h) {
                    _onResize();
                  }
                }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
                  return _lastScrollTime || _refreshAll();
                }, _win, "resize", _onResize];

                _iterateAutoRefresh(_addListener);
              }
            }
          }

          return _coreInitted;
        };

        ScrollTrigger.defaults = function defaults(config) {
          for (var p in config) {
            _defaults[p] = config[p];
          }
        };

        ScrollTrigger.kill = function kill() {
          _enabled = 0;

          _triggers.slice(0).forEach(function (trigger) {
            return trigger.kill(1);
          });
        };

        ScrollTrigger.config = function config(vars) {
          "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
          var ms = vars.syncInterval;
          ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);

          if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
          }
        };

        ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
          var t = _toArray(target)[0],
            i = _scrollers.indexOf(t),
            isViewport = _isViewport(t);

          if (~i) {
            _scrollers.splice(i, isViewport ? 6 : 2);
          }

          isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
        };

        ScrollTrigger.matchMedia = function matchMedia(vars) {
          var mq, p, i, func, result;

          for (p in vars) {
            i = _media.indexOf(p);
            func = vars[p];
            _creatingMedia = p;

            if (p === "all") {
              func();
            } else {
              mq = _win.matchMedia(p);

              if (mq) {
                mq.matches && (result = func());

                if (~i) {
                  _media[i + 1] = _combineFunc(_media[i + 1], func);
                  _media[i + 2] = _combineFunc(_media[i + 2], result);
                } else {
                  i = _media.length;

                  _media.push(p, func, result);

                  mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                }

                _media[i + 3] = mq.matches;
              }
            }

            _creatingMedia = 0;
          }

          return _media;
        };

        ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
          query || (_media.length = 0);
          query = _media.indexOf(query);
          query >= 0 && _media.splice(query, 4);
        };

        return ScrollTrigger;
      }();
      ScrollTrigger.version = "3.6.0";

      ScrollTrigger.saveStyles = function (targets) {
        return targets ? _toArray(targets).forEach(function (target) {
          if (target && target.style) {
            var i = _savedStyles.indexOf(target);

            i >= 0 && _savedStyles.splice(i, 4);

            _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
          }
        }) : _savedStyles;
      };

      ScrollTrigger.revert = function (soft, media) {
        return _revertAll(!soft, media);
      };

      ScrollTrigger.create = function (vars, animation) {
        return new ScrollTrigger(vars, animation);
      };

      ScrollTrigger.refresh = function (safe) {
        return safe ? _onResize() : _refreshAll(true);
      };

      ScrollTrigger.update = _updateAll;

      ScrollTrigger.maxScroll = function (element, horizontal) {
        return _maxScroll(element, horizontal ? _horizontal : _vertical);
      };

      ScrollTrigger.getScrollFunc = function (element, horizontal) {
        return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
      };

      ScrollTrigger.getById = function (id) {
        return _ids[id];
      };

      ScrollTrigger.getAll = function () {
        return _triggers.slice(0);
      };

      ScrollTrigger.isScrolling = function () {
        return !!_lastScrollTime;
      };

      ScrollTrigger.addEventListener = function (type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      };

      ScrollTrigger.removeEventListener = function (type, callback) {
        var a = _listeners[type],
          i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      };

      ScrollTrigger.batch = function (targets, vars) {
        var result = [],
          varsCopy = {},
          interval = vars.interval || 0.016,
          batchMax = vars.batchMax || 1e9,
          proxyCallback = function proxyCallback(type, callback) {
            var elements = [],
              triggers = [],
              delay = gsap.delayedCall(interval, function () {
                callback(elements, triggers);
                elements = [];
                triggers = [];
              }).pause();
            return function (self) {
              elements.length || delay.restart(true);
              elements.push(self.trigger);
              triggers.push(self);
              batchMax <= elements.length && delay.progress(1);
            };
          },
          p;

        for (p in vars) {
          varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
        }

        if (_isFunction(batchMax)) {
          batchMax = batchMax();

          _addListener(ScrollTrigger, "refresh", function () {
            return batchMax = vars.batchMax();
          });
        }

        _toArray(targets).forEach(function (target) {
          var config = {};

          for (p in varsCopy) {
            config[p] = varsCopy[p];
          }

          config.trigger = target;
          result.push(ScrollTrigger.create(config));
        });

        return result;
      };

      ScrollTrigger.sort = function (func) {
        return _triggers.sort(func || function (a, b) {
          return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
        });
      };

      _getGSAP() && gsap.registerPlugin(ScrollTrigger);

      exports.ScrollTrigger = ScrollTrigger;
      exports.default = ScrollTrigger;

      Object.defineProperty(exports, '__esModule', { value: true });

    })));

  }, {}], 16: [function (require, module, exports) {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
          (global = global || self, factory(global.window = global.window || {}));
    }(this, (function (exports) {
      'use strict';

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      /*!
       * GSAP 3.6.0
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
      */
      var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      },
        _defaults = {
          duration: .5,
          overwrite: false,
          delay: 0
        },
        _suppressOverwrites,
        _bigNum = 1e8,
        _tinyNum = 1 / _bigNum,
        _2PI = Math.PI * 2,
        _HALF_PI = _2PI / 4,
        _gsID = 0,
        _sqrt = Math.sqrt,
        _cos = Math.cos,
        _sin = Math.sin,
        _isString = function _isString(value) {
          return typeof value === "string";
        },
        _isFunction = function _isFunction(value) {
          return typeof value === "function";
        },
        _isNumber = function _isNumber(value) {
          return typeof value === "number";
        },
        _isUndefined = function _isUndefined(value) {
          return typeof value === "undefined";
        },
        _isObject = function _isObject(value) {
          return typeof value === "object";
        },
        _isNotFalse = function _isNotFalse(value) {
          return value !== false;
        },
        _windowExists = function _windowExists() {
          return typeof window !== "undefined";
        },
        _isFuncOrString = function _isFuncOrString(value) {
          return _isFunction(value) || _isString(value);
        },
        _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () { },
        _isArray = Array.isArray,
        _strictNumExp = /(?:-?\.?\d|\.)+/gi,
        _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        _relExp = /[+-]=-?[.\d]+/,
        _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        _globalTimeline,
        _win,
        _coreInitted,
        _doc,
        _globals = {},
        _installScope = {},
        _coreReady,
        _install = function _install(scope) {
          return (_installScope = _merge(scope, _globals)) && gsap;
        },
        _missingPlugin = function _missingPlugin(property, value) {
          return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        },
        _warn = function _warn(message, suppress) {
          return !suppress && console.warn(message);
        },
        _addGlobal = function _addGlobal(name, obj) {
          return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        },
        _emptyFunc = function _emptyFunc() {
          return 0;
        },
        _reservedProps = {},
        _lazyTweens = [],
        _lazyLookup = {},
        _lastRenderedFrame,
        _plugins = {},
        _effects = {},
        _nextGCFrame = 30,
        _harnessPlugins = [],
        _callbackNames = "",
        _harness = function _harness(targets) {
          var target = targets[0],
            harnessPlugin,
            i;
          _isObject(target) || _isFunction(target) || (targets = [targets]);

          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i = _harnessPlugins.length;

            while (i-- && !_harnessPlugins[i].targetTest(target)) { }

            harnessPlugin = _harnessPlugins[i];
          }

          i = targets.length;

          while (i--) {
            targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
          }

          return targets;
        },
        _getCache = function _getCache(target) {
          return target._gsap || _harness(toArray(target))[0]._gsap;
        },
        _getProperty = function _getProperty(target, property, v) {
          return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        },
        _forEachName = function _forEachName(names, func) {
          return (names = names.split(",")).forEach(func) || names;
        },
        _round = function _round(value) {
          return Math.round(value * 100000) / 100000 || 0;
        },
        _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
          var l = toFind.length,
            i = 0;

          for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) { }

          return i < l;
        },
        _parseVars = function _parseVars(params, type, parent) {
          var isLegacy = _isNumber(params[1]),
            varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
            vars = params[varsIndex],
            irVars;

          isLegacy && (vars.duration = params[1]);
          vars.parent = parent;

          if (type) {
            irVars = vars;

            while (parent && !("immediateRender" in irVars)) {
              irVars = parent.vars.defaults || {};
              parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }

            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
          }

          return vars;
        },
        _lazyRender = function _lazyRender() {
          var l = _lazyTweens.length,
            a = _lazyTweens.slice(0),
            i,
            tween;

          _lazyLookup = {};
          _lazyTweens.length = 0;

          for (i = 0; i < l; i++) {
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        },
        _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
          _lazyTweens.length && _lazyRender();
          animation.render(time, suppressEvents, force);
          _lazyTweens.length && _lazyRender();
        },
        _numericIfPossible = function _numericIfPossible(value) {
          var n = parseFloat(value);
          return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        },
        _passThrough = function _passThrough(p) {
          return p;
        },
        _setDefaults = function _setDefaults(obj, defaults) {
          for (var p in defaults) {
            p in obj || (obj[p] = defaults[p]);
          }

          return obj;
        },
        _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
          for (var p in defaults) {
            p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
          }
        },
        _merge = function _merge(base, toMerge) {
          for (var p in toMerge) {
            base[p] = toMerge[p];
          }

          return base;
        },
        _mergeDeep = function _mergeDeep(base, toMerge) {
          for (var p in toMerge) {
            p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
          }

          return base;
        },
        _copyExcluding = function _copyExcluding(obj, excluding) {
          var copy = {},
            p;

          for (p in obj) {
            p in excluding || (copy[p] = obj[p]);
          }

          return copy;
        },
        _inheritDefaults = function _inheritDefaults(vars) {
          var parent = vars.parent || _globalTimeline,
            func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

          if (_isNotFalse(vars.inherit)) {
            while (parent) {
              func(vars, parent.vars.defaults);
              parent = parent.parent || parent._dp;
            }
          }

          return vars;
        },
        _arraysMatch = function _arraysMatch(a1, a2) {
          var i = a1.length,
            match = i === a2.length;

          while (match && i-- && a1[i] === a2[i]) { }

          return i < 0;
        },
        _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }

          if (lastProp === void 0) {
            lastProp = "_last";
          }

          var prev = parent[lastProp],
            t;

          if (sortBy) {
            t = child[sortBy];

            while (prev && prev[sortBy] > t) {
              prev = prev._prev;
            }
          }

          if (prev) {
            child._next = prev._next;
            prev._next = child;
          } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
          }

          if (child._next) {
            child._next._prev = child;
          } else {
            parent[lastProp] = child;
          }

          child._prev = prev;
          child.parent = child._dp = parent;
          return child;
        },
        _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }

          if (lastProp === void 0) {
            lastProp = "_last";
          }

          var prev = child._prev,
            next = child._next;

          if (prev) {
            prev._next = next;
          } else if (parent[firstProp] === child) {
            parent[firstProp] = next;
          }

          if (next) {
            next._prev = prev;
          } else if (parent[lastProp] === child) {
            parent[lastProp] = prev;
          }

          child._next = child._prev = child.parent = null;
        },
        _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
          child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
          child._act = 0;
        },
        _uncache = function _uncache(animation, child) {
          if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;

            while (a) {
              a._dirty = 1;
              a = a.parent;
            }
          }

          return animation;
        },
        _recacheAncestors = function _recacheAncestors(animation) {
          var parent = animation.parent;

          while (parent && parent.parent) {
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
          }

          return animation;
        },
        _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
          return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
        },
        _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
          return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        },
        _animationCycle = function _animationCycle(tTime, cycleDuration) {
          var whole = Math.floor(tTime /= cycleDuration);
          return tTime && whole === tTime ? whole - 1 : whole;
        },
        _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
          return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        },
        _setEnd = function _setEnd(animation) {
          return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        },
        _alignPlayhead = function _alignPlayhead(animation, totalTime) {
          var parent = animation._dp;

          if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

            _setEnd(animation);

            parent._dirty || _uncache(parent, animation);
          }

          return animation;
        },
        _postAddChecks = function _postAddChecks(timeline, child) {
          var t;

          if (child._time || child._initted && !child._dur) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);

            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
              child.render(t, true);
            }
          }

          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t = timeline;

              while (t._dp) {
                t.rawTime() >= 0 && t.totalTime(t._tTime);
                t = t._dp;
              }
            }

            timeline._zTime = -_tinyNum;
          }
        },
        _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
          child.parent && _removeFromParent(child);
          child._start = _round(position + child._delay);
          child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

          _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

          timeline._recent = child;
          skipChecks || _postAddChecks(timeline, child);
          return timeline;
        },
        _scrollTrigger = function _scrollTrigger(animation, trigger) {
          return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        },
        _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
          _initTween(tween, totalTime);

          if (!tween._initted) {
            return 1;
          }

          if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);

            tween._lazy = [totalTime, suppressEvents];
            return 1;
          }
        },
        _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
          var parent = _ref.parent;
          return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
        },
        _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
          var prevRatio = tween.ratio,
            ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1,
            repeatDelay = tween._rDelay,
            tTime = 0,
            pt,
            iteration,
            prevIteration;

          if (repeatDelay && tween._repeat) {
            tTime = _clamp(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            prevIteration = _animationCycle(tween._tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

            if (iteration !== prevIteration) {
              prevRatio = 1 - ratio;
              tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
          }

          if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
              return;
            }

            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            suppressEvents || _callback(tween, "onStart");
            pt = tween._pt;

            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }

            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
              ratio && _removeFromParent(tween, 1);

              if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

                tween._prom && tween._prom();
              }
            }
          } else if (!tween._zTime) {
            tween._zTime = totalTime;
          }
        },
        _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
          var child;

          if (time > prevTime) {
            child = animation._first;

            while (child && child._start <= time) {
              if (!child._dur && child.data === "isPause" && child._start > prevTime) {
                return child;
              }

              child = child._next;
            }
          } else {
            child = animation._last;

            while (child && child._start >= time) {
              if (!child._dur && child.data === "isPause" && child._start < prevTime) {
                return child;
              }

              child = child._prev;
            }
          }
        },
        _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
          var repeat = animation._repeat,
            dur = _round(duration) || 0,
            totalProgress = animation._tTime / animation._tDur;
          totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
          animation._dur = dur;
          animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
          totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
          skipUncache || _uncache(animation.parent, animation);
          return animation;
        },
        _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
          return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        },
        _zeroPosition = {
          _start: 0,
          endTime: _emptyFunc
        },
        _parsePosition = function _parsePosition(animation, position) {
          var labels = animation.labels,
            recent = animation._recent || _zeroPosition,
            clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
            i,
            offset;

          if (_isString(position) && (isNaN(position) || position in labels)) {
            i = position.charAt(0);

            if (i === "<" || i === ">") {
              return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
            }

            i = position.indexOf("=");

            if (i < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }

            offset = +(position.charAt(i - 1) + position.substr(i + 1));
            return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
          }

          return position == null ? clippedDuration : +position;
        },
        _conditionalReturn = function _conditionalReturn(value, func) {
          return value || value === 0 ? func(value) : func;
        },
        _clamp = function _clamp(min, max, value) {
          return value < min ? min : value > max ? max : value;
        },
        getUnit = function getUnit(value) {
          if (typeof value !== "string") {
            return "";
          }

          var v = _unitExp.exec(value);

          return v ? value.substr(v.index + v[0].length) : "";
        },
        clamp = function clamp(min, max, value) {
          return _conditionalReturn(value, function (v) {
            return _clamp(min, max, v);
          });
        },
        _slice = [].slice,
        _isArrayLike = function _isArrayLike(value, nonEmpty) {
          return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        },
        _flatten = function _flatten(ar, leaveStrings, accumulator) {
          if (accumulator === void 0) {
            accumulator = [];
          }

          return ar.forEach(function (value) {
            var _accumulator;

            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
          }) || accumulator;
        },
        toArray = function toArray(value, leaveStrings) {
          return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
        },
        shuffle = function shuffle(a) {
          return a.sort(function () {
            return .5 - Math.random();
          });
        },
        distribute = function distribute(v) {
          if (_isFunction(v)) {
            return v;
          }

          var vars = _isObject(v) ? v : {
            each: v
          },
            ease = _parseEase(vars.ease),
            from = vars.from || 0,
            base = parseFloat(vars.base) || 0,
            cache = {},
            isDecimal = from > 0 && from < 1,
            ratios = isNaN(from) || isDecimal,
            axis = vars.axis,
            ratioX = from,
            ratioY = from;

          if (_isString(from)) {
            ratioX = ratioY = {
              center: .5,
              edges: .5,
              end: 1
            }[from] || 0;
          } else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
          }

          return function (i, target, a) {
            var l = (a || vars).length,
              distances = cache[l],
              originX,
              originY,
              x,
              y,
              d,
              j,
              max,
              min,
              wrapAt;

            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

              if (!wrapAt) {
                max = -_bigNum;

                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) { }

                wrapAt--;
              }

              distances = cache[l] = [];
              originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
              originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
              max = 0;
              min = _bigNum;

              for (j = 0; j < l; j++) {
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
              }

              from === "random" && shuffle(distances);
              distances.max = max - min;
              distances.min = min;
              distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l < 0 ? base - l : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l < 0 ? _invertEase(ease) : ease;
            }

            l = (distances[i] - distances.min) / distances.max || 0;
            return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
          };
        },
        _roundModifier = function _roundModifier(v) {
          var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
          return function (raw) {
            var n = Math.round(parseFloat(raw) / v) * v * p;
            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
          };
        },
        snap = function snap(snapTo, value) {
          var isArray = _isArray(snapTo),
            radius,
            is2D;

          if (!isArray && _isObject(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;

            if (snapTo.values) {
              snapTo = toArray(snapTo.values);

              if (is2D = !_isNumber(snapTo[0])) {
                radius *= radius;
              }
            } else {
              snapTo = _roundModifier(snapTo.increment);
            }
          }

          return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
          } : function (raw) {
            var x = parseFloat(is2D ? raw.x : raw),
              y = parseFloat(is2D ? raw.y : 0),
              min = _bigNum,
              closest = 0,
              i = snapTo.length,
              dx,
              dy;

            while (i--) {
              if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i] - x);
              }

              if (dx < min) {
                min = dx;
                closest = i;
              }
            }

            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
          });
        },
        random = function random(min, max, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
          });
        },
        pipe = function pipe() {
          for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
          }

          return function (value) {
            return functions.reduce(function (v, f) {
              return f(v);
            }, value);
          };
        },
        unitize = function unitize(func, unit) {
          return function (value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
          };
        },
        normalize = function normalize(min, max, value) {
          return mapRange(min, max, 0, 1, value);
        },
        _wrapArray = function _wrapArray(a, wrapper, value) {
          return _conditionalReturn(value, function (index) {
            return a[~~wrapper(index)];
          });
        },
        wrap = function wrap(min, max, value) {
          var range = max - min;
          return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
            return (range + (value - min) % range) % range + min;
          });
        },
        wrapYoyo = function wrapYoyo(min, max, value) {
          var range = max - min,
            total = range * 2;
          return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
            value = (total + (value - min) % total) % total || 0;
            return min + (value > range ? total - value : value);
          });
        },
        _replaceRandom = function _replaceRandom(value) {
          var prev = 0,
            s = "",
            i,
            nums,
            end,
            isArray;

          while (~(i = value.indexOf("random(", prev))) {
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end + 1;
          }

          return s + value.substr(prev, value.length - prev);
        },
        mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin,
            outRange = outMax - outMin;
          return _conditionalReturn(value, function (value) {
            return outMin + ((value - inMin) / inRange * outRange || 0);
          });
        },
        interpolate = function interpolate(start, end, progress, mutate) {
          var func = isNaN(start + end) ? 0 : function (p) {
            return (1 - p) * start + p * end;
          };

          if (!func) {
            var isString = _isString(start),
              master = {},
              p,
              i,
              interpolators,
              l,
              il;

            progress === true && (mutate = 1) && (progress = null);

            if (isString) {
              start = {
                p: start
              };
              end = {
                p: end
              };
            } else if (_isArray(start) && !_isArray(end)) {
              interpolators = [];
              l = start.length;
              il = l - 2;

              for (i = 1; i < l; i++) {
                interpolators.push(interpolate(start[i - 1], start[i]));
              }

              l--;

              func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
              };

              progress = end;
            } else if (!mutate) {
              start = _merge(_isArray(start) ? [] : {}, start);
            }

            if (!interpolators) {
              for (p in end) {
                _addPropTween.call(master, start, p, "get", end[p]);
              }

              func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
              };
            }
          }

          return _conditionalReturn(progress, func);
        },
        _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
          var labels = timeline.labels,
            min = _bigNum,
            p,
            distance,
            label;

          for (p in labels) {
            distance = labels[p] - fromTime;

            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
              label = p;
              min = distance;
            }
          }

          return label;
        },
        _callback = function _callback(animation, type, executeLazyFirst) {
          var v = animation.vars,
            callback = v[type],
            params,
            scope;

          if (!callback) {
            return;
          }

          params = v[type + "Params"];
          scope = v.callbackScope || animation;
          executeLazyFirst && _lazyTweens.length && _lazyRender();
          return params ? callback.apply(scope, params) : callback.call(scope);
        },
        _interrupt = function _interrupt(animation) {
          _removeFromParent(animation);

          animation.progress() < 1 && _callback(animation, "onInterrupt");
          return animation;
        },
        _quickTween,
        _createPlugin = function _createPlugin(config) {
          config = !config.name && config["default"] || config;

          var name = config.name,
            isFunc = _isFunction(config),
            Plugin = name && !isFunc && config.init ? function () {
              this._props = [];
            } : config,
            instanceDefaults = {
              init: _emptyFunc,
              render: _renderPropTweens,
              add: _addPropTween,
              kill: _killPropTweensOf,
              modifier: _addPluginModifier,
              rawVars: 0
            },
            statics = {
              targetTest: 0,
              get: 0,
              getSetter: _getSetter,
              aliases: {},
              register: 0
            };

          _wake();

          if (config !== Plugin) {
            if (_plugins[name]) {
              return;
            }

            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

            _plugins[Plugin.prop = name] = Plugin;

            if (config.targetTest) {
              _harnessPlugins.push(Plugin);

              _reservedProps[name] = 1;
            }

            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }

          _addGlobal(name, Plugin);

          config.register && config.register(gsap, Plugin, PropTween);
        },
        _255 = 255,
        _colorLookup = {
          aqua: [0, _255, _255],
          lime: [0, _255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, _255],
          navy: [0, 0, 128],
          white: [_255, _255, _255],
          olive: [128, 128, 0],
          yellow: [_255, _255, 0],
          orange: [_255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [_255, 0, 0],
          pink: [_255, 192, 203],
          cyan: [0, _255, _255],
          transparent: [_255, _255, _255, 0]
        },
        _hue = function _hue(h, m1, m2) {
          h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
          return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
        },
        splitColor = function splitColor(v, toHSL, forceAlpha) {
          var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
            r,
            g,
            b,
            h,
            s,
            l,
            max,
            min,
            d,
            wasHSL;

          if (!a) {
            if (v.substr(-1) === ",") {
              v = v.substr(0, v.length - 1);
            }

            if (_colorLookup[v]) {
              a = _colorLookup[v];
            } else if (v.charAt(0) === "#") {
              if (v.length < 6) {
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
              }

              if (v.length === 9) {
                a = parseInt(v.substr(1, 6), 16);
                return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
              }

              v = parseInt(v.substr(1), 16);
              a = [v >> 16, v >> 8 & _255, v & _255];
            } else if (v.substr(0, 3) === "hsl") {
              a = wasHSL = v.match(_strictNumExp);

              if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1);
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
              } else if (~v.indexOf("=")) {
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
              }
            } else {
              a = v.match(_strictNumExp) || _colorLookup.transparent;
            }

            a = a.map(Number);
          }

          if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;

            if (max === min) {
              h = s = 0;
            } else {
              d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
              h *= 60;
            }

            a[0] = ~~(h + .5);
            a[1] = ~~(s * 100 + .5);
            a[2] = ~~(l * 100 + .5);
          }

          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        },
        _colorOrderData = function _colorOrderData(v) {
          var values = [],
            c = [],
            i = -1;
          v.split(_colorExp).forEach(function (v) {
            var a = v.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
          });
          values.c = c;
          return values;
        },
        _formatColors = function _formatColors(s, toHSL, orderMatchData) {
          var result = "",
            colors = (s + result).match(_colorExp),
            type = toHSL ? "hsla(" : "rgba(",
            i = 0,
            c,
            shell,
            d,
            l;

          if (!colors) {
            return s;
          }

          colors = colors.map(function (color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });

          if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;

            if (c.join(result) !== d.c.join(result)) {
              shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
              l = shell.length - 1;

              for (; i < l; i++) {
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
              }
            }
          }

          if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;

            for (; i < l; i++) {
              result += shell[i] + colors[i];
            }
          }

          return result + shell[l];
        },
        _colorExp = function () {
          var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            p;

          for (p in _colorLookup) {
            s += "|" + p + "\\b";
          }

          return new RegExp(s + ")", "gi");
        }(),
        _hslExp = /hsl[a]?\(/,
        _colorStringFilter = function _colorStringFilter(a) {
          var combined = a.join(" "),
            toHSL;
          _colorExp.lastIndex = 0;

          if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
          }
        },
        _tickerActive,
        _ticker = function () {
          var _getTime = Date.now,
            _lagThreshold = 500,
            _adjustedLag = 33,
            _startTime = _getTime(),
            _lastUpdate = _startTime,
            _gap = 1000 / 240,
            _nextTime = _gap,
            _listeners = [],
            _id,
            _req,
            _raf,
            _self,
            _delta,
            _i,
            _tick = function _tick(v) {
              var elapsed = _getTime() - _lastUpdate,
                manual = v === true,
                overlap,
                dispatch,
                time,
                frame;

              elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
              _lastUpdate += elapsed;
              time = _lastUpdate - _startTime;
              overlap = time - _nextTime;

              if (overlap > 0 || manual) {
                frame = ++_self.frame;
                _delta = time - _self.time * 1000;
                _self.time = time = time / 1000;
                _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                dispatch = 1;
              }

              manual || (_id = _req(_tick));

              if (dispatch) {
                for (_i = 0; _i < _listeners.length; _i++) {
                  _listeners[_i](time, _delta, frame, v);
                }
              }
            };

          _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
              _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
              return _delta / (1000 / (fps || 60));
            },
            wake: function wake() {
              if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                  _win = _coreInitted = window;
                  _doc = _win.document || {};
                  _globals.gsap = gsap;
                  (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

                  _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

                  _raf = _win.requestAnimationFrame;
                }

                _id && _self.sleep();

                _req = _raf || function (f) {
                  return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };

                _tickerActive = 1;

                _tick(2);
              }
            },
            sleep: function sleep() {
              (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
              _tickerActive = 0;
              _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
              _lagThreshold = threshold || 1 / _tinyNum;
              _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            },
            fps: function fps(_fps) {
              _gap = 1000 / (_fps || 240);
              _nextTime = _self.time * 1000 + _gap;
            },
            add: function add(callback) {
              _listeners.indexOf(callback) < 0 && _listeners.push(callback);

              _wake();
            },
            remove: function remove(callback) {
              var i;
              ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
            },
            _listeners: _listeners
          };
          return _self;
        }(),
        _wake = function _wake() {
          return !_tickerActive && _ticker.wake();
        },
        _easeMap = {},
        _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
        _quotesExp = /["']/g,
        _parseObjectInString = function _parseObjectInString(value) {
          var obj = {},
            split = value.substr(1, value.length - 3).split(":"),
            key = split[0],
            i = 1,
            l = split.length,
            index,
            val,
            parsedVal;

          for (; i < l; i++) {
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
          }

          return obj;
        },
        _valueInParentheses = function _valueInParentheses(value) {
          var open = value.indexOf("(") + 1,
            close = value.indexOf(")"),
            nested = value.indexOf("(", open);
          return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        },
        _configEaseFromString = function _configEaseFromString(name) {
          var split = (name + "").split("("),
            ease = _easeMap[split[0]];
          return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        },
        _invertEase = function _invertEase(ease) {
          return function (p) {
            return 1 - ease(1 - p);
          };
        },
        _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
          var child = timeline._first,
            ease;

          while (child) {
            if (child instanceof Timeline) {
              _propagateYoyoEase(child, isYoyo);
            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
              if (child.timeline) {
                _propagateYoyoEase(child.timeline, isYoyo);
              } else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
              }
            }

            child = child._next;
          }
        },
        _parseEase = function _parseEase(ease, defaultEase) {
          return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        },
        _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
          if (easeOut === void 0) {
            easeOut = function easeOut(p) {
              return 1 - easeIn(1 - p);
            };
          }

          if (easeInOut === void 0) {
            easeInOut = function easeInOut(p) {
              return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
          }

          var ease = {
            easeIn: easeIn,
            easeOut: easeOut,
            easeInOut: easeInOut
          },
            lowercaseName;

          _forEachName(names, function (name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

            for (var p in ease) {
              _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }
          });

          return ease;
        },
        _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
          return function (p) {
            return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
          };
        },
        _configElastic = function _configElastic(type, amplitude, period) {
          var p1 = amplitude >= 1 ? amplitude : 1,
            p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
            p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
            easeOut = function easeOut(p) {
              return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
            },
            ease = type === "out" ? easeOut : type === "in" ? function (p) {
              return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);

          p2 = _2PI / p2;

          ease.config = function (amplitude, period) {
            return _configElastic(type, amplitude, period);
          };

          return ease;
        },
        _configBack = function _configBack(type, overshoot) {
          if (overshoot === void 0) {
            overshoot = 1.70158;
          }

          var easeOut = function easeOut(p) {
            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
          },
            ease = type === "out" ? easeOut : type === "in" ? function (p) {
              return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);

          ease.config = function (overshoot) {
            return _configBack(type, overshoot);
          };

          return ease;
        };

      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
        var power = i < 5 ? i + 1 : i;

        _insertEase(name + ",Power" + (power - 1), i ? function (p) {
          return Math.pow(p, power);
        } : function (p) {
          return p;
        }, function (p) {
          return 1 - Math.pow(1 - p, power);
        }, function (p) {
          return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });

      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

      (function (n, c) {
        var n1 = 1 / c,
          n2 = 2 * n1,
          n3 = 2.5 * n1,
          easeOut = function easeOut(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
          };

        _insertEase("Bounce", function (p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);

      _insertEase("Expo", function (p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
      });

      _insertEase("Circ", function (p) {
        return -(_sqrt(1 - p * p) - 1);
      });

      _insertEase("Sine", function (p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });

      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }

          var p1 = 1 / steps,
            p2 = steps + (immediateStart ? 0 : 1),
            p3 = immediateStart ? 1 : 0,
            max = 1 - _tinyNum;
          return function (p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];

      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
        return _callbackNames += name + "," + name + "Params,";
      });

      var GSCache = function GSCache(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      var Animation = function () {
        function Animation(vars, time) {
          var parent = vars.parent || _globalTimeline;
          this.vars = vars;
          this._delay = +vars.delay || 0;

          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }

          this._ts = 1;

          _setDuration(this, +vars.duration, 1, 1);

          this.data = vars.data;
          _tickerActive || _ticker.wake();
          parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
          vars.reversed && this.reverse();
          vars.paused && this.paused(true);
        }

        var _proto = Animation.prototype;

        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }

          return this._delay;
        };

        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };

        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }

          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };

        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();

          if (!arguments.length) {
            return this._tTime;
          }

          var parent = this._dp;

          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);

            !parent._dp || parent.parent || _postAddChecks(parent, this);

            while (parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }

              parent = parent.parent;
            }

            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }

          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);

            _lazySafeRender(this, _totalTime, suppressEvents);
          }

          return this;
        };

        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
        };

        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };

        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };

        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;

          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };

        _proto.timeScale = function timeScale(value) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }

          if (this._rts === value) {
            return this;
          }

          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        };

        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }

          if (this._ps !== value) {
            this._ps = value;

            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();

              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
            }
          }

          return this;
        };

        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }

          return this._start;
        };

        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
        };

        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };

        _proto.globalTime = function globalTime(rawTime) {
          var animation = this,
            time = arguments.length ? rawTime : animation.rawTime();

          while (animation) {
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
          }

          return time;
        };

        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }

          return this._repeat === -2 ? Infinity : this._repeat;
        };

        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            this._rDelay = value;
            return _onUpdateTotalDuration(this);
          }

          return this._rDelay;
        };

        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }

          return this._yoyo;
        };

        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };

        _proto.restart = function restart(includeDelay, suppressEvents) {
          return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };

        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };

        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };

        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };

        _proto.resume = function resume() {
          return this.paused(false);
        };

        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }

          return this._rts < 0;
        };

        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };

        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp,
            start = this._start,
            rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };

        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;

          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }

            return this;
          }

          return vars[type];
        };

        _proto.then = function then(onFulfilled) {
          var self = this;
          return new Promise(function (resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
              _resolve = function _resolve() {
                var _then = self.then;
                self.then = null;
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
              };

            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
              _resolve();
            } else {
              self._prom = _resolve;
            }
          });
        };

        _proto.kill = function kill() {
          _interrupt(this);
        };

        return Animation;
      }();

      _setDefaults(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });

      var Timeline = function (_Animation) {
        _inheritsLoose(Timeline, _Animation);

        function Timeline(vars, time) {
          var _this;

          if (vars === void 0) {
            vars = {};
          }

          _this = _Animation.call(this, vars, time) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }

        var _proto2 = Timeline.prototype;

        _proto2.to = function to(targets, vars, position) {
          new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
          return this;
        };

        _proto2.from = function from(targets, vars, position) {
          new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
          return this;
        };

        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
          return this;
        };

        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition(this, position), 1);
          return this;
        };

        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
        };

        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition(this, position));
          return this;
        };

        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };

        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };

        _proto2.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time,
            tDur = this._dirty ? this.totalDuration() : this._tDur,
            dur = this._dur,
            tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
            crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
            time,
            child,
            next,
            iteration,
            cycleDuration,
            prevPaused,
            pauseTween,
            timeScale,
            prevStart,
            prevIteration,
            yoyo,
            isYoyo;

          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }

            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;

            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }

            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;

              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }

              time = _round(tTime % cycleDuration);

              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);

                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }

                time > dur && (time = dur);
              }

              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }

              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1,
                  doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : dur;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                !suppressEvents && this.parent && _callback(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

                if (prevTime !== this._time || prevPaused !== !this._ts) {
                  return this;
                }

                dur = this._dur;
                tDur = this._tDur;

                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -0.0001;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }

                this._lock = 0;

                if (!this._ts && !prevPaused) {
                  return this;
                }

                _propagateYoyoEase(this, isYoyo);
              }
            }

            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }

            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;

            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }

            !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");

            if (time >= prevTime && totalTime >= 0) {
              child = this._first;

              while (child) {
                next = child._next;

                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }

                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }

                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;

              while (child) {
                next = child._prev;

                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }

                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }

                child = next;
              }
            }

            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

              if (this._ts) {
                this._start = prevStart;

                _setEnd(this);

                return this.render(totalTime, suppressEvents, force);
              }
            }

            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }

          return this;
        };

        _proto2.add = function add(child, position) {
          var _this2 = this;

          _isNumber(position) || (position = _parsePosition(this, position));

          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function (obj) {
                return _this2.add(obj, position);
              });
              return this;
            }

            if (_isString(child)) {
              return this.addLabel(child, position);
            }

            if (_isFunction(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }

          return this !== child ? _addToTimeline(this, child, position) : this;
        };

        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }

          if (tweens === void 0) {
            tweens = true;
          }

          if (timelines === void 0) {
            timelines = true;
          }

          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }

          var a = [],
            child = this._first;

          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }

            child = child._next;
          }

          return a;
        };

        _proto2.getById = function getById(id) {
          var animations = this.getChildren(1, 1, 1),
            i = animations.length;

          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };

        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }

          if (_isFunction(child)) {
            return this.killTweensOf(child);
          }

          _removeLinkedListItem(this, child);

          if (child === this._recent) {
            this._recent = this._last;
          }

          return _uncache(this);
        };

        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }

          this._forcing = 1;

          if (!this._dp && this._ts) {
            this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }

          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

          this._forcing = 0;
          return this;
        };

        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition(this, position);
          return this;
        };

        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };

        _proto2.addPause = function addPause(position, callback, params) {
          var t = Tween.delayedCall(0, callback || _emptyFunc, params);
          t.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t, _parsePosition(this, position));
        };

        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);

          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }

            child = child._next;
          }
        };

        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive),
            i = tweens.length;

          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }

          return this;
        };

        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
          var a = [],
            parsedTargets = toArray(targets),
            child = this._first,
            isGlobalTime = _isNumber(onlyActive),
            children;

          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }

            child = child._next;
          }

          return a;
        };

        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};

          var tl = this,
            endTime = _parsePosition(tl, position),
            _vars = vars,
            startAt = _vars.startAt,
            _onStart = _vars.onStart,
            onStartParams = _vars.onStartParams,
            immediateRender = _vars.immediateRender,
            tween = Tween.to(tl, _setDefaults({
              ease: "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
              onStart: function onStart() {
                tl.pause();
                var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                _onStart && _onStart.apply(tween, onStartParams || []);
              }
            }, vars));

          return immediateRender ? tween.render(0) : tween;
        };

        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
            }
          }, vars));
        };

        _proto2.recent = function recent() {
          return this._recent;
        };

        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }

          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };

        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }

          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };

        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };

        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }

          var child = this._first,
            labels = this.labels,
            p;

          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }

            child = child._next;
          }

          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }

          return _uncache(this);
        };

        _proto2.invalidate = function invalidate() {
          var child = this._first;
          this._lock = 0;

          while (child) {
            child.invalidate();
            child = child._next;
          }

          return _Animation.prototype.invalidate.call(this);
        };

        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }

          var child = this._first,
            next;

          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }

          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };

        _proto2.totalDuration = function totalDuration(value) {
          var max = 0,
            self = this,
            child = self._last,
            prevStart = _bigNum,
            prev,
            start,
            parent;

          if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
          }

          if (self._dirty) {
            parent = self.parent;

            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;

              if (start > prevStart && self._sort && child._ts && !self._lock) {
                self._lock = 1;
                _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }

              if (start < 0 && child._ts) {
                max -= start;

                if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                  self._start += start / self._ts;
                  self._time -= start;
                  self._tTime -= start;
                }

                self.shiftChildren(-start, false, -1e999);
                prevStart = 0;
              }

              child._end > max && child._ts && (max = child._end);
              child = prev;
            }

            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

            self._dirty = 0;
          }

          return self._tDur;
        };

        Timeline.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

            _lastRenderedFrame = _ticker.frame;
          }

          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) {
                child = child._next;
              }

              child || _ticker.sleep();
            }
          }
        };

        return Timeline;
      }(Animation);

      _setDefaults(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });

      var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
          index = 0,
          matchIndex = 0,
          result,
          startNums,
          color,
          endNum,
          chunk,
          startNum,
          hasRandom,
          a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";

        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }

        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }

        startNums = start.match(_complexStringNumExp) || [];

        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);

          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }

          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              s: startNum,
              c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }

        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;

        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }

        this._pt = pt;
        return pt;
      },
        _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
          _isFunction(end) && (end = end(index || 0, target, targets));
          var currentValue = target[prop],
            parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
            setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
            pt;

          if (_isString(end)) {
            if (~end.indexOf("random(")) {
              end = _replaceRandom(end);
            }

            if (end.charAt(1) === "=") {
              end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
            }
          }

          if (parsedStart !== end) {
            if (!isNaN(parsedStart * end)) {
              pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt.fp = funcParam);
              modifier && pt.modifier(modifier, this, target);
              return this._pt = pt;
            }

            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
          }
        },
        _processVars = function _processVars(vars, index, target, targets, tween) {
          _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

          if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
            return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
          }

          var copy = {},
            p;

          for (p in vars) {
            copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
          }

          return copy;
        },
        _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
          var plugin, pt, ptLookup, i;

          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i = plugin._props.length;

              while (i--) {
                ptLookup[plugin._props[i]] = pt;
              }
            }
          }

          return plugin;
        },
        _overwritingTween,
        _initTween = function _initTween(tween, time) {
          var vars = tween.vars,
            ease = vars.ease,
            startAt = vars.startAt,
            immediateRender = vars.immediateRender,
            lazy = vars.lazy,
            onUpdate = vars.onUpdate,
            onUpdateParams = vars.onUpdateParams,
            callbackScope = vars.callbackScope,
            runBackwards = vars.runBackwards,
            yoyoEase = vars.yoyoEase,
            keyframes = vars.keyframes,
            autoRevert = vars.autoRevert,
            dur = tween._dur,
            prevStartAt = tween._startAt,
            targets = tween._targets,
            parent = tween.parent,
            fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
            autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
            tl = tween.timeline,
            cleanVars,
            i,
            p,
            pt,
            target,
            hasPriority,
            gsData,
            harness,
            plugin,
            ptLookup,
            index,
            harnessVars,
            overwritten;
          tl && (!keyframes || !ease) && (ease = "none");
          tween._ease = _parseEase(ease, _defaults.ease);
          tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

          if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
          }

          if (!tl) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            prevStartAt && prevStartAt.render(-1, true).kill();

            if (startAt) {
              _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
              }, startAt)));

              if (immediateRender) {
                if (time > 0) {
                  autoRevert || (tween._startAt = 0);
                } else if (dur && !(time < 0 && prevStartAt)) {
                  time && (tween._zTime = time);
                  return;
                }
              }
            } else if (runBackwards && dur) {
              if (prevStartAt) {
                !autoRevert && (tween._startAt = 0);
              } else {
                time && (immediateRender = false);
                p = _setDefaults({
                  overwrite: false,
                  data: "isFromStart",
                  lazy: immediateRender && _isNotFalse(lazy),
                  immediateRender: immediateRender,
                  stagger: 0,
                  parent: parent
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars);

                _removeFromParent(tween._startAt = Tween.set(targets, p));

                if (!immediateRender) {
                  _initTween(tween._startAt, _tinyNum);
                } else if (!time) {
                  return;
                }
              }
            }

            tween._pt = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;

            for (i = 0; i < targets.length; i++) {
              target = targets[i];
              gsData = target._gsap || _harness(targets)[i]._gsap;
              tween._ptLookup[i] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i : fullTargets.indexOf(target);

              if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

                plugin._props.forEach(function (name) {
                  ptLookup[name] = pt;
                });

                plugin.priority && (hasPriority = 1);
              }

              if (!harness || harnessVars) {
                for (p in cleanVars) {
                  if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                    plugin.priority && (hasPriority = 1);
                  } else {
                    ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                  }
                }
              }

              tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

              if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;

                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));

                overwritten = !tween.parent;
                _overwritingTween = 0;
              }

              tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }

            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
          }

          tween._from = !tl && !!vars.runBackwards;
          tween._onUpdate = onUpdate;
          tween._initted = (!tween._op || tween._pt) && !overwritten;
        },
        _addAliasesToVars = function _addAliasesToVars(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0,
            propertyAliases = harness && harness.aliases,
            copy,
            p,
            i,
            aliases;

          if (!propertyAliases) {
            return vars;
          }

          copy = _merge({}, vars);

          for (p in propertyAliases) {
            if (p in copy) {
              aliases = propertyAliases[p].split(",");
              i = aliases.length;

              while (i--) {
                copy[aliases[i]] = copy[p];
              }
            }
          }

          return copy;
        },
        _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
          return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        },
        _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");

      var Tween = function (_Animation2) {
        _inheritsLoose(Tween, _Animation2);

        function Tween(targets, vars, time, skipInherit) {
          var _this3;

          if (typeof vars === "number") {
            time.duration = vars;
            vars = time;
            time = null;
          }

          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
          var _this3$vars = _this3.vars,
            duration = _this3$vars.duration,
            delay = _this3$vars.delay,
            immediateRender = _this3$vars.immediateRender,
            stagger = _this3$vars.stagger,
            overwrite = _this3$vars.overwrite,
            keyframes = _this3$vars.keyframes,
            defaults = _this3$vars.defaults,
            scrollTrigger = _this3$vars.scrollTrigger,
            yoyoEase = _this3$vars.yoyoEase,
            parent = _this3.parent,
            parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
            tl,
            i,
            copy,
            l,
            p,
            curTarget,
            staggerFunc,
            staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;

          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults || {}
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;

            if (keyframes) {
              _setDefaults(tl.vars.defaults, {
                ease: "none"
              });

              keyframes.forEach(function (frame) {
                return tl.to(parsedTargets, frame, ">");
              });
            } else {
              l = parsedTargets.length;
              staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }

              for (i = 0; i < l; i++) {
                copy = {};

                for (p in vars) {
                  if (_staggerPropsToSkip.indexOf(p) < 0) {
                    copy[p] = vars[p];
                  }
                }

                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }

                tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
              }

              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            }

            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }

          if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);

            _globalTimeline.killTweensOf(parsedTargets);

            _overwritingTween = 0;
          }

          parent && _postAddChecks(parent, _assertThisInitialized(_this3));

          if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;

            _this3.render(Math.max(0, -delay));
          }

          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }

        var _proto3 = Tween.prototype;

        _proto3.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time,
            tDur = this._tDur,
            dur = this._dur,
            tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
            time,
            pt,
            iteration,
            cycleDuration,
            prevIteration,
            isYoyo,
            ratio,
            timeline,
            yoyoEase;

          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
            time = tTime;
            timeline = this.timeline;

            if (this._repeat) {
              cycleDuration = dur + this._rDelay;

              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }

              time = _round(tTime % cycleDuration);

              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);

                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }

                time > dur && (time = dur);
              }

              isYoyo = this._yoyo && iteration & 1;

              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }

              prevIteration = _animationCycle(this._tTime, cycleDuration);

              if (time === prevTime && !force && this._initted) {
                return this;
              }

              if (iteration !== prevIteration) {
                timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

                if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                  this._lock = force = 1;
                  this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }

            if (!this._initted) {
              if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                this._tTime = 0;
                return this;
              }

              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }

            this._tTime = tTime;
            this._time = time;

            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }

            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }

            time && !prevTime && !suppressEvents && _callback(this, "onStart");
            pt = this._pt;

            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }

            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

            if (this._onUpdate && !suppressEvents) {
              totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);

              _callback(this, "onUpdate");
            }

            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }

          return this;
        };

        _proto3.targets = function targets() {
          return this._targets;
        };

        _proto3.invalidate = function invalidate() {
          this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate();
          return _Animation2.prototype.invalidate.call(this);
        };

        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }

          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
          }

          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }

          var parsedTargets = this._targets,
            killingTargets = targets ? toArray(targets) : parsedTargets,
            propTweenLookup = this._ptLookup,
            firstPT = this._pt,
            overwrittenProps,
            curLookup,
            curOverwriteProps,
            props,
            p,
            pt,
            i;

          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }

          overwrittenProps = this._op = this._op || [];

          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};

              _forEachName(vars, function (name) {
                return p[name] = 1;
              });

              vars = p;
            }

            vars = _addAliasesToVars(parsedTargets, vars);
          }

          i = parsedTargets.length;

          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];

              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }

              for (p in props) {
                pt = curLookup && curLookup[p];

                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }

                  delete curLookup[p];
                }

                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }

          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };

        Tween.to = function to(targets, vars) {
          return new Tween(targets, vars, arguments[2]);
        };

        Tween.from = function from(targets, vars) {
          return new Tween(targets, _parseVars(arguments, 1));
        };

        Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };

        Tween.fromTo = function fromTo(targets, fromVars, toVars) {
          return new Tween(targets, _parseVars(arguments, 2));
        };

        Tween.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween(targets, vars);
        };

        Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };

        return Tween;
      }(Animation);

      _setDefaults(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });

      _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
        Tween[name] = function () {
          var tl = new Timeline(),
            params = _slice.call(arguments, 0);

          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });

      var _setterPlain = function _setterPlain(target, property, value) {
        return target[property] = value;
      },
        _setterFunc = function _setterFunc(target, property, value) {
          return target[property](value);
        },
        _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
          return target[property](data.fp, value);
        },
        _setterAttribute = function _setterAttribute(target, property, value) {
          return target.setAttribute(property, value);
        },
        _getSetter = function _getSetter(target, property) {
          return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        },
        _renderPlain = function _renderPlain(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
        },
        _renderBoolean = function _renderBoolean(ratio, data) {
          return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        },
        _renderComplexString = function _renderComplexString(ratio, data) {
          var pt = data._pt,
            s = "";

          if (!ratio && data.b) {
            s = data.b;
          } else if (ratio === 1 && data.e) {
            s = data.e;
          } else {
            while (pt) {
              s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
              pt = pt._next;
            }

            s += data.c;
          }

          data.set(data.t, data.p, s, data);
        },
        _renderPropTweens = function _renderPropTweens(ratio, data) {
          var pt = data._pt;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        },
        _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
          var pt = this._pt,
            next;

          while (pt) {
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
          }
        },
        _killPropTweensOf = function _killPropTweensOf(property) {
          var pt = this._pt,
            hasNonDependentRemaining,
            next;

          while (pt) {
            next = pt._next;

            if (pt.p === property && !pt.op || pt.op === property) {
              _removeLinkedListItem(this, pt, "_pt");
            } else if (!pt.dep) {
              hasNonDependentRemaining = 1;
            }

            pt = next;
          }

          return !hasNonDependentRemaining;
        },
        _setterWithModifier = function _setterWithModifier(target, property, value, data) {
          data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        },
        _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
          var pt = parent._pt,
            next,
            pt2,
            first,
            last;

          while (pt) {
            next = pt._next;
            pt2 = first;

            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }

            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }

            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }

            pt = next;
          }

          parent._pt = first;
        };

      var PropTween = function () {
        function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;

          if (next) {
            next._prev = this;
          }
        }

        var _proto4 = PropTween.prototype;

        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };

        return PropTween;
      }();

      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
        return _reservedProps[name] = 1;
      });

      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      var _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          args.forEach(function (config) {
            return _createPlugin(config);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString(target) && (target = toArray(target)[0]);

          var getter = _getCache(target || {}).get,
            format = unit ? _passThrough : _numericIfPossible;

          unit === "native" && (unit = "");
          return !target ? target : !property ? function (property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);

          if (target.length > 1) {
            var setters = target.map(function (t) {
              return gsap.quickSetter(t, property, unit);
            }),
              l = setters.length;
            return function (value) {
              var i = l;

              while (i--) {
                setters[i](value);
              }
            };
          }

          target = target[0] || {};

          var Plugin = _plugins[property],
            cache = _getCache(target),
            p = cache.harness && (cache.harness.aliases || {})[property] || property,
            setter = Plugin ? function (value) {
              var p = new Plugin();
              _quickTween._pt = 0;
              p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
              p.render(1, p);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);

          return Plugin ? setter : function (value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
        },
        config: function config(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref2) {
          var name = _ref2.name,
            effect = _ref2.effect,
            plugins = _ref2.plugins,
            defaults = _ref2.defaults,
            extendTimeline = _ref2.extendTimeline;
          (plugins || "").split(",").forEach(function (pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });

          _effects[name] = function (targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
          };

          if (extendTimeline) {
            Timeline.prototype[name] = function (targets, vars, position) {
              return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }

          var tl = new Timeline(vars),
            child,
            next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

          _globalTimeline.remove(tl);

          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;

          while (child) {
            next = child._next;

            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }

            child = next;
          }

          _addToTimeline(_globalTimeline, tl, 0);

          return tl;
        },
        utils: {
          wrap: wrap,
          wrapYoyo: wrapYoyo,
          distribute: distribute,
          random: random,
          snap: snap,
          normalize: normalize,
          getUnit: getUnit,
          clamp: clamp,
          splitColor: splitColor,
          toArray: toArray,
          mapRange: mapRange,
          pipe: pipe,
          unitize: unitize,
          interpolate: interpolate,
          shuffle: shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween: PropTween,
          globals: _addGlobal,
          Tween: Tween,
          Timeline: Timeline,
          Animation: Animation,
          getCache: _getCache,
          _removeLinkedListItem: _removeLinkedListItem,
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
          }
        }
      };

      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
        return _gsap[name] = Tween[name];
      });

      _ticker.add(Timeline.updateRoot);

      _quickTween = _gsap.to({}, {
        duration: 0
      });

      var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
        var pt = plugin._pt;

        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }

        return pt;
      },
        _addModifiers = function _addModifiers(tween, modifiers) {
          var targets = tween._targets,
            p,
            i,
            pt;

          for (p in modifiers) {
            i = targets.length;

            while (i--) {
              pt = tween._ptLookup[i][p];

              if (pt && (pt = pt.d)) {
                if (pt._pt) {
                  pt = _getPluginPropTween(pt, p);
                }

                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
              }
            }
          }
        },
        _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
          return {
            name: name,
            rawVars: 1,
            init: function init(target, vars, tween) {
              tween._onInit = function (tween) {
                var temp, p;

                if (_isString(vars)) {
                  temp = {};

                  _forEachName(vars, function (name) {
                    return temp[name] = 1;
                  });

                  vars = temp;
                }

                if (modifier) {
                  temp = {};

                  for (p in vars) {
                    temp[p] = modifier(vars[p]);
                  }

                  vars = temp;
                }

                _addModifiers(tween, vars);
              };
            }
          };
        };

      var gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt;

          for (p in vars) {
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);

            this._props.push(p);
          }
        }
      }, {
        name: "endArray",
        init: function init(target, value) {
          var i = value.length;

          while (i--) {
            this.add(target, i, target[i] || 0, value[i]);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap.version = "3.6.0";
      _coreReady = 1;

      if (_windowExists()) {
        _wake();
      }

      var Power0 = _easeMap.Power0,
        Power1 = _easeMap.Power1,
        Power2 = _easeMap.Power2,
        Power3 = _easeMap.Power3,
        Power4 = _easeMap.Power4,
        Linear = _easeMap.Linear,
        Quad = _easeMap.Quad,
        Cubic = _easeMap.Cubic,
        Quart = _easeMap.Quart,
        Quint = _easeMap.Quint,
        Strong = _easeMap.Strong,
        Elastic = _easeMap.Elastic,
        Back = _easeMap.Back,
        SteppedEase = _easeMap.SteppedEase,
        Bounce = _easeMap.Bounce,
        Sine = _easeMap.Sine,
        Expo = _easeMap.Expo,
        Circ = _easeMap.Circ;

      var _win$1,
        _doc$1,
        _docElement,
        _pluginInitted,
        _tempDiv,
        _tempDivStyler,
        _recentSetterPlugin,
        _windowExists$1 = function _windowExists() {
          return typeof window !== "undefined";
        },
        _transformProps = {},
        _RAD2DEG = 180 / Math.PI,
        _DEG2RAD = Math.PI / 180,
        _atan2 = Math.atan2,
        _bigNum$1 = 1e8,
        _capsExp = /([A-Z])/g,
        _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
        _complexExp = /[\s,\(]\S/,
        _propertyAliases = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        _renderCSSProp = function _renderCSSProp(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
        },
        _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
          return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
        },
        _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
          return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
        },
        _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
          var value = data.s + data.c * ratio;
          data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
        },
        _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
          return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        },
        _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        },
        _setterCSSStyle = function _setterCSSStyle(target, property, value) {
          return target.style[property] = value;
        },
        _setterCSSProp = function _setterCSSProp(target, property, value) {
          return target.style.setProperty(property, value);
        },
        _setterTransform = function _setterTransform(target, property, value) {
          return target._gsap[property] = value;
        },
        _setterScale = function _setterScale(target, property, value) {
          return target._gsap.scaleX = target._gsap.scaleY = value;
        },
        _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache.scaleX = cache.scaleY = value;
          cache.renderTransform(ratio, cache);
        },
        _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache[property] = value;
          cache.renderTransform(ratio, cache);
        },
        _transformProp = "transform",
        _transformOriginProp = _transformProp + "Origin",
        _supports3D,
        _createElement = function _createElement(type, ns) {
          var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e.style ? e : _doc$1.createElement(type);
        },
        _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
        },
        _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
        _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
          var e = element || _tempDiv,
            s = e.style,
            i = 5;

          if (property in s && !preferPrefix) {
            return property;
          }

          property = property.charAt(0).toUpperCase() + property.substr(1);

          while (i-- && !(_prefixes[i] + property in s)) { }

          return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        },
        _initCore = function _initCore() {
          if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
              style: {}
            };
            _tempDivStyler = _createElement("div");
            _transformProp = _checkPropPrefix(_transformProp);
            _transformOriginProp = _transformProp + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _pluginInitted = 1;
          }
        },
        _getBBoxHack = function _getBBoxHack(swapIfPossible) {
          var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            oldParent = this.parentNode,
            oldSibling = this.nextSibling,
            oldCSS = this.style.cssText,
            bbox;

          _docElement.appendChild(svg);

          svg.appendChild(this);
          this.style.display = "block";

          if (swapIfPossible) {
            try {
              bbox = this.getBBox();
              this._gsapBBox = this.getBBox;
              this.getBBox = _getBBoxHack;
            } catch (e) { }
          } else if (this._gsapBBox) {
            bbox = this._gsapBBox();
          }

          if (oldParent) {
            if (oldSibling) {
              oldParent.insertBefore(this, oldSibling);
            } else {
              oldParent.appendChild(this);
            }
          }

          _docElement.removeChild(svg);

          this.style.cssText = oldCSS;
          return bbox;
        },
        _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
          var i = attributesArray.length;

          while (i--) {
            if (target.hasAttribute(attributesArray[i])) {
              return target.getAttribute(attributesArray[i]);
            }
          }
        },
        _getBBox = function _getBBox(target) {
          var bounds;

          try {
            bounds = target.getBBox();
          } catch (error) {
            bounds = _getBBoxHack.call(target, true);
          }

          bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
          return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          } : bounds;
        },
        _isSVG = function _isSVG(e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        },
        _removeProperty = function _removeProperty(target, property) {
          if (property) {
            var style = target.style;

            if (property in _transformProps && property !== _transformOriginProp) {
              property = _transformProp;
            }

            if (style.removeProperty) {
              if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
                property = "-" + property;
              }

              style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
            } else {
              style.removeAttribute(property);
            }
          }
        },
        _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
          var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt;
          pt.b = beginning;
          pt.e = end;

          plugin._props.push(property);

          return pt;
        },
        _nonConvertibleUnits = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        _convertToUnit = function _convertToUnit(target, property, value, unit) {
          var curValue = parseFloat(value) || 0,
            curUnit = (value + "").trim().substr((curValue + "").length) || "px",
            style = _tempDiv.style,
            horizontal = _horizontalExp.test(property),
            isRootSVG = target.tagName.toLowerCase() === "svg",
            measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
            amount = 100,
            toPixels = unit === "px",
            toPercent = unit === "%",
            px,
            parent,
            cache,
            isSVG;

          if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
            return curValue;
          }

          curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
          isSVG = target.getCTM && _isSVG(target);

          if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
          }

          style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
          parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

          if (isSVG) {
            parent = (target.ownerSVGElement || {}).parentNode;
          }

          if (!parent || parent === _doc$1 || !parent.appendChild) {
            parent = _doc$1.body;
          }

          cache = parent._gsap;

          if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
            return _round(curValue / cache.width * amount);
          } else {
            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";

            if (horizontal && toPercent) {
              cache = _getCache(parent);
              cache.time = _ticker.time;
              cache.width = parent[measureProperty];
            }
          }

          return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        },
        _get = function _get(target, property, unit, uncache) {
          var value;
          _pluginInitted || _initCore();

          if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];

            if (~property.indexOf(",")) {
              property = property.split(",")[0];
            }
          }

          if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
          } else {
            value = target.style[property];

            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
              value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
          }

          return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        },
        _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
          if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1),
              s = p && _getComputedProperty(target, p, 1);

            if (s && s !== start) {
              prop = p;
              start = s;
            } else if (prop === "borderColor") {
              start = _getComputedProperty(target, "borderTopColor");
            }
          }

          var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
            index = 0,
            matchIndex = 0,
            a,
            result,
            startValues,
            startNum,
            color,
            startValue,
            endValue,
            endNum,
            chunk,
            endUnit,
            startUnit,
            relative,
            endValues;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";

          if (end === "auto") {
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            target.style[prop] = start;
          }

          a = [start, end];

          _colorStringFilter(a);

          start = a[0];
          end = a[1];
          startValues = start.match(_numWithUnitExp) || [];
          endValues = end.match(_numWithUnitExp) || [];

          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end)) {
              endValue = result[0];
              chunk = end.substring(index, result.index);

              if (color) {
                color = (color + 1) % 5;
              } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
              }

              if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

                if (relative) {
                  endValue = endValue.substr(2);
                }

                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;

                if (!endUnit) {
                  endUnit = endUnit || _config.units[prop] || startUnit;

                  if (index === end.length) {
                    end += endUnit;
                    pt.e += endUnit;
                  }
                }

                if (startUnit !== endUnit) {
                  startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                }

                pt._pt = {
                  _next: pt._pt,
                  p: chunk || matchIndex === 1 ? chunk : ",",
                  s: startNum,
                  c: relative ? relative * endNum : endNum - startNum,
                  m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
              }
            }

            pt.c = index < end.length ? end.substring(index, end.length) : "";
          } else {
            pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }

          _relExp.test(end) && (pt.e = 0);
          this._pt = pt;
          return pt;
        },
        _keywordToPercent = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
          var split = value.split(" "),
            x = split[0],
            y = split[1] || "50%";

          if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
          }

          split[0] = _keywordToPercent[x] || x;
          split[1] = _keywordToPercent[y] || y;
          return split.join(" ");
        },
        _renderClearProps = function _renderClearProps(ratio, data) {
          if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t,
              style = target.style,
              props = data.u,
              cache = target._gsap,
              prop,
              clearTransforms,
              i;

            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i = props.length;

              while (--i > -1) {
                prop = props[i];

                if (_transformProps[prop]) {
                  clearTransforms = 1;
                  prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }

                _removeProperty(target, prop);
              }
            }

            if (clearTransforms) {
              _removeProperty(target, _transformProp);

              if (cache) {
                cache.svg && target.removeAttribute("transform");

                _parseTransform(target, 1);

                cache.uncache = 1;
              }
            }
          }
        },
        _specialProps = {
          clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
              var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
              pt.u = endValue;
              pt.pr = -10;
              pt.tween = tween;

              plugin._props.push(property);

              return 1;
            }
          }
        },
        _identity2DMatrix = [1, 0, 0, 1, 0, 0],
        _rotationalProperties = {},
        _isNullTransform = function _isNullTransform(value) {
          return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        },
        _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
          var matrixString = _getComputedProperty(target, _transformProp);

          return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        },
        _getMatrix = function _getMatrix(target, force2D) {
          var cache = target._gsap || _getCache(target),
            style = target.style,
            matrix = _getComputedTransformMatrixAsArray(target),
            parent,
            nextSibling,
            temp,
            addedToDOM;

          if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
          } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;

            if (!parent || !target.offsetParent) {
              addedToDOM = 1;
              nextSibling = target.nextSibling;

              _docElement.appendChild(target);
            }

            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");

            if (addedToDOM) {
              nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
          }

          return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
        },
        _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
          var cache = target._gsap,
            matrix = matrixArray || _getMatrix(target, true),
            xOriginOld = cache.xOrigin || 0,
            yOriginOld = cache.yOrigin || 0,
            xOffsetOld = cache.xOffset || 0,
            yOffsetOld = cache.yOffset || 0,
            a = matrix[0],
            b = matrix[1],
            c = matrix[2],
            d = matrix[3],
            tx = matrix[4],
            ty = matrix[5],
            originSplit = origin.split(" "),
            xOrigin = parseFloat(originSplit[0]) || 0,
            yOrigin = parseFloat(originSplit[1]) || 0,
            bounds,
            determinant,
            x,
            y;

          if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
          } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
          }

          if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
          } else {
            cache.xOffset = cache.yOffset = 0;
          }

          cache.xOrigin = xOrigin;
          cache.yOrigin = yOrigin;
          cache.smooth = !!smooth;
          cache.origin = origin;
          cache.originIsAbsolute = !!originIsAbsolute;
          target.style[_transformOriginProp] = "0px 0px";

          if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
          }

          target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        },
        _parseTransform = function _parseTransform(target, uncache) {
          var cache = target._gsap || new GSCache(target);

          if ("x" in cache && !uncache && !cache.uncache) {
            return cache;
          }

          var style = target.style,
            invertedScaleX = cache.scaleX < 0,
            px = "px",
            deg = "deg",
            origin = _getComputedProperty(target, _transformOriginProp) || "0",
            x,
            y,
            z,
            scaleX,
            scaleY,
            rotation,
            rotationX,
            rotationY,
            skewX,
            skewY,
            perspective,
            xOrigin,
            yOrigin,
            matrix,
            angle,
            cos,
            sin,
            a,
            b,
            c,
            d,
            a12,
            a22,
            t1,
            t2,
            t3,
            a13,
            a23,
            a33,
            a42,
            a43,
            a32;
          x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
          scaleX = scaleY = 1;
          cache.svg = !!(target.getCTM && _isSVG(target));
          matrix = _getMatrix(target, cache.svg);

          if (cache.svg) {
            t1 = !cache.uncache && target.getAttribute("data-svg-origin");

            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
          }

          xOrigin = cache.xOrigin || 0;
          yOrigin = cache.yOrigin || 0;

          if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];

            if (matrix.length === 6) {
              scaleX = Math.sqrt(a * a + b * b);
              scaleY = Math.sqrt(d * d + c * c);
              rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
              skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
              skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

              if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
              }
            } else {
              a32 = matrix[6];
              a42 = matrix[7];
              a13 = matrix[8];
              a23 = matrix[9];
              a33 = matrix[10];
              a43 = matrix[11];
              x = matrix[12];
              y = matrix[13];
              z = matrix[14];
              angle = _atan2(a32, a33);
              rotationX = angle * _RAD2DEG;

              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
              }

              angle = _atan2(-c, a33);
              rotationY = angle * _RAD2DEG;

              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
              }

              angle = _atan2(b, a);
              rotation = angle * _RAD2DEG;

              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
              }

              if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
              }

              scaleX = _round(Math.sqrt(a * a + b * b + c * c));
              scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
              angle = _atan2(a12, a22);
              skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
              perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }

            if (cache.svg) {
              t1 = target.getAttribute("transform");
              cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
              t1 && target.setAttribute("transform", t1);
            }
          }

          if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
              scaleX *= -1;
              skewX += rotation <= 0 ? 180 : -180;
              rotation += rotation <= 0 ? 180 : -180;
            } else {
              scaleY *= -1;
              skewX += skewX <= 0 ? 180 : -180;
            }
          }

          cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
          cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
          cache.z = z + px;
          cache.scaleX = _round(scaleX);
          cache.scaleY = _round(scaleY);
          cache.rotation = _round(rotation) + deg;
          cache.rotationX = _round(rotationX) + deg;
          cache.rotationY = _round(rotationY) + deg;
          cache.skewX = skewX + deg;
          cache.skewY = skewY + deg;
          cache.transformPerspective = perspective + px;

          if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
            style[_transformOriginProp] = _firstTwoOnly(origin);
          }

          cache.xOffset = cache.yOffset = 0;
          cache.force3D = _config.force3D;
          cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
          cache.uncache = 0;
          return cache;
        },
        _firstTwoOnly = function _firstTwoOnly(value) {
          return (value = value.split(" "))[0] + " " + value[1];
        },
        _addPxTranslate = function _addPxTranslate(target, start, value) {
          var unit = getUnit(start);
          return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        },
        _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
          cache.z = "0px";
          cache.rotationY = cache.rotationX = "0deg";
          cache.force3D = 0;

          _renderCSSTransforms(ratio, cache);
        },
        _zeroDeg = "0deg",
        _zeroPx = "0px",
        _endParenthesis = ") ",
        _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
          var _ref = cache || this,
            xPercent = _ref.xPercent,
            yPercent = _ref.yPercent,
            x = _ref.x,
            y = _ref.y,
            z = _ref.z,
            rotation = _ref.rotation,
            rotationY = _ref.rotationY,
            rotationX = _ref.rotationX,
            skewX = _ref.skewX,
            skewY = _ref.skewY,
            scaleX = _ref.scaleX,
            scaleY = _ref.scaleY,
            transformPerspective = _ref.transformPerspective,
            force3D = _ref.force3D,
            target = _ref.target,
            zOrigin = _ref.zOrigin,
            transforms = "",
            use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

          if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD,
              a13 = Math.sin(angle),
              a33 = Math.cos(angle),
              cos;

            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
          }

          if (transformPerspective !== _zeroPx) {
            transforms += "perspective(" + transformPerspective + _endParenthesis;
          }

          if (xPercent || yPercent) {
            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
          }

          if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
            transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
          }

          if (rotation !== _zeroDeg) {
            transforms += "rotate(" + rotation + _endParenthesis;
          }

          if (rotationY !== _zeroDeg) {
            transforms += "rotateY(" + rotationY + _endParenthesis;
          }

          if (rotationX !== _zeroDeg) {
            transforms += "rotateX(" + rotationX + _endParenthesis;
          }

          if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
          }

          if (scaleX !== 1 || scaleY !== 1) {
            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
          }

          target.style[_transformProp] = transforms || "translate(0, 0)";
        },
        _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
          var _ref2 = cache || this,
            xPercent = _ref2.xPercent,
            yPercent = _ref2.yPercent,
            x = _ref2.x,
            y = _ref2.y,
            rotation = _ref2.rotation,
            skewX = _ref2.skewX,
            skewY = _ref2.skewY,
            scaleX = _ref2.scaleX,
            scaleY = _ref2.scaleY,
            target = _ref2.target,
            xOrigin = _ref2.xOrigin,
            yOrigin = _ref2.yOrigin,
            xOffset = _ref2.xOffset,
            yOffset = _ref2.yOffset,
            forceCSS = _ref2.forceCSS,
            tx = parseFloat(x),
            ty = parseFloat(y),
            a11,
            a21,
            a12,
            a22,
            temp;

          rotation = parseFloat(rotation);
          skewX = parseFloat(skewX);
          skewY = parseFloat(skewY);

          if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
          }

          if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;

            if (skewX) {
              skewY *= _DEG2RAD;
              temp = Math.tan(skewX - skewY);
              temp = Math.sqrt(1 + temp * temp);
              a12 *= temp;
              a22 *= temp;

              if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
              }
            }

            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
          } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
          }

          if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
          }

          if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
          }

          if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
          }

          temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
          target.setAttribute("transform", temp);
          forceCSS && (target.style[_transformProp] = temp);
        },
        _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
          var cap = 360,
            isString = _isString(endValue),
            endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
            change = relative ? endNum * relative : endNum - startNum,
            finalValue = startNum + change + "deg",
            direction,
            pt;

          if (isString) {
            direction = endValue.split("_")[1];

            if (direction === "short") {
              change %= cap;

              if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
              }
            }

            if (direction === "cw" && change < 0) {
              change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            } else if (direction === "ccw" && change > 0) {
              change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            }
          }

          plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
          pt.e = finalValue;
          pt.u = "deg";

          plugin._props.push(property);

          return pt;
        },
        _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
          var style = _tempDivStyler.style,
            startCache = target._gsap,
            exclude = "perspective,force3D,transformOrigin,svgOrigin",
            endCache,
            p,
            startValue,
            endValue,
            startNum,
            endNum,
            startUnit,
            endUnit;
          style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
          style[_transformProp] = transforms;

          _doc$1.body.appendChild(_tempDivStyler);

          endCache = _parseTransform(_tempDivStyler, 1);

          for (p in _transformProps) {
            startValue = startCache[p];
            endValue = endCache[p];

            if (startValue !== endValue && exclude.indexOf(p) < 0) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
              endNum = parseFloat(endValue);
              plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
              plugin._pt.u = endUnit || 0;

              plugin._props.push(p);
            }
          }

          _doc$1.body.removeChild(_tempDivStyler);
        };

      _forEachName("padding,margin,Width,Radius", function (name, index) {
        var t = "Top",
          r = "Right",
          b = "Bottom",
          l = "Left",
          props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
            return index < 2 ? name + side : "border" + side + name;
          });

        _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
          var a, vars;

          if (arguments.length < 4) {
            a = props.map(function (prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }

          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function (prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });

      var CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
          var props = this._props,
            style = target.style,
            startAt = tween.vars.startAt,
            startValue,
            endValue,
            endNum,
            startNum,
            type,
            specialProp,
            p,
            startUnit,
            endUnit,
            relative,
            isTransformRelated,
            transformPropTween,
            cache,
            smooth,
            hasPriority;
          _pluginInitted || _initCore();

          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }

            endValue = vars[p];

            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }

            type = typeof endValue;
            specialProp = _specialProps[p];

            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }

            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }

            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }

              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);

              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }

                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }

                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }

              isTransformRelated = p in _transformProps;

              if (isTransformRelated) {
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }

                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  endValue = _convertKeywordsToPercentages(endValue);

                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }

                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);

                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);

                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }

              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;

                if (startUnit !== endUnit) {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, target[p], endValue, index, targets);
                } else {
                  _missingPlugin(p, endValue);

                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, endValue);
              }

              props.push(p);
            }
          }

          hasPriority && _sortPropTweensByPriority(this);
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty: _removeProperty,
          _getMatrix: _getMatrix
        }
      };
      gsap.utils.checkPrefix = _checkPropPrefix;

      (function (positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
          _transformProps[name] = 1;
        });

        _forEachName(rotation, function (name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });

        _propertyAliases[all[13]] = positionAndScale + "," + rotation;

        _forEachName(aliases, function (name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
        _config.units[name] = "px";
      });

      gsap.registerPlugin(CSSPlugin);

      var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
        TweenMaxWithCSS = gsapWithCSS.core.Tween;

      exports.Back = Back;
      exports.Bounce = Bounce;
      exports.CSSPlugin = CSSPlugin;
      exports.Circ = Circ;
      exports.Cubic = Cubic;
      exports.Elastic = Elastic;
      exports.Expo = Expo;
      exports.Linear = Linear;
      exports.Power0 = Power0;
      exports.Power1 = Power1;
      exports.Power2 = Power2;
      exports.Power3 = Power3;
      exports.Power4 = Power4;
      exports.Quad = Quad;
      exports.Quart = Quart;
      exports.Quint = Quint;
      exports.Sine = Sine;
      exports.SteppedEase = SteppedEase;
      exports.Strong = Strong;
      exports.TimelineLite = Timeline;
      exports.TimelineMax = Timeline;
      exports.TweenLite = Tween;
      exports.TweenMax = TweenMaxWithCSS;
      exports.default = gsapWithCSS;
      exports.gsap = gsapWithCSS;

      if (typeof (window) === 'undefined' || window !== exports) { Object.defineProperty(exports, '__esModule', { value: true }); } else { delete window.default; }

    })));

  }, {}], 17: [function (require, module, exports) {
    (function (global) {
      (function () {
        /*!
         *  howler.js v2.2.1
         *  howlerjs.com
         *
         *  (c) 2013-2020, James Simpson of GoldFire Studios
         *  goldfirestudios.com
         *
         *  MIT License
         */

        (function () {

          'use strict';

          /** Global Methods **/
          /***************************************************************************/

          /**
           * Create the global controller. All contained methods and properties apply
           * to all sounds that are currently playing or will be in the future.
           */
          var HowlerGlobal = function () {
            this.init();
          };
          HowlerGlobal.prototype = {
            /**
             * Initialize the global Howler object.
             * @return {Howler}
             */
            init: function () {
              var self = this || Howler;

              // Create a global ID counter.
              self._counter = 1000;

              // Pool of unlocked HTML5 Audio objects.
              self._html5AudioPool = [];
              self.html5PoolSize = 10;

              // Internal properties.
              self._codecs = {};
              self._howls = [];
              self._muted = false;
              self._volume = 1;
              self._canPlayEvent = 'canplaythrough';
              self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

              // Public properties.
              self.masterGain = null;
              self.noAudio = false;
              self.usingWebAudio = true;
              self.autoSuspend = true;
              self.ctx = null;

              // Set to false to disable the auto audio unlocker.
              self.autoUnlock = true;

              // Setup the various state values for global tracking.
              self._setup();

              return self;
            },

            /**
             * Get/set the global volume for all sounds.
             * @param  {Float} vol Volume from 0.0 to 1.0.
             * @return {Howler/Float}     Returns self or current volume.
             */
            volume: function (vol) {
              var self = this || Howler;
              vol = parseFloat(vol);

              // If we don't have an AudioContext created yet, run the setup.
              if (!self.ctx) {
                setupAudioContext();
              }

              if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;

                // Don't update any of the nodes if we are muted.
                if (self._muted) {
                  return self;
                }

                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) {
                  self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                }

                // Loop through and change volume for all HTML5 audio nodes.
                for (var i = 0; i < self._howls.length; i++) {
                  if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();

                    // Loop through all sounds and change the volumes.
                    for (var j = 0; j < ids.length; j++) {
                      var sound = self._howls[i]._soundById(ids[j]);

                      if (sound && sound._node) {
                        sound._node.volume = sound._volume * vol;
                      }
                    }
                  }
                }

                return self;
              }

              return self._volume;
            },

            /**
             * Handle muting and unmuting globally.
             * @param  {Boolean} muted Is muted or not.
             */
            mute: function (muted) {
              var self = this || Howler;

              // If we don't have an AudioContext created yet, run the setup.
              if (!self.ctx) {
                setupAudioContext();
              }

              self._muted = muted;

              // With Web Audio, we just need to mute the master gain.
              if (self.usingWebAudio) {
                self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
              }

              // Loop through and mute all HTML5 Audio nodes.
              for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                  // Get all of the sounds in this Howl group.
                  var ids = self._howls[i]._getSoundIds();

                  // Loop through all sounds and mark the audio node as muted.
                  for (var j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);

                    if (sound && sound._node) {
                      sound._node.muted = (muted) ? true : sound._muted;
                    }
                  }
                }
              }

              return self;
            },

            /**
             * Handle stopping all sounds globally.
             */
            stop: function () {
              var self = this || Howler;

              // Loop through all Howls and stop them.
              for (var i = 0; i < self._howls.length; i++) {
                self._howls[i].stop();
              }

              return self;
            },

            /**
             * Unload and destroy all currently loaded Howl objects.
             * @return {Howler}
             */
            unload: function () {
              var self = this || Howler;

              for (var i = self._howls.length - 1; i >= 0; i--) {
                self._howls[i].unload();
              }

              // Create a new AudioContext to make sure it is fully reset.
              if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
              }

              return self;
            },

            /**
             * Check for codec support of specific extension.
             * @param  {String} ext Audio file extention.
             * @return {Boolean}
             */
            codecs: function (ext) {
              return (this || Howler)._codecs[ext.replace(/^x-/, '')];
            },

            /**
             * Setup various state values for global tracking.
             * @return {Howler}
             */
            _setup: function () {
              var self = this || Howler;

              // Keeps track of the suspend/resume state of the AudioContext.
              self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

              // Automatically begin the 30-second suspend process
              self._autoSuspend();

              // Check if audio is available.
              if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== 'undefined') {
                  try {
                    var test = new Audio();

                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === 'undefined') {
                      self._canPlayEvent = 'canplay';
                    }
                  } catch (e) {
                    self.noAudio = true;
                  }
                } else {
                  self.noAudio = true;
                }
              }

              // Test to make sure audio isn't disabled in Internet Explorer.
              try {
                var test = new Audio();
                if (test.muted) {
                  self.noAudio = true;
                }
              } catch (e) { }

              // Check for supported codecs.
              if (!self.noAudio) {
                self._setupCodecs();
              }

              return self;
            },

            /**
             * Check for browser support for various codecs and cache the results.
             * @return {Howler}
             */
            _setupCodecs: function () {
              var self = this || Howler;
              var audioTest = null;

              // Must wrap in a try/catch because IE11 in server mode throws an error.
              try {
                audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
              } catch (err) {
                return self;
              }

              if (!audioTest || typeof audioTest.canPlayType !== 'function') {
                return self;
              }

              var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

              // Opera version <33 has mixed MP3 support, so we need to check for and block it.
              var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
              var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

              self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
              };

              return self;
            },

            /**
             * Some browsers/devices will only allow audio to be played after a user interaction.
             * Attempt to automatically unlock audio on the first user interaction.
             * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
             * @return {Howler}
             */
            _unlockAudio: function () {
              var self = this || Howler;

              // Only run this if Web Audio is supported and it hasn't already been unlocked.
              if (self._audioUnlocked || !self.ctx) {
                return;
              }

              self._audioUnlocked = false;
              self.autoUnlock = false;

              // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
              // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
              // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
              if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
              }

              // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
              // http://stackoverflow.com/questions/24119684
              self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

              // Call this method on touch start to create and play a buffer,
              // then check if the audio actually played to determine if
              // audio has now been unlocked on iOS, Android, etc.
              var unlock = function (e) {
                // Create a pool of unlocked HTML5 Audio objects that can
                // be used for playing sounds without user interaction. HTML5
                // Audio objects must be individually unlocked, as opposed
                // to the WebAudio API which only needs a single activation.
                // This must occur before WebAudio setup or the source.onended
                // event will not fire.
                while (self._html5AudioPool.length < self.html5PoolSize) {
                  try {
                    var audioNode = new Audio();

                    // Mark this Audio object as unlocked to ensure it can get returned
                    // to the unlocked pool when released.
                    audioNode._unlocked = true;

                    // Add the audio node to the pool.
                    self._releaseHtml5Audio(audioNode);
                  } catch (e) {
                    self.noAudio = true;
                    break;
                  }
                }

                // Loop through any assigned audio nodes and unlock them.
                for (var i = 0; i < self._howls.length; i++) {
                  if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();

                    // Loop through all sounds and unlock the audio nodes.
                    for (var j = 0; j < ids.length; j++) {
                      var sound = self._howls[i]._soundById(ids[j]);

                      if (sound && sound._node && !sound._node._unlocked) {
                        sound._node._unlocked = true;
                        sound._node.load();
                      }
                    }
                  }
                }

                // Fix Android can not play in suspend state.
                self._autoResume();

                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);

                // Play the empty buffer.
                if (typeof source.start === 'undefined') {
                  source.noteOn(0);
                } else {
                  source.start(0);
                }

                // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
                if (typeof self.ctx.resume === 'function') {
                  self.ctx.resume();
                }

                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function () {
                  source.disconnect(0);

                  // Update the unlocked state and prevent this check from happening again.
                  self._audioUnlocked = true;

                  // Remove the touch start listener.
                  document.removeEventListener('touchstart', unlock, true);
                  document.removeEventListener('touchend', unlock, true);
                  document.removeEventListener('click', unlock, true);

                  // Let all sounds know that audio has been unlocked.
                  for (var i = 0; i < self._howls.length; i++) {
                    self._howls[i]._emit('unlock');
                  }
                };
              };

              // Setup a touch start listener to attempt an unlock in.
              document.addEventListener('touchstart', unlock, true);
              document.addEventListener('touchend', unlock, true);
              document.addEventListener('click', unlock, true);

              return self;
            },

            /**
             * Get an unlocked HTML5 Audio object from the pool. If none are left,
             * return a new Audio object and throw a warning.
             * @return {Audio} HTML5 Audio object.
             */
            _obtainHtml5Audio: function () {
              var self = this || Howler;

              // Return the next object from the pool if one exists.
              if (self._html5AudioPool.length) {
                return self._html5AudioPool.pop();
              }

              //.Check if the audio is locked and throw a warning.
              var testPlay = new Audio().play();
              if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
                testPlay.catch(function () {
                  console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                });
              }

              return new Audio();
            },

            /**
             * Return an activated HTML5 Audio object to the pool.
             * @return {Howler}
             */
            _releaseHtml5Audio: function (audio) {
              var self = this || Howler;

              // Don't add audio to the pool if we don't know if it has been unlocked.
              if (audio._unlocked) {
                self._html5AudioPool.push(audio);
              }

              return self;
            },

            /**
             * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
             * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
             * @return {Howler}
             */
            _autoSuspend: function () {
              var self = this;

              if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
                return;
              }

              // Check if any sounds are playing.
              for (var i = 0; i < self._howls.length; i++) {
                if (self._howls[i]._webAudio) {
                  for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                    if (!self._howls[i]._sounds[j]._paused) {
                      return self;
                    }
                  }
                }
              }

              if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
              }

              // If no sound has played after 30 seconds, suspend the context.
              self._suspendTimer = setTimeout(function () {
                if (!self.autoSuspend) {
                  return;
                }

                self._suspendTimer = null;
                self.state = 'suspending';

                // Handle updating the state of the audio context after suspending.
                var handleSuspension = function () {
                  self.state = 'suspended';

                  if (self._resumeAfterSuspend) {
                    delete self._resumeAfterSuspend;
                    self._autoResume();
                  }
                };

                // Either the state gets suspended or it is interrupted.
                // Either way, we need to update the state to suspended.
                self.ctx.suspend().then(handleSuspension, handleSuspension);
              }, 30000);

              return self;
            },

            /**
             * Automatically resume the Web Audio AudioContext when a new sound is played.
             * @return {Howler}
             */
            _autoResume: function () {
              var self = this;

              if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
                return;
              }

              if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
              } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
                self.ctx.resume().then(function () {
                  self.state = 'running';

                  // Emit to all Howls that the audio has resumed.
                  for (var i = 0; i < self._howls.length; i++) {
                    self._howls[i]._emit('resume');
                  }
                });

                if (self._suspendTimer) {
                  clearTimeout(self._suspendTimer);
                  self._suspendTimer = null;
                }
              } else if (self.state === 'suspending') {
                self._resumeAfterSuspend = true;
              }

              return self;
            }
          };

          // Setup the global audio controller.
          var Howler = new HowlerGlobal();

          /** Group Methods **/
          /***************************************************************************/

          /**
           * Create an audio group controller.
           * @param {Object} o Passed in properties for this group.
           */
          var Howl = function (o) {
            var self = this;

            // Throw an error if no source is provided.
            if (!o.src || o.src.length === 0) {
              console.error('An array of source files must be passed with any new Howl.');
              return;
            }

            self.init(o);
          };
          Howl.prototype = {
            /**
             * Initialize a new Howl group object.
             * @param  {Object} o Passed in properties for this group.
             * @return {Howl}
             */
            init: function (o) {
              var self = this;

              // If we don't have an AudioContext created yet, run the setup.
              if (!Howler.ctx) {
                setupAudioContext();
              }

              // Setup user-defined default properties.
              self._autoplay = o.autoplay || false;
              self._format = (typeof o.format !== 'string') ? o.format : [o.format];
              self._html5 = o.html5 || false;
              self._muted = o.mute || false;
              self._loop = o.loop || false;
              self._pool = o.pool || 5;
              self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
              self._rate = o.rate || 1;
              self._sprite = o.sprite || {};
              self._src = (typeof o.src !== 'string') ? o.src : [o.src];
              self._volume = o.volume !== undefined ? o.volume : 1;
              self._xhr = {
                method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
                headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
              };

              // Setup all other default properties.
              self._duration = 0;
              self._state = 'unloaded';
              self._sounds = [];
              self._endTimers = {};
              self._queue = [];
              self._playLock = false;

              // Setup event listeners.
              self._onend = o.onend ? [{ fn: o.onend }] : [];
              self._onfade = o.onfade ? [{ fn: o.onfade }] : [];
              self._onload = o.onload ? [{ fn: o.onload }] : [];
              self._onloaderror = o.onloaderror ? [{ fn: o.onloaderror }] : [];
              self._onplayerror = o.onplayerror ? [{ fn: o.onplayerror }] : [];
              self._onpause = o.onpause ? [{ fn: o.onpause }] : [];
              self._onplay = o.onplay ? [{ fn: o.onplay }] : [];
              self._onstop = o.onstop ? [{ fn: o.onstop }] : [];
              self._onmute = o.onmute ? [{ fn: o.onmute }] : [];
              self._onvolume = o.onvolume ? [{ fn: o.onvolume }] : [];
              self._onrate = o.onrate ? [{ fn: o.onrate }] : [];
              self._onseek = o.onseek ? [{ fn: o.onseek }] : [];
              self._onunlock = o.onunlock ? [{ fn: o.onunlock }] : [];
              self._onresume = [];

              // Web Audio or HTML5 Audio?
              self._webAudio = Howler.usingWebAudio && !self._html5;

              // Automatically try to enable audio.
              if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
                Howler._unlockAudio();
              }

              // Keep track of this Howl group in the global controller.
              Howler._howls.push(self);

              // If they selected autoplay, add a play event to the load queue.
              if (self._autoplay) {
                self._queue.push({
                  event: 'play',
                  action: function () {
                    self.play();
                  }
                });
              }

              // Load the source file unless otherwise specified.
              if (self._preload && self._preload !== 'none') {
                self.load();
              }

              return self;
            },

            /**
             * Load the audio file.
             * @return {Howler}
             */
            load: function () {
              var self = this;
              var url = null;

              // If no audio is available, quit immediately.
              if (Howler.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
              }

              // Make sure our source is in an array.
              if (typeof self._src === 'string') {
                self._src = [self._src];
              }

              // Loop through the sources and pick the first one that is compatible.
              for (var i = 0; i < self._src.length; i++) {
                var ext, str;

                if (self._format && self._format[i]) {
                  // If an extension was specified, use that instead.
                  ext = self._format[i];
                } else {
                  // Make sure the source is a string.
                  str = self._src[i];
                  if (typeof str !== 'string') {
                    self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                    continue;
                  }

                  // Extract the file extension from the URL or base64 data URI.
                  ext = /^data:audio\/([^;,]+);/i.exec(str);
                  if (!ext) {
                    ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                  }

                  if (ext) {
                    ext = ext[1].toLowerCase();
                  }
                }

                // Log a warning if no extension was found.
                if (!ext) {
                  console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                }

                // Check if this extension is available.
                if (ext && Howler.codecs(ext)) {
                  url = self._src[i];
                  break;
                }
              }

              if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
              }

              self._src = url;
              self._state = 'loading';

              // If the hosting page is HTTPS and the source isn't,
              // drop down to HTML5 Audio to avoid Mixed Content errors.
              if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
              }

              // Create a new sound object and add it to the pool.
              new Sound(self);

              // Load and decode the audio data for playback.
              if (self._webAudio) {
                loadBuffer(self);
              }

              return self;
            },

            /**
             * Play a sound or resume previous playback.
             * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
             * @param  {Boolean} internal Internal Use: true prevents event firing.
             * @return {Number}          Sound ID.
             */
            play: function (sprite, internal) {
              var self = this;
              var id = null;

              // Determine if a sprite, sound id or nothing was passed
              if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
              } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
                // If the passed sprite doesn't exist, do nothing.
                return null;
              } else if (typeof sprite === 'undefined') {
                // Use the default sound sprite (plays the full audio length).
                sprite = '__default';

                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                if (!self._playLock) {
                  var num = 0;
                  for (var i = 0; i < self._sounds.length; i++) {
                    if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                      num++;
                      id = self._sounds[i]._id;
                    }
                  }

                  if (num === 1) {
                    sprite = null;
                  } else {
                    id = null;
                  }
                }
              }

              // Get the selected node, or get one from the pool.
              var sound = id ? self._soundById(id) : self._inactiveSound();

              // If the sound doesn't exist, do nothing.
              if (!sound) {
                return null;
              }

              // Select the sprite definition.
              if (id && !sprite) {
                sprite = sound._sprite || '__default';
              }

              // If the sound hasn't loaded, we must wait to get the audio's duration.
              // We also need to wait to make sure we don't run into race conditions with
              // the order of function calls.
              if (self._state !== 'loaded') {
                // Set the sprite value on this sound.
                sound._sprite = sprite;

                // Mark this sound as not ended in case another sound is played before this one loads.
                sound._ended = false;

                // Add the sound to the queue to be played on load.
                var soundId = sound._id;
                self._queue.push({
                  event: 'play',
                  action: function () {
                    self.play(soundId);
                  }
                });

                return soundId;
              }

              // Don't play the sound if an id was passed and it is already playing.
              if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) {
                  self._loadQueue('play');
                }

                return sound._id;
              }

              // Make sure the AudioContext isn't suspended, and resume it if it is.
              if (self._webAudio) {
                Howler._autoResume();
              }

              // Determine how long to play for and where to start playing.
              var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
              var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
              var timeout = (duration * 1000) / Math.abs(sound._rate);
              var start = self._sprite[sprite][0] / 1000;
              var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
              sound._sprite = sprite;

              // Mark the sound as ended instantly so that this async playback
              // doesn't get grabbed by another call to play while this one waits to start.
              sound._ended = false;

              // Update the parameters of the sound.
              var setParams = function () {
                sound._paused = false;
                sound._seek = seek;
                sound._start = start;
                sound._stop = stop;
                sound._loop = !!(sound._loop || self._sprite[sprite][2]);
              };

              // End the sound instantly if seek is at the end.
              if (seek >= stop) {
                self._ended(sound);
                return;
              }

              // Begin the actual playback.
              var node = sound._node;
              if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function () {
                  self._playLock = false;
                  setParams();
                  self._refreshBuffer(sound);

                  // Setup the playback params.
                  var vol = (sound._muted || self._muted) ? 0 : sound._volume;
                  node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                  sound._playStart = Howler.ctx.currentTime;

                  // Play the sound using the supported method.
                  if (typeof node.bufferSource.start === 'undefined') {
                    sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                  } else {
                    sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                  }

                  // Start a new timer if none is present.
                  if (timeout !== Infinity) {
                    self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                  }

                  if (!internal) {
                    setTimeout(function () {
                      self._emit('play', sound._id);
                      self._loadQueue();
                    }, 0);
                  }
                };

                if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
                  playWebAudio();
                } else {
                  self._playLock = true;

                  // Wait for the audio context to resume before playing.
                  self.once('resume', playWebAudio);

                  // Cancel the end timer.
                  self._clearTimer(sound._id);
                }
              } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function () {
                  node.currentTime = seek;
                  node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                  node.volume = sound._volume * Howler.volume();
                  node.playbackRate = sound._rate;

                  // Some browsers will throw an error if this is called without user interaction.
                  try {
                    var play = node.play();

                    // Support older browsers that don't support promises, and thus don't have this issue.
                    if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                      // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                      self._playLock = true;

                      // Set param values immediately.
                      setParams();

                      // Releases the lock and executes queued actions.
                      play
                        .then(function () {
                          self._playLock = false;
                          node._unlocked = true;
                          if (!internal) {
                            self._emit('play', sound._id);
                            self._loadQueue();
                          }
                        })
                        .catch(function () {
                          self._playLock = false;
                          self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                            'on mobile devices and Chrome where playback was not within a user interaction.');

                          // Reset the ended and paused values.
                          sound._ended = true;
                          sound._paused = true;
                        });
                    } else if (!internal) {
                      self._playLock = false;
                      setParams();
                      self._emit('play', sound._id);
                      self._loadQueue();
                    }

                    // Setting rate before playing won't work in IE, so we set it again here.
                    node.playbackRate = sound._rate;

                    // If the node is still paused, then we can assume there was a playback issue.
                    if (node.paused) {
                      self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                        'on mobile devices and Chrome where playback was not within a user interaction.');
                      return;
                    }

                    // Setup the end timer on sprites or listen for the ended event.
                    if (sprite !== '__default' || sound._loop) {
                      self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    } else {
                      self._endTimers[sound._id] = function () {
                        // Fire ended on this audio node.
                        self._ended(sound);

                        // Clear this listener.
                        node.removeEventListener('ended', self._endTimers[sound._id], false);
                      };
                      node.addEventListener('ended', self._endTimers[sound._id], false);
                    }
                  } catch (err) {
                    self._emit('playerror', sound._id, err);
                  }
                };

                // If this is streaming audio, make sure the src is set and load again.
                if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
                  node.src = self._src;
                  node.load();
                }

                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
                if (node.readyState >= 3 || loadedNoReadyState) {
                  playHtml5();
                } else {
                  self._playLock = true;

                  var listener = function () {
                    // Begin playback.
                    playHtml5();

                    // Clear this listener.
                    node.removeEventListener(Howler._canPlayEvent, listener, false);
                  };
                  node.addEventListener(Howler._canPlayEvent, listener, false);

                  // Cancel the end timer.
                  self._clearTimer(sound._id);
                }
              }

              return sound._id;
            },

            /**
             * Pause playback and save current position.
             * @param  {Number} id The sound ID (empty to pause all in group).
             * @return {Howl}
             */
            pause: function (id) {
              var self = this;

              // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'pause',
                  action: function () {
                    self.pause(id);
                  }
                });

                return self;
              }

              // If no id is passed, get all ID's to be paused.
              var ids = self._getSoundIds(id);

              for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound && !sound._paused) {
                  // Reset the seek position.
                  sound._seek = self.seek(ids[i]);
                  sound._rateSeek = 0;
                  sound._paused = true;

                  // Stop currently running fades.
                  self._stopFade(ids[i]);

                  if (sound._node) {
                    if (self._webAudio) {
                      // Make sure the sound has been created.
                      if (!sound._node.bufferSource) {
                        continue;
                      }

                      if (typeof sound._node.bufferSource.stop === 'undefined') {
                        sound._node.bufferSource.noteOff(0);
                      } else {
                        sound._node.bufferSource.stop(0);
                      }

                      // Clean up the buffer source.
                      self._cleanBuffer(sound._node);
                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                      sound._node.pause();
                    }
                  }
                }

                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) {
                  self._emit('pause', sound ? sound._id : null);
                }
              }

              return self;
            },

            /**
             * Stop playback and reset to start.
             * @param  {Number} id The sound ID (empty to stop all in group).
             * @param  {Boolean} internal Internal Use: true prevents event firing.
             * @return {Howl}
             */
            stop: function (id, internal) {
              var self = this;

              // If the sound hasn't loaded, add it to the load queue to stop when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'stop',
                  action: function () {
                    self.stop(id);
                  }
                });

                return self;
              }

              // If no id is passed, get all ID's to be stopped.
              var ids = self._getSoundIds(id);

              for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                  // Reset the seek position.
                  sound._seek = sound._start || 0;
                  sound._rateSeek = 0;
                  sound._paused = true;
                  sound._ended = true;

                  // Stop currently running fades.
                  self._stopFade(ids[i]);

                  if (sound._node) {
                    if (self._webAudio) {
                      // Make sure the sound's AudioBufferSourceNode has been created.
                      if (sound._node.bufferSource) {
                        if (typeof sound._node.bufferSource.stop === 'undefined') {
                          sound._node.bufferSource.noteOff(0);
                        } else {
                          sound._node.bufferSource.stop(0);
                        }

                        // Clean up the buffer source.
                        self._cleanBuffer(sound._node);
                      }
                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                      sound._node.currentTime = sound._start || 0;
                      sound._node.pause();

                      // If this is a live stream, stop download once the audio is stopped.
                      if (sound._node.duration === Infinity) {
                        self._clearSound(sound._node);
                      }
                    }
                  }

                  if (!internal) {
                    self._emit('stop', sound._id);
                  }
                }
              }

              return self;
            },

            /**
             * Mute/unmute a single sound or all sounds in this Howl group.
             * @param  {Boolean} muted Set to true to mute and false to unmute.
             * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
             * @return {Howl}
             */
            mute: function (muted, id) {
              var self = this;

              // If the sound hasn't loaded, add it to the load queue to mute when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'mute',
                  action: function () {
                    self.mute(muted, id);
                  }
                });

                return self;
              }

              // If applying mute/unmute to all sounds, update the group's value.
              if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') {
                  self._muted = muted;
                } else {
                  return self._muted;
                }
              }

              // If no id is passed, get all ID's to be muted.
              var ids = self._getSoundIds(id);

              for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                  sound._muted = muted;

                  // Cancel active fade and set the volume to the end value.
                  if (sound._interval) {
                    self._stopFade(sound._id);
                  }

                  if (self._webAudio && sound._node) {
                    sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                  } else if (sound._node) {
                    sound._node.muted = Howler._muted ? true : muted;
                  }

                  self._emit('mute', sound._id);
                }
              }

              return self;
            },

            /**
             * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
             *   volume() -> Returns the group's volume value.
             *   volume(id) -> Returns the sound id's current volume.
             *   volume(vol) -> Sets the volume of all sounds in this Howl group.
             *   volume(vol, id) -> Sets the volume of passed sound id.
             * @return {Howl/Number} Returns self or current volume.
             */
            volume: function () {
              var self = this;
              var args = arguments;
              var vol, id;

              // Determine the values based on arguments.
              if (args.length === 0) {
                // Return the value of the groups' volume.
                return self._volume;
              } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                  id = parseInt(args[0], 10);
                } else {
                  vol = parseFloat(args[0]);
                }
              } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
              }

              // Update the volume or return the current volume.
              var sound;
              if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                    event: 'volume',
                    action: function () {
                      self.volume.apply(self, args);
                    }
                  });

                  return self;
                }

                // Set the group volume.
                if (typeof id === 'undefined') {
                  self._volume = vol;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                  // Get the sound.
                  sound = self._soundById(id[i]);

                  if (sound) {
                    sound._volume = vol;

                    // Stop currently running fades.
                    if (!args[2]) {
                      self._stopFade(id[i]);
                    }

                    if (self._webAudio && sound._node && !sound._muted) {
                      sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                    } else if (sound._node && !sound._muted) {
                      sound._node.volume = vol * Howler.volume();
                    }

                    self._emit('volume', sound._id);
                  }
                }
              } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
              }

              return self;
            },

            /**
             * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
             * @param  {Number} from The value to fade from (0.0 to 1.0).
             * @param  {Number} to   The volume to fade to (0.0 to 1.0).
             * @param  {Number} len  Time in milliseconds to fade.
             * @param  {Number} id   The sound id (omit to fade all sounds).
             * @return {Howl}
             */
            fade: function (from, to, len, id) {
              var self = this;

              // If the sound hasn't loaded, add it to the load queue to fade when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'fade',
                  action: function () {
                    self.fade(from, to, len, id);
                  }
                });

                return self;
              }

              // Make sure the to/from/len values are numbers.
              from = Math.min(Math.max(0, parseFloat(from)), 1);
              to = Math.min(Math.max(0, parseFloat(to)), 1);
              len = parseFloat(len);

              // Set the volume to the start position.
              self.volume(from, id);

              // Fade the volume of one or all sounds.
              var ids = self._getSoundIds(id);
              for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                  // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                  if (!id) {
                    self._stopFade(ids[i]);
                  }

                  // If we are using Web Audio, let the native methods do the actual fade.
                  if (self._webAudio && !sound._muted) {
                    var currentTime = Howler.ctx.currentTime;
                    var end = currentTime + (len / 1000);
                    sound._volume = from;
                    sound._node.gain.setValueAtTime(from, currentTime);
                    sound._node.gain.linearRampToValueAtTime(to, end);
                  }

                  self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
                }
              }

              return self;
            },

            /**
             * Starts the internal interval to fade a sound.
             * @param  {Object} sound Reference to sound to fade.
             * @param  {Number} from The value to fade from (0.0 to 1.0).
             * @param  {Number} to   The volume to fade to (0.0 to 1.0).
             * @param  {Number} len  Time in milliseconds to fade.
             * @param  {Number} id   The sound id to fade.
             * @param  {Boolean} isGroup   If true, set the volume on the group.
             */
            _startFadeInterval: function (sound, from, to, len, id, isGroup) {
              var self = this;
              var vol = from;
              var diff = to - from;
              var steps = Math.abs(diff / 0.01);
              var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
              var lastTick = Date.now();

              // Store the value being faded to.
              sound._fadeTo = to;

              // Update the volume value on each interval tick.
              sound._interval = setInterval(function () {
                // Update the volume based on the time since the last tick.
                var tick = (Date.now() - lastTick) / len;
                lastTick = Date.now();
                vol += diff * tick;

                // Round to within 2 decimal points.
                vol = Math.round(vol * 100) / 100;

                // Make sure the volume is in the right bounds.
                if (diff < 0) {
                  vol = Math.max(to, vol);
                } else {
                  vol = Math.min(to, vol);
                }

                // Change the volume.
                if (self._webAudio) {
                  sound._volume = vol;
                } else {
                  self.volume(vol, sound._id, true);
                }

                // Set the group's volume.
                if (isGroup) {
                  self._volume = vol;
                }

                // When the fade is complete, stop it and fire event.
                if ((to < from && vol <= to) || (to > from && vol >= to)) {
                  clearInterval(sound._interval);
                  sound._interval = null;
                  sound._fadeTo = null;
                  self.volume(to, sound._id);
                  self._emit('fade', sound._id);
                }
              }, stepLen);
            },

            /**
             * Internal method that stops the currently playing fade when
             * a new fade starts, volume is changed or the sound is stopped.
             * @param  {Number} id The sound id.
             * @return {Howl}
             */
            _stopFade: function (id) {
              var self = this;
              var sound = self._soundById(id);

              if (sound && sound._interval) {
                if (self._webAudio) {
                  sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                }

                clearInterval(sound._interval);
                sound._interval = null;
                self.volume(sound._fadeTo, id);
                sound._fadeTo = null;
                self._emit('fade', id);
              }

              return self;
            },

            /**
             * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
             *   loop() -> Returns the group's loop value.
             *   loop(id) -> Returns the sound id's loop value.
             *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
             *   loop(loop, id) -> Sets the loop value of passed sound id.
             * @return {Howl/Boolean} Returns self or current loop value.
             */
            loop: function () {
              var self = this;
              var args = arguments;
              var loop, id, sound;

              // Determine the values for loop and id.
              if (args.length === 0) {
                // Return the grou's loop value.
                return self._loop;
              } else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                  loop = args[0];
                  self._loop = loop;
                } else {
                  // Return this sound's loop value.
                  sound = self._soundById(parseInt(args[0], 10));
                  return sound ? sound._loop : false;
                }
              } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
              }

              // If no id is passed, get all ID's to be looped.
              var ids = self._getSoundIds(id);
              for (var i = 0; i < ids.length; i++) {
                sound = self._soundById(ids[i]);

                if (sound) {
                  sound._loop = loop;
                  if (self._webAudio && sound._node && sound._node.bufferSource) {
                    sound._node.bufferSource.loop = loop;
                    if (loop) {
                      sound._node.bufferSource.loopStart = sound._start || 0;
                      sound._node.bufferSource.loopEnd = sound._stop;
                    }
                  }
                }
              }

              return self;
            },

            /**
             * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
             *   rate() -> Returns the first sound node's current playback rate.
             *   rate(id) -> Returns the sound id's current playback rate.
             *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
             *   rate(rate, id) -> Sets the playback rate of passed sound id.
             * @return {Howl/Number} Returns self or the current playback rate.
             */
            rate: function () {
              var self = this;
              var args = arguments;
              var rate, id;

              // Determine the values based on arguments.
              if (args.length === 0) {
                // We will simply return the current rate of the first node.
                id = self._sounds[0]._id;
              } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                  id = parseInt(args[0], 10);
                } else {
                  rate = parseFloat(args[0]);
                }
              } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
              }

              // Update the playback rate or return the current value.
              var sound;
              if (typeof rate === 'number') {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                    event: 'rate',
                    action: function () {
                      self.rate.apply(self, args);
                    }
                  });

                  return self;
                }

                // Set the group rate.
                if (typeof id === 'undefined') {
                  self._rate = rate;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                  // Get the sound.
                  sound = self._soundById(id[i]);

                  if (sound) {
                    // Keep track of our position when the rate changed and update the playback
                    // start position so we can properly adjust the seek position for time elapsed.
                    if (self.playing(id[i])) {
                      sound._rateSeek = self.seek(id[i]);
                      sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                    }
                    sound._rate = rate;

                    // Change the playback rate.
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                      sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
                    } else if (sound._node) {
                      sound._node.playbackRate = rate;
                    }

                    // Reset the timers.
                    var seek = self.seek(id[i]);
                    var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
                    var timeout = (duration * 1000) / Math.abs(sound._rate);

                    // Start a new end timer if sound is already playing.
                    if (self._endTimers[id[i]] || !sound._paused) {
                      self._clearTimer(id[i]);
                      self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                    }

                    self._emit('rate', sound._id);
                  }
                }
              } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
              }

              return self;
            },

            /**
             * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
             *   seek() -> Returns the first sound node's current seek position.
             *   seek(id) -> Returns the sound id's current seek position.
             *   seek(seek) -> Sets the seek position of the first sound node.
             *   seek(seek, id) -> Sets the seek position of passed sound id.
             * @return {Howl/Number} Returns self or the current seek position.
             */
            seek: function () {
              var self = this;
              var args = arguments;
              var seek, id;

              // Determine the values based on arguments.
              if (args.length === 0) {
                // We will simply return the current position of the first node.
                id = self._sounds[0]._id;
              } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                  id = parseInt(args[0], 10);
                } else if (self._sounds.length) {
                  id = self._sounds[0]._id;
                  seek = parseFloat(args[0]);
                }
              } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
              }

              // If there is no ID, bail out.
              if (typeof id === 'undefined') {
                return self;
              }

              // If the sound hasn't loaded, add it to the load queue to seek when capable.
              if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
                self._queue.push({
                  event: 'seek',
                  action: function () {
                    self.seek.apply(self, args);
                  }
                });

                return self;
              }

              // Get the sound.
              var sound = self._soundById(id);

              if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                  // Pause the sound and update position for restarting playback.
                  var playing = self.playing(id);
                  if (playing) {
                    self.pause(id, true);
                  }

                  // Move the position of the track and cancel timer.
                  sound._seek = seek;
                  sound._ended = false;
                  self._clearTimer(id);

                  // Update the seek position for HTML5 Audio.
                  if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                    sound._node.currentTime = seek;
                  }

                  // Seek and emit when ready.
                  var seekAndEmit = function () {
                    self._emit('seek', id);

                    // Restart the playback if the sound was playing.
                    if (playing) {
                      self.play(id, true);
                    }
                  };

                  // Wait for the play lock to be unset before emitting (HTML5 Audio).
                  if (playing && !self._webAudio) {
                    var emitSeek = function () {
                      if (!self._playLock) {
                        seekAndEmit();
                      } else {
                        setTimeout(emitSeek, 0);
                      }
                    };
                    setTimeout(emitSeek, 0);
                  } else {
                    seekAndEmit();
                  }
                } else {
                  if (self._webAudio) {
                    var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                    var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                    return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                  } else {
                    return sound._node.currentTime;
                  }
                }
              }

              return self;
            },

            /**
             * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
             * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
             * @return {Boolean} True if playing and false if not.
             */
            playing: function (id) {
              var self = this;

              // Check the passed sound ID (if any).
              if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
              }

              // Otherwise, loop through all sounds and check if any are playing.
              for (var i = 0; i < self._sounds.length; i++) {
                if (!self._sounds[i]._paused) {
                  return true;
                }
              }

              return false;
            },

            /**
             * Get the duration of this sound. Passing a sound id will return the sprite duration.
             * @param  {Number} id The sound id to check. If none is passed, return full source duration.
             * @return {Number} Audio duration in seconds.
             */
            duration: function (id) {
              var self = this;
              var duration = self._duration;

              // If we pass an ID, get the sound and return the sprite length.
              var sound = self._soundById(id);
              if (sound) {
                duration = self._sprite[sound._sprite][1] / 1000;
              }

              return duration;
            },

            /**
             * Returns the current loaded state of this Howl.
             * @return {String} 'unloaded', 'loading', 'loaded'
             */
            state: function () {
              return this._state;
            },

            /**
             * Unload and destroy the current Howl object.
             * This will immediately stop all sound instances attached to this group.
             */
            unload: function () {
              var self = this;

              // Stop playing any active sounds.
              var sounds = self._sounds;
              for (var i = 0; i < sounds.length; i++) {
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) {
                  self.stop(sounds[i]._id);
                }

                // Remove the source or disconnect.
                if (!self._webAudio) {
                  // Set the source to 0-second silence to stop any downloading (except in IE).
                  self._clearSound(sounds[i]._node);

                  // Remove any event listeners.
                  sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                  sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                  sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

                  // Release the Audio object back to the pool.
                  Howler._releaseHtml5Audio(sounds[i]._node);
                }

                // Empty out all of the nodes.
                delete sounds[i]._node;

                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);
              }

              // Remove the references in the global Howler object.
              var index = Howler._howls.indexOf(self);
              if (index >= 0) {
                Howler._howls.splice(index, 1);
              }

              // Delete this sound from the cache (if no other Howl is using it).
              var remCache = true;
              for (i = 0; i < Howler._howls.length; i++) {
                if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
                  remCache = false;
                  break;
                }
              }

              if (cache && remCache) {
                delete cache[self._src];
              }

              // Clear global errors.
              Howler.noAudio = false;

              // Clear out `self`.
              self._state = 'unloaded';
              self._sounds = [];
              self = null;

              return null;
            },

            /**
             * Listen to a custom event.
             * @param  {String}   event Event name.
             * @param  {Function} fn    Listener to call.
             * @param  {Number}   id    (optional) Only listen to events for this sound.
             * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
             * @return {Howl}
             */
            on: function (event, fn, id, once) {
              var self = this;
              var events = self['_on' + event];

              if (typeof fn === 'function') {
                events.push(once ? { id: id, fn: fn, once: once } : { id: id, fn: fn });
              }

              return self;
            },

            /**
             * Remove a custom event. Call without parameters to remove all events.
             * @param  {String}   event Event name.
             * @param  {Function} fn    Listener to remove. Leave empty to remove all.
             * @param  {Number}   id    (optional) Only remove events for this sound.
             * @return {Howl}
             */
            off: function (event, fn, id) {
              var self = this;
              var events = self['_on' + event];
              var i = 0;

              // Allow passing just an event and ID.
              if (typeof fn === 'number') {
                id = fn;
                fn = null;
              }

              if (fn || id) {
                // Loop through event store and remove the passed function.
                for (i = 0; i < events.length; i++) {
                  var isId = (id === events[i].id);
                  if (fn === events[i].fn && isId || !fn && isId) {
                    events.splice(i, 1);
                    break;
                  }
                }
              } else if (event) {
                // Clear out all events of this type.
                self['_on' + event] = [];
              } else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for (i = 0; i < keys.length; i++) {
                  if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
                    self[keys[i]] = [];
                  }
                }
              }

              return self;
            },

            /**
             * Listen to a custom event and remove it once fired.
             * @param  {String}   event Event name.
             * @param  {Function} fn    Listener to call.
             * @param  {Number}   id    (optional) Only listen to events for this sound.
             * @return {Howl}
             */
            once: function (event, fn, id) {
              var self = this;

              // Setup the event listener.
              self.on(event, fn, id, 1);

              return self;
            },

            /**
             * Emit all events of a specific type and pass the sound id.
             * @param  {String} event Event name.
             * @param  {Number} id    Sound ID.
             * @param  {Number} msg   Message to go with event.
             * @return {Howl}
             */
            _emit: function (event, id, msg) {
              var self = this;
              var events = self['_on' + event];

              // Loop through event store and fire all functions.
              for (var i = events.length - 1; i >= 0; i--) {
                // Only fire the listener if the correct ID is used.
                if (!events[i].id || events[i].id === id || event === 'load') {
                  setTimeout(function (fn) {
                    fn.call(this, id, msg);
                  }.bind(self, events[i].fn), 0);

                  // If this event was setup with `once`, remove it.
                  if (events[i].once) {
                    self.off(event, events[i].fn, events[i].id);
                  }
                }
              }

              // Pass the event type into load queue so that it can continue stepping.
              self._loadQueue(event);

              return self;
            },

            /**
             * Queue of actions initiated before the sound has loaded.
             * These will be called in sequence, with the next only firing
             * after the previous has finished executing (even if async like play).
             * @return {Howl}
             */
            _loadQueue: function (event) {
              var self = this;

              if (self._queue.length > 0) {
                var task = self._queue[0];

                // Remove this task if a matching event was passed.
                if (task.event === event) {
                  self._queue.shift();
                  self._loadQueue();
                }

                // Run the task if no event type is passed.
                if (!event) {
                  task.action();
                }
              }

              return self;
            },

            /**
             * Fired when playback ends at the end of the duration.
             * @param  {Sound} sound The sound object to work with.
             * @return {Howl}
             */
            _ended: function (sound) {
              var self = this;
              var sprite = sound._sprite;

              // If we are using IE and there was network latency we may be clipping
              // audio before it completes playing. Lets check the node to make sure it
              // believes it has completed, before ending the playback.
              if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                setTimeout(self._ended.bind(self, sound), 100);
                return self;
              }

              // Should this sound loop?
              var loop = !!(sound._loop || self._sprite[sprite][2]);

              // Fire the ended event.
              self._emit('end', sound._id);

              // Restart the playback for HTML5 Audio loop.
              if (!self._webAudio && loop) {
                self.stop(sound._id, true).play(sound._id);
              }

              // Restart this timer if on a Web Audio loop.
              if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler.ctx.currentTime;

                var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              }

              // Mark the node as paused.
              if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);

                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler._autoSuspend();
              }

              // When using a sprite, end the track.
              if (!self._webAudio && !loop) {
                self.stop(sound._id, true);
              }

              return self;
            },

            /**
             * Clear the end timer for a sound playback.
             * @param  {Number} id The sound ID.
             * @return {Howl}
             */
            _clearTimer: function (id) {
              var self = this;

              if (self._endTimers[id]) {
                // Clear the timeout or remove the ended listener.
                if (typeof self._endTimers[id] !== 'function') {
                  clearTimeout(self._endTimers[id]);
                } else {
                  var sound = self._soundById(id);
                  if (sound && sound._node) {
                    sound._node.removeEventListener('ended', self._endTimers[id], false);
                  }
                }

                delete self._endTimers[id];
              }

              return self;
            },

            /**
             * Return the sound identified by this ID, or return null.
             * @param  {Number} id Sound ID
             * @return {Object}    Sound object or null.
             */
            _soundById: function (id) {
              var self = this;

              // Loop through all sounds and find the one with this ID.
              for (var i = 0; i < self._sounds.length; i++) {
                if (id === self._sounds[i]._id) {
                  return self._sounds[i];
                }
              }

              return null;
            },

            /**
             * Return an inactive sound from the pool or create a new one.
             * @return {Sound} Sound playback object.
             */
            _inactiveSound: function () {
              var self = this;

              self._drain();

              // Find the first inactive node to recycle.
              for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                  return self._sounds[i].reset();
                }
              }

              // If no inactive node was found, create a new one.
              return new Sound(self);
            },

            /**
             * Drain excess inactive sounds from the pool.
             */
            _drain: function () {
              var self = this;
              var limit = self._pool;
              var cnt = 0;
              var i = 0;

              // If there are less sounds than the max pool size, we are done.
              if (self._sounds.length < limit) {
                return;
              }

              // Count the number of inactive sounds.
              for (i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                  cnt++;
                }
              }

              // Remove excess inactive sounds, going in reverse order.
              for (i = self._sounds.length - 1; i >= 0; i--) {
                if (cnt <= limit) {
                  return;
                }

                if (self._sounds[i]._ended) {
                  // Disconnect the audio source when using Web Audio.
                  if (self._webAudio && self._sounds[i]._node) {
                    self._sounds[i]._node.disconnect(0);
                  }

                  // Remove sounds until we have the pool size.
                  self._sounds.splice(i, 1);
                  cnt--;
                }
              }
            },

            /**
             * Get all ID's from the sounds pool.
             * @param  {Number} id Only return one ID if one is passed.
             * @return {Array}    Array of IDs.
             */
            _getSoundIds: function (id) {
              var self = this;

              if (typeof id === 'undefined') {
                var ids = [];
                for (var i = 0; i < self._sounds.length; i++) {
                  ids.push(self._sounds[i]._id);
                }

                return ids;
              } else {
                return [id];
              }
            },

            /**
             * Load the sound back into the buffer source.
             * @param  {Sound} sound The sound object to work with.
             * @return {Howl}
             */
            _refreshBuffer: function (sound) {
              var self = this;

              // Setup the buffer source for playback.
              sound._node.bufferSource = Howler.ctx.createBufferSource();
              sound._node.bufferSource.buffer = cache[self._src];

              // Connect to the correct node.
              if (sound._panner) {
                sound._node.bufferSource.connect(sound._panner);
              } else {
                sound._node.bufferSource.connect(sound._node);
              }

              // Setup looping and playback rate.
              sound._node.bufferSource.loop = sound._loop;
              if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop || 0;
              }
              sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

              return self;
            },

            /**
             * Prevent memory leaks by cleaning up the buffer source after playback.
             * @param  {Object} node Sound's audio node containing the buffer source.
             * @return {Howl}
             */
            _cleanBuffer: function (node) {
              var self = this;
              var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

              if (Howler._scratchBuffer && node.bufferSource) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                if (isIOS) {
                  try { node.bufferSource.buffer = Howler._scratchBuffer; } catch (e) { }
                }
              }
              node.bufferSource = null;

              return self;
            },

            /**
             * Set the source to a 0-second silence to stop any downloading (except in IE).
             * @param  {Object} node Audio node to clear.
             */
            _clearSound: function (node) {
              var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
              if (!checkIE) {
                node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
              }
            }
          };

          /** Single Sound Methods **/
          /***************************************************************************/

          /**
           * Setup the sound object, which each node attached to a Howl group is contained in.
           * @param {Object} howl The Howl parent group.
           */
          var Sound = function (howl) {
            this._parent = howl;
            this.init();
          };
          Sound.prototype = {
            /**
             * Initialize a new Sound object.
             * @return {Sound}
             */
            init: function () {
              var self = this;
              var parent = self._parent;

              // Setup the default parameters.
              self._muted = parent._muted;
              self._loop = parent._loop;
              self._volume = parent._volume;
              self._rate = parent._rate;
              self._seek = 0;
              self._paused = true;
              self._ended = true;
              self._sprite = '__default';

              // Generate a unique ID for this sound.
              self._id = ++Howler._counter;

              // Add itself to the parent's pool.
              parent._sounds.push(self);

              // Create the new node.
              self.create();

              return self;
            },

            /**
             * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
             * @return {Sound}
             */
            create: function () {
              var self = this;
              var parent = self._parent;
              var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

              if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler.masterGain);
              } else if (!Howler.noAudio) {
                // Get an unlocked Audio object from the pool.
                self._node = Howler._obtainHtml5Audio();

                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);

                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

                // Listen for the 'ended' event on the sound to account for edge-case where
                // a finite sound has a duration of Infinity.
                self._endFn = self._endListener.bind(self);
                self._node.addEventListener('ended', self._endFn, false);

                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = parent._preload === true ? 'auto' : parent._preload;
                self._node.volume = volume * Howler.volume();

                // Begin loading the source.
                self._node.load();
              }

              return self;
            },

            /**
             * Reset the parameters of this sound to the original state (for recycle).
             * @return {Sound}
             */
            reset: function () {
              var self = this;
              var parent = self._parent;

              // Reset all of the parameters of this sound.
              self._muted = parent._muted;
              self._loop = parent._loop;
              self._volume = parent._volume;
              self._rate = parent._rate;
              self._seek = 0;
              self._rateSeek = 0;
              self._paused = true;
              self._ended = true;
              self._sprite = '__default';

              // Generate a new ID so that it isn't confused with the previous sound.
              self._id = ++Howler._counter;

              return self;
            },

            /**
             * HTML5 Audio error listener callback.
             */
            _errorListener: function () {
              var self = this;

              // Fire an error event and pass back the code.
              self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

              // Clear the event listener.
              self._node.removeEventListener('error', self._errorFn, false);
            },

            /**
             * HTML5 Audio canplaythrough listener callback.
             */
            _loadListener: function () {
              var self = this;
              var parent = self._parent;

              // Round up the duration to account for the lower precision in HTML5 Audio.
              parent._duration = Math.ceil(self._node.duration * 10) / 10;

              // Setup a sprite if none is defined.
              if (Object.keys(parent._sprite).length === 0) {
                parent._sprite = { __default: [0, parent._duration * 1000] };
              }

              if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
              }

              // Clear the event listener.
              self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
            },

            /**
             * HTML5 Audio ended listener callback.
             */
            _endListener: function () {
              var self = this;
              var parent = self._parent;

              // Only handle the `ended`` event if the duration is Infinity.
              if (parent._duration === Infinity) {
                // Update the parent duration to match the real audio duration.
                // Round up the duration to account for the lower precision in HTML5 Audio.
                parent._duration = Math.ceil(self._node.duration * 10) / 10;

                // Update the sprite that corresponds to the real duration.
                if (parent._sprite.__default[1] === Infinity) {
                  parent._sprite.__default[1] = parent._duration * 1000;
                }

                // Run the regular ended method.
                parent._ended(self);
              }

              // Clear the event listener since the duration is now correct.
              self._node.removeEventListener('ended', self._endFn, false);
            }
          };

          /** Helper Methods **/
          /***************************************************************************/

          var cache = {};

          /**
           * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
           * @param  {Howl} self
           */
          var loadBuffer = function (self) {
            var url = self._src;

            // Check if the buffer has already been cached and use it instead.
            if (cache[url]) {
              // Set the duration from the cache.
              self._duration = cache[url].duration;

              // Load the sound into this Howl.
              loadSound(self);

              return;
            }

            if (/^data:[^;]+;base64,/.test(url)) {
              // Decode the base64 data URI without XHR, since some browsers don't support it.
              var data = atob(url.split(',')[1]);
              var dataView = new Uint8Array(data.length);
              for (var i = 0; i < data.length; ++i) {
                dataView[i] = data.charCodeAt(i);
              }

              decodeAudioData(dataView.buffer, self);
            } else {
              // Load the buffer from the URL.
              var xhr = new XMLHttpRequest();
              xhr.open(self._xhr.method, url, true);
              xhr.withCredentials = self._xhr.withCredentials;
              xhr.responseType = 'arraybuffer';

              // Apply any custom headers to the request.
              if (self._xhr.headers) {
                Object.keys(self._xhr.headers).forEach(function (key) {
                  xhr.setRequestHeader(key, self._xhr.headers[key]);
                });
              }

              xhr.onload = function () {
                // Make sure we get a successful response back.
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                  self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                  return;
                }

                decodeAudioData(xhr.response, self);
              };
              xhr.onerror = function () {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                  self._html5 = true;
                  self._webAudio = false;
                  self._sounds = [];
                  delete cache[url];
                  self.load();
                }
              };
              safeXhrSend(xhr);
            }
          };

          /**
           * Send the XHR request wrapped in a try/catch.
           * @param  {Object} xhr XHR to send.
           */
          var safeXhrSend = function (xhr) {
            try {
              xhr.send();
            } catch (e) {
              xhr.onerror();
            }
          };

          /**
           * Decode audio data from an array buffer.
           * @param  {ArrayBuffer} arraybuffer The audio data.
           * @param  {Howl}        self
           */
          var decodeAudioData = function (arraybuffer, self) {
            // Fire a load error if something broke.
            var error = function () {
              self._emit('loaderror', null, 'Decoding audio data failed.');
            };

            // Load the sound on success.
            var success = function (buffer) {
              if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
              } else {
                error();
              }
            };

            // Decode the buffer into an audio source.
            if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
              Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
            } else {
              Howler.ctx.decodeAudioData(arraybuffer, success, error);
            }
          }

          /**
           * Sound is now loaded, so finish setting everything up and fire the loaded event.
           * @param  {Howl} self
           * @param  {Object} buffer The decoded buffer sound source.
           */
          var loadSound = function (self, buffer) {
            // Set the duration.
            if (buffer && !self._duration) {
              self._duration = buffer.duration;
            }

            // Setup a sprite if none is defined.
            if (Object.keys(self._sprite).length === 0) {
              self._sprite = { __default: [0, self._duration * 1000] };
            }

            // Fire the loaded event.
            if (self._state !== 'loaded') {
              self._state = 'loaded';
              self._emit('load');
              self._loadQueue();
            }
          };

          /**
           * Setup the audio context when available, or switch to HTML5 Audio mode.
           */
          var setupAudioContext = function () {
            // If we have already detected that Web Audio isn't supported, don't run this step again.
            if (!Howler.usingWebAudio) {
              return;
            }

            // Check if we are using Web Audio and setup the AudioContext if we are.
            try {
              if (typeof AudioContext !== 'undefined') {
                Howler.ctx = new AudioContext();
              } else if (typeof webkitAudioContext !== 'undefined') {
                Howler.ctx = new webkitAudioContext();
              } else {
                Howler.usingWebAudio = false;
              }
            } catch (e) {
              Howler.usingWebAudio = false;
            }

            // If the audio context creation still failed, set using web audio to false.
            if (!Howler.ctx) {
              Howler.usingWebAudio = false;
            }

            // Check if a webview is being used on iOS8 or earlier (rather than the browser).
            // If it is, disable Web Audio as it causes crashing.
            var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
            var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            var version = appVersion ? parseInt(appVersion[1], 10) : null;
            if (iOS && version && version < 9) {
              var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
              if (Howler._navigator && !safari) {
                Howler.usingWebAudio = false;
              }
            }

            // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
            if (Howler.usingWebAudio) {
              Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
              Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
              Howler.masterGain.connect(Howler.ctx.destination);
            }

            // Re-run the setup on Howler.
            Howler._setup();
          };

          // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
          if (typeof define === 'function' && define.amd) {
            define([], function () {
              return {
                Howler: Howler,
                Howl: Howl
              };
            });
          }

          // Add support for CommonJS libraries such as browserify.
          if (typeof exports !== 'undefined') {
            exports.Howler = Howler;
            exports.Howl = Howl;
          }

          // Add to global in Node.js (for testing, etc).
          if (typeof global !== 'undefined') {
            global.HowlerGlobal = HowlerGlobal;
            global.Howler = Howler;
            global.Howl = Howl;
            global.Sound = Sound;
          } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
            window.HowlerGlobal = HowlerGlobal;
            window.Howler = Howler;
            window.Howl = Howl;
            window.Sound = Sound;
          }
        })();


        /*!
         *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
         *  
         *  howler.js v2.2.1
         *  howlerjs.com
         *
         *  (c) 2013-2020, James Simpson of GoldFire Studios
         *  goldfirestudios.com
         *
         *  MIT License
         */

        (function () {

          'use strict';

          // Setup default properties.
          HowlerGlobal.prototype._pos = [0, 0, 0];
          HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

          /** Global Methods **/
          /***************************************************************************/

          /**
           * Helper method to update the stereo panning position of all current Howls.
           * Future Howls will not use this value unless explicitly set.
           * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
           * @return {Howler/Number}     Self or current stereo panning value.
           */
          HowlerGlobal.prototype.stereo = function (pan) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self.ctx || !self.ctx.listener) {
              return self;
            }

            // Loop through all Howls and update their stereo panning.
            for (var i = self._howls.length - 1; i >= 0; i--) {
              self._howls[i].stereo(pan);
            }

            return self;
          };

          /**
           * Get/set the position of the listener in 3D cartesian space. Sounds using
           * 3D position will be relative to the listener's position.
           * @param  {Number} x The x-position of the listener.
           * @param  {Number} y The y-position of the listener.
           * @param  {Number} z The z-position of the listener.
           * @return {Howler/Array}   Self or current listener position.
           */
          HowlerGlobal.prototype.pos = function (x, y, z) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self.ctx || !self.ctx.listener) {
              return self;
            }

            // Set the defaults for optional 'y' & 'z'.
            y = (typeof y !== 'number') ? self._pos[1] : y;
            z = (typeof z !== 'number') ? self._pos[2] : z;

            if (typeof x === 'number') {
              self._pos = [x, y, z];

              if (typeof self.ctx.listener.positionX !== 'undefined') {
                self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
              } else {
                self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
              }
            } else {
              return self._pos;
            }

            return self;
          };

          /**
           * Get/set the direction the listener is pointing in the 3D cartesian space.
           * A front and up vector must be provided. The front is the direction the
           * face of the listener is pointing, and up is the direction the top of the
           * listener is pointing. Thus, these values are expected to be at right angles
           * from each other.
           * @param  {Number} x   The x-orientation of the listener.
           * @param  {Number} y   The y-orientation of the listener.
           * @param  {Number} z   The z-orientation of the listener.
           * @param  {Number} xUp The x-orientation of the top of the listener.
           * @param  {Number} yUp The y-orientation of the top of the listener.
           * @param  {Number} zUp The z-orientation of the top of the listener.
           * @return {Howler/Array}     Returns self or the current orientation vectors.
           */
          HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self.ctx || !self.ctx.listener) {
              return self;
            }

            // Set the defaults for optional 'y' & 'z'.
            var or = self._orientation;
            y = (typeof y !== 'number') ? or[1] : y;
            z = (typeof z !== 'number') ? or[2] : z;
            xUp = (typeof xUp !== 'number') ? or[3] : xUp;
            yUp = (typeof yUp !== 'number') ? or[4] : yUp;
            zUp = (typeof zUp !== 'number') ? or[5] : zUp;

            if (typeof x === 'number') {
              self._orientation = [x, y, z, xUp, yUp, zUp];

              if (typeof self.ctx.listener.forwardX !== 'undefined') {
                self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
              } else {
                self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
              }
            } else {
              return or;
            }

            return self;
          };

          /** Group Methods **/
          /***************************************************************************/

          /**
           * Add new properties to the core init.
           * @param  {Function} _super Core init method.
           * @return {Howl}
           */
          Howl.prototype.init = (function (_super) {
            return function (o) {
              var self = this;

              // Setup user-defined default properties.
              self._orientation = o.orientation || [1, 0, 0];
              self._stereo = o.stereo || null;
              self._pos = o.pos || null;
              self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
              };

              // Setup event listeners.
              self._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [];
              self._onpos = o.onpos ? [{ fn: o.onpos }] : [];
              self._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [];

              // Complete initilization with howler.js core's init function.
              return _super.call(this, o);
            };
          })(Howl.prototype.init);

          /**
           * Get/set the stereo panning of the audio source for this sound or all in the group.
           * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
           * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
           * @return {Howl/Number}    Returns self or the current stereo panning value.
           */
          Howl.prototype.stereo = function (pan, id) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self._webAudio) {
              return self;
            }

            // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
            if (self._state !== 'loaded') {
              self._queue.push({
                event: 'stereo',
                action: function () {
                  self.stereo(pan, id);
                }
              });

              return self;
            }

            // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
            var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

            // Setup the group's stereo panning if no ID is passed.
            if (typeof id === 'undefined') {
              // Return the group's stereo panning if no parameters are passed.
              if (typeof pan === 'number') {
                self._stereo = pan;
                self._pos = [pan, 0, 0];
              } else {
                return self._stereo;
              }
            }

            // Change the streo panning of one or all sounds in group.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              // Get the sound.
              var sound = self._soundById(ids[i]);

              if (sound) {
                if (typeof pan === 'number') {
                  sound._stereo = pan;
                  sound._pos = [pan, 0, 0];

                  if (sound._node) {
                    // If we are falling back, make sure the panningModel is equalpower.
                    sound._pannerAttr.panningModel = 'equalpower';

                    // Check if there is a panner setup and create a new one if not.
                    if (!sound._panner || !sound._panner.pan) {
                      setupPanner(sound, pannerType);
                    }

                    if (pannerType === 'spatial') {
                      if (typeof sound._panner.positionX !== 'undefined') {
                        sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                        sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                        sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                      } else {
                        sound._panner.setPosition(pan, 0, 0);
                      }
                    } else {
                      sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                    }
                  }

                  self._emit('stereo', sound._id);
                } else {
                  return sound._stereo;
                }
              }
            }

            return self;
          };

          /**
           * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
           * @param  {Number} x  The x-position of the audio source.
           * @param  {Number} y  The y-position of the audio source.
           * @param  {Number} z  The z-position of the audio source.
           * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
           * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
           */
          Howl.prototype.pos = function (x, y, z, id) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self._webAudio) {
              return self;
            }

            // If the sound hasn't loaded, add it to the load queue to change position when capable.
            if (self._state !== 'loaded') {
              self._queue.push({
                event: 'pos',
                action: function () {
                  self.pos(x, y, z, id);
                }
              });

              return self;
            }

            // Set the defaults for optional 'y' & 'z'.
            y = (typeof y !== 'number') ? 0 : y;
            z = (typeof z !== 'number') ? -0.5 : z;

            // Setup the group's spatial position if no ID is passed.
            if (typeof id === 'undefined') {
              // Return the group's spatial position if no parameters are passed.
              if (typeof x === 'number') {
                self._pos = [x, y, z];
              } else {
                return self._pos;
              }
            }

            // Change the spatial position of one or all sounds in group.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              // Get the sound.
              var sound = self._soundById(ids[i]);

              if (sound) {
                if (typeof x === 'number') {
                  sound._pos = [x, y, z];

                  if (sound._node) {
                    // Check if there is a panner setup and create a new one if not.
                    if (!sound._panner || sound._panner.pan) {
                      setupPanner(sound, 'spatial');
                    }

                    if (typeof sound._panner.positionX !== 'undefined') {
                      sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                      sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                      sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                    } else {
                      sound._panner.setPosition(x, y, z);
                    }
                  }

                  self._emit('pos', sound._id);
                } else {
                  return sound._pos;
                }
              }
            }

            return self;
          };

          /**
           * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
           * space. Depending on how direction the sound is, based on the `cone` attributes,
           * a sound pointing away from the listener can be quiet or silent.
           * @param  {Number} x  The x-orientation of the source.
           * @param  {Number} y  The y-orientation of the source.
           * @param  {Number} z  The z-orientation of the source.
           * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
           * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
           */
          Howl.prototype.orientation = function (x, y, z, id) {
            var self = this;

            // Stop right here if not using Web Audio.
            if (!self._webAudio) {
              return self;
            }

            // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
            if (self._state !== 'loaded') {
              self._queue.push({
                event: 'orientation',
                action: function () {
                  self.orientation(x, y, z, id);
                }
              });

              return self;
            }

            // Set the defaults for optional 'y' & 'z'.
            y = (typeof y !== 'number') ? self._orientation[1] : y;
            z = (typeof z !== 'number') ? self._orientation[2] : z;

            // Setup the group's spatial orientation if no ID is passed.
            if (typeof id === 'undefined') {
              // Return the group's spatial orientation if no parameters are passed.
              if (typeof x === 'number') {
                self._orientation = [x, y, z];
              } else {
                return self._orientation;
              }
            }

            // Change the spatial orientation of one or all sounds in group.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              // Get the sound.
              var sound = self._soundById(ids[i]);

              if (sound) {
                if (typeof x === 'number') {
                  sound._orientation = [x, y, z];

                  if (sound._node) {
                    // Check if there is a panner setup and create a new one if not.
                    if (!sound._panner) {
                      // Make sure we have a position to setup the node with.
                      if (!sound._pos) {
                        sound._pos = self._pos || [0, 0, -0.5];
                      }

                      setupPanner(sound, 'spatial');
                    }

                    if (typeof sound._panner.orientationX !== 'undefined') {
                      sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                      sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                      sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                    } else {
                      sound._panner.setOrientation(x, y, z);
                    }
                  }

                  self._emit('orientation', sound._id);
                } else {
                  return sound._orientation;
                }
              }
            }

            return self;
          };

          /**
           * Get/set the panner node's attributes for a sound or group of sounds.
           * This method can optionall take 0, 1 or 2 arguments.
           *   pannerAttr() -> Returns the group's values.
           *   pannerAttr(id) -> Returns the sound id's values.
           *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
           *   pannerAttr(o, id) -> Set's the values of passed sound id.
           *
           *   Attributes:
           *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
           *                      inside of which there will be no volume reduction.
           *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
           *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
           *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
           *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
           *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
           *                     listener. Can be `linear`, `inverse` or `exponential.
           *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
           *                   will not be reduced any further.
           *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
           *                   This is simply a variable of the distance model and has a different effect depending on which model
           *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
           *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
           *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
           *                     with `inverse` and `exponential`.
           *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
           *                     Can be `HRTF` or `equalpower`.
           *
           * @return {Howl/Object} Returns self or current panner attributes.
           */
          Howl.prototype.pannerAttr = function () {
            var self = this;
            var args = arguments;
            var o, id, sound;

            // Stop right here if not using Web Audio.
            if (!self._webAudio) {
              return self;
            }

            // Determine the values based on arguments.
            if (args.length === 0) {
              // Return the group's panner attribute values.
              return self._pannerAttr;
            } else if (args.length === 1) {
              if (typeof args[0] === 'object') {
                o = args[0];

                // Set the grou's panner attribute values.
                if (typeof id === 'undefined') {
                  if (!o.pannerAttr) {
                    o.pannerAttr = {
                      coneInnerAngle: o.coneInnerAngle,
                      coneOuterAngle: o.coneOuterAngle,
                      coneOuterGain: o.coneOuterGain,
                      distanceModel: o.distanceModel,
                      maxDistance: o.maxDistance,
                      refDistance: o.refDistance,
                      rolloffFactor: o.rolloffFactor,
                      panningModel: o.panningModel
                    };
                  }

                  self._pannerAttr = {
                    coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                    coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                    coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                    distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                    maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                    refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                    rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                    panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
                  };
                }
              } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
              }
            } else if (args.length === 2) {
              o = args[0];
              id = parseInt(args[1], 10);
            }

            // Update the values of the specified sounds.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              sound = self._soundById(ids[i]);

              if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                  coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                  coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                  coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                  distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                  maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                  refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                  rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
                  panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
                };

                // Update the panner values or create a new panner if none exists.
                var panner = sound._panner;
                if (panner) {
                  panner.coneInnerAngle = pa.coneInnerAngle;
                  panner.coneOuterAngle = pa.coneOuterAngle;
                  panner.coneOuterGain = pa.coneOuterGain;
                  panner.distanceModel = pa.distanceModel;
                  panner.maxDistance = pa.maxDistance;
                  panner.refDistance = pa.refDistance;
                  panner.rolloffFactor = pa.rolloffFactor;
                  panner.panningModel = pa.panningModel;
                } else {
                  // Make sure we have a position to setup the node with.
                  if (!sound._pos) {
                    sound._pos = self._pos || [0, 0, -0.5];
                  }

                  // Create a new panner node.
                  setupPanner(sound, 'spatial');
                }
              }
            }

            return self;
          };

          /** Single Sound Methods **/
          /***************************************************************************/

          /**
           * Add new properties to the core Sound init.
           * @param  {Function} _super Core Sound init method.
           * @return {Sound}
           */
          Sound.prototype.init = (function (_super) {
            return function () {
              var self = this;
              var parent = self._parent;

              // Setup user-defined default properties.
              self._orientation = parent._orientation;
              self._stereo = parent._stereo;
              self._pos = parent._pos;
              self._pannerAttr = parent._pannerAttr;

              // Complete initilization with howler.js core Sound's init function.
              _super.call(this);

              // If a stereo or position was specified, set it up.
              if (self._stereo) {
                parent.stereo(self._stereo);
              } else if (self._pos) {
                parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
              }
            };
          })(Sound.prototype.init);

          /**
           * Override the Sound.reset method to clean up properties from the spatial plugin.
           * @param  {Function} _super Sound reset method.
           * @return {Sound}
           */
          Sound.prototype.reset = (function (_super) {
            return function () {
              var self = this;
              var parent = self._parent;

              // Reset all spatial plugin properties on this sound.
              self._orientation = parent._orientation;
              self._stereo = parent._stereo;
              self._pos = parent._pos;
              self._pannerAttr = parent._pannerAttr;

              // If a stereo or position was specified, set it up.
              if (self._stereo) {
                parent.stereo(self._stereo);
              } else if (self._pos) {
                parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
              } else if (self._panner) {
                // Disconnect the panner.
                self._panner.disconnect(0);
                self._panner = undefined;
                parent._refreshBuffer(self);
              }

              // Complete resetting of the sound.
              return _super.call(this);
            };
          })(Sound.prototype.reset);

          /** Helper Methods **/
          /***************************************************************************/

          /**
           * Create a new panner node and save it on the sound.
           * @param  {Sound} sound Specific sound to setup panning on.
           * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
           */
          var setupPanner = function (sound, type) {
            type = type || 'spatial';

            // Create the new panner node.
            if (type === 'spatial') {
              sound._panner = Howler.ctx.createPanner();
              sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
              sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
              sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
              sound._panner.distanceModel = sound._pannerAttr.distanceModel;
              sound._panner.maxDistance = sound._pannerAttr.maxDistance;
              sound._panner.refDistance = sound._pannerAttr.refDistance;
              sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
              sound._panner.panningModel = sound._pannerAttr.panningModel;

              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
              }

              if (typeof sound._panner.orientationX !== 'undefined') {
                sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
              } else {
                sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
              }
            } else {
              sound._panner = Howler.ctx.createStereoPanner();
              sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
            }

            sound._panner.connect(sound._node);

            // Update the connections.
            if (!sound._paused) {
              sound._parent.pause(sound._id, true).play(sound._id, true);
            }
          };
        })();

      }).call(this)
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {}], 18: [function (require, module, exports) {
    (function (global) {
      (function () {
        /* locomotive-scroll v4.0.7 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
        (function (global, factory) {
          typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
              (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LocomotiveScroll = factory());
        }(this, (function () {
          'use strict';

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);

            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
              keys.push.apply(keys, symbols);
            }

            return keys;
          }

          function _objectSpread2(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};

              if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }

            return target;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

            return _setPrototypeOf(o, p);
          }

          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;

            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
              return true;
            } catch (e) {
              return false;
            }
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return self;
          }

          function _possibleConstructorReturn(self, call) {
            if (call && (typeof call === "object" || typeof call === "function")) {
              return call;
            }

            return _assertThisInitialized(self);
          }

          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();

            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;

              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }

              return _possibleConstructorReturn(this, result);
            };
          }

          function _superPropBase(object, property) {
            while (!Object.prototype.hasOwnProperty.call(object, property)) {
              object = _getPrototypeOf(object);
              if (object === null) break;
            }

            return object;
          }

          function _get(target, property, receiver) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
              _get = Reflect.get;
            } else {
              _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                  return desc.get.call(receiver);
                }

                return desc.value;
              };
            }

            return _get(target, property, receiver || target);
          }

          function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
          }

          function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _iterableToArrayLimit(arr, i) {
            if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"] != null) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
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

            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

            return arr2;
          }

          function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var defaults = {
            el: document,
            name: 'scroll',
            offset: [0, 0],
            repeat: false,
            smooth: false,
            direction: 'vertical',
            gestureDirection: 'vertical',
            reloadOnContextChange: false,
            lerp: 0.1,
            "class": 'is-inview',
            scrollbarContainer: false,
            scrollbarClass: 'c-scrollbar',
            scrollingClass: 'has-scroll-scrolling',
            draggingClass: 'has-scroll-dragging',
            smoothClass: 'has-scroll-smooth',
            initClass: 'has-scroll-init',
            getSpeed: false,
            getDirection: false,
            scrollFromAnywhere: false,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: true,
            tablet: {
              smooth: false,
              direction: 'vertical',
              gestureDirection: 'vertical',
              breakpoint: 1024
            },
            smartphone: {
              smooth: false,
              direction: 'vertical',
              gestureDirection: 'vertical'
            }
          };

          var _default = /*#__PURE__*/function () {
            function _default() {
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, _default);

              Object.assign(this, defaults, options);
              this.smartphone = defaults.smartphone;
              if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
              this.tablet = defaults.tablet;
              if (options.tablet) Object.assign(this.tablet, options.tablet);
              this.namespace = 'locomotive';
              this.html = document.documentElement;
              this.windowHeight = window.innerHeight;
              this.windowWidth = window.innerWidth;
              this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
              };
              this.els = {};
              this.currentElements = {};
              this.listeners = {};
              this.hasScrollTicking = false;
              this.hasCallEventSet = false;
              this.checkScroll = this.checkScroll.bind(this);
              this.checkResize = this.checkResize.bind(this);
              this.checkEvent = this.checkEvent.bind(this);
              this.instance = {
                scroll: {
                  x: 0,
                  y: 0
                },
                limit: {
                  x: this.html.offsetHeight,
                  y: this.html.offsetHeight
                },
                currentElements: this.currentElements
              };

              if (this.isMobile) {
                if (this.isTablet) {
                  this.context = 'tablet';
                } else {
                  this.context = 'smartphone';
                }
              } else {
                this.context = 'desktop';
              }

              if (this.isMobile) this.direction = this[this.context].direction;

              if (this.direction === 'horizontal') {
                this.directionAxis = 'x';
              } else {
                this.directionAxis = 'y';
              }

              if (this.getDirection) {
                this.instance.direction = null;
              }

              if (this.getDirection) {
                this.instance.speed = 0;
              }

              this.html.classList.add(this.initClass);
              window.addEventListener('resize', this.checkResize, false);
            }

            _createClass(_default, [{
              key: "init",
              value: function init() {
                this.initEvents();
              }
            }, {
              key: "checkScroll",
              value: function checkScroll() {
                this.dispatchScroll();
              }
            }, {
              key: "checkResize",
              value: function checkResize() {
                var _this = this;

                if (!this.resizeTick) {
                  this.resizeTick = true;
                  requestAnimationFrame(function () {
                    _this.resize();

                    _this.resizeTick = false;
                  });
                }
              }
            }, {
              key: "resize",
              value: function resize() { }
            }, {
              key: "checkContext",
              value: function checkContext() {
                if (!this.reloadOnContextChange) return;
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
                this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var oldContext = this.context;

                if (this.isMobile) {
                  if (this.isTablet) {
                    this.context = 'tablet';
                  } else {
                    this.context = 'smartphone';
                  }
                } else {
                  this.context = 'desktop';
                }

                if (oldContext != this.context) {
                  var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
                  var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
                  if (oldSmooth != newSmooth) window.location.reload();
                }
              }
            }, {
              key: "initEvents",
              value: function initEvents() {
                var _this2 = this;

                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
                this.setScrollTo = this.setScrollTo.bind(this);
                this.scrollToEls.forEach(function (el) {
                  el.addEventListener('click', _this2.setScrollTo, false);
                });
              }
            }, {
              key: "setScrollTo",
              value: function setScrollTo(event) {
                event.preventDefault();
                this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
                  offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                });
              }
            }, {
              key: "addElements",
              value: function addElements() { }
            }, {
              key: "detectElements",
              value: function detectElements(hasCallEventSet) {
                var _this3 = this;

                var scrollTop = this.instance.scroll.y;
                var scrollBottom = scrollTop + this.windowHeight;
                var scrollLeft = this.instance.scroll.x;
                var scrollRight = scrollLeft + this.windowWidth;
                Object.entries(this.els).forEach(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    i = _ref2[0],
                    el = _ref2[1];

                  if (el && (!el.inView || hasCallEventSet)) {
                    if (_this3.direction === 'horizontal') {
                      if (scrollRight >= el.left && scrollLeft < el.right) {
                        _this3.setInView(el, i);
                      }
                    } else {
                      if (scrollBottom >= el.top && scrollTop < el.bottom) {
                        _this3.setInView(el, i);
                      }
                    }
                  }

                  if (el && el.inView) {
                    if (_this3.direction === 'horizontal') {
                      var width = el.right - el.left;
                      el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

                      if (scrollRight < el.left || scrollLeft > el.right) {
                        _this3.setOutOfView(el, i);
                      }
                    } else {
                      var height = el.bottom - el.top;
                      el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

                      if (scrollBottom < el.top || scrollTop > el.bottom) {
                        _this3.setOutOfView(el, i);
                      }
                    }
                  }
                }); // this.els = this.els.filter((current, i) => {
                //     return current !== null;
                // });

                this.hasScrollTicking = false;
              }
            }, {
              key: "setInView",
              value: function setInView(current, i) {
                this.els[i].inView = true;
                current.el.classList.add(current["class"]);
                this.currentElements[i] = current;

                if (current.call && this.hasCallEventSet) {
                  this.dispatchCall(current, 'enter');

                  if (!current.repeat) {
                    this.els[i].call = false;
                  }
                } // if (!current.repeat && !current.speed && !current.sticky) {
                //     if (!current.call || current.call && this.hasCallEventSet) {
                //        this.els[i] = null
                //     }
                // }

              }
            }, {
              key: "setOutOfView",
              value: function setOutOfView(current, i) {
                var _this4 = this;

                // if (current.repeat || current.speed !== undefined) {
                this.els[i].inView = false; // }

                Object.keys(this.currentElements).forEach(function (el) {
                  el === i && delete _this4.currentElements[el];
                });

                if (current.call && this.hasCallEventSet) {
                  this.dispatchCall(current, 'exit');
                }

                if (current.repeat) {
                  current.el.classList.remove(current["class"]);
                }
              }
            }, {
              key: "dispatchCall",
              value: function dispatchCall(current, way) {
                this.callWay = way;
                this.callValue = current.call.split(',').map(function (item) {
                  return item.trim();
                });
                this.callObj = current;
                if (this.callValue.length == 1) this.callValue = this.callValue[0];
                var callEvent = new Event(this.namespace + 'call');
                this.el.dispatchEvent(callEvent);
              }
            }, {
              key: "dispatchScroll",
              value: function dispatchScroll() {
                var scrollEvent = new Event(this.namespace + 'scroll');
                this.el.dispatchEvent(scrollEvent);
              }
            }, {
              key: "setEvents",
              value: function setEvents(event, func) {
                if (!this.listeners[event]) {
                  this.listeners[event] = [];
                }

                var list = this.listeners[event];
                list.push(func);

                if (list.length === 1) {
                  this.el.addEventListener(this.namespace + event, this.checkEvent, false);
                }

                if (event === 'call') {
                  this.hasCallEventSet = true;
                  this.detectElements(true);
                }
              }
            }, {
              key: "unsetEvents",
              value: function unsetEvents(event, func) {
                if (!this.listeners[event]) return;
                var list = this.listeners[event];
                var index = list.indexOf(func);
                if (index < 0) return;
                list.splice(index, 1);

                if (list.index === 0) {
                  this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
                }
              }
            }, {
              key: "checkEvent",
              value: function checkEvent(event) {
                var _this5 = this;

                var name = event.type.replace(this.namespace, '');
                var list = this.listeners[name];
                if (!list || list.length === 0) return;
                list.forEach(function (func) {
                  switch (name) {
                    case 'scroll':
                      return func(_this5.instance);

                    case 'call':
                      return func(_this5.callValue, _this5.callWay, _this5.callObj);

                    default:
                      return func();
                  }
                });
              }
            }, {
              key: "startScroll",
              value: function startScroll() { }
            }, {
              key: "stopScroll",
              value: function stopScroll() { }
            }, {
              key: "setScroll",
              value: function setScroll(x, y) {
                this.instance.scroll = {
                  x: 0,
                  y: 0
                };
              }
            }, {
              key: "destroy",
              value: function destroy() {
                var _this6 = this;

                window.removeEventListener('resize', this.checkResize, false);
                Object.keys(this.listeners).forEach(function (event) {
                  _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
                });
                this.listeners = {};
                this.scrollToEls.forEach(function (el) {
                  el.removeEventListener('click', _this6.setScrollTo, false);
                });
                this.html.classList.remove(this.initClass);
              }
            }]);

            return _default;
          }();

          var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

          function createCommonjsModule(fn, module) {
            return module = { exports: {} }, fn(module, module.exports), module.exports;
          }

          var smoothscroll = createCommonjsModule(function (module, exports) {
            /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
            (function () {

              // polyfill
              function polyfill() {
                // aliases
                var w = window;
                var d = document;

                // return if scroll behavior is supported and polyfill is not forced
                if (
                  'scrollBehavior' in d.documentElement.style &&
                  w.__forceSmoothScrollPolyfill__ !== true
                ) {
                  return;
                }

                // globals
                var Element = w.HTMLElement || w.Element;
                var SCROLL_TIME = 468;

                // object gathering original scroll methods
                var original = {
                  scroll: w.scroll || w.scrollTo,
                  scrollBy: w.scrollBy,
                  elementScroll: Element.prototype.scroll || scrollElement,
                  scrollIntoView: Element.prototype.scrollIntoView
                };

                // define timing method
                var now =
                  w.performance && w.performance.now
                    ? w.performance.now.bind(w.performance)
                    : Date.now;

                /**
                 * indicates if a the current browser is made by Microsoft
                 * @method isMicrosoftBrowser
                 * @param {String} userAgent
                 * @returns {Boolean}
                 */
                function isMicrosoftBrowser(userAgent) {
                  var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

                  return new RegExp(userAgentPatterns.join('|')).test(userAgent);
                }

                /*
                 * IE has rounding bug rounding down clientHeight and clientWidth and
                 * rounding up scrollHeight and scrollWidth causing false positives
                 * on hasScrollableSpace
                 */
                var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

                /**
                 * changes scroll position inside an element
                 * @method scrollElement
                 * @param {Number} x
                 * @param {Number} y
                 * @returns {undefined}
                 */
                function scrollElement(x, y) {
                  this.scrollLeft = x;
                  this.scrollTop = y;
                }

                /**
                 * returns result of applying ease math function to a number
                 * @method ease
                 * @param {Number} k
                 * @returns {Number}
                 */
                function ease(k) {
                  return 0.5 * (1 - Math.cos(Math.PI * k));
                }

                /**
                 * indicates if a smooth behavior should be applied
                 * @method shouldBailOut
                 * @param {Number|Object} firstArg
                 * @returns {Boolean}
                 */
                function shouldBailOut(firstArg) {
                  if (
                    firstArg === null ||
                    typeof firstArg !== 'object' ||
                    firstArg.behavior === undefined ||
                    firstArg.behavior === 'auto' ||
                    firstArg.behavior === 'instant'
                  ) {
                    // first argument is not an object/null
                    // or behavior is auto, instant or undefined
                    return true;
                  }

                  if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
                    // first argument is an object and behavior is smooth
                    return false;
                  }

                  // throw error when behavior is not supported
                  throw new TypeError(
                    'behavior member of ScrollOptions ' +
                    firstArg.behavior +
                    ' is not a valid value for enumeration ScrollBehavior.'
                  );
                }

                /**
                 * indicates if an element has scrollable space in the provided axis
                 * @method hasScrollableSpace
                 * @param {Node} el
                 * @param {String} axis
                 * @returns {Boolean}
                 */
                function hasScrollableSpace(el, axis) {
                  if (axis === 'Y') {
                    return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
                  }

                  if (axis === 'X') {
                    return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
                  }
                }

                /**
                 * indicates if an element has a scrollable overflow property in the axis
                 * @method canOverflow
                 * @param {Node} el
                 * @param {String} axis
                 * @returns {Boolean}
                 */
                function canOverflow(el, axis) {
                  var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

                  return overflowValue === 'auto' || overflowValue === 'scroll';
                }

                /**
                 * indicates if an element can be scrolled in either axis
                 * @method isScrollable
                 * @param {Node} el
                 * @param {String} axis
                 * @returns {Boolean}
                 */
                function isScrollable(el) {
                  var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
                  var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

                  return isScrollableY || isScrollableX;
                }

                /**
                 * finds scrollable parent of an element
                 * @method findScrollableParent
                 * @param {Node} el
                 * @returns {Node} el
                 */
                function findScrollableParent(el) {
                  while (el !== d.body && isScrollable(el) === false) {
                    el = el.parentNode || el.host;
                  }

                  return el;
                }

                /**
                 * self invoked function that, given a context, steps through scrolling
                 * @method step
                 * @param {Object} context
                 * @returns {undefined}
                 */
                function step(context) {
                  var time = now();
                  var value;
                  var currentX;
                  var currentY;
                  var elapsed = (time - context.startTime) / SCROLL_TIME;

                  // avoid elapsed times higher than one
                  elapsed = elapsed > 1 ? 1 : elapsed;

                  // apply easing to elapsed time
                  value = ease(elapsed);

                  currentX = context.startX + (context.x - context.startX) * value;
                  currentY = context.startY + (context.y - context.startY) * value;

                  context.method.call(context.scrollable, currentX, currentY);

                  // scroll more if we have not reached our destination
                  if (currentX !== context.x || currentY !== context.y) {
                    w.requestAnimationFrame(step.bind(w, context));
                  }
                }

                /**
                 * scrolls window or element with a smooth behavior
                 * @method smoothScroll
                 * @param {Object|Node} el
                 * @param {Number} x
                 * @param {Number} y
                 * @returns {undefined}
                 */
                function smoothScroll(el, x, y) {
                  var scrollable;
                  var startX;
                  var startY;
                  var method;
                  var startTime = now();

                  // define scroll context
                  if (el === d.body) {
                    scrollable = w;
                    startX = w.scrollX || w.pageXOffset;
                    startY = w.scrollY || w.pageYOffset;
                    method = original.scroll;
                  } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                  }

                  // scroll looping over a frame
                  step({
                    scrollable: scrollable,
                    method: method,
                    startTime: startTime,
                    startX: startX,
                    startY: startY,
                    x: x,
                    y: y
                  });
                }

                // ORIGINAL METHODS OVERRIDES
                // w.scroll and w.scrollTo
                w.scroll = w.scrollTo = function () {
                  // avoid action when no arguments are passed
                  if (arguments[0] === undefined) {
                    return;
                  }

                  // avoid smooth behavior if not required
                  if (shouldBailOut(arguments[0]) === true) {
                    original.scroll.call(
                      w,
                      arguments[0].left !== undefined
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object'
                          ? arguments[0]
                          : w.scrollX || w.pageXOffset,
                      // use top prop, second argument if present or fallback to scrollY
                      arguments[0].top !== undefined
                        ? arguments[0].top
                        : arguments[1] !== undefined
                          ? arguments[1]
                          : w.scrollY || w.pageYOffset
                    );

                    return;
                  }

                  // LET THE SMOOTHNESS BEGIN!
                  smoothScroll.call(
                    w,
                    d.body,
                    arguments[0].left !== undefined
                      ? ~~arguments[0].left
                      : w.scrollX || w.pageXOffset,
                    arguments[0].top !== undefined
                      ? ~~arguments[0].top
                      : w.scrollY || w.pageYOffset
                  );
                };

                // w.scrollBy
                w.scrollBy = function () {
                  // avoid action when no arguments are passed
                  if (arguments[0] === undefined) {
                    return;
                  }

                  // avoid smooth behavior if not required
                  if (shouldBailOut(arguments[0])) {
                    original.scrollBy.call(
                      w,
                      arguments[0].left !== undefined
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object' ? arguments[0] : 0,
                      arguments[0].top !== undefined
                        ? arguments[0].top
                        : arguments[1] !== undefined ? arguments[1] : 0
                    );

                    return;
                  }

                  // LET THE SMOOTHNESS BEGIN!
                  smoothScroll.call(
                    w,
                    d.body,
                    ~~arguments[0].left + (w.scrollX || w.pageXOffset),
                    ~~arguments[0].top + (w.scrollY || w.pageYOffset)
                  );
                };

                // Element.prototype.scroll and Element.prototype.scrollTo
                Element.prototype.scroll = Element.prototype.scrollTo = function () {
                  // avoid action when no arguments are passed
                  if (arguments[0] === undefined) {
                    return;
                  }

                  // avoid smooth behavior if not required
                  if (shouldBailOut(arguments[0]) === true) {
                    // if one number is passed, throw error to match Firefox implementation
                    if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                      throw new SyntaxError('Value could not be converted');
                    }

                    original.elementScroll.call(
                      this,
                      // use left prop, first number argument or fallback to scrollLeft
                      arguments[0].left !== undefined
                        ? ~~arguments[0].left
                        : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
                      // use top prop, second argument or fallback to scrollTop
                      arguments[0].top !== undefined
                        ? ~~arguments[0].top
                        : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
                    );

                    return;
                  }

                  var left = arguments[0].left;
                  var top = arguments[0].top;

                  // LET THE SMOOTHNESS BEGIN!
                  smoothScroll.call(
                    this,
                    this,
                    typeof left === 'undefined' ? this.scrollLeft : ~~left,
                    typeof top === 'undefined' ? this.scrollTop : ~~top
                  );
                };

                // Element.prototype.scrollBy
                Element.prototype.scrollBy = function () {
                  // avoid action when no arguments are passed
                  if (arguments[0] === undefined) {
                    return;
                  }

                  // avoid smooth behavior if not required
                  if (shouldBailOut(arguments[0]) === true) {
                    original.elementScroll.call(
                      this,
                      arguments[0].left !== undefined
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      arguments[0].top !== undefined
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop
                    );

                    return;
                  }

                  this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                  });
                };

                // Element.prototype.scrollIntoView
                Element.prototype.scrollIntoView = function () {
                  // avoid smooth behavior if not required
                  if (shouldBailOut(arguments[0]) === true) {
                    original.scrollIntoView.call(
                      this,
                      arguments[0] === undefined ? true : arguments[0]
                    );

                    return;
                  }

                  // LET THE SMOOTHNESS BEGIN!
                  var scrollableParent = findScrollableParent(this);
                  var parentRects = scrollableParent.getBoundingClientRect();
                  var clientRects = this.getBoundingClientRect();

                  if (scrollableParent !== d.body) {
                    // reveal element inside parent
                    smoothScroll.call(
                      this,
                      scrollableParent,
                      scrollableParent.scrollLeft + clientRects.left - parentRects.left,
                      scrollableParent.scrollTop + clientRects.top - parentRects.top
                    );

                    // reveal parent in viewport unless is fixed
                    if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                      w.scrollBy({
                        left: parentRects.left,
                        top: parentRects.top,
                        behavior: 'smooth'
                      });
                    }
                  } else {
                    // reveal element in viewport
                    w.scrollBy({
                      left: clientRects.left,
                      top: clientRects.top,
                      behavior: 'smooth'
                    });
                  }
                };
              }

              {
                // commonjs
                module.exports = { polyfill: polyfill };
              }

            }());
          });
          var smoothscroll_1 = smoothscroll.polyfill;

          var _default$1 = /*#__PURE__*/function (_Core) {
            _inherits(_default, _Core);

            var _super = _createSuper(_default);

            function _default() {
              var _this;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, _default);

              _this = _super.call(this, options);

              if (_this.resetNativeScroll) {
                if (history.scrollRestoration) {
                  history.scrollRestoration = 'manual';
                }

                window.scrollTo(0, 0);
              }

              window.addEventListener('scroll', _this.checkScroll, false);

              if (window.smoothscrollPolyfill === undefined) {
                window.smoothscrollPolyfill = smoothscroll;
                window.smoothscrollPolyfill.polyfill();
              }

              return _this;
            }

            _createClass(_default, [{
              key: "init",
              value: function init() {
                this.instance.scroll.y = window.pageYOffset;
                this.addElements();
                this.detectElements();

                _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
              }
            }, {
              key: "checkScroll",
              value: function checkScroll() {
                var _this2 = this;

                _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

                if (this.getDirection) {
                  this.addDirection();
                }

                if (this.getSpeed) {
                  this.addSpeed();
                  this.speedTs = Date.now();
                }

                this.instance.scroll.y = window.pageYOffset;

                if (Object.entries(this.els).length) {
                  if (!this.hasScrollTicking) {
                    requestAnimationFrame(function () {
                      _this2.detectElements();
                    });
                    this.hasScrollTicking = true;
                  }
                }
              }
            }, {
              key: "addDirection",
              value: function addDirection() {
                if (window.pageYOffset > this.instance.scroll.y) {
                  if (this.instance.direction !== 'down') {
                    this.instance.direction = 'down';
                  }
                } else if (window.pageYOffset < this.instance.scroll.y) {
                  if (this.instance.direction !== 'up') {
                    this.instance.direction = 'up';
                  }
                }
              }
            }, {
              key: "addSpeed",
              value: function addSpeed() {
                if (window.pageYOffset != this.instance.scroll.y) {
                  this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
                } else {
                  this.instance.speed = 0;
                }
              }
            }, {
              key: "resize",
              value: function resize() {
                if (Object.entries(this.els).length) {
                  this.windowHeight = window.innerHeight;
                  this.updateElements();
                }
              }
            }, {
              key: "addElements",
              value: function addElements() {
                var _this3 = this;

                this.els = {};
                var els = this.el.querySelectorAll('[data-' + this.name + ']');
                els.forEach(function (el, index) {
                  var BCR = el.getBoundingClientRect();
                  var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
                  var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
                  var top;
                  var left;
                  var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
                  var repeat = el.dataset[_this3.name + 'Repeat'];
                  var call = el.dataset[_this3.name + 'Call'];
                  var target = el.dataset[_this3.name + 'Target'];
                  var targetEl;

                  if (target !== undefined) {
                    targetEl = document.querySelector("".concat(target));
                  } else {
                    targetEl = el;
                  }

                  var targetElBCR = targetEl.getBoundingClientRect();
                  top = targetElBCR.top + _this3.instance.scroll.y;
                  left = targetElBCR.left + _this3.instance.scroll.x;
                  var bottom = top + targetEl.offsetHeight;
                  var right = left + targetEl.offsetWidth;

                  if (target === '#header') {
                    console.log(top, bottom);
                  }

                  if (repeat == 'false') {
                    repeat = false;
                  } else if (repeat != undefined) {
                    repeat = true;
                  } else {
                    repeat = _this3.repeat;
                  }

                  var relativeOffset = _this3.getRelativeOffset(offset);

                  top = top + relativeOffset[0];
                  bottom = bottom - relativeOffset[1];
                  var mappedEl = {
                    el: el,
                    targetEl: targetEl,
                    id: id,
                    "class": cl,
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    offset: offset,
                    progress: 0,
                    repeat: repeat,
                    inView: false,
                    call: call
                  };
                  _this3.els[id] = mappedEl;

                  if (el.classList.contains(cl)) {
                    _this3.setInView(_this3.els[id], id);
                  }
                });
              }
            }, {
              key: "updateElements",
              value: function updateElements() {
                var _this4 = this;

                Object.entries(this.els).forEach(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    i = _ref2[0],
                    el = _ref2[1];

                  var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

                  var bottom = top + el.targetEl.offsetHeight;

                  var relativeOffset = _this4.getRelativeOffset(el.offset);

                  _this4.els[i].top = top + relativeOffset[0];
                  _this4.els[i].bottom = bottom - relativeOffset[1];
                });
                this.hasScrollTicking = false;
              }
            }, {
              key: "getRelativeOffset",
              value: function getRelativeOffset(offset) {
                var relativeOffset = [0, 0];

                if (offset) {
                  for (var i = 0; i < offset.length; i++) {
                    if (typeof offset[i] == 'string') {
                      if (offset[i].includes('%')) {
                        relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                      } else {
                        relativeOffset[i] = parseInt(offset[i]);
                      }
                    } else {
                      relativeOffset[i] = offset[i];
                    }
                  }
                }

                return relativeOffset;
              }
              /**
               * Scroll to a desired target.
               *
               * @param  Available options :
               *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
               *          options {object} - Options object for additionnal settings.
               * @return {void}
               */

            }, {
              key: "scrollTo",
              value: function scrollTo(target) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

                if (typeof target === 'string') {
                  // Selector or boundaries
                  if (target === 'top') {
                    target = this.html;
                  } else if (target === 'bottom') {
                    target = this.html.offsetHeight - window.innerHeight;
                  } else {
                    target = document.querySelector(target); // If the query fails, abort

                    if (!target) {
                      return;
                    }
                  }
                } else if (typeof target === 'number') {
                  // Absolute coordinate
                  target = parseInt(target);
                } else if (target && target.tagName); else {
                  console.warn('`target` parameter is not valid');
                  return;
                } // We have a target that is not a coordinate yet, get it


                if (typeof target !== 'number') {
                  offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
                } else {
                  offset = target + offset;
                }

                if (callback) {
                  offset = offset.toFixed();

                  var onScroll = function onScroll() {
                    if (window.pageYOffset.toFixed() === offset) {
                      window.removeEventListener('scroll', onScroll);
                      callback();
                    }
                  };

                  window.addEventListener('scroll', onScroll);
                }

                window.scrollTo({
                  top: offset,
                  behavior: 'smooth'
                });
              }
            }, {
              key: "update",
              value: function update() {
                this.addElements();
                this.detectElements();
              }
            }, {
              key: "destroy",
              value: function destroy() {
                _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

                window.removeEventListener('scroll', this.checkScroll, false);
              }
            }]);

            return _default;
          }(_default);

          /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
          /* eslint-disable no-unused-vars */
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;

          function toObject(val) {
            if (val === null || val === undefined) {
              throw new TypeError('Object.assign cannot be called with null or undefined');
            }

            return Object(val);
          }

          function shouldUseNative() {
            try {
              if (!Object.assign) {
                return false;
              }

              // Detect buggy property enumeration order in older V8 versions.

              // https://bugs.chromium.org/p/v8/issues/detail?id=4118
              var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
              test1[5] = 'de';
              if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test2 = {};
              for (var i = 0; i < 10; i++) {
                test2['_' + String.fromCharCode(i)] = i;
              }
              var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                return test2[n];
              });
              if (order2.join('') !== '0123456789') {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test3 = {};
              'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                test3[letter] = letter;
              });
              if (Object.keys(Object.assign({}, test3)).join('') !==
                'abcdefghijklmnopqrst') {
                return false;
              }

              return true;
            } catch (err) {
              // We don't expect any of the above to throw, but better to be safe.
              return false;
            }
          }

          var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
            var from;
            var to = toObject(target);
            var symbols;

            for (var s = 1; s < arguments.length; s++) {
              from = Object(arguments[s]);

              for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                  to[key] = from[key];
                }
              }

              if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) {
                  if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                  }
                }
              }
            }

            return to;
          };

          function E() {
            // Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
          }

          E.prototype = {
            on: function (name, callback, ctx) {
              var e = this.e || (this.e = {});

              (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx: ctx
              });

              return this;
            },

            once: function (name, callback, ctx) {
              var self = this;
              function listener() {
                self.off(name, listener);
                callback.apply(ctx, arguments);
              }
              listener._ = callback;
              return this.on(name, listener, ctx);
            },

            emit: function (name) {
              var data = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;

              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
              }

              return this;
            },

            off: function (name, callback) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];

              if (evts && callback) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                    liveEvents.push(evts[i]);
                }
              }

              // Remove event from queue to prevent memory leak
              // Suggested by https://github.com/lazd
              // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

              (liveEvents.length)
                ? e[name] = liveEvents
                : delete e[name];

              return this;
            }
          };

          var tinyEmitter = E;

          var lethargy = createCommonjsModule(function (module, exports) {
            // Generated by CoffeeScript 1.9.2
            (function () {
              var root;

              root = exports !== null ? exports : this;

              root.Lethargy = (function () {
                function Lethargy(stability, sensitivity, tolerance, delay) {
                  this.stability = stability != null ? Math.abs(stability) : 8;
                  this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
                  this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
                  this.delay = delay != null ? delay : 150;
                  this.lastUpDeltas = (function () {
                    var i, ref, results;
                    results = [];
                    for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                      results.push(null);
                    }
                    return results;
                  }).call(this);
                  this.lastDownDeltas = (function () {
                    var i, ref, results;
                    results = [];
                    for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                      results.push(null);
                    }
                    return results;
                  }).call(this);
                  this.deltasTimestamp = (function () {
                    var i, ref, results;
                    results = [];
                    for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                      results.push(null);
                    }
                    return results;
                  }).call(this);
                }

                Lethargy.prototype.check = function (e) {
                  var lastDelta;
                  e = e.originalEvent || e;
                  if (e.wheelDelta != null) {
                    lastDelta = e.wheelDelta;
                  } else if (e.deltaY != null) {
                    lastDelta = e.deltaY * -40;
                  } else if ((e.detail != null) || e.detail === 0) {
                    lastDelta = e.detail * -40;
                  }
                  this.deltasTimestamp.push(Date.now());
                  this.deltasTimestamp.shift();
                  if (lastDelta > 0) {
                    this.lastUpDeltas.push(lastDelta);
                    this.lastUpDeltas.shift();
                    return this.isInertia(1);
                  } else {
                    this.lastDownDeltas.push(lastDelta);
                    this.lastDownDeltas.shift();
                    return this.isInertia(-1);
                  }
                };

                Lethargy.prototype.isInertia = function (direction) {
                  var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
                  lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
                  if (lastDeltas[0] === null) {
                    return direction;
                  }
                  if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
                    return false;
                  }
                  lastDeltasOld = lastDeltas.slice(0, this.stability);
                  lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
                  oldSum = lastDeltasOld.reduce(function (t, s) {
                    return t + s;
                  });
                  newSum = lastDeltasNew.reduce(function (t, s) {
                    return t + s;
                  });
                  oldAverage = oldSum / lastDeltasOld.length;
                  newAverage = newSum / lastDeltasNew.length;
                  if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
                    return direction;
                  } else {
                    return false;
                  }
                };

                Lethargy.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas;
                };

                Lethargy.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas;
                };

                return Lethargy;

              })();

            }).call(commonjsGlobal);
          });

          var support = (function getSupport() {
            return {
              hasWheelEvent: 'onwheel' in document,
              hasMouseWheelEvent: 'onmousewheel' in document,
              hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
              hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
              hasPointer: !!window.navigator.msPointerEnabled,
              hasKeyDown: 'onkeydown' in document,
              isFirefox: navigator.userAgent.indexOf('Firefox') > -1
            };
          })();

          var toString = Object.prototype.toString,
            hasOwnProperty$1 = Object.prototype.hasOwnProperty;

          var bindallStandalone = function (object) {
            if (!object) return console.warn('bindAll requires at least one argument.');

            var functions = Array.prototype.slice.call(arguments, 1);

            if (functions.length === 0) {

              for (var method in object) {
                if (hasOwnProperty$1.call(object, method)) {
                  if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                  }
                }
              }
            }

            for (var i = 0; i < functions.length; i++) {
              var f = functions[i];
              object[f] = bind(object[f], object);
            }
          };

          /*
              Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
              bindAll is only needed for events binding so no need to make slow fixes for constructor
              or partial application.
          */
          function bind(func, context) {
            return function () {
              return func.apply(context, arguments);
            };
          }

          var Lethargy = lethargy.Lethargy;



          var EVT_ID = 'virtualscroll';

          var src = VirtualScroll;

          var keyCodes = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32
          };

          function VirtualScroll(options) {
            bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

            this.el = window;
            if (options && options.el) {
              this.el = options.el;
              delete options.el;
            }
            this.options = objectAssign({
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: false,
              unpreventTouchClass: 'vs-touchmove-allowed',
              limitInertia: false,
              useKeyboard: true,
              useTouch: true
            }, options);

            if (this.options.limitInertia) this._lethargy = new Lethargy();

            this._emitter = new tinyEmitter();
            this._event = {
              y: 0,
              x: 0,
              deltaX: 0,
              deltaY: 0
            };
            this.touchStartX = null;
            this.touchStartY = null;
            this.bodyTouchAction = null;

            if (this.options.passive !== undefined) {
              this.listenerOptions = { passive: this.options.passive };
            }
          }

          VirtualScroll.prototype._notify = function (e) {
            var evt = this._event;
            evt.x += evt.deltaX;
            evt.y += evt.deltaY;

            this._emitter.emit(EVT_ID, {
              x: evt.x,
              y: evt.y,
              deltaX: evt.deltaX,
              deltaY: evt.deltaY,
              originalEvent: e
            });
          };

          VirtualScroll.prototype._onWheel = function (e) {
            var options = this.options;
            if (this._lethargy && this._lethargy.check(e) === false) return;
            var evt = this._event;

            // In Chrome and in Firefox (at least the new one)
            evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
            evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

            // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
            // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
            if (support.isFirefox && e.deltaMode == 1) {
              evt.deltaX *= options.firefoxMultiplier;
              evt.deltaY *= options.firefoxMultiplier;
            }

            evt.deltaX *= options.mouseMultiplier;
            evt.deltaY *= options.mouseMultiplier;

            this._notify(e);
          };

          VirtualScroll.prototype._onMouseWheel = function (e) {
            if (this.options.limitInertia && this._lethargy.check(e) === false) return;

            var evt = this._event;

            // In Safari, IE and in Chrome if 'wheel' isn't defined
            evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
            evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

            this._notify(e);
          };

          VirtualScroll.prototype._onTouchStart = function (e) {
            var t = (e.targetTouches) ? e.targetTouches[0] : e;
            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;
          };

          VirtualScroll.prototype._onTouchMove = function (e) {
            var options = this.options;
            if (options.preventTouch
              && !e.target.classList.contains(options.unpreventTouchClass)) {
              e.preventDefault();
            }

            var evt = this._event;

            var t = (e.targetTouches) ? e.targetTouches[0] : e;

            evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
            evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;

            this._notify(e);
          };

          VirtualScroll.prototype._onKeyDown = function (e) {
            var evt = this._event;
            evt.deltaX = evt.deltaY = 0;
            var windowHeight = window.innerHeight - 40;

            switch (e.keyCode) {
              case keyCodes.LEFT:
              case keyCodes.UP:
                evt.deltaY = this.options.keyStep;
                break;

              case keyCodes.RIGHT:
              case keyCodes.DOWN:
                evt.deltaY = - this.options.keyStep;
                break;
              case e.shiftKey:
                evt.deltaY = windowHeight;
                break;
              case keyCodes.SPACE:
                evt.deltaY = - windowHeight;
                break;
              default:
                return;
            }

            this._notify(e);
          };

          VirtualScroll.prototype._bind = function () {
            if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
            if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

            if (support.hasTouch && this.options.useTouch) {
              this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
              this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
            }

            if (support.hasPointer && support.hasTouchWin) {
              this.bodyTouchAction = document.body.style.msTouchAction;
              document.body.style.msTouchAction = 'none';
              this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
              this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
            }

            if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
          };

          VirtualScroll.prototype._unbind = function () {
            if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
            if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

            if (support.hasTouch) {
              this.el.removeEventListener('touchstart', this._onTouchStart);
              this.el.removeEventListener('touchmove', this._onTouchMove);
            }

            if (support.hasPointer && support.hasTouchWin) {
              document.body.style.msTouchAction = this.bodyTouchAction;
              this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
              this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
            }

            if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
          };

          VirtualScroll.prototype.on = function (cb, ctx) {
            this._emitter.on(EVT_ID, cb, ctx);

            var events = this._emitter.e;
            if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
          };

          VirtualScroll.prototype.off = function (cb, ctx) {
            this._emitter.off(EVT_ID, cb, ctx);

            var events = this._emitter.e;
            if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
          };

          VirtualScroll.prototype.reset = function () {
            var evt = this._event;
            evt.x = 0;
            evt.y = 0;
          };

          VirtualScroll.prototype.destroy = function () {
            this._emitter.off();
            this._unbind();
          };

          function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end;
          }

          function getTranslate(el) {
            var translate = {};
            if (!window.getComputedStyle) return;
            var style = getComputedStyle(el);
            var transform = style.transform || style.webkitTransform || style.mozTransform;
            var mat = transform.match(/^matrix3d\((.+)\)$/);

            if (mat) {
              translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
              translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
            } else {
              mat = transform.match(/^matrix\((.+)\)$/);
              translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
              translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
            }

            return translate;
          }

          /**
           * Returns an array containing all the parent nodes of the given node
           * @param  {object} node
           * @return {array} parent nodes
           */
          function getParents(elem) {
            // Set up a parent array
            var parents = []; // Push each parent element to the array

            for (; elem && elem !== document; elem = elem.parentNode) {
              parents.push(elem);
            } // Return our parent array


            return parents;
          } // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

          /**
           * https://github.com/gre/bezier-easing
           * BezierEasing - use bezier curve for transition easing function
           * by Gaëtan Renaudeau 2014 - 2015 – MIT License
           */

          // These values are established by empiricism with tests (tradeoff: performance VS precision)
          var NEWTON_ITERATIONS = 4;
          var NEWTON_MIN_SLOPE = 0.001;
          var SUBDIVISION_PRECISION = 0.0000001;
          var SUBDIVISION_MAX_ITERATIONS = 10;

          var kSplineTableSize = 11;
          var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

          var float32ArraySupported = typeof Float32Array === 'function';

          function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
          function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
          function C(aA1) { return 3.0 * aA1; }

          // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
          function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

          // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
          function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

          function binarySubdivide(aX, aA, aB, mX1, mX2) {
            var currentX, currentT, i = 0;
            do {
              currentT = aA + (aB - aA) / 2.0;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0.0) {
                aB = currentT;
              } else {
                aA = currentT;
              }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT;
          }

          function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
              var currentSlope = getSlope(aGuessT, mX1, mX2);
              if (currentSlope === 0.0) {
                return aGuessT;
              }
              var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
          }

          function LinearEasing(x) {
            return x;
          }

          var src$1 = function bezier(mX1, mY1, mX2, mY2) {
            if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
              throw new Error('bezier x values must be in [0, 1] range');
            }

            if (mX1 === mY1 && mX2 === mY2) {
              return LinearEasing;
            }

            // Precompute samples table
            var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }

            function getTForX(aX) {
              var intervalStart = 0.0;
              var currentSample = 1;
              var lastSample = kSplineTableSize - 1;

              for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
              }
              --currentSample;

              // Interpolate to provide an initial guess for t
              var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
              var guessForT = intervalStart + dist * kSampleStepSize;

              var initialSlope = getSlope(guessForT, mX1, mX2);
              if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
              } else if (initialSlope === 0.0) {
                return guessForT;
              } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
              }
            }

            return function BezierEasing(x) {
              // Because JavaScript number are imprecise, we should guarantee the extremes are right.
              if (x === 0) {
                return 0;
              }
              if (x === 1) {
                return 1;
              }
              return calcBezier(getTForX(x), mY1, mY2);
            };
          };

          var keyCodes$1 = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32,
            TAB: 9,
            PAGEUP: 33,
            PAGEDOWN: 34,
            HOME: 36,
            END: 35
          };

          var _default$2 = /*#__PURE__*/function (_Core) {
            _inherits(_default, _Core);

            var _super = _createSuper(_default);

            function _default() {
              var _this;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, _default);

              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }

              window.scrollTo(0, 0);
              _this = _super.call(this, options);
              if (_this.inertia) _this.lerp = _this.inertia * 0.1;
              _this.isScrolling = false;
              _this.isDraggingScrollbar = false;
              _this.isTicking = false;
              _this.hasScrollTicking = false;
              _this.parallaxElements = {};
              _this.stop = false;
              _this.scrollbarContainer = options.scrollbarContainer;
              _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
              window.addEventListener('keydown', _this.checkKey, false);
              return _this;
            }

            _createClass(_default, [{
              key: "init",
              value: function init() {
                var _this2 = this;

                this.html.classList.add(this.smoothClass);
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
                this.instance = _objectSpread2({
                  delta: {
                    x: 0,
                    y: 0
                  }
                }, this.instance);
                this.vs = new src({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: false,
                  passive: true
                });
                this.vs.on(function (e) {
                  if (_this2.stop) {
                    return;
                  }

                  if (!_this2.isDraggingScrollbar) {
                    requestAnimationFrame(function () {
                      _this2.updateDelta(e);

                      if (!_this2.isScrolling) _this2.startScrolling();
                    });
                  }
                });
                this.setScrollLimit();
                this.initScrollBar();
                this.addSections();
                this.addElements();
                this.checkScroll(true);
                this.transformElements(true, true);

                _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
              }
            }, {
              key: "setScrollLimit",
              value: function setScrollLimit() {
                this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

                if (this.direction === 'horizontal') {
                  var totalWidth = 0;
                  var nodes = this.el.children;

                  for (var i = 0; i < nodes.length; i++) {
                    totalWidth += nodes[i].offsetWidth;
                  }

                  this.instance.limit.x = totalWidth - this.windowWidth;
                }
              }
            }, {
              key: "startScrolling",
              value: function startScrolling() {
                this.startScrollTs = Date.now(); // Record timestamp

                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
              }
            }, {
              key: "stopScrolling",
              value: function stopScrolling() {
                cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping

                if (this.scrollToRaf) {
                  cancelAnimationFrame(this.scrollToRaf);
                  this.scrollToRaf = null;
                }

                this.isScrolling = false;
                this.instance.scroll.y = Math.round(this.instance.scroll.y);
                this.html.classList.remove(this.scrollingClass);
              }
            }, {
              key: "checkKey",
              value: function checkKey(e) {
                var _this3 = this;

                if (this.stop) {
                  // If we are stopped, we don't want any scroll to occur because of a keypress
                  // Prevent tab to scroll to activeElement
                  if (e.keyCode == keyCodes$1.TAB) {
                    requestAnimationFrame(function () {
                      // Make sure native scroll is always at top of page
                      _this3.html.scrollTop = 0;
                      document.body.scrollTop = 0;
                      _this3.html.scrollLeft = 0;
                      document.body.scrollLeft = 0;
                    });
                  }

                  return;
                }

                switch (e.keyCode) {
                  case keyCodes$1.TAB:
                    // Do not remove the RAF
                    // It allows to override the browser's native scrollTo, which is essential
                    requestAnimationFrame(function () {
                      // Make sure native scroll is always at top of page
                      _this3.html.scrollTop = 0;
                      document.body.scrollTop = 0;
                      _this3.html.scrollLeft = 0;
                      document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

                      _this3.scrollTo(document.activeElement, {
                        offset: -window.innerHeight / 2
                      });
                    });
                    break;

                  case keyCodes$1.UP:
                    this.instance.delta[this.directionAxis] -= 240;
                    break;

                  case keyCodes$1.DOWN:
                    this.instance.delta[this.directionAxis] += 240;
                    break;

                  case keyCodes$1.PAGEUP:
                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                    break;

                  case keyCodes$1.PAGEDOWN:
                    this.instance.delta[this.directionAxis] += window.innerHeight;
                    break;

                  case keyCodes$1.HOME:
                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                    break;

                  case keyCodes$1.END:
                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                    break;

                  case keyCodes$1.SPACE:
                    if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
                      if (e.shiftKey) {
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                      } else {
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                      }
                    }

                    break;

                  default:
                    return;
                }

                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
              }
            }, {
              key: "checkScroll",
              value: function checkScroll() {
                var _this4 = this;

                var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (forced || this.isScrolling || this.isDraggingScrollbar) {
                  if (!this.hasScrollTicking) {
                    this.checkScrollRaf = requestAnimationFrame(function () {
                      return _this4.checkScroll();
                    });
                    this.hasScrollTicking = true;
                  }

                  this.updateScroll();
                  var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
                  var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

                  if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
                    this.stopScrolling();
                  }

                  Object.entries(this.sections).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                      i = _ref2[0],
                      section = _ref2[1];

                    if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
                      if (_this4.direction === 'horizontal') {
                        _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
                      } else {
                        _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
                      }

                      if (!section.inView) {
                        section.inView = true;
                        section.el.style.opacity = 1;
                        section.el.style.pointerEvents = 'all';
                        section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
                      }
                    } else {
                      if (section.inView) {
                        section.inView = false;
                        section.el.style.opacity = 0;
                        section.el.style.pointerEvents = 'none';
                        section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
                      }

                      _this4.transform(section.el, 0, 0);
                    }
                  });

                  if (this.getDirection) {
                    this.addDirection();
                  }

                  if (this.getSpeed) {
                    this.addSpeed();
                    this.speedTs = Date.now();
                  }

                  this.detectElements();
                  this.transformElements();

                  if (this.hasScrollbar) {
                    var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

                    if (this.direction === 'horizontal') {
                      this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                    } else {
                      this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
                    }
                  }

                  _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

                  this.hasScrollTicking = false;
                }
              }
            }, {
              key: "resize",
              value: function resize() {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
                this.checkContext();
                this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2
                };
                this.update();
              }
            }, {
              key: "updateDelta",
              value: function updateDelta(e) {
                var delta;
                var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

                if (gestureDirection === 'both') {
                  delta = e.deltaX + e.deltaY;
                } else if (gestureDirection === 'vertical') {
                  delta = e.deltaY;
                } else if (gestureDirection === 'horizontal') {
                  delta = e.deltaX;
                } else {
                  delta = e.deltaY;
                }

                this.instance.delta[this.directionAxis] -= delta * this.multiplier;
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
              }
            }, {
              key: "updateScroll",
              value: function updateScroll(e) {
                if (this.isScrolling || this.isDraggingScrollbar) {
                  this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
                } else {
                  if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
                    this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
                  } else if (this.instance.scroll.y < 0) {
                    this.setScroll(this.instance.scroll[this.directionAxis], 0);
                  } else {
                    this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                  }
                }
              }
            }, {
              key: "addDirection",
              value: function addDirection() {
                if (this.instance.delta.y > this.instance.scroll.y) {
                  if (this.instance.direction !== 'down') {
                    this.instance.direction = 'down';
                  }
                } else if (this.instance.delta.y < this.instance.scroll.y) {
                  if (this.instance.direction !== 'up') {
                    this.instance.direction = 'up';
                  }
                }

                if (this.instance.delta.x > this.instance.scroll.x) {
                  if (this.instance.direction !== 'right') {
                    this.instance.direction = 'right';
                  }
                } else if (this.instance.delta.x < this.instance.scroll.x) {
                  if (this.instance.direction !== 'left') {
                    this.instance.direction = 'left';
                  }
                }
              }
            }, {
              key: "addSpeed",
              value: function addSpeed() {
                if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
                  this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
                } else {
                  this.instance.speed = 0;
                }
              }
            }, {
              key: "initScrollBar",
              value: function initScrollBar() {
                this.scrollbar = document.createElement('span');
                this.scrollbarThumb = document.createElement('span');
                this.scrollbar.classList.add("".concat(this.scrollbarClass));
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
                this.scrollbar.append(this.scrollbarThumb);

                if (this.scrollbarContainer) {
                  this.scrollbarContainer.append(this.scrollbar);
                } else {
                  document.body.append(this.scrollbar);
                } // Scrollbar Events


                this.getScrollBar = this.getScrollBar.bind(this);
                this.releaseScrollBar = this.releaseScrollBar.bind(this);
                this.moveScrollBar = this.moveScrollBar.bind(this);
                this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
                window.addEventListener('mouseup', this.releaseScrollBar);
                window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

                this.hasScrollbar = false;

                if (this.direction == 'horizontal') {
                  if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
                    return;
                  }
                } else {
                  if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
                    return;
                  }
                }

                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;

                if (this.direction === 'horizontal') {
                  this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                } else {
                  this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                }

                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
              }
            }, {
              key: "reinitScrollBar",
              value: function reinitScrollBar() {
                this.hasScrollbar = false;

                if (this.direction == 'horizontal') {
                  if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
                    return;
                  }
                } else {
                  if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
                    return;
                  }
                }

                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;

                if (this.direction === 'horizontal') {
                  this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                } else {
                  this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                }

                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
              }
            }, {
              key: "destroyScrollBar",
              value: function destroyScrollBar() {
                this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
                window.removeEventListener('mouseup', this.releaseScrollBar);
                window.removeEventListener('mousemove', this.moveScrollBar);
                this.scrollbar.remove();
              }
            }, {
              key: "getScrollBar",
              value: function getScrollBar(e) {
                this.isDraggingScrollbar = true;
                this.checkScroll();
                this.html.classList.remove(this.scrollingClass);
                this.html.classList.add(this.draggingClass);
              }
            }, {
              key: "releaseScrollBar",
              value: function releaseScrollBar(e) {
                this.isDraggingScrollbar = false;
                this.html.classList.add(this.scrollingClass);
                this.html.classList.remove(this.draggingClass);
              }
            }, {
              key: "moveScrollBar",
              value: function moveScrollBar(e) {
                var _this5 = this;

                if (this.isDraggingScrollbar) {
                  requestAnimationFrame(function () {
                    var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
                    var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

                    if (y > 0 && y < _this5.instance.limit.y) {
                      _this5.instance.delta.y = y;
                    }

                    if (x > 0 && x < _this5.instance.limit.x) {
                      _this5.instance.delta.x = x;
                    }
                  });
                }
              }
            }, {
              key: "addElements",
              value: function addElements() {
                var _this6 = this;

                this.els = {};
                this.parallaxElements = {}; // this.sections.forEach((section, y) => {

                var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
                els.forEach(function (el, index) {
                  // Try and find the target's parent section
                  var targetParents = getParents(el);
                  var section = Object.entries(_this6.sections).map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                      key = _ref4[0],
                      section = _ref4[1];

                    return section;
                  }).find(function (section) {
                    return targetParents.includes(section.el);
                  });
                  var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
                  var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
                  var top;
                  var left;
                  var repeat = el.dataset[_this6.name + 'Repeat'];
                  var call = el.dataset[_this6.name + 'Call'];
                  var position = el.dataset[_this6.name + 'Position'];
                  var delay = el.dataset[_this6.name + 'Delay'];
                  var direction = el.dataset[_this6.name + 'Direction'];
                  var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
                  var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
                  var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
                  var target = el.dataset[_this6.name + 'Target'];
                  var targetEl;

                  if (target !== undefined) {
                    targetEl = document.querySelector("".concat(target));
                  } else {
                    targetEl = el;
                  }

                  var targetElBCR = targetEl.getBoundingClientRect();

                  if (section === null) {
                    top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                    left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                  } else {
                    if (!section.inView) {
                      top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
                      left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
                    } else {
                      top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                      left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    }
                  }

                  var bottom = top + targetEl.offsetHeight;
                  var right = left + targetEl.offsetWidth;
                  var middle = {
                    x: (right - left) / 2 + left,
                    y: (bottom - top) / 2 + top
                  };

                  if (sticky) {
                    var elBCR = el.getBoundingClientRect();
                    var elTop = elBCR.top;
                    var elLeft = elBCR.left;
                    var elDistance = {
                      x: elLeft - left,
                      y: elTop - top
                    };
                    top += window.innerHeight;
                    left += window.innerWidth;
                    bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
                    right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
                    middle = {
                      x: (right - left) / 2 + left,
                      y: (bottom - top) / 2 + top
                    };
                  }

                  if (repeat == 'false') {
                    repeat = false;
                  } else if (repeat != undefined) {
                    repeat = true;
                  } else {
                    repeat = _this6.repeat;
                  }

                  var relativeOffset = [0, 0];

                  if (offset) {
                    if (_this6.direction === 'horizontal') {
                      for (var i = 0; i < offset.length; i++) {
                        if (typeof offset[i] == 'string') {
                          if (offset[i].includes('%')) {
                            relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                          } else {
                            relativeOffset[i] = parseInt(offset[i]);
                          }
                        } else {
                          relativeOffset[i] = offset[i];
                        }
                      }

                      left = left + relativeOffset[0];
                      right = right - relativeOffset[1];
                    } else {
                      for (var i = 0; i < offset.length; i++) {
                        if (typeof offset[i] == 'string') {
                          if (offset[i].includes('%')) {
                            relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                          } else {
                            relativeOffset[i] = parseInt(offset[i]);
                          }
                        } else {
                          relativeOffset[i] = offset[i];
                        }
                      }

                      top = top + relativeOffset[0];
                      bottom = bottom - relativeOffset[1];
                    }
                  }

                  var mappedEl = {
                    el: el,
                    id: id,
                    "class": cl,
                    section: section,
                    top: top,
                    middle: middle,
                    bottom: bottom,
                    left: left,
                    right: right,
                    offset: offset,
                    progress: 0,
                    repeat: repeat,
                    inView: false,
                    call: call,
                    speed: speed,
                    delay: delay,
                    position: position,
                    target: targetEl,
                    direction: direction,
                    sticky: sticky
                  };
                  _this6.els[id] = mappedEl;

                  if (el.classList.contains(cl)) {
                    _this6.setInView(_this6.els[id], id);
                  }

                  if (speed !== false || sticky) {
                    _this6.parallaxElements[id] = mappedEl;
                  }
                }); // });
              }
            }, {
              key: "addSections",
              value: function addSections() {
                var _this7 = this;

                this.sections = {};
                var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

                if (sections.length === 0) {
                  sections = [this.el];
                }

                sections.forEach(function (section, index) {
                  var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
                  var sectionBCR = section.getBoundingClientRect();
                  var offset = {
                    x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
                    y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
                  };
                  var limit = {
                    x: offset.x + sectionBCR.width + window.innerWidth * 2,
                    y: offset.y + sectionBCR.height + window.innerHeight * 2
                  };
                  var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
                  section.setAttribute('data-scroll-section-id', id);
                  var mappedSection = {
                    el: section,
                    offset: offset,
                    limit: limit,
                    inView: false,
                    persistent: persistent,
                    id: id
                  };
                  _this7.sections[id] = mappedSection;
                });
              }
            }, {
              key: "transform",
              value: function transform(element, x, y, delay) {
                var transform;

                if (!delay) {
                  transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
                } else {
                  var start = getTranslate(element);
                  var lerpX = lerp(start.x, x, delay);
                  var lerpY = lerp(start.y, y, delay);
                  transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
                }

                element.style.webkitTransform = transform;
                element.style.msTransform = transform;
                element.style.transform = transform;
              }
            }, {
              key: "transformElements",
              value: function transformElements(isForced) {
                var _this8 = this;

                var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var scrollRight = this.instance.scroll.x + this.windowWidth;
                var scrollBottom = this.instance.scroll.y + this.windowHeight;
                var scrollMiddle = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach(function (_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 2),
                    i = _ref6[0],
                    current = _ref6[1];

                  var transformDistance = false;

                  if (isForced) {
                    transformDistance = 0;
                  }

                  if (current.inView || setAllElements) {
                    switch (current.position) {
                      case 'top':
                        transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                        break;

                      case 'elementTop':
                        transformDistance = (scrollBottom - current.top) * -current.speed;
                        break;

                      case 'bottom':
                        transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                        break;

                      case 'left':
                        transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                        break;

                      case 'elementLeft':
                        transformDistance = (scrollRight - current.left) * -current.speed;
                        break;

                      case 'right':
                        transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                        break;

                      default:
                        transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                        break;
                    }
                  }

                  if (current.sticky) {
                    if (current.inView) {
                      if (_this8.direction === 'horizontal') {
                        transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
                      } else {
                        transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
                      }
                    } else {
                      if (_this8.direction === 'horizontal') {
                        if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                          transformDistance = 0;
                        } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                          transformDistance = current.right - current.left + window.innerWidth;
                        } else {
                          transformDistance = false;
                        }
                      } else {
                        if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                          transformDistance = 0;
                        } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                          transformDistance = current.bottom - current.top + window.innerHeight;
                        } else {
                          transformDistance = false;
                        }
                      }
                    }
                  }

                  if (transformDistance !== false) {
                    if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
                      _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
                    } else {
                      _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
                    }
                  }
                });
              }
              /**
               * Scroll to a desired target.
               *
               * @param  Available options :
               *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
               *          options {object} - Options object for additionnal settings.
               * @return {void}
               */

            }, {
              key: "scrollTo",
              value: function scrollTo(target) {
                var _this9 = this;

                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

                var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds

                var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

                var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

                easing = src$1.apply(void 0, _toConsumableArray(easing));

                if (typeof target === 'string') {
                  // Selector or boundaries
                  if (target === 'top') {
                    target = 0;
                  } else if (target === 'bottom') {
                    target = this.instance.limit.y;
                  } else if (target === 'left') {
                    target = 0;
                  } else if (target === 'right') {
                    target = this.instance.limit.x;
                  } else {
                    target = document.querySelector(target); // If the query fails, abort

                    if (!target) {
                      return;
                    }
                  }
                } else if (typeof target === 'number') {
                  // Absolute coordinate
                  target = parseInt(target);
                } else if (target && target.tagName); else {
                  console.warn('`target` parameter is not valid');
                  return;
                } // We have a target that is not a coordinate yet, get it


                if (typeof target !== 'number') {
                  // Verify the given target belongs to this scroll scope
                  var targetInScope = getParents(target).includes(this.el);

                  if (!targetInScope) {
                    // If the target isn't inside our main element, abort any action
                    return;
                  } // Get target offset from top


                  var targetBCR = target.getBoundingClientRect();
                  var offsetTop = targetBCR.top;
                  var offsetLeft = targetBCR.left; // Try and find the target's parent section

                  var targetParents = getParents(target);
                  var parentSection = targetParents.find(function (candidate) {
                    return Object.entries(_this9.sections) // Get sections associative array as a regular array
                      .map(function (_ref7) {
                        var _ref8 = _slicedToArray(_ref7, 2),
                          key = _ref8[0],
                          section = _ref8[1];

                        return section;
                      }) // map to section only (we dont need the key here)
                      .find(function (section) {
                        return section.el == candidate;
                      }); // finally find the section that matches the candidate
                  });
                  var parentSectionOffset = 0;

                  if (parentSection) {
                    parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
                  } else {
                    // if no parent section is found we need to use instance scroll directly
                    parentSectionOffset = -this.instance.scroll[this.directionAxis];
                  } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


                  if (this.direction === 'horizontal') {
                    offset = offsetLeft + offset - parentSectionOffset;
                  } else {
                    offset = offsetTop + offset - parentSectionOffset;
                  }
                } else {
                  offset = target + offset;
                } // Actual scrollto
                // ==========================================================================
                // Setup


                var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
                var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

                var scrollDiff = scrollTarget - scrollStart;

                var render = function render(p) {
                  if (disableLerp) {
                    if (_this9.direction === 'horizontal') {
                      _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
                    } else {
                      _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
                    }
                  } else {
                    _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
                  }
                }; // Prepare the scroll


                this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

                this.startScrolling(); // Restart the scroll
                // Start the animation loop

                var start = Date.now();

                var loop = function loop() {
                  var p = (Date.now() - start) / duration; // Animation progress

                  if (p > 1) {
                    // Animation ends
                    render(1);
                    _this9.animatingScroll = false;
                    if (duration == 0) _this9.update();
                    if (callback) callback();
                  } else {
                    _this9.scrollToRaf = requestAnimationFrame(loop);
                    render(easing(p));
                  }
                };

                loop();
              }
            }, {
              key: "update",
              value: function update() {
                this.setScrollLimit();
                this.addSections();
                this.addElements();
                this.detectElements();
                this.updateScroll();
                this.transformElements(true);
                this.reinitScrollBar();
                this.checkScroll(true);
              }
            }, {
              key: "startScroll",
              value: function startScroll() {
                this.stop = false;
              }
            }, {
              key: "stopScroll",
              value: function stopScroll() {
                this.stop = true;
              }
            }, {
              key: "setScroll",
              value: function setScroll(x, y) {
                this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
                  scroll: {
                    x: x,
                    y: y
                  },
                  delta: {
                    x: x,
                    y: y
                  },
                  speed: 0
                });
              }
            }, {
              key: "destroy",
              value: function destroy() {
                _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

                this.stopScrolling();
                this.html.classList.remove(this.smoothClass);
                this.vs.destroy();
                this.destroyScrollBar();
                window.removeEventListener('keydown', this.checkKey, false);
              }
            }]);

            return _default;
          }(_default);

          var Smooth = /*#__PURE__*/function () {
            function Smooth() {
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, Smooth);

              this.options = options; // Override default options with given ones

              Object.assign(this, defaults, options);
              this.smartphone = defaults.smartphone;
              if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
              this.tablet = defaults.tablet;
              if (options.tablet) Object.assign(this.tablet, options.tablet);
              if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
              if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
              if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
              this.init();
            }

            _createClass(Smooth, [{
              key: "init",
              value: function init() {
                this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

                if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
                  this.scroll = new _default$2(this.options);
                } else {
                  this.scroll = new _default$1(this.options);
                }

                this.scroll.init();

                if (window.location.hash) {
                  // Get the hash without the '#' and find the matching element
                  var id = window.location.hash.slice(1, window.location.hash.length);
                  var target = document.getElementById(id); // If found, scroll to the element

                  if (target) this.scroll.scrollTo(target);
                }
              }
            }, {
              key: "update",
              value: function update() {
                this.scroll.update();
              }
            }, {
              key: "start",
              value: function start() {
                this.scroll.startScroll();
              }
            }, {
              key: "stop",
              value: function stop() {
                this.scroll.stopScroll();
              }
            }, {
              key: "scrollTo",
              value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
              }
            }, {
              key: "setScroll",
              value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
              }
            }, {
              key: "on",
              value: function on(event, func) {
                this.scroll.setEvents(event, func);
              }
            }, {
              key: "off",
              value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.scroll.destroy();
              }
            }]);

            return Smooth;
          }();

          return Smooth;

        })));

      }).call(this)
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {}]
}, {}, [13]);
