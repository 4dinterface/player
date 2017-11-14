/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO найти решение, неотрабатываютэвенты при ожижании HLS на IOS
var DisconectDetector = function () {
    function DisconectDetector(video, time) {
        _classCallCheck(this, DisconectDetector);

        //console.log("init detector");
        this.onTimeout = this.onTimeout.bind(this);
        this.updateTime = this.updateTime.bind(this);

        this.time = time || 6000;

        this.video = video;
    }

    _createClass(DisconectDetector, [{
        key: "startWatch",
        value: function startWatch() {
            //alert("startswitch");
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(this.onTimeout, this.time);
            if (this.video) {
                this.video.addEventListener("timeupdate", this.updateTime);
            }
        }
    }, {
        key: "stopWatch",
        value: function stopWatch() {
            //alert("startswitch");
            if (this.timeout) clearTimeout(this.timeout);

            if (this.video) {
                this.video.removeEventListener("timeupdate", this.updateTime);
            }
        }

        /*progress(){
            console.log("progress");
        }*/

    }, {
        key: "updateTime",
        value: function updateTime(e) {
            console.log("time update " + this.debugPrefix);
            if (this.timeStamp !== this.video.currentTime) {
                //console.log("updateTime 2=", this.timeStamp );
                if (this.timeout) clearTimeout(this.timeout);

                this.timeout = setTimeout(this.onTimeout, 6000);
                //alert([this.timeStamp, this.video.currentTime]);
            }
            this.timeStamp = this.video.currentTime;
        }
    }, {
        key: "onTimeout",
        value: function onTimeout() {
            //alert(["onTimeout", this.onDisconnect]);
            if (this.onDisconnect) {
                //alert("call disconect");
                this.onDisconnect();
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.video.removeEventListener("timeupdate", this.updateTime);
            //alert("destroy");
            clearTimeout(this.timeout);
            this.video.removeEventListener("playing", this.onPlaying);
            this.video.removeEventListener("pause", this.onPause);
        }

        /*onPlaying (e) {
            document.body.style.background = "green";
            clearTimeout( this.timeout );
            console.log("onplaying");
        }
          onWaiting(e){
            clearTimeout( this.timeout ); 
            this.timeout = setTimeout(this.onTimeout, 3000);
            //console.log("onwaiting");        
        }
          onPause(e){
            clearTimeout( this.timeout );
            console.log("onpause");         
        }*/

    }]);

    return DisconectDetector;
}();

exports.default = DisconectDetector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
// перетаскивание плеера 

//import FlashPhonerPlayer from  "./players/flashPhoner/FlashPhoner.js";


var _support = __webpack_require__(2);

var _support2 = _interopRequireDefault(_support);

var _Draggable = __webpack_require__(3);

var _Draggable2 = _interopRequireDefault(_Draggable);

__webpack_require__(4);

var _HLSPlayer = __webpack_require__(5);

var _HLSPlayer2 = _interopRequireDefault(_HLSPlayer);

var _SLDPPlayer = __webpack_require__(7);

var _SLDPPlayer2 = _interopRequireDefault(_SLDPPlayer);

var _NativePlayer = __webpack_require__(9);

var _NativePlayer2 = _interopRequireDefault(_NativePlayer);

var _FlashPhoner = __webpack_require__(10);

var _FlashPhoner2 = _interopRequireDefault(_FlashPhoner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//alert("hello world 2");

var WhenspeakStreamer = function () {
    function WhenspeakStreamer(params) {
        _classCallCheck(this, WhenspeakStreamer);

        var width = screen.width,
            // ширина  
        height = screen.height; // высота

        //alert([width, height]);
        //========================================//

        params = params || {};
        this.params = params;

        this.wrapper = document.createElement("div");
        this.wrapper.id = "sldp_player_wrapper";
        this.wrapper.style.width = params.width || "400px";
        this.wrapper.style.height = params.height || "270px";
        this.wrapper.style.background = "black";
        this.wrapper.style.position = "fixed";
        this.wrapper.style.display = "none";
        this.wrapper.style.right = "0px";
        this.wrapper.style.bottom = "0px";
        this.wrapper.style.userSelect = "none";

        this.preloader = document.createElement("div");
        this.preloader.style.position = "absolute";
        this.preloader.style.width = this.wrapper.style.width;
        this.preloader.style.height = this.wrapper.style.height;
        this.preloader.style.left = "0px";
        this.preloader.style.top = "0px";
        this.preloader.style.left = "0px";
        this.preloader.style.background = "black";

        var image = document.createElement("img");
        image.src = "/images/ajax-loader.svg";
        image.style.paddingLeft = "50%";
        image.style.marginLeft = "-50px";
        image.style.paddingTop = "50%";
        image.style.marginTop = "-100px";
        image.style.zIndex = "9999";

        this.preloader.appendChild(image);
        this.wrapper.appendChild(this.preloader);
        document.body.appendChild(this.wrapper);

        //протоколы
        var v = _support2.default.is_safari ? _support2.default.getSafaryVersion().split(".")[0] : null;
        this.sources = params.sources;
        this.protocols = _support2.default.is_safari && (_support2.default.iosX || Number(v) < 9) ? params.srcProtocolsOldSafary : params.srcProtocols;
        this.protocolIndex = 0;
        this.resetIndex();

        //is play
        this.isPlay = false;

        //супервизор
        this.onCanPlay = this.onCanPlay.bind(this);
        this.supervizor = this.supervizor.bind(this);
        this.supervizor(); //запускаем супервизор

        //перетаскивание окна
        this.dragManager = new _Draggable2.default(this.wrapper); //TODO draggable нельзя обьявлять здесь 

        //var fp =new FlashPhonerPlayer();
        //console.log(fp);
        //=====================================================================================
    }

    _createClass(WhenspeakStreamer, [{
        key: "init",
        value: function init(roomId) {
            //alert("init " + roomId);
            this.isPlay = true;
            this.wrapper.style.display = "none";
            //if(this.currentRoom !==  roomId){
            //this.protocolCount =0;
            this.protocolIndex = 0;
            this.resetIndex();
            console.log("!!!!! ВНИМАНИЕ Я СБРОСИЛ ДИГРАДАЦИИ !!!!");
            this.currentRoom = roomId;

            if (this.instance) this.destroyPlayer();
            this.instance = this.createPlayer(roomId);
            //}
        }

        /*stop(){
            console.log("playstop");
            this.isPlay = false;        
            this.wrapper.style.display = "none";
            this.destroyPlayer();
            this.instance = null;
            this.currentRoom = null;   
        }*/

    }, {
        key: "play",
        value: function play() {
            //console.log("index-play");
            this.wrapper.style.display = "block";
            if (!this.instance.isPlay) this.instance.play();
        }
    }, {
        key: "stop",
        value: function stop() {
            //console.log("index-stop");
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>> STOP = ", this.instance.isPlay);
            this.wrapper.style.display = "none";
            if (this.instance.isPlay) this.instance.pause();
        }
    }, {
        key: "playstop",
        value: function playstop(roomId) {
            if (!this.instance) {
                console.error("no player intance");
                return;
            }
            if (this.instance.isPlay) this.stop();else this.play(roomId);
        }

        //======================================= low level ========================================//

        // hls - врубает hls плеер (в зависимости от устройства нативный или на JS EMS)
        // ws - врубает плеер на веб сокетах

    }, {
        key: "createPlayer",
        value: function createPlayer(room) {
            var protocol = this.protocols[this.protocolIndex].split(":"),
                instance,
                params = this.params;

            if (!this.troubleTimeout) {
                this.troubleTimeout = setTimeout(function () {
                    /*if(params.onTrouble)
                        params.onTrouble()*/
                }, 30000);
                //console.log("запущено ожидание трабла");
            }

            //this.preloader.style.display="block";
            this.preloader.style.display = "none";

            //===============================================================//
            //let src = this.params.sources["hls"][0];                  
            //instance = new FlashPhonerPlayer(src, room, this.params); 
            //instance = new NativePlayer(src, room, this.params);   
            //===============================================================//
            //console.log("============= создаю плеер -> ", protocol[0] )

            if (protocol[0] == "FlashPhoner") {
                //let src = this.params.sources["ws"][0]; //балансировка по серверам отсутствует, поэтому пока берем всегда первый             
                //console.log("instance flash phoner");
                instance = new _FlashPhoner2.default("", room, this.params);
            } else if (protocol[0] == "hls") {
                //alert("пробую использовать HLS");
                var src = this.params.sources["hls"][0]; //балансировка по серверам отсутствует, поэтому берем всегда первый 
                var v = _support2.default.is_safari && _support2.default.getSafaryVersion().split(".")[0];

                if (_support2.default.iosX && _support2.default.is_safari || _support2.default.is_safari && Number(v) < 9) {
                    //7alert("нативный плеер");
                    instance = new _NativePlayer2.default(src, room, this.params);
                } else {
                    instance = new _HLSPlayer2.default(src, room, this.params);
                    //instance = new FlashPhonerPlayer("", room, this.params);
                }
            } else if (protocol[0] == "ws") {
                var _src = this.params.sources["ws"][0]; //балансировка по серверам отсутствует, поэтому пока берем всегда первый             
                instance = new _SLDPPlayer2.default(_src, room, this.params);
            }

            if (instance) {
                this.instance = instance;
                this.instance.onCanPlay = this.onCanPlay;
            }
            return instance;
        }
    }, {
        key: "destroyPlayer",
        value: function destroyPlayer() {
            if (this.instance) {
                this.instance.destroy();
            }
        }
    }, {
        key: "supervizor",
        value: function supervizor() {
            /*if(this.instance && this.instance.canPlay){
                console.log("ПРячу прелоадер");
                this.preloader.style.display="none";
            }*/
            if (this.instance && this.instance.needRestart) {
                this.protocolCount--;
                //console.log(">>>",  this.protocolCount);

                if (this.protocolCount < 1) {
                    this.protocolIndex = this.protocolIndex + 1 < this.protocols.length ? this.protocolIndex + 1 : 0;
                    //console.log("protocol index = ", this.protocolIndex);
                    this.resetIndex();
                }

                this.destroyPlayer();
                this.createPlayer(this.currentRoom);
                this.instance.play();
            }
            setTimeout(this.supervizor, 3000);
        }
    }, {
        key: "onCanPlay",
        value: function onCanPlay() {
            //alert("onCanplay");
            clearTimeout(this.troubleTimeout);
            //console.log("ожидание трабла остановлено");
            this.troubleTimeout = null;
            this.preloader.style.display = "none";
        }
    }, {
        key: "resetIndex",
        value: function resetIndex() {
            var protocol = this.protocols[this.protocolIndex].split(":");
            this.protocol = protocol[0];
            this.protocolCount = Number(protocol[1]);
            //console.log("protocol=", protocol);
        }
    }]);

    return WhenspeakStreamer;
}();

window.WhenSpeakStreamer = WhenspeakStreamer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {

	isMediaSourceSupported: function isMediaSourceSupported() {
		return "MediaSource" in window;
	},

	//хорошо бы заюзать
	isCodecSupported: function isCodecSupported(codec) {
		return this.isMediaSourceSupported() && MediaSource.isTypeSupported(codec);
	},

	is_safari: navigator.userAgent.toLowerCase().indexOf('safari/') > -1 && navigator.userAgent.toLowerCase().indexOf('chrome/') == -1,

	iosX: navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i),

	getSafaryVersion: function getSafaryVersion() {
		//alert(navigator.userAgent.toLowerCase());
		return this.is_safari ? navigator.userAgent.split("Version/")[1].split(" ")[0] : null;
	}

};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Draggable = function () {
    function Draggable(target, wrapper) {
        _classCallCheck(this, Draggable);

        this.target = target;
        this.onDragStart = this.onDragStart.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);

        this.onDragMove = this.onDragMove.bind(this);
        //this.onDragEnd = this.onDragEnd.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onClick = this.onClick.bind(this);

        //var video = this.target.getElementsByTagName("video")[0];

        console.log(target);
        target.addEventListener("mousedown", this.onDragStart);
        target.addEventListener("touchstart", this.onTouchStart);

        //this.video = video;
        this.isMove = false;
    }

    _createClass(Draggable, [{
        key: "destroy",
        value: function destroy() {
            this.target.removeEventListener("mousedown", this.onDragStart);
            document.removeEventListener("mousemove", this.onDragMove);
            document.removeEventListener("mouseup", this.onClick);

            this.target.removeEventListener("touchstart", this.onTouchStart);
            document.removeEventListener("touchmove", this.onTouchMove);
            document.removeEventListener("touchend", this.onTouchEnd);
        }

        //TOUCH

    }, {
        key: "onTouchStart",
        value: function onTouchStart(e) {
            console.log("---==== touch start ===---");
            console.log(e.target);

            if (e.target.tagName !== "VIDEO" && e.target.id !== "dragdropdiv") return;

            document.addEventListener("touchmove", this.onTouchMove);
            document.addEventListener("touchend", this.onTouchEnd);

            var touch = e.changedTouches[0];
            this.startX = touch.screenX;
            this.startY = touch.screenY;
            e.stopPropagation();
        }
    }, {
        key: "onTouchMove",
        value: function onTouchMove(e) {
            this.isMove = true;
            var touch = e.changedTouches[0];

            var top = touch.screenY - this.startY;
            var left = touch.screenX - this.startX;
            this.setPosition(left, top);

            e.preventDefault();
            e.stopPropagation();
            // console.log((rect.top + (this.startX - e.clientX)) + "px");    

            this.startX = touch.screenX;
            this.startY = touch.screenY;
        }
    }, {
        key: "onTouchEnd",
        value: function onTouchEnd(e) {
            this.isMove = false;
            console.log("mouseup");
            document.removeEventListener("touchmove", this.onTouchMove);
            document.removeEventListener("touchend", this.onTouchEnd);
        }

        //MOUSE

    }, {
        key: "onDragStart",
        value: function onDragStart(e) {
            console.log("!!!!!!!!!!!!!!!!!!");

            if (e.target.tagName !== "VIDEO" && e.target.id !== "dragdropdiv") return;

            //console.log("e", e);
            document.addEventListener("mousemove", this.onDragMove);
            //document.addEventListener("mouseup", this.onDragEnd);
            document.addEventListener("click", this.onClick, true);

            this.startX = e.clientX;
            this.startY = e.clientY;
            //e.stopPropagation();
        }
    }, {
        key: "onDragMove",
        value: function onDragMove(e) {
            var topOffset = e.clientY - this.startY,
                leftOffset = e.clientX - this.startX;

            this.setPosition(leftOffset, topOffset);

            this.startX = e.clientX;
            this.startY = e.clientY;
            this.isMove = true;
        }
    }, {
        key: "onClick",
        value: function onClick(e) {
            document.removeEventListener("mousemove", this.onDragMove);
            //document.removeEventListener("mouseup", this.onDragEnd);
            document.removeEventListener("mouseup", this.onClick);

            if (this.isMove) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.isMove = false;
            console.log("click");
        }
    }, {
        key: "setPosition",
        value: function setPosition(left, top) {
            var docRect = document.body.getBoundingClientRect(),
                rect = this.target.getBoundingClientRect(),
                width = Math.round(docRect.width),
                height = Math.round(docRect.height),
                newTop = top + rect.top,
                //+ pageYOffset,
            newLeft = left + rect.left; // + pageXOffset;

            newTop = newTop > 0 ? newTop : 0;
            newLeft = newLeft > 0 ? newLeft : 0;

            //console.log(width);

            newLeft = newLeft > width - rect.width + 60 ? width - rect.width + 60 : newLeft;
            //top = top > height - rect.height ? width - rect.height : top; 
            // TODO заблокировать перемещение вправо
            this.target.style.top = newTop + "px";
            this.target.style.left = newLeft + "px";
        }
    }]);

    return Draggable;
}();

exports.default = Draggable;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
//alert("polyfill");
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

//assign
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target, firstSource) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hls = __webpack_require__(6);

var _hls2 = _interopRequireDefault(_hls);

var _DisconnectDetector = __webpack_require__(0);

var _DisconnectDetector2 = _interopRequireDefault(_DisconnectDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HLSPlayer = function () {
    function HLSPlayer(src, room, config) {
        var _this = this;

        _classCallCheck(this, HLSPlayer);

        var wrapper = document.getElementById("sldp_player_wrapper");
        this.video = document.createElement("video");
        this.video.controls = "controls";
        this.video.style.width = "100%";
        this.video.style.height = "100%";
        //this.video.autoplay = "autoplay";
        wrapper.appendChild(this.video);
        //console.log("________________");

        if (_hls2.default.isSupported()) {
            var hls = new _hls2.default();
            this.hls = hls;

            //hls.loadSource('http://192.168.56.1:8081/live/test/playlist.m3u8'); 
            hls.loadSource(src + "/" + room + "/playlist.m3u8");
            //this.video.autoplay = "autoplay";
            //alert("sup");
            hls.attachMedia(this.video);
            hls.on(_hls2.default.Events.MANIFEST_PARSED, function () {
                //alert("autoplay");
                //video.play();
                this._onCanPlay(); //возможно стоит использовать event video
            });

            //==============================================================================//
            this.detector = new _DisconnectDetector2.default(this.video, 6000);

            this.video.addEventListener("pause", function () {
                _this.detector.stopWatch();
                console.log("hls.js pause");
            });

            this.detector.onDisconnect = function () {
                _this.needRestart = true;
                console.log("hls.js disconnect");
            };
            //==============================================================================//
        }
    }

    _createClass(HLSPlayer, [{
        key: "play",
        value: function play() {
            this.video.play();
            this.detector.startWatch();
        }
    }, {
        key: "isPaused",
        value: function isPaused() {
            return this.video.paused;
        }
    }, {
        key: "_onCanPlay",
        value: function _onCanPlay() {
            this.canPlay = true;
            if (this.onCanPlay) this.onCanPlay();
        }
    }, {
        key: "destroy",
        value: function destroy(room) {
            //this.video.removeEventListener("error", this.onError);
            this.hls.destroy();
            this.video.remove();
            this.detector.destroy();
        }
    }], [{
        key: "isSupported",
        value: function isSupported() {
            return _hls2.default.isSupported();
        }
    }]);

    return HLSPlayer;
}();

exports.default = HLSPlayer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Hls"] = factory();
	else
		root["Hls"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enableLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logger; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function noop() {}

var fakeLogger = {
  trace: noop,
  debug: noop,
  log: noop,
  warn: noop,
  info: noop,
  error: noop
};

var exportedLogger = fakeLogger;

/*globals self: false */

//let lastCallTime;
// function formatMsgWithTimeInfo(type, msg) {
//   const now = Date.now();
//   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
//   lastCallTime = now;
//   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
//   return msg;
// }

function formatMsg(type, msg) {
  msg = '[' + type + '] > ' + msg;
  return msg;
}

function consolePrintFn(type) {
  var func = self.console[type];
  if (func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args[0]) {
        args[0] = formatMsg(type, args[0]);
      }
      func.apply(self.console, args);
    };
  }
  return noop;
}

function exportLoggerFunctions(debugConfig) {
  for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    functions[_key2 - 1] = arguments[_key2];
  }

  functions.forEach(function (type) {
    exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
  });
}

var enableLogs = function enableLogs(debugConfig) {
  if (debugConfig === true || (typeof debugConfig === 'undefined' ? 'undefined' : _typeof(debugConfig)) === 'object') {
    exportLoggerFunctions(debugConfig,
    // Remove out from list here to hard-disable a log-level
    //'trace',
    'debug', 'log', 'info', 'warn', 'error');
    // Some browsers don't allow to use bind on console object anyway
    // fallback to default if needed
    try {
      exportedLogger.log();
    } catch (e) {
      exportedLogger = fakeLogger;
    }
  } else {
    exportedLogger = fakeLogger;
  }
};

var logger = exportedLogger;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // fired before MediaSource is attaching to media element - data: { media }
  MEDIA_ATTACHING: 'hlsMediaAttaching',
  // fired when MediaSource has been succesfully attached to media element - data: { }
  MEDIA_ATTACHED: 'hlsMediaAttached',
  // fired before detaching MediaSource from media element - data: { }
  MEDIA_DETACHING: 'hlsMediaDetaching',
  // fired when MediaSource has been detached from media element - data: { }
  MEDIA_DETACHED: 'hlsMediaDetached',
  // fired when we buffer is going to be reset - data: { }
  BUFFER_RESET: 'hlsBufferReset',
  // fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
  BUFFER_CODECS: 'hlsBufferCodecs',
  // fired when sourcebuffers have been created - data: { tracks : tracks }
  BUFFER_CREATED: 'hlsBufferCreated',
  // fired when we append a segment to the buffer - data: { segment: segment object }
  BUFFER_APPENDING: 'hlsBufferAppending',
  // fired when we are done with appending a media segment to the buffer - data : { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent}
  BUFFER_APPENDED: 'hlsBufferAppended',
  // fired when the stream is finished and we want to notify the media buffer that there will be no more data - data: { }
  BUFFER_EOS: 'hlsBufferEos',
  // fired when the media buffer should be flushed - data { startOffset, endOffset }
  BUFFER_FLUSHING: 'hlsBufferFlushing',
  // fired when the media buffer has been flushed - data: { }
  BUFFER_FLUSHED: 'hlsBufferFlushed',
  // fired to signal that a manifest loading starts - data: { url : manifestURL}
  MANIFEST_LOADING: 'hlsManifestLoading',
  // fired after manifest has been loaded - data: { levels : [available quality levels], audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
  MANIFEST_LOADED: 'hlsManifestLoaded',
  // fired after manifest has been parsed - data: { levels : [available quality levels], firstLevel : index of first quality level appearing in Manifest}
  MANIFEST_PARSED: 'hlsManifestParsed',
  // fired when a level switch is requested - data: { level : id of new level } // deprecated in favor LEVEL_SWITCHING
  LEVEL_SWITCH: 'hlsLevelSwitch',
  // fired when a level switch is requested - data: { level : id of new level }
  LEVEL_SWITCHING: 'hlsLevelSwitching',
  // fired when a level switch is effective - data: { level : id of new level }
  LEVEL_SWITCHED: 'hlsLevelSwitched',
  // fired when a level playlist loading starts - data: { url : level URL, level : id of level being loaded}
  LEVEL_LOADING: 'hlsLevelLoading',
  // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : { trequest, tfirst, tload, mtime} }
  LEVEL_LOADED: 'hlsLevelLoaded',
  // fired when a level's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, level : id of updated level }
  LEVEL_UPDATED: 'hlsLevelUpdated',
  // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
  LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated',
  // fired to notify that audio track lists has been updated - data: { audioTracks : audioTracks }
  AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated',
  // fired when an audio track switch occurs - data: { id : audio track id } // deprecated in favor AUDIO_TRACK_SWITCHING
  AUDIO_TRACK_SWITCH: 'hlsAudioTrackSwitch',
  // fired when an audio track switching is requested - data: { id : audio track id }
  AUDIO_TRACK_SWITCHING: 'hlsAudioTrackSwitching',
  // fired when an audio track switch actually occurs - data: { id : audio track id }
  AUDIO_TRACK_SWITCHED: 'hlsAudioTrackSwitched',
  // fired when an audio track loading starts - data: { url : audio track URL, id : audio track id }
  AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading',
  // fired when an audio track loading finishes - data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime } }
  AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded',
  // fired to notify that subtitle track lists has been updated - data: { subtitleTracks : subtitleTracks }
  SUBTITLE_TRACKS_UPDATED: 'hlsSubtitleTracksUpdated',
  // fired when an subtitle track switch occurs - data: { id : subtitle track id }
  SUBTITLE_TRACK_SWITCH: 'hlsSubtitleTrackSwitch',
  // fired when a subtitle track loading starts - data: { url : subtitle track URL, id : subtitle track id }
  SUBTITLE_TRACK_LOADING: 'hlsSubtitleTrackLoading',
  // fired when a subtitle track loading finishes - data: { details : levelDetails object, id : subtitle track id, stats : { trequest, tfirst, tload, mtime } }
  SUBTITLE_TRACK_LOADED: 'hlsSubtitleTrackLoaded',
  // fired when a subtitle fragment has been processed - data: { success : boolean, frag : the processed frag }
  SUBTITLE_FRAG_PROCESSED: 'hlsSubtitleFragProcessed',
  // fired when the first timestamp is found - data: { id : demuxer id, initPTS: initPTS, frag : fragment object }
  INIT_PTS_FOUND: 'hlsInitPtsFound',
  // fired when a fragment loading starts - data: { frag : fragment object }
  FRAG_LOADING: 'hlsFragLoading',
  // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded } }
  FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress',
  // Identifier for fragment load aborting for emergency switch down - data: { frag : fragment object }
  FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted',
  // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length } }
  FRAG_LOADED: 'hlsFragLoaded',
  // fired when a fragment has finished decrypting - data: { id : demuxer id, frag: fragment object, stats : { tstart, tdecrypt } }
  FRAG_DECRYPTED: 'hlsFragDecrypted',
  // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, frag: fragment object, moov : moov MP4 box, codecs : codecs found while parsing fragment }
  FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment',
  // fired when parsing sei text is completed - data: { id : demuxer id, frag: fragment object, samples : [ sei samples pes ] }
  FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata',
  // fired when parsing id3 is completed - data: { id : demuxer id, frag: fragment object, samples : [ id3 samples pes ] }
  FRAG_PARSING_METADATA: 'hlsFragParsingMetadata',
  // fired when data have been extracted from fragment - data: { id : demuxer id, frag: fragment object, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
  FRAG_PARSING_DATA: 'hlsFragParsingData',
  // fired when fragment parsing is completed - data: { id : demuxer id, frag: fragment object }
  FRAG_PARSED: 'hlsFragParsed',
  // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id, frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length, bwEstimate } }
  FRAG_BUFFERED: 'hlsFragBuffered',
  // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
  FRAG_CHANGED: 'hlsFragChanged',
  // Identifier for a FPS drop event - data: { curentDropped, currentDecoded, totalDroppedFrames }
  FPS_DROP: 'hlsFpsDrop',
  //triggered when FPS drop triggers auto level capping - data: { level, droppedlevel }
  FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping',
  // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data }
  ERROR: 'hlsError',
  // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example - data: { }
  DESTROYING: 'hlsDestroying',
  // fired when a decrypt key loading starts - data: { frag : fragment object }
  KEY_LOADING: 'hlsKeyLoading',
  // fired when a decrypt key loading is completed - data: { frag : fragment object, payload : key payload, stats : { trequest, tfirst, tload, length } }
  KEY_LOADED: 'hlsKeyLoaded',
  // fired upon stream controller state transitions - data: { previousState, nextState }
  STREAM_STATE_TRANSITION: 'hlsStreamStateTransition'
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDetails; });
var ErrorTypes = {
  // Identifier for a network error (loading error / timeout ...)
  NETWORK_ERROR: 'networkError',
  // Identifier for a media Error (video/parsing/mediasource error)
  MEDIA_ERROR: 'mediaError',
  // Identifier for a mux Error (demuxing/remuxing)
  MUX_ERROR: 'muxError',
  // Identifier for all other errors
  OTHER_ERROR: 'otherError'
};

var ErrorDetails = {
  // Identifier for a manifest load error - data: { url : faulty URL, response : { code: error code, text: error text }}
  MANIFEST_LOAD_ERROR: 'manifestLoadError',
  // Identifier for a manifest load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
  MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut',
  // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
  MANIFEST_PARSING_ERROR: 'manifestParsingError',
  // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
  MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError',
  // Identifier for a level load error - data: { url : faulty URL, response : { code: error code, text: error text }}
  LEVEL_LOAD_ERROR: 'levelLoadError',
  // Identifier for a level load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
  LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut',
  // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
  LEVEL_SWITCH_ERROR: 'levelSwitchError',
  // Identifier for an audio track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
  AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError',
  // Identifier for an audio track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
  AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut',
  // Identifier for fragment load error - data: { frag : fragment object, response : { code: error code, text: error text }}
  FRAG_LOAD_ERROR: 'fragLoadError',
  // Identifier for fragment loop loading error - data: { frag : fragment object}
  FRAG_LOOP_LOADING_ERROR: 'fragLoopLoadingError',
  // Identifier for fragment load timeout error - data: { frag : fragment object}
  FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut',
  // Identifier for a fragment decryption error event - data: {id : demuxer Id,frag: fragment object, reason : parsing error description }
  FRAG_DECRYPT_ERROR: 'fragDecryptError',
  // Identifier for a fragment parsing error event - data: { id : demuxer Id, reason : parsing error description }
  // will be renamed DEMUX_PARSING_ERROR and switched to MUX_ERROR in the next major release
  FRAG_PARSING_ERROR: 'fragParsingError',
  // Identifier for a remux alloc error event - data: { id : demuxer Id, frag : fragment object, bytes : nb of bytes on which allocation failed , reason : error text }
  REMUX_ALLOC_ERROR: 'remuxAllocError',
  // Identifier for decrypt key load error - data: { frag : fragment object, response : { code: error code, text: error text }}
  KEY_LOAD_ERROR: 'keyLoadError',
  // Identifier for decrypt key load timeout error - data: { frag : fragment object}
  KEY_LOAD_TIMEOUT: 'keyLoadTimeOut',
  // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : {  err : exception , mimeType : mimeType }
  BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError',
  // Identifier for a buffer append error - data: append error description
  BUFFER_APPEND_ERROR: 'bufferAppendError',
  // Identifier for a buffer appending error event - data: appending error description
  BUFFER_APPENDING_ERROR: 'bufferAppendingError',
  // Identifier for a buffer stalled error event
  BUFFER_STALLED_ERROR: 'bufferStalledError',
  // Identifier for a buffer full event
  BUFFER_FULL_ERROR: 'bufferFullError',
  // Identifier for a buffer seek over hole event
  BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole',
  // Identifier for a buffer nudge on stall (playback is stuck although currentTime is in a buffered area)
  BUFFER_NUDGE_ON_STALL: 'bufferNudgeOnStall',
  // Identifier for an internal exception happening inside hls.js while handling an event
  INTERNAL_EXCEPTION: 'internalException'
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ID3 parser
 */
var ID3 = function () {
  function ID3() {
    _classCallCheck(this, ID3);
  }

  /**
   * Returns true if an ID3 header can be found at offset in data
   * @param {Uint8Array} data - The data to search in
   * @param {number} offset - The offset at which to start searching
   * @return {boolean} - True if an ID3 header is found
   */
  ID3.isHeader = function isHeader(data, offset) {
    /*
    * http://id3.org/id3v2.3.0
    * [0]     = 'I'
    * [1]     = 'D'
    * [2]     = '3'
    * [3,4]   = {Version}
    * [5]     = {Flags}
    * [6-9]   = {ID3 Size}
    *
    * An ID3v2 tag can be detected with the following pattern:
    *  $49 44 33 yy yy xx zz zz zz zz
    * Where yy is less than $FF, xx is the 'flags' byte and zz is less than $80
    */
    if (offset + 10 <= data.length) {
      //look for 'ID3' identifier
      if (data[offset] === 0x49 && data[offset + 1] === 0x44 && data[offset + 2] === 0x33) {
        //check version is within range
        if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
          //check size is within range
          if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) {
            return true;
          }
        }
      }
    }

    return false;
  };

  /**
   * Returns true if an ID3 footer can be found at offset in data
   * @param {Uint8Array} data - The data to search in
   * @param {number} offset - The offset at which to start searching
   * @return {boolean} - True if an ID3 footer is found
   */


  ID3.isFooter = function isFooter(data, offset) {
    /*
    * The footer is a copy of the header, but with a different identifier
    */
    if (offset + 10 <= data.length) {
      //look for '3DI' identifier
      if (data[offset] === 0x33 && data[offset + 1] === 0x44 && data[offset + 2] === 0x49) {
        //check version is within range
        if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
          //check size is within range
          if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) {
            return true;
          }
        }
      }
    }

    return false;
  };

  /**
   * Returns any adjacent ID3 tags found in data starting at offset, as one block of data
   * @param {Uint8Array} data - The data to search in
   * @param {number} offset - The offset at which to start searching
   * @return {Uint8Array} - The block of data containing any ID3 tags found
   */


  ID3.getID3Data = function getID3Data(data, offset) {
    var front = offset;
    var length = 0;

    while (ID3.isHeader(data, offset)) {
      //ID3 header is 10 bytes
      length += 10;

      var size = ID3._readSize(data, offset + 6);
      length += size;

      if (ID3.isFooter(data, offset + 10)) {
        //ID3 footer is 10 bytes
        length += 10;
      }

      offset += length;
    }

    if (length > 0) {
      return data.subarray(front, front + length);
    }

    return undefined;
  };

  ID3._readSize = function _readSize(data, offset) {
    var size = 0;
    size = (data[offset] & 0x7f) << 21;
    size |= (data[offset + 1] & 0x7f) << 14;
    size |= (data[offset + 2] & 0x7f) << 7;
    size |= data[offset + 3] & 0x7f;
    return size;
  };

  /**
   * Searches for the Elementary Stream timestamp found in the ID3 data chunk
   * @param {Uint8Array} data - Block of data containing one or more ID3 tags
   * @return {number} - The timestamp
   */


  ID3.getTimeStamp = function getTimeStamp(data) {
    var frames = ID3.getID3Frames(data);
    for (var i = 0; i < frames.length; i++) {
      var frame = frames[i];
      if (ID3.isTimeStampFrame(frame)) {
        return ID3._readTimeStamp(frame);
      }
    }

    return undefined;
  };

  /**
   * Returns true if the ID3 frame is an Elementary Stream timestamp frame
   * @param {ID3 frame} frame
   */


  ID3.isTimeStampFrame = function isTimeStampFrame(frame) {
    return frame && frame.key === 'PRIV' && frame.info === 'com.apple.streaming.transportStreamTimestamp';
  };

  ID3._getFrameData = function _getFrameData(data) {
    /*
    Frame ID       $xx xx xx xx (four characters)
    Size           $xx xx xx xx
    Flags          $xx xx
    */
    var type = String.fromCharCode(data[0], data[1], data[2], data[3]);
    var size = ID3._readSize(data, 4);

    //skip frame id, size, and flags
    var offset = 10;

    return { type: type, size: size, data: data.subarray(offset, offset + size) };
  };

  /**
   * Returns an array of ID3 frames found in all the ID3 tags in the id3Data
   * @param {Uint8Array} id3Data - The ID3 data containing one or more ID3 tags
   * @return {ID3 frame[]} - Array of ID3 frame objects
   */


  ID3.getID3Frames = function getID3Frames(id3Data) {
    var offset = 0;
    var frames = [];

    while (ID3.isHeader(id3Data, offset)) {
      var size = ID3._readSize(id3Data, offset + 6);
      //skip past ID3 header
      offset += 10;
      var end = offset + size;
      //loop through frames in the ID3 tag
      while (offset + 8 < end) {
        var frameData = ID3._getFrameData(id3Data.subarray(offset));
        var frame = ID3._decodeFrame(frameData);
        if (frame) {
          frames.push(frame);
        }
        //skip frame header and frame data
        offset += frameData.size + 10;
      }

      if (ID3.isFooter(id3Data, offset)) {
        offset += 10;
      }
    }

    return frames;
  };

  ID3._decodeFrame = function _decodeFrame(frame) {
    if (frame.type === 'PRIV') {
      return ID3._decodePrivFrame(frame);
    } else if (frame.type[0] === 'T') {
      return ID3._decodeTextFrame(frame);
    } else if (frame.type[0] === 'W') {
      return ID3._decodeURLFrame(frame);
    }

    return undefined;
  };

  ID3._readTimeStamp = function _readTimeStamp(timeStampFrame) {
    if (timeStampFrame.data.byteLength === 8) {
      var data = new Uint8Array(timeStampFrame.data);
      // timestamp is 33 bit expressed as a big-endian eight-octet number,
      // with the upper 31 bits set to zero.
      var pts33Bit = data[3] & 0x1;
      var timestamp = (data[4] << 23) + (data[5] << 15) + (data[6] << 7) + data[7];
      timestamp /= 45;

      if (pts33Bit) {
        timestamp += 47721858.84; // 2^32 / 90
      }

      return Math.round(timestamp);
    }

    return undefined;
  };

  ID3._decodePrivFrame = function _decodePrivFrame(frame) {
    /*
    Format: <text string>\0<binary data>
    */
    if (frame.size < 2) {
      return undefined;
    }

    var owner = ID3._utf8ArrayToStr(frame.data);
    var privateData = new Uint8Array(frame.data.subarray(owner.length + 1));

    return { key: frame.type, info: owner, data: privateData.buffer };
  };

  ID3._decodeTextFrame = function _decodeTextFrame(frame) {
    if (frame.size < 2) {
      return undefined;
    }

    if (frame.type === 'TXXX') {
      /*
      Format:
      [0]   = {Text Encoding}
      [1-?] = {Description}\0{Value}
      */
      var index = 1;
      var description = ID3._utf8ArrayToStr(frame.data.subarray(index));

      index += description.length + 1;
      var value = ID3._utf8ArrayToStr(frame.data.subarray(index));

      return { key: frame.type, info: description, data: value };
    } else {
      /*
      Format:
      [0]   = {Text Encoding}
      [1-?] = {Value}
      */
      var text = ID3._utf8ArrayToStr(frame.data.subarray(1));
      return { key: frame.type, data: text };
    }
  };

  ID3._decodeURLFrame = function _decodeURLFrame(frame) {
    if (frame.type === 'WXXX') {
      /*
      Format:
      [0]   = {Text Encoding}
      [1-?] = {Description}\0{URL}
      */
      if (frame.size < 2) {
        return undefined;
      }

      var index = 1;
      var description = ID3._utf8ArrayToStr(frame.data.subarray(index));

      index += description.length + 1;
      var value = ID3._utf8ArrayToStr(frame.data.subarray(index));

      return { key: frame.type, info: description, data: value };
    } else {
      /*
      Format:
      [0-?] = {URL}
      */
      var url = ID3._utf8ArrayToStr(frame.data);
      return { key: frame.type, data: url };
    }
  };

  // http://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript/22373197
  // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
  /* utf.js - UTF-8 <=> UTF-16 convertion
   *
   * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
   * Version: 1.0
   * LastModified: Dec 25 1999
   * This library is free.  You can redistribute it and/or modify it.
   */


  ID3._utf8ArrayToStr = function _utf8ArrayToStr(array) {

    var char2 = void 0;
    var char3 = void 0;
    var out = '';
    var i = 0;
    var length = array.length;

    while (i < length) {
      var c = array[i++];
      switch (c >> 4) {
        case 0:
          return out;
        case 1:case 2:case 3:case 4:case 5:case 6:case 7:
          // 0xxxxxxx
          out += String.fromCharCode(c);
          break;
        case 12:case 13:
          // 110x xxxx   10xx xxxx
          char2 = array[i++];
          out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
          break;
        case 14:
          // 1110 xxxx  10xx xxxx  10xx xxxx
          char2 = array[i++];
          char3 = array[i++];
          out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
          break;
      }
    }

    return out;
  };

  return ID3;
}();

/* harmony default export */ __webpack_exports__["a"] = (ID3);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// see https://tools.ietf.org/html/rfc1808

/* jshint ignore:start */
(function(root) { 
/* jshint ignore:end */

  var URL_REGEX = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/;
  var FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g;

  var URLToolkit = { // jshint ignore:line
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (default, not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function(baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = this.parseURL(baseURL);
        if (!baseParts) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = this.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = this.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) + relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function(url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || ''
      };
    },
    normalizePath: function(path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length) {} // jshint ignore:line
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function(parts) {
      return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
    }
  };

/* jshint ignore:start */
  if(true)
    module.exports = URLToolkit;
  else if(typeof define === 'function' && define.amd)
    define([], function() { return URLToolkit; });
  else if(typeof exports === 'object')
    exports["URLToolkit"] = URLToolkit;
  else
    root["URLToolkit"] = URLToolkit;
})(this);
/* jshint ignore:end */


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/events.js
var events = __webpack_require__(1);

// EXTERNAL MODULE: ./src/errors.js
var errors = __webpack_require__(2);

// CONCATENATED MODULE: ./src/crypt/aes-crypto.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AESCrypto = function () {
  function AESCrypto(subtle, iv) {
    _classCallCheck(this, AESCrypto);

    this.subtle = subtle;
    this.aesIV = iv;
  }

  AESCrypto.prototype.decrypt = function decrypt(data, key) {
    return this.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, key, data);
  };

  return AESCrypto;
}();

/* harmony default export */ var aes_crypto = (AESCrypto);
// CONCATENATED MODULE: ./src/crypt/fast-aes-key.js
function fast_aes_key__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FastAESKey = function () {
  function FastAESKey(subtle, key) {
    fast_aes_key__classCallCheck(this, FastAESKey);

    this.subtle = subtle;
    this.key = key;
  }

  FastAESKey.prototype.expandKey = function expandKey() {
    return this.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
  };

  return FastAESKey;
}();

/* harmony default export */ var fast_aes_key = (FastAESKey);
// CONCATENATED MODULE: ./src/crypt/aes-decryptor.js
function aes_decryptor__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AESDecryptor = function () {
  function AESDecryptor() {
    aes_decryptor__classCallCheck(this, AESDecryptor);

    // Static after running initTable
    this.rcon = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
    this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
    this.sBox = new Uint32Array(256);
    this.invSBox = new Uint32Array(256);

    // Changes during runtime
    this.key = new Uint32Array(0);

    this.initTable();
  }

  // Using view.getUint32() also swaps the byte order.


  AESDecryptor.prototype.uint8ArrayToUint32Array_ = function uint8ArrayToUint32Array_(arrayBuffer) {
    var view = new DataView(arrayBuffer);
    var newArray = new Uint32Array(4);
    for (var i = 0; i < 4; i++) {
      newArray[i] = view.getUint32(i * 4);
    }
    return newArray;
  };

  AESDecryptor.prototype.initTable = function initTable() {
    var sBox = this.sBox;
    var invSBox = this.invSBox;
    var subMix = this.subMix;
    var subMix0 = subMix[0];
    var subMix1 = subMix[1];
    var subMix2 = subMix[2];
    var subMix3 = subMix[3];
    var invSubMix = this.invSubMix;
    var invSubMix0 = invSubMix[0];
    var invSubMix1 = invSubMix[1];
    var invSubMix2 = invSubMix[2];
    var invSubMix3 = invSubMix[3];

    var d = new Uint32Array(256);
    var x = 0;
    var xi = 0;
    var i = 0;
    for (i = 0; i < 256; i++) {
      if (i < 128) {
        d[i] = i << 1;
      } else {
        d[i] = i << 1 ^ 0x11b;
      }
    }

    for (i = 0; i < 256; i++) {
      var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
      sBox[x] = sx;
      invSBox[sx] = x;

      // Compute multiplication
      var x2 = d[x];
      var x4 = d[x2];
      var x8 = d[x4];

      // Compute sub/invSub bytes, mix columns tables
      var t = d[sx] * 0x101 ^ sx * 0x1010100;
      subMix0[x] = t << 24 | t >>> 8;
      subMix1[x] = t << 16 | t >>> 16;
      subMix2[x] = t << 8 | t >>> 24;
      subMix3[x] = t;

      // Compute inv sub bytes, inv mix columns tables
      t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
      invSubMix0[sx] = t << 24 | t >>> 8;
      invSubMix1[sx] = t << 16 | t >>> 16;
      invSubMix2[sx] = t << 8 | t >>> 24;
      invSubMix3[sx] = t;

      // Compute next counter
      if (!x) {
        x = xi = 1;
      } else {
        x = x2 ^ d[d[d[x8 ^ x2]]];
        xi ^= d[d[xi]];
      }
    }
  };

  AESDecryptor.prototype.expandKey = function expandKey(keyBuffer) {
    // convert keyBuffer to Uint32Array
    var key = this.uint8ArrayToUint32Array_(keyBuffer);
    var sameKey = true;
    var offset = 0;

    while (offset < key.length && sameKey) {
      sameKey = key[offset] === this.key[offset];
      offset++;
    }

    if (sameKey) {
      return;
    }

    this.key = key;
    var keySize = this.keySize = key.length;

    if (keySize !== 4 && keySize !== 6 && keySize !== 8) {
      throw new Error('Invalid aes key size=' + keySize);
    }

    var ksRows = this.ksRows = (keySize + 6 + 1) * 4;
    var ksRow = void 0;
    var invKsRow = void 0;

    var keySchedule = this.keySchedule = new Uint32Array(ksRows);
    var invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows);
    var sbox = this.sBox;
    var rcon = this.rcon;

    var invSubMix = this.invSubMix;
    var invSubMix0 = invSubMix[0];
    var invSubMix1 = invSubMix[1];
    var invSubMix2 = invSubMix[2];
    var invSubMix3 = invSubMix[3];

    var prev = void 0;
    var t = void 0;

    for (ksRow = 0; ksRow < ksRows; ksRow++) {
      if (ksRow < keySize) {
        prev = keySchedule[ksRow] = key[ksRow];
        continue;
      }
      t = prev;

      if (ksRow % keySize === 0) {
        // Rot word
        t = t << 8 | t >>> 24;

        // Sub word
        t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff];

        // Mix Rcon
        t ^= rcon[ksRow / keySize | 0] << 24;
      } else if (keySize > 6 && ksRow % keySize === 4) {
        // Sub word
        t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff];
      }

      keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0;
    }

    for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
      ksRow = ksRows - invKsRow;
      if (invKsRow & 3) {
        t = keySchedule[ksRow];
      } else {
        t = keySchedule[ksRow - 4];
      }

      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule[invKsRow] = t;
      } else {
        invKeySchedule[invKsRow] = invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[t >>> 16 & 0xff]] ^ invSubMix2[sbox[t >>> 8 & 0xff]] ^ invSubMix3[sbox[t & 0xff]];
      }

      invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
    }
  };

  // Adding this as a method greatly improves performance.


  AESDecryptor.prototype.networkToHostOrderSwap = function networkToHostOrderSwap(word) {
    return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24;
  };

  AESDecryptor.prototype.decrypt = function decrypt(inputArrayBuffer, offset, aesIV) {
    var nRounds = this.keySize + 6;
    var invKeySchedule = this.invKeySchedule;
    var invSBOX = this.invSBox;

    var invSubMix = this.invSubMix;
    var invSubMix0 = invSubMix[0];
    var invSubMix1 = invSubMix[1];
    var invSubMix2 = invSubMix[2];
    var invSubMix3 = invSubMix[3];

    var initVector = this.uint8ArrayToUint32Array_(aesIV);
    var initVector0 = initVector[0];
    var initVector1 = initVector[1];
    var initVector2 = initVector[2];
    var initVector3 = initVector[3];

    var inputInt32 = new Int32Array(inputArrayBuffer);
    var outputInt32 = new Int32Array(inputInt32.length);

    var t0 = void 0,
        t1 = void 0,
        t2 = void 0,
        t3 = void 0;
    var s0 = void 0,
        s1 = void 0,
        s2 = void 0,
        s3 = void 0;
    var inputWords0 = void 0,
        inputWords1 = void 0,
        inputWords2 = void 0,
        inputWords3 = void 0;

    var ksRow, i;
    var swapWord = this.networkToHostOrderSwap;

    while (offset < inputInt32.length) {
      inputWords0 = swapWord(inputInt32[offset]);
      inputWords1 = swapWord(inputInt32[offset + 1]);
      inputWords2 = swapWord(inputInt32[offset + 2]);
      inputWords3 = swapWord(inputInt32[offset + 3]);

      s0 = inputWords0 ^ invKeySchedule[0];
      s1 = inputWords3 ^ invKeySchedule[1];
      s2 = inputWords2 ^ invKeySchedule[2];
      s3 = inputWords1 ^ invKeySchedule[3];

      ksRow = 4;

      // Iterate through the rounds of decryption
      for (i = 1; i < nRounds; i++) {
        t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[s1 >> 16 & 0xff] ^ invSubMix2[s2 >> 8 & 0xff] ^ invSubMix3[s3 & 0xff] ^ invKeySchedule[ksRow];
        t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[s2 >> 16 & 0xff] ^ invSubMix2[s3 >> 8 & 0xff] ^ invSubMix3[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
        t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[s3 >> 16 & 0xff] ^ invSubMix2[s0 >> 8 & 0xff] ^ invSubMix3[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
        t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[s0 >> 16 & 0xff] ^ invSubMix2[s1 >> 8 & 0xff] ^ invSubMix3[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
        // Update state
        s0 = t0;
        s1 = t1;
        s2 = t2;
        s3 = t3;

        ksRow = ksRow + 4;
      }

      // Shift rows, sub bytes, add round key
      t0 = invSBOX[s0 >>> 24] << 24 ^ invSBOX[s1 >> 16 & 0xff] << 16 ^ invSBOX[s2 >> 8 & 0xff] << 8 ^ invSBOX[s3 & 0xff] ^ invKeySchedule[ksRow];
      t1 = invSBOX[s1 >>> 24] << 24 ^ invSBOX[s2 >> 16 & 0xff] << 16 ^ invSBOX[s3 >> 8 & 0xff] << 8 ^ invSBOX[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
      t2 = invSBOX[s2 >>> 24] << 24 ^ invSBOX[s3 >> 16 & 0xff] << 16 ^ invSBOX[s0 >> 8 & 0xff] << 8 ^ invSBOX[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
      t3 = invSBOX[s3 >>> 24] << 24 ^ invSBOX[s0 >> 16 & 0xff] << 16 ^ invSBOX[s1 >> 8 & 0xff] << 8 ^ invSBOX[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
      ksRow = ksRow + 3;

      // Write
      outputInt32[offset] = swapWord(t0 ^ initVector0);
      outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
      outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
      outputInt32[offset + 3] = swapWord(t1 ^ initVector3);

      // reset initVector to last 4 unsigned int
      initVector0 = inputWords0;
      initVector1 = inputWords1;
      initVector2 = inputWords2;
      initVector3 = inputWords3;

      offset = offset + 4;
    }

    return outputInt32.buffer;
  };

  AESDecryptor.prototype.destroy = function destroy() {
    this.key = undefined;
    this.keySize = undefined;
    this.ksRows = undefined;

    this.sBox = undefined;
    this.invSBox = undefined;
    this.subMix = undefined;
    this.invSubMix = undefined;
    this.keySchedule = undefined;
    this.invKeySchedule = undefined;

    this.rcon = undefined;
  };

  return AESDecryptor;
}();

/* harmony default export */ var aes_decryptor = (AESDecryptor);
// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__(0);

// CONCATENATED MODULE: ./src/crypt/decrypter.js
function decrypter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








/*globals self: false */

var decrypter_Decrypter = function () {
  function Decrypter(observer, config) {
    decrypter__classCallCheck(this, Decrypter);

    this.observer = observer;
    this.config = config;
    this.logEnabled = true;
    try {
      var browserCrypto = crypto ? crypto : self.crypto;
      this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
    } catch (e) {}
    this.disableWebCrypto = !this.subtle;
  }

  Decrypter.prototype.isSync = function isSync() {
    return this.disableWebCrypto && this.config.enableSoftwareAES;
  };

  Decrypter.prototype.decrypt = function decrypt(data, key, iv, callback) {
    var _this = this;

    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
      if (this.logEnabled) {
        logger["b" /* logger */].log('JS AES decrypt');
        this.logEnabled = false;
      }
      var decryptor = this.decryptor;
      if (!decryptor) {
        this.decryptor = decryptor = new aes_decryptor();
      }
      decryptor.expandKey(key);
      callback(decryptor.decrypt(data, 0, iv));
    } else {
      if (this.logEnabled) {
        logger["b" /* logger */].log('WebCrypto AES decrypt');
        this.logEnabled = false;
      }
      var subtle = this.subtle;
      if (this.key !== key) {
        this.key = key;
        this.fastAesKey = new fast_aes_key(subtle, key);
      }

      this.fastAesKey.expandKey().then(function (aesKey) {
        // decrypt using web crypto
        var crypto = new aes_crypto(subtle, iv);
        crypto.decrypt(data, aesKey).catch(function (err) {
          _this.onWebCryptoError(err, data, key, iv, callback);
        }).then(function (result) {
          callback(result);
        });
      }).catch(function (err) {
        _this.onWebCryptoError(err, data, key, iv, callback);
      });
    }
  };

  Decrypter.prototype.onWebCryptoError = function onWebCryptoError(err, data, key, iv, callback) {
    if (this.config.enableSoftwareAES) {
      logger["b" /* logger */].log('WebCrypto Error, disable WebCrypto API');
      this.disableWebCrypto = true;
      this.logEnabled = true;
      this.decrypt(data, key, iv, callback);
    } else {
      logger["b" /* logger */].error('decrypting error : ' + err.message);
      this.observer.trigger(Event.ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_DECRYPT_ERROR, fatal: true, reason: err.message });
    }
  };

  Decrypter.prototype.destroy = function destroy() {
    var decryptor = this.decryptor;
    if (decryptor) {
      decryptor.destroy();
      this.decryptor = undefined;
    }
  };

  return Decrypter;
}();

/* harmony default export */ var crypt_decrypter = (decrypter_Decrypter);
// CONCATENATED MODULE: ./src/demux/adts.js
/**
 *  ADTS parser helper
 */



function getAudioConfig(observer, data, offset, audioCodec) {
  var adtsObjectType,
      // :int
  adtsSampleingIndex,
      // :int
  adtsExtensionSampleingIndex,
      // :int
  adtsChanelConfig,
      // :int
  config,
      userAgent = navigator.userAgent.toLowerCase(),
      manifestCodec = audioCodec,
      adtsSampleingRates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
  // byte 2
  adtsObjectType = ((data[offset + 2] & 0xC0) >>> 6) + 1;
  adtsSampleingIndex = (data[offset + 2] & 0x3C) >>> 2;
  if (adtsSampleingIndex > adtsSampleingRates.length - 1) {
    observer.trigger(Event.ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_PARSING_ERROR, fatal: true, reason: 'invalid ADTS sampling index:' + adtsSampleingIndex });
    return;
  }
  adtsChanelConfig = (data[offset + 2] & 0x01) << 2;
  // byte 3
  adtsChanelConfig |= (data[offset + 3] & 0xC0) >>> 6;
  logger["b" /* logger */].log('manifest codec:' + audioCodec + ',ADTS data:type:' + adtsObjectType + ',sampleingIndex:' + adtsSampleingIndex + '[' + adtsSampleingRates[adtsSampleingIndex] + 'Hz],channelConfig:' + adtsChanelConfig);
  // firefox: freq less than 24kHz = AAC SBR (HE-AAC)
  if (/firefox/i.test(userAgent)) {
    if (adtsSampleingIndex >= 6) {
      adtsObjectType = 5;
      config = new Array(4);
      // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
      // there is a factor 2 between frame sample rate and output sample rate
      // multiply frequency by 2 (see table below, equivalent to substract 3)
      adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
    } else {
      adtsObjectType = 2;
      config = new Array(2);
      adtsExtensionSampleingIndex = adtsSampleingIndex;
    }
    // Android : always use AAC
  } else if (userAgent.indexOf('android') !== -1) {
    adtsObjectType = 2;
    config = new Array(2);
    adtsExtensionSampleingIndex = adtsSampleingIndex;
  } else {
    /*  for other browsers (Chrome/Vivaldi/Opera ...)
        always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
    */
    adtsObjectType = 5;
    config = new Array(4);
    // if (manifest codec is HE-AAC or HE-AACv2) OR (manifest codec not specified AND frequency less than 24kHz)
    if (audioCodec && (audioCodec.indexOf('mp4a.40.29') !== -1 || audioCodec.indexOf('mp4a.40.5') !== -1) || !audioCodec && adtsSampleingIndex >= 6) {
      // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
      // there is a factor 2 between frame sample rate and output sample rate
      // multiply frequency by 2 (see table below, equivalent to substract 3)
      adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
    } else {
      // if (manifest codec is AAC) AND (frequency less than 24kHz AND nb channel is 1) OR (manifest codec not specified and mono audio)
      // Chrome fails to play back with low frequency AAC LC mono when initialized with HE-AAC.  This is not a problem with stereo.
      if (audioCodec && audioCodec.indexOf('mp4a.40.2') !== -1 && (adtsSampleingIndex >= 6 && adtsChanelConfig === 1 || /vivaldi/i.test(userAgent)) || !audioCodec && adtsChanelConfig === 1) {
        adtsObjectType = 2;
        config = new Array(2);
      }
      adtsExtensionSampleingIndex = adtsSampleingIndex;
    }
  }
  /* refer to http://wiki.multimedia.cx/index.php?title=MPEG-4_Audio#Audio_Specific_Config
      ISO 14496-3 (AAC).pdf - Table 1.13 — Syntax of AudioSpecificConfig()
    Audio Profile / Audio Object Type
    0: Null
    1: AAC Main
    2: AAC LC (Low Complexity)
    3: AAC SSR (Scalable Sample Rate)
    4: AAC LTP (Long Term Prediction)
    5: SBR (Spectral Band Replication)
    6: AAC Scalable
   sampling freq
    0: 96000 Hz
    1: 88200 Hz
    2: 64000 Hz
    3: 48000 Hz
    4: 44100 Hz
    5: 32000 Hz
    6: 24000 Hz
    7: 22050 Hz
    8: 16000 Hz
    9: 12000 Hz
    10: 11025 Hz
    11: 8000 Hz
    12: 7350 Hz
    13: Reserved
    14: Reserved
    15: frequency is written explictly
    Channel Configurations
    These are the channel configurations:
    0: Defined in AOT Specifc Config
    1: 1 channel: front-center
    2: 2 channels: front-left, front-right
  */
  // audioObjectType = profile => profile, the MPEG-4 Audio Object Type minus 1
  config[0] = adtsObjectType << 3;
  // samplingFrequencyIndex
  config[0] |= (adtsSampleingIndex & 0x0E) >> 1;
  config[1] |= (adtsSampleingIndex & 0x01) << 7;
  // channelConfiguration
  config[1] |= adtsChanelConfig << 3;
  if (adtsObjectType === 5) {
    // adtsExtensionSampleingIndex
    config[1] |= (adtsExtensionSampleingIndex & 0x0E) >> 1;
    config[2] = (adtsExtensionSampleingIndex & 0x01) << 7;
    // adtsObjectType (force to 2, chrome is checking that object type is less than 5 ???
    //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc
    config[2] |= 2 << 2;
    config[3] = 0;
  }
  return { config: config, samplerate: adtsSampleingRates[adtsSampleingIndex], channelCount: adtsChanelConfig, codec: 'mp4a.40.' + adtsObjectType, manifestCodec: manifestCodec };
}

function isHeaderPattern(data, offset) {
  return data[offset] === 0xff && (data[offset + 1] & 0xf6) === 0xf0;
}

function getHeaderLength(data, offset) {
  return !!(data[offset + 1] & 0x01) ? 7 : 9;
}

function getFullFrameLength(data, offset) {
  return (data[offset + 3] & 0x03) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 0xE0) >>> 5;
}

function isHeader(data, offset) {
  // Look for ADTS header | 1111 1111 | 1111 X00X | where X can be either 0 or 1
  // Layer bits (position 14 and 15) in header should be always 0 for ADTS
  // More info https://wiki.multimedia.cx/index.php?title=ADTS
  if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
    return true;
  }
  return false;
}

function adts_probe(data, offset) {
  // same as isHeader but we also check that ADTS frame follows last ADTS frame
  // or end of data is reached
  if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
    // ADTS header Length
    var headerLength = getHeaderLength(data, offset);
    // ADTS frame Length
    var frameLength = headerLength;
    if (offset + 5 < data.length) {
      frameLength = getFullFrameLength(data, offset);
    }
    var newOffset = offset + frameLength;
    if (newOffset === data.length || newOffset + 1 < data.length && isHeaderPattern(data, newOffset)) {
      return true;
    }
  }
  return false;
}

function initTrackConfig(track, observer, data, offset, audioCodec) {
  if (!track.samplerate) {
    var config = getAudioConfig(observer, data, offset, audioCodec);
    track.config = config.config;
    track.samplerate = config.samplerate;
    track.channelCount = config.channelCount;
    track.codec = config.codec;
    track.manifestCodec = config.manifestCodec;
    logger["b" /* logger */].log('parsed codec:' + track.codec + ',rate:' + config.samplerate + ',nb channel:' + config.channelCount);
  }
}

function getFrameDuration(samplerate) {
  return 1024 * 90000 / samplerate;
}

function parseFrameHeader(data, offset, pts, frameIndex, frameDuration) {
  var headerLength, frameLength, stamp;
  var length = data.length;

  // The protection skip bit tells us if we have 2 bytes of CRC data at the end of the ADTS header
  headerLength = getHeaderLength(data, offset);
  // retrieve frame size
  frameLength = getFullFrameLength(data, offset);
  frameLength -= headerLength;

  if (frameLength > 0 && offset + headerLength + frameLength <= length) {
    stamp = pts + frameIndex * frameDuration;
    //logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
    return { headerLength: headerLength, frameLength: frameLength, stamp: stamp };
  }

  return undefined;
}

function appendFrame(track, data, offset, pts, frameIndex) {
  var frameDuration = getFrameDuration(track.samplerate);
  var header = parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
  if (header) {
    var stamp = header.stamp;
    var headerLength = header.headerLength;
    var frameLength = header.frameLength;

    //logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
    var aacSample = {
      unit: data.subarray(offset + headerLength, offset + headerLength + frameLength),
      pts: stamp,
      dts: stamp
    };

    track.samples.push(aacSample);
    track.len += frameLength;

    return { sample: aacSample, length: frameLength + headerLength };
  }

  return undefined;
}
// EXTERNAL MODULE: ./src/demux/id3.js
var id3 = __webpack_require__(3);

// CONCATENATED MODULE: ./src/demux/aacdemuxer.js
function aacdemuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * AAC demuxer
 */




var aacdemuxer_AACDemuxer = function () {
  function AACDemuxer(observer, remuxer, config) {
    aacdemuxer__classCallCheck(this, AACDemuxer);

    this.observer = observer;
    this.config = config;
    this.remuxer = remuxer;
  }

  AACDemuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
    this._audioTrack = { container: 'audio/adts', type: 'audio', id: 0, sequenceNumber: 0, isAAC: true, samples: [], len: 0, manifestCodec: audioCodec, duration: duration, inputTimeScale: 90000 };
  };

  AACDemuxer.prototype.resetTimeStamp = function resetTimeStamp() {};

  AACDemuxer.probe = function probe(data) {
    // check if data contains ID3 timestamp and ADTS sync word
    var offset, length;
    var id3Data = id3["a" /* default */].getID3Data(data, 0);
    if (id3Data && id3["a" /* default */].getTimeStamp(id3Data) !== undefined) {
      // Look for ADTS header | 1111 1111 | 1111 X00X | where X can be either 0 or 1
      // Layer bits (position 14 and 15) in header should be always 0 for ADTS
      // More info https://wiki.multimedia.cx/index.php?title=ADTS
      for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) {
        if (adts_probe(data, offset)) {
          logger["b" /* logger */].log('ADTS sync word found !');
          return true;
        }
      }
    }
    return false;
  };

  // feed incoming data to the front of the parsing pipeline


  AACDemuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
    var track = this._audioTrack,
        id3Data = id3["a" /* default */].getID3Data(data, 0),
        pts = 90 * id3["a" /* default */].getTimeStamp(id3Data),
        frameIndex = 0,
        stamp = pts,
        length = data.length,
        offset = id3Data.length;

    var id3Samples = [{ pts: stamp, dts: stamp, data: id3Data }];

    while (offset < length - 1) {
      if (isHeader(data, offset) && offset + 5 < length) {
        initTrackConfig(track, this.observer, data, offset, track.manifestCodec);
        var frame = appendFrame(track, data, offset, pts, frameIndex);
        if (frame) {
          offset += frame.length;
          stamp = frame.sample.pts;
          frameIndex++;
        } else {
          logger["b" /* logger */].log('Unable to parse AAC frame');
          break;
        }
      } else if (id3["a" /* default */].isHeader(data, offset)) {
        id3Data = id3["a" /* default */].getID3Data(data, offset);
        id3Samples.push({ pts: stamp, dts: stamp, data: id3Data });
        offset += id3Data.length;
      } else {
        //nothing found, keep looking
        offset++;
      }
    }

    this.remuxer.remux(track, { samples: [] }, { samples: id3Samples, inputTimeScale: 90000 }, { samples: [] }, timeOffset, contiguous, accurateTimeOffset);
  };

  AACDemuxer.prototype.destroy = function destroy() {};

  return AACDemuxer;
}();

/* harmony default export */ var aacdemuxer = (aacdemuxer_AACDemuxer);
// CONCATENATED MODULE: ./src/demux/mp4demuxer.js
function mp4demuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * MP4 demuxer
 */
//import {logger} from '../utils/logger';


var UINT32_MAX = Math.pow(2, 32) - 1;

var mp4demuxer_MP4Demuxer = function () {
  function MP4Demuxer(observer, remuxer) {
    mp4demuxer__classCallCheck(this, MP4Demuxer);

    this.observer = observer;
    this.remuxer = remuxer;
  }

  MP4Demuxer.prototype.resetTimeStamp = function resetTimeStamp(initPTS) {
    this.initPTS = initPTS;
  };

  MP4Demuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
    //jshint unused:false
    if (initSegment && initSegment.byteLength) {
      var initData = this.initData = MP4Demuxer.parseInitSegment(initSegment);
      var tracks = {};
      if (initData.audio && initData.video) {
        tracks.audiovideo = { container: 'video/mp4', codec: audioCodec + ',' + videoCodec, initSegment: duration ? initSegment : null };
      } else {
        if (initData.audio) {
          tracks.audio = { container: 'audio/mp4', codec: audioCodec, initSegment: duration ? initSegment : null };
        }
        if (initData.video) {
          tracks.video = { container: 'video/mp4', codec: videoCodec, initSegment: duration ? initSegment : null };
        }
      }
      this.observer.trigger(events["a" /* default */].FRAG_PARSING_INIT_SEGMENT, { tracks: tracks });
    } else {
      if (audioCodec) {
        this.audioCodec = audioCodec;
      }
      if (videoCodec) {
        this.videoCodec = videoCodec;
      }
    }
  };

  MP4Demuxer.probe = function probe(data) {
    if (data.length >= 8) {
      var dataType = MP4Demuxer.bin2str(data.subarray(4, 8));
      return ['moof', 'ftyp', 'styp'].indexOf(dataType) >= 0;
    }
    return false;
  };

  MP4Demuxer.bin2str = function bin2str(buffer) {
    return String.fromCharCode.apply(null, buffer);
  };

  MP4Demuxer.readUint32 = function readUint32(buffer, offset) {
    if (buffer.data) {
      offset += buffer.start;
      buffer = buffer.data;
    }

    var val = buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
    return val < 0 ? 4294967296 + val : val;
  };

  MP4Demuxer.writeUint32 = function writeUint32(buffer, offset, value) {
    if (buffer.data) {
      offset += buffer.start;
      buffer = buffer.data;
    }
    buffer[offset] = value >> 24;
    buffer[offset + 1] = value >> 16 & 0xff;
    buffer[offset + 2] = value >> 8 & 0xff;
    buffer[offset + 3] = value & 0xff;
  };

  // Find the data for a box specified by its path


  MP4Demuxer.findBox = function findBox(data, path) {
    var results = [],
        i,
        size,
        type,
        end,
        subresults,
        start,
        endbox;

    if (data.data) {
      start = data.start;
      end = data.end;
      data = data.data;
    } else {
      start = 0;
      end = data.byteLength;
    }

    if (!path.length) {
      // short-circuit the search for empty paths
      return null;
    }

    for (i = start; i < end;) {
      size = MP4Demuxer.readUint32(data, i);
      type = MP4Demuxer.bin2str(data.subarray(i + 4, i + 8));
      endbox = size > 1 ? i + size : end;

      if (type === path[0]) {

        if (path.length === 1) {
          // this is the end of the path and we've found the box we were
          // looking for
          results.push({ data: data, start: i + 8, end: endbox });
        } else {
          // recursively search for the next box along the path
          subresults = MP4Demuxer.findBox({ data: data, start: i + 8, end: endbox }, path.slice(1));
          if (subresults.length) {
            results = results.concat(subresults);
          }
        }
      }
      i = endbox;
    }

    // we've finished searching all of data
    return results;
  };

  /**
   * Parses an MP4 initialization segment and extracts stream type and
   * timescale values for any declared tracks. Timescale values indicate the
   * number of clock ticks per second to assume for time-based values
   * elsewhere in the MP4.
   *
   * To determine the start time of an MP4, you need two pieces of
   * information: the timescale unit and the earliest base media decode
   * time. Multiple timescales can be specified within an MP4 but the
   * base media decode time is always expressed in the timescale from
   * the media header box for the track:
   * ```
   * moov > trak > mdia > mdhd.timescale
   * moov > trak > mdia > hdlr
   * ```
   * @param init {Uint8Array} the bytes of the init segment
   * @return {object} a hash of track type to timescale values or null if
   * the init segment is malformed.
   */


  MP4Demuxer.parseInitSegment = function parseInitSegment(initSegment) {
    var result = [];
    var traks = MP4Demuxer.findBox(initSegment, ['moov', 'trak']);

    traks.forEach(function (trak) {
      var tkhd = MP4Demuxer.findBox(trak, ['tkhd'])[0];
      if (tkhd) {
        var version = tkhd.data[tkhd.start];
        var index = version === 0 ? 12 : 20;
        var trackId = MP4Demuxer.readUint32(tkhd, index);

        var mdhd = MP4Demuxer.findBox(trak, ['mdia', 'mdhd'])[0];
        if (mdhd) {
          version = mdhd.data[mdhd.start];
          index = version === 0 ? 12 : 20;
          var timescale = MP4Demuxer.readUint32(mdhd, index);

          var hdlr = MP4Demuxer.findBox(trak, ['mdia', 'hdlr'])[0];
          if (hdlr) {
            var hdlrType = MP4Demuxer.bin2str(hdlr.data.subarray(hdlr.start + 8, hdlr.start + 12));
            var type = { 'soun': 'audio', 'vide': 'video' }[hdlrType];
            if (type) {
              result[trackId] = { timescale: timescale, type: type };
              result[type] = { timescale: timescale, id: trackId };
            }
          }
        }
      }
    });
    return result;
  };

  /**
   * Determine the base media decode start time, in seconds, for an MP4
   * fragment. If multiple fragments are specified, the earliest time is
   * returned.
   *
   * The base media decode time can be parsed from track fragment
   * metadata:
   * ```
   * moof > traf > tfdt.baseMediaDecodeTime
   * ```
   * It requires the timescale value from the mdhd to interpret.
   *
   * @param timescale {object} a hash of track ids to timescale values.
   * @return {number} the earliest base media decode start time for the
   * fragment, in seconds
   */


  MP4Demuxer.getStartDTS = function getStartDTS(initData, fragment) {
    var trafs, baseTimes, result;

    // we need info from two childrend of each track fragment box
    trafs = MP4Demuxer.findBox(fragment, ['moof', 'traf']);

    // determine the start times for each track
    baseTimes = [].concat.apply([], trafs.map(function (traf) {
      return MP4Demuxer.findBox(traf, ['tfhd']).map(function (tfhd) {
        var id, scale, baseTime;

        // get the track id from the tfhd
        id = MP4Demuxer.readUint32(tfhd, 4);
        // assume a 90kHz clock if no timescale was specified
        scale = initData[id].timescale || 90e3;

        // get the base media decode time from the tfdt
        baseTime = MP4Demuxer.findBox(traf, ['tfdt']).map(function (tfdt) {
          var version, result;

          version = tfdt.data[tfdt.start];
          result = MP4Demuxer.readUint32(tfdt, 4);
          if (version === 1) {
            result *= Math.pow(2, 32);

            result += MP4Demuxer.readUint32(tfdt, 8);
          }
          return result;
        })[0];
        // convert base time to seconds
        return baseTime / scale;
      });
    }));

    // return the minimum
    result = Math.min.apply(null, baseTimes);
    return isFinite(result) ? result : 0;
  };

  MP4Demuxer.offsetStartDTS = function offsetStartDTS(initData, fragment, timeOffset) {
    MP4Demuxer.findBox(fragment, ['moof', 'traf']).map(function (traf) {
      return MP4Demuxer.findBox(traf, ['tfhd']).map(function (tfhd) {
        // get the track id from the tfhd
        var id = MP4Demuxer.readUint32(tfhd, 4);
        // assume a 90kHz clock if no timescale was specified
        var timescale = initData[id].timescale || 90e3;

        // get the base media decode time from the tfdt
        MP4Demuxer.findBox(traf, ['tfdt']).map(function (tfdt) {
          var version = tfdt.data[tfdt.start];
          var baseMediaDecodeTime = MP4Demuxer.readUint32(tfdt, 4);
          if (version === 0) {
            MP4Demuxer.writeUint32(tfdt, 4, baseMediaDecodeTime - timeOffset * timescale);
          } else {
            baseMediaDecodeTime *= Math.pow(2, 32);
            baseMediaDecodeTime += MP4Demuxer.readUint32(tfdt, 8);
            baseMediaDecodeTime -= timeOffset * timescale;
            var upper = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
            var lower = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
            MP4Demuxer.writeUint32(tfdt, 4, upper);
            MP4Demuxer.writeUint32(tfdt, 8, lower);
          }
        });
      });
    });
  };

  // feed incoming data to the front of the parsing pipeline


  MP4Demuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
    var initData = this.initData;
    if (!initData) {
      this.resetInitSegment(data, this.audioCodec, this.videoCodec);
      initData = this.initData;
    }
    var startDTS = void 0,
        initPTS = this.initPTS;
    if (initPTS === undefined) {
      var _startDTS = MP4Demuxer.getStartDTS(initData, data);
      this.initPTS = initPTS = _startDTS - timeOffset;
      this.observer.trigger(events["a" /* default */].INIT_PTS_FOUND, { initPTS: initPTS });
    }
    MP4Demuxer.offsetStartDTS(initData, data, initPTS);
    startDTS = MP4Demuxer.getStartDTS(initData, data);
    this.remuxer.remux(initData.audio, initData.video, null, null, startDTS, contiguous, accurateTimeOffset, data);
  };

  MP4Demuxer.prototype.destroy = function destroy() {};

  return MP4Demuxer;
}();

/* harmony default export */ var mp4demuxer = (mp4demuxer_MP4Demuxer);
// CONCATENATED MODULE: ./src/demux/mpegaudio.js
/**
 *  MPEG parser helper
 */

var MpegAudio = {

    BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],

    SamplingRateMap: [44100, 48000, 32000, 22050, 24000, 16000, 11025, 12000, 8000],

    appendFrame: function appendFrame(track, data, offset, pts, frameIndex) {
        // Using http://www.datavoyage.com/mpgscript/mpeghdr.htm as a reference
        if (offset + 24 > data.length) {
            return undefined;
        }

        var header = this.parseHeader(data, offset);
        if (header && offset + header.frameLength <= data.length) {
            var frameDuration = 1152 * 90000 / header.sampleRate;
            var stamp = pts + frameIndex * frameDuration;
            var sample = { unit: data.subarray(offset, offset + header.frameLength), pts: stamp, dts: stamp };

            track.config = [];
            track.channelCount = header.channelCount;
            track.samplerate = header.sampleRate;
            track.samples.push(sample);
            track.len += header.frameLength;

            return { sample: sample, length: header.frameLength };
        }

        return undefined;
    },

    parseHeader: function parseHeader(data, offset) {
        var headerB = data[offset + 1] >> 3 & 3;
        var headerC = data[offset + 1] >> 1 & 3;
        var headerE = data[offset + 2] >> 4 & 15;
        var headerF = data[offset + 2] >> 2 & 3;
        var headerG = !!(data[offset + 2] & 2);
        if (headerB !== 1 && headerE !== 0 && headerE !== 15 && headerF !== 3) {
            var columnInBitrates = headerB === 3 ? 3 - headerC : headerC === 3 ? 3 : 4;
            var bitRate = MpegAudio.BitratesMap[columnInBitrates * 14 + headerE - 1] * 1000;
            var columnInSampleRates = headerB === 3 ? 0 : headerB === 2 ? 1 : 2;
            var sampleRate = MpegAudio.SamplingRateMap[columnInSampleRates * 3 + headerF];
            var padding = headerG ? 1 : 0;
            var channelCount = data[offset + 3] >> 6 === 3 ? 1 : 2; // If bits of channel mode are `11` then it is a single channel (Mono)
            var frameLength = headerC === 3 ? (headerB === 3 ? 12 : 6) * bitRate / sampleRate + padding << 2 : (headerB === 3 ? 144 : 72) * bitRate / sampleRate + padding | 0;

            return { sampleRate: sampleRate, channelCount: channelCount, frameLength: frameLength };
        }

        return undefined;
    },

    isHeaderPattern: function isHeaderPattern(data, offset) {
        return data[offset] === 0xff && (data[offset + 1] & 0xe0) === 0xe0 && (data[offset + 1] & 0x06) !== 0x00;
    },

    isHeader: function isHeader(data, offset) {
        // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
        // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
        // More info http://www.mp3-tech.org/programmer/frame_header.html
        if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
            return true;
        }
        return false;
    },

    probe: function probe(data, offset) {
        // same as isHeader but we also check that MPEG frame follows last MPEG frame
        // or end of data is reached
        if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
            // MPEG header Length
            var headerLength = 4;
            // MPEG frame Length
            var header = this.parseHeader(data, offset);
            var frameLength = headerLength;
            if (header && header.frameLength) {
                frameLength = header.frameLength;
            }
            var newOffset = offset + frameLength;
            if (newOffset === data.length || newOffset + 1 < data.length && this.isHeaderPattern(data, newOffset)) {
                return true;
            }
        }
        return false;
    }
};

/* harmony default export */ var mpegaudio = (MpegAudio);
// CONCATENATED MODULE: ./src/demux/exp-golomb.js
function exp_golomb__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
*/



var exp_golomb_ExpGolomb = function () {
  function ExpGolomb(data) {
    exp_golomb__classCallCheck(this, ExpGolomb);

    this.data = data;
    // the number of bytes left to examine in this.data
    this.bytesAvailable = data.byteLength;
    // the current word being examined
    this.word = 0; // :uint
    // the number of bits left to examine in the current word
    this.bitsAvailable = 0; // :uint
  }

  // ():void


  ExpGolomb.prototype.loadWord = function loadWord() {
    var data = this.data,
        bytesAvailable = this.bytesAvailable,
        position = data.byteLength - bytesAvailable,
        workingBytes = new Uint8Array(4),
        availableBytes = Math.min(4, bytesAvailable);
    if (availableBytes === 0) {
      throw new Error('no bytes available');
    }
    workingBytes.set(data.subarray(position, position + availableBytes));
    this.word = new DataView(workingBytes.buffer).getUint32(0);
    // track the amount of this.data that has been processed
    this.bitsAvailable = availableBytes * 8;
    this.bytesAvailable -= availableBytes;
  };

  // (count:int):void


  ExpGolomb.prototype.skipBits = function skipBits(count) {
    var skipBytes; // :int
    if (this.bitsAvailable > count) {
      this.word <<= count;
      this.bitsAvailable -= count;
    } else {
      count -= this.bitsAvailable;
      skipBytes = count >> 3;
      count -= skipBytes >> 3;
      this.bytesAvailable -= skipBytes;
      this.loadWord();
      this.word <<= count;
      this.bitsAvailable -= count;
    }
  };

  // (size:int):uint


  ExpGolomb.prototype.readBits = function readBits(size) {
    var bits = Math.min(this.bitsAvailable, size),
        // :uint
    valu = this.word >>> 32 - bits; // :uint
    if (size > 32) {
      logger["b" /* logger */].error('Cannot read more than 32 bits at a time');
    }
    this.bitsAvailable -= bits;
    if (this.bitsAvailable > 0) {
      this.word <<= bits;
    } else if (this.bytesAvailable > 0) {
      this.loadWord();
    }
    bits = size - bits;
    if (bits > 0 && this.bitsAvailable) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  };

  // ():uint


  ExpGolomb.prototype.skipLZ = function skipLZ() {
    var leadingZeroCount; // :uint
    for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
      if (0 !== (this.word & 0x80000000 >>> leadingZeroCount)) {
        // the first bit of working word is 1
        this.word <<= leadingZeroCount;
        this.bitsAvailable -= leadingZeroCount;
        return leadingZeroCount;
      }
    }
    // we exhausted word and still have not found a 1
    this.loadWord();
    return leadingZeroCount + this.skipLZ();
  };

  // ():void


  ExpGolomb.prototype.skipUEG = function skipUEG() {
    this.skipBits(1 + this.skipLZ());
  };

  // ():void


  ExpGolomb.prototype.skipEG = function skipEG() {
    this.skipBits(1 + this.skipLZ());
  };

  // ():uint


  ExpGolomb.prototype.readUEG = function readUEG() {
    var clz = this.skipLZ(); // :uint
    return this.readBits(clz + 1) - 1;
  };

  // ():int


  ExpGolomb.prototype.readEG = function readEG() {
    var valu = this.readUEG(); // :int
    if (0x01 & valu) {
      // the number is odd if the low order bit is set
      return 1 + valu >>> 1; // add 1 to make it even, and divide by 2
    } else {
      return -1 * (valu >>> 1); // divide by two then make it negative
    }
  };

  // Some convenience functions
  // :Boolean


  ExpGolomb.prototype.readBoolean = function readBoolean() {
    return 1 === this.readBits(1);
  };

  // ():int


  ExpGolomb.prototype.readUByte = function readUByte() {
    return this.readBits(8);
  };

  // ():int


  ExpGolomb.prototype.readUShort = function readUShort() {
    return this.readBits(16);
  };
  // ():int


  ExpGolomb.prototype.readUInt = function readUInt() {
    return this.readBits(32);
  };

  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count {number} the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */


  ExpGolomb.prototype.skipScalingList = function skipScalingList(count) {
    var lastScale = 8,
        nextScale = 8,
        j,
        deltaScale;
    for (j = 0; j < count; j++) {
      if (nextScale !== 0) {
        deltaScale = this.readEG();
        nextScale = (lastScale + deltaScale + 256) % 256;
      }
      lastScale = nextScale === 0 ? lastScale : nextScale;
    }
  };

  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @param data {Uint8Array} the bytes of a sequence parameter set
   * @return {object} an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */


  ExpGolomb.prototype.readSPS = function readSPS() {
    var frameCropLeftOffset = 0,
        frameCropRightOffset = 0,
        frameCropTopOffset = 0,
        frameCropBottomOffset = 0,
        profileIdc,
        profileCompat,
        levelIdc,
        numRefFramesInPicOrderCntCycle,
        picWidthInMbsMinus1,
        picHeightInMapUnitsMinus1,
        frameMbsOnlyFlag,
        scalingListCount,
        i,
        readUByte = this.readUByte.bind(this),
        readBits = this.readBits.bind(this),
        readUEG = this.readUEG.bind(this),
        readBoolean = this.readBoolean.bind(this),
        skipBits = this.skipBits.bind(this),
        skipEG = this.skipEG.bind(this),
        skipUEG = this.skipUEG.bind(this),
        skipScalingList = this.skipScalingList.bind(this);

    readUByte();
    profileIdc = readUByte(); // profile_idc
    profileCompat = readBits(5); // constraint_set[0-4]_flag, u(5)
    skipBits(3); // reserved_zero_3bits u(3),
    levelIdc = readUByte(); //level_idc u(8)
    skipUEG(); // seq_parameter_set_id
    // some profiles have more optional data we don't need
    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128) {
      var chromaFormatIdc = readUEG();
      if (chromaFormatIdc === 3) {
        skipBits(1); // separate_colour_plane_flag
      }
      skipUEG(); // bit_depth_luma_minus8
      skipUEG(); // bit_depth_chroma_minus8
      skipBits(1); // qpprime_y_zero_transform_bypass_flag
      if (readBoolean()) {
        // seq_scaling_matrix_present_flag
        scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
        for (i = 0; i < scalingListCount; i++) {
          if (readBoolean()) {
            // seq_scaling_list_present_flag[ i ]
            if (i < 6) {
              skipScalingList(16);
            } else {
              skipScalingList(64);
            }
          }
        }
      }
    }
    skipUEG(); // log2_max_frame_num_minus4
    var picOrderCntType = readUEG();
    if (picOrderCntType === 0) {
      readUEG(); //log2_max_pic_order_cnt_lsb_minus4
    } else if (picOrderCntType === 1) {
      skipBits(1); // delta_pic_order_always_zero_flag
      skipEG(); // offset_for_non_ref_pic
      skipEG(); // offset_for_top_to_bottom_field
      numRefFramesInPicOrderCntCycle = readUEG();
      for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
        skipEG(); // offset_for_ref_frame[ i ]
      }
    }
    skipUEG(); // max_num_ref_frames
    skipBits(1); // gaps_in_frame_num_value_allowed_flag
    picWidthInMbsMinus1 = readUEG();
    picHeightInMapUnitsMinus1 = readUEG();
    frameMbsOnlyFlag = readBits(1);
    if (frameMbsOnlyFlag === 0) {
      skipBits(1); // mb_adaptive_frame_field_flag
    }
    skipBits(1); // direct_8x8_inference_flag
    if (readBoolean()) {
      // frame_cropping_flag
      frameCropLeftOffset = readUEG();
      frameCropRightOffset = readUEG();
      frameCropTopOffset = readUEG();
      frameCropBottomOffset = readUEG();
    }
    var pixelRatio = [1, 1];
    if (readBoolean()) {
      // vui_parameters_present_flag
      if (readBoolean()) {
        // aspect_ratio_info_present_flag
        var aspectRatioIdc = readUByte();
        switch (aspectRatioIdc) {
          case 1:
            pixelRatio = [1, 1];break;
          case 2:
            pixelRatio = [12, 11];break;
          case 3:
            pixelRatio = [10, 11];break;
          case 4:
            pixelRatio = [16, 11];break;
          case 5:
            pixelRatio = [40, 33];break;
          case 6:
            pixelRatio = [24, 11];break;
          case 7:
            pixelRatio = [20, 11];break;
          case 8:
            pixelRatio = [32, 11];break;
          case 9:
            pixelRatio = [80, 33];break;
          case 10:
            pixelRatio = [18, 11];break;
          case 11:
            pixelRatio = [15, 11];break;
          case 12:
            pixelRatio = [64, 33];break;
          case 13:
            pixelRatio = [160, 99];break;
          case 14:
            pixelRatio = [4, 3];break;
          case 15:
            pixelRatio = [3, 2];break;
          case 16:
            pixelRatio = [2, 1];break;
          case 255:
            {
              pixelRatio = [readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte()];
              break;
            }
        }
      }
    }
    return {
      width: Math.ceil((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2),
      height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
      pixelRatio: pixelRatio
    };
  };

  ExpGolomb.prototype.readSliceType = function readSliceType() {
    // skip NALu type
    this.readUByte();
    // discard first_mb_in_slice
    this.readUEG();
    // return slice_type
    return this.readUEG();
  };

  return ExpGolomb;
}();

/* harmony default export */ var exp_golomb = (exp_golomb_ExpGolomb);
// CONCATENATED MODULE: ./src/demux/sample-aes.js
function sample_aes__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SAMPLE-AES decrypter
*/



var sample_aes_SampleAesDecrypter = function () {
  function SampleAesDecrypter(observer, config, decryptdata, discardEPB) {
    sample_aes__classCallCheck(this, SampleAesDecrypter);

    this.decryptdata = decryptdata;
    this.discardEPB = discardEPB;
    this.decrypter = new crypt_decrypter(observer, config);
  }

  SampleAesDecrypter.prototype.decryptBuffer = function decryptBuffer(encryptedData, callback) {
    this.decrypter.decrypt(encryptedData, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, callback);
  };

  // AAC - encrypt all full 16 bytes blocks starting from offset 16


  SampleAesDecrypter.prototype.decryptAacSample = function decryptAacSample(samples, sampleIndex, callback, sync) {
    var curUnit = samples[sampleIndex].unit;
    var encryptedData = curUnit.subarray(16, curUnit.length - curUnit.length % 16);
    var encryptedBuffer = encryptedData.buffer.slice(encryptedData.byteOffset, encryptedData.byteOffset + encryptedData.length);

    var localthis = this;
    this.decryptBuffer(encryptedBuffer, function (decryptedData) {
      decryptedData = new Uint8Array(decryptedData);
      curUnit.set(decryptedData, 16);

      if (!sync) {
        localthis.decryptAacSamples(samples, sampleIndex + 1, callback);
      }
    });
  };

  SampleAesDecrypter.prototype.decryptAacSamples = function decryptAacSamples(samples, sampleIndex, callback) {
    for (;; sampleIndex++) {
      if (sampleIndex >= samples.length) {
        callback();
        return;
      }

      if (samples[sampleIndex].unit.length < 32) {
        continue;
      }

      var sync = this.decrypter.isSync();

      this.decryptAacSample(samples, sampleIndex, callback, sync);

      if (!sync) {
        return;
      }
    }
  };

  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32


  SampleAesDecrypter.prototype.getAvcEncryptedData = function getAvcEncryptedData(decodedData) {
    var encryptedDataLen = Math.floor((decodedData.length - 48) / 160) * 16 + 16;
    var encryptedData = new Int8Array(encryptedDataLen);
    var outputPos = 0;
    for (var inputPos = 32; inputPos <= decodedData.length - 16; inputPos += 160, outputPos += 16) {
      encryptedData.set(decodedData.subarray(inputPos, inputPos + 16), outputPos);
    }
    return encryptedData;
  };

  SampleAesDecrypter.prototype.getAvcDecryptedUnit = function getAvcDecryptedUnit(decodedData, decryptedData) {
    decryptedData = new Uint8Array(decryptedData);
    var inputPos = 0;
    for (var outputPos = 32; outputPos <= decodedData.length - 16; outputPos += 160, inputPos += 16) {
      decodedData.set(decryptedData.subarray(inputPos, inputPos + 16), outputPos);
    }
    return decodedData;
  };

  SampleAesDecrypter.prototype.decryptAvcSample = function decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync) {
    var decodedData = this.discardEPB(curUnit.data);
    var encryptedData = this.getAvcEncryptedData(decodedData);
    var localthis = this;

    this.decryptBuffer(encryptedData.buffer, function (decryptedData) {
      curUnit.data = localthis.getAvcDecryptedUnit(decodedData, decryptedData);

      if (!sync) {
        localthis.decryptAvcSamples(samples, sampleIndex, unitIndex + 1, callback);
      }
    });
  };

  SampleAesDecrypter.prototype.decryptAvcSamples = function decryptAvcSamples(samples, sampleIndex, unitIndex, callback) {
    for (;; sampleIndex++, unitIndex = 0) {
      if (sampleIndex >= samples.length) {
        callback();
        return;
      }

      var curUnits = samples[sampleIndex].units;
      for (;; unitIndex++) {
        if (unitIndex >= curUnits.length) {
          break;
        }

        var curUnit = curUnits[unitIndex];
        if (curUnit.length <= 48 || curUnit.type !== 1 && curUnit.type !== 5) {
          continue;
        }

        var sync = this.decrypter.isSync();

        this.decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync);

        if (!sync) {
          return;
        }
      }
    }
  };

  return SampleAesDecrypter;
}();

/* harmony default export */ var sample_aes = (sample_aes_SampleAesDecrypter);
// CONCATENATED MODULE: ./src/demux/tsdemuxer.js
function tsdemuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * highly optimized TS demuxer:
 * parse PAT, PMT
 * extract PES packet from audio and video PIDs
 * extract AVC/H264 NAL units and AAC/ADTS samples from PES packet
 * trigger the remuxer upon parsing completion
 * it also tries to workaround as best as it can audio codec switch (HE-AAC to AAC and vice versa), without having to restart the MediaSource.
 * it also controls the remuxing process :
 * upon discontinuity or level switch detection, it will also notifies the remuxer so that it can reset its state.
*/






// import Hex from '../utils/hex';



var tsdemuxer_TSDemuxer = function () {
  function TSDemuxer(observer, remuxer, config, typeSupported) {
    tsdemuxer__classCallCheck(this, TSDemuxer);

    this.observer = observer;
    this.config = config;
    this.typeSupported = typeSupported;
    this.remuxer = remuxer;
    this.sampleAes = null;
  }

  TSDemuxer.prototype.setDecryptData = function setDecryptData(decryptdata) {
    if (decryptdata != null && decryptdata.key != null && decryptdata.method === 'SAMPLE-AES') {
      this.sampleAes = new sample_aes(this.observer, this.config, decryptdata, this.discardEPB);
    } else {
      this.sampleAes = null;
    }
  };

  TSDemuxer.probe = function probe(data) {
    // a TS fragment should contain at least 3 TS packets, a PAT, a PMT, and one PID, each starting with 0x47
    if (data.length >= 3 * 188 && data[0] === 0x47 && data[188] === 0x47 && data[2 * 188] === 0x47) {
      return true;
    } else {
      return false;
    }
  };

  TSDemuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
    this.pmtParsed = false;
    this._pmtId = -1;
    this._avcTrack = { container: 'video/mp2t', type: 'video', id: -1, inputTimeScale: 90000, sequenceNumber: 0, samples: [], len: 0, dropped: 0 };
    this._audioTrack = { container: 'video/mp2t', type: 'audio', id: -1, inputTimeScale: 90000, duration: duration, sequenceNumber: 0, samples: [], len: 0, isAAC: true };
    this._id3Track = { type: 'id3', id: -1, inputTimeScale: 90000, sequenceNumber: 0, samples: [], len: 0 };
    this._txtTrack = { type: 'text', id: -1, inputTimeScale: 90000, sequenceNumber: 0, samples: [], len: 0 };
    // flush any partial content
    this.aacOverFlow = null;
    this.aacLastPTS = null;
    this.avcSample = null;
    this.audioCodec = audioCodec;
    this.videoCodec = videoCodec;
    this._duration = duration;
  };

  TSDemuxer.prototype.resetTimeStamp = function resetTimeStamp() {};

  // feed incoming data to the front of the parsing pipeline


  TSDemuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
    var start,
        len = data.length,
        stt,
        pid,
        atf,
        offset,
        pes,
        unknownPIDs = false;
    this.contiguous = contiguous;
    var pmtParsed = this.pmtParsed,
        avcTrack = this._avcTrack,
        audioTrack = this._audioTrack,
        id3Track = this._id3Track,
        avcId = avcTrack.id,
        audioId = audioTrack.id,
        id3Id = id3Track.id,
        pmtId = this._pmtId,
        avcData = avcTrack.pesData,
        audioData = audioTrack.pesData,
        id3Data = id3Track.pesData,
        parsePAT = this._parsePAT,
        parsePMT = this._parsePMT,
        parsePES = this._parsePES,
        parseAVCPES = this._parseAVCPES.bind(this),
        parseAACPES = this._parseAACPES.bind(this),
        parseMPEGPES = this._parseMPEGPES.bind(this),
        parseID3PES = this._parseID3PES.bind(this);

    // don't parse last TS packet if incomplete
    len -= len % 188;
    // loop through TS packets
    for (start = 0; start < len; start += 188) {
      if (data[start] === 0x47) {
        stt = !!(data[start + 1] & 0x40);
        // pid is a 13-bit field starting at the last bit of TS[1]
        pid = ((data[start + 1] & 0x1f) << 8) + data[start + 2];
        atf = (data[start + 3] & 0x30) >> 4;
        // if an adaption field is present, its length is specified by the fifth byte of the TS packet header.
        if (atf > 1) {
          offset = start + 5 + data[start + 4];
          // continue if there is only adaptation field
          if (offset === start + 188) {
            continue;
          }
        } else {
          offset = start + 4;
        }
        switch (pid) {
          case avcId:
            if (stt) {
              if (avcData && (pes = parsePES(avcData))) {
                parseAVCPES(pes, false);
              }
              avcData = { data: [], size: 0 };
            }
            if (avcData) {
              avcData.data.push(data.subarray(offset, start + 188));
              avcData.size += start + 188 - offset;
            }
            break;
          case audioId:
            if (stt) {
              if (audioData && (pes = parsePES(audioData))) {
                if (audioTrack.isAAC) {
                  parseAACPES(pes);
                } else {
                  parseMPEGPES(pes);
                }
              }
              audioData = { data: [], size: 0 };
            }
            if (audioData) {
              audioData.data.push(data.subarray(offset, start + 188));
              audioData.size += start + 188 - offset;
            }
            break;
          case id3Id:
            if (stt) {
              if (id3Data && (pes = parsePES(id3Data))) {
                parseID3PES(pes);
              }
              id3Data = { data: [], size: 0 };
            }
            if (id3Data) {
              id3Data.data.push(data.subarray(offset, start + 188));
              id3Data.size += start + 188 - offset;
            }
            break;
          case 0:
            if (stt) {
              offset += data[offset] + 1;
            }
            pmtId = this._pmtId = parsePAT(data, offset);
            break;
          case pmtId:
            if (stt) {
              offset += data[offset] + 1;
            }
            var parsedPIDs = parsePMT(data, offset, this.typeSupported.mpeg === true || this.typeSupported.mp3 === true, this.sampleAes != null);

            // only update track id if track PID found while parsing PMT
            // this is to avoid resetting the PID to -1 in case
            // track PID transiently disappears from the stream
            // this could happen in case of transient missing audio samples for example
            avcId = parsedPIDs.avc;
            if (avcId > 0) {
              avcTrack.id = avcId;
            }
            audioId = parsedPIDs.audio;
            if (audioId > 0) {
              audioTrack.id = audioId;
              audioTrack.isAAC = parsedPIDs.isAAC;
            }
            id3Id = parsedPIDs.id3;
            if (id3Id > 0) {
              id3Track.id = id3Id;
            }
            if (unknownPIDs && !pmtParsed) {
              logger["b" /* logger */].log('reparse from beginning');
              unknownPIDs = false;
              // we set it to -188, the += 188 in the for loop will reset start to 0
              start = -188;
            }
            pmtParsed = this.pmtParsed = true;
            break;
          case 17:
          case 0x1fff:
            break;
          default:
            unknownPIDs = true;
            break;
        }
      } else {
        this.observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_PARSING_ERROR, fatal: false, reason: 'TS packet did not start with 0x47' });
      }
    }
    // try to parse last PES packets
    if (avcData && (pes = parsePES(avcData))) {
      parseAVCPES(pes, true);
      avcTrack.pesData = null;
    } else {
      // either avcData null or PES truncated, keep it for next frag parsing
      avcTrack.pesData = avcData;
    }

    if (audioData && (pes = parsePES(audioData))) {
      if (audioTrack.isAAC) {
        parseAACPES(pes);
      } else {
        parseMPEGPES(pes);
      }
      audioTrack.pesData = null;
    } else {
      if (audioData && audioData.size) {
        logger["b" /* logger */].log('last AAC PES packet truncated,might overlap between fragments');
      }
      // either audioData null or PES truncated, keep it for next frag parsing
      audioTrack.pesData = audioData;
    }

    if (id3Data && (pes = parsePES(id3Data))) {
      parseID3PES(pes);
      id3Track.pesData = null;
    } else {
      // either id3Data null or PES truncated, keep it for next frag parsing
      id3Track.pesData = id3Data;
    }

    if (this.sampleAes == null) {
      this.remuxer.remux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
    } else {
      this.decryptAndRemux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
    }
  };

  TSDemuxer.prototype.decryptAndRemux = function decryptAndRemux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
    if (audioTrack.samples && audioTrack.isAAC) {
      var localthis = this;
      this.sampleAes.decryptAacSamples(audioTrack.samples, 0, function () {
        localthis.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
      });
    } else {
      this.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
    }
  };

  TSDemuxer.prototype.decryptAndRemuxAvc = function decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
    if (videoTrack.samples) {
      var localthis = this;
      this.sampleAes.decryptAvcSamples(videoTrack.samples, 0, 0, function () {
        localthis.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
      });
    } else {
      this.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
    }
  };

  TSDemuxer.prototype.destroy = function destroy() {
    this._initPTS = this._initDTS = undefined;
    this._duration = 0;
  };

  TSDemuxer.prototype._parsePAT = function _parsePAT(data, offset) {
    // skip the PSI header and parse the first PMT entry
    return (data[offset + 10] & 0x1F) << 8 | data[offset + 11];
    //logger.log('PMT PID:'  + this._pmtId);
  };

  TSDemuxer.prototype._parsePMT = function _parsePMT(data, offset, mpegSupported, isSampleAes) {
    var sectionLength,
        tableEnd,
        programInfoLength,
        pid,
        result = { audio: -1, avc: -1, id3: -1, isAAC: true };
    sectionLength = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
    tableEnd = offset + 3 + sectionLength - 4;
    // to determine where the table is, we have to figure out how
    // long the program info descriptors are
    programInfoLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
    // advance the offset to the first entry in the mapping table
    offset += 12 + programInfoLength;
    while (offset < tableEnd) {
      pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];
      switch (data[offset]) {
        case 0xcf:
          // SAMPLE-AES AAC
          if (!isSampleAes) {
            logger["b" /* logger */].log('unkown stream type:' + data[offset]);
            break;
          }
        /* falls through */

        // ISO/IEC 13818-7 ADTS AAC (MPEG-2 lower bit-rate audio)
        case 0x0f:
          //logger.log('AAC PID:'  + pid);
          if (result.audio === -1) {
            result.audio = pid;
          }
          break;

        // Packetized metadata (ID3)
        case 0x15:
          //logger.log('ID3 PID:'  + pid);
          if (result.id3 === -1) {
            result.id3 = pid;
          }
          break;

        case 0xdb:
          // SAMPLE-AES AVC
          if (!isSampleAes) {
            logger["b" /* logger */].log('unkown stream type:' + data[offset]);
            break;
          }
        /* falls through */

        // ITU-T Rec. H.264 and ISO/IEC 14496-10 (lower bit-rate video)
        case 0x1b:
          //logger.log('AVC PID:'  + pid);
          if (result.avc === -1) {
            result.avc = pid;
          }
          break;

        // ISO/IEC 11172-3 (MPEG-1 audio)
        // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
        case 0x03:
        case 0x04:
          //logger.log('MPEG PID:'  + pid);
          if (!mpegSupported) {
            logger["b" /* logger */].log('MPEG audio found, not supported in this browser for now');
          } else if (result.audio === -1) {
            result.audio = pid;
            result.isAAC = false;
          }
          break;

        case 0x24:
          logger["b" /* logger */].warn('HEVC stream type found, not supported for now');
          break;

        default:
          logger["b" /* logger */].log('unkown stream type:' + data[offset]);
          break;
      }
      // move to the next table entry
      // skip past the elementary stream descriptors, if present
      offset += ((data[offset + 3] & 0x0F) << 8 | data[offset + 4]) + 5;
    }
    return result;
  };

  TSDemuxer.prototype._parsePES = function _parsePES(stream) {
    var i = 0,
        frag,
        pesFlags,
        pesPrefix,
        pesLen,
        pesHdrLen,
        pesData,
        pesPts,
        pesDts,
        payloadStartOffset,
        data = stream.data;
    // safety check
    if (!stream || stream.size === 0) {
      return null;
    }

    // we might need up to 19 bytes to read PES header
    // if first chunk of data is less than 19 bytes, let's merge it with following ones until we get 19 bytes
    // usually only one merge is needed (and this is rare ...)
    while (data[0].length < 19 && data.length > 1) {
      var newData = new Uint8Array(data[0].length + data[1].length);
      newData.set(data[0]);
      newData.set(data[1], data[0].length);
      data[0] = newData;
      data.splice(1, 1);
    }
    //retrieve PTS/DTS from first fragment
    frag = data[0];
    pesPrefix = (frag[0] << 16) + (frag[1] << 8) + frag[2];
    if (pesPrefix === 1) {
      pesLen = (frag[4] << 8) + frag[5];
      // if PES parsed length is not zero and greater than total received length, stop parsing. PES might be truncated
      // minus 6 : PES header size
      if (pesLen && pesLen > stream.size - 6) {
        return null;
      }
      pesFlags = frag[7];
      if (pesFlags & 0xC0) {
        /* PES header described here : http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
            as PTS / DTS is 33 bit we cannot use bitwise operator in JS,
            as Bitwise operators treat their operands as a sequence of 32 bits */
        pesPts = (frag[9] & 0x0E) * 536870912 + // 1 << 29
        (frag[10] & 0xFF) * 4194304 + // 1 << 22
        (frag[11] & 0xFE) * 16384 + // 1 << 14
        (frag[12] & 0xFF) * 128 + // 1 << 7
        (frag[13] & 0xFE) / 2;
        // check if greater than 2^32 -1
        if (pesPts > 4294967295) {
          // decrement 2^33
          pesPts -= 8589934592;
        }
        if (pesFlags & 0x40) {
          pesDts = (frag[14] & 0x0E) * 536870912 + // 1 << 29
          (frag[15] & 0xFF) * 4194304 + // 1 << 22
          (frag[16] & 0xFE) * 16384 + // 1 << 14
          (frag[17] & 0xFF) * 128 + // 1 << 7
          (frag[18] & 0xFE) / 2;
          // check if greater than 2^32 -1
          if (pesDts > 4294967295) {
            // decrement 2^33
            pesDts -= 8589934592;
          }
          if (pesPts - pesDts > 60 * 90000) {
            logger["b" /* logger */].warn(Math.round((pesPts - pesDts) / 90000) + 's delta between PTS and DTS, align them');
            pesPts = pesDts;
          }
        } else {
          pesDts = pesPts;
        }
      }
      pesHdrLen = frag[8];
      // 9 bytes : 6 bytes for PES header + 3 bytes for PES extension
      payloadStartOffset = pesHdrLen + 9;

      stream.size -= payloadStartOffset;
      //reassemble PES packet
      pesData = new Uint8Array(stream.size);
      for (var j = 0, dataLen = data.length; j < dataLen; j++) {
        frag = data[j];
        var len = frag.byteLength;
        if (payloadStartOffset) {
          if (payloadStartOffset > len) {
            // trim full frag if PES header bigger than frag
            payloadStartOffset -= len;
            continue;
          } else {
            // trim partial frag if PES header smaller than frag
            frag = frag.subarray(payloadStartOffset);
            len -= payloadStartOffset;
            payloadStartOffset = 0;
          }
        }
        pesData.set(frag, i);
        i += len;
      }
      if (pesLen) {
        // payload size : remove PES header + PES extension
        pesLen -= pesHdrLen + 3;
      }
      return { data: pesData, pts: pesPts, dts: pesDts, len: pesLen };
    } else {
      return null;
    }
  };

  TSDemuxer.prototype.pushAccesUnit = function pushAccesUnit(avcSample, avcTrack) {
    if (avcSample.units.length && avcSample.frame) {
      var samples = avcTrack.samples;
      var nbSamples = samples.length;
      // only push AVC sample if starting with a keyframe is not mandatory OR
      //    if keyframe already found in this fragment OR
      //       keyframe found in last fragment (track.sps) AND
      //          samples already appended (we already found a keyframe in this fragment) OR fragment is contiguous
      if (!this.config.forceKeyFrameOnDiscontinuity || avcSample.key === true || avcTrack.sps && (nbSamples || this.contiguous)) {
        avcSample.id = nbSamples;
        samples.push(avcSample);
      } else {
        // dropped samples, track it
        avcTrack.dropped++;
      }
    }
    if (avcSample.debug.length) {
      logger["b" /* logger */].log(avcSample.pts + '/' + avcSample.dts + ':' + avcSample.debug);
    }
  };

  TSDemuxer.prototype._parseAVCPES = function _parseAVCPES(pes, last) {
    var _this = this;

    //logger.log('parse new PES');
    var track = this._avcTrack,
        units = this._parseAVCNALu(pes.data),
        debug = false,
        expGolombDecoder,
        avcSample = this.avcSample,
        push,
        spsfound = false,
        i,
        pushAccesUnit = this.pushAccesUnit.bind(this),
        createAVCSample = function createAVCSample(key, pts, dts, debug) {
      return { key: key, pts: pts, dts: dts, units: [], debug: debug };
    };
    //free pes.data to save up some memory
    pes.data = null;

    // if new NAL units found and last sample still there, let's push ...
    // this helps parsing streams with missing AUD (only do this if AUD never found)
    if (avcSample && units.length && !track.audFound) {
      pushAccesUnit(avcSample, track);
      avcSample = this.avcSample = createAVCSample(false, pes.pts, pes.dts, '');
    }

    units.forEach(function (unit) {
      switch (unit.type) {
        //NDR
        case 1:
          push = true;
          if (!avcSample) {
            avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
          }
          if (debug) {
            avcSample.debug += 'NDR ';
          }
          avcSample.frame = true;
          var data = unit.data;
          // only check slice type to detect KF in case SPS found in same packet (any keyframe is preceded by SPS ...)
          if (spsfound && data.length > 4) {
            // retrieve slice type by parsing beginning of NAL unit (follow H264 spec, slice_header definition) to detect keyframe embedded in NDR
            var sliceType = new exp_golomb(data).readSliceType();
            // 2 : I slice, 4 : SI slice, 7 : I slice, 9: SI slice
            // SI slice : A slice that is coded using intra prediction only and using quantisation of the prediction samples.
            // An SI slice can be coded such that its decoded samples can be constructed identically to an SP slice.
            // I slice: A slice that is not an SI slice that is decoded using intra prediction only.
            //if (sliceType === 2 || sliceType === 7) {
            if (sliceType === 2 || sliceType === 4 || sliceType === 7 || sliceType === 9) {
              avcSample.key = true;
            }
          }
          break;
        //IDR
        case 5:
          push = true;
          // handle PES not starting with AUD
          if (!avcSample) {
            avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
          }
          if (debug) {
            avcSample.debug += 'IDR ';
          }
          avcSample.key = true;
          avcSample.frame = true;
          break;
        //SEI
        case 6:
          push = true;
          if (debug && avcSample) {
            avcSample.debug += 'SEI ';
          }
          expGolombDecoder = new exp_golomb(_this.discardEPB(unit.data));

          // skip frameType
          expGolombDecoder.readUByte();

          var payloadType = 0;
          var payloadSize = 0;
          var endOfCaptions = false;
          var b = 0;

          while (!endOfCaptions && expGolombDecoder.bytesAvailable > 1) {
            payloadType = 0;
            do {
              b = expGolombDecoder.readUByte();
              payloadType += b;
            } while (b === 0xFF);

            // Parse payload size.
            payloadSize = 0;
            do {
              b = expGolombDecoder.readUByte();
              payloadSize += b;
            } while (b === 0xFF);

            // TODO: there can be more than one payload in an SEI packet...
            // TODO: need to read type and size in a while loop to get them all
            if (payloadType === 4 && expGolombDecoder.bytesAvailable !== 0) {

              endOfCaptions = true;

              var countryCode = expGolombDecoder.readUByte();

              if (countryCode === 181) {
                var providerCode = expGolombDecoder.readUShort();

                if (providerCode === 49) {
                  var userStructure = expGolombDecoder.readUInt();

                  if (userStructure === 0x47413934) {
                    var userDataType = expGolombDecoder.readUByte();

                    // Raw CEA-608 bytes wrapped in CEA-708 packet
                    if (userDataType === 3) {
                      var firstByte = expGolombDecoder.readUByte();
                      var secondByte = expGolombDecoder.readUByte();

                      var totalCCs = 31 & firstByte;
                      var byteArray = [firstByte, secondByte];

                      for (i = 0; i < totalCCs; i++) {
                        // 3 bytes per CC
                        byteArray.push(expGolombDecoder.readUByte());
                        byteArray.push(expGolombDecoder.readUByte());
                        byteArray.push(expGolombDecoder.readUByte());
                      }

                      _this._insertSampleInOrder(_this._txtTrack.samples, { type: 3, pts: pes.pts, bytes: byteArray });
                    }
                  }
                }
              }
            } else if (payloadSize < expGolombDecoder.bytesAvailable) {
              for (i = 0; i < payloadSize; i++) {
                expGolombDecoder.readUByte();
              }
            }
          }
          break;
        //SPS
        case 7:
          push = true;
          spsfound = true;
          if (debug && avcSample) {
            avcSample.debug += 'SPS ';
          }
          if (!track.sps) {
            expGolombDecoder = new exp_golomb(unit.data);
            var config = expGolombDecoder.readSPS();
            track.width = config.width;
            track.height = config.height;
            track.pixelRatio = config.pixelRatio;
            track.sps = [unit.data];
            track.duration = _this._duration;
            var codecarray = unit.data.subarray(1, 4);
            var codecstring = 'avc1.';
            for (i = 0; i < 3; i++) {
              var h = codecarray[i].toString(16);
              if (h.length < 2) {
                h = '0' + h;
              }
              codecstring += h;
            }
            track.codec = codecstring;
          }
          break;
        //PPS
        case 8:
          push = true;
          if (debug && avcSample) {
            avcSample.debug += 'PPS ';
          }
          if (!track.pps) {
            track.pps = [unit.data];
          }
          break;
        // AUD
        case 9:
          push = false;
          track.audFound = true;
          if (avcSample) {
            pushAccesUnit(avcSample, track);
          }
          avcSample = _this.avcSample = createAVCSample(false, pes.pts, pes.dts, debug ? 'AUD ' : '');
          break;
        // Filler Data
        case 12:
          push = false;
          break;
        default:
          push = false;
          if (avcSample) {
            avcSample.debug += 'unknown NAL ' + unit.type + ' ';
          }
          break;
      }
      if (avcSample && push) {
        var _units = avcSample.units;
        _units.push(unit);
      }
    });
    // if last PES packet, push samples
    if (last && avcSample) {
      pushAccesUnit(avcSample, track);
      this.avcSample = null;
    }
  };

  TSDemuxer.prototype._insertSampleInOrder = function _insertSampleInOrder(arr, data) {
    var len = arr.length;
    if (len > 0) {
      if (data.pts >= arr[len - 1].pts) {
        arr.push(data);
      } else {
        for (var pos = len - 1; pos >= 0; pos--) {
          if (data.pts < arr[pos].pts) {
            arr.splice(pos, 0, data);
            break;
          }
        }
      }
    } else {
      arr.push(data);
    }
  };

  TSDemuxer.prototype._getLastNalUnit = function _getLastNalUnit() {
    var avcSample = this.avcSample,
        lastUnit = void 0;
    // try to fallback to previous sample if current one is empty
    if (!avcSample || avcSample.units.length === 0) {
      var track = this._avcTrack,
          samples = track.samples;
      avcSample = samples[samples.length - 1];
    }
    if (avcSample) {
      var units = avcSample.units;
      lastUnit = units[units.length - 1];
    }
    return lastUnit;
  };

  TSDemuxer.prototype._parseAVCNALu = function _parseAVCNALu(array) {
    var i = 0,
        len = array.byteLength,
        value,
        overflow,
        track = this._avcTrack,
        state = track.naluState || 0,
        lastState = state;
    var units = [],
        unit,
        unitType,
        lastUnitStart = -1,
        lastUnitType;
    //logger.log('PES:' + Hex.hexDump(array));

    if (state === -1) {
      // special use case where we found 3 or 4-byte start codes exactly at the end of previous PES packet
      lastUnitStart = 0;
      // NALu type is value read from offset 0
      lastUnitType = array[0] & 0x1f;
      state = 0;
      i = 1;
    }

    while (i < len) {
      value = array[i++];
      // optimization. state 0 and 1 are the predominant case. let's handle them outside of the switch/case
      if (!state) {
        state = value ? 0 : 1;
        continue;
      }
      if (state === 1) {
        state = value ? 0 : 2;
        continue;
      }
      // here we have state either equal to 2 or 3
      if (!value) {
        state = 3;
      } else if (value === 1) {
        if (lastUnitStart >= 0) {
          unit = { data: array.subarray(lastUnitStart, i - state - 1), type: lastUnitType };
          //logger.log('pushing NALU, type/size:' + unit.type + '/' + unit.data.byteLength);
          units.push(unit);
        } else {
          // lastUnitStart is undefined => this is the first start code found in this PES packet
          // first check if start code delimiter is overlapping between 2 PES packets,
          // ie it started in last packet (lastState not zero)
          // and ended at the beginning of this PES packet (i <= 4 - lastState)
          var lastUnit = this._getLastNalUnit();
          if (lastUnit) {
            if (lastState && i <= 4 - lastState) {
              // start delimiter overlapping between PES packets
              // strip start delimiter bytes from the end of last NAL unit
              // check if lastUnit had a state different from zero
              if (lastUnit.state) {
                // strip last bytes
                lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState);
              }
            }
            // If NAL units are not starting right at the beginning of the PES packet, push preceding data into previous NAL unit.
            overflow = i - state - 1;
            if (overflow > 0) {
              //logger.log('first NALU found with overflow:' + overflow);
              var tmp = new Uint8Array(lastUnit.data.byteLength + overflow);
              tmp.set(lastUnit.data, 0);
              tmp.set(array.subarray(0, overflow), lastUnit.data.byteLength);
              lastUnit.data = tmp;
            }
          }
        }
        // check if we can read unit type
        if (i < len) {
          unitType = array[i] & 0x1f;
          //logger.log('find NALU @ offset:' + i + ',type:' + unitType);
          lastUnitStart = i;
          lastUnitType = unitType;
          state = 0;
        } else {
          // not enough byte to read unit type. let's read it on next PES parsing
          state = -1;
        }
      } else {
        state = 0;
      }
    }
    if (lastUnitStart >= 0 && state >= 0) {
      unit = { data: array.subarray(lastUnitStart, len), type: lastUnitType, state: state };
      units.push(unit);
      //logger.log('pushing NALU, type/size/state:' + unit.type + '/' + unit.data.byteLength + '/' + state);
    }
    // no NALu found
    if (units.length === 0) {
      // append pes.data to previous NAL unit
      var _lastUnit = this._getLastNalUnit();
      if (_lastUnit) {
        var _tmp = new Uint8Array(_lastUnit.data.byteLength + array.byteLength);
        _tmp.set(_lastUnit.data, 0);
        _tmp.set(array, _lastUnit.data.byteLength);
        _lastUnit.data = _tmp;
      }
    }
    track.naluState = state;
    return units;
  };

  /**
   * remove Emulation Prevention bytes from a RBSP
   */


  TSDemuxer.prototype.discardEPB = function discardEPB(data) {
    var length = data.byteLength,
        EPBPositions = [],
        i = 1,
        newLength,
        newData;

    // Find all `Emulation Prevention Bytes`
    while (i < length - 2) {
      if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
        EPBPositions.push(i + 2);
        i += 2;
      } else {
        i++;
      }
    }

    // If no Emulation Prevention Bytes were found just return the original
    // array
    if (EPBPositions.length === 0) {
      return data;
    }

    // Create a new array to hold the NAL unit data
    newLength = length - EPBPositions.length;
    newData = new Uint8Array(newLength);
    var sourceIndex = 0;

    for (i = 0; i < newLength; sourceIndex++, i++) {
      if (sourceIndex === EPBPositions[0]) {
        // Skip this byte
        sourceIndex++;
        // Remove this position index
        EPBPositions.shift();
      }
      newData[i] = data[sourceIndex];
    }
    return newData;
  };

  TSDemuxer.prototype._parseAACPES = function _parseAACPES(pes) {
    var track = this._audioTrack,
        data = pes.data,
        pts = pes.pts,
        startOffset = 0,
        aacOverFlow = this.aacOverFlow,
        aacLastPTS = this.aacLastPTS,
        frameDuration,
        frameIndex,
        offset,
        stamp,
        len;
    if (aacOverFlow) {
      var tmp = new Uint8Array(aacOverFlow.byteLength + data.byteLength);
      tmp.set(aacOverFlow, 0);
      tmp.set(data, aacOverFlow.byteLength);
      //logger.log(`AAC: append overflowing ${aacOverFlow.byteLength} bytes to beginning of new PES`);
      data = tmp;
    }
    // look for ADTS header (0xFFFx)
    for (offset = startOffset, len = data.length; offset < len - 1; offset++) {
      if (isHeader(data, offset)) {
        break;
      }
    }
    // if ADTS header does not start straight from the beginning of the PES payload, raise an error
    if (offset) {
      var reason, fatal;
      if (offset < len - 1) {
        reason = 'AAC PES did not start with ADTS header,offset:' + offset;
        fatal = false;
      } else {
        reason = 'no ADTS header found in AAC PES';
        fatal = true;
      }
      logger["b" /* logger */].warn('parsing error:' + reason);
      this.observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_PARSING_ERROR, fatal: fatal, reason: reason });
      if (fatal) {
        return;
      }
    }

    initTrackConfig(track, this.observer, data, offset, this.audioCodec);
    frameIndex = 0;
    frameDuration = getFrameDuration(track.samplerate);

    // if last AAC frame is overflowing, we should ensure timestamps are contiguous:
    // first sample PTS should be equal to last sample PTS + frameDuration
    if (aacOverFlow && aacLastPTS) {
      var newPTS = aacLastPTS + frameDuration;
      if (Math.abs(newPTS - pts) > 1) {
        logger["b" /* logger */].log('AAC: align PTS for overlapping frames by ' + Math.round((newPTS - pts) / 90));
        pts = newPTS;
      }
    }

    //scan for aac samples
    while (offset < len) {
      if (isHeader(data, offset) && offset + 5 < len) {
        var frame = appendFrame(track, data, offset, pts, frameIndex);
        if (frame) {
          //logger.log(`${Math.round(frame.sample.pts)} : AAC`);
          offset += frame.length;
          stamp = frame.sample.pts;
          frameIndex++;
        } else {
          //logger.log('Unable to parse AAC frame');
          break;
        }
      } else {
        //nothing found, keep looking
        offset++;
      }
    }

    if (offset < len) {
      aacOverFlow = data.subarray(offset, len);
      //logger.log(`AAC: overflow detected:${len-offset}`);
    } else {
      aacOverFlow = null;
    }
    this.aacOverFlow = aacOverFlow;
    this.aacLastPTS = stamp;
  };

  TSDemuxer.prototype._parseMPEGPES = function _parseMPEGPES(pes) {
    var data = pes.data;
    var length = data.length;
    var frameIndex = 0;
    var offset = 0;
    var pts = pes.pts;

    while (offset < length) {
      if (mpegaudio.isHeader(data, offset)) {
        var frame = mpegaudio.appendFrame(this._audioTrack, data, offset, pts, frameIndex);
        if (frame) {
          offset += frame.length;
          frameIndex++;
        } else {
          //logger.log('Unable to parse Mpeg audio frame');
          break;
        }
      } else {
        //nothing found, keep looking
        offset++;
      }
    }
  };

  TSDemuxer.prototype._parseID3PES = function _parseID3PES(pes) {
    this._id3Track.samples.push(pes);
  };

  return TSDemuxer;
}();

/* harmony default export */ var tsdemuxer = (tsdemuxer_TSDemuxer);
// CONCATENATED MODULE: ./src/demux/mp3demuxer.js
function mp3demuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * MP3 demuxer
 */




var mp3demuxer_MP3Demuxer = function () {
  function MP3Demuxer(observer, remuxer, config) {
    mp3demuxer__classCallCheck(this, MP3Demuxer);

    this.observer = observer;
    this.config = config;
    this.remuxer = remuxer;
  }

  MP3Demuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
    this._audioTrack = { container: 'audio/mpeg', type: 'audio', id: -1, sequenceNumber: 0, isAAC: false, samples: [], len: 0, manifestCodec: audioCodec, duration: duration, inputTimeScale: 90000 };
  };

  MP3Demuxer.prototype.resetTimeStamp = function resetTimeStamp() {};

  MP3Demuxer.probe = function probe(data) {
    // check if data contains ID3 timestamp and MPEG sync word
    var offset, length;
    var id3Data = id3["a" /* default */].getID3Data(data, 0);
    if (id3Data && id3["a" /* default */].getTimeStamp(id3Data) !== undefined) {
      // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
      // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
      // More info http://www.mp3-tech.org/programmer/frame_header.html
      for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) {
        if (mpegaudio.probe(data, offset)) {
          logger["b" /* logger */].log('MPEG Audio sync word found !');
          return true;
        }
      }
    }
    return false;
  };

  // feed incoming data to the front of the parsing pipeline


  MP3Demuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
    var id3Data = id3["a" /* default */].getID3Data(data, 0);
    var pts = 90 * id3["a" /* default */].getTimeStamp(id3Data);
    var offset = id3Data.length;
    var length = data.length;
    var frameIndex = 0,
        stamp = 0;
    var track = this._audioTrack;

    var id3Samples = [{ pts: pts, dts: pts, data: id3Data }];

    while (offset < length) {
      if (mpegaudio.isHeader(data, offset)) {
        var frame = mpegaudio.appendFrame(track, data, offset, pts, frameIndex);
        if (frame) {
          offset += frame.length;
          stamp = frame.sample.pts;
          frameIndex++;
        } else {
          //logger.log('Unable to parse Mpeg audio frame');
          break;
        }
      } else if (id3["a" /* default */].isHeader(data, offset)) {
        id3Data = id3["a" /* default */].getID3Data(data, offset);
        id3Samples.push({ pts: stamp, dts: stamp, data: id3Data });
        offset += id3Data.length;
      } else {
        //nothing found, keep looking
        offset++;
      }
    }

    this.remuxer.remux(track, { samples: [] }, { samples: id3Samples, inputTimeScale: 90000 }, { samples: [] }, timeOffset, contiguous, accurateTimeOffset);
  };

  MP3Demuxer.prototype.destroy = function destroy() {};

  return MP3Demuxer;
}();

/* harmony default export */ var mp3demuxer = (mp3demuxer_MP3Demuxer);
// CONCATENATED MODULE: ./src/helper/aac.js
function aac__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  AAC helper
 */

var AAC = function () {
  function AAC() {
    aac__classCallCheck(this, AAC);
  }

  AAC.getSilentFrame = function getSilentFrame(codec, channelCount) {
    switch (codec) {
      case 'mp4a.40.2':
        if (channelCount === 1) {
          return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
        } else if (channelCount === 2) {
          return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
        } else if (channelCount === 3) {
          return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
        } else if (channelCount === 4) {
          return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
        } else if (channelCount === 5) {
          return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
        } else if (channelCount === 6) {
          return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
        }
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (channelCount === 1) {
          // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
          return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
        } else if (channelCount === 2) {
          // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
          return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
        } else if (channelCount === 3) {
          // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
          return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
        }
        break;
    }
    return null;
  };

  return AAC;
}();

/* harmony default export */ var aac = (AAC);
// CONCATENATED MODULE: ./src/remux/mp4-generator.js
function mp4_generator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generate MP4 Box
*/

//import Hex from '../utils/hex';

var mp4_generator_UINT32_MAX = Math.pow(2, 32) - 1;

var MP4 = function () {
  function MP4() {
    mp4_generator__classCallCheck(this, MP4);
  }

  MP4.init = function init() {
    MP4.types = {
      avc1: [], // codingname
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      '.mp3': [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };

    var i;
    for (i in MP4.types) {
      if (MP4.types.hasOwnProperty(i)) {
        MP4.types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)];
      }
    }

    var videoHdlr = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ]);

    var audioHdlr = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x73, 0x6f, 0x75, 0x6e, // handler_type: 'soun'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'SoundHandler'
    ]);

    MP4.HDLR_TYPES = {
      'video': videoHdlr,
      'audio': audioHdlr
    };

    var dref = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01, // entry_count
    0x00, 0x00, 0x00, 0x0c, // entry_size
    0x75, 0x72, 0x6c, 0x20, // 'url' type
    0x00, // version 0
    0x00, 0x00, 0x01 // entry_flags
    ]);

    var stco = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);

    MP4.STTS = MP4.STSC = MP4.STCO = stco;

    MP4.STSZ = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // sample_size
    0x00, 0x00, 0x00, 0x00]);
    MP4.VMHD = new Uint8Array([0x00, // version
    0x00, 0x00, 0x01, // flags
    0x00, 0x00, // graphicsmode
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
    ]);
    MP4.SMHD = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, // balance
    0x00, 0x00 // reserved
    ]);

    MP4.STSD = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01]); // entry_count

    var majorBrand = new Uint8Array([105, 115, 111, 109]); // isom
    var avc1Brand = new Uint8Array([97, 118, 99, 49]); // avc1
    var minorVersion = new Uint8Array([0, 0, 0, 1]);

    MP4.FTYP = MP4.box(MP4.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand);
    MP4.DINF = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, dref));
  };

  MP4.box = function box(type) {
    var payload = Array.prototype.slice.call(arguments, 1),
        size = 8,
        i = payload.length,
        len = i,
        result;
    // calculate the total size we need to allocate
    while (i--) {
      size += payload[i].byteLength;
    }
    result = new Uint8Array(size);
    result[0] = size >> 24 & 0xff;
    result[1] = size >> 16 & 0xff;
    result[2] = size >> 8 & 0xff;
    result[3] = size & 0xff;
    result.set(type, 4);
    // copy the payload into the result
    for (i = 0, size = 8; i < len; i++) {
      // copy payload[i] array @ offset size
      result.set(payload[i], size);
      size += payload[i].byteLength;
    }
    return result;
  };

  MP4.hdlr = function hdlr(type) {
    return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[type]);
  };

  MP4.mdat = function mdat(data) {
    return MP4.box(MP4.types.mdat, data);
  };

  MP4.mdhd = function mdhd(timescale, duration) {
    duration *= timescale;
    var upperWordDuration = Math.floor(duration / (mp4_generator_UINT32_MAX + 1));
    var lowerWordDuration = Math.floor(duration % (mp4_generator_UINT32_MAX + 1));
    return MP4.box(MP4.types.mdhd, new Uint8Array([0x01, // version 1
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, // creation_time
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, // modification_time
    timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, // timescale
    upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x55, 0xc4, // 'und' language (undetermined)
    0x00, 0x00]));
  };

  MP4.mdia = function mdia(track) {
    return MP4.box(MP4.types.mdia, MP4.mdhd(track.timescale, track.duration), MP4.hdlr(track.type), MP4.minf(track));
  };

  MP4.mfhd = function mfhd(sequenceNumber) {
    return MP4.box(MP4.types.mfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, // flags
    sequenceNumber >> 24, sequenceNumber >> 16 & 0xFF, sequenceNumber >> 8 & 0xFF, sequenceNumber & 0xFF]) // sequence_number
    );
  };

  MP4.minf = function minf(track) {
    if (track.type === 'audio') {
      return MP4.box(MP4.types.minf, MP4.box(MP4.types.smhd, MP4.SMHD), MP4.DINF, MP4.stbl(track));
    } else {
      return MP4.box(MP4.types.minf, MP4.box(MP4.types.vmhd, MP4.VMHD), MP4.DINF, MP4.stbl(track));
    }
  };

  MP4.moof = function moof(sn, baseMediaDecodeTime, track) {
    return MP4.box(MP4.types.moof, MP4.mfhd(sn), MP4.traf(track, baseMediaDecodeTime));
  };
  /**
   * @param tracks... (optional) {array} the tracks associated with this movie
   */


  MP4.moov = function moov(tracks) {
    var i = tracks.length,
        boxes = [];

    while (i--) {
      boxes[i] = MP4.trak(tracks[i]);
    }

    return MP4.box.apply(null, [MP4.types.moov, MP4.mvhd(tracks[0].timescale, tracks[0].duration)].concat(boxes).concat(MP4.mvex(tracks)));
  };

  MP4.mvex = function mvex(tracks) {
    var i = tracks.length,
        boxes = [];

    while (i--) {
      boxes[i] = MP4.trex(tracks[i]);
    }
    return MP4.box.apply(null, [MP4.types.mvex].concat(boxes));
  };

  MP4.mvhd = function mvhd(timescale, duration) {
    duration *= timescale;
    var upperWordDuration = Math.floor(duration / (mp4_generator_UINT32_MAX + 1));
    var lowerWordDuration = Math.floor(duration % (mp4_generator_UINT32_MAX + 1));
    var bytes = new Uint8Array([0x01, // version 1
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, // creation_time
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, // modification_time
    timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, // timescale
    upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x00, 0x01, 0x00, 0x00, // 1.0 rate
    0x01, 0x00, // 1.0 volume
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // transformation: unity matrix
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    0xff, 0xff, 0xff, 0xff // next_track_ID
    ]);
    return MP4.box(MP4.types.mvhd, bytes);
  };

  MP4.sdtp = function sdtp(track) {
    var samples = track.samples || [],
        bytes = new Uint8Array(4 + samples.length),
        flags,
        i;
    // leave the full box header (4 bytes) all zero
    // write the sample table
    for (i = 0; i < samples.length; i++) {
      flags = samples[i].flags;
      bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
    }

    return MP4.box(MP4.types.sdtp, bytes);
  };

  MP4.stbl = function stbl(track) {
    return MP4.box(MP4.types.stbl, MP4.stsd(track), MP4.box(MP4.types.stts, MP4.STTS), MP4.box(MP4.types.stsc, MP4.STSC), MP4.box(MP4.types.stsz, MP4.STSZ), MP4.box(MP4.types.stco, MP4.STCO));
  };

  MP4.avc1 = function avc1(track) {
    var sps = [],
        pps = [],
        i,
        data,
        len;
    // assemble the SPSs

    for (i = 0; i < track.sps.length; i++) {
      data = track.sps[i];
      len = data.byteLength;
      sps.push(len >>> 8 & 0xFF);
      sps.push(len & 0xFF);
      sps = sps.concat(Array.prototype.slice.call(data)); // SPS
    }

    // assemble the PPSs
    for (i = 0; i < track.pps.length; i++) {
      data = track.pps[i];
      len = data.byteLength;
      pps.push(len >>> 8 & 0xFF);
      pps.push(len & 0xFF);
      pps = pps.concat(Array.prototype.slice.call(data));
    }

    var avcc = MP4.box(MP4.types.avcC, new Uint8Array([0x01, // version
    sps[3], // profile
    sps[4], // profile compat
    sps[5], // level
    0xfc | 3, // lengthSizeMinusOne, hard-coded to 4 bytes
    0xE0 | track.sps.length // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(sps).concat([track.pps.length // numOfPictureParameterSets
    ]).concat(pps))),
        // "PPS"
    width = track.width,
        height = track.height,
        hSpacing = track.pixelRatio[0],
        vSpacing = track.pixelRatio[1];
    //console.log('avcc:' + Hex.hexDump(avcc));
    return MP4.box(MP4.types.avc1, new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, // pre_defined
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    width >> 8 & 0xFF, width & 0xff, // width
    height >> 8 & 0xFF, height & 0xff, // height
    0x00, 0x48, 0x00, 0x00, // horizresolution
    0x00, 0x48, 0x00, 0x00, // vertresolution
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // frame_count
    0x12, 0x64, 0x61, 0x69, 0x6C, //dailymotion/hls.js
    0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
    0x00, 0x18, // depth = 24
    0x11, 0x11]), // pre_defined = -1
    avcc, MP4.box(MP4.types.btrt, new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
    0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
    0x00, 0x2d, 0xc6, 0xc0])), // avgBitrate
    MP4.box(MP4.types.pasp, new Uint8Array([hSpacing >> 24, // hSpacing
    hSpacing >> 16 & 0xFF, hSpacing >> 8 & 0xFF, hSpacing & 0xFF, vSpacing >> 24, // vSpacing
    vSpacing >> 16 & 0xFF, vSpacing >> 8 & 0xFF, vSpacing & 0xFF])));
  };

  MP4.esds = function esds(track) {
    var configlen = track.config.length;
    return new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags

    0x03, // descriptor_type
    0x17 + configlen, // length
    0x00, 0x01, //es_id
    0x00, // stream_priority

    0x04, // descriptor_type
    0x0f + configlen, // length
    0x40, //codec : mpeg4_audio
    0x15, // stream_type
    0x00, 0x00, 0x00, // buffer_size
    0x00, 0x00, 0x00, 0x00, // maxBitrate
    0x00, 0x00, 0x00, 0x00, // avgBitrate

    0x05 // descriptor_type
    ].concat([configlen]).concat(track.config).concat([0x06, 0x01, 0x02])); // GASpecificConfig)); // length + audio config descriptor
  };

  MP4.mp4a = function mp4a(track) {
    var samplerate = track.samplerate;
    return MP4.box(MP4.types.mp4a, new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, track.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    samplerate >> 8 & 0xFF, samplerate & 0xff, //
    0x00, 0x00]), MP4.box(MP4.types.esds, MP4.esds(track)));
  };

  MP4.mp3 = function mp3(track) {
    var samplerate = track.samplerate;
    return MP4.box(MP4.types['.mp3'], new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, track.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    samplerate >> 8 & 0xFF, samplerate & 0xff, //
    0x00, 0x00]));
  };

  MP4.stsd = function stsd(track) {
    if (track.type === 'audio') {
      if (!track.isAAC && track.codec === 'mp3') {
        return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp3(track));
      }
      return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(track));
    } else {
      return MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(track));
    }
  };

  MP4.tkhd = function tkhd(track) {
    var id = track.id,
        duration = track.duration * track.timescale,
        width = track.width,
        height = track.height,
        upperWordDuration = Math.floor(duration / (mp4_generator_UINT32_MAX + 1)),
        lowerWordDuration = Math.floor(duration % (mp4_generator_UINT32_MAX + 1));
    return MP4.box(MP4.types.tkhd, new Uint8Array([0x01, // version 1
    0x00, 0x00, 0x07, // flags
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, // creation_time
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, // modification_time
    id >> 24 & 0xFF, id >> 16 & 0xFF, id >> 8 & 0xFF, id & 0xFF, // track_ID
    0x00, 0x00, 0x00, 0x00, // reserved
    upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, // layer
    0x00, 0x00, // alternate_group
    0x00, 0x00, // non-audio track volume
    0x00, 0x00, // reserved
    0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // transformation: unity matrix
    width >> 8 & 0xFF, width & 0xFF, 0x00, 0x00, // width
    height >> 8 & 0xFF, height & 0xFF, 0x00, 0x00 // height
    ]));
  };

  MP4.traf = function traf(track, baseMediaDecodeTime) {
    var sampleDependencyTable = MP4.sdtp(track),
        id = track.id,
        upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (mp4_generator_UINT32_MAX + 1)),
        lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (mp4_generator_UINT32_MAX + 1));
    return MP4.box(MP4.types.traf, MP4.box(MP4.types.tfhd, new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF]) // track_ID
    ), MP4.box(MP4.types.tfdt, new Uint8Array([0x01, // version 1
    0x00, 0x00, 0x00, // flags
    upperWordBaseMediaDecodeTime >> 24, upperWordBaseMediaDecodeTime >> 16 & 0XFF, upperWordBaseMediaDecodeTime >> 8 & 0XFF, upperWordBaseMediaDecodeTime & 0xFF, lowerWordBaseMediaDecodeTime >> 24, lowerWordBaseMediaDecodeTime >> 16 & 0XFF, lowerWordBaseMediaDecodeTime >> 8 & 0XFF, lowerWordBaseMediaDecodeTime & 0xFF])), MP4.trun(track, sampleDependencyTable.length + 16 + // tfhd
    20 + // tfdt
    8 + // traf header
    16 + // mfhd
    8 + // moof header
    8), // mdat header
    sampleDependencyTable);
  };

  /**
   * Generate a track box.
   * @param track {object} a track definition
   * @return {Uint8Array} the track box
   */


  MP4.trak = function trak(track) {
    track.duration = track.duration || 0xffffffff;
    return MP4.box(MP4.types.trak, MP4.tkhd(track), MP4.mdia(track));
  };

  MP4.trex = function trex(track) {
    var id = track.id;
    return MP4.box(MP4.types.trex, new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF, // track_ID
    0x00, 0x00, 0x00, 0x01, // default_sample_description_index
    0x00, 0x00, 0x00, 0x00, // default_sample_duration
    0x00, 0x00, 0x00, 0x00, // default_sample_size
    0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ]));
  };

  MP4.trun = function trun(track, offset) {
    var samples = track.samples || [],
        len = samples.length,
        arraylen = 12 + 16 * len,
        array = new Uint8Array(arraylen),
        i,
        sample,
        duration,
        size,
        flags,
        cts;
    offset += 8 + arraylen;
    array.set([0x00, // version 0
    0x00, 0x0f, 0x01, // flags
    len >>> 24 & 0xFF, len >>> 16 & 0xFF, len >>> 8 & 0xFF, len & 0xFF, // sample_count
    offset >>> 24 & 0xFF, offset >>> 16 & 0xFF, offset >>> 8 & 0xFF, offset & 0xFF // data_offset
    ], 0);
    for (i = 0; i < len; i++) {
      sample = samples[i];
      duration = sample.duration;
      size = sample.size;
      flags = sample.flags;
      cts = sample.cts;
      array.set([duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, // sample_duration
      size >>> 24 & 0xFF, size >>> 16 & 0xFF, size >>> 8 & 0xFF, size & 0xFF, // sample_size
      flags.isLeading << 2 | flags.dependsOn, flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync, flags.degradPrio & 0xF0 << 8, flags.degradPrio & 0x0F, // sample_flags
      cts >>> 24 & 0xFF, cts >>> 16 & 0xFF, cts >>> 8 & 0xFF, cts & 0xFF // sample_composition_time_offset
      ], 12 + 16 * i);
    }
    return MP4.box(MP4.types.trun, array);
  };

  MP4.initSegment = function initSegment(tracks) {
    if (!MP4.types) {
      MP4.init();
    }
    var movie = MP4.moov(tracks),
        result;
    result = new Uint8Array(MP4.FTYP.byteLength + movie.byteLength);
    result.set(MP4.FTYP);
    result.set(movie, MP4.FTYP.byteLength);
    return result;
  };

  return MP4;
}();

/* harmony default export */ var mp4_generator = (MP4);
// CONCATENATED MODULE: ./src/remux/mp4-remuxer.js
function mp4_remuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* fMP4 remuxer
*/







// 10 seconds
var MAX_SILENT_FRAME_DURATION = 10 * 1000;

var mp4_remuxer_MP4Remuxer = function () {
  function MP4Remuxer(observer, config, typeSupported, vendor) {
    mp4_remuxer__classCallCheck(this, MP4Remuxer);

    this.observer = observer;
    this.config = config;
    this.typeSupported = typeSupported;
    var userAgent = navigator.userAgent;
    this.isSafari = vendor && vendor.indexOf('Apple') > -1 && userAgent && !userAgent.match('CriOS');
    this.ISGenerated = false;
  }

  MP4Remuxer.prototype.destroy = function destroy() {};

  MP4Remuxer.prototype.resetTimeStamp = function resetTimeStamp(defaultTimeStamp) {
    this._initPTS = this._initDTS = defaultTimeStamp;
  };

  MP4Remuxer.prototype.resetInitSegment = function resetInitSegment() {
    this.ISGenerated = false;
  };

  MP4Remuxer.prototype.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
    // generate Init Segment if needed
    if (!this.ISGenerated) {
      this.generateIS(audioTrack, videoTrack, timeOffset);
    }

    if (this.ISGenerated) {
      // Purposefully remuxing audio before video, so that remuxVideo can use nextAudioPts, which is
      // calculated in remuxAudio.
      //logger.log('nb AAC samples:' + audioTrack.samples.length);
      if (audioTrack.samples.length) {
        // if initSegment was generated without video samples, regenerate it again
        if (!audioTrack.timescale) {
          logger["b" /* logger */].warn('regenerate InitSegment as audio detected');
          this.generateIS(audioTrack, videoTrack, timeOffset);
        }
        var audioData = this.remuxAudio(audioTrack, timeOffset, contiguous, accurateTimeOffset);
        //logger.log('nb AVC samples:' + videoTrack.samples.length);
        if (videoTrack.samples.length) {
          var audioTrackLength = void 0;
          if (audioData) {
            audioTrackLength = audioData.endPTS - audioData.startPTS;
          }
          // if initSegment was generated without video samples, regenerate it again
          if (!videoTrack.timescale) {
            logger["b" /* logger */].warn('regenerate InitSegment as video detected');
            this.generateIS(audioTrack, videoTrack, timeOffset);
          }
          this.remuxVideo(videoTrack, timeOffset, contiguous, audioTrackLength, accurateTimeOffset);
        }
      } else {
        var videoData = void 0;
        //logger.log('nb AVC samples:' + videoTrack.samples.length);
        if (videoTrack.samples.length) {
          videoData = this.remuxVideo(videoTrack, timeOffset, contiguous, accurateTimeOffset);
        }
        if (videoData && audioTrack.codec) {
          this.remuxEmptyAudio(audioTrack, timeOffset, contiguous, videoData);
        }
      }
    }
    //logger.log('nb ID3 samples:' + audioTrack.samples.length);
    if (id3Track.samples.length) {
      this.remuxID3(id3Track, timeOffset);
    }
    //logger.log('nb ID3 samples:' + audioTrack.samples.length);
    if (textTrack.samples.length) {
      this.remuxText(textTrack, timeOffset);
    }
    //notify end of parsing
    this.observer.trigger(events["a" /* default */].FRAG_PARSED);
  };

  MP4Remuxer.prototype.generateIS = function generateIS(audioTrack, videoTrack, timeOffset) {
    var observer = this.observer,
        audioSamples = audioTrack.samples,
        videoSamples = videoTrack.samples,
        typeSupported = this.typeSupported,
        container = 'audio/mp4',
        tracks = {},
        data = { tracks: tracks },
        computePTSDTS = this._initPTS === undefined,
        initPTS,
        initDTS;

    if (computePTSDTS) {
      initPTS = initDTS = Infinity;
    }
    if (audioTrack.config && audioSamples.length) {
      // let's use audio sampling rate as MP4 time scale.
      // rationale is that there is a integer nb of audio frames per audio sample (1024 for AAC)
      // using audio sampling rate here helps having an integer MP4 frame duration
      // this avoids potential rounding issue and AV sync issue
      audioTrack.timescale = audioTrack.samplerate;
      logger["b" /* logger */].log('audio sampling rate : ' + audioTrack.samplerate);
      if (!audioTrack.isAAC) {
        if (typeSupported.mpeg) {
          // Chrome and Safari
          container = 'audio/mpeg';
          audioTrack.codec = '';
        } else if (typeSupported.mp3) {
          // Firefox
          audioTrack.codec = 'mp3';
        }
      }
      tracks.audio = {
        container: container,
        codec: audioTrack.codec,
        initSegment: !audioTrack.isAAC && typeSupported.mpeg ? new Uint8Array() : mp4_generator.initSegment([audioTrack]),
        metadata: {
          channelCount: audioTrack.channelCount
        }
      };
      if (computePTSDTS) {
        // remember first PTS of this demuxing context. for audio, PTS = DTS
        initPTS = initDTS = audioSamples[0].pts - audioTrack.inputTimeScale * timeOffset;
      }
    }

    if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
      // let's use input time scale as MP4 video timescale
      // we use input time scale straight away to avoid rounding issues on frame duration / cts computation
      var inputTimeScale = videoTrack.inputTimeScale;
      videoTrack.timescale = inputTimeScale;
      tracks.video = {
        container: 'video/mp4',
        codec: videoTrack.codec,
        initSegment: mp4_generator.initSegment([videoTrack]),
        metadata: {
          width: videoTrack.width,
          height: videoTrack.height
        }
      };
      if (computePTSDTS) {
        initPTS = Math.min(initPTS, videoSamples[0].pts - inputTimeScale * timeOffset);
        initDTS = Math.min(initDTS, videoSamples[0].dts - inputTimeScale * timeOffset);
        this.observer.trigger(events["a" /* default */].INIT_PTS_FOUND, { initPTS: initPTS });
      }
    }

    if (Object.keys(tracks).length) {
      observer.trigger(events["a" /* default */].FRAG_PARSING_INIT_SEGMENT, data);
      this.ISGenerated = true;
      if (computePTSDTS) {
        this._initPTS = initPTS;
        this._initDTS = initDTS;
      }
    } else {
      observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_PARSING_ERROR, fatal: false, reason: 'no audio/video samples found' });
    }
  };

  MP4Remuxer.prototype.remuxVideo = function remuxVideo(track, timeOffset, contiguous, audioTrackLength, accurateTimeOffset) {
    var offset = 8,
        timeScale = track.timescale,
        mp4SampleDuration,
        mdat,
        moof,
        firstPTS,
        firstDTS,
        nextDTS,
        lastPTS,
        lastDTS,
        inputSamples = track.samples,
        outputSamples = [],
        nbSamples = inputSamples.length,
        ptsNormalize = this._PTSNormalize,
        initDTS = this._initDTS;

    // for (let i = 0; i < track.samples.length; i++) {
    //   let avcSample = track.samples[i];
    //   let units = avcSample.units;
    //   let unitsString = '';
    //   for (let j = 0; j < units.length ; j++) {
    //     unitsString += units[j].type + ',';
    //     if (units[j].data.length < 500) {
    //       unitsString += Hex.hexDump(units[j].data);
    //     }
    //   }
    //   logger.log(avcSample.pts + '/' + avcSample.dts + ',' + unitsString + avcSample.units.length);
    // }

    // if parsed fragment is contiguous with last one, let's use last DTS value as reference
    var nextAvcDts = this.nextAvcDts;

    var isSafari = this.isSafari;

    // Safari does not like overlapping DTS on consecutive fragments. let's use nextAvcDts to overcome this if fragments are consecutive
    if (isSafari) {
      // also consider consecutive fragments as being contiguous (even if a level switch occurs),
      // for sake of clarity:
      // consecutive fragments are frags with
      //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
      //  - less than 200 ms PTS gaps (timeScale/5)
      contiguous |= inputSamples.length && nextAvcDts && (accurateTimeOffset && Math.abs(timeOffset - nextAvcDts / timeScale) < 0.1 || Math.abs(inputSamples[0].pts - nextAvcDts - initDTS) < timeScale / 5);
    }

    if (!contiguous) {
      // if not contiguous, let's use target timeOffset
      nextAvcDts = timeOffset * timeScale;
    }

    // PTS is coded on 33bits, and can loop from -2^32 to 2^32
    // ptsNormalize will make PTS/DTS value monotonic, we use last known DTS value as reference value
    inputSamples.forEach(function (sample) {
      sample.pts = ptsNormalize(sample.pts - initDTS, nextAvcDts);
      sample.dts = ptsNormalize(sample.dts - initDTS, nextAvcDts);
    });

    // sort video samples by DTS then PTS then demux id order
    inputSamples.sort(function (a, b) {
      var deltadts = a.dts - b.dts;
      var deltapts = a.pts - b.pts;
      return deltadts ? deltadts : deltapts ? deltapts : a.id - b.id;
    });

    // handle broken streams with PTS < DTS, tolerance up 200ms (18000 in 90kHz timescale)
    var PTSDTSshift = inputSamples.reduce(function (prev, curr) {
      return Math.max(Math.min(prev, curr.pts - curr.dts), -18000);
    }, 0);
    if (PTSDTSshift < 0) {
      logger["b" /* logger */].warn('PTS < DTS detected in video samples, shifting DTS by ' + Math.round(PTSDTSshift / 90) + ' ms to overcome this issue');
      for (var i = 0; i < inputSamples.length; i++) {
        inputSamples[i].dts += PTSDTSshift;
      }
    }

    // compute first DTS and last DTS, normalize them against reference value
    var sample = inputSamples[0];
    firstDTS = Math.max(sample.dts, 0);
    firstPTS = Math.max(sample.pts, 0);

    // check timestamp continuity accross consecutive fragments (this is to remove inter-fragment gap/hole)
    var delta = Math.round((firstDTS - nextAvcDts) / 90);
    // if fragment are contiguous, detect hole/overlapping between fragments
    if (contiguous) {
      if (delta) {
        if (delta > 1) {
          logger["b" /* logger */].log('AVC:' + delta + ' ms hole between fragments detected,filling it');
        } else if (delta < -1) {
          logger["b" /* logger */].log('AVC:' + -delta + ' ms overlapping between fragments detected');
        }
        // remove hole/gap : set DTS to next expected DTS
        firstDTS = nextAvcDts;
        inputSamples[0].dts = firstDTS;
        // offset PTS as well, ensure that PTS is smaller or equal than new DTS
        firstPTS = Math.max(firstPTS - delta, nextAvcDts);
        inputSamples[0].pts = firstPTS;
        logger["b" /* logger */].log('Video/PTS/DTS adjusted: ' + Math.round(firstPTS / 90) + '/' + Math.round(firstDTS / 90) + ',delta:' + delta + ' ms');
      }
    }
    nextDTS = firstDTS;

    // compute lastPTS/lastDTS
    sample = inputSamples[inputSamples.length - 1];
    lastDTS = Math.max(sample.dts, 0);
    lastPTS = Math.max(sample.pts, 0, lastDTS);

    // on Safari let's signal the same sample duration for all samples
    // sample duration (as expected by trun MP4 boxes), should be the delta between sample DTS
    // set this constant duration as being the avg delta between consecutive DTS.
    if (isSafari) {
      mp4SampleDuration = Math.round((lastDTS - firstDTS) / (inputSamples.length - 1));
    }

    var nbNalu = 0,
        naluLen = 0;
    for (var _i = 0; _i < nbSamples; _i++) {
      // compute total/avc sample length and nb of NAL units
      var _sample = inputSamples[_i],
          units = _sample.units,
          nbUnits = units.length,
          sampleLen = 0;
      for (var j = 0; j < nbUnits; j++) {
        sampleLen += units[j].data.length;
      }
      naluLen += sampleLen;
      nbNalu += nbUnits;
      _sample.length = sampleLen;

      // normalize PTS/DTS
      if (isSafari) {
        // sample DTS is computed using a constant decoding offset (mp4SampleDuration) between samples
        _sample.dts = firstDTS + _i * mp4SampleDuration;
      } else {
        // ensure sample monotonic DTS
        _sample.dts = Math.max(_sample.dts, firstDTS);
      }
      // ensure that computed value is greater or equal than sample DTS
      _sample.pts = Math.max(_sample.pts, _sample.dts);
    }

    /* concatenate the video data and construct the mdat in place
      (need 8 more bytes to fill length and mpdat type) */
    var mdatSize = naluLen + 4 * nbNalu + 8;
    try {
      mdat = new Uint8Array(mdatSize);
    } catch (err) {
      this.observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MUX_ERROR, details: errors["a" /* ErrorDetails */].REMUX_ALLOC_ERROR, fatal: false, bytes: mdatSize, reason: 'fail allocating video mdat ' + mdatSize });
      return;
    }
    var view = new DataView(mdat.buffer);
    view.setUint32(0, mdatSize);
    mdat.set(mp4_generator.types.mdat, 4);

    for (var _i2 = 0; _i2 < nbSamples; _i2++) {
      var avcSample = inputSamples[_i2],
          avcSampleUnits = avcSample.units,
          mp4SampleLength = 0,
          compositionTimeOffset = void 0;
      // convert NALU bitstream to MP4 format (prepend NALU with size field)
      for (var _j = 0, _nbUnits = avcSampleUnits.length; _j < _nbUnits; _j++) {
        var unit = avcSampleUnits[_j],
            unitData = unit.data,
            unitDataLen = unit.data.byteLength;
        view.setUint32(offset, unitDataLen);
        offset += 4;
        mdat.set(unitData, offset);
        offset += unitDataLen;
        mp4SampleLength += 4 + unitDataLen;
      }

      if (!isSafari) {
        // expected sample duration is the Decoding Timestamp diff of consecutive samples
        if (_i2 < nbSamples - 1) {
          mp4SampleDuration = inputSamples[_i2 + 1].dts - avcSample.dts;
        } else {
          var config = this.config,
              lastFrameDuration = avcSample.dts - inputSamples[_i2 > 0 ? _i2 - 1 : _i2].dts;
          if (config.stretchShortVideoTrack) {
            // In some cases, a segment's audio track duration may exceed the video track duration.
            // Since we've already remuxed audio, and we know how long the audio track is, we look to
            // see if the delta to the next segment is longer than the minimum of maxBufferHole and
            // maxSeekHole. If so, playback would potentially get stuck, so we artificially inflate
            // the duration of the last frame to minimize any potential gap between segments.
            var maxBufferHole = config.maxBufferHole,
                maxSeekHole = config.maxSeekHole,
                gapTolerance = Math.floor(Math.min(maxBufferHole, maxSeekHole) * timeScale),
                deltaToFrameEnd = (audioTrackLength ? firstPTS + audioTrackLength * timeScale : this.nextAudioPts) - avcSample.pts;
            if (deltaToFrameEnd > gapTolerance) {
              // We subtract lastFrameDuration from deltaToFrameEnd to try to prevent any video
              // frame overlap. maxBufferHole/maxSeekHole should be >> lastFrameDuration anyway.
              mp4SampleDuration = deltaToFrameEnd - lastFrameDuration;
              if (mp4SampleDuration < 0) {
                mp4SampleDuration = lastFrameDuration;
              }
              logger["b" /* logger */].log('It is approximately ' + deltaToFrameEnd / 90 + ' ms to the next segment; using duration ' + mp4SampleDuration / 90 + ' ms for the last video frame.');
            } else {
              mp4SampleDuration = lastFrameDuration;
            }
          } else {
            mp4SampleDuration = lastFrameDuration;
          }
        }
        compositionTimeOffset = Math.round(avcSample.pts - avcSample.dts);
      } else {
        compositionTimeOffset = Math.max(0, mp4SampleDuration * Math.round((avcSample.pts - avcSample.dts) / mp4SampleDuration));
      }

      //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${avcSample.pts}/${avcSample.dts}/${initDTS}/${ptsnorm}/${dtsnorm}/${(avcSample.pts/4294967296).toFixed(3)}');
      outputSamples.push({
        size: mp4SampleLength,
        // constant duration
        duration: mp4SampleDuration,
        cts: compositionTimeOffset,
        flags: {
          isLeading: 0,
          isDependedOn: 0,
          hasRedundancy: 0,
          degradPrio: 0,
          dependsOn: avcSample.key ? 2 : 1,
          isNonSync: avcSample.key ? 0 : 1
        }
      });
    }
    // next AVC sample DTS should be equal to last sample DTS + last sample duration (in PES timescale)
    this.nextAvcDts = lastDTS + mp4SampleDuration;
    var dropped = track.dropped;
    track.len = 0;
    track.nbNalu = 0;
    track.dropped = 0;
    if (outputSamples.length && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      var flags = outputSamples[0].flags;
      // chrome workaround, mark first sample as being a Random Access Point to avoid sourcebuffer append issue
      // https://code.google.com/p/chromium/issues/detail?id=229412
      flags.dependsOn = 2;
      flags.isNonSync = 0;
    }
    track.samples = outputSamples;
    moof = mp4_generator.moof(track.sequenceNumber++, firstDTS, track);
    track.samples = [];

    var data = {
      data1: moof,
      data2: mdat,
      startPTS: firstPTS / timeScale,
      endPTS: (lastPTS + mp4SampleDuration) / timeScale,
      startDTS: firstDTS / timeScale,
      endDTS: this.nextAvcDts / timeScale,
      type: 'video',
      nb: outputSamples.length,
      dropped: dropped
    };
    this.observer.trigger(events["a" /* default */].FRAG_PARSING_DATA, data);
    return data;
  };

  MP4Remuxer.prototype.remuxAudio = function remuxAudio(track, timeOffset, contiguous, accurateTimeOffset) {
    var inputTimeScale = track.inputTimeScale,
        mp4timeScale = track.timescale,
        scaleFactor = inputTimeScale / mp4timeScale,
        mp4SampleDuration = track.isAAC ? 1024 : 1152,
        inputSampleDuration = mp4SampleDuration * scaleFactor,
        ptsNormalize = this._PTSNormalize,
        initDTS = this._initDTS,
        rawMPEG = !track.isAAC && this.typeSupported.mpeg;

    var offset,
        mp4Sample,
        fillFrame,
        mdat,
        moof,
        firstPTS,
        lastPTS,
        inputSamples = track.samples,
        outputSamples = [],
        nextAudioPts = this.nextAudioPts;

    // for audio samples, also consider consecutive fragments as being contiguous (even if a level switch occurs),
    // for sake of clarity:
    // consecutive fragments are frags with
    //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
    //  - less than 20 audio frames distance
    // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
    // this helps ensuring audio continuity
    // and this also avoids audio glitches/cut when switching quality, or reporting wrong duration on first audio frame
    contiguous |= inputSamples.length && nextAudioPts && (accurateTimeOffset && Math.abs(timeOffset - nextAudioPts / inputTimeScale) < 0.1 || Math.abs(inputSamples[0].pts - nextAudioPts - initDTS) < 20 * inputSampleDuration);

    if (!contiguous) {
      // if fragments are not contiguous, let's use timeOffset to compute next Audio PTS
      nextAudioPts = timeOffset * inputTimeScale;
    }

    // compute normalized PTS
    inputSamples.forEach(function (sample) {
      sample.pts = sample.dts = ptsNormalize(sample.pts - initDTS, nextAudioPts);
    });

    // sort based on normalized PTS (this is to avoid sorting issues in case timestamp
    // reloop in the middle of our samples array)
    inputSamples.sort(function (a, b) {
      return a.pts - b.pts;
    });

    // If the audio track is missing samples, the frames seem to get "left-shifted" within the
    // resulting mp4 segment, causing sync issues and leaving gaps at the end of the audio segment.
    // In an effort to prevent this from happening, we inject frames here where there are gaps.
    // When possible, we inject a silent frame; when that's not possible, we duplicate the last
    // frame.

    // only inject/drop audio frames in case time offset is accurate
    if (accurateTimeOffset && track.isAAC) {
      for (var i = 0, nextPts = nextAudioPts; i < inputSamples.length;) {
        // First, let's see how far off this frame is from where we expect it to be
        var sample = inputSamples[i],
            delta;
        var pts = sample.pts;
        delta = pts - nextPts;

        var duration = Math.abs(1000 * delta / inputTimeScale);

        // If we're overlapping by more than a duration, drop this sample
        if (delta <= -inputSampleDuration) {
          logger["b" /* logger */].warn('Dropping 1 audio frame @ ' + (nextPts / inputTimeScale).toFixed(3) + 's due to ' + duration + ' ms overlap.');
          inputSamples.splice(i, 1);
          track.len -= sample.unit.length;
          // Don't touch nextPtsNorm or i
        }

        // Insert missing frames if:
        // 1: We're more than one frame away
        // 2: Not more than MAX_SILENT_FRAME_DURATION away
        // 3: currentTime (aka nextPtsNorm) is not 0
        else if (delta >= inputSampleDuration && duration < MAX_SILENT_FRAME_DURATION && nextPts) {
            var missing = Math.round(delta / inputSampleDuration);
            logger["b" /* logger */].warn('Injecting ' + missing + ' audio frame @ ' + (nextPts / inputTimeScale).toFixed(3) + 's due to ' + Math.round(1000 * delta / inputTimeScale) + ' ms gap.');
            for (var j = 0; j < missing; j++) {
              var newStamp = Math.max(nextPts, 0);
              fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
              if (!fillFrame) {
                logger["b" /* logger */].log('Unable to get silent frame for given audio codec; duplicating last frame instead.');
                fillFrame = sample.unit.subarray();
              }
              inputSamples.splice(i, 0, { unit: fillFrame, pts: newStamp, dts: newStamp });
              track.len += fillFrame.length;
              nextPts += inputSampleDuration;
              i++;
            }

            // Adjust sample to next expected pts
            sample.pts = sample.dts = nextPts;
            nextPts += inputSampleDuration;
            i++;
          } else {
            // Otherwise, just adjust pts
            if (Math.abs(delta) > 0.1 * inputSampleDuration) {
              //logger.log(`Invalid frame delta ${Math.round(delta + inputSampleDuration)} at PTS ${Math.round(pts / 90)} (should be ${Math.round(inputSampleDuration)}).`);
            }
            sample.pts = sample.dts = nextPts;
            nextPts += inputSampleDuration;
            i++;
          }
      }
    }

    for (var _j2 = 0, _nbSamples = inputSamples.length; _j2 < _nbSamples; _j2++) {
      var audioSample = inputSamples[_j2];
      var unit = audioSample.unit;
      var _pts = audioSample.pts;
      //logger.log(`Audio/PTS:${Math.round(pts/90)}`);
      // if not first sample
      if (lastPTS !== undefined) {
        mp4Sample.duration = Math.round((_pts - lastPTS) / scaleFactor);
      } else {
        var _delta = Math.round(1000 * (_pts - nextAudioPts) / inputTimeScale),
            numMissingFrames = 0;
        // if fragment are contiguous, detect hole/overlapping between fragments
        // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
        if (contiguous && track.isAAC) {
          // log delta
          if (_delta) {
            if (_delta > 0 && _delta < MAX_SILENT_FRAME_DURATION) {
              numMissingFrames = Math.round((_pts - nextAudioPts) / inputSampleDuration);
              logger["b" /* logger */].log(_delta + ' ms hole between AAC samples detected,filling it');
              if (numMissingFrames > 0) {
                fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                if (!fillFrame) {
                  fillFrame = unit.subarray();
                }
                track.len += numMissingFrames * fillFrame.length;
              }
              // if we have frame overlap, overlapping for more than half a frame duraion
            } else if (_delta < -12) {
              // drop overlapping audio frames... browser will deal with it
              logger["b" /* logger */].log('drop overlapping AAC sample, expected/parsed/delta:' + (nextAudioPts / inputTimeScale).toFixed(3) + 's/' + (_pts / inputTimeScale).toFixed(3) + 's/' + -_delta + 'ms');
              track.len -= unit.byteLength;
              continue;
            }
            // set PTS/DTS to expected PTS/DTS
            _pts = nextAudioPts;
          }
        }
        // remember first PTS of our audioSamples, ensure value is positive
        firstPTS = Math.max(0, _pts);
        if (track.len > 0) {
          /* concatenate the audio data and construct the mdat in place
            (need 8 more bytes to fill length and mdat type) */
          var mdatSize = rawMPEG ? track.len : track.len + 8;
          offset = rawMPEG ? 0 : 8;
          try {
            mdat = new Uint8Array(mdatSize);
          } catch (err) {
            this.observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MUX_ERROR, details: errors["a" /* ErrorDetails */].REMUX_ALLOC_ERROR, fatal: false, bytes: mdatSize, reason: 'fail allocating audio mdat ' + mdatSize });
            return;
          }
          if (!rawMPEG) {
            var view = new DataView(mdat.buffer);
            view.setUint32(0, mdatSize);
            mdat.set(mp4_generator.types.mdat, 4);
          }
        } else {
          // no audio samples
          return;
        }
        for (var _i3 = 0; _i3 < numMissingFrames; _i3++) {
          fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
          if (!fillFrame) {
            logger["b" /* logger */].log('Unable to get silent frame for given audio codec; duplicating this frame instead.');
            fillFrame = unit.subarray();
          }
          mdat.set(fillFrame, offset);
          offset += fillFrame.byteLength;
          mp4Sample = {
            size: fillFrame.byteLength,
            cts: 0,
            duration: 1024,
            flags: {
              isLeading: 0,
              isDependedOn: 0,
              hasRedundancy: 0,
              degradPrio: 0,
              dependsOn: 1
            }
          };
          outputSamples.push(mp4Sample);
        }
      }
      mdat.set(unit, offset);
      var unitLen = unit.byteLength;
      offset += unitLen;
      //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${audioSample.pts}/${audioSample.dts}/${initDTS}/${ptsnorm}/${dtsnorm}/${(audioSample.pts/4294967296).toFixed(3)}');
      mp4Sample = {
        size: unitLen,
        cts: 0,
        duration: 0,
        flags: {
          isLeading: 0,
          isDependedOn: 0,
          hasRedundancy: 0,
          degradPrio: 0,
          dependsOn: 1
        }
      };
      outputSamples.push(mp4Sample);
      lastPTS = _pts;
    }
    var lastSampleDuration = 0;
    var nbSamples = outputSamples.length;
    //set last sample duration as being identical to previous sample
    if (nbSamples >= 2) {
      lastSampleDuration = outputSamples[nbSamples - 2].duration;
      mp4Sample.duration = lastSampleDuration;
    }
    if (nbSamples) {
      // next audio sample PTS should be equal to last sample PTS + duration
      this.nextAudioPts = nextAudioPts = lastPTS + scaleFactor * lastSampleDuration;
      //logger.log('Audio/PTS/PTSend:' + audioSample.pts.toFixed(0) + '/' + this.nextAacDts.toFixed(0));
      track.len = 0;
      track.samples = outputSamples;
      if (rawMPEG) {
        moof = new Uint8Array();
      } else {
        moof = mp4_generator.moof(track.sequenceNumber++, firstPTS / scaleFactor, track);
      }
      track.samples = [];
      var start = firstPTS / inputTimeScale;
      var end = nextAudioPts / inputTimeScale;
      var audioData = {
        data1: moof,
        data2: mdat,
        startPTS: start,
        endPTS: end,
        startDTS: start,
        endDTS: end,
        type: 'audio',
        nb: nbSamples
      };
      this.observer.trigger(events["a" /* default */].FRAG_PARSING_DATA, audioData);
      return audioData;
    }
    return null;
  };

  MP4Remuxer.prototype.remuxEmptyAudio = function remuxEmptyAudio(track, timeOffset, contiguous, videoData) {
    var inputTimeScale = track.inputTimeScale,
        mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale,
        scaleFactor = inputTimeScale / mp4timeScale,
        nextAudioPts = this.nextAudioPts,


    // sync with video's timestamp
    startDTS = (nextAudioPts !== undefined ? nextAudioPts : videoData.startDTS * inputTimeScale) + this._initDTS,
        endDTS = videoData.endDTS * inputTimeScale + this._initDTS,

    // one sample's duration value
    sampleDuration = 1024,
        frameDuration = scaleFactor * sampleDuration,


    // samples count of this segment's duration
    nbSamples = Math.ceil((endDTS - startDTS) / frameDuration),


    // silent frame
    silentFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);

    logger["b" /* logger */].warn('remux empty Audio');
    // Can't remux if we can't generate a silent frame...
    if (!silentFrame) {
      logger["b" /* logger */].trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!');
      return;
    }

    var samples = [];
    for (var i = 0; i < nbSamples; i++) {
      var stamp = startDTS + i * frameDuration;
      samples.push({ unit: silentFrame, pts: stamp, dts: stamp });
      track.len += silentFrame.length;
    }
    track.samples = samples;

    this.remuxAudio(track, timeOffset, contiguous);
  };

  MP4Remuxer.prototype.remuxID3 = function remuxID3(track, timeOffset) {
    var length = track.samples.length,
        sample;
    var inputTimeScale = track.inputTimeScale;
    var initPTS = this._initPTS;
    var initDTS = this._initDTS;
    // consume samples
    if (length) {
      for (var index = 0; index < length; index++) {
        sample = track.samples[index];
        // setting id3 pts, dts to relative time
        // using this._initPTS and this._initDTS to calculate relative time
        sample.pts = (sample.pts - initPTS) / inputTimeScale;
        sample.dts = (sample.dts - initDTS) / inputTimeScale;
      }
      this.observer.trigger(events["a" /* default */].FRAG_PARSING_METADATA, {
        samples: track.samples
      });
    }

    track.samples = [];
    timeOffset = timeOffset;
  };

  MP4Remuxer.prototype.remuxText = function remuxText(track, timeOffset) {
    track.samples.sort(function (a, b) {
      return a.pts - b.pts;
    });

    var length = track.samples.length,
        sample;
    var inputTimeScale = track.inputTimeScale;
    var initPTS = this._initPTS;
    // consume samples
    if (length) {
      for (var index = 0; index < length; index++) {
        sample = track.samples[index];
        // setting text pts, dts to relative time
        // using this._initPTS and this._initDTS to calculate relative time
        sample.pts = (sample.pts - initPTS) / inputTimeScale;
      }
      this.observer.trigger(events["a" /* default */].FRAG_PARSING_USERDATA, {
        samples: track.samples
      });
    }

    track.samples = [];
    timeOffset = timeOffset;
  };

  MP4Remuxer.prototype._PTSNormalize = function _PTSNormalize(value, reference) {
    var offset;
    if (reference === undefined) {
      return value;
    }
    if (reference < value) {
      // - 2^33
      offset = -8589934592;
    } else {
      // + 2^33
      offset = 8589934592;
    }
    /* PTS is 33bit (from 0 to 2^33 -1)
      if diff between value and reference is bigger than half of the amplitude (2^32) then it means that
      PTS looping occured. fill the gap */
    while (Math.abs(value - reference) > 4294967296) {
      value += offset;
    }
    return value;
  };

  return MP4Remuxer;
}();

/* harmony default export */ var mp4_remuxer = (mp4_remuxer_MP4Remuxer);
// CONCATENATED MODULE: ./src/remux/passthrough-remuxer.js
function passthrough_remuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * passthrough remuxer
*/


var passthrough_remuxer_PassThroughRemuxer = function () {
  function PassThroughRemuxer(observer) {
    passthrough_remuxer__classCallCheck(this, PassThroughRemuxer);

    this.observer = observer;
  }

  PassThroughRemuxer.prototype.destroy = function destroy() {};

  PassThroughRemuxer.prototype.resetTimeStamp = function resetTimeStamp() {};

  PassThroughRemuxer.prototype.resetInitSegment = function resetInitSegment() {};

  PassThroughRemuxer.prototype.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset, rawData) {
    var observer = this.observer;
    var streamType = '';
    if (audioTrack) {
      streamType += 'audio';
    }
    if (videoTrack) {
      streamType += 'video';
    }
    observer.trigger(events["a" /* default */].FRAG_PARSING_DATA, {
      data1: rawData,
      startPTS: timeOffset,
      startDTS: timeOffset,
      type: streamType,
      nb: 1,
      dropped: 0
    });
    //notify end of parsing
    observer.trigger(events["a" /* default */].FRAG_PARSED);
  };

  return PassThroughRemuxer;
}();

/* harmony default export */ var passthrough_remuxer = (passthrough_remuxer_PassThroughRemuxer);
// CONCATENATED MODULE: ./src/demux/demuxer-inline.js
function demuxer_inline__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*  inline demuxer.
 *   probe fragments and instantiate appropriate demuxer depending on content type (TSDemuxer, AACDemuxer, ...)
 */











var demuxer_inline_DemuxerInline = function () {
  function DemuxerInline(observer, typeSupported, config, vendor) {
    demuxer_inline__classCallCheck(this, DemuxerInline);

    this.observer = observer;
    this.typeSupported = typeSupported;
    this.config = config;
    this.vendor = vendor;
  }

  DemuxerInline.prototype.destroy = function destroy() {
    var demuxer = this.demuxer;
    if (demuxer) {
      demuxer.destroy();
    }
  };

  DemuxerInline.prototype.push = function push(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
    if (data.byteLength > 0 && decryptdata != null && decryptdata.key != null && decryptdata.method === 'AES-128') {
      var decrypter = this.decrypter;
      if (decrypter == null) {
        decrypter = this.decrypter = new crypt_decrypter(this.observer, this.config);
      }
      var localthis = this;
      // performance.now() not available on WebWorker, at least on Safari Desktop
      var startTime;
      try {
        startTime = performance.now();
      } catch (error) {
        startTime = Date.now();
      }
      decrypter.decrypt(data, decryptdata.key.buffer, decryptdata.iv.buffer, function (decryptedData) {
        var endTime;
        try {
          endTime = performance.now();
        } catch (error) {
          endTime = Date.now();
        }
        localthis.observer.trigger(events["a" /* default */].FRAG_DECRYPTED, { stats: { tstart: startTime, tdecrypt: endTime } });
        localthis.pushDecrypted(new Uint8Array(decryptedData), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
      });
    } else {
      this.pushDecrypted(new Uint8Array(data), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
    }
  };

  DemuxerInline.prototype.pushDecrypted = function pushDecrypted(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
    var demuxer = this.demuxer;
    if (!demuxer ||
    // in case of continuity change, we might switch from content type (AAC container to TS container for example)
    // so let's check that current demuxer is still valid
    discontinuity && !this.probe(data)) {
      var observer = this.observer;
      var typeSupported = this.typeSupported;
      var config = this.config;
      // probing order is AAC/MP3/TS/MP4
      var muxConfig = [{ demux: aacdemuxer, remux: mp4_remuxer }, { demux: mp3demuxer, remux: mp4_remuxer }, { demux: tsdemuxer, remux: mp4_remuxer }, { demux: mp4demuxer, remux: passthrough_remuxer }];

      // probe for content type
      for (var i = 0, len = muxConfig.length; i < len; i++) {
        var mux = muxConfig[i];
        var probe = mux.demux.probe;
        if (probe(data)) {
          var _remuxer = this.remuxer = new mux.remux(observer, config, typeSupported, this.vendor);
          demuxer = new mux.demux(observer, _remuxer, config, typeSupported);
          this.probe = probe;
          break;
        }
      }
      if (!demuxer) {
        observer.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_PARSING_ERROR, fatal: true, reason: 'no demux matching with content found' });
        return;
      }
      this.demuxer = demuxer;
    }
    var remuxer = this.remuxer;

    if (discontinuity || trackSwitch) {
      demuxer.resetInitSegment(initSegment, audioCodec, videoCodec, duration);
      remuxer.resetInitSegment();
    }
    if (discontinuity) {
      demuxer.resetTimeStamp(defaultInitPTS);
      remuxer.resetTimeStamp(defaultInitPTS);
    }
    if (typeof demuxer.setDecryptData === 'function') {
      demuxer.setDecryptData(decryptdata);
    }
    demuxer.append(data, timeOffset, contiguous, accurateTimeOffset);
  };

  return DemuxerInline;
}();

/* harmony default export */ var demuxer_inline = __webpack_exports__["a"] = (demuxer_inline_DemuxerInline);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var cues_namespaceObject = {};
__webpack_require__.d(cues_namespaceObject, "newCue", function() { return newCue; });

// EXTERNAL MODULE: ./node_modules/url-toolkit/src/url-toolkit.js
var url_toolkit = __webpack_require__(5);
var url_toolkit_default = /*#__PURE__*/__webpack_require__.n(url_toolkit);

// EXTERNAL MODULE: ./src/events.js
var events = __webpack_require__(1);

// EXTERNAL MODULE: ./src/errors.js
var errors = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__(0);

// CONCATENATED MODULE: ./src/event-handler.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* All objects in the event handling chain should inherit from this class
*
*/





var event_handler_EventHandler = function () {
  function EventHandler(hls) {
    _classCallCheck(this, EventHandler);

    this.hls = hls;
    this.onEvent = this.onEvent.bind(this);

    for (var _len = arguments.length, events = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      events[_key - 1] = arguments[_key];
    }

    this.handledEvents = events;
    this.useGenericHandler = true;

    this.registerListeners();
  }

  EventHandler.prototype.destroy = function destroy() {
    this.unregisterListeners();
  };

  EventHandler.prototype.isEventHandler = function isEventHandler() {
    return _typeof(this.handledEvents) === 'object' && this.handledEvents.length && typeof this.onEvent === 'function';
  };

  EventHandler.prototype.registerListeners = function registerListeners() {
    if (this.isEventHandler()) {
      this.handledEvents.forEach(function (event) {
        if (event === 'hlsEventGeneric') {
          throw new Error('Forbidden event name: ' + event);
        }
        this.hls.on(event, this.onEvent);
      }, this);
    }
  };

  EventHandler.prototype.unregisterListeners = function unregisterListeners() {
    if (this.isEventHandler()) {
      this.handledEvents.forEach(function (event) {
        this.hls.off(event, this.onEvent);
      }, this);
    }
  };

  /**
   * arguments: event (string), data (any)
   */


  EventHandler.prototype.onEvent = function onEvent(event, data) {
    this.onEventGeneric(event, data);
  };

  EventHandler.prototype.onEventGeneric = function onEventGeneric(event, data) {
    var eventToFunction = function eventToFunction(event, data) {
      var funcName = 'on' + event.replace('hls', '');
      if (typeof this[funcName] !== 'function') {
        throw new Error('Event ' + event + ' has no generic handler in this ' + this.constructor.name + ' class (tried ' + funcName + ')');
      }
      return this[funcName].bind(this, data);
    };
    try {
      eventToFunction.call(this, event, data).call();
    } catch (err) {
      logger["b" /* logger */].error('internal error happened while processing ' + event + ':' + err.message);
      this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].OTHER_ERROR, details: errors["a" /* ErrorDetails */].INTERNAL_EXCEPTION, fatal: false, event: event, err: err });
    }
  };

  return EventHandler;
}();

/* harmony default export */ var event_handler = (event_handler_EventHandler);
// CONCATENATED MODULE: ./src/utils/attr-list.js
function attr_list__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DECIMAL_RESOLUTION_REGEX = /^(\d+)x(\d+)$/;
var ATTR_LIST_REGEX = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;

// adapted from https://github.com/kanongil/node-m3u8parse/blob/master/attrlist.js

var AttrList = function () {
  function AttrList(attrs) {
    attr_list__classCallCheck(this, AttrList);

    if (typeof attrs === 'string') {
      attrs = AttrList.parseAttrList(attrs);
    }
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        this[attr] = attrs[attr];
      }
    }
  }

  AttrList.prototype.decimalInteger = function decimalInteger(attrName) {
    var intValue = parseInt(this[attrName], 10);
    if (intValue > Number.MAX_SAFE_INTEGER) {
      return Infinity;
    }
    return intValue;
  };

  AttrList.prototype.hexadecimalInteger = function hexadecimalInteger(attrName) {
    if (this[attrName]) {
      var stringValue = (this[attrName] || '0x').slice(2);
      stringValue = (stringValue.length & 1 ? '0' : '') + stringValue;

      var value = new Uint8Array(stringValue.length / 2);
      for (var i = 0; i < stringValue.length / 2; i++) {
        value[i] = parseInt(stringValue.slice(i * 2, i * 2 + 2), 16);
      }
      return value;
    } else {
      return null;
    }
  };

  AttrList.prototype.hexadecimalIntegerAsNumber = function hexadecimalIntegerAsNumber(attrName) {
    var intValue = parseInt(this[attrName], 16);
    if (intValue > Number.MAX_SAFE_INTEGER) {
      return Infinity;
    }
    return intValue;
  };

  AttrList.prototype.decimalFloatingPoint = function decimalFloatingPoint(attrName) {
    return parseFloat(this[attrName]);
  };

  AttrList.prototype.enumeratedString = function enumeratedString(attrName) {
    return this[attrName];
  };

  AttrList.prototype.decimalResolution = function decimalResolution(attrName) {
    var res = DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
    if (res === null) {
      return undefined;
    }
    return {
      width: parseInt(res[1], 10),
      height: parseInt(res[2], 10)
    };
  };

  AttrList.parseAttrList = function parseAttrList(input) {
    var match,
        attrs = {};
    ATTR_LIST_REGEX.lastIndex = 0;
    while ((match = ATTR_LIST_REGEX.exec(input)) !== null) {
      var value = match[2],
          quote = '"';

      if (value.indexOf(quote) === 0 && value.lastIndexOf(quote) === value.length - 1) {
        value = value.slice(1, -1);
      }
      attrs[match[1]] = value;
    }
    return attrs;
  };

  return AttrList;
}();

/* harmony default export */ var attr_list = (AttrList);
// CONCATENATED MODULE: ./src/utils/codecs.js
// from http://mp4ra.org/codecs.html
var sampleEntryCodesISO = {
    audio: {
        'a3ds': true,
        'ac-3': true,
        'ac-4': true,
        'alac': true,
        'alaw': true,
        'dra1': true,
        'dts+': true,
        'dts-': true,
        'dtsc': true,
        'dtse': true,
        'dtsh': true,
        'ec-3': true,
        'enca': true,
        'g719': true,
        'g726': true,
        'm4ae': true,
        'mha1': true,
        'mha2': true,
        'mhm1': true,
        'mhm2': true,
        'mlpa': true,
        'mp4a': true,
        'raw ': true,
        'Opus': true,
        'samr': true,
        'sawb': true,
        'sawp': true,
        'sevc': true,
        'sqcp': true,
        'ssmv': true,
        'twos': true,
        'ulaw': true
    },
    video: {
        'avc1': true,
        'avc2': true,
        'avc3': true,
        'avc4': true,
        'avcp': true,
        'drac': true,
        'dvav': true,
        'dvhe': true,
        'encv': true,
        'hev1': true,
        'hvc1': true,
        'mjp2': true,
        'mp4v': true,
        'mvc1': true,
        'mvc2': true,
        'mvc3': true,
        'mvc4': true,
        'resv': true,
        'rv60': true,
        's263': true,
        'svc1': true,
        'svc2': true,
        'vc-1': true,
        'vp08': true,
        'vp09': true
    }
};

function isCodecType(codec, type) {
    var typeCodes = sampleEntryCodesISO[type];
    return !!typeCodes && typeCodes[codec.slice(0, 4)] === true;
}

function isCodecSupportedInMp4(codec) {
    return MediaSource.isTypeSupported('video/mp4;codecs="' + codec + '"');
}


// CONCATENATED MODULE: ./src/loader/playlist-loader.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function playlist_loader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Playlist Loader
*/









// https://regex101.com is your friend
var MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
var MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g;

var LEVEL_PLAYLIST_REGEX_FAST = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
/|(?!#)(\S+)/.source, // segment URI, group 3 => the URI (note newline is not eaten)
/|#EXT-X-BYTERANGE:*(.+)/.source, // next segment's byterange, group 4 => range spec (x@y)
/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, // next segment's program date/time group 5 => the datetime spec
/|#.*/.source // All other non-segment oriented tags will match with all groups empty
].join(''), 'g');

var LEVEL_PLAYLIST_REGEX_SLOW = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;

var playlist_loader_LevelKey = function () {
  function LevelKey() {
    playlist_loader__classCallCheck(this, LevelKey);

    this.method = null;
    this.key = null;
    this.iv = null;
    this._uri = null;
  }

  _createClass(LevelKey, [{
    key: 'uri',
    get: function get() {
      if (!this._uri && this.reluri) {
        this._uri = url_toolkit_default.a.buildAbsoluteURL(this.baseuri, this.reluri, { alwaysNormalize: true });
      }
      return this._uri;
    }
  }]);

  return LevelKey;
}();

var playlist_loader_Fragment = function () {
  function Fragment() {
    playlist_loader__classCallCheck(this, Fragment);

    this._url = null;
    this._byteRange = null;
    this._decryptdata = null;
    this.tagList = [];
  }

  /**
   * Utility method for parseLevelPlaylist to create an initialization vector for a given segment
   * @returns {Uint8Array}
   */
  Fragment.prototype.createInitializationVector = function createInitializationVector(segmentNumber) {
    var uint8View = new Uint8Array(16);

    for (var i = 12; i < 16; i++) {
      uint8View[i] = segmentNumber >> 8 * (15 - i) & 0xff;
    }

    return uint8View;
  };

  /**
   * Utility method for parseLevelPlaylist to get a fragment's decryption data from the currently parsed encryption key data
   * @param levelkey - a playlist's encryption info
   * @param segmentNumber - the fragment's segment number
   * @returns {*} - an object to be applied as a fragment's decryptdata
   */


  Fragment.prototype.fragmentDecryptdataFromLevelkey = function fragmentDecryptdataFromLevelkey(levelkey, segmentNumber) {
    var decryptdata = levelkey;

    if (levelkey && levelkey.method && levelkey.uri && !levelkey.iv) {
      decryptdata = new playlist_loader_LevelKey();
      decryptdata.method = levelkey.method;
      decryptdata.baseuri = levelkey.baseuri;
      decryptdata.reluri = levelkey.reluri;
      decryptdata.iv = this.createInitializationVector(segmentNumber);
    }

    return decryptdata;
  };

  Fragment.prototype.cloneObj = function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  _createClass(Fragment, [{
    key: 'url',
    get: function get() {
      if (!this._url && this.relurl) {
        this._url = url_toolkit_default.a.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: true });
      }
      return this._url;
    },
    set: function set(value) {
      this._url = value;
    }
  }, {
    key: 'programDateTime',
    get: function get() {
      if (!this._programDateTime && this.rawProgramDateTime) {
        this._programDateTime = new Date(Date.parse(this.rawProgramDateTime));
      }
      return this._programDateTime;
    }
  }, {
    key: 'byteRange',
    get: function get() {
      if (!this._byteRange) {
        var byteRange = this._byteRange = [];
        if (this.rawByteRange) {
          var params = this.rawByteRange.split('@', 2);
          if (params.length === 1) {
            var lastByteRangeEndOffset = this.lastByteRangeEndOffset;
            byteRange[0] = lastByteRangeEndOffset ? lastByteRangeEndOffset : 0;
          } else {
            byteRange[0] = parseInt(params[1]);
          }
          byteRange[1] = parseInt(params[0]) + byteRange[0];
        }
      }
      return this._byteRange;
    }
  }, {
    key: 'byteRangeStartOffset',
    get: function get() {
      return this.byteRange[0];
    }
  }, {
    key: 'byteRangeEndOffset',
    get: function get() {
      return this.byteRange[1];
    }
  }, {
    key: 'decryptdata',
    get: function get() {
      if (!this._decryptdata) {
        this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn);
      }
      return this._decryptdata;
    }
  }]);

  return Fragment;
}();

var playlist_loader_PlaylistLoader = function (_EventHandler) {
  _inherits(PlaylistLoader, _EventHandler);

  function PlaylistLoader(hls) {
    playlist_loader__classCallCheck(this, PlaylistLoader);

    var _this = _possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MANIFEST_LOADING, events["a" /* default */].LEVEL_LOADING, events["a" /* default */].AUDIO_TRACK_LOADING, events["a" /* default */].SUBTITLE_TRACK_LOADING));

    _this.loaders = {};
    return _this;
  }

  PlaylistLoader.prototype.destroy = function destroy() {
    for (var loaderName in this.loaders) {
      var loader = this.loaders[loaderName];
      if (loader) {
        loader.destroy();
      }
    }
    this.loaders = {};
    event_handler.prototype.destroy.call(this);
  };

  PlaylistLoader.prototype.onManifestLoading = function onManifestLoading(data) {
    this.load(data.url, { type: 'manifest' });
  };

  PlaylistLoader.prototype.onLevelLoading = function onLevelLoading(data) {
    this.load(data.url, { type: 'level', level: data.level, id: data.id });
  };

  PlaylistLoader.prototype.onAudioTrackLoading = function onAudioTrackLoading(data) {
    this.load(data.url, { type: 'audioTrack', id: data.id });
  };

  PlaylistLoader.prototype.onSubtitleTrackLoading = function onSubtitleTrackLoading(data) {
    this.load(data.url, { type: 'subtitleTrack', id: data.id });
  };

  PlaylistLoader.prototype.load = function load(url, context) {
    var loader = this.loaders[context.type];
    if (loader) {
      var loaderContext = loader.context;
      if (loaderContext && loaderContext.url === url) {
        logger["b" /* logger */].trace('playlist request ongoing');
        return;
      } else {
        logger["b" /* logger */].warn('abort previous loader for type:' + context.type);
        loader.abort();
      }
    }
    var config = this.hls.config,
        retry = void 0,
        timeout = void 0,
        retryDelay = void 0,
        maxRetryDelay = void 0;
    if (context.type === 'manifest') {
      retry = config.manifestLoadingMaxRetry;
      timeout = config.manifestLoadingTimeOut;
      retryDelay = config.manifestLoadingRetryDelay;
      maxRetryDelay = config.manifestLoadingMaxRetryTimeout;
    } else {
      retry = config.levelLoadingMaxRetry;
      timeout = config.levelLoadingTimeOut;
      retryDelay = config.levelLoadingRetryDelay;
      maxRetryDelay = config.levelLoadingMaxRetryTimeout;
      logger["b" /* logger */].log('loading playlist for ' + context.type + ' ' + (context.level || context.id));
    }
    loader = this.loaders[context.type] = context.loader = typeof config.pLoader !== 'undefined' ? new config.pLoader(config) : new config.loader(config);
    context.url = url;
    context.responseType = '';

    var loaderConfig = void 0,
        loaderCallbacks = void 0;
    loaderConfig = { timeout: timeout, maxRetry: retry, retryDelay: retryDelay, maxRetryDelay: maxRetryDelay };
    loaderCallbacks = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
    loader.load(context, loaderConfig, loaderCallbacks);
  };

  PlaylistLoader.prototype.resolve = function resolve(url, baseUrl) {
    return url_toolkit_default.a.buildAbsoluteURL(baseUrl, url, { alwaysNormalize: true });
  };

  PlaylistLoader.prototype.parseMasterPlaylist = function parseMasterPlaylist(string, baseurl) {
    var levels = [],
        result = void 0;
    MASTER_PLAYLIST_REGEX.lastIndex = 0;

    function setCodecs(codecs, level) {
      ['video', 'audio'].forEach(function (type) {
        var filtered = codecs.filter(function (codec) {
          return isCodecType(codec, type);
        });
        if (filtered.length) {
          var preferred = filtered.filter(function (codec) {
            return codec.lastIndexOf('avc1', 0) === 0 || codec.lastIndexOf('mp4a', 0) === 0;
          });
          level[type + 'Codec'] = preferred.length > 0 ? preferred[0] : filtered[0];

          // remove from list
          codecs = codecs.filter(function (codec) {
            return filtered.indexOf(codec) === -1;
          });
        }
      });

      level.unknownCodecs = codecs;
    }

    while ((result = MASTER_PLAYLIST_REGEX.exec(string)) != null) {
      var level = {};

      var attrs = level.attrs = new attr_list(result[1]);
      level.url = this.resolve(result[2], baseurl);

      var resolution = attrs.decimalResolution('RESOLUTION');
      if (resolution) {
        level.width = resolution.width;
        level.height = resolution.height;
      }
      level.bitrate = attrs.decimalInteger('AVERAGE-BANDWIDTH') || attrs.decimalInteger('BANDWIDTH');
      level.name = attrs.NAME;

      setCodecs([].concat((attrs.CODECS || '').split(/[ ,]+/)), level);

      if (level.videoCodec && level.videoCodec.indexOf('avc1') !== -1) {
        level.videoCodec = this.avc1toavcoti(level.videoCodec);
      }

      levels.push(level);
    }
    return levels;
  };

  PlaylistLoader.prototype.parseMasterPlaylistMedia = function parseMasterPlaylistMedia(string, baseurl, type) {
    var audioCodec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var result = void 0,
        medias = [],
        id = 0;
    MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0;
    while ((result = MASTER_PLAYLIST_MEDIA_REGEX.exec(string)) != null) {
      var media = {};
      var attrs = new attr_list(result[1]);
      if (attrs.TYPE === type) {
        media.groupId = attrs['GROUP-ID'];
        media.name = attrs.NAME;
        media.type = type;
        media.default = attrs.DEFAULT === 'YES';
        media.autoselect = attrs.AUTOSELECT === 'YES';
        media.forced = attrs.FORCED === 'YES';
        if (attrs.URI) {
          media.url = this.resolve(attrs.URI, baseurl);
        }
        media.lang = attrs.LANGUAGE;
        if (!media.name) {
          media.name = media.lang;
        }
        if (audioCodec) {
          media.audioCodec = audioCodec;
        }
        media.id = id++;
        medias.push(media);
      }
    }
    return medias;
  };

  PlaylistLoader.prototype.avc1toavcoti = function avc1toavcoti(codec) {
    var result,
        avcdata = codec.split('.');
    if (avcdata.length > 2) {
      result = avcdata.shift() + '.';
      result += parseInt(avcdata.shift()).toString(16);
      result += ('000' + parseInt(avcdata.shift()).toString(16)).substr(-4);
    } else {
      result = codec;
    }
    return result;
  };

  PlaylistLoader.prototype.parseLevelPlaylist = function parseLevelPlaylist(string, baseurl, id, type) {
    var currentSN = 0,
        totalduration = 0,
        level = { type: null, version: null, url: baseurl, fragments: [], live: true, startSN: 0 },
        levelkey = new playlist_loader_LevelKey(),
        cc = 0,
        prevFrag = null,
        frag = new playlist_loader_Fragment(),
        result,
        i;

    LEVEL_PLAYLIST_REGEX_FAST.lastIndex = 0;

    while ((result = LEVEL_PLAYLIST_REGEX_FAST.exec(string)) !== null) {
      var duration = result[1];
      if (duration) {
        // INF
        frag.duration = parseFloat(duration);
        // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
        var title = (' ' + result[2]).slice(1);
        frag.title = title ? title : null;
        frag.tagList.push(title ? ['INF', duration, title] : ['INF', duration]);
      } else if (result[3]) {
        // url
        if (!isNaN(frag.duration)) {
          var sn = currentSN++;
          frag.type = type;
          frag.start = totalduration;
          frag.levelkey = levelkey;
          frag.sn = sn;
          frag.level = id;
          frag.cc = cc;
          frag.baseurl = baseurl;
          // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
          frag.relurl = (' ' + result[3]).slice(1);

          level.fragments.push(frag);
          prevFrag = frag;
          totalduration += frag.duration;

          frag = new playlist_loader_Fragment();
        }
      } else if (result[4]) {
        // X-BYTERANGE
        frag.rawByteRange = (' ' + result[4]).slice(1);
        if (prevFrag) {
          var lastByteRangeEndOffset = prevFrag.byteRangeEndOffset;
          if (lastByteRangeEndOffset) {
            frag.lastByteRangeEndOffset = lastByteRangeEndOffset;
          }
        }
      } else if (result[5]) {
        // PROGRAM-DATE-TIME
        // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
        frag.rawProgramDateTime = (' ' + result[5]).slice(1);
        frag.tagList.push(['PROGRAM-DATE-TIME', frag.rawProgramDateTime]);
        if (level.programDateTime === undefined) {
          level.programDateTime = new Date(new Date(Date.parse(result[5])) - 1000 * totalduration);
        }
      } else {
        result = result[0].match(LEVEL_PLAYLIST_REGEX_SLOW);
        for (i = 1; i < result.length; i++) {
          if (result[i] !== undefined) {
            break;
          }
        }

        // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
        var value1 = (' ' + result[i + 1]).slice(1);
        var value2 = (' ' + result[i + 2]).slice(1);

        switch (result[i]) {
          case '#':
            frag.tagList.push(value2 ? [value1, value2] : [value1]);
            break;
          case 'PLAYLIST-TYPE':
            level.type = value1.toUpperCase();
            break;
          case 'MEDIA-SEQUENCE':
            currentSN = level.startSN = parseInt(value1);
            break;
          case 'TARGETDURATION':
            level.targetduration = parseFloat(value1);
            break;
          case 'VERSION':
            level.version = parseInt(value1);
            break;
          case 'EXTM3U':
            break;
          case 'ENDLIST':
            level.live = false;
            break;
          case 'DIS':
            cc++;
            frag.tagList.push(['DIS']);
            break;
          case 'DISCONTINUITY-SEQ':
            cc = parseInt(value1);
            break;
          case 'KEY':
            // https://tools.ietf.org/html/draft-pantos-http-live-streaming-08#section-3.4.4
            var decryptparams = value1;
            var keyAttrs = new attr_list(decryptparams);
            var decryptmethod = keyAttrs.enumeratedString('METHOD'),
                decrypturi = keyAttrs.URI,
                decryptiv = keyAttrs.hexadecimalInteger('IV');
            if (decryptmethod) {
              levelkey = new playlist_loader_LevelKey();
              if (decrypturi && ['AES-128', 'SAMPLE-AES'].indexOf(decryptmethod) >= 0) {
                levelkey.method = decryptmethod;
                // URI to get the key
                levelkey.baseuri = baseurl;
                levelkey.reluri = decrypturi;
                levelkey.key = null;
                // Initialization Vector (IV)
                levelkey.iv = decryptiv;
              }
            }
            break;
          case 'START':
            var startParams = value1;
            var startAttrs = new attr_list(startParams);
            var startTimeOffset = startAttrs.decimalFloatingPoint('TIME-OFFSET');
            //TIME-OFFSET can be 0
            if (!isNaN(startTimeOffset)) {
              level.startTimeOffset = startTimeOffset;
            }
            break;
          case 'MAP':
            var mapAttrs = new attr_list(value1);
            frag.relurl = mapAttrs.URI;
            frag.rawByteRange = mapAttrs.BYTERANGE;
            frag.baseurl = baseurl;
            frag.level = id;
            frag.type = type;
            frag.sn = 'initSegment';
            level.initSegment = frag;
            frag = new playlist_loader_Fragment();
            break;
          default:
            logger["b" /* logger */].warn('line parsed but not handled: ' + result);
            break;
        }
      }
    }
    frag = prevFrag;
    //logger.log('found ' + level.fragments.length + ' fragments');
    if (frag && !frag.relurl) {
      level.fragments.pop();
      totalduration -= frag.duration;
    }
    level.totalduration = totalduration;
    level.averagetargetduration = totalduration / level.fragments.length;
    level.endSN = currentSN - 1;
    level.startCC = level.fragments[0] ? level.fragments[0].cc : 0;
    level.endCC = cc;
    return level;
  };

  PlaylistLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
    var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var string = response.data,
        url = response.url,
        type = context.type,
        id = context.id,
        level = context.level,
        hls = this.hls;

    this.loaders[type] = undefined;
    // responseURL not supported on some browsers (it is used to detect URL redirection)
    // data-uri mode also not supported (but no need to detect redirection)
    if (url === undefined || url.indexOf('data:') === 0) {
      // fallback to initial URL
      url = context.url;
    }
    stats.tload = performance.now();
    //stats.mtime = new Date(target.getResponseHeader('Last-Modified'));
    if (string.indexOf('#EXTM3U') === 0) {
      if (string.indexOf('#EXTINF:') > 0) {
        var isLevel = type !== 'audioTrack' && type !== 'subtitleTrack',
            levelId = !isNaN(level) ? level : !isNaN(id) ? id : 0,
            levelDetails = this.parseLevelPlaylist(string, url, levelId, type === 'audioTrack' ? 'audio' : type === 'subtitleTrack' ? 'subtitle' : 'main');
        levelDetails.tload = stats.tload;
        if (type === 'manifest') {
          // first request, stream manifest (no master playlist), fire manifest loaded event with level details
          hls.trigger(events["a" /* default */].MANIFEST_LOADED, { levels: [{ url: url, details: levelDetails }], audioTracks: [], url: url, stats: stats, networkDetails: networkDetails });
        }
        stats.tparsed = performance.now();
        if (levelDetails.targetduration) {
          if (isLevel) {
            hls.trigger(events["a" /* default */].LEVEL_LOADED, { details: levelDetails, level: level || 0, id: id || 0, stats: stats, networkDetails: networkDetails });
          } else {
            if (type === 'audioTrack') {
              hls.trigger(events["a" /* default */].AUDIO_TRACK_LOADED, { details: levelDetails, id: id, stats: stats, networkDetails: networkDetails });
            } else if (type === 'subtitleTrack') {
              hls.trigger(events["a" /* default */].SUBTITLE_TRACK_LOADED, { details: levelDetails, id: id, stats: stats, networkDetails: networkDetails });
            }
          }
        } else {
          hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].MANIFEST_PARSING_ERROR, fatal: true, url: url, reason: 'invalid targetduration', networkDetails: networkDetails });
        }
      } else {
        var levels = this.parseMasterPlaylist(string, url);
        // multi level playlist, parse level info
        if (levels.length) {
          var audioTracks = this.parseMasterPlaylistMedia(string, url, 'AUDIO', levels[0].audioCodec);
          var subtitles = this.parseMasterPlaylistMedia(string, url, 'SUBTITLES');
          if (audioTracks.length) {
            // check if we have found an audio track embedded in main playlist (audio track without URI attribute)
            var embeddedAudioFound = false;
            audioTracks.forEach(function (audioTrack) {
              if (!audioTrack.url) {
                embeddedAudioFound = true;
              }
            });
            // if no embedded audio track defined, but audio codec signaled in quality level, we need to signal this main audio track
            // this could happen with playlists with alt audio rendition in which quality levels (main) contains both audio+video. but with mixed audio track not signaled
            if (embeddedAudioFound === false && levels[0].audioCodec && !levels[0].attrs.AUDIO) {
              logger["b" /* logger */].log('audio codec signaled in quality level, but no embedded audio track signaled, create one');
              audioTracks.unshift({ type: 'main', name: 'main' });
            }
          }
          hls.trigger(events["a" /* default */].MANIFEST_LOADED, { levels: levels, audioTracks: audioTracks, subtitles: subtitles, url: url, stats: stats, networkDetails: networkDetails });
        } else {
          hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].MANIFEST_PARSING_ERROR, fatal: true, url: url, reason: 'no level found in manifest', networkDetails: networkDetails });
        }
      }
    } else {
      hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].MANIFEST_PARSING_ERROR, fatal: true, url: url, reason: 'no EXTM3U delimiter', networkDetails: networkDetails });
    }
  };

  PlaylistLoader.prototype.loaderror = function loaderror(response, context) {
    var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var details,
        fatal,
        loader = context.loader;
    switch (context.type) {
      case 'manifest':
        details = errors["a" /* ErrorDetails */].MANIFEST_LOAD_ERROR;
        fatal = true;
        break;
      case 'level':
        details = errors["a" /* ErrorDetails */].LEVEL_LOAD_ERROR;
        fatal = false;
        break;
      case 'audioTrack':
        details = errors["a" /* ErrorDetails */].AUDIO_TRACK_LOAD_ERROR;
        fatal = false;
        break;
    }
    if (loader) {
      loader.abort();
      this.loaders[context.type] = undefined;
    }
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: details, fatal: fatal, url: loader.url, loader: loader, response: response, context: context, networkDetails: networkDetails });
  };

  PlaylistLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
    var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var details,
        fatal,
        loader = context.loader;
    switch (context.type) {
      case 'manifest':
        details = errors["a" /* ErrorDetails */].MANIFEST_LOAD_TIMEOUT;
        fatal = true;
        break;
      case 'level':
        details = errors["a" /* ErrorDetails */].LEVEL_LOAD_TIMEOUT;
        fatal = false;
        break;
      case 'audioTrack':
        details = errors["a" /* ErrorDetails */].AUDIO_TRACK_LOAD_TIMEOUT;
        fatal = false;
        break;
    }
    if (loader) {
      loader.abort();
      this.loaders[context.type] = undefined;
    }
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: details, fatal: fatal, url: loader.url, loader: loader, context: context, networkDetails: networkDetails });
  };

  return PlaylistLoader;
}(event_handler);

/* harmony default export */ var playlist_loader = (playlist_loader_PlaylistLoader);
// CONCATENATED MODULE: ./src/loader/fragment-loader.js
function fragment_loader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fragment_loader__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function fragment_loader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Fragment Loader
*/






var fragment_loader_FragmentLoader = function (_EventHandler) {
  fragment_loader__inherits(FragmentLoader, _EventHandler);

  function FragmentLoader(hls) {
    fragment_loader__classCallCheck(this, FragmentLoader);

    var _this = fragment_loader__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].FRAG_LOADING));

    _this.loaders = {};
    return _this;
  }

  FragmentLoader.prototype.destroy = function destroy() {
    var loaders = this.loaders;
    for (var loaderName in loaders) {
      var loader = loaders[loaderName];
      if (loader) {
        loader.destroy();
      }
    }
    this.loaders = {};
    event_handler.prototype.destroy.call(this);
  };

  FragmentLoader.prototype.onFragLoading = function onFragLoading(data) {
    var frag = data.frag,
        type = frag.type,
        loader = this.loaders[type],
        config = this.hls.config;

    frag.loaded = 0;
    if (loader) {
      logger["b" /* logger */].warn('abort previous fragment loader for type:' + type);
      loader.abort();
    }
    loader = this.loaders[type] = frag.loader = typeof config.fLoader !== 'undefined' ? new config.fLoader(config) : new config.loader(config);

    var loaderContext = void 0,
        loaderConfig = void 0,
        loaderCallbacks = void 0;
    loaderContext = { url: frag.url, frag: frag, responseType: 'arraybuffer', progressData: false };
    var start = frag.byteRangeStartOffset,
        end = frag.byteRangeEndOffset;
    if (!isNaN(start) && !isNaN(end)) {
      loaderContext.rangeStart = start;
      loaderContext.rangeEnd = end;
    }
    loaderConfig = { timeout: config.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: config.fragLoadingMaxRetryTimeout };
    loaderCallbacks = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this), onProgress: this.loadprogress.bind(this) };
    loader.load(loaderContext, loaderConfig, loaderCallbacks);
  };

  FragmentLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
    var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var payload = response.data,
        frag = context.frag;
    // detach fragment loader on load success
    frag.loader = undefined;
    this.loaders[frag.type] = undefined;
    this.hls.trigger(events["a" /* default */].FRAG_LOADED, { payload: payload, frag: frag, stats: stats, networkDetails: networkDetails });
  };

  FragmentLoader.prototype.loaderror = function loaderror(response, context) {
    var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var loader = context.loader;
    if (loader) {
      loader.abort();
    }
    this.loaders[context.type] = undefined;
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].FRAG_LOAD_ERROR, fatal: false, frag: context.frag, response: response, networkDetails: networkDetails });
  };

  FragmentLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
    var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var loader = context.loader;
    if (loader) {
      loader.abort();
    }
    this.loaders[context.type] = undefined;
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].FRAG_LOAD_TIMEOUT, fatal: false, frag: context.frag, networkDetails: networkDetails });
  };

  // data will be used for progressive parsing


  FragmentLoader.prototype.loadprogress = function loadprogress(stats, context, data) {
    var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    // jshint ignore:line
    var frag = context.frag;
    frag.loaded = stats.loaded;
    this.hls.trigger(events["a" /* default */].FRAG_LOAD_PROGRESS, { frag: frag, stats: stats, networkDetails: networkDetails });
  };

  return FragmentLoader;
}(event_handler);

/* harmony default export */ var fragment_loader = (fragment_loader_FragmentLoader);
// CONCATENATED MODULE: ./src/loader/key-loader.js
function key_loader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function key_loader__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function key_loader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Decrypt key Loader
*/






var key_loader_KeyLoader = function (_EventHandler) {
  key_loader__inherits(KeyLoader, _EventHandler);

  function KeyLoader(hls) {
    key_loader__classCallCheck(this, KeyLoader);

    var _this = key_loader__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].KEY_LOADING));

    _this.loaders = {};
    _this.decryptkey = null;
    _this.decrypturl = null;
    return _this;
  }

  KeyLoader.prototype.destroy = function destroy() {
    for (var loaderName in this.loaders) {
      var loader = this.loaders[loaderName];
      if (loader) {
        loader.destroy();
      }
    }
    this.loaders = {};
    event_handler.prototype.destroy.call(this);
  };

  KeyLoader.prototype.onKeyLoading = function onKeyLoading(data) {
    var frag = data.frag,
        type = frag.type,
        loader = this.loaders[type],
        decryptdata = frag.decryptdata,
        uri = decryptdata.uri;
    // if uri is different from previous one or if decrypt key not retrieved yet
    if (uri !== this.decrypturl || this.decryptkey === null) {
      var config = this.hls.config;

      if (loader) {
        logger["b" /* logger */].warn('abort previous key loader for type:' + type);
        loader.abort();
      }
      frag.loader = this.loaders[type] = new config.loader(config);
      this.decrypturl = uri;
      this.decryptkey = null;

      var loaderContext = void 0,
          loaderConfig = void 0,
          loaderCallbacks = void 0;
      loaderContext = { url: uri, frag: frag, responseType: 'arraybuffer' };
      loaderConfig = { timeout: config.fragLoadingTimeOut, maxRetry: config.fragLoadingMaxRetry, retryDelay: config.fragLoadingRetryDelay, maxRetryDelay: config.fragLoadingMaxRetryTimeout };
      loaderCallbacks = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
      frag.loader.load(loaderContext, loaderConfig, loaderCallbacks);
    } else if (this.decryptkey) {
      // we already loaded this key, return it
      decryptdata.key = this.decryptkey;
      this.hls.trigger(events["a" /* default */].KEY_LOADED, { frag: frag });
    }
  };

  KeyLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
    var frag = context.frag;
    this.decryptkey = frag.decryptdata.key = new Uint8Array(response.data);
    // detach fragment loader on load success
    frag.loader = undefined;
    this.loaders[frag.type] = undefined;
    this.hls.trigger(events["a" /* default */].KEY_LOADED, { frag: frag });
  };

  KeyLoader.prototype.loaderror = function loaderror(response, context) {
    var frag = context.frag,
        loader = frag.loader;
    if (loader) {
      loader.abort();
    }
    this.loaders[context.type] = undefined;
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].KEY_LOAD_ERROR, fatal: false, frag: frag, response: response });
  };

  KeyLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
    var frag = context.frag,
        loader = frag.loader;
    if (loader) {
      loader.abort();
    }
    this.loaders[context.type] = undefined;
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].NETWORK_ERROR, details: errors["a" /* ErrorDetails */].KEY_LOAD_TIMEOUT, fatal: false, frag: frag });
  };

  return KeyLoader;
}(event_handler);

/* harmony default export */ var key_loader = (key_loader_KeyLoader);
// CONCATENATED MODULE: ./src/utils/binary-search.js
var BinarySearch = {
    /**
     * Searches for an item in an array which matches a certain condition.
     * This requires the condition to only match one item in the array,
     * and for the array to be ordered.
     *
     * @param {Array} list The array to search.
     * @param {Function} comparisonFunction
     *      Called and provided a candidate item as the first argument.
     *      Should return:
     *          > -1 if the item should be located at a lower index than the provided item.
     *          > 1 if the item should be located at a higher index than the provided item.
     *          > 0 if the item is the item you're looking for.
     *
     * @return {*} The object if it is found or null otherwise.
     */
    search: function search(list, comparisonFunction) {
        var minIndex = 0;
        var maxIndex = list.length - 1;
        var currentIndex = null;
        var currentElement = null;

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = list[currentIndex];

            var comparisonResult = comparisonFunction(currentElement);
            if (comparisonResult > 0) {
                minIndex = currentIndex + 1;
            } else if (comparisonResult < 0) {
                maxIndex = currentIndex - 1;
            } else {
                return currentElement;
            }
        }

        return null;
    }
};

/* harmony default export */ var binary_search = (BinarySearch);
// CONCATENATED MODULE: ./src/helper/buffer-helper.js
/**
 * Buffer Helper utils, providing methods dealing buffer length retrieval
*/

var BufferHelper = {
  isBuffered: function isBuffered(media, position) {
    if (media) {
      var buffered = media.buffered;
      for (var i = 0; i < buffered.length; i++) {
        if (position >= buffered.start(i) && position <= buffered.end(i)) {
          return true;
        }
      }
    }
    return false;
  },

  bufferInfo: function bufferInfo(media, pos, maxHoleDuration) {
    if (media) {
      var vbuffered = media.buffered,
          buffered = [],
          i;
      for (i = 0; i < vbuffered.length; i++) {
        buffered.push({ start: vbuffered.start(i), end: vbuffered.end(i) });
      }
      return this.bufferedInfo(buffered, pos, maxHoleDuration);
    } else {
      return { len: 0, start: pos, end: pos, nextStart: undefined };
    }
  },

  bufferedInfo: function bufferedInfo(buffered, pos, maxHoleDuration) {
    var buffered2 = [],

    // bufferStart and bufferEnd are buffer boundaries around current video position
    bufferLen,
        bufferStart,
        bufferEnd,
        bufferStartNext,
        i;
    // sort on buffer.start/smaller end (IE does not always return sorted buffered range)
    buffered.sort(function (a, b) {
      var diff = a.start - b.start;
      if (diff) {
        return diff;
      } else {
        return b.end - a.end;
      }
    });
    // there might be some small holes between buffer time range
    // consider that holes smaller than maxHoleDuration are irrelevant and build another
    // buffer time range representations that discards those holes
    for (i = 0; i < buffered.length; i++) {
      var buf2len = buffered2.length;
      if (buf2len) {
        var buf2end = buffered2[buf2len - 1].end;
        // if small hole (value between 0 or maxHoleDuration ) or overlapping (negative)
        if (buffered[i].start - buf2end < maxHoleDuration) {
          // merge overlapping time ranges
          // update lastRange.end only if smaller than item.end
          // e.g.  [ 1, 15] with  [ 2,8] => [ 1,15] (no need to modify lastRange.end)
          // whereas [ 1, 8] with  [ 2,15] => [ 1,15] ( lastRange should switch from [1,8] to [1,15])
          if (buffered[i].end > buf2end) {
            buffered2[buf2len - 1].end = buffered[i].end;
          }
        } else {
          // big hole
          buffered2.push(buffered[i]);
        }
      } else {
        // first value
        buffered2.push(buffered[i]);
      }
    }
    for (i = 0, bufferLen = 0, bufferStart = bufferEnd = pos; i < buffered2.length; i++) {
      var start = buffered2[i].start,
          end = buffered2[i].end;
      //logger.log('buf start/end:' + buffered.start(i) + '/' + buffered.end(i));
      if (pos + maxHoleDuration >= start && pos < end) {
        // play position is inside this buffer TimeRange, retrieve end of buffer position and buffer length
        bufferStart = start;
        bufferEnd = end;
        bufferLen = bufferEnd - pos;
      } else if (pos + maxHoleDuration < start) {
        bufferStartNext = start;
        break;
      }
    }
    return { len: bufferLen, start: bufferStart, end: bufferEnd, nextStart: bufferStartNext };
  }
};

/* harmony default export */ var buffer_helper = (BufferHelper);
// EXTERNAL MODULE: ./src/demux/demuxer-inline.js + 16 modules
var demuxer_inline = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/events/events.js
var events_events = __webpack_require__(4);
var events_default = /*#__PURE__*/__webpack_require__.n(events_events);

// EXTERNAL MODULE: ./node_modules/webworkify-webpack/index.js
var webworkify_webpack = __webpack_require__(8);
var webworkify_webpack_default = /*#__PURE__*/__webpack_require__.n(webworkify_webpack);

// CONCATENATED MODULE: ./src/demux/demuxer.js
function demuxer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var demuxer_Demuxer = function () {
  function Demuxer(hls, id) {
    demuxer__classCallCheck(this, Demuxer);

    this.hls = hls;
    this.id = id;
    // observer setup
    var observer = this.observer = new events_default.a();
    var config = hls.config;
    observer.trigger = function trigger(event) {
      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      observer.emit.apply(observer, [event, event].concat(data));
    };

    observer.off = function off(event) {
      for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        data[_key2 - 1] = arguments[_key2];
      }

      observer.removeListener.apply(observer, [event].concat(data));
    };

    var forwardMessage = function (ev, data) {
      data = data || {};
      data.frag = this.frag;
      data.id = this.id;
      hls.trigger(ev, data);
    }.bind(this);

    // forward events to main thread
    observer.on(events["a" /* default */].FRAG_DECRYPTED, forwardMessage);
    observer.on(events["a" /* default */].FRAG_PARSING_INIT_SEGMENT, forwardMessage);
    observer.on(events["a" /* default */].FRAG_PARSING_DATA, forwardMessage);
    observer.on(events["a" /* default */].FRAG_PARSED, forwardMessage);
    observer.on(events["a" /* default */].ERROR, forwardMessage);
    observer.on(events["a" /* default */].FRAG_PARSING_METADATA, forwardMessage);
    observer.on(events["a" /* default */].FRAG_PARSING_USERDATA, forwardMessage);
    observer.on(events["a" /* default */].INIT_PTS_FOUND, forwardMessage);

    var typeSupported = {
      mp4: MediaSource.isTypeSupported('video/mp4'),
      mpeg: MediaSource.isTypeSupported('audio/mpeg'),
      mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')
    };
    // navigator.vendor is not always available in Web Worker
    // refer to https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator
    var vendor = navigator.vendor;
    if (config.enableWorker && typeof Worker !== 'undefined') {
      logger["b" /* logger */].log('demuxing in webworker');
      var w = void 0;
      try {
        w = this.w = webworkify_webpack_default()(/*require.resolve*/(9));
        this.onwmsg = this.onWorkerMessage.bind(this);
        w.addEventListener('message', this.onwmsg);
        w.onerror = function (event) {
          hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].OTHER_ERROR, details: errors["a" /* ErrorDetails */].INTERNAL_EXCEPTION, fatal: true, event: 'demuxerWorker', err: { message: event.message + ' (' + event.filename + ':' + event.lineno + ')' } });
        };
        w.postMessage({ cmd: 'init', typeSupported: typeSupported, vendor: vendor, id: id, config: JSON.stringify(config) });
      } catch (err) {
        logger["b" /* logger */].error('error while initializing DemuxerWorker, fallback on DemuxerInline');
        if (w) {
          // revoke the Object URL that was used to create demuxer worker, so as not to leak it
          URL.revokeObjectURL(w.objectURL);
        }
        this.demuxer = new demuxer_inline["a" /* default */](observer, typeSupported, config, vendor);
        this.w = undefined;
      }
    } else {
      this.demuxer = new demuxer_inline["a" /* default */](observer, typeSupported, config, vendor);
    }
  }

  Demuxer.prototype.destroy = function destroy() {
    var w = this.w;
    if (w) {
      w.removeEventListener('message', this.onwmsg);
      w.terminate();
      this.w = null;
    } else {
      var demuxer = this.demuxer;
      if (demuxer) {
        demuxer.destroy();
        this.demuxer = null;
      }
    }
    var observer = this.observer;
    if (observer) {
      observer.removeAllListeners();
      this.observer = null;
    }
  };

  Demuxer.prototype.push = function push(data, initSegment, audioCodec, videoCodec, frag, duration, accurateTimeOffset, defaultInitPTS) {
    var w = this.w;
    var timeOffset = !isNaN(frag.startDTS) ? frag.startDTS : frag.start;
    var decryptdata = frag.decryptdata;
    var lastFrag = this.frag;
    var discontinuity = !(lastFrag && frag.cc === lastFrag.cc);
    var trackSwitch = !(lastFrag && frag.level === lastFrag.level);
    var nextSN = lastFrag && frag.sn === lastFrag.sn + 1;
    var contiguous = !trackSwitch && nextSN;
    if (discontinuity) {
      logger["b" /* logger */].log(this.id + ':discontinuity detected');
    }
    if (trackSwitch) {
      logger["b" /* logger */].log(this.id + ':switch detected');
    }
    this.frag = frag;
    if (w) {
      // post fragment payload as transferable objects (no copy)
      w.postMessage({ cmd: 'demux', data: data, decryptdata: decryptdata, initSegment: initSegment, audioCodec: audioCodec, videoCodec: videoCodec, timeOffset: timeOffset, discontinuity: discontinuity, trackSwitch: trackSwitch, contiguous: contiguous, duration: duration, accurateTimeOffset: accurateTimeOffset, defaultInitPTS: defaultInitPTS }, [data]);
    } else {
      var demuxer = this.demuxer;
      if (demuxer) {
        demuxer.push(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
      }
    }
  };

  Demuxer.prototype.onWorkerMessage = function onWorkerMessage(ev) {
    var data = ev.data,
        hls = this.hls;
    //console.log('onWorkerMessage:' + data.event);
    switch (data.event) {
      case 'init':
        // revoke the Object URL that was used to create demuxer worker, so as not to leak it
        URL.revokeObjectURL(this.w.objectURL);
        break;
      // special case for FRAG_PARSING_DATA: data1 and data2 are transferable objects
      case events["a" /* default */].FRAG_PARSING_DATA:
        data.data.data1 = new Uint8Array(data.data1);
        if (data.data2) {
          data.data.data2 = new Uint8Array(data.data2);
        }
      /* falls through */
      default:
        data.data = data.data || {};
        data.data.frag = this.frag;
        data.data.id = this.id;
        hls.trigger(data.event, data.data);
        break;
    }
  };

  return Demuxer;
}();

/* harmony default export */ var demux_demuxer = (demuxer_Demuxer);
// CONCATENATED MODULE: ./src/helper/level-helper.js
/**
 * Level Helper class, providing methods dealing with playlist sliding and drift
*/



function updatePTS(fragments, fromIdx, toIdx) {
  var fragFrom = fragments[fromIdx],
      fragTo = fragments[toIdx],
      fragToPTS = fragTo.startPTS;
  // if we know startPTS[toIdx]
  if (!isNaN(fragToPTS)) {
    // update fragment duration.
    // it helps to fix drifts between playlist reported duration and fragment real duration
    if (toIdx > fromIdx) {
      fragFrom.duration = fragToPTS - fragFrom.start;
      if (fragFrom.duration < 0) {
        logger["b" /* logger */].warn('negative duration computed for frag ' + fragFrom.sn + ',level ' + fragFrom.level + ', there should be some duration drift between playlist and fragment!');
      }
    } else {
      fragTo.duration = fragFrom.start - fragToPTS;
      if (fragTo.duration < 0) {
        logger["b" /* logger */].warn('negative duration computed for frag ' + fragTo.sn + ',level ' + fragTo.level + ', there should be some duration drift between playlist and fragment!');
      }
    }
  } else {
    // we dont know startPTS[toIdx]
    if (toIdx > fromIdx) {
      fragTo.start = fragFrom.start + fragFrom.duration;
    } else {
      fragTo.start = Math.max(fragFrom.start - fragTo.duration, 0);
    }
  }
}

function updateFragPTSDTS(details, frag, startPTS, endPTS, startDTS, endDTS) {
  // update frag PTS/DTS
  if (!isNaN(frag.startPTS)) {
    // delta PTS between audio and video
    var deltaPTS = Math.abs(frag.startPTS - startPTS);
    if (isNaN(frag.deltaPTS)) {
      frag.deltaPTS = deltaPTS;
    } else {
      frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS);
    }
    startPTS = Math.min(startPTS, frag.startPTS);
    endPTS = Math.max(endPTS, frag.endPTS);
    startDTS = Math.min(startDTS, frag.startDTS);
    endDTS = Math.max(endDTS, frag.endDTS);
  }

  var drift = startPTS - frag.start;
  frag.start = frag.startPTS = startPTS;
  frag.endPTS = endPTS;
  frag.startDTS = startDTS;
  frag.endDTS = endDTS;
  frag.duration = endPTS - startPTS;

  var sn = frag.sn;
  // exit if sn out of range
  if (!details || sn < details.startSN || sn > details.endSN) {
    return 0;
  }
  var fragIdx, fragments, i;
  fragIdx = sn - details.startSN;
  fragments = details.fragments;
  // update frag reference in fragments array
  // rationale is that fragments array might not contain this frag object.
  // this will happpen if playlist has been refreshed between frag loading and call to updateFragPTSDTS()
  // if we don't update frag, we won't be able to propagate PTS info on the playlist
  // resulting in invalid sliding computation
  fragments[fragIdx] = frag;
  // adjust fragment PTS/duration from seqnum-1 to frag 0
  for (i = fragIdx; i > 0; i--) {
    updatePTS(fragments, i, i - 1);
  }

  // adjust fragment PTS/duration from seqnum to last frag
  for (i = fragIdx; i < fragments.length - 1; i++) {
    updatePTS(fragments, i, i + 1);
  }
  details.PTSKnown = true;
  //logger.log(`                                            frag start/end:${startPTS.toFixed(3)}/${endPTS.toFixed(3)}`);

  return drift;
}

function mergeDetails(oldDetails, newDetails) {
  var start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN,
      end = Math.min(oldDetails.endSN, newDetails.endSN) - newDetails.startSN,
      delta = newDetails.startSN - oldDetails.startSN,
      oldfragments = oldDetails.fragments,
      newfragments = newDetails.fragments,
      ccOffset = 0,
      PTSFrag;

  // check if old/new playlists have fragments in common
  if (end < start) {
    newDetails.PTSKnown = false;
    return;
  }
  // loop through overlapping SN and update startPTS , cc, and duration if any found
  for (var i = start; i <= end; i++) {
    var oldFrag = oldfragments[delta + i],
        newFrag = newfragments[i];
    if (newFrag && oldFrag) {
      ccOffset = oldFrag.cc - newFrag.cc;
      if (!isNaN(oldFrag.startPTS)) {
        newFrag.start = newFrag.startPTS = oldFrag.startPTS;
        newFrag.endPTS = oldFrag.endPTS;
        newFrag.duration = oldFrag.duration;
        newFrag.backtracked = oldFrag.backtracked;
        newFrag.dropped = oldFrag.dropped;
        PTSFrag = newFrag;
      }
    }
  }

  if (ccOffset) {
    logger["b" /* logger */].log('discontinuity sliding from playlist, take drift into account');
    for (i = 0; i < newfragments.length; i++) {
      newfragments[i].cc += ccOffset;
    }
  }

  // if at least one fragment contains PTS info, recompute PTS information for all fragments
  if (PTSFrag) {
    updateFragPTSDTS(newDetails, PTSFrag, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS);
  } else {
    // ensure that delta is within oldfragments range
    // also adjust sliding in case delta is 0 (we could have old=[50-60] and new=old=[50-61])
    // in that case we also need to adjust start offset of all fragments
    if (delta >= 0 && delta < oldfragments.length) {
      // adjust start by sliding offset
      var sliding = oldfragments[delta].start;
      for (i = 0; i < newfragments.length; i++) {
        newfragments[i].start += sliding;
      }
    }
  }
  // if we are here, it means we have fragments overlapping between
  // old and new level. reliable PTS info is thus relying on old level
  newDetails.PTSKnown = oldDetails.PTSKnown;
}
// CONCATENATED MODULE: ./src/utils/timeRanges.js
/**
 *  TimeRanges to string helper
 */

var TimeRanges = {
  toString: function toString(r) {
    var log = '',
        len = r.length;
    for (var i = 0; i < len; i++) {
      log += '[' + r.start(i).toFixed(3) + ',' + r.end(i).toFixed(3) + ']';
    }
    return log;
  }
};

/* harmony default export */ var timeRanges = (TimeRanges);
// CONCATENATED MODULE: ./src/utils/discontinuities.js



function findFirstFragWithCC(fragments, cc) {
  var firstFrag = null;

  for (var i = 0; i < fragments.length; i += 1) {
    var currentFrag = fragments[i];
    if (currentFrag && currentFrag.cc === cc) {
      firstFrag = currentFrag;
      break;
    }
  }

  return firstFrag;
}

function findFragWithCC(fragments, CC) {
  return binary_search.search(fragments, function (candidate) {
    if (candidate.cc < CC) {
      return 1;
    } else if (candidate.cc > CC) {
      return -1;
    } else {
      return 0;
    }
  });
}

function shouldAlignOnDiscontinuities(lastFrag, lastLevel, details) {
  var shouldAlign = false;
  if (lastLevel && lastLevel.details && details) {
    if (details.endCC > details.startCC || lastFrag && lastFrag.cc < details.startCC) {
      shouldAlign = true;
    }
  }
  return shouldAlign;
}

// Find the first frag in the previous level which matches the CC of the first frag of the new level
function findDiscontinuousReferenceFrag(prevDetails, curDetails) {
  var prevFrags = prevDetails.fragments;
  var curFrags = curDetails.fragments;

  if (!curFrags.length || !prevFrags.length) {
    logger["b" /* logger */].log('No fragments to align');
    return;
  }

  var prevStartFrag = findFirstFragWithCC(prevFrags, curFrags[0].cc);

  if (!prevStartFrag || prevStartFrag && !prevStartFrag.startPTS) {
    logger["b" /* logger */].log('No frag in previous level to align on');
    return;
  }

  return prevStartFrag;
}

function adjustPts(sliding, details) {
  details.fragments.forEach(function (frag) {
    if (frag) {
      var start = frag.start + sliding;
      frag.start = frag.startPTS = start;
      frag.endPTS = start + frag.duration;
    }
  });
  details.PTSKnown = true;
}

// If a change in CC is detected, the PTS can no longer be relied upon
// Attempt to align the level by using the last level - find the last frag matching the current CC and use it's PTS
// as a reference
function alignDiscontinuities(lastFrag, lastLevel, details) {
  if (shouldAlignOnDiscontinuities(lastFrag, lastLevel, details)) {
    var referenceFrag = findDiscontinuousReferenceFrag(lastLevel.details, details);
    if (referenceFrag) {
      logger["b" /* logger */].log('Adjusting PTS using last level due to CC increase within current level');
      adjustPts(referenceFrag.start, details);
    }
  }
  // try to align using programDateTime attribute (if available)
  if (details.PTSKnown === false && lastLevel && lastLevel.details) {
    // if last level sliding is 1000 and its first frag PROGRAM-DATE-TIME is 2017-08-20 1:10:00 AM
    // and if new details first frag PROGRAM DATE-TIME is 2017-08-20 1:10:08 AM
    // then we can deduce that playlist B sliding is 1000+8 = 1008s
    var lastPDT = lastLevel.details.programDateTime;
    var newPDT = details.programDateTime;
    // date diff is in ms. frag.start is in seconds
    var sliding = (newPDT - lastPDT) / 1000 + lastLevel.details.fragments[0].start;
    if (!isNaN(sliding)) {
      logger["b" /* logger */].log('adjusting PTS using programDateTime delta, sliding:' + sliding.toFixed(3));
      adjustPts(sliding, details);
    }
  }
}
// CONCATENATED MODULE: ./src/controller/stream-controller.js
var stream_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function stream_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stream_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function stream_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Stream Controller
*/











var State = {
  STOPPED: 'STOPPED',
  IDLE: 'IDLE',
  KEY_LOADING: 'KEY_LOADING',
  FRAG_LOADING: 'FRAG_LOADING',
  FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
  WAITING_LEVEL: 'WAITING_LEVEL',
  PARSING: 'PARSING',
  PARSED: 'PARSED',
  BUFFER_FLUSHING: 'BUFFER_FLUSHING',
  ENDED: 'ENDED',
  ERROR: 'ERROR'
};

var stream_controller_StreamController = function (_EventHandler) {
  stream_controller__inherits(StreamController, _EventHandler);

  function StreamController(hls) {
    stream_controller__classCallCheck(this, StreamController);

    var _this = stream_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHED, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].MANIFEST_LOADING, events["a" /* default */].MANIFEST_PARSED, events["a" /* default */].LEVEL_LOADED, events["a" /* default */].KEY_LOADED, events["a" /* default */].FRAG_LOADED, events["a" /* default */].FRAG_LOAD_EMERGENCY_ABORTED, events["a" /* default */].FRAG_PARSING_INIT_SEGMENT, events["a" /* default */].FRAG_PARSING_DATA, events["a" /* default */].FRAG_PARSED, events["a" /* default */].ERROR, events["a" /* default */].AUDIO_TRACK_SWITCHING, events["a" /* default */].AUDIO_TRACK_SWITCHED, events["a" /* default */].BUFFER_CREATED, events["a" /* default */].BUFFER_APPENDED, events["a" /* default */].BUFFER_FLUSHED));

    _this.config = hls.config;
    _this.audioCodecSwap = false;
    _this.ticks = 0;
    _this._state = State.STOPPED;
    _this.ontick = _this.tick.bind(_this);
    return _this;
  }

  StreamController.prototype.destroy = function destroy() {
    this.stopLoad();
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    event_handler.prototype.destroy.call(this);
    this.state = State.STOPPED;
  };

  StreamController.prototype.startLoad = function startLoad(startPosition) {
    if (this.levels) {
      var lastCurrentTime = this.lastCurrentTime,
          hls = this.hls;
      this.stopLoad();
      if (!this.timer) {
        this.timer = setInterval(this.ontick, 100);
      }
      this.level = -1;
      this.fragLoadError = 0;
      if (!this.startFragRequested) {
        // determine load level
        var startLevel = hls.startLevel;
        if (startLevel === -1) {
          // -1 : guess start Level by doing a bitrate test by loading first fragment of lowest quality level
          startLevel = 0;
          this.bitrateTest = true;
        }
        // set new level to playlist loader : this will trigger start level load
        // hls.nextLoadLevel remains until it is set to a new value or until a new frag is successfully loaded
        this.level = hls.nextLoadLevel = startLevel;
        this.loadedmetadata = false;
      }
      // if startPosition undefined but lastCurrentTime set, set startPosition to last currentTime
      if (lastCurrentTime > 0 && startPosition === -1) {
        logger["b" /* logger */].log('override startPosition with lastCurrentTime @' + lastCurrentTime.toFixed(3));
        startPosition = lastCurrentTime;
      }
      this.state = State.IDLE;
      this.nextLoadPosition = this.startPosition = this.lastCurrentTime = startPosition;
      this.tick();
    } else {
      this.forceStartLoad = true;
      this.state = State.STOPPED;
    }
  };

  StreamController.prototype.stopLoad = function stopLoad() {
    var frag = this.fragCurrent;
    if (frag) {
      if (frag.loader) {
        frag.loader.abort();
      }
      this.fragCurrent = null;
    }
    this.fragPrevious = null;
    if (this.demuxer) {
      this.demuxer.destroy();
      this.demuxer = null;
    }
    this.state = State.STOPPED;
    this.forceStartLoad = false;
  };

  StreamController.prototype.tick = function tick() {
    this.ticks++;
    if (this.ticks === 1) {
      this.doTick();
      if (this.ticks > 1) {
        setTimeout(this.tick, 1);
      }
      this.ticks = 0;
    }
  };

  StreamController.prototype.doTick = function doTick() {
    switch (this.state) {
      case State.ERROR:
        //don't do anything in error state to avoid breaking further ...
        break;
      case State.BUFFER_FLUSHING:
        // in buffer flushing state, reset fragLoadError counter
        this.fragLoadError = 0;
        break;
      case State.IDLE:
        this._doTickIdle();
        break;
      case State.WAITING_LEVEL:
        var level = this.levels[this.level];
        // check if playlist is already loaded
        if (level && level.details) {
          this.state = State.IDLE;
        }
        break;
      case State.FRAG_LOADING_WAITING_RETRY:
        var now = performance.now();
        var retryDate = this.retryDate;
        // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
        if (!retryDate || now >= retryDate || this.media && this.media.seeking) {
          logger["b" /* logger */].log('mediaController: retryDate reached, switch back to IDLE state');
          this.state = State.IDLE;
        }
        break;
      case State.ERROR:
      case State.STOPPED:
      case State.FRAG_LOADING:
      case State.PARSING:
      case State.PARSED:
      case State.ENDED:
        break;
      default:
        break;
    }
    // check buffer
    this._checkBuffer();
    // check/update current fragment
    this._checkFragmentChanged();
  };

  // Ironically the "idle" state is the on we do the most logic in it seems ....
  // NOTE: Maybe we could rather schedule a check for buffer length after half of the currently
  //       played segment, or on pause/play/seek instead of naively checking every 100ms?


  StreamController.prototype._doTickIdle = function _doTickIdle() {
    var hls = this.hls,
        config = hls.config,
        media = this.media;

    // if video not attached AND
    // start fragment already requested OR start frag prefetch disable
    // exit loop
    // => if start level loaded and media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
    if (this.levelLastLoaded !== undefined && !media && (this.startFragRequested || !config.startFragPrefetch)) {
      return;
    }

    // if we have not yet loaded any fragment, start loading from start position
    var pos = void 0;
    if (this.loadedmetadata) {
      pos = media.currentTime;
    } else {
      pos = this.nextLoadPosition;
    }
    // determine next load level
    var level = hls.nextLoadLevel,
        levelInfo = this.levels[level];

    if (!levelInfo) {
      return;
    }

    var levelBitrate = levelInfo.bitrate,
        maxBufLen = void 0;

    // compute max Buffer Length that we could get from this load level, based on level bitrate. don't buffer more than 60 MB and more than 30s
    if (levelBitrate) {
      maxBufLen = Math.max(8 * config.maxBufferSize / levelBitrate, config.maxBufferLength);
    } else {
      maxBufLen = config.maxBufferLength;
    }
    maxBufLen = Math.min(maxBufLen, config.maxMaxBufferLength);

    // determine next candidate fragment to be loaded, based on current position and end of buffer position
    // ensure up to `config.maxMaxBufferLength` of buffer upfront

    var bufferInfo = buffer_helper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : media, pos, config.maxBufferHole),
        bufferLen = bufferInfo.len;
    // Stay idle if we are still with buffer margins
    if (bufferLen >= maxBufLen) {
      return;
    }

    // if buffer length is less than maxBufLen try to load a new fragment ...
    logger["b" /* logger */].trace('buffer length of ' + bufferLen.toFixed(3) + ' is below max of ' + maxBufLen.toFixed(3) + '. checking for more payload ...');

    // set next load level : this will trigger a playlist load if needed
    this.level = hls.nextLoadLevel = level;

    var levelDetails = levelInfo.details;
    // if level info not retrieved yet, switch state and wait for level retrieval
    // if live playlist, ensure that new playlist has been refreshed to avoid loading/try to load
    // a useless and outdated fragment (that might even introduce load error if it is already out of the live playlist)
    if (typeof levelDetails === 'undefined' || levelDetails.live && this.levelLastLoaded !== level) {
      this.state = State.WAITING_LEVEL;
      return;
    }

    // we just got done loading the final fragment and there is no other buffered range after ...
    // rationale is that in case there are any buffered ranges after, it means that there are unbuffered portion in between
    // so we should not switch to ENDED in that case, to be able to buffer them
    var fragPrevious = this.fragPrevious;
    if (!levelDetails.live && fragPrevious && fragPrevious.sn === levelDetails.endSN && !bufferInfo.nextStart) {
      // fragPrevious is last fragment. retrieve level duration using last frag start offset + duration
      // real duration might be lower than initial duration if there are drifts between real frag duration and playlist signaling
      var duration = Math.min(media.duration, fragPrevious.start + fragPrevious.duration);
      // if everything (almost) til the end is buffered, let's signal eos
      // we don't compare exactly media.duration === bufferInfo.end as there could be some subtle media duration difference (audio/video offsets...)
      // tolerate up to one frag duration to cope with these cases.
      // also cope with almost zero last frag duration (max last frag duration with 200ms) refer to https://github.com/video-dev/hls.js/pull/657
      if (duration - Math.max(bufferInfo.end, fragPrevious.start) <= Math.max(0.2, fragPrevious.duration)) {
        // Finalize the media stream
        var data = {};
        if (this.altAudio) {
          data.type = 'video';
        }
        this.hls.trigger(events["a" /* default */].BUFFER_EOS, data);
        this.state = State.ENDED;
        return;
      }
    }

    // if we have the levelDetails for the selected variant, lets continue enrichen our stream (load keys/fragments or trigger EOS, etc..)
    this._fetchPayloadOrEos(pos, bufferInfo, levelDetails);
  };

  StreamController.prototype._fetchPayloadOrEos = function _fetchPayloadOrEos(pos, bufferInfo, levelDetails) {
    var fragPrevious = this.fragPrevious,
        level = this.level,
        fragments = levelDetails.fragments,
        fragLen = fragments.length;

    // empty playlist
    if (fragLen === 0) {
      return;
    }

    // find fragment index, contiguous with end of buffer position
    var start = fragments[0].start,
        end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
        bufferEnd = bufferInfo.end,
        frag = void 0;

    if (levelDetails.initSegment && !levelDetails.initSegment.data) {
      frag = levelDetails.initSegment;
    } else {
      // in case of live playlist we need to ensure that requested position is not located before playlist start
      if (levelDetails.live) {
        var initialLiveManifestSize = this.config.initialLiveManifestSize;
        if (fragLen < initialLiveManifestSize) {
          logger["b" /* logger */].warn('Can not start playback of a level, reason: not enough fragments ' + fragLen + ' < ' + initialLiveManifestSize);
          return;
        }

        frag = this._ensureFragmentAtLivePoint(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen);
        // if it explicitely returns null don't load any fragment and exit function now
        if (frag === null) {
          return;
        }
      } else {
        // VoD playlist: if bufferEnd before start of playlist, load first fragment
        if (bufferEnd < start) {
          frag = fragments[0];
        }
      }
    }
    if (!frag) {
      frag = this._findFragment(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails);
    }
    if (frag) {
      this._loadFragmentOrKey(frag, level, levelDetails, pos, bufferEnd);
    }
    return;
  };

  StreamController.prototype._ensureFragmentAtLivePoint = function _ensureFragmentAtLivePoint(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen) {
    var config = this.hls.config,
        media = this.media;

    var frag = void 0;

    // check if requested position is within seekable boundaries :
    //logger.log(`start/pos/bufEnd/seeking:${start.toFixed(3)}/${pos.toFixed(3)}/${bufferEnd.toFixed(3)}/${this.media.seeking}`);
    var maxLatency = config.liveMaxLatencyDuration !== undefined ? config.liveMaxLatencyDuration : config.liveMaxLatencyDurationCount * levelDetails.targetduration;

    if (bufferEnd < Math.max(start - config.maxFragLookUpTolerance, end - maxLatency)) {
      var liveSyncPosition = this.liveSyncPosition = this.computeLivePosition(start, levelDetails);
      logger["b" /* logger */].log('buffer end: ' + bufferEnd.toFixed(3) + ' is located too far from the end of live sliding playlist, reset currentTime to : ' + liveSyncPosition.toFixed(3));
      bufferEnd = liveSyncPosition;
      if (media && media.readyState && media.duration > liveSyncPosition) {
        media.currentTime = liveSyncPosition;
      }
      this.nextLoadPosition = liveSyncPosition;
    }

    // if end of buffer greater than live edge, don't load any fragment
    // this could happen if live playlist intermittently slides in the past.
    // level 1 loaded [182580161,182580167]
    // level 1 loaded [182580162,182580169]
    // Loading 182580168 of [182580162 ,182580169],level 1 ..
    // Loading 182580169 of [182580162 ,182580169],level 1 ..
    // level 1 loaded [182580162,182580168] <============= here we should have bufferEnd > end. in that case break to avoid reloading 182580168
    // level 1 loaded [182580164,182580171]
    //
    // don't return null in case media not loaded yet (readystate === 0)
    if (levelDetails.PTSKnown && bufferEnd > end && media && media.readyState) {
      return null;
    }

    if (this.startFragRequested && !levelDetails.PTSKnown) {
      /* we are switching level on live playlist, but we don't have any PTS info for that quality level ...
         try to load frag matching with next SN.
         even if SN are not synchronized between playlists, loading this frag will help us
         compute playlist sliding and find the right one after in case it was not the right consecutive one */
      if (fragPrevious) {
        var targetSN = fragPrevious.sn + 1;
        if (targetSN >= levelDetails.startSN && targetSN <= levelDetails.endSN) {
          var fragNext = fragments[targetSN - levelDetails.startSN];
          if (fragPrevious.cc === fragNext.cc) {
            frag = fragNext;
            logger["b" /* logger */].log('live playlist, switching playlist, load frag with next SN: ' + frag.sn);
          }
        }
        // next frag SN not available (or not with same continuity counter)
        // look for a frag sharing the same CC
        if (!frag) {
          frag = binary_search.search(fragments, function (frag) {
            return fragPrevious.cc - frag.cc;
          });
          if (frag) {
            logger["b" /* logger */].log('live playlist, switching playlist, load frag with same CC: ' + frag.sn);
          }
        }
      }
      if (!frag) {
        /* we have no idea about which fragment should be loaded.
           so let's load mid fragment. it will help computing playlist sliding and find the right one
        */
        frag = fragments[Math.min(fragLen - 1, Math.round(fragLen / 2))];
        logger["b" /* logger */].log('live playlist, switching playlist, unknown, load middle frag : ' + frag.sn);
      }
    }
    return frag;
  };

  StreamController.prototype._findFragment = function _findFragment(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails) {
    var config = this.hls.config;
    var frag = void 0;
    var foundFrag = void 0;
    var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
    var fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : undefined;
    var fragmentWithinToleranceTest = function fragmentWithinToleranceTest(candidate) {
      // offset should be within fragment boundary - config.maxFragLookUpTolerance
      // this is to cope with situations like
      // bufferEnd = 9.991
      // frag[Ø] : [0,10]
      // frag[1] : [10,20]
      // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
      //              frag start               frag start+duration
      //                  |-----------------------------|
      //              <--->                         <--->
      //  ...--------><-----------------------------><---------....
      // previous frag         matching fragment         next frag
      //  return -1             return 0                 return 1
      //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
      // Set the lookup tolerance to be small enough to detect the current segment - ensures we don't skip over very small segments
      var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration);
      if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) {
        return 1;
      } // if maxFragLookUpTolerance will have negative value then don't return -1 for first element
      else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) {
          return -1;
        }
      return 0;
    };

    if (bufferEnd < end) {
      if (bufferEnd > end - maxFragLookUpTolerance) {
        maxFragLookUpTolerance = 0;
      }
      // Prefer the next fragment if it's within tolerance
      if (fragNext && !fragmentWithinToleranceTest(fragNext)) {
        foundFrag = fragNext;
      } else {
        foundFrag = binary_search.search(fragments, fragmentWithinToleranceTest);
      }
    } else {
      // reach end of playlist
      foundFrag = fragments[fragLen - 1];
    }
    if (foundFrag) {
      frag = foundFrag;
      var curSNIdx = frag.sn - levelDetails.startSN;
      var sameLevel = fragPrevious && frag.level === fragPrevious.level;
      var prevFrag = fragments[curSNIdx - 1];
      var nextFrag = fragments[curSNIdx + 1];
      //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
      if (fragPrevious && frag.sn === fragPrevious.sn) {
        if (sameLevel && !frag.backtracked) {
          if (frag.sn < levelDetails.endSN) {
            var deltaPTS = fragPrevious.deltaPTS;
            // if there is a significant delta between audio and video, larger than max allowed hole,
            // and if previous remuxed fragment did not start with a keyframe. (fragPrevious.dropped)
            // let's try to load previous fragment again to get last keyframe
            // then we will reload again current fragment (that way we should be able to fill the buffer hole ...)
            if (deltaPTS && deltaPTS > config.maxBufferHole && fragPrevious.dropped && curSNIdx) {
              frag = prevFrag;
              logger["b" /* logger */].warn('SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this');
              // decrement previous frag load counter to avoid frag loop loading error when next fragment will get reloaded
              fragPrevious.loadCounter--;
            } else {
              frag = nextFrag;
              logger["b" /* logger */].log('SN just loaded, load next one: ' + frag.sn);
            }
          } else {
            frag = null;
          }
        } else if (frag.backtracked) {
          // Only backtrack a max of 1 consecutive fragment to prevent sliding back too far when little or no frags start with keyframes
          if (nextFrag && nextFrag.backtracked) {
            logger["b" /* logger */].warn('Already backtracked from fragment ' + nextFrag.sn + ', will not backtrack to fragment ' + frag.sn + '. Loading fragment ' + nextFrag.sn);
            frag = nextFrag;
          } else {
            // If a fragment has dropped frames and it's in a same level/sequence, load the previous fragment to try and find the keyframe
            // Reset the dropped count now since it won't be reset until we parse the fragment again, which prevents infinite backtracking on the same segment
            logger["b" /* logger */].warn('Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe');
            frag.dropped = 0;
            if (prevFrag) {
              if (prevFrag.loadCounter) {
                prevFrag.loadCounter--;
              }
              frag = prevFrag;
              frag.backtracked = true;
            } else if (curSNIdx) {
              // can't backtrack on very first fragment
              frag = null;
            }
          }
        }
      }
    }
    return frag;
  };

  StreamController.prototype._loadFragmentOrKey = function _loadFragmentOrKey(frag, level, levelDetails, pos, bufferEnd) {
    var hls = this.hls,
        config = hls.config;

    //logger.log('loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
    if (frag.decryptdata && frag.decryptdata.uri != null && frag.decryptdata.key == null) {
      logger["b" /* logger */].log('Loading key for ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level);
      this.state = State.KEY_LOADING;
      hls.trigger(events["a" /* default */].KEY_LOADING, { frag: frag });
    } else {
      logger["b" /* logger */].log('Loading ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level + ', currentTime:' + pos.toFixed(3) + ',bufferEnd:' + bufferEnd.toFixed(3));
      // ensure that we are not reloading the same fragments in loop ...
      if (this.fragLoadIdx !== undefined) {
        this.fragLoadIdx++;
      } else {
        this.fragLoadIdx = 0;
      }
      if (frag.loadCounter) {
        frag.loadCounter++;
        var maxThreshold = config.fragLoadingLoopThreshold;
        // if this frag has already been loaded 3 times, and if it has been reloaded recently
        if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) {
          hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_LOOP_LOADING_ERROR, fatal: false, frag: frag });
          return;
        }
      } else {
        frag.loadCounter = 1;
      }
      frag.loadIdx = this.fragLoadIdx;
      frag.autoLevel = hls.autoLevelEnabled;
      frag.bitrateTest = this.bitrateTest;

      this.fragCurrent = frag;
      this.startFragRequested = true;
      // Don't update nextLoadPosition for fragments which are not buffered
      if (!isNaN(frag.sn) && !frag.bitrateTest) {
        this.nextLoadPosition = frag.start + frag.duration;
      }
      hls.trigger(events["a" /* default */].FRAG_LOADING, { frag: frag });
      // lazy demuxer init, as this could take some time ... do it during frag loading
      if (!this.demuxer) {
        this.demuxer = new demux_demuxer(hls, 'main');
      }
      this.state = State.FRAG_LOADING;
      return;
    }
  };

  StreamController.prototype.getBufferedFrag = function getBufferedFrag(position) {
    return binary_search.search(this._bufferedFrags, function (frag) {
      if (position < frag.startPTS) {
        return -1;
      } else if (position > frag.endPTS) {
        return 1;
      }
      return 0;
    });
  };

  StreamController.prototype.followingBufferedFrag = function followingBufferedFrag(frag) {
    if (frag) {
      // try to get range of next fragment (500ms after this range)
      return this.getBufferedFrag(frag.endPTS + 0.5);
    }
    return null;
  };

  StreamController.prototype._checkFragmentChanged = function _checkFragmentChanged() {
    var fragPlayingCurrent,
        currentTime,
        video = this.media;
    if (video && video.readyState && video.seeking === false) {
      currentTime = video.currentTime;
      /* if video element is in seeked state, currentTime can only increase.
        (assuming that playback rate is positive ...)
        As sometimes currentTime jumps back to zero after a
        media decode error, check this, to avoid seeking back to
        wrong position after a media decode error
      */
      if (currentTime > video.playbackRate * this.lastCurrentTime) {
        this.lastCurrentTime = currentTime;
      }
      if (buffer_helper.isBuffered(video, currentTime)) {
        fragPlayingCurrent = this.getBufferedFrag(currentTime);
      } else if (buffer_helper.isBuffered(video, currentTime + 0.1)) {
        /* ensure that FRAG_CHANGED event is triggered at startup,
          when first video frame is displayed and playback is paused.
          add a tolerance of 100ms, in case current position is not buffered,
          check if current pos+100ms is buffered and use that buffer range
          for FRAG_CHANGED event reporting */
        fragPlayingCurrent = this.getBufferedFrag(currentTime + 0.1);
      }
      if (fragPlayingCurrent) {
        var fragPlaying = fragPlayingCurrent;
        if (fragPlaying !== this.fragPlaying) {
          this.hls.trigger(events["a" /* default */].FRAG_CHANGED, { frag: fragPlaying });
          var fragPlayingLevel = fragPlaying.level;
          if (!this.fragPlaying || this.fragPlaying.level !== fragPlayingLevel) {
            this.hls.trigger(events["a" /* default */].LEVEL_SWITCHED, { level: fragPlayingLevel });
          }
          this.fragPlaying = fragPlaying;
        }
      }
    }
  };

  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */


  StreamController.prototype.immediateLevelSwitch = function immediateLevelSwitch() {
    logger["b" /* logger */].log('immediateLevelSwitch');
    if (!this.immediateSwitch) {
      this.immediateSwitch = true;
      var media = this.media,
          previouslyPaused = void 0;
      if (media) {
        previouslyPaused = media.paused;
        media.pause();
      } else {
        // don't restart playback after instant level switch in case media not attached
        previouslyPaused = true;
      }
      this.previouslyPaused = previouslyPaused;
    }
    var fragCurrent = this.fragCurrent;
    if (fragCurrent && fragCurrent.loader) {
      fragCurrent.loader.abort();
    }
    this.fragCurrent = null;
    // increase fragment load Index to avoid frag loop loading error after buffer flush
    if (this.fragLoadIdx !== undefined) {
      this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
    }
    // flush everything
    this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  };

  /*
     on immediate level switch end, after new fragment has been buffered :
      - nudge video decoder by slightly adjusting video currentTime (if currentTime buffered)
      - resume the playback if needed
  */


  StreamController.prototype.immediateLevelSwitchEnd = function immediateLevelSwitchEnd() {
    var media = this.media;
    if (media && media.buffered.length) {
      this.immediateSwitch = false;
      if (buffer_helper.isBuffered(media, media.currentTime)) {
        // only nudge if currentTime is buffered
        media.currentTime -= 0.0001;
      }
      if (!this.previouslyPaused) {
        media.play();
      }
    }
  };

  StreamController.prototype.nextLevelSwitch = function nextLevelSwitch() {
    /* try to switch ASAP without breaking video playback :
       in order to ensure smooth but quick level switching,
      we need to find the next flushable buffer range
      we should take into account new segment fetch time
    */
    var media = this.media;
    // ensure that media is defined and that metadata are available (to retrieve currentTime)
    if (media && media.readyState) {
      var fetchdelay = void 0,
          fragPlayingCurrent = void 0,
          nextBufferedFrag = void 0;
      // increase fragment load Index to avoid frag loop loading error after buffer flush
      this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
      fragPlayingCurrent = this.getBufferedFrag(media.currentTime);
      if (fragPlayingCurrent && fragPlayingCurrent.startPTS > 1) {
        // flush buffer preceding current fragment (flush until current fragment start offset)
        // minus 1s to avoid video freezing, that could happen if we flush keyframe of current video ...
        this.flushMainBuffer(0, fragPlayingCurrent.startPTS - 1);
      }
      if (!media.paused) {
        // add a safety delay of 1s
        var nextLevelId = this.hls.nextLoadLevel,
            nextLevel = this.levels[nextLevelId],
            fragLastKbps = this.fragLastKbps;
        if (fragLastKbps && this.fragCurrent) {
          fetchdelay = this.fragCurrent.duration * nextLevel.bitrate / (1000 * fragLastKbps) + 1;
        } else {
          fetchdelay = 0;
        }
      } else {
        fetchdelay = 0;
      }
      //logger.log('fetchdelay:'+fetchdelay);
      // find buffer range that will be reached once new fragment will be fetched
      nextBufferedFrag = this.getBufferedFrag(media.currentTime + fetchdelay);
      if (nextBufferedFrag) {
        // we can flush buffer range following this one without stalling playback
        nextBufferedFrag = this.followingBufferedFrag(nextBufferedFrag);
        if (nextBufferedFrag) {
          // if we are here, we can also cancel any loading/demuxing in progress, as they are useless
          var fragCurrent = this.fragCurrent;
          if (fragCurrent && fragCurrent.loader) {
            fragCurrent.loader.abort();
          }
          this.fragCurrent = null;
          // start flush position is the start PTS of next buffered frag.
          // we use frag.naxStartPTS which is max(audio startPTS, video startPTS).
          // in case there is a small PTS Delta between audio and video, using maxStartPTS avoids flushing last samples from current fragment
          this.flushMainBuffer(nextBufferedFrag.maxStartPTS, Number.POSITIVE_INFINITY);
        }
      }
    }
  };

  StreamController.prototype.flushMainBuffer = function flushMainBuffer(startOffset, endOffset) {
    this.state = State.BUFFER_FLUSHING;
    var flushScope = { startOffset: startOffset, endOffset: endOffset };
    // if alternate audio tracks are used, only flush video, otherwise flush everything
    if (this.altAudio) {
      flushScope.type = 'video';
    }
    this.hls.trigger(events["a" /* default */].BUFFER_FLUSHING, flushScope);
  };

  StreamController.prototype.onMediaAttached = function onMediaAttached(data) {
    var media = this.media = this.mediaBuffer = data.media;
    this.onvseeking = this.onMediaSeeking.bind(this);
    this.onvseeked = this.onMediaSeeked.bind(this);
    this.onvended = this.onMediaEnded.bind(this);
    media.addEventListener('seeking', this.onvseeking);
    media.addEventListener('seeked', this.onvseeked);
    media.addEventListener('ended', this.onvended);
    var config = this.config;
    if (this.levels && config.autoStartLoad) {
      this.hls.startLoad(config.startPosition);
    }
  };

  StreamController.prototype.onMediaDetaching = function onMediaDetaching() {
    var media = this.media;
    if (media && media.ended) {
      logger["b" /* logger */].log('MSE detaching and video ended, reset startPosition');
      this.startPosition = this.lastCurrentTime = 0;
    }

    // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
    var levels = this.levels;
    if (levels) {
      // reset fragment load counter
      levels.forEach(function (level) {
        if (level.details) {
          level.details.fragments.forEach(function (fragment) {
            fragment.loadCounter = undefined;
            fragment.backtracked = undefined;
          });
        }
      });
    }
    // remove video listeners
    if (media) {
      media.removeEventListener('seeking', this.onvseeking);
      media.removeEventListener('seeked', this.onvseeked);
      media.removeEventListener('ended', this.onvended);
      this.onvseeking = this.onvseeked = this.onvended = null;
    }
    this.media = this.mediaBuffer = null;
    this.loadedmetadata = false;
    this.stopLoad();
  };

  StreamController.prototype.onMediaSeeking = function onMediaSeeking() {
    var media = this.media,
        currentTime = media ? media.currentTime : undefined,
        config = this.config;
    if (!isNaN(currentTime)) {
      logger["b" /* logger */].log('media seeking to ' + currentTime.toFixed(3));
    }
    var mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media;
    var bufferInfo = buffer_helper.bufferInfo(mediaBuffer, currentTime, this.config.maxBufferHole);
    if (this.state === State.FRAG_LOADING) {
      var fragCurrent = this.fragCurrent;
      // check if we are seeking to a unbuffered area AND if frag loading is in progress
      if (bufferInfo.len === 0 && fragCurrent) {
        var tolerance = config.maxFragLookUpTolerance,
            fragStartOffset = fragCurrent.start - tolerance,
            fragEndOffset = fragCurrent.start + fragCurrent.duration + tolerance;
        // check if we seek position will be out of currently loaded frag range : if out cancel frag load, if in, don't do anything
        if (currentTime < fragStartOffset || currentTime > fragEndOffset) {
          if (fragCurrent.loader) {
            logger["b" /* logger */].log('seeking outside of buffer while fragment load in progress, cancel fragment load');
            fragCurrent.loader.abort();
          }
          this.fragCurrent = null;
          this.fragPrevious = null;
          // switch to IDLE state to load new fragment
          this.state = State.IDLE;
        } else {
          logger["b" /* logger */].log('seeking outside of buffer but within currently loaded fragment range');
        }
      }
    } else if (this.state === State.ENDED) {
      // if seeking to unbuffered area, clean up fragPrevious
      if (bufferInfo.len === 0) {
        this.fragPrevious = 0;
      }
      // switch to IDLE state to check for potential new fragment
      this.state = State.IDLE;
    }
    if (media) {
      this.lastCurrentTime = currentTime;
    }
    // avoid reporting fragment loop loading error in case user is seeking several times on same position
    if (this.state !== State.FRAG_LOADING && this.fragLoadIdx !== undefined) {
      this.fragLoadIdx += 2 * config.fragLoadingLoopThreshold;
    }
    // in case seeking occurs although no media buffered, adjust startPosition and nextLoadPosition to seek target
    if (!this.loadedmetadata) {
      this.nextLoadPosition = this.startPosition = currentTime;
    }
    // tick to speed up processing
    this.tick();
  };

  StreamController.prototype.onMediaSeeked = function onMediaSeeked() {
    var media = this.media,
        currentTime = media ? media.currentTime : undefined;
    if (!isNaN(currentTime)) {
      logger["b" /* logger */].log('media seeked to ' + currentTime.toFixed(3));
    }
    // tick to speed up FRAGMENT_PLAYING triggering
    this.tick();
  };

  StreamController.prototype.onMediaEnded = function onMediaEnded() {
    logger["b" /* logger */].log('media ended');
    // reset startPosition and lastCurrentTime to restart playback @ stream beginning
    this.startPosition = this.lastCurrentTime = 0;
  };

  StreamController.prototype.onManifestLoading = function onManifestLoading() {
    // reset buffer on manifest loading
    logger["b" /* logger */].log('trigger BUFFER_RESET');
    this.hls.trigger(events["a" /* default */].BUFFER_RESET);
    this._bufferedFrags = [];
    this.stalled = false;
    this.startPosition = this.lastCurrentTime = 0;
  };

  StreamController.prototype.onManifestParsed = function onManifestParsed(data) {
    var aac = false,
        heaac = false,
        codec;
    data.levels.forEach(function (level) {
      // detect if we have different kind of audio codecs used amongst playlists
      codec = level.audioCodec;
      if (codec) {
        if (codec.indexOf('mp4a.40.2') !== -1) {
          aac = true;
        }
        if (codec.indexOf('mp4a.40.5') !== -1) {
          heaac = true;
        }
      }
    });
    this.audioCodecSwitch = aac && heaac;
    if (this.audioCodecSwitch) {
      logger["b" /* logger */].log('both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC');
    }
    this.levels = data.levels;
    this.startLevelLoaded = false;
    this.startFragRequested = false;
    var config = this.config;
    if (config.autoStartLoad || this.forceStartLoad) {
      this.hls.startLoad(config.startPosition);
    }
  };

  StreamController.prototype.onLevelLoaded = function onLevelLoaded(data) {
    var newDetails = data.details;
    var newLevelId = data.level;
    var lastLevel = this.levels[this.levelLastLoaded];
    var curLevel = this.levels[newLevelId];
    var duration = newDetails.totalduration;
    var sliding = 0;

    logger["b" /* logger */].log('level ' + newLevelId + ' loaded [' + newDetails.startSN + ',' + newDetails.endSN + '],duration:' + duration);

    if (newDetails.live) {
      var curDetails = curLevel.details;
      if (curDetails && newDetails.fragments.length > 0) {
        // we already have details for that level, merge them
        mergeDetails(curDetails, newDetails);
        sliding = newDetails.fragments[0].start;
        this.liveSyncPosition = this.computeLivePosition(sliding, curDetails);
        if (newDetails.PTSKnown && !isNaN(sliding)) {
          logger["b" /* logger */].log('live playlist sliding:' + sliding.toFixed(3));
        } else {
          logger["b" /* logger */].log('live playlist - outdated PTS, unknown sliding');
          alignDiscontinuities(this.fragPrevious, lastLevel, newDetails);
        }
      } else {
        logger["b" /* logger */].log('live playlist - first load, unknown sliding');
        newDetails.PTSKnown = false;
        alignDiscontinuities(this.fragPrevious, lastLevel, newDetails);
      }
    } else {
      newDetails.PTSKnown = false;
    }
    // override level info
    curLevel.details = newDetails;
    this.levelLastLoaded = newLevelId;
    this.hls.trigger(events["a" /* default */].LEVEL_UPDATED, { details: newDetails, level: newLevelId });

    if (this.startFragRequested === false) {
      // compute start position if set to -1. use it straight away if value is defined
      if (this.startPosition === -1 || this.lastCurrentTime === -1) {
        // first, check if start time offset has been set in playlist, if yes, use this value
        var startTimeOffset = newDetails.startTimeOffset;
        if (!isNaN(startTimeOffset)) {
          if (startTimeOffset < 0) {
            logger["b" /* logger */].log('negative start time offset ' + startTimeOffset + ', count from end of last fragment');
            startTimeOffset = sliding + duration + startTimeOffset;
          }
          logger["b" /* logger */].log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
          this.startPosition = startTimeOffset;
        } else {
          // if live playlist, set start position to be fragment N-this.config.liveSyncDurationCount (usually 3)
          if (newDetails.live) {
            this.startPosition = this.computeLivePosition(sliding, newDetails);
            logger["b" /* logger */].log('configure startPosition to ' + this.startPosition);
          } else {
            this.startPosition = 0;
          }
        }
        this.lastCurrentTime = this.startPosition;
      }
      this.nextLoadPosition = this.startPosition;
    }
    // only switch batck to IDLE state if we were waiting for level to start downloading a new fragment
    if (this.state === State.WAITING_LEVEL) {
      this.state = State.IDLE;
    }
    //trigger handler right now
    this.tick();
  };

  StreamController.prototype.onKeyLoaded = function onKeyLoaded() {
    if (this.state === State.KEY_LOADING) {
      this.state = State.IDLE;
      this.tick();
    }
  };

  StreamController.prototype.onFragLoaded = function onFragLoaded(data) {
    var fragCurrent = this.fragCurrent,
        fragLoaded = data.frag;
    if (this.state === State.FRAG_LOADING && fragCurrent && fragLoaded.type === 'main' && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
      var stats = data.stats,
          currentLevel = this.levels[fragCurrent.level],
          details = currentLevel.details;
      logger["b" /* logger */].log('Loaded  ' + fragCurrent.sn + ' of [' + details.startSN + ' ,' + details.endSN + '],level ' + fragCurrent.level);
      // reset frag bitrate test in any case after frag loaded event
      this.bitrateTest = false;
      this.stats = stats;
      // if this frag was loaded to perform a bitrate test AND if hls.nextLoadLevel is greater than 0
      // then this means that we should be able to load a fragment at a higher quality level
      if (fragLoaded.bitrateTest === true && this.hls.nextLoadLevel) {
        // switch back to IDLE state ... we just loaded a fragment to determine adequate start bitrate and initialize autoswitch algo
        this.state = State.IDLE;
        this.startFragRequested = false;
        stats.tparsed = stats.tbuffered = performance.now();
        this.hls.trigger(events["a" /* default */].FRAG_BUFFERED, { stats: stats, frag: fragCurrent, id: 'main' });
        this.tick();
      } else if (fragLoaded.sn === 'initSegment') {
        this.state = State.IDLE;
        stats.tparsed = stats.tbuffered = performance.now();
        details.initSegment.data = data.payload;
        this.hls.trigger(events["a" /* default */].FRAG_BUFFERED, { stats: stats, frag: fragCurrent, id: 'main' });
        this.tick();
      } else {
        this.state = State.PARSING;
        // transmux the MPEG-TS data to ISO-BMFF segments
        var duration = details.totalduration,
            level = fragCurrent.level,
            sn = fragCurrent.sn,
            audioCodec = this.config.defaultAudioCodec || currentLevel.audioCodec;
        if (this.audioCodecSwap) {
          logger["b" /* logger */].log('swapping playlist audio codec');
          if (audioCodec === undefined) {
            audioCodec = this.lastAudioCodec;
          }
          if (audioCodec) {
            if (audioCodec.indexOf('mp4a.40.5') !== -1) {
              audioCodec = 'mp4a.40.2';
            } else {
              audioCodec = 'mp4a.40.5';
            }
          }
        }
        this.pendingBuffering = true;
        this.appended = false;
        logger["b" /* logger */].log('Parsing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],level ' + level + ', cc ' + fragCurrent.cc);
        var demuxer = this.demuxer;
        if (!demuxer) {
          demuxer = this.demuxer = new demux_demuxer(this.hls, 'main');
        }
        // time Offset is accurate if level PTS is known, or if playlist is not sliding (not live) and if media is not seeking (this is to overcome potential timestamp drifts between playlists and fragments)
        var media = this.media;
        var mediaSeeking = media && media.seeking;
        var accurateTimeOffset = !mediaSeeking && (details.PTSKnown || !details.live);
        var initSegmentData = details.initSegment ? details.initSegment.data : [];
        demuxer.push(data.payload, initSegmentData, audioCodec, currentLevel.videoCodec, fragCurrent, duration, accurateTimeOffset, undefined);
      }
    }
    this.fragLoadError = 0;
  };

  StreamController.prototype.onFragParsingInitSegment = function onFragParsingInitSegment(data) {
    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
      var tracks = data.tracks,
          trackName,
          track;

      // if audio track is expected to come from audio stream controller, discard any coming from main
      if (tracks.audio && this.altAudio) {
        delete tracks.audio;
      }
      // include levelCodec in audio and video tracks
      track = tracks.audio;
      if (track) {
        var audioCodec = this.levels[this.level].audioCodec,
            ua = navigator.userAgent.toLowerCase();
        if (audioCodec && this.audioCodecSwap) {
          logger["b" /* logger */].log('swapping playlist audio codec');
          if (audioCodec.indexOf('mp4a.40.5') !== -1) {
            audioCodec = 'mp4a.40.2';
          } else {
            audioCodec = 'mp4a.40.5';
          }
        }
        // in case AAC and HE-AAC audio codecs are signalled in manifest
        // force HE-AAC , as it seems that most browsers prefers that way,
        // except for mono streams OR on FF
        // these conditions might need to be reviewed ...
        if (this.audioCodecSwitch) {
          // don't force HE-AAC if mono stream
          if (track.metadata.channelCount !== 1 &&
          // don't force HE-AAC if firefox
          ua.indexOf('firefox') === -1) {
            audioCodec = 'mp4a.40.5';
          }
        }
        // HE-AAC is broken on Android, always signal audio codec as AAC even if variant manifest states otherwise
        if (ua.indexOf('android') !== -1 && track.container !== 'audio/mpeg') {
          // Exclude mpeg audio
          audioCodec = 'mp4a.40.2';
          logger["b" /* logger */].log('Android: force audio codec to ' + audioCodec);
        }
        track.levelCodec = audioCodec;
        track.id = data.id;
      }
      track = tracks.video;
      if (track) {
        track.levelCodec = this.levels[this.level].videoCodec;
        track.id = data.id;
      }
      this.hls.trigger(events["a" /* default */].BUFFER_CODECS, tracks);
      // loop through tracks that are going to be provided to bufferController
      for (trackName in tracks) {
        track = tracks[trackName];
        logger["b" /* logger */].log('main track:' + trackName + ',container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
        var initSegment = track.initSegment;
        if (initSegment) {
          this.appended = true;
          // arm pending Buffering flag before appending a segment
          this.pendingBuffering = true;
          this.hls.trigger(events["a" /* default */].BUFFER_APPENDING, { type: trackName, data: initSegment, parent: 'main', content: 'initSegment' });
        }
      }
      //trigger handler right now
      this.tick();
    }
  };

  StreamController.prototype.onFragParsingData = function onFragParsingData(data) {
    var _this2 = this;

    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && !(data.type === 'audio' && this.altAudio) && // filter out main audio if audio track is loaded through audio stream controller
    this.state === State.PARSING) {
      var level = this.levels[this.level],
          frag = fragCurrent;
      if (isNaN(data.endPTS)) {
        data.endPTS = data.startPTS + fragCurrent.duration;
        data.endDTS = data.startDTS + fragCurrent.duration;
      }

      logger["b" /* logger */].log('Parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb + ',dropped:' + (data.dropped || 0));

      // Detect gaps in a fragment  and try to fix it by finding a keyframe in the previous fragment (see _findFragments)
      if (data.type === 'video') {
        frag.dropped = data.dropped;
        if (frag.dropped) {
          if (!frag.backtracked) {
            logger["b" /* logger */].warn('missing video frame(s), backtracking fragment');
            // Return back to the IDLE state without appending to buffer
            // Causes findFragments to backtrack a segment and find the keyframe
            // Audio fragments arriving before video sets the nextLoadPosition, causing _findFragments to skip the backtracked fragment
            frag.backtracked = true;
            this.nextLoadPosition = data.startPTS;
            this.state = State.IDLE;
            this.fragPrevious = frag;
            this.tick();
            return;
          } else {
            logger["b" /* logger */].warn('Already backtracked on this fragment, appending with the gap');
          }
        } else {
          // Only reset the backtracked flag if we've loaded the frag without any dropped frames
          frag.backtracked = false;
        }
      }

      var drift = updateFragPTSDTS(level.details, frag, data.startPTS, data.endPTS, data.startDTS, data.endDTS),
          hls = this.hls;
      hls.trigger(events["a" /* default */].LEVEL_PTS_UPDATED, { details: level.details, level: this.level, drift: drift, type: data.type, start: data.startPTS, end: data.endPTS });

      // has remuxer dropped video frames located before first keyframe ?
      [data.data1, data.data2].forEach(function (buffer) {
        // only append in PARSING state (rationale is that an appending error could happen synchronously on first segment appending)
        // in that case it is useless to append following segments
        if (buffer && buffer.length && _this2.state === State.PARSING) {
          _this2.appended = true;
          // arm pending Buffering flag before appending a segment
          _this2.pendingBuffering = true;
          hls.trigger(events["a" /* default */].BUFFER_APPENDING, { type: data.type, data: buffer, parent: 'main', content: 'data' });
        }
      });
      //trigger handler right now
      this.tick();
    }
  };

  StreamController.prototype.onFragParsed = function onFragParsed(data) {
    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
      this.stats.tparsed = performance.now();
      this.state = State.PARSED;
      this._checkAppendedParsed();
    }
  };

  StreamController.prototype.onAudioTrackSwitching = function onAudioTrackSwitching(data) {
    // if any URL found on new audio track, it is an alternate audio track
    var altAudio = !!data.url,
        trackId = data.id;
    // if we switch on main audio, ensure that main fragment scheduling is synced with media.buffered
    // don't do anything if we switch to alt audio: audio stream controller is handling it.
    // we will just have to change buffer scheduling on audioTrackSwitched
    if (!altAudio) {
      if (this.mediaBuffer !== this.media) {
        logger["b" /* logger */].log('switching on main audio, use media.buffered to schedule main fragment loading');
        this.mediaBuffer = this.media;
        var fragCurrent = this.fragCurrent;
        // we need to refill audio buffer from main: cancel any frag loading to speed up audio switch
        if (fragCurrent.loader) {
          logger["b" /* logger */].log('switching to main audio track, cancel main fragment load');
          fragCurrent.loader.abort();
        }
        this.fragCurrent = null;
        this.fragPrevious = null;
        // destroy demuxer to force init segment generation (following audio switch)
        if (this.demuxer) {
          this.demuxer.destroy();
          this.demuxer = null;
        }
        // switch to IDLE state to load new fragment
        this.state = State.IDLE;
      }
      var hls = this.hls;
      // switching to main audio, flush all audio and trigger track switched
      hls.trigger(events["a" /* default */].BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: 'audio' });
      hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCHED, { id: trackId });
      this.altAudio = false;
    }
  };

  StreamController.prototype.onAudioTrackSwitched = function onAudioTrackSwitched(data) {
    var trackId = data.id,
        altAudio = !!this.hls.audioTracks[trackId].url;
    if (altAudio) {
      var videoBuffer = this.videoBuffer;
      // if we switched on alternate audio, ensure that main fragment scheduling is synced with video sourcebuffer buffered
      if (videoBuffer && this.mediaBuffer !== videoBuffer) {
        logger["b" /* logger */].log('switching on alternate audio, use video.buffered to schedule main fragment loading');
        this.mediaBuffer = videoBuffer;
      }
    }
    this.altAudio = altAudio;
    this.tick();
  };

  StreamController.prototype.onBufferCreated = function onBufferCreated(data) {
    var tracks = data.tracks,
        mediaTrack = void 0,
        name = void 0,
        alternate = false;
    for (var type in tracks) {
      var track = tracks[type];
      if (track.id === 'main') {
        name = type;
        mediaTrack = track;
        // keep video source buffer reference
        if (type === 'video') {
          this.videoBuffer = tracks[type].buffer;
        }
      } else {
        alternate = true;
      }
    }
    if (alternate && mediaTrack) {
      logger["b" /* logger */].log('alternate track found, use ' + name + '.buffered to schedule main fragment loading');
      this.mediaBuffer = mediaTrack.buffer;
    } else {
      this.mediaBuffer = this.media;
    }
  };

  StreamController.prototype.onBufferAppended = function onBufferAppended(data) {
    if (data.parent === 'main') {
      var state = this.state;
      if (state === State.PARSING || state === State.PARSED) {
        // check if all buffers have been appended
        this.pendingBuffering = data.pending > 0;
        this._checkAppendedParsed();
      }
    }
  };

  StreamController.prototype._checkAppendedParsed = function _checkAppendedParsed() {
    //trigger handler right now
    if (this.state === State.PARSED && (!this.appended || !this.pendingBuffering)) {
      var frag = this.fragCurrent;
      if (frag) {
        var media = this.mediaBuffer ? this.mediaBuffer : this.media;
        logger["b" /* logger */].log('main buffered : ' + timeRanges.toString(media.buffered));
        // filter fragments potentially evicted from buffer. this is to avoid memleak on live streams
        var bufferedFrags = this._bufferedFrags.filter(function (frag) {
          return buffer_helper.isBuffered(media, (frag.startPTS + frag.endPTS) / 2);
        });
        // push new range
        bufferedFrags.push(frag);
        // sort frags, as we use BinarySearch for lookup in getBufferedFrag ...
        this._bufferedFrags = bufferedFrags.sort(function (a, b) {
          return a.startPTS - b.startPTS;
        });
        this.fragPrevious = frag;
        var stats = this.stats;
        stats.tbuffered = performance.now();
        // we should get rid of this.fragLastKbps
        this.fragLastKbps = Math.round(8 * stats.total / (stats.tbuffered - stats.tfirst));
        this.hls.trigger(events["a" /* default */].FRAG_BUFFERED, { stats: stats, frag: frag, id: 'main' });
        this.state = State.IDLE;
      }
      this.tick();
    }
  };

  StreamController.prototype.onError = function onError(data) {
    var frag = data.frag || this.fragCurrent;
    // don't handle frag error not related to main fragment
    if (frag && frag.type !== 'main') {
      return;
    }
    // 0.5 : tolerance needed as some browsers stalls playback before reaching buffered end
    var mediaBuffered = !!this.media && buffer_helper.isBuffered(this.media, this.media.currentTime) && buffer_helper.isBuffered(this.media, this.media.currentTime + 0.5);

    switch (data.details) {
      case errors["a" /* ErrorDetails */].FRAG_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].FRAG_LOAD_TIMEOUT:
      case errors["a" /* ErrorDetails */].KEY_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].KEY_LOAD_TIMEOUT:
        if (!data.fatal) {
          // keep retrying until the limit will be reached
          if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
            // exponential backoff capped to config.fragLoadingMaxRetryTimeout
            var delay = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
            // reset load counter to avoid frag loop loading error
            frag.loadCounter = 0;
            logger["b" /* logger */].warn('mediaController: frag loading failed, retry in ' + delay + ' ms');
            this.retryDate = performance.now() + delay;
            // retry loading state
            // if loadedmetadata is not set, it means that we are emergency switch down on first frag
            // in that case, reset startFragRequested flag
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              this.nextLoadPosition = this.startPosition;
            }
            this.fragLoadError++;
            this.state = State.FRAG_LOADING_WAITING_RETRY;
          } else {
            logger["b" /* logger */].error('mediaController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
            // switch error to fatal
            data.fatal = true;
            this.state = State.ERROR;
          }
        }
        break;
      case errors["a" /* ErrorDetails */].FRAG_LOOP_LOADING_ERROR:
        if (!data.fatal) {
          // if buffer is not empty
          if (mediaBuffered) {
            // try to reduce max buffer length : rationale is that we could get
            // frag loop loading error because of buffer eviction
            this._reduceMaxBufferLength(frag.duration);
            this.state = State.IDLE;
          } else {
            // buffer empty. report as fatal if in manual mode or if lowest level.
            // level controller takes care of emergency switch down logic
            if (!frag.autoLevel || frag.level === 0) {
              // switch error to fatal
              data.fatal = true;
              this.state = State.ERROR;
            }
          }
        }
        break;
      case errors["a" /* ErrorDetails */].LEVEL_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].LEVEL_LOAD_TIMEOUT:
        if (this.state !== State.ERROR) {
          if (data.fatal) {
            // if fatal error, stop processing
            this.state = State.ERROR;
            logger["b" /* logger */].warn('streamController: ' + data.details + ',switch to ' + this.state + ' state ...');
          } else {
            // in case of non fatal error while loading level, if level controller is not retrying to load level , switch back to IDLE
            if (!data.levelRetry && this.state === State.WAITING_LEVEL) {
              this.state = State.IDLE;
            }
          }
        }
        break;
      case errors["a" /* ErrorDetails */].BUFFER_FULL_ERROR:
        // if in appending state
        if (data.parent === 'main' && (this.state === State.PARSING || this.state === State.PARSED)) {
          // reduce max buf len if current position is buffered
          if (mediaBuffered) {
            this._reduceMaxBufferLength(this.config.maxBufferLength);
            this.state = State.IDLE;
          } else {
            // current position is not buffered, but browser is still complaining about buffer full error
            // this happens on IE/Edge, refer to https://github.com/video-dev/hls.js/pull/708
            // in that case flush the whole buffer to recover
            logger["b" /* logger */].warn('buffer full error also media.currentTime is not buffered, flush everything');
            this.fragCurrent = null;
            // flush everything
            this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }
        }
        break;
      default:
        break;
    }
  };

  StreamController.prototype._reduceMaxBufferLength = function _reduceMaxBufferLength(minLength) {
    var config = this.config;
    if (config.maxMaxBufferLength >= minLength) {
      // reduce max buffer length as it might be too high. we do this to avoid loop flushing ...
      config.maxMaxBufferLength /= 2;
      logger["b" /* logger */].warn('main:reduce max buffer length to ' + config.maxMaxBufferLength + 's');
      // increase fragment load Index to avoid frag loop loading error after buffer flush
      this.fragLoadIdx += 2 * config.fragLoadingLoopThreshold;
    }
  };

  StreamController.prototype._checkBuffer = function _checkBuffer() {
    var media = this.media,
        config = this.config;
    // if ready state different from HAVE_NOTHING (numeric value 0), we are allowed to seek
    if (media && media.readyState) {
      var currentTime = media.currentTime,
          mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media,
          buffered = mediaBuffer.buffered;
      // adjust currentTime to start position on loaded metadata
      if (!this.loadedmetadata && buffered.length) {
        this.loadedmetadata = true;
        // only adjust currentTime if different from startPosition or if startPosition not buffered
        // at that stage, there should be only one buffered range, as we reach that code after first fragment has been buffered
        var startPosition = media.seeking ? currentTime : this.startPosition,
            startPositionBuffered = buffer_helper.isBuffered(mediaBuffer, startPosition),
            firstbufferedPosition = buffered.start(0);
        // if currentTime not matching with expected startPosition or startPosition not buffered
        if (currentTime !== startPosition || !startPositionBuffered && Math.abs(startPosition - firstbufferedPosition) < config.maxSeekHole) {
          logger["b" /* logger */].log('target start position:' + startPosition);
          // if startPosition not buffered, let's seek to buffered.start(0)
          if (!startPositionBuffered) {
            startPosition = firstbufferedPosition;
            logger["b" /* logger */].log('target start position not buffered, seek to buffered.start(0) ' + startPosition);
          }
          logger["b" /* logger */].log('adjust currentTime from ' + currentTime + ' to ' + startPosition);
          media.currentTime = startPosition;
        }
      } else if (this.immediateSwitch) {
        this.immediateLevelSwitchEnd();
      } else {
        var bufferInfo = buffer_helper.bufferInfo(media, currentTime, 0),
            expectedPlaying = !(media.paused || // not playing when media is paused
        media.ended || // not playing when media is ended
        media.buffered.length === 0),
            // not playing if nothing buffered
        jumpThreshold = 0.5,
            // tolerance needed as some browsers stalls playback before reaching buffered range end
        playheadMoving = currentTime !== this.lastCurrentTime;

        if (playheadMoving) {
          // played moving, but was previously stalled => now not stuck anymore
          if (this.stallReported) {
            logger["b" /* logger */].warn('playback not stuck anymore @' + currentTime + ', after ' + Math.round(performance.now() - this.stalled) + 'ms');
            this.stallReported = false;
          }
          this.stalled = undefined;
          this.nudgeRetry = 0;
        } else {
          // playhead not moving
          if (expectedPlaying) {
            // playhead not moving BUT media expected to play
            var tnow = performance.now();
            var hls = this.hls;
            if (!this.stalled) {
              // stall just detected, store current time
              this.stalled = tnow;
              this.stallReported = false;
            } else {
              // playback already stalled, check stalling duration
              // if stalling for more than a given threshold, let's try to recover
              var stalledDuration = tnow - this.stalled;
              var bufferLen = bufferInfo.len;
              var nudgeRetry = this.nudgeRetry || 0;
              // have we reached stall deadline ?
              if (bufferLen <= jumpThreshold && stalledDuration > config.lowBufferWatchdogPeriod * 1000) {
                // report stalled error once
                if (!this.stallReported) {
                  this.stallReported = true;
                  logger["b" /* logger */].warn('playback stalling in low buffer @' + currentTime);
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_STALLED_ERROR, fatal: false, buffer: bufferLen });
                }
                // if buffer len is below threshold, try to jump to start of next buffer range if close
                // no buffer available @ currentTime, check if next buffer is close (within a config.maxSeekHole second range)
                var nextBufferStart = bufferInfo.nextStart,
                    delta = nextBufferStart - currentTime;
                if (nextBufferStart && delta < config.maxSeekHole && delta > 0) {
                  this.nudgeRetry = ++nudgeRetry;
                  var nudgeOffset = nudgeRetry * config.nudgeOffset;
                  // next buffer is close ! adjust currentTime to nextBufferStart
                  // this will ensure effective video decoding
                  logger["b" /* logger */].log('adjust currentTime from ' + media.currentTime + ' to next buffered @ ' + nextBufferStart + ' + nudge ' + nudgeOffset);
                  media.currentTime = nextBufferStart + nudgeOffset;
                  // reset stalled so to rearm watchdog timer
                  this.stalled = undefined;
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_SEEK_OVER_HOLE, fatal: false, hole: nextBufferStart + nudgeOffset - currentTime });
                }
              } else if (bufferLen > jumpThreshold && stalledDuration > config.highBufferWatchdogPeriod * 1000) {
                // report stalled error once
                if (!this.stallReported) {
                  this.stallReported = true;
                  logger["b" /* logger */].warn('playback stalling in high buffer @' + currentTime);
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_STALLED_ERROR, fatal: false, buffer: bufferLen });
                }
                // reset stalled so to rearm watchdog timer
                this.stalled = undefined;
                this.nudgeRetry = ++nudgeRetry;
                if (nudgeRetry < config.nudgeMaxRetry) {
                  var _currentTime = media.currentTime;
                  var targetTime = _currentTime + nudgeRetry * config.nudgeOffset;
                  logger["b" /* logger */].log('adjust currentTime from ' + _currentTime + ' to ' + targetTime);
                  // playback stalled in buffered area ... let's nudge currentTime to try to overcome this
                  media.currentTime = targetTime;
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_NUDGE_ON_STALL, fatal: false });
                } else {
                  logger["b" /* logger */].error('still stuck in high buffer @' + currentTime + ' after ' + config.nudgeMaxRetry + ', raise fatal error');
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_STALLED_ERROR, fatal: true });
                }
              }
            }
          }
        }
      }
    }
  };

  StreamController.prototype.onFragLoadEmergencyAborted = function onFragLoadEmergencyAborted() {
    this.state = State.IDLE;
    // if loadedmetadata is not set, it means that we are emergency switch down on first frag
    // in that case, reset startFragRequested flag
    if (!this.loadedmetadata) {
      this.startFragRequested = false;
      this.nextLoadPosition = this.startPosition;
    }
    this.tick();
  };

  StreamController.prototype.onBufferFlushed = function onBufferFlushed() {
    /* after successful buffer flushing, filter flushed fragments from bufferedFrags
      use mediaBuffered instead of media (so that we will check against video.buffered ranges in case of alt audio track)
    */
    var media = this.mediaBuffer ? this.mediaBuffer : this.media;
    this._bufferedFrags = this._bufferedFrags.filter(function (frag) {
      return buffer_helper.isBuffered(media, (frag.startPTS + frag.endPTS) / 2);
    });

    // increase fragment load Index to avoid frag loop loading error after buffer flush
    this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
    // move to IDLE once flush complete. this should trigger new fragment loading
    this.state = State.IDLE;
    // reset reference to frag
    this.fragPrevious = null;
  };

  StreamController.prototype.swapAudioCodec = function swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  };

  StreamController.prototype.computeLivePosition = function computeLivePosition(sliding, levelDetails) {
    var targetLatency = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * levelDetails.targetduration;
    return sliding + Math.max(0, levelDetails.totalduration - targetLatency);
  };

  stream_controller__createClass(StreamController, [{
    key: 'state',
    set: function set(nextState) {
      if (this.state !== nextState) {
        var previousState = this.state;
        this._state = nextState;
        logger["b" /* logger */].log('main stream:' + previousState + '->' + nextState);
        this.hls.trigger(events["a" /* default */].STREAM_STATE_TRANSITION, { previousState: previousState, nextState: nextState });
      }
    },
    get: function get() {
      return this._state;
    }
  }, {
    key: 'currentLevel',
    get: function get() {
      var media = this.media;
      if (media) {
        var frag = this.getBufferedFrag(media.currentTime);
        if (frag) {
          return frag.level;
        }
      }
      return -1;
    }
  }, {
    key: 'nextBufferedFrag',
    get: function get() {
      var media = this.media;
      if (media) {
        // first get end range of current fragment
        return this.followingBufferedFrag(this.getBufferedFrag(media.currentTime));
      } else {
        return null;
      }
    }
  }, {
    key: 'nextLevel',
    get: function get() {
      var frag = this.nextBufferedFrag;
      if (frag) {
        return frag.level;
      } else {
        return -1;
      }
    }
  }, {
    key: 'liveSyncPosition',
    get: function get() {
      return this._liveSyncPosition;
    },
    set: function set(value) {
      this._liveSyncPosition = value;
    }
  }]);

  return StreamController;
}(event_handler);

/* harmony default export */ var stream_controller = (stream_controller_StreamController);
// CONCATENATED MODULE: ./src/controller/level-controller.js
var level_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function level_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function level_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function level_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Level Controller
*/








var level_controller_LevelController = function (_EventHandler) {
  level_controller__inherits(LevelController, _EventHandler);

  function LevelController(hls) {
    level_controller__classCallCheck(this, LevelController);

    var _this = level_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MANIFEST_LOADED, events["a" /* default */].LEVEL_LOADED, events["a" /* default */].FRAG_LOADED, events["a" /* default */].ERROR));

    _this.ontick = _this.tick.bind(_this);
    _this._manualLevel = -1;
    return _this;
  }

  LevelController.prototype.destroy = function destroy() {
    this.cleanTimer();
    this._manualLevel = -1;
  };

  LevelController.prototype.cleanTimer = function cleanTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  LevelController.prototype.startLoad = function startLoad() {
    this.canload = true;
    var levels = this._levels;
    // clean up live level details to force reload them, and reset load errors
    if (levels) {
      levels.forEach(function (level) {
        level.loadError = 0;
        var levelDetails = level.details;
        if (levelDetails && levelDetails.live) {
          level.details = undefined;
        }
      });
    }
    // speed up live playlist refresh if timer exists
    if (this.timer) {
      this.tick();
    }
  };

  LevelController.prototype.stopLoad = function stopLoad() {
    this.canload = false;
  };

  LevelController.prototype.onManifestLoaded = function onManifestLoaded(data) {
    var levels0 = [],
        levels = [],
        bitrateStart,
        bitrateSet = {},
        videoCodecFound = false,
        audioCodecFound = false,
        hls = this.hls,
        brokenmp4inmp3 = /chrome|firefox/.test(navigator.userAgent.toLowerCase());

    // regroup redundant level together
    data.levels.forEach(function (level) {
      if (level.videoCodec) {
        videoCodecFound = true;
      }
      // erase audio codec info if browser does not support mp4a.40.34. demuxer will autodetect codec and fallback to mpeg/audio
      if (brokenmp4inmp3 && level.audioCodec && level.audioCodec.indexOf('mp4a.40.34') !== -1) {
        level.audioCodec = undefined;
      }
      if (level.audioCodec || level.attrs && level.attrs.AUDIO) {
        audioCodecFound = true;
      }
      var redundantLevelId = bitrateSet[level.bitrate];
      if (redundantLevelId === undefined) {
        bitrateSet[level.bitrate] = levels0.length;
        level.url = [level.url];
        level.urlId = 0;
        levels0.push(level);
      } else {
        levels0[redundantLevelId].url.push(level.url);
      }
    });

    // remove audio-only level if we also have levels with audio+video codecs signalled
    if (videoCodecFound && audioCodecFound) {
      levels0.forEach(function (level) {
        if (level.videoCodec) {
          levels.push(level);
        }
      });
    } else {
      levels = levels0;
    }
    // only keep level with supported audio/video codecs
    levels = levels.filter(function (level) {
      var audioCodec = level.audioCodec,
          videoCodec = level.videoCodec;
      return (!audioCodec || isCodecSupportedInMp4(audioCodec)) && (!videoCodec || isCodecSupportedInMp4(videoCodec));
    });

    if (levels.length) {
      // start bitrate is the first bitrate of the manifest
      bitrateStart = levels[0].bitrate;
      // sort level on bitrate
      levels.sort(function (a, b) {
        return a.bitrate - b.bitrate;
      });
      this._levels = levels;
      // find index of first level in sorted levels
      for (var i = 0; i < levels.length; i++) {
        if (levels[i].bitrate === bitrateStart) {
          this._firstLevel = i;
          logger["b" /* logger */].log('manifest loaded,' + levels.length + ' level(s) found, first bitrate:' + bitrateStart);
          break;
        }
      }
      hls.trigger(events["a" /* default */].MANIFEST_PARSED, { levels: levels, firstLevel: this._firstLevel, stats: data.stats, audio: audioCodecFound, video: videoCodecFound, altAudio: data.audioTracks.length > 0 });
    } else {
      hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: hls.url, reason: 'no level with compatible codecs found in manifest' });
    }
    return;
  };

  LevelController.prototype.setLevelInternal = function setLevelInternal(newLevel) {
    var levels = this._levels;
    var hls = this.hls;
    // check if level idx is valid
    if (newLevel >= 0 && newLevel < levels.length) {
      // stopping live reloading timer if any
      this.cleanTimer();
      if (this._level !== newLevel) {
        logger["b" /* logger */].log('switching to level ' + newLevel);
        this._level = newLevel;
        var levelProperties = levels[newLevel];
        levelProperties.level = newLevel;
        // LEVEL_SWITCH to be deprecated in next major release
        hls.trigger(events["a" /* default */].LEVEL_SWITCH, levelProperties);
        hls.trigger(events["a" /* default */].LEVEL_SWITCHING, levelProperties);
      }
      var level = levels[newLevel],
          levelDetails = level.details;
      // check if we need to load playlist for this level
      if (!levelDetails || levelDetails.live === true) {
        // level not retrieved yet, or live playlist we need to (re)load it
        var urlId = level.urlId;
        hls.trigger(events["a" /* default */].LEVEL_LOADING, { url: level.url[urlId], level: newLevel, id: urlId });
      }
    } else {
      // invalid level id given, trigger error
      hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].OTHER_ERROR, details: errors["a" /* ErrorDetails */].LEVEL_SWITCH_ERROR, level: newLevel, fatal: false, reason: 'invalid level idx' });
    }
  };

  LevelController.prototype.onError = function onError(data) {
    if (data.fatal) {
      if (data.type === errors["b" /* ErrorTypes */].NETWORK_ERROR) {
        this.cleanTimer();
      }
      return;
    }

    var details = data.details,
        hls = this.hls,
        levelId = void 0,
        level = void 0,
        levelError = false;
    // try to recover not fatal errors
    switch (details) {
      case errors["a" /* ErrorDetails */].FRAG_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].FRAG_LOAD_TIMEOUT:
      case errors["a" /* ErrorDetails */].FRAG_LOOP_LOADING_ERROR:
      case errors["a" /* ErrorDetails */].KEY_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].KEY_LOAD_TIMEOUT:
        levelId = data.frag.level;
        break;
      case errors["a" /* ErrorDetails */].LEVEL_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].LEVEL_LOAD_TIMEOUT:
        levelId = data.context.level;
        levelError = true;
        break;
      case errors["a" /* ErrorDetails */].REMUX_ALLOC_ERROR:
        levelId = data.level;
        break;
      default:
        break;
    }
    /* try to switch to a redundant stream if any available.
     * if no redundant stream available, emergency switch down (if in auto mode and current level not 0)
     * otherwise, we cannot recover this network error ...
     */
    if (levelId !== undefined) {
      level = this._levels[levelId];
      if (!level.loadError) {
        level.loadError = 1;
      } else {
        level.loadError++;
      }
      // if any redundant streams available and if we haven't try them all (level.loadError is reseted on successful frag/level load.
      // if level.loadError reaches nbRedundantLevel it means that we tried them all, no hope  => let's switch down
      var nbRedundantLevel = level.url.length;
      if (nbRedundantLevel > 1 && level.loadError < nbRedundantLevel) {
        level.urlId = (level.urlId + 1) % nbRedundantLevel;
        level.details = undefined;
        logger["b" /* logger */].warn('level controller,' + details + ' for level ' + levelId + ': switching to redundant stream id ' + level.urlId);
      } else {
        // we could try to recover if in auto mode and current level not lowest level (0)
        var recoverable = this._manualLevel === -1 && levelId;
        if (recoverable) {
          logger["b" /* logger */].warn('level controller,' + details + ': switch-down for next fragment');
          hls.nextAutoLevel = Math.max(0, levelId - 1);
        } else if (level && level.details && level.details.live) {
          logger["b" /* logger */].warn('level controller,' + details + ' on live stream, discard');
          if (levelError) {
            // reset this._level so that another call to set level() will retrigger a frag load
            this._level = undefined;
          }
          // other errors are handled by stream controller
        } else if (details === errors["a" /* ErrorDetails */].LEVEL_LOAD_ERROR || details === errors["a" /* ErrorDetails */].LEVEL_LOAD_TIMEOUT) {
          var media = hls.media,

          // 0.5 : tolerance needed as some browsers stalls playback before reaching buffered end
          mediaBuffered = media && buffer_helper.isBuffered(media, media.currentTime) && buffer_helper.isBuffered(media, media.currentTime + 0.5);
          if (mediaBuffered) {
            var retryDelay = hls.config.levelLoadingRetryDelay;
            logger["b" /* logger */].warn('level controller,' + details + ', but media buffered, retry in ' + retryDelay + 'ms');
            this.timer = setTimeout(this.ontick, retryDelay);
            // boolean used to inform stream controller not to switch back to IDLE on non fatal error
            data.levelRetry = true;
          } else {
            logger["b" /* logger */].error('cannot recover ' + details + ' error');
            this._level = undefined;
            // stopping live reloading timer if any
            this.cleanTimer();
            // switch error to fatal
            data.fatal = true;
          }
        }
      }
    }
  };

  // reset level load error counter on successful frag loaded


  LevelController.prototype.onFragLoaded = function onFragLoaded(data) {
    var fragLoaded = data.frag;
    if (fragLoaded && fragLoaded.type === 'main') {
      var level = this._levels[fragLoaded.level];
      if (level) {
        level.loadError = 0;
      }
    }
  };

  LevelController.prototype.onLevelLoaded = function onLevelLoaded(data) {
    var levelId = data.level;
    // only process level loaded events matching with expected level
    if (levelId === this._level) {
      var curLevel = this._levels[levelId];
      // reset level load error counter on successful level loaded
      curLevel.loadError = 0;
      var newDetails = data.details;
      // if current playlist is a live playlist, arm a timer to reload it
      if (newDetails.live) {
        var reloadInterval = 1000 * (newDetails.averagetargetduration ? newDetails.averagetargetduration : newDetails.targetduration),
            curDetails = curLevel.details;
        if (curDetails && newDetails.endSN === curDetails.endSN) {
          // follow HLS Spec, If the client reloads a Playlist file and finds that it has not
          // changed then it MUST wait for a period of one-half the target
          // duration before retrying.
          reloadInterval /= 2;
          logger["b" /* logger */].log('same live playlist, reload twice faster');
        }
        // decrement reloadInterval with level loading delay
        reloadInterval -= performance.now() - data.stats.trequest;
        // in any case, don't reload more than every second
        reloadInterval = Math.max(1000, Math.round(reloadInterval));
        logger["b" /* logger */].log('live playlist, reload in ' + reloadInterval + ' ms');
        this.timer = setTimeout(this.ontick, reloadInterval);
      } else {
        this.timer = null;
      }
    }
  };

  LevelController.prototype.tick = function tick() {
    var levelId = this._level;
    if (levelId !== undefined && this.canload) {
      var level = this._levels[levelId];
      if (level && level.url) {
        var urlId = level.urlId;
        this.hls.trigger(events["a" /* default */].LEVEL_LOADING, { url: level.url[urlId], level: levelId, id: urlId });
      }
    }
  };

  level_controller__createClass(LevelController, [{
    key: 'levels',
    get: function get() {
      return this._levels;
    }
  }, {
    key: 'level',
    get: function get() {
      return this._level;
    },
    set: function set(newLevel) {
      var levels = this._levels;
      if (levels && levels.length > newLevel) {
        if (this._level !== newLevel || levels[newLevel].details === undefined) {
          this.setLevelInternal(newLevel);
        }
      }
    }
  }, {
    key: 'manualLevel',
    get: function get() {
      return this._manualLevel;
    },
    set: function set(newLevel) {
      this._manualLevel = newLevel;
      if (this._startLevel === undefined) {
        this._startLevel = newLevel;
      }
      if (newLevel !== -1) {
        this.level = newLevel;
      }
    }
  }, {
    key: 'firstLevel',
    get: function get() {
      return this._firstLevel;
    },
    set: function set(newLevel) {
      this._firstLevel = newLevel;
    }
  }, {
    key: 'startLevel',
    get: function get() {
      // hls.startLevel takes precedence over config.startLevel
      // if none of these values are defined, fallback on this._firstLevel (first quality level appearing in variant manifest)
      if (this._startLevel === undefined) {
        var configStartLevel = this.hls.config.startLevel;
        if (configStartLevel !== undefined) {
          return configStartLevel;
        } else {
          return this._firstLevel;
        }
      } else {
        return this._startLevel;
      }
    },
    set: function set(newLevel) {
      this._startLevel = newLevel;
    }
  }, {
    key: 'nextLoadLevel',
    get: function get() {
      if (this._manualLevel !== -1) {
        return this._manualLevel;
      } else {
        return this.hls.nextAutoLevel;
      }
    },
    set: function set(nextLevel) {
      this.level = nextLevel;
      if (this._manualLevel === -1) {
        this.hls.nextAutoLevel = nextLevel;
      }
    }
  }]);

  return LevelController;
}(event_handler);

/* harmony default export */ var level_controller = (level_controller_LevelController);
// EXTERNAL MODULE: ./src/demux/id3.js
var id3 = __webpack_require__(3);

// CONCATENATED MODULE: ./src/controller/id3-track-controller.js
function id3_track_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function id3_track_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function id3_track_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * id3 metadata track controller
*/





var id3_track_controller_ID3TrackController = function (_EventHandler) {
  id3_track_controller__inherits(ID3TrackController, _EventHandler);

  function ID3TrackController(hls) {
    id3_track_controller__classCallCheck(this, ID3TrackController);

    var _this = id3_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHED, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].FRAG_PARSING_METADATA));

    _this.id3Track = undefined;
    _this.media = undefined;
    return _this;
  }

  ID3TrackController.prototype.destroy = function destroy() {
    event_handler.prototype.destroy.call(this);
  };

  // Add ID3 metatadata text track.


  ID3TrackController.prototype.onMediaAttached = function onMediaAttached(data) {
    this.media = data.media;
    if (!this.media) {
      return;
    }
  };

  ID3TrackController.prototype.onMediaDetaching = function onMediaDetaching() {
    this.media = undefined;
  };

  ID3TrackController.prototype.onFragParsingMetadata = function onFragParsingMetadata(data) {
    var fragment = data.frag;
    var samples = data.samples;

    // create track dynamically
    if (!this.id3Track) {
      this.id3Track = this.media.addTextTrack('metadata', 'id3');
      this.id3Track.mode = 'hidden';
    }

    // Attempt to recreate Safari functionality by creating
    // WebKitDataCue objects when available and store the decoded
    // ID3 data in the value property of the cue
    var Cue = window.WebKitDataCue || window.VTTCue || window.TextTrackCue;

    for (var i = 0; i < samples.length; i++) {
      var frames = id3["a" /* default */].getID3Frames(samples[i].data);
      if (frames) {
        var startTime = samples[i].pts;
        var endTime = i < samples.length - 1 ? samples[i + 1].pts : fragment.endPTS;

        // Give a slight bump to the endTime if it's equal to startTime to avoid a SyntaxError in IE
        if (startTime === endTime) {
          endTime += 0.0001;
        }

        for (var j = 0; j < frames.length; j++) {
          var frame = frames[j];
          // Safari doesn't put the timestamp frame in the TextTrack
          if (!id3["a" /* default */].isTimeStampFrame(frame)) {
            var cue = new Cue(startTime, endTime, '');
            cue.value = frame;
            this.id3Track.addCue(cue);
          }
        }
      }
    }
  };

  return ID3TrackController;
}(event_handler);

/* harmony default export */ var id3_track_controller = (id3_track_controller_ID3TrackController);
// CONCATENATED MODULE: ./src/utils/ewma.js
function ewma__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * compute an Exponential Weighted moving average
 * - https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
 *  - heavily inspired from shaka-player
 */

var EWMA = function () {

  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  function EWMA(halfLife) {
    ewma__classCallCheck(this, EWMA);

    // Larger values of alpha expire historical data more slowly.
    this.alpha_ = halfLife ? Math.exp(Math.log(0.5) / halfLife) : 0;
    this.estimate_ = 0;
    this.totalWeight_ = 0;
  }

  EWMA.prototype.sample = function sample(weight, value) {
    var adjAlpha = Math.pow(this.alpha_, weight);
    this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_;
    this.totalWeight_ += weight;
  };

  EWMA.prototype.getTotalWeight = function getTotalWeight() {
    return this.totalWeight_;
  };

  EWMA.prototype.getEstimate = function getEstimate() {
    if (this.alpha_) {
      var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
      return this.estimate_ / zeroFactor;
    } else {
      return this.estimate_;
    }
  };

  return EWMA;
}();

/* harmony default export */ var ewma = (EWMA);
// CONCATENATED MODULE: ./src/utils/ewma-bandwidth-estimator.js
function ewma_bandwidth_estimator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * EWMA Bandwidth Estimator
 *  - heavily inspired from shaka-player
 * Tracks bandwidth samples and estimates available bandwidth.
 * Based on the minimum of two exponentially-weighted moving averages with
 * different half-lives.
 */



var ewma_bandwidth_estimator_EwmaBandWidthEstimator = function () {
  function EwmaBandWidthEstimator(hls, slow, fast, defaultEstimate) {
    ewma_bandwidth_estimator__classCallCheck(this, EwmaBandWidthEstimator);

    this.hls = hls;
    this.defaultEstimate_ = defaultEstimate;
    this.minWeight_ = 0.001;
    this.minDelayMs_ = 50;
    this.slow_ = new ewma(slow);
    this.fast_ = new ewma(fast);
  }

  EwmaBandWidthEstimator.prototype.sample = function sample(durationMs, numBytes) {
    durationMs = Math.max(durationMs, this.minDelayMs_);
    var bandwidth = 8000 * numBytes / durationMs,

    //console.log('instant bw:'+ Math.round(bandwidth));
    // we weight sample using loading duration....
    weight = durationMs / 1000;
    this.fast_.sample(weight, bandwidth);
    this.slow_.sample(weight, bandwidth);
  };

  EwmaBandWidthEstimator.prototype.canEstimate = function canEstimate() {
    var fast = this.fast_;
    return fast && fast.getTotalWeight() >= this.minWeight_;
  };

  EwmaBandWidthEstimator.prototype.getEstimate = function getEstimate() {
    if (this.canEstimate()) {
      //console.log('slow estimate:'+ Math.round(this.slow_.getEstimate()));
      //console.log('fast estimate:'+ Math.round(this.fast_.getEstimate()));
      // Take the minimum of these two estimates.  This should have the effect of
      // adapting down quickly, but up more slowly.
      return Math.min(this.fast_.getEstimate(), this.slow_.getEstimate());
    } else {
      return this.defaultEstimate_;
    }
  };

  EwmaBandWidthEstimator.prototype.destroy = function destroy() {};

  return EwmaBandWidthEstimator;
}();

/* harmony default export */ var ewma_bandwidth_estimator = (ewma_bandwidth_estimator_EwmaBandWidthEstimator);
// CONCATENATED MODULE: ./src/controller/abr-controller.js
var abr_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function abr_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function abr_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function abr_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * simple ABR Controller
 *  - compute next level based on last fragment bw heuristics
 *  - implement an abandon rules triggered if we have less than 2 frag buffered and if computed bw shows that we risk buffer stalling
 */








var abr_controller_AbrController = function (_EventHandler) {
  abr_controller__inherits(AbrController, _EventHandler);

  function AbrController(hls) {
    abr_controller__classCallCheck(this, AbrController);

    var _this = abr_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].FRAG_LOADING, events["a" /* default */].FRAG_LOADED, events["a" /* default */].FRAG_BUFFERED, events["a" /* default */].ERROR));

    _this.lastLoadedFragLevel = 0;
    _this._nextAutoLevel = -1;
    _this.hls = hls;
    _this.timer = null;
    _this._bwEstimator = null;
    _this.onCheck = _this._abandonRulesCheck.bind(_this);
    return _this;
  }

  AbrController.prototype.destroy = function destroy() {
    this.clearTimer();
    event_handler.prototype.destroy.call(this);
  };

  AbrController.prototype.onFragLoading = function onFragLoading(data) {
    var frag = data.frag;
    if (frag.type === 'main') {
      if (!this.timer) {
        this.timer = setInterval(this.onCheck, 100);
      }
      // lazy init of bw Estimator, rationale is that we use different params for Live/VoD
      // so we need to wait for stream manifest / playlist type to instantiate it.
      if (!this._bwEstimator) {
        var hls = this.hls,
            level = data.frag.level,
            isLive = hls.levels[level].details.live,
            config = hls.config,
            ewmaFast = void 0,
            ewmaSlow = void 0;

        if (isLive) {
          ewmaFast = config.abrEwmaFastLive;
          ewmaSlow = config.abrEwmaSlowLive;
        } else {
          ewmaFast = config.abrEwmaFastVoD;
          ewmaSlow = config.abrEwmaSlowVoD;
        }
        this._bwEstimator = new ewma_bandwidth_estimator(hls, ewmaSlow, ewmaFast, config.abrEwmaDefaultEstimate);
      }
      this.fragCurrent = frag;
    }
  };

  AbrController.prototype._abandonRulesCheck = function _abandonRulesCheck() {
    /*
      monitor fragment retrieval time...
      we compute expected time of arrival of the complete fragment.
      we compare it to expected time of buffer starvation
    */
    var hls = this.hls,
        v = hls.media,
        frag = this.fragCurrent,
        loader = frag.loader,
        minAutoLevel = hls.minAutoLevel;

    // if loader has been destroyed or loading has been aborted, stop timer and return
    if (!loader || loader.stats && loader.stats.aborted) {
      logger["b" /* logger */].warn('frag loader destroy or aborted, disarm abandonRules');
      this.clearTimer();
      return;
    }
    var stats = loader.stats;
    /* only monitor frag retrieval time if
    (video not paused OR first fragment being loaded(ready state === HAVE_NOTHING = 0)) AND autoswitching enabled AND not lowest level (=> means that we have several levels) */
    if (v && stats && (!v.paused && v.playbackRate !== 0 || !v.readyState) && frag.autoLevel && frag.level) {
      var requestDelay = performance.now() - stats.trequest,
          playbackRate = Math.abs(v.playbackRate);
      // monitor fragment load progress after half of expected fragment duration,to stabilize bitrate
      if (requestDelay > 500 * frag.duration / playbackRate) {
        var levels = hls.levels,
            loadRate = Math.max(1, stats.bw ? stats.bw / 8 : stats.loaded * 1000 / requestDelay),
            // byte/s; at least 1 byte/s to avoid division by zero
        // compute expected fragment length using frag duration and level bitrate. also ensure that expected len is gte than already loaded size
        level = levels[frag.level],
            levelBitrate = level.realBitrate ? Math.max(level.realBitrate, level.bitrate) : level.bitrate,
            expectedLen = stats.total ? stats.total : Math.max(stats.loaded, Math.round(frag.duration * levelBitrate / 8)),
            pos = v.currentTime,
            fragLoadedDelay = (expectedLen - stats.loaded) / loadRate,
            bufferStarvationDelay = (buffer_helper.bufferInfo(v, pos, hls.config.maxBufferHole).end - pos) / playbackRate;
        // consider emergency switch down only if we have less than 2 frag buffered AND
        // time to finish loading current fragment is bigger than buffer starvation delay
        // ie if we risk buffer starvation if bw does not increase quickly
        if (bufferStarvationDelay < 2 * frag.duration / playbackRate && fragLoadedDelay > bufferStarvationDelay) {
          var fragLevelNextLoadedDelay = void 0,
              nextLoadLevel = void 0;
          // lets iterate through lower level and try to find the biggest one that could avoid rebuffering
          // we start from current level - 1 and we step down , until we find a matching level
          for (nextLoadLevel = frag.level - 1; nextLoadLevel > minAutoLevel; nextLoadLevel--) {
            // compute time to load next fragment at lower level
            // 0.8 : consider only 80% of current bw to be conservative
            // 8 = bits per byte (bps/Bps)
            var levelNextBitrate = levels[nextLoadLevel].realBitrate ? Math.max(levels[nextLoadLevel].realBitrate, levels[nextLoadLevel].bitrate) : levels[nextLoadLevel].bitrate;
            fragLevelNextLoadedDelay = frag.duration * levelNextBitrate / (8 * 0.8 * loadRate);
            if (fragLevelNextLoadedDelay < bufferStarvationDelay) {
              // we found a lower level that be rebuffering free with current estimated bw !
              break;
            }
          }
          // only emergency switch down if it takes less time to load new fragment at lowest level instead
          // of finishing loading current one ...
          if (fragLevelNextLoadedDelay < fragLoadedDelay) {
            logger["b" /* logger */].warn('loading too slow, abort fragment loading and switch to level ' + nextLoadLevel + ':fragLoadedDelay[' + nextLoadLevel + ']<fragLoadedDelay[' + (frag.level - 1) + '];bufferStarvationDelay:' + fragLevelNextLoadedDelay.toFixed(1) + '<' + fragLoadedDelay.toFixed(1) + ':' + bufferStarvationDelay.toFixed(1));
            // force next load level in auto mode
            hls.nextLoadLevel = nextLoadLevel;
            // update bw estimate for this fragment before cancelling load (this will help reducing the bw)
            this._bwEstimator.sample(requestDelay, stats.loaded);
            //abort fragment loading
            loader.abort();
            // stop abandon rules timer
            this.clearTimer();
            hls.trigger(events["a" /* default */].FRAG_LOAD_EMERGENCY_ABORTED, { frag: frag, stats: stats });
          }
        }
      }
    }
  };

  AbrController.prototype.onFragLoaded = function onFragLoaded(data) {
    var frag = data.frag;
    if (frag.type === 'main' && !isNaN(frag.sn)) {
      // stop monitoring bw once frag loaded
      this.clearTimer();
      // store level id after successful fragment load
      this.lastLoadedFragLevel = frag.level;
      // reset forced auto level value so that next level will be selected
      this._nextAutoLevel = -1;

      // compute level average bitrate
      if (this.hls.config.abrMaxWithRealBitrate) {
        var level = this.hls.levels[frag.level];
        var loadedBytes = (level.loaded ? level.loaded.bytes : 0) + data.stats.loaded;
        var loadedDuration = (level.loaded ? level.loaded.duration : 0) + data.frag.duration;
        level.loaded = { bytes: loadedBytes, duration: loadedDuration };
        level.realBitrate = Math.round(8 * loadedBytes / loadedDuration);
      }
      // if fragment has been loaded to perform a bitrate test,
      if (data.frag.bitrateTest) {
        var stats = data.stats;
        stats.tparsed = stats.tbuffered = stats.tload;
        this.onFragBuffered(data);
      }
    }
  };

  AbrController.prototype.onFragBuffered = function onFragBuffered(data) {
    var stats = data.stats,
        frag = data.frag;
    // only update stats on first frag buffering
    // if same frag is loaded multiple times, it might be in browser cache, and loaded quickly
    // and leading to wrong bw estimation
    // on bitrate test, also only update stats once (if tload = tbuffered == on FRAG_LOADED)
    if (stats.aborted !== true && frag.loadCounter === 1 && frag.type === 'main' && !isNaN(frag.sn) && (!frag.bitrateTest || stats.tload === stats.tbuffered)) {
      // use tparsed-trequest instead of tbuffered-trequest to compute fragLoadingProcessing; rationale is that  buffer appending only happens once media is attached
      // in case we use config.startFragPrefetch while media is not attached yet, fragment might be parsed while media not attached yet, but it will only be buffered on media attached
      // as a consequence it could happen really late in the process. meaning that appending duration might appears huge ... leading to underestimated throughput estimation
      var fragLoadingProcessingMs = stats.tparsed - stats.trequest;
      logger["b" /* logger */].log('latency/loading/parsing/append/kbps:' + Math.round(stats.tfirst - stats.trequest) + '/' + Math.round(stats.tload - stats.tfirst) + '/' + Math.round(stats.tparsed - stats.tload) + '/' + Math.round(stats.tbuffered - stats.tparsed) + '/' + Math.round(8 * stats.loaded / (stats.tbuffered - stats.trequest)));
      this._bwEstimator.sample(fragLoadingProcessingMs, stats.loaded);
      stats.bwEstimate = this._bwEstimator.getEstimate();
      // if fragment has been loaded to perform a bitrate test, (hls.startLevel = -1), store bitrate test delay duration
      if (frag.bitrateTest) {
        this.bitrateTestDelay = fragLoadingProcessingMs / 1000;
      } else {
        this.bitrateTestDelay = 0;
      }
    }
  };

  AbrController.prototype.onError = function onError(data) {
    // stop timer in case of frag loading error
    switch (data.details) {
      case errors["a" /* ErrorDetails */].FRAG_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].FRAG_LOAD_TIMEOUT:
        this.clearTimer();
        break;
      default:
        break;
    }
  };

  AbrController.prototype.clearTimer = function clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
  };

  // return next auto level


  AbrController.prototype._findBestLevel = function _findBestLevel(currentLevel, currentFragDuration, currentBw, minAutoLevel, maxAutoLevel, maxFetchDuration, bwFactor, bwUpFactor, levels) {
    for (var i = maxAutoLevel; i >= minAutoLevel; i--) {
      var levelInfo = levels[i],
          levelDetails = levelInfo.details,
          avgDuration = levelDetails ? levelDetails.totalduration / levelDetails.fragments.length : currentFragDuration,
          live = levelDetails ? levelDetails.live : false,
          adjustedbw = void 0;
      // follow algorithm captured from stagefright :
      // https://android.googlesource.com/platform/frameworks/av/+/master/media/libstagefright/httplive/LiveSession.cpp
      // Pick the highest bandwidth stream below or equal to estimated bandwidth.
      // consider only 80% of the available bandwidth, but if we are switching up,
      // be even more conservative (70%) to avoid overestimating and immediately
      // switching back.
      if (i <= currentLevel) {
        adjustedbw = bwFactor * currentBw;
      } else {
        adjustedbw = bwUpFactor * currentBw;
      }
      var bitrate = levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate,
          fetchDuration = bitrate * avgDuration / adjustedbw;

      logger["b" /* logger */].trace('level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' + i + '/' + Math.round(adjustedbw) + '/' + bitrate + '/' + avgDuration + '/' + maxFetchDuration + '/' + fetchDuration);
      // if adjusted bw is greater than level bitrate AND
      if (adjustedbw > bitrate && (
      // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
      // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
      // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that _findBestLevel will return -1
      !fetchDuration || live && !this.bitrateTestDelay || fetchDuration < maxFetchDuration)) {
        // as we are looping from highest to lowest, this will return the best achievable quality level
        return i;
      }
    }
    // not enough time budget even with quality level 0 ... rebuffering might happen
    return -1;
  };

  abr_controller__createClass(AbrController, [{
    key: 'nextAutoLevel',
    get: function get() {
      var forcedAutoLevel = this._nextAutoLevel;
      var bwEstimator = this._bwEstimator;
      // in case next auto level has been forced, and bw not available or not reliable, return forced value
      if (forcedAutoLevel !== -1 && (!bwEstimator || !bwEstimator.canEstimate())) {
        return forcedAutoLevel;
      }
      // compute next level using ABR logic
      var nextABRAutoLevel = this._nextABRAutoLevel;
      // if forced auto level has been defined, use it to cap ABR computed quality level
      if (forcedAutoLevel !== -1) {
        nextABRAutoLevel = Math.min(forcedAutoLevel, nextABRAutoLevel);
      }
      return nextABRAutoLevel;
    },
    set: function set(nextLevel) {
      this._nextAutoLevel = nextLevel;
    }
  }, {
    key: '_nextABRAutoLevel',
    get: function get() {
      var hls = this.hls,
          maxAutoLevel = hls.maxAutoLevel,
          levels = hls.levels,
          config = hls.config,
          minAutoLevel = hls.minAutoLevel;
      var v = hls.media,
          currentLevel = this.lastLoadedFragLevel,
          currentFragDuration = this.fragCurrent ? this.fragCurrent.duration : 0,
          pos = v ? v.currentTime : 0,

      // playbackRate is the absolute value of the playback rate; if v.playbackRate is 0, we use 1 to load as
      // if we're playing back at the normal rate.
      playbackRate = v && v.playbackRate !== 0 ? Math.abs(v.playbackRate) : 1.0,
          avgbw = this._bwEstimator ? this._bwEstimator.getEstimate() : config.abrEwmaDefaultEstimate,

      // bufferStarvationDelay is the wall-clock time left until the playback buffer is exhausted.
      bufferStarvationDelay = (buffer_helper.bufferInfo(v, pos, config.maxBufferHole).end - pos) / playbackRate;

      // First, look to see if we can find a level matching with our avg bandwidth AND that could also guarantee no rebuffering at all
      var bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, config.abrBandWidthFactor, config.abrBandWidthUpFactor, levels);
      if (bestLevel >= 0) {
        return bestLevel;
      } else {
        logger["b" /* logger */].trace('rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering');
        // not possible to get rid of rebuffering ... let's try to find level that will guarantee less than maxStarvationDelay of rebuffering
        // if no matching level found, logic will return 0
        var maxStarvationDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxStarvationDelay) : config.maxStarvationDelay,
            bwFactor = config.abrBandWidthFactor,
            bwUpFactor = config.abrBandWidthUpFactor;
        if (bufferStarvationDelay === 0) {
          // in case buffer is empty, let's check if previous fragment was loaded to perform a bitrate test
          var bitrateTestDelay = this.bitrateTestDelay;
          if (bitrateTestDelay) {
            // if it is the case, then we need to adjust our max starvation delay using maxLoadingDelay config value
            // max video loading delay used in  automatic start level selection :
            // in that mode ABR controller will ensure that video loading time (ie the time to fetch the first fragment at lowest quality level +
            // the time to fetch the fragment at the appropriate quality level is less than ```maxLoadingDelay``` )
            // cap maxLoadingDelay and ensure it is not bigger 'than bitrate test' frag duration
            var maxLoadingDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxLoadingDelay) : config.maxLoadingDelay;
            maxStarvationDelay = maxLoadingDelay - bitrateTestDelay;
            logger["b" /* logger */].trace('bitrate test took ' + Math.round(1000 * bitrateTestDelay) + 'ms, set first fragment max fetchDuration to ' + Math.round(1000 * maxStarvationDelay) + ' ms');
            // don't use conservative factor on bitrate test
            bwFactor = bwUpFactor = 1;
          }
        }
        bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay + maxStarvationDelay, bwFactor, bwUpFactor, levels);
        return Math.max(bestLevel, 0);
      }
    }
  }]);

  return AbrController;
}(event_handler);

/* harmony default export */ var abr_controller = (abr_controller_AbrController);
// CONCATENATED MODULE: ./src/controller/buffer-controller.js
function buffer_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function buffer_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function buffer_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Buffer Controller
*/






var buffer_controller_BufferController = function (_EventHandler) {
  buffer_controller__inherits(BufferController, _EventHandler);

  function BufferController(hls) {
    buffer_controller__classCallCheck(this, BufferController);

    // the value that we have set mediasource.duration to
    // (the actual duration may be tweaked slighly by the browser)
    var _this = buffer_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHING, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].MANIFEST_PARSED, events["a" /* default */].BUFFER_RESET, events["a" /* default */].BUFFER_APPENDING, events["a" /* default */].BUFFER_CODECS, events["a" /* default */].BUFFER_EOS, events["a" /* default */].BUFFER_FLUSHING, events["a" /* default */].LEVEL_PTS_UPDATED, events["a" /* default */].LEVEL_UPDATED));

    _this._msDuration = null;
    // the value that we want to set mediaSource.duration to
    _this._levelDuration = null;

    // Source Buffer listeners
    _this.onsbue = _this.onSBUpdateEnd.bind(_this);
    _this.onsbe = _this.onSBUpdateError.bind(_this);
    _this.pendingTracks = {};
    _this.tracks = {};
    return _this;
  }

  BufferController.prototype.destroy = function destroy() {
    event_handler.prototype.destroy.call(this);
  };

  BufferController.prototype.onLevelPtsUpdated = function onLevelPtsUpdated(data) {
    var type = data.type;
    var audioTrack = this.tracks.audio;

    // Adjusting `SourceBuffer.timestampOffset` (desired point in the timeline where the next frames should be appended)
    // in Chrome browser when we detect MPEG audio container and time delta between level PTS and `SourceBuffer.timestampOffset`
    // is greater than 100ms (this is enough to handle seek for VOD or level change for LIVE videos). At the time of change we issue
    // `SourceBuffer.abort()` and adjusting `SourceBuffer.timestampOffset` if `SourceBuffer.updating` is false or awaiting `updateend`
    // event if SB is in updating state.
    // More info here: https://github.com/video-dev/hls.js/issues/332#issuecomment-257986486

    if (type === 'audio' && audioTrack && audioTrack.container === 'audio/mpeg') {
      // Chrome audio mp3 track
      var audioBuffer = this.sourceBuffer.audio;
      var delta = Math.abs(audioBuffer.timestampOffset - data.start);

      // adjust timestamp offset if time delta is greater than 100ms
      if (delta > 0.1) {
        var updating = audioBuffer.updating;

        try {
          audioBuffer.abort();
        } catch (err) {
          updating = true;
          logger["b" /* logger */].warn('can not abort audio buffer: ' + err);
        }

        if (!updating) {
          logger["b" /* logger */].warn('change mpeg audio timestamp offset from ' + audioBuffer.timestampOffset + ' to ' + data.start);
          audioBuffer.timestampOffset = data.start;
        } else {
          this.audioTimestampOffset = data.start;
        }
      }
    }
  };

  BufferController.prototype.onManifestParsed = function onManifestParsed(data) {
    var audioExpected = data.audio,
        videoExpected = data.video || data.levels.length && data.audio,
        sourceBufferNb = 0;
    // in case of alt audio 2 BUFFER_CODECS events will be triggered, one per stream controller
    // sourcebuffers will be created all at once when the expected nb of tracks will be reached
    // in case alt audio is not used, only one BUFFER_CODEC event will be fired from main stream controller
    // it will contain the expected nb of source buffers, no need to compute it
    if (data.altAudio && (audioExpected || videoExpected)) {
      sourceBufferNb = (audioExpected ? 1 : 0) + (videoExpected ? 1 : 0);
      logger["b" /* logger */].log(sourceBufferNb + ' sourceBuffer(s) expected');
    }
    this.sourceBufferNb = sourceBufferNb;
  };

  BufferController.prototype.onMediaAttaching = function onMediaAttaching(data) {
    var media = this.media = data.media;
    if (media) {
      // setup the media source
      var ms = this.mediaSource = new MediaSource();
      //Media Source listeners
      this.onmso = this.onMediaSourceOpen.bind(this);
      this.onmse = this.onMediaSourceEnded.bind(this);
      this.onmsc = this.onMediaSourceClose.bind(this);
      ms.addEventListener('sourceopen', this.onmso);
      ms.addEventListener('sourceended', this.onmse);
      ms.addEventListener('sourceclose', this.onmsc);
      // link video and media Source
      media.src = URL.createObjectURL(ms);
    }
  };

  BufferController.prototype.onMediaDetaching = function onMediaDetaching() {
    logger["b" /* logger */].log('media source detaching');
    var ms = this.mediaSource;
    if (ms) {
      if (ms.readyState === 'open') {
        try {
          // endOfStream could trigger exception if any sourcebuffer is in updating state
          // we don't really care about checking sourcebuffer state here,
          // as we are anyway detaching the MediaSource
          // let's just avoid this exception to propagate
          ms.endOfStream();
        } catch (err) {
          logger["b" /* logger */].warn('onMediaDetaching:' + err.message + ' while calling endOfStream');
        }
      }
      ms.removeEventListener('sourceopen', this.onmso);
      ms.removeEventListener('sourceended', this.onmse);
      ms.removeEventListener('sourceclose', this.onmsc);

      // Detach properly the MediaSource from the HTMLMediaElement as
      // suggested in https://github.com/w3c/media-source/issues/53.
      if (this.media) {
        URL.revokeObjectURL(this.media.src);
        this.media.removeAttribute('src');
        this.media.load();
      }

      this.mediaSource = null;
      this.media = null;
      this.pendingTracks = {};
      this.tracks = {};
      this.sourceBuffer = {};
      this.flushRange = [];
      this.segments = [];
      this.appended = 0;
    }
    this.onmso = this.onmse = this.onmsc = null;
    this.hls.trigger(events["a" /* default */].MEDIA_DETACHED);
  };

  BufferController.prototype.onMediaSourceOpen = function onMediaSourceOpen() {
    logger["b" /* logger */].log('media source opened');
    this.hls.trigger(events["a" /* default */].MEDIA_ATTACHED, { media: this.media });
    var mediaSource = this.mediaSource;
    if (mediaSource) {
      // once received, don't listen anymore to sourceopen event
      mediaSource.removeEventListener('sourceopen', this.onmso);
    }
    this.checkPendingTracks();
  };

  BufferController.prototype.checkPendingTracks = function checkPendingTracks() {
    // if any buffer codecs pending, check if we have enough to create sourceBuffers
    var pendingTracks = this.pendingTracks,
        pendingTracksNb = Object.keys(pendingTracks).length;
    // if any pending tracks and (if nb of pending tracks gt or equal than expected nb or if unknown expected nb)
    if (pendingTracksNb && (this.sourceBufferNb <= pendingTracksNb || this.sourceBufferNb === 0)) {
      // ok, let's create them now !
      this.createSourceBuffers(pendingTracks);
      this.pendingTracks = {};
      // append any pending segments now !
      this.doAppending();
    }
  };

  BufferController.prototype.onMediaSourceClose = function onMediaSourceClose() {
    logger["b" /* logger */].log('media source closed');
  };

  BufferController.prototype.onMediaSourceEnded = function onMediaSourceEnded() {
    logger["b" /* logger */].log('media source ended');
  };

  BufferController.prototype.onSBUpdateEnd = function onSBUpdateEnd() {
    // update timestampOffset
    if (this.audioTimestampOffset) {
      var audioBuffer = this.sourceBuffer.audio;
      logger["b" /* logger */].warn('change mpeg audio timestamp offset from ' + audioBuffer.timestampOffset + ' to ' + this.audioTimestampOffset);
      audioBuffer.timestampOffset = this.audioTimestampOffset;
      delete this.audioTimestampOffset;
    }

    if (this._needsFlush) {
      this.doFlush();
    }

    if (this._needsEos) {
      this.checkEos();
    }
    this.appending = false;
    var parent = this.parent;
    // count nb of pending segments waiting for appending on this sourcebuffer
    var pending = this.segments.reduce(function (counter, segment) {
      return segment.parent === parent ? counter + 1 : counter;
    }, 0);
    this.hls.trigger(events["a" /* default */].BUFFER_APPENDED, { parent: parent, pending: pending });

    // don't append in flushing mode
    if (!this._needsFlush) {
      this.doAppending();
    }

    this.updateMediaElementDuration();
  };

  BufferController.prototype.onSBUpdateError = function onSBUpdateError(event) {
    logger["b" /* logger */].error('sourceBuffer error:', event);
    // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
    // this error might not always be fatal (it is fatal if decode error is set, in that case
    // it will be followed by a mediaElement error ...)
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_APPENDING_ERROR, fatal: false });
    // we don't need to do more than that, as accordin to the spec, updateend will be fired just after
  };

  BufferController.prototype.onBufferReset = function onBufferReset() {
    var sourceBuffer = this.sourceBuffer;
    for (var type in sourceBuffer) {
      var sb = sourceBuffer[type];
      try {
        this.mediaSource.removeSourceBuffer(sb);
        sb.removeEventListener('updateend', this.onsbue);
        sb.removeEventListener('error', this.onsbe);
      } catch (err) {}
    }
    this.sourceBuffer = {};
    this.flushRange = [];
    this.segments = [];
    this.appended = 0;
  };

  BufferController.prototype.onBufferCodecs = function onBufferCodecs(tracks) {
    // if source buffer(s) not created yet, appended buffer tracks in this.pendingTracks
    // if sourcebuffers already created, do nothing ...
    if (Object.keys(this.sourceBuffer).length === 0) {
      for (var trackName in tracks) {
        this.pendingTracks[trackName] = tracks[trackName];
      }
      var mediaSource = this.mediaSource;
      if (mediaSource && mediaSource.readyState === 'open') {
        // try to create sourcebuffers if mediasource opened
        this.checkPendingTracks();
      }
    }
  };

  BufferController.prototype.createSourceBuffers = function createSourceBuffers(tracks) {
    var sourceBuffer = this.sourceBuffer,
        mediaSource = this.mediaSource;

    for (var trackName in tracks) {
      if (!sourceBuffer[trackName]) {
        var track = tracks[trackName];
        // use levelCodec as first priority
        var codec = track.levelCodec || track.codec;
        var mimeType = track.container + ';codecs=' + codec;
        logger["b" /* logger */].log('creating sourceBuffer(' + mimeType + ')');
        try {
          var sb = sourceBuffer[trackName] = mediaSource.addSourceBuffer(mimeType);
          sb.addEventListener('updateend', this.onsbue);
          sb.addEventListener('error', this.onsbe);
          this.tracks[trackName] = { codec: codec, container: track.container };
          track.buffer = sb;
        } catch (err) {
          logger["b" /* logger */].error('error while trying to add sourceBuffer:' + err.message);
          this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_ADD_CODEC_ERROR, fatal: false, err: err, mimeType: mimeType });
        }
      }
    }
    this.hls.trigger(events["a" /* default */].BUFFER_CREATED, { tracks: tracks });
  };

  BufferController.prototype.onBufferAppending = function onBufferAppending(data) {
    if (!this._needsFlush) {
      if (!this.segments) {
        this.segments = [data];
      } else {
        this.segments.push(data);
      }
      this.doAppending();
    }
  };

  BufferController.prototype.onBufferAppendFail = function onBufferAppendFail(data) {
    logger["b" /* logger */].error('sourceBuffer error:', data.event);
    // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
    // this error might not always be fatal (it is fatal if decode error is set, in that case
    // it will be followed by a mediaElement error ...)
    this.hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].BUFFER_APPENDING_ERROR, fatal: false });
  };

  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()


  BufferController.prototype.onBufferEos = function onBufferEos(data) {
    var sb = this.sourceBuffer;
    var dataType = data.type;
    for (var type in sb) {
      if (!dataType || type === dataType) {
        if (!sb[type].ended) {
          sb[type].ended = true;
          logger["b" /* logger */].log(type + ' sourceBuffer now EOS');
        }
      }
    }
    this.checkEos();
  };

  // if all source buffers are marked as ended, signal endOfStream() to MediaSource.


  BufferController.prototype.checkEos = function checkEos() {
    var sb = this.sourceBuffer,
        mediaSource = this.mediaSource;
    if (!mediaSource || mediaSource.readyState !== 'open') {
      this._needsEos = false;
      return;
    }
    for (var type in sb) {
      var sbobj = sb[type];
      if (!sbobj.ended) {
        return;
      }
      if (sbobj.updating) {
        this._needsEos = true;
        return;
      }
    }
    logger["b" /* logger */].log('all media data available, signal endOfStream() to MediaSource and stop loading fragment');
    //Notify the media element that it now has all of the media data
    try {
      mediaSource.endOfStream();
    } catch (e) {
      logger["b" /* logger */].warn('exception while calling mediaSource.endOfStream()');
    }
    this._needsEos = false;
  };

  BufferController.prototype.onBufferFlushing = function onBufferFlushing(data) {
    this.flushRange.push({ start: data.startOffset, end: data.endOffset, type: data.type });
    // attempt flush immediatly
    this.flushBufferCounter = 0;
    this.doFlush();
  };

  BufferController.prototype.onLevelUpdated = function onLevelUpdated(event) {
    var details = event.details;
    if (details.fragments.length === 0) {
      return;
    }
    this._levelDuration = details.totalduration + details.fragments[0].start;
    this.updateMediaElementDuration();
  };

  // https://github.com/video-dev/hls.js/issues/355


  BufferController.prototype.updateMediaElementDuration = function updateMediaElementDuration() {
    var media = this.media,
        mediaSource = this.mediaSource,
        sourceBuffer = this.sourceBuffer,
        levelDuration = this._levelDuration;
    if (levelDuration === null || !media || !mediaSource || !sourceBuffer || media.readyState === 0 || mediaSource.readyState !== 'open') {
      return;
    }
    for (var type in sourceBuffer) {
      if (sourceBuffer[type].updating) {
        // can't set duration whilst a buffer is updating
        return;
      }
    }
    if (this._msDuration === null) {
      // initialise to the value that the media source is reporting
      this._msDuration = mediaSource.duration;
    }
    var duration = media.duration;
    // levelDuration was the last value we set.
    // not using mediaSource.duration as the browser may tweak this value
    // only update mediasource duration if its value increase, this is to avoid
    // flushing already buffered portion when switching between quality level
    if (levelDuration > this._msDuration && levelDuration > duration || duration === Infinity || isNaN(duration)) {
      logger["b" /* logger */].log('Updating mediasource duration to ' + levelDuration.toFixed(3));
      this._msDuration = mediaSource.duration = levelDuration;
    }
  };

  BufferController.prototype.doFlush = function doFlush() {
    // loop through all buffer ranges to flush
    while (this.flushRange.length) {
      var range = this.flushRange[0];
      // flushBuffer will abort any buffer append in progress and flush Audio/Video Buffer
      if (this.flushBuffer(range.start, range.end, range.type)) {
        // range flushed, remove from flush array
        this.flushRange.shift();
        this.flushBufferCounter = 0;
      } else {
        this._needsFlush = true;
        // avoid looping, wait for SB update end to retrigger a flush
        return;
      }
    }
    if (this.flushRange.length === 0) {
      // everything flushed
      this._needsFlush = false;

      // let's recompute this.appended, which is used to avoid flush looping
      var appended = 0;
      var sourceBuffer = this.sourceBuffer;
      try {
        for (var type in sourceBuffer) {
          appended += sourceBuffer[type].buffered.length;
        }
      } catch (error) {
        // error could be thrown while accessing buffered, in case sourcebuffer has already been removed from MediaSource
        // this is harmess at this stage, catch this to avoid reporting an internal exception
        logger["b" /* logger */].error('error while accessing sourceBuffer.buffered');
      }
      this.appended = appended;
      this.hls.trigger(events["a" /* default */].BUFFER_FLUSHED);
    }
  };

  BufferController.prototype.doAppending = function doAppending() {
    var hls = this.hls,
        sourceBuffer = this.sourceBuffer,
        segments = this.segments;
    if (Object.keys(sourceBuffer).length) {
      if (this.media.error) {
        this.segments = [];
        logger["b" /* logger */].error('trying to append although a media error occured, flush segment and abort');
        return;
      }
      if (this.appending) {
        //logger.log(`sb appending in progress`);
        return;
      }
      if (segments && segments.length) {
        var segment = segments.shift();
        try {
          var type = segment.type,
              sb = sourceBuffer[type];
          if (sb) {
            if (!sb.updating) {
              // reset sourceBuffer ended flag before appending segment
              sb.ended = false;
              //logger.log(`appending ${segment.content} ${type} SB, size:${segment.data.length}, ${segment.parent}`);
              this.parent = segment.parent;
              sb.appendBuffer(segment.data);
              this.appendError = 0;
              this.appended++;
              this.appending = true;
            } else {
              segments.unshift(segment);
            }
          } else {
            // in case we don't have any source buffer matching with this segment type,
            // it means that Mediasource fails to create sourcebuffer
            // discard this segment, and trigger update end
            this.onSBUpdateEnd();
          }
        } catch (err) {
          // in case any error occured while appending, put back segment in segments table
          logger["b" /* logger */].error('error while trying to append buffer:' + err.message);
          segments.unshift(segment);
          var event = { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, parent: segment.parent };
          if (err.code !== 22) {
            if (this.appendError) {
              this.appendError++;
            } else {
              this.appendError = 1;
            }
            event.details = errors["a" /* ErrorDetails */].BUFFER_APPEND_ERROR;
            /* with UHD content, we could get loop of quota exceeded error until
              browser is able to evict some data from sourcebuffer. retrying help recovering this
            */
            if (this.appendError > hls.config.appendErrorMaxRetry) {
              logger["b" /* logger */].log('fail ' + hls.config.appendErrorMaxRetry + ' times to append segment in sourceBuffer');
              segments = [];
              event.fatal = true;
              hls.trigger(events["a" /* default */].ERROR, event);
              return;
            } else {
              event.fatal = false;
              hls.trigger(events["a" /* default */].ERROR, event);
            }
          } else {
            // QuotaExceededError: http://www.w3.org/TR/html5/infrastructure.html#quotaexceedederror
            // let's stop appending any segments, and report BUFFER_FULL_ERROR error
            this.segments = [];
            event.details = errors["a" /* ErrorDetails */].BUFFER_FULL_ERROR;
            event.fatal = false;
            hls.trigger(events["a" /* default */].ERROR, event);
            return;
          }
        }
      }
    }
  };

  /*
    flush specified buffered range,
    return true once range has been flushed.
    as sourceBuffer.remove() is asynchronous, flushBuffer will be retriggered on sourceBuffer update end
  */


  BufferController.prototype.flushBuffer = function flushBuffer(startOffset, endOffset, typeIn) {
    var sb,
        i,
        bufStart,
        bufEnd,
        flushStart,
        flushEnd,
        sourceBuffer = this.sourceBuffer;
    if (Object.keys(sourceBuffer).length) {
      logger["b" /* logger */].log('flushBuffer,pos/start/end: ' + this.media.currentTime.toFixed(3) + '/' + startOffset + '/' + endOffset);
      // safeguard to avoid infinite looping : don't try to flush more than the nb of appended segments
      if (this.flushBufferCounter < this.appended) {
        for (var type in sourceBuffer) {
          // check if sourcebuffer type is defined (typeIn): if yes, let's only flush this one
          // if no, let's flush all sourcebuffers
          if (typeIn && type !== typeIn) {
            continue;
          }
          sb = sourceBuffer[type];
          // we are going to flush buffer, mark source buffer as 'not ended'
          sb.ended = false;
          if (!sb.updating) {
            try {
              for (i = 0; i < sb.buffered.length; i++) {
                bufStart = sb.buffered.start(i);
                bufEnd = sb.buffered.end(i);
                // workaround firefox not able to properly flush multiple buffered range.
                if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 && endOffset === Number.POSITIVE_INFINITY) {
                  flushStart = startOffset;
                  flushEnd = endOffset;
                } else {
                  flushStart = Math.max(bufStart, startOffset);
                  flushEnd = Math.min(bufEnd, endOffset);
                }
                /* sometimes sourcebuffer.remove() does not flush
                   the exact expected time range.
                   to avoid rounding issues/infinite loop,
                   only flush buffer range of length greater than 500ms.
                */
                if (Math.min(flushEnd, bufEnd) - flushStart > 0.5) {
                  this.flushBufferCounter++;
                  logger["b" /* logger */].log('flush ' + type + ' [' + flushStart + ',' + flushEnd + '], of [' + bufStart + ',' + bufEnd + '], pos:' + this.media.currentTime);
                  sb.remove(flushStart, flushEnd);
                  return false;
                }
              }
            } catch (e) {
              logger["b" /* logger */].warn('exception while accessing sourcebuffer, it might have been removed from MediaSource');
            }
          } else {
            //logger.log('abort ' + type + ' append in progress');
            // this will abort any appending in progress
            //sb.abort();
            logger["b" /* logger */].warn('cannot flush, sb updating in progress');
            return false;
          }
        }
      } else {
        logger["b" /* logger */].warn('abort flushing too many retries');
      }
      logger["b" /* logger */].log('buffer flushed');
    }
    // everything flushed !
    return true;
  };

  return BufferController;
}(event_handler);

/* harmony default export */ var buffer_controller = (buffer_controller_BufferController);
// CONCATENATED MODULE: ./src/controller/cap-level-controller.js
var cap_level_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function cap_level_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cap_level_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function cap_level_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * cap stream level to media size dimension controller
*/




var cap_level_controller_CapLevelController = function (_EventHandler) {
  cap_level_controller__inherits(CapLevelController, _EventHandler);

  function CapLevelController(hls) {
    cap_level_controller__classCallCheck(this, CapLevelController);

    return cap_level_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].FPS_DROP_LEVEL_CAPPING, events["a" /* default */].MEDIA_ATTACHING, events["a" /* default */].MANIFEST_PARSED));
  }

  CapLevelController.prototype.destroy = function destroy() {
    if (this.hls.config.capLevelToPlayerSize) {
      this.media = this.restrictedLevels = null;
      this.autoLevelCapping = Number.POSITIVE_INFINITY;
      if (this.timer) {
        this.timer = clearInterval(this.timer);
      }
    }
  };

  CapLevelController.prototype.onFpsDropLevelCapping = function onFpsDropLevelCapping(data) {
    // Don't add a restricted level more than once
    if (CapLevelController.isLevelAllowed(data.droppedLevel, this.restrictedLevels)) {
      this.restrictedLevels.push(data.droppedLevel);
    }
  };

  CapLevelController.prototype.onMediaAttaching = function onMediaAttaching(data) {
    this.media = data.media instanceof HTMLVideoElement ? data.media : null;
  };

  CapLevelController.prototype.onManifestParsed = function onManifestParsed(data) {
    var hls = this.hls;
    this.restrictedLevels = [];
    if (hls.config.capLevelToPlayerSize) {
      this.autoLevelCapping = Number.POSITIVE_INFINITY;
      this.levels = data.levels;
      hls.firstLevel = this.getMaxLevel(data.firstLevel);
      clearInterval(this.timer);
      this.timer = setInterval(this.detectPlayerSize.bind(this), 1000);
      this.detectPlayerSize();
    }
  };

  CapLevelController.prototype.detectPlayerSize = function detectPlayerSize() {
    if (this.media) {
      var levelsLength = this.levels ? this.levels.length : 0;
      if (levelsLength) {
        var hls = this.hls;
        hls.autoLevelCapping = this.getMaxLevel(levelsLength - 1);
        if (hls.autoLevelCapping > this.autoLevelCapping) {
          // if auto level capping has a higher value for the previous one, flush the buffer using nextLevelSwitch
          // usually happen when the user go to the fullscreen mode.
          hls.streamController.nextLevelSwitch();
        }
        this.autoLevelCapping = hls.autoLevelCapping;
      }
    }
  };

  /*
  * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
  */


  CapLevelController.prototype.getMaxLevel = function getMaxLevel(capLevelIndex) {
    var _this2 = this;

    if (!this.levels) {
      return -1;
    }

    var validLevels = this.levels.filter(function (level, index) {
      return CapLevelController.isLevelAllowed(index, _this2.restrictedLevels) && index <= capLevelIndex;
    });

    return CapLevelController.getMaxLevelByMediaSize(validLevels, this.mediaWidth, this.mediaHeight);
  };

  CapLevelController.isLevelAllowed = function isLevelAllowed(level) {
    var restrictedLevels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return restrictedLevels.indexOf(level) === -1;
  };

  CapLevelController.getMaxLevelByMediaSize = function getMaxLevelByMediaSize(levels, width, height) {
    if (!levels || levels && !levels.length) {
      return -1;
    }

    // Levels can have the same dimensions but differing bandwidths - since levels are ordered, we can look to the next
    // to determine whether we've chosen the greatest bandwidth for the media's dimensions
    var atGreatestBandiwdth = function atGreatestBandiwdth(curLevel, nextLevel) {
      if (!nextLevel) {
        return true;
      }
      return curLevel.width !== nextLevel.width || curLevel.height !== nextLevel.height;
    };

    // If we run through the loop without breaking, the media's dimensions are greater than every level, so default to
    // the max level
    var maxLevelIndex = levels.length - 1;

    for (var i = 0; i < levels.length; i += 1) {
      var level = levels[i];
      if ((level.width >= width || level.height >= height) && atGreatestBandiwdth(level, levels[i + 1])) {
        maxLevelIndex = i;
        break;
      }
    }

    return maxLevelIndex;
  };

  cap_level_controller__createClass(CapLevelController, [{
    key: 'mediaWidth',
    get: function get() {
      var width = void 0;
      var media = this.media;
      if (media) {
        width = media.width || media.clientWidth || media.offsetWidth;
        width *= CapLevelController.contentScaleFactor;
      }
      return width;
    }
  }, {
    key: 'mediaHeight',
    get: function get() {
      var height = void 0;
      var media = this.media;
      if (media) {
        height = media.height || media.clientHeight || media.offsetHeight;
        height *= CapLevelController.contentScaleFactor;
      }
      return height;
    }
  }], [{
    key: 'contentScaleFactor',
    get: function get() {
      var pixelRatio = 1;
      try {
        pixelRatio = window.devicePixelRatio;
      } catch (e) {}
      return pixelRatio;
    }
  }]);

  return CapLevelController;
}(event_handler);

/* harmony default export */ var cap_level_controller = (cap_level_controller_CapLevelController);
// CONCATENATED MODULE: ./src/controller/fps-controller.js
function fps_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fps_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function fps_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * FPS Controller
*/





var fps_controller_FPSController = function (_EventHandler) {
  fps_controller__inherits(FPSController, _EventHandler);

  function FPSController(hls) {
    fps_controller__classCallCheck(this, FPSController);

    return fps_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHING));
  }

  FPSController.prototype.destroy = function destroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.isVideoPlaybackQualityAvailable = false;
  };

  FPSController.prototype.onMediaAttaching = function onMediaAttaching(data) {
    var config = this.hls.config;
    if (config.capLevelOnFPSDrop) {
      var video = this.video = data.media instanceof HTMLVideoElement ? data.media : null;
      if (typeof video.getVideoPlaybackQuality === 'function') {
        this.isVideoPlaybackQualityAvailable = true;
      }
      clearInterval(this.timer);
      this.timer = setInterval(this.checkFPSInterval.bind(this), config.fpsDroppedMonitoringPeriod);
    }
  };

  FPSController.prototype.checkFPS = function checkFPS(video, decodedFrames, droppedFrames) {
    var currentTime = performance.now();
    if (decodedFrames) {
      if (this.lastTime) {
        var currentPeriod = currentTime - this.lastTime,
            currentDropped = droppedFrames - this.lastDroppedFrames,
            currentDecoded = decodedFrames - this.lastDecodedFrames,
            droppedFPS = 1000 * currentDropped / currentPeriod,
            hls = this.hls;
        hls.trigger(events["a" /* default */].FPS_DROP, { currentDropped: currentDropped, currentDecoded: currentDecoded, totalDroppedFrames: droppedFrames });
        if (droppedFPS > 0) {
          //logger.log('checkFPS : droppedFPS/decodedFPS:' + droppedFPS/(1000 * currentDecoded / currentPeriod));
          if (currentDropped > hls.config.fpsDroppedMonitoringThreshold * currentDecoded) {
            var currentLevel = hls.currentLevel;
            logger["b" /* logger */].warn('drop FPS ratio greater than max allowed value for currentLevel: ' + currentLevel);
            if (currentLevel > 0 && (hls.autoLevelCapping === -1 || hls.autoLevelCapping >= currentLevel)) {
              currentLevel = currentLevel - 1;
              hls.trigger(events["a" /* default */].FPS_DROP_LEVEL_CAPPING, { level: currentLevel, droppedLevel: hls.currentLevel });
              hls.autoLevelCapping = currentLevel;
              hls.streamController.nextLevelSwitch();
            }
          }
        }
      }
      this.lastTime = currentTime;
      this.lastDroppedFrames = droppedFrames;
      this.lastDecodedFrames = decodedFrames;
    }
  };

  FPSController.prototype.checkFPSInterval = function checkFPSInterval() {
    var video = this.video;
    if (video) {
      if (this.isVideoPlaybackQualityAvailable) {
        var videoPlaybackQuality = video.getVideoPlaybackQuality();
        this.checkFPS(video, videoPlaybackQuality.totalVideoFrames, videoPlaybackQuality.droppedVideoFrames);
      } else {
        this.checkFPS(video, video.webkitDecodedFrameCount, video.webkitDroppedFrameCount);
      }
    }
  };

  return FPSController;
}(event_handler);

/* harmony default export */ var fps_controller = (fps_controller_FPSController);
// CONCATENATED MODULE: ./src/utils/xhr-loader.js
function xhr_loader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * XHR based logger
*/



var xhr_loader_XhrLoader = function () {
  function XhrLoader(config) {
    xhr_loader__classCallCheck(this, XhrLoader);

    if (config && config.xhrSetup) {
      this.xhrSetup = config.xhrSetup;
    }
  }

  XhrLoader.prototype.destroy = function destroy() {
    this.abort();
    this.loader = null;
  };

  XhrLoader.prototype.abort = function abort() {
    var loader = this.loader;
    if (loader && loader.readyState !== 4) {
      this.stats.aborted = true;
      loader.abort();
    }

    window.clearTimeout(this.requestTimeout);
    this.requestTimeout = null;
    window.clearTimeout(this.retryTimeout);
    this.retryTimeout = null;
  };

  XhrLoader.prototype.load = function load(context, config, callbacks) {
    this.context = context;
    this.config = config;
    this.callbacks = callbacks;
    this.stats = { trequest: performance.now(), retry: 0 };
    this.retryDelay = config.retryDelay;
    this.loadInternal();
  };

  XhrLoader.prototype.loadInternal = function loadInternal() {
    var xhr,
        context = this.context;

    if (typeof XDomainRequest !== 'undefined') {
      xhr = this.loader = new XDomainRequest();
    } else {
      xhr = this.loader = new XMLHttpRequest();
    }
    var stats = this.stats;
    stats.tfirst = 0;
    stats.loaded = 0;
    var xhrSetup = this.xhrSetup;

    try {
      if (xhrSetup) {
        try {
          xhrSetup(xhr, context.url);
        } catch (e) {
          // fix xhrSetup: (xhr, url) => {xhr.setRequestHeader("Content-Language", "test");}
          // not working, as xhr.setRequestHeader expects xhr.readyState === OPEN
          xhr.open('GET', context.url, true);
          xhrSetup(xhr, context.url);
        }
      }
      if (!xhr.readyState) {
        xhr.open('GET', context.url, true);
      }
    } catch (e) {
      // IE11 throws an exception on xhr.open if attempting to access an HTTP resource over HTTPS
      this.callbacks.onError({ code: xhr.status, text: e.message }, context, xhr);
      return;
    }

    if (context.rangeEnd) {
      xhr.setRequestHeader('Range', 'bytes=' + context.rangeStart + '-' + (context.rangeEnd - 1));
    }
    xhr.onreadystatechange = this.readystatechange.bind(this);
    xhr.onprogress = this.loadprogress.bind(this);
    xhr.responseType = context.responseType;

    // setup timeout before we perform request
    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout);
    xhr.send();
  };

  XhrLoader.prototype.readystatechange = function readystatechange(event) {
    var xhr = event.currentTarget,
        readyState = xhr.readyState,
        stats = this.stats,
        context = this.context,
        config = this.config;

    // don't proceed if xhr has been aborted
    if (stats.aborted) {
      return;
    }

    // >= HEADERS_RECEIVED
    if (readyState >= 2) {
      // clear xhr timeout and rearm it if readyState less than 4
      window.clearTimeout(this.requestTimeout);
      if (stats.tfirst === 0) {
        stats.tfirst = Math.max(performance.now(), stats.trequest);
      }
      if (readyState === 4) {
        var status = xhr.status;
        // http status between 200 to 299 are all successful
        if (status >= 200 && status < 300) {
          stats.tload = Math.max(stats.tfirst, performance.now());
          var data = void 0,
              len = void 0;
          if (context.responseType === 'arraybuffer') {
            data = xhr.response;
            len = data.byteLength;
          } else {
            data = xhr.responseText;
            len = data.length;
          }
          stats.loaded = stats.total = len;
          var response = { url: xhr.responseURL, data: data };
          this.callbacks.onSuccess(response, stats, context, xhr);
        } else {
          // if max nb of retries reached or if http status between 400 and 499 (such error cannot be recovered, retrying is useless), return error
          if (stats.retry >= config.maxRetry || status >= 400 && status < 499) {
            logger["b" /* logger */].error(status + ' while loading ' + context.url);
            this.callbacks.onError({ code: status, text: xhr.statusText }, context, xhr);
          } else {
            // retry
            logger["b" /* logger */].warn(status + ' while loading ' + context.url + ', retrying in ' + this.retryDelay + '...');
            // aborts and resets internal state
            this.destroy();
            // schedule retry
            this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay);
            // set exponential backoff
            this.retryDelay = Math.min(2 * this.retryDelay, config.maxRetryDelay);
            stats.retry++;
          }
        }
      } else {
        // readyState >= 2 AND readyState !==4 (readyState = HEADERS_RECEIVED || LOADING) rearm timeout as xhr not finished yet
        this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), config.timeout);
      }
    }
  };

  XhrLoader.prototype.loadtimeout = function loadtimeout() {
    logger["b" /* logger */].warn('timeout while loading ' + this.context.url);
    this.callbacks.onTimeout(this.stats, this.context, null);
  };

  XhrLoader.prototype.loadprogress = function loadprogress(event) {
    var xhr = event.currentTarget,
        stats = this.stats;

    stats.loaded = event.loaded;
    if (event.lengthComputable) {
      stats.total = event.total;
    }
    var onProgress = this.callbacks.onProgress;
    if (onProgress) {
      // third arg is to provide on progress data
      onProgress(stats, this.context, null, xhr);
    }
  };

  return XhrLoader;
}();

/* harmony default export */ var xhr_loader = (xhr_loader_XhrLoader);
// CONCATENATED MODULE: ./src/controller/audio-track-controller.js
var audio_track_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function audio_track_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function audio_track_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function audio_track_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * audio track controller
*/






var audio_track_controller_AudioTrackController = function (_EventHandler) {
  audio_track_controller__inherits(AudioTrackController, _EventHandler);

  function AudioTrackController(hls) {
    audio_track_controller__classCallCheck(this, AudioTrackController);

    var _this = audio_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MANIFEST_LOADING, events["a" /* default */].MANIFEST_LOADED, events["a" /* default */].AUDIO_TRACK_LOADED, events["a" /* default */].ERROR));

    _this.ticks = 0;
    _this.ontick = _this.tick.bind(_this);
    return _this;
  }

  AudioTrackController.prototype.destroy = function destroy() {
    this.cleanTimer();
    event_handler.prototype.destroy.call(this);
  };

  AudioTrackController.prototype.cleanTimer = function cleanTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  AudioTrackController.prototype.tick = function tick() {
    this.ticks++;
    if (this.ticks === 1) {
      this.doTick();
      if (this.ticks > 1) {
        setTimeout(this.tick, 1);
      }
      this.ticks = 0;
    }
  };

  AudioTrackController.prototype.doTick = function doTick() {
    this.updateTrack(this.trackId);
  };

  AudioTrackController.prototype.onError = function onError(data) {
    if (data.fatal && data.type === errors["b" /* ErrorTypes */].NETWORK_ERROR) {
      this.cleanTimer();
    }
  };

  AudioTrackController.prototype.onManifestLoading = function onManifestLoading() {
    // reset audio tracks on manifest loading
    this.tracks = [];
    this.trackId = -1;
  };

  AudioTrackController.prototype.onManifestLoaded = function onManifestLoaded(data) {
    var _this2 = this;

    var tracks = data.audioTracks || [];
    var defaultFound = false;
    this.tracks = tracks;
    this.hls.trigger(events["a" /* default */].AUDIO_TRACKS_UPDATED, { audioTracks: tracks });
    // loop through available audio tracks and autoselect default if needed
    var id = 0;
    tracks.forEach(function (track) {
      if (track.default && !defaultFound) {
        _this2.audioTrack = id;
        defaultFound = true;
        return;
      }
      id++;
    });
    if (defaultFound === false && tracks.length) {
      logger["b" /* logger */].log('no default audio track defined, use first audio track as default');
      this.audioTrack = 0;
    }
  };

  AudioTrackController.prototype.onAudioTrackLoaded = function onAudioTrackLoaded(data) {
    if (data.id < this.tracks.length) {
      logger["b" /* logger */].log('audioTrack ' + data.id + ' loaded');
      this.tracks[data.id].details = data.details;
      // check if current playlist is a live playlist
      if (data.details.live && !this.timer) {
        // if live playlist we will have to reload it periodically
        // set reload period to playlist target duration
        this.timer = setInterval(this.ontick, 1000 * data.details.targetduration);
      }
      if (!data.details.live && this.timer) {
        // playlist is not live and timer is armed : stopping it
        this.cleanTimer();
      }
    }
  };

  /** get alternate audio tracks list from playlist **/


  AudioTrackController.prototype.setAudioTrackInternal = function setAudioTrackInternal(newId) {
    // check if level idx is valid
    if (newId >= 0 && newId < this.tracks.length) {
      // stopping live reloading timer if any
      this.cleanTimer();
      this.trackId = newId;
      logger["b" /* logger */].log('switching to audioTrack ' + newId);
      var audioTrack = this.tracks[newId],
          hls = this.hls,
          type = audioTrack.type,
          url = audioTrack.url,
          eventObj = { id: newId, type: type, url: url };
      // keep AUDIO_TRACK_SWITCH for legacy reason
      hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCH, eventObj);
      hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCHING, eventObj);
      // check if we need to load playlist for this audio Track
      var details = audioTrack.details;
      if (url && (details === undefined || details.live === true)) {
        // track not retrieved yet, or live playlist we need to (re)load it
        logger["b" /* logger */].log('(re)loading playlist for audioTrack ' + newId);
        hls.trigger(events["a" /* default */].AUDIO_TRACK_LOADING, { url: url, id: newId });
      }
    }
  };

  AudioTrackController.prototype.updateTrack = function updateTrack(newId) {
    // check if level idx is valid
    if (newId >= 0 && newId < this.tracks.length) {
      // stopping live reloading timer if any
      this.cleanTimer();
      this.trackId = newId;
      logger["b" /* logger */].log('updating audioTrack ' + newId);
      var audioTrack = this.tracks[newId],
          url = audioTrack.url;
      // check if we need to load playlist for this audio Track
      var details = audioTrack.details;
      if (url && (details === undefined || details.live === true)) {
        // track not retrieved yet, or live playlist we need to (re)load it
        logger["b" /* logger */].log('(re)loading playlist for audioTrack ' + newId);
        this.hls.trigger(events["a" /* default */].AUDIO_TRACK_LOADING, { url: url, id: newId });
      }
    }
  };

  audio_track_controller__createClass(AudioTrackController, [{
    key: 'audioTracks',
    get: function get() {
      return this.tracks;
    }

    /** get index of the selected audio track (index in audio track lists) **/

  }, {
    key: 'audioTrack',
    get: function get() {
      return this.trackId;
    }

    /** select an audio track, based on its index in audio track lists**/
    ,
    set: function set(audioTrackId) {
      if (this.trackId !== audioTrackId || this.tracks[audioTrackId].details === undefined) {
        this.setAudioTrackInternal(audioTrackId);
      }
    }
  }]);

  return AudioTrackController;
}(event_handler);

/* harmony default export */ var audio_track_controller = (audio_track_controller_AudioTrackController);
// CONCATENATED MODULE: ./src/controller/audio-stream-controller.js
var audio_stream_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function audio_stream_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function audio_stream_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function audio_stream_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Audio Stream Controller
*/











var audio_stream_controller_State = {
  STOPPED: 'STOPPED',
  STARTING: 'STARTING',
  IDLE: 'IDLE',
  PAUSED: 'PAUSED',
  KEY_LOADING: 'KEY_LOADING',
  FRAG_LOADING: 'FRAG_LOADING',
  FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
  WAITING_TRACK: 'WAITING_TRACK',
  PARSING: 'PARSING',
  PARSED: 'PARSED',
  BUFFER_FLUSHING: 'BUFFER_FLUSHING',
  ENDED: 'ENDED',
  ERROR: 'ERROR',
  WAITING_INIT_PTS: 'WAITING_INIT_PTS'
};

var audio_stream_controller_AudioStreamController = function (_EventHandler) {
  audio_stream_controller__inherits(AudioStreamController, _EventHandler);

  function AudioStreamController(hls) {
    audio_stream_controller__classCallCheck(this, AudioStreamController);

    var _this = audio_stream_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHED, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].AUDIO_TRACKS_UPDATED, events["a" /* default */].AUDIO_TRACK_SWITCHING, events["a" /* default */].AUDIO_TRACK_LOADED, events["a" /* default */].KEY_LOADED, events["a" /* default */].FRAG_LOADED, events["a" /* default */].FRAG_PARSING_INIT_SEGMENT, events["a" /* default */].FRAG_PARSING_DATA, events["a" /* default */].FRAG_PARSED, events["a" /* default */].ERROR, events["a" /* default */].BUFFER_CREATED, events["a" /* default */].BUFFER_APPENDED, events["a" /* default */].BUFFER_FLUSHED, events["a" /* default */].INIT_PTS_FOUND));

    _this.config = hls.config;
    _this.audioCodecSwap = false;
    _this.ticks = 0;
    _this._state = audio_stream_controller_State.STOPPED;
    _this.ontick = _this.tick.bind(_this);
    _this.initPTS = [];
    _this.waitingFragment = null;
    _this.videoTrackCC = null;
    return _this;
  }

  AudioStreamController.prototype.destroy = function destroy() {
    this.stopLoad();
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    event_handler.prototype.destroy.call(this);
    this.state = audio_stream_controller_State.STOPPED;
  };

  //Signal that video PTS was found


  AudioStreamController.prototype.onInitPtsFound = function onInitPtsFound(data) {
    var demuxerId = data.id,
        cc = data.frag.cc,
        initPTS = data.initPTS;
    if (demuxerId === 'main') {
      //Always update the new INIT PTS
      //Can change due level switch
      this.initPTS[cc] = initPTS;
      this.videoTrackCC = cc;
      logger["b" /* logger */].log('InitPTS for cc:' + cc + ' found from video track:' + initPTS);

      //If we are waiting we need to demux/remux the waiting frag
      //With the new initPTS
      if (this.state === audio_stream_controller_State.WAITING_INIT_PTS) {
        this.tick();
      }
    }
  };

  AudioStreamController.prototype.startLoad = function startLoad(startPosition) {
    if (this.tracks) {
      var lastCurrentTime = this.lastCurrentTime;
      this.stopLoad();
      if (!this.timer) {
        this.timer = setInterval(this.ontick, 100);
      }
      this.fragLoadError = 0;
      if (lastCurrentTime > 0 && startPosition === -1) {
        logger["b" /* logger */].log('audio:override startPosition with lastCurrentTime @' + lastCurrentTime.toFixed(3));
        this.state = audio_stream_controller_State.IDLE;
      } else {
        this.lastCurrentTime = this.startPosition ? this.startPosition : startPosition;
        this.state = audio_stream_controller_State.STARTING;
      }
      this.nextLoadPosition = this.startPosition = this.lastCurrentTime;
      this.tick();
    } else {
      this.startPosition = startPosition;
      this.state = audio_stream_controller_State.STOPPED;
    }
  };

  AudioStreamController.prototype.stopLoad = function stopLoad() {
    var frag = this.fragCurrent;
    if (frag) {
      if (frag.loader) {
        frag.loader.abort();
      }
      this.fragCurrent = null;
    }
    this.fragPrevious = null;
    if (this.demuxer) {
      this.demuxer.destroy();
      this.demuxer = null;
    }
    this.state = audio_stream_controller_State.STOPPED;
  };

  AudioStreamController.prototype.tick = function tick() {
    this.ticks++;
    if (this.ticks === 1) {
      this.doTick();
      if (this.ticks > 1) {
        setTimeout(this.tick, 1);
      }
      this.ticks = 0;
    }
  };

  AudioStreamController.prototype.doTick = function doTick() {
    var pos,
        track,
        trackDetails,
        hls = this.hls,
        config = hls.config;
    //logger.log('audioStream:' + this.state);
    switch (this.state) {
      case audio_stream_controller_State.ERROR:
      //don't do anything in error state to avoid breaking further ...
      case audio_stream_controller_State.PAUSED:
      //don't do anything in paused state either ...
      case audio_stream_controller_State.BUFFER_FLUSHING:
        break;
      case audio_stream_controller_State.STARTING:
        this.state = audio_stream_controller_State.WAITING_TRACK;
        this.loadedmetadata = false;
        break;
      case audio_stream_controller_State.IDLE:
        var tracks = this.tracks;
        // audio tracks not received => exit loop
        if (!tracks) {
          break;
        }
        // if video not attached AND
        // start fragment already requested OR start frag prefetch disable
        // exit loop
        // => if media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
        if (!this.media && (this.startFragRequested || !config.startFragPrefetch)) {
          break;
        }
        // determine next candidate fragment to be loaded, based on current position and
        //  end of buffer position
        // if we have not yet loaded any fragment, start loading from start position
        if (this.loadedmetadata) {
          pos = this.media.currentTime;
        } else {
          pos = this.nextLoadPosition;
          if (pos === undefined) {
            break;
          }
        }
        var media = this.mediaBuffer ? this.mediaBuffer : this.media,
            bufferInfo = buffer_helper.bufferInfo(media, pos, config.maxBufferHole),
            bufferLen = bufferInfo.len,
            bufferEnd = bufferInfo.end,
            fragPrevious = this.fragPrevious,
            maxBufLen = config.maxMaxBufferLength,
            audioSwitch = this.audioSwitch,
            trackId = this.trackId;

        // if buffer length is less than maxBufLen try to load a new fragment
        if ((bufferLen < maxBufLen || audioSwitch) && trackId < tracks.length) {
          trackDetails = tracks[trackId].details;
          // if track info not retrieved yet, switch state and wait for track retrieval
          if (typeof trackDetails === 'undefined') {
            this.state = audio_stream_controller_State.WAITING_TRACK;
            break;
          }

          // we just got done loading the final fragment, check if we need to finalize media stream
          if (!audioSwitch && !trackDetails.live && fragPrevious && fragPrevious.sn === trackDetails.endSN) {
            // if we are not seeking or if we are seeking but everything (almost) til the end is buffered, let's signal eos
            // we don't compare exactly media.duration === bufferInfo.end as there could be some subtle media duration difference when switching
            // between different renditions. using half frag duration should help cope with these cases.
            if (!this.media.seeking || this.media.duration - bufferEnd < fragPrevious.duration / 2) {
              // Finalize the media stream
              this.hls.trigger(events["a" /* default */].BUFFER_EOS, { type: 'audio' });
              this.state = audio_stream_controller_State.ENDED;
              break;
            }
          }

          // find fragment index, contiguous with end of buffer position
          var fragments = trackDetails.fragments,
              fragLen = fragments.length,
              start = fragments[0].start,
              end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
              frag = void 0;

          // When switching audio track, reload audio as close as possible to currentTime
          if (audioSwitch) {
            if (trackDetails.live && !trackDetails.PTSKnown) {
              logger["b" /* logger */].log('switching audiotrack, live stream, unknown PTS,load first fragment');
              bufferEnd = 0;
            } else {
              bufferEnd = pos;
              // if currentTime (pos) is less than alt audio playlist start time, it means that alt audio is ahead of currentTime
              if (trackDetails.PTSKnown && pos < start) {
                // if everything is buffered from pos to start or if audio buffer upfront, let's seek to start
                if (bufferInfo.end > start || bufferInfo.nextStart) {
                  logger["b" /* logger */].log('alt audio track ahead of main track, seek to start of alt audio track');
                  this.media.currentTime = start + 0.05;
                } else {
                  return;
                }
              }
            }
          }
          if (trackDetails.initSegment && !trackDetails.initSegment.data) {
            frag = trackDetails.initSegment;
          }
          // if bufferEnd before start of playlist, load first fragment
          else if (bufferEnd <= start) {
              frag = fragments[0];
              if (this.videoTrackCC !== null && frag.cc !== this.videoTrackCC) {
                // Ensure we find a fragment which matches the continuity of the video track
                frag = findFragWithCC(fragments, this.videoTrackCC);
              }
              if (trackDetails.live && frag.loadIdx && frag.loadIdx === this.fragLoadIdx) {
                // we just loaded this first fragment, and we are still lagging behind the start of the live playlist
                // let's force seek to start
                var nextBuffered = bufferInfo.nextStart ? bufferInfo.nextStart : start;
                logger["b" /* logger */].log('no alt audio available @currentTime:' + this.media.currentTime + ', seeking @' + (nextBuffered + 0.05));
                this.media.currentTime = nextBuffered + 0.05;
                return;
              }
            } else {
              var foundFrag = void 0;
              var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
              var fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : undefined;
              var fragmentWithinToleranceTest = function fragmentWithinToleranceTest(candidate) {
                // offset should be within fragment boundary - config.maxFragLookUpTolerance
                // this is to cope with situations like
                // bufferEnd = 9.991
                // frag[Ø] : [0,10]
                // frag[1] : [10,20]
                // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
                //              frag start               frag start+duration
                //                  |-----------------------------|
                //              <--->                         <--->
                //  ...--------><-----------------------------><---------....
                // previous frag         matching fragment         next frag
                //  return -1             return 0                 return 1
                //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
                // Set the lookup tolerance to be small enough to detect the current segment - ensures we don't skip over very small segments
                var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration);
                if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) {
                  return 1;
                } // if maxFragLookUpTolerance will have negative value then don't return -1 for first element
                else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) {
                    return -1;
                  }
                return 0;
              };

              if (bufferEnd < end) {
                if (bufferEnd > end - maxFragLookUpTolerance) {
                  maxFragLookUpTolerance = 0;
                }
                // Prefer the next fragment if it's within tolerance
                if (fragNext && !fragmentWithinToleranceTest(fragNext)) {
                  foundFrag = fragNext;
                } else {
                  foundFrag = binary_search.search(fragments, fragmentWithinToleranceTest);
                }
              } else {
                // reach end of playlist
                foundFrag = fragments[fragLen - 1];
              }
              if (foundFrag) {
                frag = foundFrag;
                start = foundFrag.start;
                //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
                if (fragPrevious && frag.level === fragPrevious.level && frag.sn === fragPrevious.sn) {
                  if (frag.sn < trackDetails.endSN) {
                    frag = fragments[frag.sn + 1 - trackDetails.startSN];
                    logger["b" /* logger */].log('SN just loaded, load next one: ' + frag.sn);
                  } else {
                    frag = null;
                  }
                }
              }
            }
          if (frag) {
            //logger.log('      loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
            if (frag.decryptdata && frag.decryptdata.uri != null && frag.decryptdata.key == null) {
              logger["b" /* logger */].log('Loading key for ' + frag.sn + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + trackId);
              this.state = audio_stream_controller_State.KEY_LOADING;
              hls.trigger(events["a" /* default */].KEY_LOADING, { frag: frag });
            } else {
              logger["b" /* logger */].log('Loading ' + frag.sn + ', cc: ' + frag.cc + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + trackId + ', currentTime:' + pos + ',bufferEnd:' + bufferEnd.toFixed(3));
              // ensure that we are not reloading the same fragments in loop ...
              if (this.fragLoadIdx !== undefined) {
                this.fragLoadIdx++;
              } else {
                this.fragLoadIdx = 0;
              }
              if (frag.loadCounter) {
                frag.loadCounter++;
                var maxThreshold = config.fragLoadingLoopThreshold;
                // if this frag has already been loaded 3 times, and if it has been reloaded recently
                if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) {
                  hls.trigger(events["a" /* default */].ERROR, { type: errors["b" /* ErrorTypes */].MEDIA_ERROR, details: errors["a" /* ErrorDetails */].FRAG_LOOP_LOADING_ERROR, fatal: false, frag: frag });
                  return;
                }
              } else {
                frag.loadCounter = 1;
              }
              frag.loadIdx = this.fragLoadIdx;
              this.fragCurrent = frag;
              this.startFragRequested = true;
              if (!isNaN(frag.sn)) {
                this.nextLoadPosition = frag.start + frag.duration;
              }
              hls.trigger(events["a" /* default */].FRAG_LOADING, { frag: frag });
              this.state = audio_stream_controller_State.FRAG_LOADING;
            }
          }
        }
        break;
      case audio_stream_controller_State.WAITING_TRACK:
        track = this.tracks[this.trackId];
        // check if playlist is already loaded
        if (track && track.details) {
          this.state = audio_stream_controller_State.IDLE;
        }
        break;
      case audio_stream_controller_State.FRAG_LOADING_WAITING_RETRY:
        var now = performance.now();
        var retryDate = this.retryDate;
        media = this.media;
        var isSeeking = media && media.seeking;
        // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
        if (!retryDate || now >= retryDate || isSeeking) {
          logger["b" /* logger */].log('audioStreamController: retryDate reached, switch back to IDLE state');
          this.state = audio_stream_controller_State.IDLE;
        }
        break;
      case audio_stream_controller_State.WAITING_INIT_PTS:
        var videoTrackCC = this.videoTrackCC;
        if (this.initPTS[videoTrackCC] === undefined) {
          break;
        }

        // Ensure we don't get stuck in the WAITING_INIT_PTS state if the waiting frag CC doesn't match any initPTS
        var waitingFrag = this.waitingFragment;
        if (waitingFrag) {
          var waitingFragCC = waitingFrag.frag.cc;
          if (videoTrackCC !== waitingFragCC) {
            track = this.tracks[this.trackId];
            if (track.details && track.details.live) {
              logger["b" /* logger */].warn('Waiting fragment CC (' + waitingFragCC + ') does not match video track CC (' + videoTrackCC + ')');
              this.waitingFragment = null;
              this.state = audio_stream_controller_State.IDLE;
            }
          } else {
            this.state = audio_stream_controller_State.FRAG_LOADING;
            this.onFragLoaded(this.waitingFragment);
            this.waitingFragment = null;
          }
        } else {
          this.state = audio_stream_controller_State.IDLE;
        }

        break;
      case audio_stream_controller_State.STOPPED:
      case audio_stream_controller_State.FRAG_LOADING:
      case audio_stream_controller_State.PARSING:
      case audio_stream_controller_State.PARSED:
      case audio_stream_controller_State.ENDED:
        break;
      default:
        break;
    }
  };

  AudioStreamController.prototype.onMediaAttached = function onMediaAttached(data) {
    var media = this.media = this.mediaBuffer = data.media;
    this.onvseeking = this.onMediaSeeking.bind(this);
    this.onvended = this.onMediaEnded.bind(this);
    media.addEventListener('seeking', this.onvseeking);
    media.addEventListener('ended', this.onvended);
    var config = this.config;
    if (this.tracks && config.autoStartLoad) {
      this.startLoad(config.startPosition);
    }
  };

  AudioStreamController.prototype.onMediaDetaching = function onMediaDetaching() {
    var media = this.media;
    if (media && media.ended) {
      logger["b" /* logger */].log('MSE detaching and video ended, reset startPosition');
      this.startPosition = this.lastCurrentTime = 0;
    }

    // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
    var tracks = this.tracks;
    if (tracks) {
      // reset fragment load counter
      tracks.forEach(function (track) {
        if (track.details) {
          track.details.fragments.forEach(function (fragment) {
            fragment.loadCounter = undefined;
          });
        }
      });
    }
    // remove video listeners
    if (media) {
      media.removeEventListener('seeking', this.onvseeking);
      media.removeEventListener('ended', this.onvended);
      this.onvseeking = this.onvseeked = this.onvended = null;
    }
    this.media = this.mediaBuffer = null;
    this.loadedmetadata = false;
    this.stopLoad();
  };

  AudioStreamController.prototype.onMediaSeeking = function onMediaSeeking() {
    if (this.state === audio_stream_controller_State.ENDED) {
      // switch to IDLE state to check for potential new fragment
      this.state = audio_stream_controller_State.IDLE;
    }
    if (this.media) {
      this.lastCurrentTime = this.media.currentTime;
    }
    // avoid reporting fragment loop loading error in case user is seeking several times on same position
    if (this.fragLoadIdx !== undefined) {
      this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
    }
    // tick to speed up processing
    this.tick();
  };

  AudioStreamController.prototype.onMediaEnded = function onMediaEnded() {
    // reset startPosition and lastCurrentTime to restart playback @ stream beginning
    this.startPosition = this.lastCurrentTime = 0;
  };

  AudioStreamController.prototype.onAudioTracksUpdated = function onAudioTracksUpdated(data) {
    logger["b" /* logger */].log('audio tracks updated');
    this.tracks = data.audioTracks;
  };

  AudioStreamController.prototype.onAudioTrackSwitching = function onAudioTrackSwitching(data) {
    // if any URL found on new audio track, it is an alternate audio track
    var altAudio = !!data.url;
    this.trackId = data.id;

    this.fragCurrent = null;
    this.state = audio_stream_controller_State.PAUSED;
    this.waitingFragment = null;
    // destroy useless demuxer when switching audio to main
    if (!altAudio) {
      if (this.demuxer) {
        this.demuxer.destroy();
        this.demuxer = null;
      }
    } else {
      // switching to audio track, start timer if not already started
      if (!this.timer) {
        this.timer = setInterval(this.ontick, 100);
      }
    }

    //should we switch tracks ?
    if (altAudio) {
      this.audioSwitch = true;
      //main audio track are handled by stream-controller, just do something if switching to alt audio track
      this.state = audio_stream_controller_State.IDLE;
      // increase fragment load Index to avoid frag loop loading error after buffer flush
      if (this.fragLoadIdx !== undefined) {
        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
      }
    }
    this.tick();
  };

  AudioStreamController.prototype.onAudioTrackLoaded = function onAudioTrackLoaded(data) {
    var newDetails = data.details,
        trackId = data.id,
        track = this.tracks[trackId],
        duration = newDetails.totalduration,
        sliding = 0;

    logger["b" /* logger */].log('track ' + trackId + ' loaded [' + newDetails.startSN + ',' + newDetails.endSN + '],duration:' + duration);

    if (newDetails.live) {
      var curDetails = track.details;
      if (curDetails && newDetails.fragments.length > 0) {
        // we already have details for that level, merge them
        mergeDetails(curDetails, newDetails);
        sliding = newDetails.fragments[0].start;
        // TODO
        //this.liveSyncPosition = this.computeLivePosition(sliding, curDetails);
        if (newDetails.PTSKnown) {
          logger["b" /* logger */].log('live audio playlist sliding:' + sliding.toFixed(3));
        } else {
          logger["b" /* logger */].log('live audio playlist - outdated PTS, unknown sliding');
        }
      } else {
        newDetails.PTSKnown = false;
        logger["b" /* logger */].log('live audio playlist - first load, unknown sliding');
      }
    } else {
      newDetails.PTSKnown = false;
    }
    track.details = newDetails;

    // compute start position
    if (!this.startFragRequested) {
      // compute start position if set to -1. use it straight away if value is defined
      if (this.startPosition === -1) {
        // first, check if start time offset has been set in playlist, if yes, use this value
        var startTimeOffset = newDetails.startTimeOffset;
        if (!isNaN(startTimeOffset)) {
          logger["b" /* logger */].log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
          this.startPosition = startTimeOffset;
        } else {
          this.startPosition = 0;
        }
      }
      this.nextLoadPosition = this.startPosition;
    }
    // only switch batck to IDLE state if we were waiting for track to start downloading a new fragment
    if (this.state === audio_stream_controller_State.WAITING_TRACK) {
      this.state = audio_stream_controller_State.IDLE;
    }
    //trigger handler right now
    this.tick();
  };

  AudioStreamController.prototype.onKeyLoaded = function onKeyLoaded() {
    if (this.state === audio_stream_controller_State.KEY_LOADING) {
      this.state = audio_stream_controller_State.IDLE;
      this.tick();
    }
  };

  AudioStreamController.prototype.onFragLoaded = function onFragLoaded(data) {
    var fragCurrent = this.fragCurrent,
        fragLoaded = data.frag;
    if (this.state === audio_stream_controller_State.FRAG_LOADING && fragCurrent && fragLoaded.type === 'audio' && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
      var track = this.tracks[this.trackId],
          details = track.details,
          duration = details.totalduration,
          trackId = fragCurrent.level,
          sn = fragCurrent.sn,
          cc = fragCurrent.cc,
          audioCodec = this.config.defaultAudioCodec || track.audioCodec || 'mp4a.40.2',
          stats = this.stats = data.stats;
      if (sn === 'initSegment') {
        this.state = audio_stream_controller_State.IDLE;

        stats.tparsed = stats.tbuffered = performance.now();
        details.initSegment.data = data.payload;
        this.hls.trigger(events["a" /* default */].FRAG_BUFFERED, { stats: stats, frag: fragCurrent, id: 'audio' });
        this.tick();
      } else {
        this.state = audio_stream_controller_State.PARSING;
        // transmux the MPEG-TS data to ISO-BMFF segments
        this.appended = false;
        if (!this.demuxer) {
          this.demuxer = new demux_demuxer(this.hls, 'audio');
        }
        //Check if we have video initPTS
        // If not we need to wait for it
        var initPTS = this.initPTS[cc];
        var initSegmentData = details.initSegment ? details.initSegment.data : [];
        if (details.initSegment || initPTS !== undefined) {
          this.pendingBuffering = true;
          logger["b" /* logger */].log('Demuxing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],track ' + trackId);
          // time Offset is accurate if level PTS is known, or if playlist is not sliding (not live)
          var accurateTimeOffset = false; //details.PTSKnown || !details.live;
          this.demuxer.push(data.payload, initSegmentData, audioCodec, null, fragCurrent, duration, accurateTimeOffset, initPTS);
        } else {
          logger["b" /* logger */].log('unknown video PTS for continuity counter ' + cc + ', waiting for video PTS before demuxing audio frag ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],track ' + trackId);
          this.waitingFragment = data;
          this.state = audio_stream_controller_State.WAITING_INIT_PTS;
        }
      }
    }
    this.fragLoadError = 0;
  };

  AudioStreamController.prototype.onFragParsingInitSegment = function onFragParsingInitSegment(data) {
    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
      var tracks = data.tracks,
          track = void 0;

      // delete any video track found on audio demuxer
      if (tracks.video) {
        delete tracks.video;
      }

      // include levelCodec in audio and video tracks
      track = tracks.audio;
      if (track) {
        track.levelCodec = track.codec;
        track.id = data.id;
        this.hls.trigger(events["a" /* default */].BUFFER_CODECS, tracks);
        logger["b" /* logger */].log('audio track:audio,container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
        var initSegment = track.initSegment;
        if (initSegment) {
          var appendObj = { type: 'audio', data: initSegment, parent: 'audio', content: 'initSegment' };
          if (this.audioSwitch) {
            this.pendingData = [appendObj];
          } else {
            this.appended = true;
            // arm pending Buffering flag before appending a segment
            this.pendingBuffering = true;
            this.hls.trigger(events["a" /* default */].BUFFER_APPENDING, appendObj);
          }
        }
        //trigger handler right now
        this.tick();
      }
    }
  };

  AudioStreamController.prototype.onFragParsingData = function onFragParsingData(data) {
    var _this2 = this;

    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'audio' && data.type === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
      var trackId = this.trackId,
          track = this.tracks[trackId],
          hls = this.hls;

      if (isNaN(data.endPTS)) {
        data.endPTS = data.startPTS + fragCurrent.duration;
        data.endDTS = data.startDTS + fragCurrent.duration;
      }

      logger["b" /* logger */].log('parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb);
      updateFragPTSDTS(track.details, fragCurrent, data.startPTS, data.endPTS);

      var audioSwitch = this.audioSwitch,
          media = this.media,
          appendOnBufferFlush = false;
      //Only flush audio from old audio tracks when PTS is known on new audio track
      if (audioSwitch && media) {
        if (media.readyState) {
          var currentTime = media.currentTime;
          logger["b" /* logger */].log('switching audio track : currentTime:' + currentTime);
          if (currentTime >= data.startPTS) {
            logger["b" /* logger */].log('switching audio track : flushing all audio');
            this.state = audio_stream_controller_State.BUFFER_FLUSHING;
            hls.trigger(events["a" /* default */].BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: 'audio' });
            appendOnBufferFlush = true;
            //Lets announce that the initial audio track switch flush occur
            this.audioSwitch = false;
            hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCHED, { id: trackId });
          }
        } else {
          //Lets announce that the initial audio track switch flush occur
          this.audioSwitch = false;
          hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCHED, { id: trackId });
        }
      }

      var pendingData = this.pendingData;
      if (!this.audioSwitch) {
        [data.data1, data.data2].forEach(function (buffer) {
          if (buffer && buffer.length) {
            pendingData.push({ type: data.type, data: buffer, parent: 'audio', content: 'data' });
          }
        });
        if (!appendOnBufferFlush && pendingData.length) {
          pendingData.forEach(function (appendObj) {
            // only append in PARSING state (rationale is that an appending error could happen synchronously on first segment appending)
            // in that case it is useless to append following segments
            if (_this2.state === audio_stream_controller_State.PARSING) {
              // arm pending Buffering flag before appending a segment
              _this2.pendingBuffering = true;
              _this2.hls.trigger(events["a" /* default */].BUFFER_APPENDING, appendObj);
            }
          });
          this.pendingData = [];
          this.appended = true;
        }
      }
      //trigger handler right now
      this.tick();
    }
  };

  AudioStreamController.prototype.onFragParsed = function onFragParsed(data) {
    var fragCurrent = this.fragCurrent;
    var fragNew = data.frag;
    if (fragCurrent && data.id === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
      this.stats.tparsed = performance.now();
      this.state = audio_stream_controller_State.PARSED;
      this._checkAppendedParsed();
    }
  };

  AudioStreamController.prototype.onBufferCreated = function onBufferCreated(data) {
    var audioTrack = data.tracks.audio;
    if (audioTrack) {
      this.mediaBuffer = audioTrack.buffer;
      this.loadedmetadata = true;
    }
  };

  AudioStreamController.prototype.onBufferAppended = function onBufferAppended(data) {
    if (data.parent === 'audio') {
      var state = this.state;
      if (state === audio_stream_controller_State.PARSING || state === audio_stream_controller_State.PARSED) {
        // check if all buffers have been appended
        this.pendingBuffering = data.pending > 0;
        this._checkAppendedParsed();
      }
    }
  };

  AudioStreamController.prototype._checkAppendedParsed = function _checkAppendedParsed() {
    //trigger handler right now
    if (this.state === audio_stream_controller_State.PARSED && (!this.appended || !this.pendingBuffering)) {
      var frag = this.fragCurrent,
          stats = this.stats,
          hls = this.hls;
      if (frag) {
        this.fragPrevious = frag;
        stats.tbuffered = performance.now();
        hls.trigger(events["a" /* default */].FRAG_BUFFERED, { stats: stats, frag: frag, id: 'audio' });
        var media = this.mediaBuffer ? this.mediaBuffer : this.media;
        logger["b" /* logger */].log('audio buffered : ' + timeRanges.toString(media.buffered));
        if (this.audioSwitch && this.appended) {
          this.audioSwitch = false;
          hls.trigger(events["a" /* default */].AUDIO_TRACK_SWITCHED, { id: this.trackId });
        }
        this.state = audio_stream_controller_State.IDLE;
      }
      this.tick();
    }
  };

  AudioStreamController.prototype.onError = function onError(data) {
    var frag = data.frag;
    // don't handle frag error not related to audio fragment
    if (frag && frag.type !== 'audio') {
      return;
    }
    switch (data.details) {
      case errors["a" /* ErrorDetails */].FRAG_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].FRAG_LOAD_TIMEOUT:
        if (!data.fatal) {
          var loadError = this.fragLoadError;
          if (loadError) {
            loadError++;
          } else {
            loadError = 1;
          }
          var config = this.config;
          if (loadError <= config.fragLoadingMaxRetry) {
            this.fragLoadError = loadError;
            // reset load counter to avoid frag loop loading error
            frag.loadCounter = 0;
            // exponential backoff capped to config.fragLoadingMaxRetryTimeout
            var delay = Math.min(Math.pow(2, loadError - 1) * config.fragLoadingRetryDelay, config.fragLoadingMaxRetryTimeout);
            logger["b" /* logger */].warn('audioStreamController: frag loading failed, retry in ' + delay + ' ms');
            this.retryDate = performance.now() + delay;
            // retry loading state
            this.state = audio_stream_controller_State.FRAG_LOADING_WAITING_RETRY;
          } else {
            logger["b" /* logger */].error('audioStreamController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
            // switch error to fatal
            data.fatal = true;
            this.state = audio_stream_controller_State.ERROR;
          }
        }
        break;
      case errors["a" /* ErrorDetails */].FRAG_LOOP_LOADING_ERROR:
      case errors["a" /* ErrorDetails */].AUDIO_TRACK_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].AUDIO_TRACK_LOAD_TIMEOUT:
      case errors["a" /* ErrorDetails */].KEY_LOAD_ERROR:
      case errors["a" /* ErrorDetails */].KEY_LOAD_TIMEOUT:
        //  when in ERROR state, don't switch back to IDLE state in case a non-fatal error is received
        if (this.state !== audio_stream_controller_State.ERROR) {
          // if fatal error, stop processing, otherwise move to IDLE to retry loading
          this.state = data.fatal ? audio_stream_controller_State.ERROR : audio_stream_controller_State.IDLE;
          logger["b" /* logger */].warn('audioStreamController: ' + data.details + ' while loading frag,switch to ' + this.state + ' state ...');
        }
        break;
      case errors["a" /* ErrorDetails */].BUFFER_FULL_ERROR:
        // if in appending state
        if (data.parent === 'audio' && (this.state === audio_stream_controller_State.PARSING || this.state === audio_stream_controller_State.PARSED)) {
          var media = this.mediaBuffer,
              currentTime = this.media.currentTime,
              mediaBuffered = media && buffer_helper.isBuffered(media, currentTime) && buffer_helper.isBuffered(media, currentTime + 0.5);
          // reduce max buf len if current position is buffered
          if (mediaBuffered) {
            var _config = this.config;
            if (_config.maxMaxBufferLength >= _config.maxBufferLength) {
              // reduce max buffer length as it might be too high. we do this to avoid loop flushing ...
              _config.maxMaxBufferLength /= 2;
              logger["b" /* logger */].warn('audio:reduce max buffer length to ' + _config.maxMaxBufferLength + 's');
              // increase fragment load Index to avoid frag loop loading error after buffer flush
              this.fragLoadIdx += 2 * _config.fragLoadingLoopThreshold;
            }
            this.state = audio_stream_controller_State.IDLE;
          } else {
            // current position is not buffered, but browser is still complaining about buffer full error
            // this happens on IE/Edge, refer to https://github.com/video-dev/hls.js/pull/708
            // in that case flush the whole audio buffer to recover
            logger["b" /* logger */].warn('buffer full error also media.currentTime is not buffered, flush audio buffer');
            this.fragCurrent = null;
            // flush everything
            this.state = audio_stream_controller_State.BUFFER_FLUSHING;
            this.hls.trigger(events["a" /* default */].BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: 'audio' });
          }
        }
        break;
      default:
        break;
    }
  };

  AudioStreamController.prototype.onBufferFlushed = function onBufferFlushed() {
    var _this3 = this;

    var pendingData = this.pendingData;
    if (pendingData && pendingData.length) {
      logger["b" /* logger */].log('appending pending audio data on Buffer Flushed');
      pendingData.forEach(function (appendObj) {
        _this3.hls.trigger(events["a" /* default */].BUFFER_APPENDING, appendObj);
      });
      this.appended = true;
      this.pendingData = [];
      this.state = audio_stream_controller_State.PARSED;
    } else {
      // move to IDLE once flush complete. this should trigger new fragment loading
      this.state = audio_stream_controller_State.IDLE;
      // reset reference to frag
      this.fragPrevious = null;
      this.tick();
    }
  };

  audio_stream_controller__createClass(AudioStreamController, [{
    key: 'state',
    set: function set(nextState) {
      if (this.state !== nextState) {
        var previousState = this.state;
        this._state = nextState;
        logger["b" /* logger */].log('audio stream:' + previousState + '->' + nextState);
      }
    },
    get: function get() {
      return this._state;
    }
  }]);

  return AudioStreamController;
}(event_handler);

/* harmony default export */ var audio_stream_controller = (audio_stream_controller_AudioStreamController);
// CONCATENATED MODULE: ./src/utils/vttcue.js
/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ var vttcue = ((function () {
  if (typeof window !== 'undefined' && window.VTTCue) {
    return window.VTTCue;
  }

  var autoKeyword = 'auto';
  var directionSetting = {
    '': true,
    lr: true,
    rl: true
  };
  var alignSetting = {
    start: true,
    middle: true,
    end: true,
    left: true,
    right: true
  };

  function findDirectionSetting(value) {
    if (typeof value !== 'string') {
      return false;
    }
    var dir = directionSetting[value.toLowerCase()];
    return dir ? value.toLowerCase() : false;
  }

  function findAlignSetting(value) {
    if (typeof value !== 'string') {
      return false;
    }
    var align = alignSetting[value.toLowerCase()];
    return align ? value.toLowerCase() : false;
  }

  function extend(obj) {
    var i = 1;
    for (; i < arguments.length; i++) {
      var cobj = arguments[i];
      for (var p in cobj) {
        obj[p] = cobj[p];
      }
    }

    return obj;
  }

  function VTTCue(startTime, endTime, text) {
    var cue = this;
    var isIE8 = function () {
      if (typeof navigator === 'undefined') {
        return;
      }
      return (/MSIE\s8\.0/.test(navigator.userAgent)
      );
    }();
    var baseObj = {};

    if (isIE8) {
      cue = document.createElement('custom');
    } else {
      baseObj.enumerable = true;
    }

    /**
     * Shim implementation specific properties. These properties are not in
     * the spec.
     */

    // Lets us know when the VTTCue's data has changed in such a way that we need
    // to recompute its display state. This lets us compute its display state
    // lazily.
    cue.hasBeenReset = false;

    /**
     * VTTCue and TextTrackCue properties
     * http://dev.w3.org/html5/webvtt/#vttcue-interface
     */

    var _id = '';
    var _pauseOnExit = false;
    var _startTime = startTime;
    var _endTime = endTime;
    var _text = text;
    var _region = null;
    var _vertical = '';
    var _snapToLines = true;
    var _line = 'auto';
    var _lineAlign = 'start';
    var _position = 50;
    var _positionAlign = 'middle';
    var _size = 50;
    var _align = 'middle';

    Object.defineProperty(cue, 'id', extend({}, baseObj, {
      get: function get() {
        return _id;
      },
      set: function set(value) {
        _id = '' + value;
      }
    }));

    Object.defineProperty(cue, 'pauseOnExit', extend({}, baseObj, {
      get: function get() {
        return _pauseOnExit;
      },
      set: function set(value) {
        _pauseOnExit = !!value;
      }
    }));

    Object.defineProperty(cue, 'startTime', extend({}, baseObj, {
      get: function get() {
        return _startTime;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          throw new TypeError('Start time must be set to a number.');
        }
        _startTime = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'endTime', extend({}, baseObj, {
      get: function get() {
        return _endTime;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          throw new TypeError('End time must be set to a number.');
        }
        _endTime = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'text', extend({}, baseObj, {
      get: function get() {
        return _text;
      },
      set: function set(value) {
        _text = '' + value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'region', extend({}, baseObj, {
      get: function get() {
        return _region;
      },
      set: function set(value) {
        _region = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'vertical', extend({}, baseObj, {
      get: function get() {
        return _vertical;
      },
      set: function set(value) {
        var setting = findDirectionSetting(value);
        // Have to check for false because the setting an be an empty string.
        if (setting === false) {
          throw new SyntaxError('An invalid or illegal string was specified.');
        }
        _vertical = setting;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'snapToLines', extend({}, baseObj, {
      get: function get() {
        return _snapToLines;
      },
      set: function set(value) {
        _snapToLines = !!value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'line', extend({}, baseObj, {
      get: function get() {
        return _line;
      },
      set: function set(value) {
        if (typeof value !== 'number' && value !== autoKeyword) {
          throw new SyntaxError('An invalid number or illegal string was specified.');
        }
        _line = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'lineAlign', extend({}, baseObj, {
      get: function get() {
        return _lineAlign;
      },
      set: function set(value) {
        var setting = findAlignSetting(value);
        if (!setting) {
          throw new SyntaxError('An invalid or illegal string was specified.');
        }
        _lineAlign = setting;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'position', extend({}, baseObj, {
      get: function get() {
        return _position;
      },
      set: function set(value) {
        if (value < 0 || value > 100) {
          throw new Error('Position must be between 0 and 100.');
        }
        _position = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'positionAlign', extend({}, baseObj, {
      get: function get() {
        return _positionAlign;
      },
      set: function set(value) {
        var setting = findAlignSetting(value);
        if (!setting) {
          throw new SyntaxError('An invalid or illegal string was specified.');
        }
        _positionAlign = setting;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'size', extend({}, baseObj, {
      get: function get() {
        return _size;
      },
      set: function set(value) {
        if (value < 0 || value > 100) {
          throw new Error('Size must be between 0 and 100.');
        }
        _size = value;
        this.hasBeenReset = true;
      }
    }));

    Object.defineProperty(cue, 'align', extend({}, baseObj, {
      get: function get() {
        return _align;
      },
      set: function set(value) {
        var setting = findAlignSetting(value);
        if (!setting) {
          throw new SyntaxError('An invalid or illegal string was specified.');
        }
        _align = setting;
        this.hasBeenReset = true;
      }
    }));

    /**
     * Other <track> spec defined properties
     */

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
    cue.displayState = undefined;

    if (isIE8) {
      return cue;
    }
  }

  /**
   * VTTCue methods
   */

  VTTCue.prototype.getCueAsHTML = function () {
    // Assume WebVTT.convertCueToDOMTree is on the global.
    var WebVTT = window.WebVTT;
    return WebVTT.convertCueToDOMTree(window, this.text);
  };

  return VTTCue;
})());
// CONCATENATED MODULE: ./src/utils/vttparser.js
/*
 * Source: https://github.com/mozilla/vtt.js/blob/master/dist/vtt.js#L1716
 */



var StringDecoder = function StringDecoder() {
  return {
    decode: function decode(data) {
      if (!data) {
        return '';
      }
      if (typeof data !== 'string') {
        throw new Error('Error - expected string data.');
      }
      return decodeURIComponent(encodeURIComponent(data));
    }
  };
};

function VTTParser() {
  this.window = window;
  this.state = 'INITIAL';
  this.buffer = '';
  this.decoder = new StringDecoder();
  this.regionList = [];
}

// Try to parse input as a time stamp.
function parseTimeStamp(input) {

  function computeSeconds(h, m, s, f) {
    return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
  }

  var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
  if (!m) {
    return null;
  }

  if (m[3]) {
    // Timestamp takes the form of [hours]:[minutes]:[seconds].[milliseconds]
    return computeSeconds(m[1], m[2], m[3].replace(':', ''), m[4]);
  } else if (m[1] > 59) {
    // Timestamp takes the form of [hours]:[minutes].[milliseconds]
    // First position is hours as it's over 59.
    return computeSeconds(m[1], m[2], 0, m[4]);
  } else {
    // Timestamp takes the form of [minutes]:[seconds].[milliseconds]
    return computeSeconds(0, m[1], m[2], m[4]);
  }
}

// A settings object holds key/value pairs and will ignore anything but the first
// assignment to a specific key.
function Settings() {
  this.values = Object.create(null);
}

Settings.prototype = {
  // Only accept the first assignment to any key.
  set: function set(k, v) {
    if (!this.get(k) && v !== '') {
      this.values[k] = v;
    }
  },
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get: function get(k, dflt, defaultKey) {
    if (defaultKey) {
      return this.has(k) ? this.values[k] : dflt[defaultKey];
    }
    return this.has(k) ? this.values[k] : dflt;
  },
  // Check whether we have a value for a key.
  has: function has(k) {
    return k in this.values;
  },
  // Accept a setting if its one of the given alternatives.
  alt: function alt(k, v, a) {
    for (var n = 0; n < a.length; ++n) {
      if (v === a[n]) {
        this.set(k, v);
        break;
      }
    }
  },
  // Accept a setting if its a valid (signed) integer.
  integer: function integer(k, v) {
    if (/^-?\d+$/.test(v)) {
      // integer
      this.set(k, parseInt(v, 10));
    }
  },
  // Accept a setting if its a valid percentage.
  percent: function percent(k, v) {
    var m;
    if (m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
      v = parseFloat(v);
      if (v >= 0 && v <= 100) {
        this.set(k, v);
        return true;
      }
    }
    return false;
  }
};

// Helper function to parse input into groups separated by 'groupDelim', and
// interprete each group as a key/value pair separated by 'keyValueDelim'.
function parseOptions(input, callback, keyValueDelim, groupDelim) {
  var groups = groupDelim ? input.split(groupDelim) : [input];
  for (var i in groups) {
    if (typeof groups[i] !== 'string') {
      continue;
    }
    var kv = groups[i].split(keyValueDelim);
    if (kv.length !== 2) {
      continue;
    }
    var k = kv[0];
    var v = kv[1];
    callback(k, v);
  }
}

var defaults = new vttcue(0, 0, 0);
// 'middle' was changed to 'center' in the spec: https://github.com/w3c/webvtt/pull/244
// Chrome and Safari don't yet support this change, but FF does
var center = defaults.align === 'middle' ? 'middle' : 'center';

function parseCue(input, cue, regionList) {
  // Remember the original input if we need to throw an error.
  var oInput = input;
  // 4.1 WebVTT timestamp
  function consumeTimeStamp() {
    var ts = parseTimeStamp(input);
    if (ts === null) {
      throw new Error('Malformed timestamp: ' + oInput);
    }
    // Remove time stamp from input.
    input = input.replace(/^[^\sa-zA-Z-]+/, '');
    return ts;
  }

  // 4.4.2 WebVTT cue settings
  function consumeCueSettings(input, cue) {
    var settings = new Settings();

    parseOptions(input, function (k, v) {
      switch (k) {
        case 'region':
          // Find the last region we parsed with the same region id.
          for (var i = regionList.length - 1; i >= 0; i--) {
            if (regionList[i].id === v) {
              settings.set(k, regionList[i].region);
              break;
            }
          }
          break;
        case 'vertical':
          settings.alt(k, v, ['rl', 'lr']);
          break;
        case 'line':
          var vals = v.split(','),
              vals0 = vals[0];
          settings.integer(k, vals0);
          if (settings.percent(k, vals0)) {
            settings.set('snapToLines', false);
          }
          settings.alt(k, vals0, ['auto']);
          if (vals.length === 2) {
            settings.alt('lineAlign', vals[1], ['start', center, 'end']);
          }
          break;
        case 'position':
          vals = v.split(',');
          settings.percent(k, vals[0]);
          if (vals.length === 2) {
            settings.alt('positionAlign', vals[1], ['start', center, 'end', 'line-left', 'line-right', 'auto']);
          }
          break;
        case 'size':
          settings.percent(k, v);
          break;
        case 'align':
          settings.alt(k, v, ['start', center, 'end', 'left', 'right']);
          break;
      }
    }, /:/, /\s/);

    // Apply default values for any missing fields.
    cue.region = settings.get('region', null);
    cue.vertical = settings.get('vertical', '');
    var line = settings.get('line', 'auto');
    if (line === 'auto' && defaults.line === -1) {
      // set numeric line number for Safari
      line = -1;
    }
    cue.line = line;
    cue.lineAlign = settings.get('lineAlign', 'start');
    cue.snapToLines = settings.get('snapToLines', true);
    cue.size = settings.get('size', 100);
    cue.align = settings.get('align', center);
    var position = settings.get('position', 'auto');
    if (position === 'auto' && defaults.position === 50) {
      // set numeric position for Safari
      position = cue.align === 'start' || cue.align === 'left' ? 0 : cue.align === 'end' || cue.align === 'right' ? 100 : 50;
    }
    cue.position = position;
  }

  function skipWhitespace() {
    input = input.replace(/^\s+/, '');
  }

  // 4.1 WebVTT cue timings.
  skipWhitespace();
  cue.startTime = consumeTimeStamp(); // (1) collect cue start time
  skipWhitespace();
  if (input.substr(0, 3) !== '-->') {
    // (3) next characters must match '-->'
    throw new Error('Malformed time stamp (time stamps must be separated by \'-->\'): ' + oInput);
  }
  input = input.substr(3);
  skipWhitespace();
  cue.endTime = consumeTimeStamp(); // (5) collect cue end time

  // 4.1 WebVTT cue settings list.
  skipWhitespace();
  consumeCueSettings(input, cue);
}

function fixLineBreaks(input) {
  return input.replace(/<br(?: \/)?>/gi, '\n');
}

VTTParser.prototype = {
  parse: function parse(data) {
    var self = this;

    // If there is no data then we won't decode it, but will just try to parse
    // whatever is in buffer already. This may occur in circumstances, for
    // example when flush() is called.
    if (data) {
      // Try to decode the data that we received.
      self.buffer += self.decoder.decode(data, { stream: true });
    }

    function collectNextLine() {
      var buffer = self.buffer;
      var pos = 0;

      buffer = fixLineBreaks(buffer);

      while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
        ++pos;
      }
      var line = buffer.substr(0, pos);
      // Advance the buffer early in case we fail below.
      if (buffer[pos] === '\r') {
        ++pos;
      }
      if (buffer[pos] === '\n') {
        ++pos;
      }
      self.buffer = buffer.substr(pos);
      return line;
    }

    // 3.2 WebVTT metadata header syntax
    function parseHeader(input) {
      parseOptions(input, function (k, v) {
        switch (k) {
          case 'Region':
            // 3.3 WebVTT region metadata header syntax
            console.log('parse region', v);
            //parseRegion(v);
            break;
        }
      }, /:/);
    }

    // 5.1 WebVTT file parsing.
    try {
      var line;
      if (self.state === 'INITIAL') {
        // We can't start parsing until we have the first line.
        if (!/\r\n|\n/.test(self.buffer)) {
          return this;
        }

        line = collectNextLine();
        // strip of UTF-8 BOM if any
        // https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8
        var m = line.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!m || !m[0]) {
          throw new Error('Malformed WebVTT signature.');
        }

        self.state = 'HEADER';
      }

      var alreadyCollectedLine = false;
      while (self.buffer) {
        // We can't parse a line until we have the full line.
        if (!/\r\n|\n/.test(self.buffer)) {
          return this;
        }

        if (!alreadyCollectedLine) {
          line = collectNextLine();
        } else {
          alreadyCollectedLine = false;
        }

        switch (self.state) {
          case 'HEADER':
            // 13-18 - Allow a header (metadata) under the WEBVTT line.
            if (/:/.test(line)) {
              parseHeader(line);
            } else if (!line) {
              // An empty line terminates the header and starts the body (cues).
              self.state = 'ID';
            }
            continue;
          case 'NOTE':
            // Ignore NOTE blocks.
            if (!line) {
              self.state = 'ID';
            }
            continue;
          case 'ID':
            // Check for the start of NOTE blocks.
            if (/^NOTE($|[ \t])/.test(line)) {
              self.state = 'NOTE';
              break;
            }
            // 19-29 - Allow any number of line terminators, then initialize new cue values.
            if (!line) {
              continue;
            }
            self.cue = new vttcue(0, 0, '');
            self.state = 'CUE';
            // 30-39 - Check if self line contains an optional identifier or timing data.
            if (line.indexOf('-->') === -1) {
              self.cue.id = line;
              continue;
            }
          // Process line as start of a cue.
          /*falls through*/
          case 'CUE':
            // 40 - Collect cue timings and settings.
            try {
              parseCue(line, self.cue, self.regionList);
            } catch (e) {
              // In case of an error ignore rest of the cue.
              self.cue = null;
              self.state = 'BADCUE';
              continue;
            }
            self.state = 'CUETEXT';
            continue;
          case 'CUETEXT':
            var hasSubstring = line.indexOf('-->') !== -1;
            // 34 - If we have an empty line then report the cue.
            // 35 - If we have the special substring '-->' then report the cue,
            // but do not collect the line as we need to process the current
            // one as a new cue.
            if (!line || hasSubstring && (alreadyCollectedLine = true)) {
              // We are done parsing self cue.
              if (self.oncue) {
                self.oncue(self.cue);
              }
              self.cue = null;
              self.state = 'ID';
              continue;
            }
            if (self.cue.text) {
              self.cue.text += '\n';
            }
            self.cue.text += line;
            continue;
          case 'BADCUE':
            // BADCUE
            // 54-62 - Collect and discard the remaining cue.
            if (!line) {
              self.state = 'ID';
            }
            continue;
        }
      }
    } catch (e) {

      // If we are currently parsing a cue, report what we have.
      if (self.state === 'CUETEXT' && self.cue && self.oncue) {
        self.oncue(self.cue);
      }
      self.cue = null;
      // Enter BADWEBVTT state if header was not parsed correctly otherwise
      // another exception occurred so enter BADCUE state.
      self.state = self.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE';
    }
    return this;
  },
  flush: function flush() {
    var self = this;
    try {
      // Finish decoding the stream.
      self.buffer += self.decoder.decode();
      // Synthesize the end of the current cue or region.
      if (self.cue || self.state === 'HEADER') {
        self.buffer += '\n\n';
        self.parse();
      }
      // If we've flushed, parsed, and we're still on the INITIAL state then
      // that means we don't have enough of the stream to parse the first
      // line.
      if (self.state === 'INITIAL') {
        throw new Error('Malformed WebVTT signature.');
      }
    } catch (e) {
      throw e;
    }
    if (self.onflush) {
      self.onflush();
    }
    return this;
  }
};



/* harmony default export */ var vttparser = (VTTParser);
// CONCATENATED MODULE: ./src/utils/cues.js


function newCue(track, startTime, endTime, captionScreen) {
  var row;
  var cue;
  var indenting;
  var indent;
  var text;
  var VTTCue = window.VTTCue || window.TextTrackCue;

  for (var r = 0; r < captionScreen.rows.length; r++) {
    row = captionScreen.rows[r];
    indenting = true;
    indent = 0;
    text = '';

    if (!row.isEmpty()) {
      for (var c = 0; c < row.chars.length; c++) {
        if (row.chars[c].uchar.match(/\s/) && indenting) {
          indent++;
        } else {
          text += row.chars[c].uchar;
          indenting = false;
        }
      }
      //To be used for cleaning-up orphaned roll-up captions
      row.cueStartTime = startTime;

      // Give a slight bump to the endTime if it's equal to startTime to avoid a SyntaxError in IE
      if (startTime === endTime) {
        endTime += 0.0001;
      }

      cue = new VTTCue(startTime, endTime, fixLineBreaks(text.trim()));

      if (indent >= 16) {
        indent--;
      } else {
        indent++;
      }

      // VTTCue.line get's flakey when using controls, so let's now include line 13&14
      // also, drop line 1 since it's to close to the top
      if (navigator.userAgent.match(/Firefox\//)) {
        cue.line = r + 1;
      } else {
        cue.line = r > 7 ? r - 2 : r + 1;
      }
      cue.align = 'left';
      // Clamp the position between 0 and 100 - if out of these bounds, Firefox throws an exception and captions break
      cue.position = Math.max(0, Math.min(100, 100 * (indent / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0)));
      track.addCue(cue);
    }
  }
}
// CONCATENATED MODULE: ./src/utils/cea-608-parser.js
function cea_608_parser__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * This code was ported from the dash.js project at:
 *   https://github.com/Dash-Industry-Forum/dash.js/blob/development/externals/cea608-parser.js
 *   https://github.com/Dash-Industry-Forum/dash.js/commit/8269b26a761e0853bb21d78780ed945144ecdd4d#diff-71bc295a2d6b6b7093a1d3290d53a4b2
 *
 * The original copyright appears below:
 *
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2015-2016, DASH Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  1. Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  2. Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 *  Exceptions from regular ASCII. CodePoints are mapped to UTF-16 codes
 */

var specialCea608CharsCodes = {
    0x2a: 0xe1, // lowercase a, acute accent
    0x5c: 0xe9, // lowercase e, acute accent
    0x5e: 0xed, // lowercase i, acute accent
    0x5f: 0xf3, // lowercase o, acute accent
    0x60: 0xfa, // lowercase u, acute accent
    0x7b: 0xe7, // lowercase c with cedilla
    0x7c: 0xf7, // division symbol
    0x7d: 0xd1, // uppercase N tilde
    0x7e: 0xf1, // lowercase n tilde
    0x7f: 0x2588, // Full block
    // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
    // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
    // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
    0x80: 0xae, // Registered symbol (R)
    0x81: 0xb0, // degree sign
    0x82: 0xbd, // 1/2 symbol
    0x83: 0xbf, // Inverted (open) question mark
    0x84: 0x2122, // Trademark symbol (TM)
    0x85: 0xa2, // Cents symbol
    0x86: 0xa3, // Pounds sterling
    0x87: 0x266a, // Music 8'th note
    0x88: 0xe0, // lowercase a, grave accent
    0x89: 0x20, // transparent space (regular)
    0x8a: 0xe8, // lowercase e, grave accent
    0x8b: 0xe2, // lowercase a, circumflex accent
    0x8c: 0xea, // lowercase e, circumflex accent
    0x8d: 0xee, // lowercase i, circumflex accent
    0x8e: 0xf4, // lowercase o, circumflex accent
    0x8f: 0xfb, // lowercase u, circumflex accent
    // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
    // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
    0x90: 0xc1, // capital letter A with acute
    0x91: 0xc9, // capital letter E with acute
    0x92: 0xd3, // capital letter O with acute
    0x93: 0xda, // capital letter U with acute
    0x94: 0xdc, // capital letter U with diaresis
    0x95: 0xfc, // lowercase letter U with diaeresis
    0x96: 0x2018, // opening single quote
    0x97: 0xa1, // inverted exclamation mark
    0x98: 0x2a, // asterisk
    0x99: 0x2019, // closing single quote
    0x9a: 0x2501, // box drawings heavy horizontal
    0x9b: 0xa9, // copyright sign
    0x9c: 0x2120, // Service mark
    0x9d: 0x2022, // (round) bullet
    0x9e: 0x201c, // Left double quotation mark
    0x9f: 0x201d, // Right double quotation mark
    0xa0: 0xc0, // uppercase A, grave accent
    0xa1: 0xc2, // uppercase A, circumflex
    0xa2: 0xc7, // uppercase C with cedilla
    0xa3: 0xc8, // uppercase E, grave accent
    0xa4: 0xca, // uppercase E, circumflex
    0xa5: 0xcb, // capital letter E with diaresis
    0xa6: 0xeb, // lowercase letter e with diaresis
    0xa7: 0xce, // uppercase I, circumflex
    0xa8: 0xcf, // uppercase I, with diaresis
    0xa9: 0xef, // lowercase i, with diaresis
    0xaa: 0xd4, // uppercase O, circumflex
    0xab: 0xd9, // uppercase U, grave accent
    0xac: 0xf9, // lowercase u, grave accent
    0xad: 0xdb, // uppercase U, circumflex
    0xae: 0xab, // left-pointing double angle quotation mark
    0xaf: 0xbb, // right-pointing double angle quotation mark
    // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
    // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
    0xb0: 0xc3, // Uppercase A, tilde
    0xb1: 0xe3, // Lowercase a, tilde
    0xb2: 0xcd, // Uppercase I, acute accent
    0xb3: 0xcc, // Uppercase I, grave accent
    0xb4: 0xec, // Lowercase i, grave accent
    0xb5: 0xd2, // Uppercase O, grave accent
    0xb6: 0xf2, // Lowercase o, grave accent
    0xb7: 0xd5, // Uppercase O, tilde
    0xb8: 0xf5, // Lowercase o, tilde
    0xb9: 0x7b, // Open curly brace
    0xba: 0x7d, // Closing curly brace
    0xbb: 0x5c, // Backslash
    0xbc: 0x5e, // Caret
    0xbd: 0x5f, // Underscore
    0xbe: 0x7c, // Pipe (vertical line)
    0xbf: 0x223c, // Tilde operator
    0xc0: 0xc4, // Uppercase A, umlaut
    0xc1: 0xe4, // Lowercase A, umlaut
    0xc2: 0xd6, // Uppercase O, umlaut
    0xc3: 0xf6, // Lowercase o, umlaut
    0xc4: 0xdf, // Esszett (sharp S)
    0xc5: 0xa5, // Yen symbol
    0xc6: 0xa4, // Generic currency sign
    0xc7: 0x2503, // Box drawings heavy vertical
    0xc8: 0xc5, // Uppercase A, ring
    0xc9: 0xe5, // Lowercase A, ring
    0xca: 0xd8, // Uppercase O, stroke
    0xcb: 0xf8, // Lowercase o, strok
    0xcc: 0x250f, // Box drawings heavy down and right
    0xcd: 0x2513, // Box drawings heavy down and left
    0xce: 0x2517, // Box drawings heavy up and right
    0xcf: 0x251b // Box drawings heavy up and left
};

/**
 * Utils
 */
var getCharForByte = function getCharForByte(byte) {
    var charCode = byte;
    if (specialCea608CharsCodes.hasOwnProperty(byte)) {
        charCode = specialCea608CharsCodes[byte];
    }
    return String.fromCharCode(charCode);
};

var NR_ROWS = 15,
    NR_COLS = 100;
// Tables to look up row from PAC data
var rowsLowCh1 = { 0x11: 1, 0x12: 3, 0x15: 5, 0x16: 7, 0x17: 9, 0x10: 11, 0x13: 12, 0x14: 14 };
var rowsHighCh1 = { 0x11: 2, 0x12: 4, 0x15: 6, 0x16: 8, 0x17: 10, 0x13: 13, 0x14: 15 };
var rowsLowCh2 = { 0x19: 1, 0x1A: 3, 0x1D: 5, 0x1E: 7, 0x1F: 9, 0x18: 11, 0x1B: 12, 0x1C: 14 };
var rowsHighCh2 = { 0x19: 2, 0x1A: 4, 0x1D: 6, 0x1E: 8, 0x1F: 10, 0x1B: 13, 0x1C: 15 };

var backgroundColors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'];

/**
 * Simple logger class to be able to write with time-stamps and filter on level.
 */
var cea_608_parser_logger = {
    verboseFilter: { 'DATA': 3, 'DEBUG': 3, 'INFO': 2, 'WARNING': 2, 'TEXT': 1, 'ERROR': 0 },
    time: null,
    verboseLevel: 0, // Only write errors
    setTime: function setTime(newTime) {
        this.time = newTime;
    },
    log: function log(severity, msg) {
        var minLevel = this.verboseFilter[severity];
        if (this.verboseLevel >= minLevel) {
            console.log(this.time + ' [' + severity + '] ' + msg);
        }
    }
};

var numArrayToHexArray = function numArrayToHexArray(numArray) {
    var hexArray = [];
    for (var j = 0; j < numArray.length; j++) {
        hexArray.push(numArray[j].toString(16));
    }
    return hexArray;
};

var PenState = function () {
    function PenState(foreground, underline, italics, background, flash) {
        cea_608_parser__classCallCheck(this, PenState);

        this.foreground = foreground || 'white';
        this.underline = underline || false;
        this.italics = italics || false;
        this.background = background || 'black';
        this.flash = flash || false;
    }

    PenState.prototype.reset = function reset() {
        this.foreground = 'white';
        this.underline = false;
        this.italics = false;
        this.background = 'black';
        this.flash = false;
    };

    PenState.prototype.setStyles = function setStyles(styles) {
        var attribs = ['foreground', 'underline', 'italics', 'background', 'flash'];
        for (var i = 0; i < attribs.length; i++) {
            var style = attribs[i];
            if (styles.hasOwnProperty(style)) {
                this[style] = styles[style];
            }
        }
    };

    PenState.prototype.isDefault = function isDefault() {
        return this.foreground === 'white' && !this.underline && !this.italics && this.background === 'black' && !this.flash;
    };

    PenState.prototype.equals = function equals(other) {
        return this.foreground === other.foreground && this.underline === other.underline && this.italics === other.italics && this.background === other.background && this.flash === other.flash;
    };

    PenState.prototype.copy = function copy(newPenState) {
        this.foreground = newPenState.foreground;
        this.underline = newPenState.underline;
        this.italics = newPenState.italics;
        this.background = newPenState.background;
        this.flash = newPenState.flash;
    };

    PenState.prototype.toString = function toString() {
        return 'color=' + this.foreground + ', underline=' + this.underline + ', italics=' + this.italics + ', background=' + this.background + ', flash=' + this.flash;
    };

    return PenState;
}();

/**
 * Unicode character with styling and background.
 * @constructor
 */


var StyledUnicodeChar = function () {
    function StyledUnicodeChar(uchar, foreground, underline, italics, background, flash) {
        cea_608_parser__classCallCheck(this, StyledUnicodeChar);

        this.uchar = uchar || ' '; // unicode character
        this.penState = new PenState(foreground, underline, italics, background, flash);
    }

    StyledUnicodeChar.prototype.reset = function reset() {
        this.uchar = ' ';
        this.penState.reset();
    };

    StyledUnicodeChar.prototype.setChar = function setChar(uchar, newPenState) {
        this.uchar = uchar;
        this.penState.copy(newPenState);
    };

    StyledUnicodeChar.prototype.setPenState = function setPenState(newPenState) {
        this.penState.copy(newPenState);
    };

    StyledUnicodeChar.prototype.equals = function equals(other) {
        return this.uchar === other.uchar && this.penState.equals(other.penState);
    };

    StyledUnicodeChar.prototype.copy = function copy(newChar) {
        this.uchar = newChar.uchar;
        this.penState.copy(newChar.penState);
    };

    StyledUnicodeChar.prototype.isEmpty = function isEmpty() {
        return this.uchar === ' ' && this.penState.isDefault();
    };

    return StyledUnicodeChar;
}();

/**
 * CEA-608 row consisting of NR_COLS instances of StyledUnicodeChar.
 * @constructor
 */


var Row = function () {
    function Row() {
        cea_608_parser__classCallCheck(this, Row);

        this.chars = [];
        for (var i = 0; i < NR_COLS; i++) {
            this.chars.push(new StyledUnicodeChar());
        }
        this.pos = 0;
        this.currPenState = new PenState();
    }

    Row.prototype.equals = function equals(other) {
        var equal = true;
        for (var i = 0; i < NR_COLS; i++) {
            if (!this.chars[i].equals(other.chars[i])) {
                equal = false;
                break;
            }
        }
        return equal;
    };

    Row.prototype.copy = function copy(other) {
        for (var i = 0; i < NR_COLS; i++) {
            this.chars[i].copy(other.chars[i]);
        }
    };

    Row.prototype.isEmpty = function isEmpty() {
        var empty = true;
        for (var i = 0; i < NR_COLS; i++) {
            if (!this.chars[i].isEmpty()) {
                empty = false;
                break;
            }
        }
        return empty;
    };

    /**
     *  Set the cursor to a valid column.
     */


    Row.prototype.setCursor = function setCursor(absPos) {
        if (this.pos !== absPos) {
            this.pos = absPos;
        }
        if (this.pos < 0) {
            cea_608_parser_logger.log('ERROR', 'Negative cursor position ' + this.pos);
            this.pos = 0;
        } else if (this.pos > NR_COLS) {
            cea_608_parser_logger.log('ERROR', 'Too large cursor position ' + this.pos);
            this.pos = NR_COLS;
        }
    };

    /**
     * Move the cursor relative to current position.
     */


    Row.prototype.moveCursor = function moveCursor(relPos) {
        var newPos = this.pos + relPos;
        if (relPos > 1) {
            for (var i = this.pos + 1; i < newPos + 1; i++) {
                this.chars[i].setPenState(this.currPenState);
            }
        }
        this.setCursor(newPos);
    };

    /**
     * Backspace, move one step back and clear character.
     */


    Row.prototype.backSpace = function backSpace() {
        this.moveCursor(-1);
        this.chars[this.pos].setChar(' ', this.currPenState);
    };

    Row.prototype.insertChar = function insertChar(byte) {
        if (byte >= 0x90) {
            //Extended char
            this.backSpace();
        }
        var char = getCharForByte(byte);
        if (this.pos >= NR_COLS) {
            cea_608_parser_logger.log('ERROR', 'Cannot insert ' + byte.toString(16) + ' (' + char + ') at position ' + this.pos + '. Skipping it!');
            return;
        }
        this.chars[this.pos].setChar(char, this.currPenState);
        this.moveCursor(1);
    };

    Row.prototype.clearFromPos = function clearFromPos(startPos) {
        var i;
        for (i = startPos; i < NR_COLS; i++) {
            this.chars[i].reset();
        }
    };

    Row.prototype.clear = function clear() {
        this.clearFromPos(0);
        this.pos = 0;
        this.currPenState.reset();
    };

    Row.prototype.clearToEndOfRow = function clearToEndOfRow() {
        this.clearFromPos(this.pos);
    };

    Row.prototype.getTextString = function getTextString() {
        var chars = [];
        var empty = true;
        for (var i = 0; i < NR_COLS; i++) {
            var char = this.chars[i].uchar;
            if (char !== ' ') {
                empty = false;
            }
            chars.push(char);
        }
        if (empty) {
            return '';
        } else {
            return chars.join('');
        }
    };

    Row.prototype.setPenStyles = function setPenStyles(styles) {
        this.currPenState.setStyles(styles);
        var currChar = this.chars[this.pos];
        currChar.setPenState(this.currPenState);
    };

    return Row;
}();

/**
 * Keep a CEA-608 screen of 32x15 styled characters
 * @constructor
*/


var CaptionScreen = function () {
    function CaptionScreen() {
        cea_608_parser__classCallCheck(this, CaptionScreen);

        this.rows = [];
        for (var i = 0; i < NR_ROWS; i++) {
            this.rows.push(new Row()); // Note that we use zero-based numbering (0-14)
        }
        this.currRow = NR_ROWS - 1;
        this.nrRollUpRows = null;
        this.reset();
    }

    CaptionScreen.prototype.reset = function reset() {
        for (var i = 0; i < NR_ROWS; i++) {
            this.rows[i].clear();
        }
        this.currRow = NR_ROWS - 1;
    };

    CaptionScreen.prototype.equals = function equals(other) {
        var equal = true;
        for (var i = 0; i < NR_ROWS; i++) {
            if (!this.rows[i].equals(other.rows[i])) {
                equal = false;
                break;
            }
        }
        return equal;
    };

    CaptionScreen.prototype.copy = function copy(other) {
        for (var i = 0; i < NR_ROWS; i++) {
            this.rows[i].copy(other.rows[i]);
        }
    };

    CaptionScreen.prototype.isEmpty = function isEmpty() {
        var empty = true;
        for (var i = 0; i < NR_ROWS; i++) {
            if (!this.rows[i].isEmpty()) {
                empty = false;
                break;
            }
        }
        return empty;
    };

    CaptionScreen.prototype.backSpace = function backSpace() {
        var row = this.rows[this.currRow];
        row.backSpace();
    };

    CaptionScreen.prototype.clearToEndOfRow = function clearToEndOfRow() {
        var row = this.rows[this.currRow];
        row.clearToEndOfRow();
    };

    /**
     * Insert a character (without styling) in the current row.
     */


    CaptionScreen.prototype.insertChar = function insertChar(char) {
        var row = this.rows[this.currRow];
        row.insertChar(char);
    };

    CaptionScreen.prototype.setPen = function setPen(styles) {
        var row = this.rows[this.currRow];
        row.setPenStyles(styles);
    };

    CaptionScreen.prototype.moveCursor = function moveCursor(relPos) {
        var row = this.rows[this.currRow];
        row.moveCursor(relPos);
    };

    CaptionScreen.prototype.setCursor = function setCursor(absPos) {
        cea_608_parser_logger.log('INFO', 'setCursor: ' + absPos);
        var row = this.rows[this.currRow];
        row.setCursor(absPos);
    };

    CaptionScreen.prototype.setPAC = function setPAC(pacData) {
        cea_608_parser_logger.log('INFO', 'pacData = ' + JSON.stringify(pacData));
        var newRow = pacData.row - 1;
        if (this.nrRollUpRows && newRow < this.nrRollUpRows - 1) {
            newRow = this.nrRollUpRows - 1;
        }

        //Make sure this only affects Roll-up Captions by checking this.nrRollUpRows
        if (this.nrRollUpRows && this.currRow !== newRow) {
            //clear all rows first
            for (var i = 0; i < NR_ROWS; i++) {
                this.rows[i].clear();
            }

            //Copy this.nrRollUpRows rows from lastOutputScreen and place it in the newRow location
            //topRowIndex - the start of rows to copy (inclusive index)
            var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
            //We only copy if the last position was already shown.
            //We use the cueStartTime value to check this.
            var lastOutputScreen = this.lastOutputScreen;
            if (lastOutputScreen) {
                var prevLineTime = lastOutputScreen.rows[topRowIndex].cueStartTime;
                if (prevLineTime && prevLineTime < cea_608_parser_logger.time) {
                    for (var _i = 0; _i < this.nrRollUpRows; _i++) {
                        this.rows[newRow - this.nrRollUpRows + _i + 1].copy(lastOutputScreen.rows[topRowIndex + _i]);
                    }
                }
            }
        }

        this.currRow = newRow;
        var row = this.rows[this.currRow];
        if (pacData.indent !== null) {
            var indent = pacData.indent;
            var prevPos = Math.max(indent - 1, 0);
            row.setCursor(pacData.indent);
            pacData.color = row.chars[prevPos].penState.foreground;
        }
        var styles = { foreground: pacData.color, underline: pacData.underline, italics: pacData.italics, background: 'black', flash: false };
        this.setPen(styles);
    };

    /**
     * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
     */


    CaptionScreen.prototype.setBkgData = function setBkgData(bkgData) {

        cea_608_parser_logger.log('INFO', 'bkgData = ' + JSON.stringify(bkgData));
        this.backSpace();
        this.setPen(bkgData);
        this.insertChar(0x20); //Space
    };

    CaptionScreen.prototype.setRollUpRows = function setRollUpRows(nrRows) {
        this.nrRollUpRows = nrRows;
    };

    CaptionScreen.prototype.rollUp = function rollUp() {
        if (this.nrRollUpRows === null) {
            cea_608_parser_logger.log('DEBUG', 'roll_up but nrRollUpRows not set yet');
            return; //Not properly setup
        }
        cea_608_parser_logger.log('TEXT', this.getDisplayText());
        var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
        var topRow = this.rows.splice(topRowIndex, 1)[0];
        topRow.clear();
        this.rows.splice(this.currRow, 0, topRow);
        cea_608_parser_logger.log('INFO', 'Rolling up');
        //logger.log('TEXT', this.get_display_text())
    };

    /**
     * Get all non-empty rows with as unicode text.
     */


    CaptionScreen.prototype.getDisplayText = function getDisplayText(asOneRow) {
        asOneRow = asOneRow || false;
        var displayText = [];
        var text = '';
        var rowNr = -1;
        for (var i = 0; i < NR_ROWS; i++) {
            var rowText = this.rows[i].getTextString();
            if (rowText) {
                rowNr = i + 1;
                if (asOneRow) {
                    displayText.push('Row ' + rowNr + ': \'' + rowText + '\'');
                } else {
                    displayText.push(rowText.trim());
                }
            }
        }
        if (displayText.length > 0) {
            if (asOneRow) {
                text = '[' + displayText.join(' | ') + ']';
            } else {
                text = displayText.join('\n');
            }
        }
        return text;
    };

    CaptionScreen.prototype.getTextAndFormat = function getTextAndFormat() {
        return this.rows;
    };

    return CaptionScreen;
}();

//var modes = ['MODE_ROLL-UP', 'MODE_POP-ON', 'MODE_PAINT-ON', 'MODE_TEXT'];

var Cea608Channel = function () {
    function Cea608Channel(channelNumber, outputFilter) {
        cea_608_parser__classCallCheck(this, Cea608Channel);

        this.chNr = channelNumber;
        this.outputFilter = outputFilter;
        this.mode = null;
        this.verbose = 0;
        this.displayedMemory = new CaptionScreen();
        this.nonDisplayedMemory = new CaptionScreen();
        this.lastOutputScreen = new CaptionScreen();
        this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
        this.writeScreen = this.displayedMemory;
        this.mode = null;
        this.cueStartTime = null; // Keeps track of where a cue started.
    }

    Cea608Channel.prototype.reset = function reset() {
        this.mode = null;
        this.displayedMemory.reset();
        this.nonDisplayedMemory.reset();
        this.lastOutputScreen.reset();
        this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
        this.writeScreen = this.displayedMemory;
        this.mode = null;
        this.cueStartTime = null;
        this.lastCueEndTime = null;
    };

    Cea608Channel.prototype.getHandler = function getHandler() {
        return this.outputFilter;
    };

    Cea608Channel.prototype.setHandler = function setHandler(newHandler) {
        this.outputFilter = newHandler;
    };

    Cea608Channel.prototype.setPAC = function setPAC(pacData) {
        this.writeScreen.setPAC(pacData);
    };

    Cea608Channel.prototype.setBkgData = function setBkgData(bkgData) {
        this.writeScreen.setBkgData(bkgData);
    };

    Cea608Channel.prototype.setMode = function setMode(newMode) {
        if (newMode === this.mode) {
            return;
        }
        this.mode = newMode;
        cea_608_parser_logger.log('INFO', 'MODE=' + newMode);
        if (this.mode === 'MODE_POP-ON') {
            this.writeScreen = this.nonDisplayedMemory;
        } else {
            this.writeScreen = this.displayedMemory;
            this.writeScreen.reset();
        }
        if (this.mode !== 'MODE_ROLL-UP') {
            this.displayedMemory.nrRollUpRows = null;
            this.nonDisplayedMemory.nrRollUpRows = null;
        }
        this.mode = newMode;
    };

    Cea608Channel.prototype.insertChars = function insertChars(chars) {
        for (var i = 0; i < chars.length; i++) {
            this.writeScreen.insertChar(chars[i]);
        }
        var screen = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
        cea_608_parser_logger.log('INFO', screen + ': ' + this.writeScreen.getDisplayText(true));
        if (this.mode === 'MODE_PAINT-ON' || this.mode === 'MODE_ROLL-UP') {
            cea_608_parser_logger.log('TEXT', 'DISPLAYED: ' + this.displayedMemory.getDisplayText(true));
            this.outputDataUpdate();
        }
    };

    Cea608Channel.prototype.ccRCL = function ccRCL() {
        // Resume Caption Loading (switch mode to Pop On)
        cea_608_parser_logger.log('INFO', 'RCL - Resume Caption Loading');
        this.setMode('MODE_POP-ON');
    };

    Cea608Channel.prototype.ccBS = function ccBS() {
        // BackSpace
        cea_608_parser_logger.log('INFO', 'BS - BackSpace');
        if (this.mode === 'MODE_TEXT') {
            return;
        }
        this.writeScreen.backSpace();
        if (this.writeScreen === this.displayedMemory) {
            this.outputDataUpdate();
        }
    };

    Cea608Channel.prototype.ccAOF = function ccAOF() {
        // Reserved (formerly Alarm Off)
        return;
    };

    Cea608Channel.prototype.ccAON = function ccAON() {
        // Reserved (formerly Alarm On)
        return;
    };

    Cea608Channel.prototype.ccDER = function ccDER() {
        // Delete to End of Row
        cea_608_parser_logger.log('INFO', 'DER- Delete to End of Row');
        this.writeScreen.clearToEndOfRow();
        this.outputDataUpdate();
    };

    Cea608Channel.prototype.ccRU = function ccRU(nrRows) {
        //Roll-Up Captions-2,3,or 4 Rows
        cea_608_parser_logger.log('INFO', 'RU(' + nrRows + ') - Roll Up');
        this.writeScreen = this.displayedMemory;
        this.setMode('MODE_ROLL-UP');
        this.writeScreen.setRollUpRows(nrRows);
    };

    Cea608Channel.prototype.ccFON = function ccFON() {
        //Flash On
        cea_608_parser_logger.log('INFO', 'FON - Flash On');
        this.writeScreen.setPen({ flash: true });
    };

    Cea608Channel.prototype.ccRDC = function ccRDC() {
        // Resume Direct Captioning (switch mode to PaintOn)
        cea_608_parser_logger.log('INFO', 'RDC - Resume Direct Captioning');
        this.setMode('MODE_PAINT-ON');
    };

    Cea608Channel.prototype.ccTR = function ccTR() {
        // Text Restart in text mode (not supported, however)
        cea_608_parser_logger.log('INFO', 'TR');
        this.setMode('MODE_TEXT');
    };

    Cea608Channel.prototype.ccRTD = function ccRTD() {
        // Resume Text Display in Text mode (not supported, however)
        cea_608_parser_logger.log('INFO', 'RTD');
        this.setMode('MODE_TEXT');
    };

    Cea608Channel.prototype.ccEDM = function ccEDM() {
        // Erase Displayed Memory
        cea_608_parser_logger.log('INFO', 'EDM - Erase Displayed Memory');
        this.displayedMemory.reset();
        this.outputDataUpdate();
    };

    Cea608Channel.prototype.ccCR = function ccCR() {
        // Carriage Return
        cea_608_parser_logger.log('CR - Carriage Return');
        this.writeScreen.rollUp();
        this.outputDataUpdate();
    };

    Cea608Channel.prototype.ccENM = function ccENM() {
        //Erase Non-Displayed Memory
        cea_608_parser_logger.log('INFO', 'ENM - Erase Non-displayed Memory');
        this.nonDisplayedMemory.reset();
    };

    Cea608Channel.prototype.ccEOC = function ccEOC() {
        //End of Caption (Flip Memories)
        cea_608_parser_logger.log('INFO', 'EOC - End Of Caption');
        if (this.mode === 'MODE_POP-ON') {
            var tmp = this.displayedMemory;
            this.displayedMemory = this.nonDisplayedMemory;
            this.nonDisplayedMemory = tmp;
            this.writeScreen = this.nonDisplayedMemory;
            cea_608_parser_logger.log('TEXT', 'DISP: ' + this.displayedMemory.getDisplayText());
        }
        this.outputDataUpdate();
    };

    Cea608Channel.prototype.ccTO = function ccTO(nrCols) {
        // Tab Offset 1,2, or 3 columns
        cea_608_parser_logger.log('INFO', 'TO(' + nrCols + ') - Tab Offset');
        this.writeScreen.moveCursor(nrCols);
    };

    Cea608Channel.prototype.ccMIDROW = function ccMIDROW(secondByte) {
        // Parse MIDROW command
        var styles = { flash: false };
        styles.underline = secondByte % 2 === 1;
        styles.italics = secondByte >= 0x2e;
        if (!styles.italics) {
            var colorIndex = Math.floor(secondByte / 2) - 0x10;
            var colors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'];
            styles.foreground = colors[colorIndex];
        } else {
            styles.foreground = 'white';
        }
        cea_608_parser_logger.log('INFO', 'MIDROW: ' + JSON.stringify(styles));
        this.writeScreen.setPen(styles);
    };

    Cea608Channel.prototype.outputDataUpdate = function outputDataUpdate() {
        var t = cea_608_parser_logger.time;
        if (t === null) {
            return;
        }
        if (this.outputFilter) {
            if (this.outputFilter.updateData) {
                this.outputFilter.updateData(t, this.displayedMemory);
            }
            if (this.cueStartTime === null && !this.displayedMemory.isEmpty()) {
                // Start of a new cue
                this.cueStartTime = t;
            } else {
                if (!this.displayedMemory.equals(this.lastOutputScreen)) {
                    if (this.outputFilter.newCue) {
                        this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen);
                    }
                    this.cueStartTime = this.displayedMemory.isEmpty() ? null : t;
                }
            }
            this.lastOutputScreen.copy(this.displayedMemory);
        }
    };

    Cea608Channel.prototype.cueSplitAtTime = function cueSplitAtTime(t) {
        if (this.outputFilter) {
            if (!this.displayedMemory.isEmpty()) {
                if (this.outputFilter.newCue) {
                    this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory);
                }
                this.cueStartTime = t;
            }
        }
    };

    return Cea608Channel;
}();

var Cea608Parser = function () {
    function Cea608Parser(field, out1, out2) {
        cea_608_parser__classCallCheck(this, Cea608Parser);

        this.field = field || 1;
        this.outputs = [out1, out2];
        this.channels = [new Cea608Channel(1, out1), new Cea608Channel(2, out2)];
        this.currChNr = -1; // Will be 1 or 2
        this.lastCmdA = null; // First byte of last command
        this.lastCmdB = null; // Second byte of last command
        this.bufferedData = [];
        this.startTime = null;
        this.lastTime = null;
        this.dataCounters = { 'padding': 0, 'char': 0, 'cmd': 0, 'other': 0 };
    }

    Cea608Parser.prototype.getHandler = function getHandler(index) {
        return this.channels[index].getHandler();
    };

    Cea608Parser.prototype.setHandler = function setHandler(index, newHandler) {
        this.channels[index].setHandler(newHandler);
    };

    /**
     * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
     */


    Cea608Parser.prototype.addData = function addData(t, byteList) {
        var cmdFound,
            a,
            b,
            charsFound = false;

        this.lastTime = t;
        cea_608_parser_logger.setTime(t);

        for (var i = 0; i < byteList.length; i += 2) {
            a = byteList[i] & 0x7f;
            b = byteList[i + 1] & 0x7f;
            if (a === 0 && b === 0) {
                this.dataCounters.padding += 2;
                continue;
            } else {
                cea_608_parser_logger.log('DATA', '[' + numArrayToHexArray([byteList[i], byteList[i + 1]]) + '] -> (' + numArrayToHexArray([a, b]) + ')');
            }
            cmdFound = this.parseCmd(a, b);
            if (!cmdFound) {
                cmdFound = this.parseMidrow(a, b);
            }
            if (!cmdFound) {
                cmdFound = this.parsePAC(a, b);
            }
            if (!cmdFound) {
                cmdFound = this.parseBackgroundAttributes(a, b);
            }
            if (!cmdFound) {
                charsFound = this.parseChars(a, b);
                if (charsFound) {
                    if (this.currChNr && this.currChNr >= 0) {
                        var channel = this.channels[this.currChNr - 1];
                        channel.insertChars(charsFound);
                    } else {
                        cea_608_parser_logger.log('WARNING', 'No channel found yet. TEXT-MODE?');
                    }
                }
            }
            if (cmdFound) {
                this.dataCounters.cmd += 2;
            } else if (charsFound) {
                this.dataCounters.char += 2;
            } else {
                this.dataCounters.other += 2;
                cea_608_parser_logger.log('WARNING', 'Couldn\'t parse cleaned data ' + numArrayToHexArray([a, b]) + ' orig: ' + numArrayToHexArray([byteList[i], byteList[i + 1]]));
            }
        }
    };

    /**
     * Parse Command.
     * @returns {Boolean} Tells if a command was found
     */


    Cea608Parser.prototype.parseCmd = function parseCmd(a, b) {
        var chNr = null;

        var cond1 = (a === 0x14 || a === 0x1C) && 0x20 <= b && b <= 0x2F;
        var cond2 = (a === 0x17 || a === 0x1F) && 0x21 <= b && b <= 0x23;
        if (!(cond1 || cond2)) {
            return false;
        }

        if (a === this.lastCmdA && b === this.lastCmdB) {
            this.lastCmdA = null;
            this.lastCmdB = null; // Repeated commands are dropped (once)
            cea_608_parser_logger.log('DEBUG', 'Repeated command (' + numArrayToHexArray([a, b]) + ') is dropped');
            return true;
        }

        if (a === 0x14 || a === 0x17) {
            chNr = 1;
        } else {
            chNr = 2; // (a === 0x1C || a=== 0x1f)
        }

        var channel = this.channels[chNr - 1];

        if (a === 0x14 || a === 0x1C) {
            if (b === 0x20) {
                channel.ccRCL();
            } else if (b === 0x21) {
                channel.ccBS();
            } else if (b === 0x22) {
                channel.ccAOF();
            } else if (b === 0x23) {
                channel.ccAON();
            } else if (b === 0x24) {
                channel.ccDER();
            } else if (b === 0x25) {
                channel.ccRU(2);
            } else if (b === 0x26) {
                channel.ccRU(3);
            } else if (b === 0x27) {
                channel.ccRU(4);
            } else if (b === 0x28) {
                channel.ccFON();
            } else if (b === 0x29) {
                channel.ccRDC();
            } else if (b === 0x2A) {
                channel.ccTR();
            } else if (b === 0x2B) {
                channel.ccRTD();
            } else if (b === 0x2C) {
                channel.ccEDM();
            } else if (b === 0x2D) {
                channel.ccCR();
            } else if (b === 0x2E) {
                channel.ccENM();
            } else if (b === 0x2F) {
                channel.ccEOC();
            }
        } else {
            //a == 0x17 || a == 0x1F
            channel.ccTO(b - 0x20);
        }
        this.lastCmdA = a;
        this.lastCmdB = b;
        this.currChNr = chNr;
        return true;
    };

    /**
     * Parse midrow styling command
     * @returns {Boolean}
     */


    Cea608Parser.prototype.parseMidrow = function parseMidrow(a, b) {
        var chNr = null;

        if ((a === 0x11 || a === 0x19) && 0x20 <= b && b <= 0x2f) {
            if (a === 0x11) {
                chNr = 1;
            } else {
                chNr = 2;
            }
            if (chNr !== this.currChNr) {
                cea_608_parser_logger.log('ERROR', 'Mismatch channel in midrow parsing');
                return false;
            }
            var channel = this.channels[chNr - 1];
            channel.ccMIDROW(b);
            cea_608_parser_logger.log('DEBUG', 'MIDROW (' + numArrayToHexArray([a, b]) + ')');
            return true;
        }
        return false;
    };
    /**
     * Parse Preable Access Codes (Table 53).
     * @returns {Boolean} Tells if PAC found
     */


    Cea608Parser.prototype.parsePAC = function parsePAC(a, b) {

        var chNr = null;
        var row = null;

        var case1 = (0x11 <= a && a <= 0x17 || 0x19 <= a && a <= 0x1F) && 0x40 <= b && b <= 0x7F;
        var case2 = (a === 0x10 || a === 0x18) && 0x40 <= b && b <= 0x5F;
        if (!(case1 || case2)) {
            return false;
        }

        if (a === this.lastCmdA && b === this.lastCmdB) {
            this.lastCmdA = null;
            this.lastCmdB = null;
            return true; // Repeated commands are dropped (once)
        }

        chNr = a <= 0x17 ? 1 : 2;

        if (0x40 <= b && b <= 0x5F) {
            row = chNr === 1 ? rowsLowCh1[a] : rowsLowCh2[a];
        } else {
            // 0x60 <= b <= 0x7F
            row = chNr === 1 ? rowsHighCh1[a] : rowsHighCh2[a];
        }
        var pacData = this.interpretPAC(row, b);
        var channel = this.channels[chNr - 1];
        channel.setPAC(pacData);
        this.lastCmdA = a;
        this.lastCmdB = b;
        this.currChNr = chNr;
        return true;
    };

    /**
     * Interpret the second byte of the pac, and return the information.
     * @returns {Object} pacData with style parameters.
     */


    Cea608Parser.prototype.interpretPAC = function interpretPAC(row, byte) {
        var pacIndex = byte;
        var pacData = { color: null, italics: false, indent: null, underline: false, row: row };

        if (byte > 0x5F) {
            pacIndex = byte - 0x60;
        } else {
            pacIndex = byte - 0x40;
        }
        pacData.underline = (pacIndex & 1) === 1;
        if (pacIndex <= 0xd) {
            pacData.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][Math.floor(pacIndex / 2)];
        } else if (pacIndex <= 0xf) {
            pacData.italics = true;
            pacData.color = 'white';
        } else {
            pacData.indent = Math.floor((pacIndex - 0x10) / 2) * 4;
        }
        return pacData; // Note that row has zero offset. The spec uses 1.
    };

    /**
     * Parse characters.
     * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
     */


    Cea608Parser.prototype.parseChars = function parseChars(a, b) {

        var channelNr = null,
            charCodes = null,
            charCode1 = null;

        if (a >= 0x19) {
            channelNr = 2;
            charCode1 = a - 8;
        } else {
            channelNr = 1;
            charCode1 = a;
        }
        if (0x11 <= charCode1 && charCode1 <= 0x13) {
            // Special character
            var oneCode = b;
            if (charCode1 === 0x11) {
                oneCode = b + 0x50;
            } else if (charCode1 === 0x12) {
                oneCode = b + 0x70;
            } else {
                oneCode = b + 0x90;
            }
            cea_608_parser_logger.log('INFO', 'Special char \'' + getCharForByte(oneCode) + '\' in channel ' + channelNr);
            charCodes = [oneCode];
        } else if (0x20 <= a && a <= 0x7f) {
            charCodes = b === 0 ? [a] : [a, b];
        }
        if (charCodes) {
            var hexCodes = numArrayToHexArray(charCodes);
            cea_608_parser_logger.log('DEBUG', 'Char codes =  ' + hexCodes.join(','));
            this.lastCmdA = null;
            this.lastCmdB = null;
        }
        return charCodes;
    };

    /**
    * Parse extended background attributes as well as new foreground color black.
    * @returns{Boolean} Tells if background attributes are found
    */


    Cea608Parser.prototype.parseBackgroundAttributes = function parseBackgroundAttributes(a, b) {
        var bkgData, index, chNr, channel;

        var case1 = (a === 0x10 || a === 0x18) && 0x20 <= b && b <= 0x2f;
        var case2 = (a === 0x17 || a === 0x1f) && 0x2d <= b && b <= 0x2f;
        if (!(case1 || case2)) {
            return false;
        }
        bkgData = {};
        if (a === 0x10 || a === 0x18) {
            index = Math.floor((b - 0x20) / 2);
            bkgData.background = backgroundColors[index];
            if (b % 2 === 1) {
                bkgData.background = bkgData.background + '_semi';
            }
        } else if (b === 0x2d) {
            bkgData.background = 'transparent';
        } else {
            bkgData.foreground = 'black';
            if (b === 0x2f) {
                bkgData.underline = true;
            }
        }
        chNr = a < 0x18 ? 1 : 2;
        channel = this.channels[chNr - 1];
        channel.setBkgData(bkgData);
        this.lastCmdA = null;
        this.lastCmdB = null;
        return true;
    };

    /**
     * Reset state of parser and its channels.
     */


    Cea608Parser.prototype.reset = function reset() {
        for (var i = 0; i < this.channels.length; i++) {
            if (this.channels[i]) {
                this.channels[i].reset();
            }
        }
        this.lastCmdA = null;
        this.lastCmdB = null;
    };

    /**
     * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
     */


    Cea608Parser.prototype.cueSplitAtTime = function cueSplitAtTime(t) {
        for (var i = 0; i < this.channels.length; i++) {
            if (this.channels[i]) {
                this.channels[i].cueSplitAtTime(t);
            }
        }
    };

    return Cea608Parser;
}();

/* harmony default export */ var cea_608_parser = (Cea608Parser);
// CONCATENATED MODULE: ./src/utils/webvtt-parser.js


// String.prototype.startsWith is not supported in IE11
var startsWith = function startsWith(inputString, searchString, position) {
    return inputString.substr(position || 0, searchString.length) === searchString;
};

var cueString2millis = function cueString2millis(timeString) {
    var ts = parseInt(timeString.substr(-3));
    var secs = parseInt(timeString.substr(-6, 2));
    var mins = parseInt(timeString.substr(-9, 2));
    var hours = timeString.length > 9 ? parseInt(timeString.substr(0, timeString.indexOf(':'))) : 0;

    if (isNaN(ts) || isNaN(secs) || isNaN(mins) || isNaN(hours)) {
        return -1;
    }

    ts += 1000 * secs;
    ts += 60 * 1000 * mins;
    ts += 60 * 60 * 1000 * hours;

    return ts;
};

// From https://github.com/darkskyapp/string-hash
var hash = function hash(text) {
    var hash = 5381;
    var i = text.length;
    while (i) {
        hash = hash * 33 ^ text.charCodeAt(--i);
    }
    return (hash >>> 0).toString();
};

var calculateOffset = function calculateOffset(vttCCs, cc, presentationTime) {
    var currCC = vttCCs[cc];
    var prevCC = vttCCs[currCC.prevCC];

    // This is the first discontinuity or cues have been processed since the last discontinuity
    // Offset = current discontinuity time
    if (!prevCC || !prevCC.new && currCC.new) {
        vttCCs.ccOffset = vttCCs.presentationOffset = currCC.start;
        currCC.new = false;
        return;
    }

    // There have been discontinuities since cues were last parsed.
    // Offset = time elapsed
    while (prevCC && prevCC.new) {
        vttCCs.ccOffset += currCC.start - prevCC.start;
        currCC.new = false;
        currCC = prevCC;
        prevCC = vttCCs[currCC.prevCC];
    }

    vttCCs.presentationOffset = presentationTime;
};

var WebVTTParser = {
    parse: function parse(vttByteArray, syncPTS, vttCCs, cc, callBack, errorCallBack) {
        // Convert byteArray into string, replacing any somewhat exotic linefeeds with "\n", then split on that character.
        var re = /\r\n|\n\r|\n|\r/g;
        var vttLines = String.fromCharCode.apply(null, new Uint8Array(vttByteArray)).trim().replace(re, '\n').split('\n');
        var cueTime = '00:00.000';
        var mpegTs = 0;
        var localTime = 0;
        var presentationTime = 0;
        var cues = [];
        var parsingError = void 0;
        var inHeader = true;
        // let VTTCue = VTTCue || window.TextTrackCue;

        // Create parser object using VTTCue with TextTrackCue fallback on certain browsers.
        var parser = new vttparser();

        parser.oncue = function (cue) {
            // Adjust cue timing; clamp cues to start no earlier than - and drop cues that don't end after - 0 on timeline.
            var currCC = vttCCs[cc];
            var cueOffset = vttCCs.ccOffset;

            // Update offsets for new discontinuities
            if (currCC && currCC.new) {
                if (localTime !== undefined) {
                    // When local time is provided, offset = discontinuity start time - local time
                    cueOffset = vttCCs.ccOffset = currCC.start;
                } else {
                    calculateOffset(vttCCs, cc, presentationTime);
                }
            }

            if (presentationTime) {
                // If we have MPEGTS, offset = presentation time + discontinuity offset
                cueOffset = presentationTime + vttCCs.ccOffset - vttCCs.presentationOffset;
            }

            cue.startTime += cueOffset - localTime;
            cue.endTime += cueOffset - localTime;

            // Create a unique hash id for a cue based on start/end times and text.
            // This helps timeline-controller to avoid showing repeated captions.
            cue.id = hash(cue.startTime) + hash(cue.endTime) + hash(cue.text);

            // Fix encoding of special characters. TODO: Test with all sorts of weird characters.
            cue.text = decodeURIComponent(escape(cue.text));
            if (cue.endTime > 0) {
                cues.push(cue);
            }
        };

        parser.onparsingerror = function (e) {
            parsingError = e;
        };

        parser.onflush = function () {
            if (parsingError && errorCallBack) {
                errorCallBack(parsingError);
                return;
            }
            callBack(cues);
        };

        // Go through contents line by line.
        vttLines.forEach(function (line) {
            if (inHeader) {
                // Look for X-TIMESTAMP-MAP in header.
                if (startsWith(line, 'X-TIMESTAMP-MAP=')) {
                    // Once found, no more are allowed anyway, so stop searching.
                    inHeader = false;
                    // Extract LOCAL and MPEGTS.
                    line.substr(16).split(',').forEach(function (timestamp) {
                        if (startsWith(timestamp, 'LOCAL:')) {
                            cueTime = timestamp.substr(6);
                        } else if (startsWith(timestamp, 'MPEGTS:')) {
                            mpegTs = parseInt(timestamp.substr(7));
                        }
                    });
                    try {
                        // Calculate subtitle offset in milliseconds.
                        // If sync PTS is less than zero, we have a 33-bit wraparound, which is fixed by adding 2^33 = 8589934592.
                        syncPTS = syncPTS < 0 ? syncPTS + 8589934592 : syncPTS;
                        // Adjust MPEGTS by sync PTS.
                        mpegTs -= syncPTS;
                        // Convert cue time to seconds
                        localTime = cueString2millis(cueTime) / 1000;
                        // Convert MPEGTS to seconds from 90kHz.
                        presentationTime = mpegTs / 90000;

                        if (localTime === -1) {
                            parsingError = new Error('Malformed X-TIMESTAMP-MAP: ' + line);
                        }
                    } catch (e) {
                        parsingError = new Error('Malformed X-TIMESTAMP-MAP: ' + line);
                    }
                    // Return without parsing X-TIMESTAMP-MAP line.
                    return;
                } else if (line === '') {
                    inHeader = false;
                }
            }
            // Parse line by default.
            parser.parse(line + '\n');
        });

        parser.flush();
    }
};

/* harmony default export */ var webvtt_parser = (WebVTTParser);
// CONCATENATED MODULE: ./src/controller/timeline-controller.js
function timeline_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function timeline_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function timeline_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Timeline Controller
*/







function clearCurrentCues(track) {
  if (track && track.cues) {
    while (track.cues.length > 0) {
      track.removeCue(track.cues[0]);
    }
  }
}

function reuseVttTextTrack(inUseTrack, manifestTrack) {
  return inUseTrack && inUseTrack.label === manifestTrack.name && !(inUseTrack.textTrack1 || inUseTrack.textTrack2);
}

function intersection(x1, x2, y1, y2) {
  return Math.min(x2, y2) - Math.max(x1, y1);
}

var timeline_controller_TimelineController = function (_EventHandler) {
  timeline_controller__inherits(TimelineController, _EventHandler);

  function TimelineController(hls) {
    timeline_controller__classCallCheck(this, TimelineController);

    var _this = timeline_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHING, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].FRAG_PARSING_USERDATA, events["a" /* default */].MANIFEST_LOADING, events["a" /* default */].MANIFEST_LOADED, events["a" /* default */].FRAG_LOADED, events["a" /* default */].LEVEL_SWITCHING, events["a" /* default */].INIT_PTS_FOUND));

    _this.hls = hls;
    _this.config = hls.config;
    _this.enabled = true;
    _this.Cues = hls.config.cueHandler;
    _this.textTracks = [];
    _this.tracks = [];
    _this.unparsedVttFrags = [];
    _this.initPTS = undefined;
    _this.cueRanges = [];

    if (_this.config.enableCEA708Captions) {
      var self = _this;
      var sendAddTrackEvent = function sendAddTrackEvent(track, media) {
        var e = null;
        try {
          e = new window.Event('addtrack');
        } catch (err) {
          //for IE11
          e = document.createEvent('Event');
          e.initEvent('addtrack', false, false);
        }
        e.track = track;
        media.dispatchEvent(e);
      };

      var channel1 = {
        'newCue': function newCue(startTime, endTime, screen) {
          if (!self.textTrack1) {
            //Enable reuse of existing text track.
            var existingTrack1 = self.getExistingTrack('1');
            if (!existingTrack1) {
              var textTrack1 = self.createTextTrack('captions', self.config.captionsTextTrack1Label, self.config.captionsTextTrack1LanguageCode);
              if (textTrack1) {
                textTrack1.textTrack1 = true;
                self.textTrack1 = textTrack1;
              }
            } else {
              self.textTrack1 = existingTrack1;
              clearCurrentCues(self.textTrack1);

              sendAddTrackEvent(self.textTrack1, self.media);
            }
          }
          self.addCues('textTrack1', startTime, endTime, screen);
        }
      };

      var channel2 = {
        'newCue': function newCue(startTime, endTime, screen) {
          if (!self.textTrack2) {
            //Enable reuse of existing text track.
            var existingTrack2 = self.getExistingTrack('2');
            if (!existingTrack2) {
              var textTrack2 = self.createTextTrack('captions', self.config.captionsTextTrack2Label, self.config.captionsTextTrack1LanguageCode);
              if (textTrack2) {
                textTrack2.textTrack2 = true;
                self.textTrack2 = textTrack2;
              }
            } else {
              self.textTrack2 = existingTrack2;
              clearCurrentCues(self.textTrack2);

              sendAddTrackEvent(self.textTrack2, self.media);
            }
          }
          self.addCues('textTrack2', startTime, endTime, screen);
        }
      };

      _this.cea608Parser = new cea_608_parser(0, channel1, channel2);
    }
    return _this;
  }

  TimelineController.prototype.addCues = function addCues(channel, startTime, endTime, screen) {
    // skip cues which overlap more than 50% with previously parsed time ranges
    var ranges = this.cueRanges;
    var merged = false;
    for (var i = ranges.length; i--;) {
      var cueRange = ranges[i];
      var overlap = intersection(cueRange[0], cueRange[1], startTime, endTime);
      if (overlap >= 0) {
        cueRange[0] = Math.min(cueRange[0], startTime);
        cueRange[1] = Math.max(cueRange[1], endTime);
        merged = true;
        if (overlap / (endTime - startTime) > 0.5) {
          return;
        }
      }
    }
    if (!merged) {
      ranges.push([startTime, endTime]);
    }
    this.Cues.newCue(this[channel], startTime, endTime, screen);
  };

  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.


  TimelineController.prototype.onInitPtsFound = function onInitPtsFound(data) {
    var _this2 = this;

    if (typeof this.initPTS === 'undefined') {
      this.initPTS = data.initPTS;
    }

    // Due to asynchrony, initial PTS may arrive later than the first VTT fragments are loaded.
    // Parse any unparsed fragments upon receiving the initial PTS.
    if (this.unparsedVttFrags.length) {
      this.unparsedVttFrags.forEach(function (frag) {
        _this2.onFragLoaded(frag);
      });
      this.unparsedVttFrags = [];
    }
  };

  TimelineController.prototype.getExistingTrack = function getExistingTrack(channelNumber) {
    var media = this.media;
    if (media) {
      for (var i = 0; i < media.textTracks.length; i++) {
        var textTrack = media.textTracks[i];
        var propName = 'textTrack' + channelNumber;
        if (textTrack[propName] === true) {
          return textTrack;
        }
      }
    }
    return null;
  };

  TimelineController.prototype.createTextTrack = function createTextTrack(kind, label, lang) {
    var media = this.media;
    if (media) {
      return media.addTextTrack(kind, label, lang);
    }
  };

  TimelineController.prototype.destroy = function destroy() {
    event_handler.prototype.destroy.call(this);
  };

  TimelineController.prototype.onMediaAttaching = function onMediaAttaching(data) {
    this.media = data.media;
  };

  TimelineController.prototype.onMediaDetaching = function onMediaDetaching() {
    clearCurrentCues(this.textTrack1);
    clearCurrentCues(this.textTrack2);
  };

  TimelineController.prototype.onManifestLoading = function onManifestLoading() {
    this.lastSn = -1; // Detect discontiguity in fragment parsing
    this.prevCC = -1;
    this.vttCCs = { ccOffset: 0, presentationOffset: 0 }; // Detect discontinuity in subtitle manifests

    // clear outdated subtitles
    var media = this.media;
    if (media) {
      var textTracks = media.textTracks;
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          clearCurrentCues(textTracks[i]);
        }
      }
    }
  };

  TimelineController.prototype.onManifestLoaded = function onManifestLoaded(data) {
    var _this3 = this;

    this.textTracks = [];
    this.unparsedVttFrags = this.unparsedVttFrags || [];
    this.initPTS = undefined;
    this.cueRanges = [];

    if (this.config.enableWebVTT) {
      this.tracks = data.subtitles || [];
      var inUseTracks = this.media ? this.media.textTracks : [];

      this.tracks.forEach(function (track, index) {
        var textTrack = void 0;
        if (index < inUseTracks.length) {
          var inUseTrack = inUseTracks[index];
          // Reuse tracks with the same label, but do not reuse 608/708 tracks
          if (reuseVttTextTrack(inUseTrack, track)) {
            textTrack = inUseTrack;
          }
        }
        if (!textTrack) {
          textTrack = _this3.createTextTrack('subtitles', track.name, track.lang);
        }
        textTrack.mode = track.default ? 'showing' : 'hidden';
        _this3.textTracks.push(textTrack);
      });
    }
  };

  TimelineController.prototype.onLevelSwitching = function onLevelSwitching() {
    this.enabled = this.hls.currentLevel.closedCaptions !== 'NONE';
  };

  TimelineController.prototype.onFragLoaded = function onFragLoaded(data) {
    var frag = data.frag,
        payload = data.payload;
    if (frag.type === 'main') {
      var sn = frag.sn;
      // if this frag isn't contiguous, clear the parser so cues with bad start/end times aren't added to the textTrack
      if (sn !== this.lastSn + 1) {
        var cea608Parser = this.cea608Parser;
        if (cea608Parser) {
          cea608Parser.reset();
        }
      }
      this.lastSn = sn;
    }
    // If fragment is subtitle type, parse as WebVTT.
    else if (frag.type === 'subtitle') {
        if (payload.byteLength) {
          // We need an initial synchronisation PTS. Store fragments as long as none has arrived.
          if (typeof this.initPTS === 'undefined') {
            this.unparsedVttFrags.push(data);
            return;
          }
          var vttCCs = this.vttCCs;
          if (!vttCCs[frag.cc]) {
            vttCCs[frag.cc] = { start: frag.start, prevCC: this.prevCC, new: true };
            this.prevCC = frag.cc;
          }
          var textTracks = this.textTracks,
              hls = this.hls;

          // Parse the WebVTT file contents.
          webvtt_parser.parse(payload, this.initPTS, vttCCs, frag.cc, function (cues) {
            var currentTrack = textTracks[frag.trackId];
            // Add cues and trigger event with success true.
            cues.forEach(function (cue) {
              // Sometimes there are cue overlaps on segmented vtts so the same
              // cue can appear more than once in different vtt files.
              // This avoid showing duplicated cues with same timecode and text.
              if (!currentTrack.cues.getCueById(cue.id)) {
                try {
                  currentTrack.addCue(cue);
                } catch (err) {
                  var textTrackCue = new window.TextTrackCue(cue.startTime, cue.endTime, cue.text);
                  textTrackCue.id = cue.id;
                  currentTrack.addCue(textTrackCue);
                }
              }
            });
            hls.trigger(events["a" /* default */].SUBTITLE_FRAG_PROCESSED, { success: true, frag: frag });
          }, function (e) {
            // Something went wrong while parsing. Trigger event with success false.
            logger["b" /* logger */].log('Failed to parse VTT cue: ' + e);
            hls.trigger(events["a" /* default */].SUBTITLE_FRAG_PROCESSED, { success: false, frag: frag });
          });
        } else {
          // In case there is no payload, finish unsuccessfully.
          this.hls.trigger(events["a" /* default */].SUBTITLE_FRAG_PROCESSED, { success: false, frag: frag });
        }
      }
  };

  TimelineController.prototype.onFragParsingUserdata = function onFragParsingUserdata(data) {
    // push all of the CEA-708 messages into the interpreter
    // immediately. It will create the proper timestamps based on our PTS value
    if (this.enabled && this.config.enableCEA708Captions) {
      for (var i = 0; i < data.samples.length; i++) {
        var ccdatas = this.extractCea608Data(data.samples[i].bytes);
        this.cea608Parser.addData(data.samples[i].pts, ccdatas);
      }
    }
  };

  TimelineController.prototype.extractCea608Data = function extractCea608Data(byteArray) {
    var count = byteArray[0] & 31;
    var position = 2;
    var tmpByte, ccbyte1, ccbyte2, ccValid, ccType;
    var actualCCBytes = [];

    for (var j = 0; j < count; j++) {
      tmpByte = byteArray[position++];
      ccbyte1 = 0x7F & byteArray[position++];
      ccbyte2 = 0x7F & byteArray[position++];
      ccValid = (4 & tmpByte) !== 0;
      ccType = 3 & tmpByte;

      if (ccbyte1 === 0 && ccbyte2 === 0) {
        continue;
      }

      if (ccValid) {
        if (ccType === 0) // || ccType === 1
          {
            actualCCBytes.push(ccbyte1);
            actualCCBytes.push(ccbyte2);
          }
      }
    }
    return actualCCBytes;
  };

  return TimelineController;
}(event_handler);

/* harmony default export */ var timeline_controller = (timeline_controller_TimelineController);
// CONCATENATED MODULE: ./src/controller/subtitle-track-controller.js
var subtitle_track_controller__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function subtitle_track_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function subtitle_track_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function subtitle_track_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * subtitle track controller
*/





function filterSubtitleTracks(textTrackList) {
  var tracks = [];
  for (var i = 0; i < textTrackList.length; i++) {
    if (textTrackList[i].kind === 'subtitles') {
      tracks.push(textTrackList[i]);
    }
  }
  return tracks;
}

var subtitle_track_controller_SubtitleTrackController = function (_EventHandler) {
  subtitle_track_controller__inherits(SubtitleTrackController, _EventHandler);

  function SubtitleTrackController(hls) {
    subtitle_track_controller__classCallCheck(this, SubtitleTrackController);

    var _this = subtitle_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].MEDIA_ATTACHED, events["a" /* default */].MEDIA_DETACHING, events["a" /* default */].MANIFEST_LOADING, events["a" /* default */].MANIFEST_LOADED, events["a" /* default */].SUBTITLE_TRACK_LOADED));

    _this.tracks = [];
    _this.trackId = -1;
    _this.media = undefined;
    return _this;
  }

  SubtitleTrackController.prototype._onTextTracksChanged = function _onTextTracksChanged() {
    // Media is undefined when switching streams via loadSource()
    if (!this.media) {
      return;
    }

    var trackId = -1;
    var tracks = filterSubtitleTracks(this.media.textTracks);
    for (var id = 0; id < tracks.length; id++) {
      if (tracks[id].mode === 'showing') {
        trackId = id;
      }
    }

    // Setting current subtitleTrack will invoke code.
    this.subtitleTrack = trackId;
  };

  SubtitleTrackController.prototype.destroy = function destroy() {
    event_handler.prototype.destroy.call(this);
  };

  // Listen for subtitle track change, then extract the current track ID.


  SubtitleTrackController.prototype.onMediaAttached = function onMediaAttached(data) {
    var _this2 = this;

    this.media = data.media;
    if (!this.media) {
      return;
    }

    this.trackChangeListener = this._onTextTracksChanged.bind(this);

    this.useTextTrackPolling = !(this.media.textTracks && 'onchange' in this.media.textTracks);
    if (this.useTextTrackPolling) {
      this.subtitlePollingInterval = setInterval(function () {
        _this2.trackChangeListener();
      }, 500);
    } else {
      this.media.textTracks.addEventListener('change', this.trackChangeListener);
    }
  };

  SubtitleTrackController.prototype.onMediaDetaching = function onMediaDetaching() {
    if (!this.media) {
      return;
    }
    if (this.useTextTrackPolling) {
      clearInterval(this.subtitlePollingInterval);
    } else {
      this.media.textTracks.removeEventListener('change', this.trackChangeListener);
    }

    this.media = undefined;
  };

  // Reset subtitle tracks on manifest loading


  SubtitleTrackController.prototype.onManifestLoading = function onManifestLoading() {
    this.tracks = [];
    this.trackId = -1;
  };

  // Fired whenever a new manifest is loaded.


  SubtitleTrackController.prototype.onManifestLoaded = function onManifestLoaded(data) {
    var _this3 = this;

    var tracks = data.subtitles || [];
    var defaultFound = false;
    this.tracks = tracks;
    this.trackId = -1;
    this.hls.trigger(events["a" /* default */].SUBTITLE_TRACKS_UPDATED, { subtitleTracks: tracks });

    // loop through available subtitle tracks and autoselect default if needed
    // TODO: improve selection logic to handle forced, etc
    tracks.forEach(function (track) {
      if (track.default) {
        _this3.subtitleTrack = track.id;
        defaultFound = true;
      }
    });
  };

  // Trigger subtitle track playlist reload.


  SubtitleTrackController.prototype.onTick = function onTick() {
    var trackId = this.trackId;
    var subtitleTrack = this.tracks[trackId];
    if (!subtitleTrack) {
      return;
    }

    var details = subtitleTrack.details;
    // check if we need to load playlist for this subtitle Track
    if (details === undefined || details.live === true) {
      // track not retrieved yet, or live playlist we need to (re)load it
      logger["b" /* logger */].log('(re)loading playlist for subtitle track ' + trackId);
      this.hls.trigger(events["a" /* default */].SUBTITLE_TRACK_LOADING, { url: subtitleTrack.url, id: trackId });
    }
  };

  SubtitleTrackController.prototype.onSubtitleTrackLoaded = function onSubtitleTrackLoaded(data) {
    var _this4 = this;

    if (data.id < this.tracks.length) {
      logger["b" /* logger */].log('subtitle track ' + data.id + ' loaded');
      this.tracks[data.id].details = data.details;
      // check if current playlist is a live playlist
      if (data.details.live && !this.timer) {
        // if live playlist we will have to reload it periodically
        // set reload period to playlist target duration
        this.timer = setInterval(function () {
          _this4.onTick();
        }, 1000 * data.details.targetduration, this);
      }
      if (!data.details.live && this.timer) {
        // playlist is not live and timer is armed : stopping it
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  };

  /** get alternate subtitle tracks list from playlist **/


  SubtitleTrackController.prototype.setSubtitleTrackInternal = function setSubtitleTrackInternal(newId) {
    // check if level idx is valid
    if (newId >= 0 && newId < this.tracks.length) {
      // stopping live reloading timer if any
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.trackId = newId;
      logger["b" /* logger */].log('switching to subtitle track ' + newId);
      var subtitleTrack = this.tracks[newId];
      this.hls.trigger(events["a" /* default */].SUBTITLE_TRACK_SWITCH, { id: newId });
      // check if we need to load playlist for this subtitle Track
      var details = subtitleTrack.details;
      if (details === undefined || details.live === true) {
        // track not retrieved yet, or live playlist we need to (re)load it
        logger["b" /* logger */].log('(re)loading playlist for subtitle track ' + newId);
        this.hls.trigger(events["a" /* default */].SUBTITLE_TRACK_LOADING, { url: subtitleTrack.url, id: newId });
      }
    }
  };

  subtitle_track_controller__createClass(SubtitleTrackController, [{
    key: 'subtitleTracks',
    get: function get() {
      return this.tracks;
    }

    /** get index of the selected subtitle track (index in subtitle track lists) **/

  }, {
    key: 'subtitleTrack',
    get: function get() {
      return this.trackId;
    }

    /** select a subtitle track, based on its index in subtitle track lists**/
    ,
    set: function set(subtitleTrackId) {
      if (this.trackId !== subtitleTrackId) {
        // || this.tracks[subtitleTrackId].details === undefined) {
        this.setSubtitleTrackInternal(subtitleTrackId);
      }
    }
  }]);

  return SubtitleTrackController;
}(event_handler);

/* harmony default export */ var subtitle_track_controller = (subtitle_track_controller_SubtitleTrackController);
// CONCATENATED MODULE: ./src/controller/subtitle-stream-controller.js
function subtitle_stream_controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function subtitle_stream_controller__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function subtitle_stream_controller__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Subtitle Stream Controller
*/





var subtitle_stream_controller_SubtitleStreamController = function (_EventHandler) {
  subtitle_stream_controller__inherits(SubtitleStreamController, _EventHandler);

  function SubtitleStreamController(hls) {
    subtitle_stream_controller__classCallCheck(this, SubtitleStreamController);

    var _this = subtitle_stream_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a" /* default */].ERROR, events["a" /* default */].SUBTITLE_TRACKS_UPDATED, events["a" /* default */].SUBTITLE_TRACK_SWITCH, events["a" /* default */].SUBTITLE_TRACK_LOADED, events["a" /* default */].SUBTITLE_FRAG_PROCESSED));

    _this.config = hls.config;
    _this.vttFragSNsProcessed = {};
    _this.vttFragQueues = undefined;
    _this.currentlyProcessing = null;
    _this.currentTrackId = -1;
    return _this;
  }

  SubtitleStreamController.prototype.destroy = function destroy() {
    event_handler.prototype.destroy.call(this);
  };

  // Remove all queued items and create a new, empty queue for each track.


  SubtitleStreamController.prototype.clearVttFragQueues = function clearVttFragQueues() {
    var _this2 = this;

    this.vttFragQueues = {};
    this.tracks.forEach(function (track) {
      _this2.vttFragQueues[track.id] = [];
    });
  };

  // If no frag is being processed and queue isn't empty, initiate processing of next frag in line.


  SubtitleStreamController.prototype.nextFrag = function nextFrag() {
    if (this.currentlyProcessing === null && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
      var frag = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
      this.hls.trigger(events["a" /* default */].FRAG_LOADING, { frag: frag });
    }
  };

  // When fragment has finished processing, add sn to list of completed if successful.


  SubtitleStreamController.prototype.onSubtitleFragProcessed = function onSubtitleFragProcessed(data) {
    if (data.success) {
      this.vttFragSNsProcessed[data.frag.trackId].push(data.frag.sn);
    }
    this.currentlyProcessing = null;
    this.nextFrag();
  };

  // If something goes wrong, procede to next frag, if we were processing one.


  SubtitleStreamController.prototype.onError = function onError(data) {
    var frag = data.frag;
    // don't handle frag error not related to subtitle fragment
    if (frag && frag.type !== 'subtitle') {
      return;
    }
    if (this.currentlyProcessing) {
      this.currentlyProcessing = null;
      this.nextFrag();
    }
  };

  // Got all new subtitle tracks.


  SubtitleStreamController.prototype.onSubtitleTracksUpdated = function onSubtitleTracksUpdated(data) {
    var _this3 = this;

    logger["b" /* logger */].log('subtitle tracks updated');
    this.tracks = data.subtitleTracks;
    this.clearVttFragQueues();
    this.vttFragSNsProcessed = {};
    this.tracks.forEach(function (track) {
      _this3.vttFragSNsProcessed[track.id] = [];
    });
  };

  SubtitleStreamController.prototype.onSubtitleTrackSwitch = function onSubtitleTrackSwitch(data) {
    this.currentTrackId = data.id;
    this.clearVttFragQueues();
  };

  // Got a new set of subtitle fragments.


  SubtitleStreamController.prototype.onSubtitleTrackLoaded = function onSubtitleTrackLoaded(data) {
    var processedFragSNs = this.vttFragSNsProcessed[data.id],
        fragQueue = this.vttFragQueues[data.id],
        currentFragSN = !!this.currentlyProcessing ? this.currentlyProcessing.sn : -1;

    var alreadyProcessed = function alreadyProcessed(frag) {
      return processedFragSNs.indexOf(frag.sn) > -1;
    };

    var alreadyInQueue = function alreadyInQueue(frag) {
      return fragQueue.some(function (fragInQueue) {
        return fragInQueue.sn === frag.sn;
      });
    };

    // Add all fragments that haven't been, aren't currently being and aren't waiting to be processed, to queue.
    data.details.fragments.forEach(function (frag) {
      if (!(alreadyProcessed(frag) || frag.sn === currentFragSN || alreadyInQueue(frag))) {
        // Frags don't know their subtitle track ID, so let's just add that...
        frag.trackId = data.id;
        fragQueue.push(frag);
      }
    });

    this.nextFrag();
  };

  return SubtitleStreamController;
}(event_handler);

/* harmony default export */ var subtitle_stream_controller = (subtitle_stream_controller_SubtitleStreamController);
// CONCATENATED MODULE: ./src/config.js
/**
 * HLS config
 */






//import FetchLoader from './utils/fetch-loader';









var hlsDefaultConfig = {
  autoStartLoad: true, // used by stream-controller
  startPosition: -1, // used by stream-controller
  defaultAudioCodec: undefined, // used by stream-controller
  debug: false, // used by logger
  capLevelOnFPSDrop: false, // used by fps-controller
  capLevelToPlayerSize: false, // used by cap-level-controller
  initialLiveManifestSize: 1, // used by stream-controller
  maxBufferLength: 30, // used by stream-controller
  maxBufferSize: 60 * 1000 * 1000, // used by stream-controller
  maxBufferHole: 0.5, // used by stream-controller
  maxSeekHole: 2, // used by stream-controller
  lowBufferWatchdogPeriod: 0.5, // used by stream-controller
  highBufferWatchdogPeriod: 3, // used by stream-controller
  nudgeOffset: 0.1, // used by stream-controller
  nudgeMaxRetry: 3, // used by stream-controller
  maxFragLookUpTolerance: 0.2, // used by stream-controller
  liveSyncDurationCount: 3, // used by stream-controller
  liveMaxLatencyDurationCount: Infinity, // used by stream-controller
  liveSyncDuration: undefined, // used by stream-controller
  liveMaxLatencyDuration: undefined, // used by stream-controller
  maxMaxBufferLength: 600, // used by stream-controller
  enableWorker: true, // used by demuxer
  enableSoftwareAES: true, // used by decrypter
  manifestLoadingTimeOut: 10000, // used by playlist-loader
  manifestLoadingMaxRetry: 1, // used by playlist-loader
  manifestLoadingRetryDelay: 1000, // used by playlist-loader
  manifestLoadingMaxRetryTimeout: 64000, // used by playlist-loader
  startLevel: undefined, // used by level-controller
  levelLoadingTimeOut: 10000, // used by playlist-loader
  levelLoadingMaxRetry: 4, // used by playlist-loader
  levelLoadingRetryDelay: 1000, // used by playlist-loader
  levelLoadingMaxRetryTimeout: 64000, // used by playlist-loader
  fragLoadingTimeOut: 20000, // used by fragment-loader
  fragLoadingMaxRetry: 6, // used by fragment-loader
  fragLoadingRetryDelay: 1000, // used by fragment-loader
  fragLoadingMaxRetryTimeout: 64000, // used by fragment-loader
  fragLoadingLoopThreshold: 3, // used by stream-controller
  startFragPrefetch: false, // used by stream-controller
  fpsDroppedMonitoringPeriod: 5000, // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2, // used by fps-controller
  appendErrorMaxRetry: 3, // used by buffer-controller
  loader: xhr_loader,
  //loader: FetchLoader,
  fLoader: undefined,
  pLoader: undefined,
  xhrSetup: undefined,
  fetchSetup: undefined,
  abrController: abr_controller,
  bufferController: buffer_controller,
  capLevelController: cap_level_controller,
  fpsController: fps_controller,
  stretchShortVideoTrack: false, // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: true, // used by ts-demuxer
  abrEwmaFastLive: 3, // used by abr-controller
  abrEwmaSlowLive: 9, // used by abr-controller
  abrEwmaFastVoD: 3, // used by abr-controller
  abrEwmaSlowVoD: 9, // used by abr-controller
  abrEwmaDefaultEstimate: 5e5, // 500 kbps  // used by abr-controller
  abrBandWidthFactor: 0.95, // used by abr-controller
  abrBandWidthUpFactor: 0.7, // used by abr-controller
  abrMaxWithRealBitrate: false, // used by abr-controller
  maxStarvationDelay: 4, // used by abr-controller
  maxLoadingDelay: 4, // used by abr-controller
  minAutoBitrate: 0 // used by hls
};

if (true) {
  hlsDefaultConfig.subtitleStreamController = subtitle_stream_controller;
  hlsDefaultConfig.subtitleTrackController = subtitle_track_controller;
  hlsDefaultConfig.timelineController = timeline_controller;
  hlsDefaultConfig.cueHandler = cues_namespaceObject;
  hlsDefaultConfig.enableCEA708Captions = true; // used by timeline-controller
  hlsDefaultConfig.enableWebVTT = true; // used by timeline-controller
  hlsDefaultConfig.captionsTextTrack1Label = 'English'; // used by timeline-controller
  hlsDefaultConfig.captionsTextTrack1LanguageCode = 'en'; // used by timeline-controller
  hlsDefaultConfig.captionsTextTrack2Label = 'Spanish'; // used by timeline-controller
  hlsDefaultConfig.captionsTextTrack2LanguageCode = 'es'; // used by timeline-controller
}

if (true) {
  hlsDefaultConfig.audioStreamController = audio_stream_controller;
  hlsDefaultConfig.audioTrackController = audio_track_controller;
}
// CONCATENATED MODULE: ./src/hls.js
var hls__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function hls__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * HLS interface
 */















var hls_Hls = function () {
  Hls.isSupported = function isSupported() {
    var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
    var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
    var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');

    // if SourceBuffer is exposed ensure its API is valid
    // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
    var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
    return isTypeSupported && sourceBufferValidAPI;
  };

  hls__createClass(Hls, null, [{
    key: 'version',
    get: function get() {
      return "0.8.2";
    }
  }, {
    key: 'Events',
    get: function get() {
      return events["a" /* default */];
    }
  }, {
    key: 'ErrorTypes',
    get: function get() {
      return errors["b" /* ErrorTypes */];
    }
  }, {
    key: 'ErrorDetails',
    get: function get() {
      return errors["a" /* ErrorDetails */];
    }
  }, {
    key: 'DefaultConfig',
    get: function get() {
      if (!Hls.defaultConfig) {
        return hlsDefaultConfig;
      }
      return Hls.defaultConfig;
    },
    set: function set(defaultConfig) {
      Hls.defaultConfig = defaultConfig;
    }
  }]);

  function Hls() {
    var _this = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    hls__classCallCheck(this, Hls);

    var defaultConfig = Hls.DefaultConfig;

    if ((config.liveSyncDurationCount || config.liveMaxLatencyDurationCount) && (config.liveSyncDuration || config.liveMaxLatencyDuration)) {
      throw new Error('Illegal hls.js config: don\'t mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration');
    }

    for (var prop in defaultConfig) {
      if (prop in config) {
        continue;
      }
      config[prop] = defaultConfig[prop];
    }

    if (config.liveMaxLatencyDurationCount !== undefined && config.liveMaxLatencyDurationCount <= config.liveSyncDurationCount) {
      throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
    }

    if (config.liveMaxLatencyDuration !== undefined && (config.liveMaxLatencyDuration <= config.liveSyncDuration || config.liveSyncDuration === undefined)) {
      throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
    }

    Object(logger["a" /* enableLogs */])(config.debug);
    this.config = config;
    this._autoLevelCapping = -1;
    // observer setup
    var observer = this.observer = new events_default.a();
    observer.trigger = function trigger(event) {
      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      observer.emit.apply(observer, [event, event].concat(data));
    };

    observer.off = function off(event) {
      for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        data[_key2 - 1] = arguments[_key2];
      }

      observer.removeListener.apply(observer, [event].concat(data));
    };
    this.on = observer.on.bind(observer);
    this.off = observer.off.bind(observer);
    this.trigger = observer.trigger.bind(observer);

    // core controllers and network loaders
    var abrController = this.abrController = new config.abrController(this);
    var bufferController = new config.bufferController(this);
    var capLevelController = new config.capLevelController(this);
    var fpsController = new config.fpsController(this);
    var playListLoader = new playlist_loader(this);
    var fragmentLoader = new fragment_loader(this);
    var keyLoader = new key_loader(this);
    var id3TrackController = new id3_track_controller(this);

    // network controllers
    var levelController = this.levelController = new level_controller(this);
    var streamController = this.streamController = new stream_controller(this);
    var networkControllers = [levelController, streamController];

    // optional audio stream controller
    var Controller = config.audioStreamController;
    if (Controller) {
      networkControllers.push(new Controller(this));
    }
    this.networkControllers = networkControllers;

    var coreComponents = [playListLoader, fragmentLoader, keyLoader, abrController, bufferController, capLevelController, fpsController, id3TrackController];

    // optional audio track and subtitle controller
    Controller = config.audioTrackController;
    if (Controller) {
      var audioTrackController = new Controller(this);
      this.audioTrackController = audioTrackController;
      coreComponents.push(audioTrackController);
    }

    Controller = config.subtitleTrackController;
    if (Controller) {
      var subtitleTrackController = new Controller(this);
      this.subtitleTrackController = subtitleTrackController;
      coreComponents.push(subtitleTrackController);
    }

    // optional subtitle controller
    [config.subtitleStreamController, config.timelineController].forEach(function (Controller) {
      if (Controller) {
        coreComponents.push(new Controller(_this));
      }
    });
    this.coreComponents = coreComponents;
  }

  Hls.prototype.destroy = function destroy() {
    logger["b" /* logger */].log('destroy');
    this.trigger(events["a" /* default */].DESTROYING);
    this.detachMedia();
    this.coreComponents.concat(this.networkControllers).forEach(function (component) {
      component.destroy();
    });
    this.url = null;
    this.observer.removeAllListeners();
    this._autoLevelCapping = -1;
  };

  Hls.prototype.attachMedia = function attachMedia(media) {
    logger["b" /* logger */].log('attachMedia');
    this.media = media;
    this.trigger(events["a" /* default */].MEDIA_ATTACHING, { media: media });
  };

  Hls.prototype.detachMedia = function detachMedia() {
    logger["b" /* logger */].log('detachMedia');
    this.trigger(events["a" /* default */].MEDIA_DETACHING);
    this.media = null;
  };

  Hls.prototype.loadSource = function loadSource(url) {
    url = url_toolkit_default.a.buildAbsoluteURL(window.location.href, url, { alwaysNormalize: true });
    logger["b" /* logger */].log('loadSource:' + url);
    this.url = url;
    // when attaching to a source URL, trigger a playlist load
    this.trigger(events["a" /* default */].MANIFEST_LOADING, { url: url });
  };

  Hls.prototype.startLoad = function startLoad() {
    var startPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

    logger["b" /* logger */].log('startLoad(' + startPosition + ')');
    this.networkControllers.forEach(function (controller) {
      controller.startLoad(startPosition);
    });
  };

  Hls.prototype.stopLoad = function stopLoad() {
    logger["b" /* logger */].log('stopLoad');
    this.networkControllers.forEach(function (controller) {
      controller.stopLoad();
    });
  };

  Hls.prototype.swapAudioCodec = function swapAudioCodec() {
    logger["b" /* logger */].log('swapAudioCodec');
    this.streamController.swapAudioCodec();
  };

  Hls.prototype.recoverMediaError = function recoverMediaError() {
    logger["b" /* logger */].log('recoverMediaError');
    var media = this.media;
    this.detachMedia();
    this.attachMedia(media);
  };

  /** Return all quality levels **/


  hls__createClass(Hls, [{
    key: 'levels',
    get: function get() {
      return this.levelController.levels;
    }

    /** Return current playback quality level **/

  }, {
    key: 'currentLevel',
    get: function get() {
      return this.streamController.currentLevel;
    }

    /* set quality level immediately (-1 for automatic level selection) */
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set currentLevel:' + newLevel);
      this.loadLevel = newLevel;
      this.streamController.immediateLevelSwitch();
    }

    /** Return next playback quality level (quality level of next fragment) **/

  }, {
    key: 'nextLevel',
    get: function get() {
      return this.streamController.nextLevel;
    }

    /* set quality level for next fragment (-1 for automatic level selection) */
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set nextLevel:' + newLevel);
      this.levelController.manualLevel = newLevel;
      this.streamController.nextLevelSwitch();
    }

    /** Return the quality level of current/last loaded fragment **/

  }, {
    key: 'loadLevel',
    get: function get() {
      return this.levelController.level;
    }

    /* set quality level for current/next loaded fragment (-1 for automatic level selection) */
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set loadLevel:' + newLevel);
      this.levelController.manualLevel = newLevel;
    }

    /** Return the quality level of next loaded fragment **/

  }, {
    key: 'nextLoadLevel',
    get: function get() {
      return this.levelController.nextLoadLevel;
    }

    /** set quality level of next loaded fragment **/
    ,
    set: function set(level) {
      this.levelController.nextLoadLevel = level;
    }

    /** Return first level (index of first level referenced in manifest)
    **/

  }, {
    key: 'firstLevel',
    get: function get() {
      return Math.max(this.levelController.firstLevel, this.minAutoLevel);
    }

    /** set first level (index of first level referenced in manifest)
    **/
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set firstLevel:' + newLevel);
      this.levelController.firstLevel = newLevel;
    }

    /** Return start level (level of first fragment that will be played back)
        if not overrided by user, first level appearing in manifest will be used as start level
        if -1 : automatic start level selection, playback will start from level matching download bandwidth (determined from download of first segment)
    **/

  }, {
    key: 'startLevel',
    get: function get() {
      return this.levelController.startLevel;
    }

    /** set  start level (level of first fragment that will be played back)
        if not overrided by user, first level appearing in manifest will be used as start level
        if -1 : automatic start level selection, playback will start from level matching download bandwidth (determined from download of first segment)
    **/
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set startLevel:' + newLevel);
      var hls = this;
      // if not in automatic start level detection, ensure startLevel is greater than minAutoLevel
      if (newLevel !== -1) {
        newLevel = Math.max(newLevel, hls.minAutoLevel);
      }
      hls.levelController.startLevel = newLevel;
    }

    /** Return the capping/max level value that could be used by automatic level selection algorithm **/

  }, {
    key: 'autoLevelCapping',
    get: function get() {
      return this._autoLevelCapping;
    }

    /** set the capping/max level value that could be used by automatic level selection algorithm **/
    ,
    set: function set(newLevel) {
      logger["b" /* logger */].log('set autoLevelCapping:' + newLevel);
      this._autoLevelCapping = newLevel;
    }

    /* check if we are in automatic level selection mode */

  }, {
    key: 'autoLevelEnabled',
    get: function get() {
      return this.levelController.manualLevel === -1;
    }

    /* return manual level */

  }, {
    key: 'manualLevel',
    get: function get() {
      return this.levelController.manualLevel;
    }

    /* return min level selectable in auto mode according to config.minAutoBitrate */

  }, {
    key: 'minAutoLevel',
    get: function get() {
      var hls = this,
          levels = hls.levels,
          minAutoBitrate = hls.config.minAutoBitrate,
          len = levels ? levels.length : 0;
      for (var i = 0; i < len; i++) {
        var levelNextBitrate = levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate;
        if (levelNextBitrate > minAutoBitrate) {
          return i;
        }
      }
      return 0;
    }

    /* return max level selectable in auto mode according to autoLevelCapping */

  }, {
    key: 'maxAutoLevel',
    get: function get() {
      var hls = this;
      var levels = hls.levels;
      var autoLevelCapping = hls.autoLevelCapping;
      var maxAutoLevel = void 0;
      if (autoLevelCapping === -1 && levels && levels.length) {
        maxAutoLevel = levels.length - 1;
      } else {
        maxAutoLevel = autoLevelCapping;
      }
      return maxAutoLevel;
    }

    // return next auto level

  }, {
    key: 'nextAutoLevel',
    get: function get() {
      var hls = this;
      // ensure next auto level is between  min and max auto level
      return Math.min(Math.max(hls.abrController.nextAutoLevel, hls.minAutoLevel), hls.maxAutoLevel);
    }

    // this setter is used to force next auto level
    // this is useful to force a switch down in auto mode : in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
    // forced value is valid for one fragment. upon succesful frag loading at forced level, this value will be resetted to -1 by ABR controller
    ,
    set: function set(nextLevel) {
      var hls = this;
      hls.abrController.nextAutoLevel = Math.max(hls.minAutoLevel, nextLevel);
    }

    /** get alternate audio tracks list from playlist **/

  }, {
    key: 'audioTracks',
    get: function get() {
      var audioTrackController = this.audioTrackController;
      return audioTrackController ? audioTrackController.audioTracks : [];
    }

    /** get index of the selected audio track (index in audio track lists) **/

  }, {
    key: 'audioTrack',
    get: function get() {
      var audioTrackController = this.audioTrackController;
      return audioTrackController ? audioTrackController.audioTrack : -1;
    }

    /** select an audio track, based on its index in audio track lists**/
    ,
    set: function set(audioTrackId) {
      var audioTrackController = this.audioTrackController;
      if (audioTrackController) {
        audioTrackController.audioTrack = audioTrackId;
      }
    }
  }, {
    key: 'liveSyncPosition',
    get: function get() {
      return this.streamController.liveSyncPosition;
    }

    /** get alternate subtitle tracks list from playlist **/

  }, {
    key: 'subtitleTracks',
    get: function get() {
      var subtitleTrackController = this.subtitleTrackController;
      return subtitleTrackController ? subtitleTrackController.subtitleTracks : [];
    }

    /** get index of the selected subtitle track (index in subtitle track lists) **/

  }, {
    key: 'subtitleTrack',
    get: function get() {
      var subtitleTrackController = this.subtitleTrackController;
      return subtitleTrackController ? subtitleTrackController.subtitleTrack : -1;
    }

    /** select an subtitle track, based on its index in subtitle track lists**/
    ,
    set: function set(subtitleTrackId) {
      var subtitleTrackController = this.subtitleTrackController;
      if (subtitleTrackController) {
        subtitleTrackController.subtitleTrack = subtitleTrackId;
      }
    }
  }]);

  return Hls;
}();

/* harmony default export */ var src_hls = __webpack_exports__["default"] = (hls_Hls);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (module) {
  var retval = []
  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval

  var webpackRequireName = wrapperSignature[1]
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + '\\((\/\\*.*?\\*\/)?\s?.*?([\\.|\\-|\\w|\/|@]+).*?\\)', 'g') // additional chars when output.pathinfo is true
  var match
  while ((match = re.exec(fnString))) {
    retval.push(match[3])
  }
  return retval
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = [moduleId]
  var requiredModules = []
  var seenModules = {}

  while (modulesQueue.length) {
    var moduleToCheck = modulesQueue.pop()
    if (seenModules[moduleToCheck] || !sources[moduleToCheck]) continue
    seenModules[moduleToCheck] = true
    requiredModules.push(moduleToCheck)
    var newModules = getModuleDependencies(sources[moduleToCheck])
    modulesQueue = modulesQueue.concat(newModules)
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = __webpack_require__.m

  var requiredModules = options.all ? Object.keys(sources) : getRequiredModules(sources, moduleId)
  var src = '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[id].toString() }).join(',') + '})(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demux_demuxer_inline__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_events__);
/* demuxer web worker.
 *  - listen to worker message, and trigger DemuxerInline upon reception of Fragments.
 *  - provides MP4 Boxes back to main thread using [transferable objects](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) in order to minimize message passing overhead.
 */






var DemuxerWorker = function DemuxerWorker(self) {
  // observer setup
  var observer = new __WEBPACK_IMPORTED_MODULE_3_events___default.a();
  observer.trigger = function trigger(event) {
    for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }

    observer.emit.apply(observer, [event, event].concat(data));
  };

  observer.off = function off(event) {
    for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      data[_key2 - 1] = arguments[_key2];
    }

    observer.removeListener.apply(observer, [event].concat(data));
  };

  var forwardMessage = function forwardMessage(ev, data) {
    self.postMessage({ event: ev, data: data });
  };

  self.addEventListener('message', function (ev) {
    var data = ev.data;
    //console.log('demuxer cmd:' + data.cmd);
    switch (data.cmd) {
      case 'init':
        var config = JSON.parse(data.config);
        self.demuxer = new __WEBPACK_IMPORTED_MODULE_0__demux_demuxer_inline__["a" /* default */](observer, data.typeSupported, config, data.vendor);
        try {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_logger__["a" /* enableLogs */])(config.debug === true);
        } catch (err) {
          console.warn('demuxerWorker: unable to enable logs');
        }
        // signal end of worker init
        forwardMessage('init', null);
        break;
      case 'demux':
        self.demuxer.push(data.data, data.decryptdata, data.initSegment, data.audioCodec, data.videoCodec, data.timeOffset, data.discontinuity, data.trackSwitch, data.contiguous, data.duration, data.accurateTimeOffset, data.defaultInitPTS);
        break;
      default:
        break;
    }
  });

  // forward events to main thread
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_DECRYPTED, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_PARSING_INIT_SEGMENT, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_PARSED, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].ERROR, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_PARSING_METADATA, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_PARSING_USERDATA, forwardMessage);
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].INIT_PTS_FOUND, forwardMessage);

  // special case for FRAG_PARSING_DATA: pass data1/data2 as transferable object (no copy)
  observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */].FRAG_PARSING_DATA, function (ev, data) {
    var transferable = [];
    var message = { event: ev, data: data };
    if (data.data1) {
      message.data1 = data.data1.buffer;
      transferable.push(data.data1.buffer);
      delete data.data1;
    }
    if (data.data2) {
      message.data2 = data.data2.buffer;
      transferable.push(data.data2.buffer);
      delete data.data2;
    }
    self.postMessage(message, transferable);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DemuxerWorker);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=hls.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(8);

var _DisconnectDetector = __webpack_require__(0);

var _DisconnectDetector2 = _interopRequireDefault(_DisconnectDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//alert(SLDP);

//TODO покумекать на тему события play
var SLDPPlayer = function () {
    function SLDPPlayer(src, room, params) {
        var _this = this;

        _classCallCheck(this, SLDPPlayer);

        console.log("1");
        //document.addEventListener("DOMContentLoaded", ()=>{
        //setTimeout(()=>{
        //console.log("2");
        console.log("create instance SLDP");

        //console.log("sldp params", params);
        this._onCanPlay = this._onCanPlay.bind(this);

        var wrapper = document.getElementById("sldp_player_wrapper");
        //alert("autoplay");
        //alert(667);
        //console.log("sldp = ", SLDP);

        this.instance = SLDP.init({
            container: 'sldp_player_wrapper',
            //stream_url: "ws://192.168.56.1:8081/live/test",
            stream_url: src + "/" + room,
            buffering: 1000,
            height: parseInt(params.height), //"100%",
            width: parseInt(params.width),
            latency_tolerance: 5500,
            //offset:1,	//позволяет ускорить запуск
            autoplay: false
        });
        console.log("sldp instance");
        console.log(this.instance);

        var video = this.video = wrapper.getElementsByTagName("video")[0];
        //video.setAttribute("muted", true);
        //alert(video.getAttribute("muted"));/
        //video.autoplay = "false";
        video.muted = true;

        console.log("video=", video, SLDP);
        //video.pause();


        //var ctrl = wrapper.querySelector(".sldp_cbar");
        //ctrl.style.visibility = "hidden";

        //this.video.addEventListener("canplay", this._onCanPlay);

        //this.video.setAttribute("playsinline");
        /*this.video.addEventListener("play",()=>{
            alert("play");
        });*/

        /*document.getElementById("clickme").addEventListener("click",()=>{
            alert(["Благодарим вас за клик", video]);
            video.play();
        })
        video.play();*/

        this.detector = new _DisconnectDetector2.default(this.video, 20000);
        this.detector.debugPrefix = "sldp";
        this.detector.stopWatch();
        //this.detector.startWatch();

        this.video.addEventListener("pause", function () {
            _this.detector.stopWatch();
            console.log("sldp -> pause");
        });

        this.detector.onDisconnect = function () {
            _this.needRestart = true;
            console.log("sldp -> disconnect ");
        };

        //console.log("---=== работает плеер SLDP ===---");
        console.log("create instance SLDP 2");
        //}, 5000);
    }

    _createClass(SLDPPlayer, [{
        key: "isPaused",
        value: function isPaused() {
            return this.video.paused;
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            var video = this.video;
            if (!video) return;
            /*console.log({
                currentTime: video.currentTime,
                paused:  video.paused,
                readyState: video.readyState
            });*/
            var r = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
            //console.log("r=", r);
            return r;
        }
    }, {
        key: "play",
        value: function play() {
            this.video.muted = false;

            if (this.isPlay) return;

            //console.log("-----------");

            if (!this.isPlaying()) {
                $(".sldp_play_pause_btn").click();
                this.detector.startWatch(); // начали отслеживать при запуске
            }

            this.isPlay = true;
            //this.video.removeAttribute("muted", false);
            //alert(this.video.getAttribute("muted"));
        }
    }, {
        key: "pause",
        value: function pause() {
            this.video.muted = true;

            console.log("-> SLDP PAUSE FUNCTION");
            if (this.isPlaying()) $(".sldp_play_pause_btn").click();
            this.isPlay = false;
            this.detector.stopWatch(); //остановились в случае паузы
            //this.video.removeAttribute("muted", true);
            //alert(this.video.getAttribute("muted"));        
        }
    }, {
        key: "_onCanPlay",
        value: function _onCanPlay() {
            console.log("oncan play");
            this.canPlay = true;
            if (this.onCanPlay) this.onCanPlay();
        }
    }, {
        key: "destroy",
        value: function destroy(room) {
            console.log("sldp -> destroy");
            this.instance.destroy();
            this.detector.destroy();
        }
    }], [{
        key: "isSupported",
        value: function isSupported() {
            return true;
        }
    }]);

    return SLDPPlayer;
}();

exports.default = SLDPPlayer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SLDP = function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
  }var n = {};return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 326);
}([function (t, e, n) {
  var r = n(2),
      i = n(25),
      o = n(13),
      s = n(14),
      a = n(26),
      u = function u(t, e, n) {
    var c,
        f,
        l,
        h,
        d = t & u.F,
        p = t & u.G,
        v = t & u.S,
        m = t & u.P,
        g = t & u.B,
        _ = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
        b = p ? i : i[e] || (i[e] = {}),
        A = b.prototype || (b.prototype = {});p && (n = e);for (c in n) {
      l = ((f = !d && _ && void 0 !== _[c]) ? _ : n)[c], h = g && f ? a(l, r) : m && "function" == typeof l ? a(Function.call, l) : l, _ && s(_, c, l, t & u.U), b[c] != l && o(b, c, h), m && A[c] != l && (A[c] = l);
    }
  };r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
}, function (t, e, n) {
  var r = n(4);t.exports = function (t) {
    if (!r(t)) throw TypeError(t + " is not an object!");return t;
  };
}, function (t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
  };
}, function (t, e, n) {
  var r = n(59)("wks"),
      i = n(40),
      o = n(2).Symbol,
      s = "function" == typeof o;(t.exports = function (t) {
    return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t));
  }).store = r;
}, function (t, e, n) {
  t.exports = !n(3)(function () {
    return 7 != Object.defineProperty({}, "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e, n) {
  var r = n(1),
      i = n(99),
      o = n(24),
      s = Object.defineProperty;e.f = n(6) ? Object.defineProperty : function (t, e, n) {
    if (r(t), e = o(e, !0), r(n), i) try {
      return s(t, e, n);
    } catch (t) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
  };
}, function (t, e, n) {
  var r = n(31),
      i = Math.min;t.exports = function (t) {
    return t > 0 ? i(r(t), 9007199254740991) : 0;
  };
}, function (t, e, n) {
  var r = n(20);t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e) {
  var n = {}.hasOwnProperty;t.exports = function (t, e) {
    return n.call(t, e);
  };
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
    var t = "error",
        e = !1,
        n = function n() {
      if (console.log.apply(console, arguments), e) {
        var t = Array.prototype.slice.call(arguments),
            n = document.createElement("div"),
            r = document.createTextNode(t.join(" "));n.appendChild(r), e.appendChild(n), 30 < e.children.length && e.removeChild(e.children[0]), e.scrollTop = e.scrollHeight;
      }
    };return { setLevel: function setLevel(e) {
        t = e;
      }, setDiv: function setDiv(t) {
        "string" == typeof t && (e = document.getElementById(t));
      }, debug: function debug() {
        "debug" == t && n.apply(this, arguments);
      }, warn: function warn() {
        "warn" != t && "debug" != t || n.apply(this, arguments);
      }, error: function error() {
        n.apply(this, arguments);
      } };
  }();e.default = r;
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
  };
}, function (t, e, n) {
  var r = n(7),
      i = n(30);t.exports = n(6) ? function (t, e, n) {
    return r.f(t, e, i(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  };
}, function (t, e, n) {
  var r = n(2),
      i = n(13),
      o = n(10),
      s = n(40)("src"),
      a = Function.toString,
      u = ("" + a).split("toString");n(25).inspectSource = function (t) {
    return a.call(t);
  }, (t.exports = function (t, e, n, a) {
    var c = "function" == typeof n;c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, s) || i(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && this[s] || a.call(this);
  });
}, function (t, e, n) {
  var r = n(0),
      i = n(3),
      o = n(20),
      s = function s(t, e, n, r) {
    var i = String(o(t)),
        s = "<" + e;return "" !== n && (s += " " + n + '="' + String(r).replace(/"/g, "&quot;") + '"'), s + ">" + i + "</" + e + ">";
  };t.exports = function (t, e) {
    var n = {};n[t] = e(s), r(r.P + r.F * i(function () {
      var e = ""[t]('"');return e !== e.toLowerCase() || e.split('"').length > 3;
    }), "String", n);
  };
}, function (t, e, n) {
  var r = n(47),
      i = n(20);t.exports = function (t) {
    return r(i(t));
  };
}, function (t, e, n) {
  var r = n(48),
      i = n(30),
      o = n(16),
      s = n(24),
      a = n(10),
      u = n(99),
      c = Object.getOwnPropertyDescriptor;e.f = n(6) ? c : function (t, e) {
    if (t = o(t), e = s(e, !0), u) try {
      return c(t, e);
    } catch (t) {}if (a(t, e)) return i(!r.f.call(t, e), t[e]);
  };
}, function (t, e, n) {
  var r = n(10),
      i = n(9),
      o = n(77)("IE_PROTO"),
      s = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
    return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
  };
}, function (t, e) {
  var n = {}.toString;t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
  };
}, function (t, e, n) {
  var r = n(3);t.exports = function (t, e) {
    return !!t && r(function () {
      e ? t.call(null, function () {}, 1) : t.call(null);
    });
  };
}, function (t, e, n) {
  var r = n(26),
      i = n(47),
      o = n(9),
      s = n(8),
      a = n(145);t.exports = function (t, e) {
    var n = 1 == t,
        u = 2 == t,
        c = 3 == t,
        f = 4 == t,
        l = 6 == t,
        h = 5 == t || l,
        d = e || a;return function (e, a, p) {
      for (var v, m, g = o(e), _ = i(g), b = r(a, p, 3), A = s(_.length), y = 0, w = n ? d(e, A) : u ? d(e, 0) : void 0; A > y; y++) {
        if ((h || y in _) && (v = _[y], m = b(v, y, g), t)) if (n) w[y] = m;else if (m) switch (t) {case 3:
            return !0;case 5:
            return v;case 6:
            return y;case 2:
            w.push(v);} else if (f) return !1;
      }return l ? -1 : c || f ? f : w;
    };
  };
}, function (t, e, n) {
  var r = n(0),
      i = n(25),
      o = n(3);t.exports = function (t, e) {
    var n = (i.Object || {})[t] || Object[t],
        s = {};s[t] = e(n), r(r.S + r.F * o(function () {
      n(1);
    }), "Object", s);
  };
}, function (t, e, n) {
  var r = n(4);t.exports = function (t, e) {
    if (!r(t)) return t;var n, i;if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e) {
  var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
}, function (t, e, n) {
  var r = n(12);t.exports = function (t, e, n) {
    if (r(t), void 0 === e) return t;switch (n) {case 1:
        return function (n) {
          return t.call(e, n);
        };case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };case 3:
        return function (n, r, i) {
          return t.call(e, n, r, i);
        };}return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(115),
      i = n(0),
      o = n(59)("metadata"),
      s = o.store || (o.store = new (n(118))()),
      a = function a(t, e, n) {
    var i = s.get(t);if (!i) {
      if (!n) return;s.set(t, i = new r());
    }var o = i.get(e);if (!o) {
      if (!n) return;i.set(e, o = new r());
    }return o;
  };t.exports = { store: s, map: a, has: function has(t, e, n) {
      var r = a(e, n, !1);return void 0 !== r && r.has(t);
    }, get: function get(t, e, n) {
      var r = a(e, n, !1);return void 0 === r ? void 0 : r.get(t);
    }, set: function set(t, e, n, r) {
      a(n, r, !0).set(t, e);
    }, keys: function keys(t, e) {
      var n = a(t, e, !1),
          r = [];return n && n.forEach(function (t, e) {
        r.push(e);
      }), r;
    }, key: function key(t) {
      return void 0 === t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : String(t);
    }, exp: function exp(t) {
      i(i.S, "Reflect", t);
    } };
}, function (t, e, n) {
  "use strict";
  if (n(6)) {
    var r = n(33),
        i = n(2),
        o = n(3),
        s = n(0),
        a = n(60),
        u = n(84),
        c = n(26),
        f = n(32),
        l = n(30),
        h = n(13),
        d = n(37),
        p = n(31),
        v = n(8),
        m = n(39),
        g = n(24),
        _ = n(10),
        b = n(112),
        A = n(46),
        y = n(4),
        w = n(9),
        S = n(69),
        x = n(34),
        E = n(18),
        T = n(35).f,
        k = n(86),
        C = n(40),
        F = n(5),
        B = n(22),
        M = n(50),
        P = n(78),
        I = n(87),
        L = n(43),
        O = n(56),
        R = n(38),
        D = n(62),
        N = n(92),
        j = n(7),
        U = n(17),
        V = j.f,
        W = U.f,
        z = i.RangeError,
        Q = i.TypeError,
        Y = i.Uint8Array,
        H = Array.prototype,
        G = u.ArrayBuffer,
        q = u.DataView,
        J = B(0),
        K = B(2),
        X = B(3),
        Z = B(4),
        $ = B(5),
        tt = B(6),
        et = M(!0),
        nt = M(!1),
        rt = I.values,
        it = I.keys,
        ot = I.entries,
        st = H.lastIndexOf,
        at = H.reduce,
        ut = H.reduceRight,
        ct = H.join,
        ft = H.sort,
        lt = H.slice,
        ht = H.toString,
        dt = H.toLocaleString,
        pt = F("iterator"),
        vt = F("toStringTag"),
        mt = C("typed_constructor"),
        gt = C("def_constructor"),
        _t = a.CONSTR,
        bt = a.TYPED,
        At = a.VIEW,
        yt = B(1, function (t, e) {
      return kt(P(t, t[gt]), e);
    }),
        wt = o(function () {
      return 1 === new Y(new Uint16Array([1]).buffer)[0];
    }),
        St = !!Y && !!Y.prototype.set && o(function () {
      new Y(1).set({});
    }),
        xt = function xt(t, e) {
      if (void 0 === t) throw Q("Wrong length!");var n = +t,
          r = v(t);if (e && !b(n, r)) throw z("Wrong length!");return r;
    },
        Et = function Et(t, e) {
      var n = p(t);if (n < 0 || n % e) throw z("Wrong offset!");return n;
    },
        Tt = function Tt(t) {
      if (y(t) && bt in t) return t;throw Q(t + " is not a typed array!");
    },
        kt = function kt(t, e) {
      if (!(y(t) && mt in t)) throw Q("It is not a typed array constructor!");return new t(e);
    },
        Ct = function Ct(t, e) {
      return Ft(P(t, t[gt]), e);
    },
        Ft = function Ft(t, e) {
      for (var n = 0, r = e.length, i = kt(t, r); r > n;) {
        i[n] = e[n++];
      }return i;
    },
        Bt = function Bt(t, e, n) {
      V(t, e, { get: function get() {
          return this._d[n];
        } });
    },
        Mt = function Mt(t) {
      var e,
          n,
          r,
          i,
          o,
          s,
          a = w(t),
          u = arguments.length,
          f = u > 1 ? arguments[1] : void 0,
          l = void 0 !== f,
          h = k(a);if (void 0 != h && !S(h)) {
        for (s = h.call(a), r = [], e = 0; !(o = s.next()).done; e++) {
          r.push(o.value);
        }a = r;
      }for (l && u > 2 && (f = c(f, arguments[2], 2)), e = 0, n = v(a.length), i = kt(this, n); n > e; e++) {
        i[e] = l ? f(a[e], e) : a[e];
      }return i;
    },
        Pt = function Pt() {
      for (var t = 0, e = arguments.length, n = kt(this, e); e > t;) {
        n[t] = arguments[t++];
      }return n;
    },
        It = !!Y && o(function () {
      dt.call(new Y(1));
    }),
        Lt = function Lt() {
      return dt.apply(It ? lt.call(Tt(this)) : Tt(this), arguments);
    },
        Ot = { copyWithin: function copyWithin(t, e) {
        return N.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
      }, every: function every(t) {
        return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, fill: function fill(t) {
        return D.apply(Tt(this), arguments);
      }, filter: function filter(t) {
        return Ct(this, K(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0));
      }, find: function find(t) {
        return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, findIndex: function findIndex(t) {
        return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, forEach: function forEach(t) {
        J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, indexOf: function indexOf(t) {
        return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, includes: function includes(t) {
        return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, join: function join(t) {
        return ct.apply(Tt(this), arguments);
      }, lastIndexOf: function lastIndexOf(t) {
        return st.apply(Tt(this), arguments);
      }, map: function map(t) {
        return yt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, reduce: function reduce(t) {
        return at.apply(Tt(this), arguments);
      }, reduceRight: function reduceRight(t) {
        return ut.apply(Tt(this), arguments);
      }, reverse: function reverse() {
        for (var t, e = this, n = Tt(e).length, r = Math.floor(n / 2), i = 0; i < r;) {
          t = e[i], e[i++] = e[--n], e[n] = t;
        }return e;
      }, some: function some(t) {
        return X(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
      }, sort: function sort(t) {
        return ft.call(Tt(this), t);
      }, subarray: function subarray(t, e) {
        var n = Tt(this),
            r = n.length,
            i = m(t, r);return new (P(n, n[gt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? r : m(e, r)) - i));
      } },
        Rt = function Rt(t, e) {
      return Ct(this, lt.call(Tt(this), t, e));
    },
        Dt = function Dt(t) {
      Tt(this);var e = Et(arguments[1], 1),
          n = this.length,
          r = w(t),
          i = v(r.length),
          o = 0;if (i + e > n) throw z("Wrong length!");for (; o < i;) {
        this[e + o] = r[o++];
      }
    },
        Nt = { entries: function entries() {
        return ot.call(Tt(this));
      }, keys: function keys() {
        return it.call(Tt(this));
      }, values: function values() {
        return rt.call(Tt(this));
      } },
        jt = function jt(t, e) {
      return y(t) && t[bt] && "symbol" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && e in t && String(+e) == String(e);
    },
        Ut = function Ut(t, e) {
      return jt(t, e = g(e, !0)) ? l(2, t[e]) : W(t, e);
    },
        Vt = function Vt(t, e, n) {
      return !(jt(t, e = g(e, !0)) && y(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? V(t, e, n) : (t[e] = n.value, t);
    };_t || (U.f = Ut, j.f = Vt), s(s.S + s.F * !_t, "Object", { getOwnPropertyDescriptor: Ut, defineProperty: Vt }), o(function () {
      ht.call({});
    }) && (ht = dt = function dt() {
      return ct.call(this);
    });var Wt = d({}, Ot);d(Wt, Nt), h(Wt, pt, Nt.values), d(Wt, { slice: Rt, set: Dt, constructor: function constructor() {}, toString: ht, toLocaleString: Lt }), Bt(Wt, "buffer", "b"), Bt(Wt, "byteOffset", "o"), Bt(Wt, "byteLength", "l"), Bt(Wt, "length", "e"), V(Wt, vt, { get: function get() {
        return this[bt];
      } }), t.exports = function (t, e, n, u) {
      var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
          l = "Uint8Array" != c,
          d = "get" + t,
          p = "set" + t,
          m = i[c],
          g = m || {},
          _ = m && E(m),
          b = !m || !a.ABV,
          w = {},
          S = m && m.prototype,
          k = function k(t, n) {
        var r = t._d;return r.v[d](n * e + r.o, wt);
      },
          C = function C(t, n, r) {
        var i = t._d;u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, wt);
      },
          F = function F(t, e) {
        V(t, e, { get: function get() {
            return k(this, e);
          }, set: function set(t) {
            return C(this, e, t);
          }, enumerable: !0 });
      };b ? (m = n(function (t, n, r, i) {
        f(t, m, c, "_d");var o,
            s,
            a,
            u,
            l = 0,
            d = 0;if (y(n)) {
          if (!(n instanceof G || "ArrayBuffer" == (u = A(n)) || "SharedArrayBuffer" == u)) return bt in n ? Ft(m, n) : Mt.call(m, n);o = n, d = Et(r, e);var p = n.byteLength;if (void 0 === i) {
            if (p % e) throw z("Wrong length!");if ((s = p - d) < 0) throw z("Wrong length!");
          } else if ((s = v(i) * e) + d > p) throw z("Wrong length!");a = s / e;
        } else a = xt(n, !0), o = new G(s = a * e);for (h(t, "_d", { b: o, o: d, l: s, e: a, v: new q(o) }); l < a;) {
          F(t, l++);
        }
      }), S = m.prototype = x(Wt), h(S, "constructor", m)) : O(function (t) {
        new m(null), new m(t);
      }, !0) || (m = n(function (t, n, r, i) {
        f(t, m, c);var o;return y(n) ? n instanceof G || "ArrayBuffer" == (o = A(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new g(n, Et(r, e), i) : void 0 !== r ? new g(n, Et(r, e)) : new g(n) : bt in n ? Ft(m, n) : Mt.call(m, n) : new g(xt(n, l));
      }), J(_ !== Function.prototype ? T(g).concat(T(_)) : T(g), function (t) {
        t in m || h(m, t, g[t]);
      }), m.prototype = S, r || (S.constructor = m));var B = S[pt],
          M = !!B && ("values" == B.name || void 0 == B.name),
          P = Nt.values;h(m, mt, !0), h(S, bt, c), h(S, At, !0), h(S, gt, m), (u ? new m(1)[vt] == c : vt in S) || V(S, vt, { get: function get() {
          return c;
        } }), w[c] = m, s(s.G + s.W + s.F * (m != g), w), s(s.S, c, { BYTES_PER_ELEMENT: e, from: Mt, of: Pt }), "BYTES_PER_ELEMENT" in S || h(S, "BYTES_PER_ELEMENT", e), s(s.P, c, Ot), R(c), s(s.P + s.F * St, c, { set: Dt }), s(s.P + s.F * !M, c, Nt), s(s.P + s.F * (S.toString != ht), c, { toString: ht }), s(s.P + s.F * o(function () {
        new m(1).slice();
      }), c, { slice: Rt }), s(s.P + s.F * (o(function () {
        return [1, 2].toLocaleString() != new m([1, 2]).toLocaleString();
      }) || !o(function () {
        S.toLocaleString.call([1, 2]);
      })), c, { toLocaleString: Lt }), L[c] = M ? B : P, r || M || h(S, pt, P);
    };
  } else t.exports = function () {};
}, function (t, e, n) {
  var r = n(40)("meta"),
      i = n(4),
      o = n(10),
      s = n(7).f,
      a = 0,
      u = Object.isExtensible || function () {
    return !0;
  },
      c = !n(3)(function () {
    return u(Object.preventExtensions({}));
  }),
      f = function f(t) {
    s(t, r, { value: { i: "O" + ++a, w: {} } });
  },
      l = t.exports = { KEY: r, NEED: !1, fastKey: function fastKey(t, e) {
      if (!i(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!o(t, r)) {
        if (!u(t)) return "F";if (!e) return "E";f(t);
      }return t[r].i;
    }, getWeak: function getWeak(t, e) {
      if (!o(t, r)) {
        if (!u(t)) return !0;if (!e) return !1;f(t);
      }return t[r].w;
    }, onFreeze: function onFreeze(t) {
      return c && l.NEED && u(t) && !o(t, r) && f(t), t;
    } };
}, function (t, e) {
  t.exports = function (t, e) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
  };
}, function (t, e) {
  var n = Math.ceil,
      r = Math.floor;t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
  };
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");return t;
  };
}, function (t, e) {
  t.exports = !1;
}, function (t, e, n) {
  var r = n(1),
      i = n(105),
      o = n(65),
      s = n(77)("IE_PROTO"),
      a = function a() {},
      _u = function u() {
    var t,
        e = n(64)("iframe"),
        r = o.length;for (e.style.display = "none", n(67).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), _u = t.F; r--;) {
      delete _u.prototype[o[r]];
    }return _u();
  };t.exports = Object.create || function (t, e) {
    var n;return null !== t ? (a.prototype = r(t), n = new a(), a.prototype = null, n[s] = t) : n = _u(), void 0 === e ? n : i(n, e);
  };
}, function (t, e, n) {
  var r = n(107),
      i = n(65).concat("length", "prototype");e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  var r = n(107),
      i = n(65);t.exports = Object.keys || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  var r = n(14);t.exports = function (t, e, n) {
    for (var i in e) {
      r(t, i, e[i], n);
    }return t;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      i = n(7),
      o = n(6),
      s = n(5)("species");t.exports = function (t) {
    var e = r[t];o && e && !e[s] && i.f(e, s, { configurable: !0, get: function get() {
        return this;
      } });
  };
}, function (t, e, n) {
  var r = n(31),
      i = Math.max,
      o = Math.min;t.exports = function (t, e) {
    return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
  };
}, function (t, e) {
  var n = 0,
      r = Math.random();t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
  };
}, function (t, e, n) {
  var r = n(5)("unscopables"),
      i = Array.prototype;void 0 == i[r] && n(13)(i, r, {}), t.exports = function (t) {
    i[r][t] = !0;
  };
}, function (t, e, n) {
  var r = n(26),
      i = n(101),
      o = n(69),
      s = n(1),
      a = n(8),
      u = n(86),
      c = {},
      f = {};(e = t.exports = function (t, e, n, l, h) {
    var d,
        p,
        v,
        m,
        g = h ? function () {
      return t;
    } : u(t),
        _ = r(n, l, e ? 2 : 1),
        b = 0;if ("function" != typeof g) throw TypeError(t + " is not iterable!");if (o(g)) {
      for (d = a(t.length); d > b; b++) {
        if ((m = e ? _(s(p = t[b])[0], p[1]) : _(t[b])) === c || m === f) return m;
      }
    } else for (v = g.call(t); !(p = v.next()).done;) {
      if ((m = i(v, _, p.value, e)) === c || m === f) return m;
    }
  }).BREAK = c, e.RETURN = f;
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(7).f,
      i = n(10),
      o = n(5)("toStringTag");t.exports = function (t, e, n) {
    t && !i(t = n ? t : t.prototype, o) && r(t, o, { configurable: !0, value: e });
  };
}, function (t, e, n) {
  var r = n(0),
      i = n(20),
      o = n(3),
      s = n(82),
      a = "[" + s + "]",
      u = RegExp("^" + a + a + "*"),
      c = RegExp(a + a + "*$"),
      f = function f(t, e, n) {
    var i = {},
        a = o(function () {
      return !!s[t]() || "​" != "​"[t]();
    }),
        u = i[t] = a ? e(l) : s[t];n && (i[n] = u), r(r.P + r.F * a, "String", i);
  },
      l = f.trim = function (t, e) {
    return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t;
  };t.exports = f;
}, function (t, e, n) {
  var r = n(19),
      i = n(5)("toStringTag"),
      o = "Arguments" == r(function () {
    return arguments;
  }()),
      s = function s(t, e) {
    try {
      return t[e];
    } catch (t) {}
  };t.exports = function (t) {
    var e, n, a;return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
  };
}, function (t, e, n) {
  var r = n(19);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == r(t) ? t.split("") : Object(t);
  };
}, function (t, e) {
  e.f = {}.propertyIsEnumerable;
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
    this.offset = void 0 === t ? 0 : t;
  };
}, function (t, e, n) {
  var r = n(16),
      i = n(8),
      o = n(39);t.exports = function (t) {
    return function (e, n, s) {
      var a,
          u = r(e),
          c = i(u.length),
          f = o(s, c);if (t && n != n) {
        for (; c > f;) {
          if ((a = u[f++]) != a) return !0;
        }
      } else for (; c > f; f++) {
        if ((t || f in u) && u[f] === n) return t || f || 0;
      }return !t && -1;
    };
  };
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      i = n(0),
      o = n(14),
      s = n(37),
      a = n(29),
      u = n(42),
      c = n(32),
      f = n(4),
      l = n(3),
      h = n(56),
      d = n(44),
      p = n(68);t.exports = function (t, e, n, v, m, g) {
    var _ = r[t],
        b = _,
        A = m ? "set" : "add",
        y = b && b.prototype,
        w = {},
        S = function S(t) {
      var e = y[t];o(y, t, "delete" == t ? function (t) {
        return !(g && !f(t)) && e.call(this, 0 === t ? 0 : t);
      } : "has" == t ? function (t) {
        return !(g && !f(t)) && e.call(this, 0 === t ? 0 : t);
      } : "get" == t ? function (t) {
        return g && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
      } : "add" == t ? function (t) {
        return e.call(this, 0 === t ? 0 : t), this;
      } : function (t, n) {
        return e.call(this, 0 === t ? 0 : t, n), this;
      });
    };if ("function" == typeof b && (g || y.forEach && !l(function () {
      new b().entries().next();
    }))) {
      var x = new b(),
          E = x[A](g ? {} : -0, 1) != x,
          T = l(function () {
        x.has(1);
      }),
          k = h(function (t) {
        new b(t);
      }),
          C = !g && l(function () {
        for (var t = new b(), e = 5; e--;) {
          t[A](e, e);
        }return !t.has(-0);
      });k || ((b = e(function (e, n) {
        c(e, b, t);var r = p(new _(), e, b);return void 0 != n && u(n, m, r[A], r), r;
      })).prototype = y, y.constructor = b), (T || C) && (S("delete"), S("has"), m && S("get")), (C || E) && S(A), g && y.clear && delete y.clear;
    } else b = v.getConstructor(e, t, m, A), s(b.prototype, n), a.NEED = !0;return d(b, t), w[t] = b, i(i.G + i.W + i.F * (b != _), w), g || v.setStrong(b, t, m), b;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(13),
      i = n(14),
      o = n(3),
      s = n(20),
      a = n(5);t.exports = function (t, e, n) {
    var u = a(t),
        c = n(s, u, ""[t]),
        f = c[0],
        l = c[1];o(function () {
      var e = {};return e[u] = function () {
        return 7;
      }, 7 != ""[t](e);
    }) && (i(String.prototype, t, f), r(RegExp.prototype, u, 2 == e ? function (t, e) {
      return l.call(t, this, e);
    } : function (t) {
      return l.call(t, this);
    }));
  };
}, function (t, e, n) {
  "use strict";
  var r = n(1);t.exports = function () {
    var t = r(this),
        e = "";return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    var r = void 0 === n;switch (e.length) {case 0:
        return r ? t() : t.call(n);case 1:
        return r ? t(e[0]) : t.call(n, e[0]);case 2:
        return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);case 3:
        return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);case 4:
        return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);}return t.apply(n, e);
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(19),
      o = n(5)("match");t.exports = function (t) {
    var e;return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
  };
}, function (t, e, n) {
  var r = n(5)("iterator"),
      i = !1;try {
    var o = [7][r]();o.return = function () {
      i = !0;
    }, Array.from(o, function () {
      throw 2;
    });
  } catch (t) {}t.exports = function (t, e) {
    if (!e && !i) return !1;var n = !1;try {
      var o = [7],
          s = o[r]();s.next = function () {
        return { done: n = !0 };
      }, o[r] = function () {
        return s;
      }, t(o);
    } catch (t) {}return n;
  };
}, function (t, e, n) {
  t.exports = n(33) || !n(3)(function () {
    var t = Math.random();__defineSetter__.call(null, t, function () {}), delete n(2)[t];
  });
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(2),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});t.exports = function (t) {
    return i[t] || (i[t] = {});
  };
}, function (t, e, n) {
  for (var r, i = n(2), o = n(13), s = n(40), a = s("typed_array"), u = s("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;) {
    (r = i[h[l++]]) ? (o(r.prototype, a, !0), o(r.prototype, u, !0)) : f = !1;
  }t.exports = { ABV: c, CONSTR: f, TYPED: a, VIEW: u };
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = new function () {
    var t = {};this.init = function (e) {
      if (e) for (var n in e) {
        var r = document.getElementById(e[n]);r && (t[n] = r);
      }
    }, this.display = function (e, n) {
      var r = t[e];r && (r.innerHTML = n);
    };
  }();e.default = r;
}, function (t, e, n) {
  "use strict";
  var r = n(9),
      i = n(39),
      o = n(8);t.exports = function (t) {
    for (var e = r(this), n = o(e.length), s = arguments.length, a = i(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > a;) {
      e[a++] = t;
    }return e;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(7),
      i = n(30);t.exports = function (t, e, n) {
    e in t ? r.f(t, e, i(0, n)) : t[e] = n;
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(2).document,
      o = r(i) && r(i.createElement);t.exports = function (t) {
    return o ? i.createElement(t) : {};
  };
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function (t, e, n) {
  var r = n(5)("match");t.exports = function (t) {
    var e = /./;try {
      "/./"[t](e);
    } catch (n) {
      try {
        return e[r] = !1, !"/./"[t](e);
      } catch (t) {}
    }return !0;
  };
}, function (t, e, n) {
  t.exports = n(2).document && document.documentElement;
}, function (t, e, n) {
  var r = n(4),
      i = n(76).set;t.exports = function (t, e, n) {
    var o,
        s = e.constructor;return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && r(o) && i && i(t, o), t;
  };
}, function (t, e, n) {
  var r = n(43),
      i = n(5)("iterator"),
      o = Array.prototype;t.exports = function (t) {
    return void 0 !== t && (r.Array === t || o[i] === t);
  };
}, function (t, e, n) {
  var r = n(19);t.exports = Array.isArray || function (t) {
    return "Array" == r(t);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(34),
      i = n(30),
      o = n(44),
      s = {};n(13)(s, n(5)("iterator"), function () {
    return this;
  }), t.exports = function (t, e, n) {
    t.prototype = r(s, { next: i(1, n) }), o(t, e + " Iterator");
  };
}, function (t, e, n) {
  "use strict";
  var r = n(33),
      i = n(0),
      o = n(14),
      s = n(13),
      a = n(10),
      u = n(43),
      c = n(71),
      f = n(44),
      l = n(18),
      h = n(5)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = function p() {
    return this;
  };t.exports = function (t, e, n, v, m, g, _) {
    c(n, e, v);var b,
        A,
        y,
        w = function w(t) {
      if (!d && t in T) return T[t];switch (t) {case "keys":case "values":
          return function () {
            return new n(this, t);
          };}return function () {
        return new n(this, t);
      };
    },
        S = e + " Iterator",
        x = "values" == m,
        E = !1,
        T = t.prototype,
        k = T[h] || T["@@iterator"] || m && T[m],
        C = k || w(m),
        F = m ? x ? w("entries") : C : void 0,
        B = "Array" == e ? T.entries || k : k;if (B && (y = l(B.call(new t()))) !== Object.prototype && (f(y, S, !0), r || a(y, h) || s(y, h, p)), x && k && "values" !== k.name && (E = !0, C = function C() {
      return k.call(this);
    }), r && !_ || !d && !E && T[h] || s(T, h, C), u[e] = C, u[S] = p, m) if (b = { values: x ? C : w("values"), keys: g ? C : w("keys"), entries: F }, _) for (A in b) {
      A in T || o(T, A, b[A]);
    } else i(i.P + i.F * (d || E), e, b);return b;
  };
}, function (t, e) {
  var n = Math.expm1;t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
  } : n;
}, function (t, e) {
  t.exports = Math.sign || function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
  };
}, function (t, e, n) {
  var r = n(2),
      i = n(83).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      s = r.process,
      a = r.Promise,
      u = "process" == n(19)(s);t.exports = function () {
    var t,
        e,
        n,
        c = function c() {
      var r, i;for (u && (r = s.domain) && r.exit(); t;) {
        i = t.fn, t = t.next;try {
          i();
        } catch (r) {
          throw t ? n() : e = void 0, r;
        }
      }e = void 0, r && r.enter();
    };if (u) n = function n() {
      s.nextTick(c);
    };else if (o) {
      var f = !0,
          l = document.createTextNode("");new o(c).observe(l, { characterData: !0 }), n = function n() {
        l.data = f = !f;
      };
    } else if (a && a.resolve) {
      var h = a.resolve();n = function n() {
        h.then(c);
      };
    } else n = function n() {
      i.call(r, c);
    };return function (r) {
      var i = { fn: r, next: void 0 };e && (e.next = i), t || (t = i, n()), e = i;
    };
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(1),
      o = function o(t, e) {
    if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
  };t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
      try {
        (r = n(26)(Function.call, n(17).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
      } catch (t) {
        e = !0;
      }return function (t, n) {
        return o(t, n), e ? t.__proto__ = n : r(t, n), t;
      };
    }({}, !1) : void 0), check: o };
}, function (t, e, n) {
  var r = n(59)("keys"),
      i = n(40);t.exports = function (t) {
    return r[t] || (r[t] = i(t));
  };
}, function (t, e, n) {
  var r = n(1),
      i = n(12),
      o = n(5)("species");t.exports = function (t, e) {
    var n,
        s = r(t).constructor;return void 0 === s || void 0 == (n = r(s)[o]) ? e : i(n);
  };
}, function (t, e, n) {
  var r = n(31),
      i = n(20);t.exports = function (t) {
    return function (e, n) {
      var o,
          s,
          a = String(i(e)),
          u = r(n),
          c = a.length;return u < 0 || u >= c ? t ? "" : void 0 : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536;
    };
  };
}, function (t, e, n) {
  var r = n(55),
      i = n(20);t.exports = function (t, e, n) {
    if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");return String(i(t));
  };
}, function (t, e, n) {
  "use strict";
  var r = n(31),
      i = n(20);t.exports = function (t) {
    var e = String(i(this)),
        n = "",
        o = r(t);if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");for (; o > 0; (o >>>= 1) && (e += e)) {
      1 & o && (n += e);
    }return n;
  };
}, function (t, e) {
  t.exports = "\t\n\x0B\f\r \uFFFD \u1680\uFFFD \uFFFD\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
}, function (t, e, n) {
  var r,
      i,
      o,
      s = n(26),
      a = n(54),
      u = n(67),
      c = n(64),
      f = n(2),
      l = f.process,
      h = f.setImmediate,
      d = f.clearImmediate,
      p = f.MessageChannel,
      v = 0,
      m = {},
      g = function g() {
    var t = +this;if (m.hasOwnProperty(t)) {
      var e = m[t];delete m[t], e();
    }
  },
      _ = function _(t) {
    g.call(t.data);
  };h && d || (h = function h(t) {
    for (var e = [], n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }return m[++v] = function () {
      a("function" == typeof t ? t : Function(t), e);
    }, r(v), v;
  }, d = function d(t) {
    delete m[t];
  }, "process" == n(19)(l) ? r = function r(t) {
    l.nextTick(s(g, t, 1));
  } : p ? (o = (i = new p()).port2, i.port1.onmessage = _, r = s(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function r(t) {
    f.postMessage(t + "", "*");
  }, f.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
    u.appendChild(c("script")).onreadystatechange = function () {
      u.removeChild(this), g.call(t);
    };
  } : function (t) {
    setTimeout(s(g, t, 1), 0);
  }), t.exports = { set: h, clear: d };
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      i = n(6),
      o = n(33),
      s = n(60),
      a = n(13),
      u = n(37),
      c = n(3),
      f = n(32),
      l = n(31),
      h = n(8),
      d = n(35).f,
      p = n(7).f,
      v = n(62),
      m = n(44),
      g = r.ArrayBuffer,
      _2 = r.DataView,
      b = r.Math,
      A = r.RangeError,
      y = r.Infinity,
      w = g,
      S = b.abs,
      x = b.pow,
      E = b.floor,
      T = b.log,
      k = b.LN2,
      C = i ? "_b" : "buffer",
      F = i ? "_l" : "byteLength",
      B = i ? "_o" : "byteOffset",
      M = function M(t, e, n) {
    var r,
        i,
        o,
        s = Array(n),
        a = 8 * n - e - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        f = 23 === e ? x(2, -24) - x(2, -77) : 0,
        l = 0,
        h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;for ((t = S(t)) != t || t === y ? (i = t != t ? 1 : 0, r = u) : (r = E(T(t) / k), t * (o = x(2, -r)) < 1 && (r--, o *= 2), (t += r + c >= 1 ? f / o : f * x(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (t * o - 1) * x(2, e), r += c) : (i = t * x(2, c - 1) * x(2, e), r = 0)); e >= 8; s[l++] = 255 & i, i /= 256, e -= 8) {}for (r = r << e | i, a += e; a > 0; s[l++] = 255 & r, r /= 256, a -= 8) {}return s[--l] |= 128 * h, s;
  },
      P = function P(t, e, n) {
    var r,
        i = 8 * n - e - 1,
        o = (1 << i) - 1,
        s = o >> 1,
        a = i - 7,
        u = n - 1,
        c = t[u--],
        f = 127 & c;for (c >>= 7; a > 0; f = 256 * f + t[u], u--, a -= 8) {}for (r = f & (1 << -a) - 1, f >>= -a, a += e; a > 0; r = 256 * r + t[u], u--, a -= 8) {}if (0 === f) f = 1 - s;else {
      if (f === o) return r ? NaN : c ? -y : y;r += x(2, e), f -= s;
    }return (c ? -1 : 1) * r * x(2, f - e);
  },
      I = function I(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
  },
      L = function L(t) {
    return [255 & t];
  },
      O = function O(t) {
    return [255 & t, t >> 8 & 255];
  },
      R = function R(t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
  },
      D = function D(t) {
    return M(t, 52, 8);
  },
      N = function N(t) {
    return M(t, 23, 4);
  },
      j = function j(t, e, n) {
    p(t.prototype, e, { get: function get() {
        return this[n];
      } });
  },
      U = function U(t, e, n, r) {
    var i = +n,
        o = l(i);if (i != o || o < 0 || o + e > t[F]) throw A("Wrong index!");var s = t[C]._b,
        a = o + t[B],
        u = s.slice(a, a + e);return r ? u : u.reverse();
  },
      V = function V(t, e, n, r, i, o) {
    var s = +n,
        a = l(s);if (s != a || a < 0 || a + e > t[F]) throw A("Wrong index!");for (var u = t[C]._b, c = a + t[B], f = r(+i), h = 0; h < e; h++) {
      u[c + h] = f[o ? h : e - h - 1];
    }
  },
      W = function W(t, e) {
    f(t, g, "ArrayBuffer");var n = +e,
        r = h(n);if (n != r) throw A("Wrong length!");return r;
  };if (s.ABV) {
    if (!c(function () {
      new g();
    }) || !c(function () {
      new g(.5);
    })) {
      for (var z, Q = (g = function g(t) {
        return new w(W(this, t));
      }).prototype = w.prototype, Y = d(w), H = 0; Y.length > H;) {
        (z = Y[H++]) in g || a(g, z, w[z]);
      }o || (Q.constructor = g);
    }var G = new _2(new g(2)),
        q = _2.prototype.setInt8;G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || u(_2.prototype, { setInt8: function setInt8(t, e) {
        q.call(this, t, e << 24 >> 24);
      }, setUint8: function setUint8(t, e) {
        q.call(this, t, e << 24 >> 24);
      } }, !0);
  } else g = function g(t) {
    var e = W(this, t);this._b = v.call(Array(e), 0), this[F] = e;
  }, _2 = function _(t, e, n) {
    f(this, _2, "DataView"), f(t, g, "DataView");var r = t[F],
        i = l(e);if (i < 0 || i > r) throw A("Wrong offset!");if (n = void 0 === n ? r - i : h(n), i + n > r) throw A("Wrong length!");this[C] = t, this[B] = i, this[F] = n;
  }, i && (j(g, "byteLength", "_l"), j(_2, "buffer", "_b"), j(_2, "byteLength", "_l"), j(_2, "byteOffset", "_o")), u(_2.prototype, { getInt8: function getInt8(t) {
      return U(this, 1, t)[0] << 24 >> 24;
    }, getUint8: function getUint8(t) {
      return U(this, 1, t)[0];
    }, getInt16: function getInt16(t) {
      var e = U(this, 2, t, arguments[1]);return (e[1] << 8 | e[0]) << 16 >> 16;
    }, getUint16: function getUint16(t) {
      var e = U(this, 2, t, arguments[1]);return e[1] << 8 | e[0];
    }, getInt32: function getInt32(t) {
      return I(U(this, 4, t, arguments[1]));
    }, getUint32: function getUint32(t) {
      return I(U(this, 4, t, arguments[1])) >>> 0;
    }, getFloat32: function getFloat32(t) {
      return P(U(this, 4, t, arguments[1]), 23, 4);
    }, getFloat64: function getFloat64(t) {
      return P(U(this, 8, t, arguments[1]), 52, 8);
    }, setInt8: function setInt8(t, e) {
      V(this, 1, t, L, e);
    }, setUint8: function setUint8(t, e) {
      V(this, 1, t, L, e);
    }, setInt16: function setInt16(t, e) {
      V(this, 2, t, O, e, arguments[2]);
    }, setUint16: function setUint16(t, e) {
      V(this, 2, t, O, e, arguments[2]);
    }, setInt32: function setInt32(t, e) {
      V(this, 4, t, R, e, arguments[2]);
    }, setUint32: function setUint32(t, e) {
      V(this, 4, t, R, e, arguments[2]);
    }, setFloat32: function setFloat32(t, e) {
      V(this, 4, t, N, e, arguments[2]);
    }, setFloat64: function setFloat64(t, e) {
      V(this, 8, t, D, e, arguments[2]);
    } });m(g, "ArrayBuffer"), m(_2, "DataView"), a(_2.prototype, s.VIEW, !0), e.ArrayBuffer = g, e.DataView = _2;
}, function (t, e, n) {
  var r = n(2),
      i = n(25),
      o = n(33),
      s = n(114),
      a = n(7).f;t.exports = function (t) {
    var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});"_" == t.charAt(0) || t in e || a(e, t, { value: s.f(t) });
  };
}, function (t, e, n) {
  var r = n(46),
      i = n(5)("iterator"),
      o = n(43);t.exports = n(25).getIteratorMethod = function (t) {
    if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
  };
}, function (t, e, n) {
  "use strict";
  var r = n(41),
      i = n(102),
      o = n(43),
      s = n(16);t.exports = n(72)(Array, "Array", function (t, e) {
    this._t = s(t), this._i = 0, this._k = e;
  }, function () {
    var t = this._t,
        e = this._k,
        n = this._i++;return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
  }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(136)),
      o = r(n(11));e.default = function () {
    function t(t, e) {
      if ("codecData" in e) switch (t.codecData = e.codecData, t.type) {case "video":
          t.codec = "AVC1";break;case "audio":
          s(t, e);}
    }function e(t, e) {
      for (var n = new Uint8Array(e), r = 0, i = 0; i < t.length; i++) {
        n.set(t[i].data, r), r += t[i].data.length;
      }return n;
    }function n(t, e, n, r, i) {
      var s = void 0,
          a = r,
          u = r - (s = t.lastSample).rawts;(u < 0 || u > 10 * t.timescale) && (o.default.debug("Adjust DTS difference!!!", u), u = t.lastSampleDuration), r = s.ts + u;var c = s.altTs + t.sampleDuration;return Math.abs(r / t.timescale - c / t.samplingRate) > 1 && o.default.error("Alt TS discrepancy", r, c), s.duration = u, t.lastSampleDuration = u, t.lastSample = { data: n, ts: r, altTs: c, rawts: a, altDur: t.sampleDuration, offset: i, sap: e }, s;
    }function r(t) {
      for (var e = void 0, n = 0; n < P.length; n++) {
        if (P[n].id == t) {
          e = P[n];break;
        }
      }return void 0 === e && o.default.error("[BoxComposer]: track ID " + t + " is not found!"), e;
    }function s(t, e) {
      switch (e.codec) {case "MP4A.40.34":
          t.codec = "MP3", a(t);break;default:
          t.codec = "AAC", u(t);}
    }function a(t) {
      if (t.codecData) {
        var e = [[0, 576, 1152, 384], [0, 0, 0, 0], [0, 576, 1152, 384], [0, 1152, 1152, 384]],
            n = [[11025, 0, 22050, 44100], [12e3, 0, 24e3, 48e3], [8e3, 0, 16e3, 32e3], [0, 0, 0, 0]],
            r = [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 8192, 8192, 32768], [0, 0, 0, 0], [0, 8192, 8192, 32768], [0, 32768, 32768, 32768]], [[0, 16384, 16384, 49152], [0, 0, 0, 0], [0, 16384, 16384, 49152], [0, 40960, 49152, 65536]], [[0, 24576, 24576, 57344], [0, 0, 0, 0], [0, 24576, 24576, 57344], [0, 49152, 57344, 98304]], [[0, 32768, 32768, 65536], [0, 0, 0, 0], [0, 32768, 32768, 65536], [0, 57344, 65536, 131072]], [[0, 40960, 40960, 81920], [0, 0, 0, 0], [0, 40960, 40960, 81920], [0, 65536, 81920, 163840]], [[0, 49152, 49152, 98304], [0, 0, 0, 0], [0, 49152, 49152, 98304], [0, 81920, 98304, 196608]], [[0, 57344, 57344, 114688], [0, 0, 0, 0], [0, 57344, 57344, 114688], [0, 98304, 114688, 229376]], [[0, 65536, 65536, 131072], [0, 0, 0, 0], [0, 65536, 65536, 131072], [0, 114688, 131072, 262144]], [[0, 81920, 81920, 147456], [0, 0, 0, 0], [0, 81920, 81920, 147456], [0, 131072, 163840, 294912]], [[0, 98304, 98304, 163840], [0, 0, 0, 0], [0, 98304, 98304, 163840], [0, 163840, 196608, 327680]], [[0, 114688, 114688, 180224], [0, 0, 0, 0], [0, 114688, 114688, 180224], [0, 196608, 229376, 360448]], [[0, 131072, 131072, 196608], [0, 0, 0, 0], [0, 131072, 131072, 196608], [0, 229376, 262144, 393216]], [[0, 147456, 147456, 229376], [0, 0, 0, 0], [0, 147456, 147456, 229376], [0, 262144, 327680, 425984]], [[0, 163840, 163840, 262144], [0, 0, 0, 0], [0, 163840, 163840, 262144], [0, 327680, 393216, 458752]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]],
            i = t.codecData;if (255 == (255 & i[0]) && 224 == (224 & i[1])) {
          var o = i[1] >> 3 & 3;1 == o && (o = 0);var s = i[1] >> 1 & 3;if (0 != s) {
            t.sampleDuration = e[o][s];var a = i[2] >> 4 & 21;t.bitrate = r[a][o][s];var u = i[2] >> 2 & 3;t.samplingRate = n[u][o];var c = i[3] >> 6 & 3;t.audioChannels = 3 == c ? 1 : 2;
          }
        }
      }
    }function u(t) {
      if (t.codecData) {
        var e = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
            n = [1024, 960],
            r = t.codecData,
            i = r[0] >> 3,
            o = 0;o = 31 == i ? r[1] >> 1 & 15 : (7 & r[0]) << 1 | r[1] >> 7, t.bitrate = 0, 15 == o ? 31 == i ? (t.samplingRate = ((1 & r[1]) << 7 | r[2] >> 1) << 16 | ((1 & r[2]) << 7 | r[3] >> 1) << 8 | (1 & r[3]) << 7 | r[4] >> 1, t.audioChannels = (1 & r[4]) << 3 | r[5] >> 5, t.sampleDuration = n[(16 & r[5]) >> 4]) : (t.samplingRate = ((127 & r[1]) << 1 | r[2] >> 7) << 16 | ((127 & r[2]) << 1 | r[3] >> 7) << 8 | (127 & r[3]) << 1 | r[4] >> 7, t.audioChannels = (120 & r[4]) >> 3, t.sampleDuration = n[(4 & r[4]) >> 2]) : (t.samplingRate = e[o], 31 == i ? (t.audioChannels = (1 & r[1]) << 3 | r[2] >> 5, t.sampleDuration = n[(16 & r[2]) >> 4]) : (t.audioChannels = (120 & r[1]) >> 3, t.sampleDuration = n[(4 & r[1]) >> 2]));
      }
    }function c(t) {
      var e = i.default.createBox("ftyp", t);return e.major_brand = "isom", e.minor_version = 1, e.compatible_brands = [], e.compatible_brands[0] = "isom", e.compatible_brands[1] = "avc1", e.compatible_brands[2] = "dash", e;
    }function f(t) {
      var e = i.default.createBox("styp", t);return e.major_brand = "msdh", e.minor_version = 0, e.compatible_brands = [], e.compatible_brands[0] = "msdh", e.compatible_brands[1] = "msix", e;
    }function l(t) {
      var e = i.default.createBox("moov", t);p(e);var n = i.default.createBox("mvex", e);w(n);for (var r = 0; r < P.length; r++) {
        var o = P[r],
            s = i.default.createBox("trak", e);v(o, s);var a = i.default.createBox("mdia", s);g(o, a), _(o, a);var u = i.default.createBox("minf", a);switch (o.type) {case "video":
            b(u);break;case "audio":
            A(u);}y(i.default.createBox("dinf", u));var c = i.default.createBox("stbl", u);i.default.createFullBox("stts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], i.default.createFullBox("ctts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], i.default.createFullBox("stsc", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], i.default.createFullBox("stco", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], i.default.createFullBox("stsz", c)._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], x(o, c), S(o, n);
      }return e;
    }function h(t, e, n) {
      var r = i.default.createBox("sidx", t);r.flags = 0, r.version = 1, r.reference_ID = e.id, r.timescale = m(e), r.first_offset = 0, r.reserved = 0, r.earliest_presentation_time = "audio" == e.type ? n[0].altTs : n[0].ts + n[0].offset, r.reference_count = 1;for (var o = !1, s = 0, a = 0, u = 0, c = 0, f = 0; f < n.length; f++) {
        s += n[f].data.byteLength, !o && n[f].sap && (o = !0, c = a), a += n[f].duration, u += n[f].altDur;
      }return r.references = [{ reference_type: 0, referenced_size: s, subsegment_duration: "audio" == e.type ? u : a, starts_with_SAP: n[0].sap ? 1 : 0, SAP_type: o ? 1 : 0, SAP_delta_time: c }], r;
    }function d(t, e, n) {
      var r = i.default.createBox("moof", t);i.default.createFullBox("mfhd", r).sequence_number = e.curSeqNumber++;var o = i.default.createBox("traf", r),
          s = i.default.createFullBox("tfhd", o);s.track_ID = e.id, s.flags = 131072;var a = i.default.createFullBox("tfdt", o, s);a.version = 1, a.flags = 0;var u = i.default.createFullBox("trun", o, a);if (u.sample_count = n.length, u.samples = [], "audio" == e.type) {
        a.baseMediaDecodeTime = n[0].altTs, u.flags = 769;for (var c = 0; c < n.length; c++) {
          u.samples.push({ sample_duration: n[c].altDur, sample_size: n[c].data.byteLength });
        }
      } else {
        a.baseMediaDecodeTime = n[0].ts, u.flags = 2821, u.first_sample_flags = 0;for (var f = 0; f < n.length; f++) {
          u.samples.push({ sample_duration: n[f].duration, sample_size: n[f].data.byteLength, sample_composition_time_offset: n[f].offset });
        }
      }return u.data_offset = r.getLength() + 8, r;
    }function p(t) {
      var e = i.default.createFullBox("mvhd", t);return e.creation_time = 0, e.modification_time = 0, e.timescale = 1e3, e.duration = 0, e.rate = 1, e.volume = 1, e.reserved1 = 0, e.reserved2 = [0, 0], e.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], e.pre_defined = [0, 0, 0, 0, 0, 0], e.next_track_ID = I, e;
    }function v(t, e) {
      var n = i.default.createFullBox("tkhd", e);switch (n.flags = 7, n.creation_time = 0, n.modification_time = 0, n.track_ID = t.id, n.reserved1 = 0, n.duration = 0, n.reserved2 = [0, 0], n.layer = 0, n.alternate_group = 0, n.reserved3 = 0, n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], t.type) {case "video":
          n.volume = 0, n.width = t.width, n.height = t.height, n.flags |= 8;break;case "audio":
          n.volume = 1, n.width = 0, n.height = 0;}return n;
    }function m(t) {
      return "audio" == t.type ? t.samplingRate : t.timescale;
    }function g(t, e) {
      var n = i.default.createFullBox("mdhd", e);return n.creation_time = 0, n.modification_time = 0, n.duration = 0, n.language = "und", n.pre_defined = 0, n.timescale = m(t), n;
    }function _(t, e) {
      var n = i.default.createFullBox("hdlr", e);switch (n.pre_defined = 0, t.type) {case "video":
          n.handler_type = "vide", n.name = "VideoHandler";break;case "audio":
          n.handler_type = "soun", n.name = "AudioHandler";}return n.reserved = [0, 0, 0], n;
    }function b(t) {
      var e = i.default.createFullBox("vmhd", t);return e.flags = 1, e.graphicsmode = 0, e.opcolor = [0, 0, 0], e;
    }function A(t) {
      var e = i.default.createFullBox("smhd", t);return e.balance = 0, e.reserved = 0, e;
    }function y(t) {
      var e = i.default.createFullBox("dref", t);e.entry_count = 1, e.entries = [];var n = i.default.createFullBox("url ", e, -1);return n.location = "", n.flags = 1, e.entries.push(n), e;
    }function w(t) {
      var e = i.default.createFullBox("mehd", t);return e.fragment_duration = 0, e;
    }function S(t, e) {
      var n = i.default.createFullBox("trex", e);return n.track_ID = t.id, n.default_sample_description_index = 1, n.default_sample_duration = 0, n.default_sample_size = 0, n.default_sample_flags = 0, n;
    }function x(t, e) {
      var n = i.default.createFullBox("stsd", e);return n.entry_count = 1, n.entries = [], n.entries.push(E(t, n)), n;
    }function E(t, e) {
      switch (t.codec) {case "AVC1":
          return t.configName = "avcC", t.compressorname = "AVC Coding", T(t, e);case "AAC":
          return F(t, e);case "MP3":
          return C(t, e);default:
          o.default.error("Unsupported codec: ", t.codec);}
    }function T(t, e) {
      var n = i.default.createBox("avc1", e, -1);n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.pre_defined1 = 0, n.reserved2 = 0, n.pre_defined2 = [0, 0, 0], n.width = t.width, n.height = t.height, n.horizresolution = 72, n.vertresolution = 72, n.reserved3 = 0, n.frame_count = 1, n.compressorname = [t.compressorname.length];for (var r = 0; r < 31; r++) {
        n.compressorname[r + 1] = r < t.compressorname.length ? 127 & t.compressorname.charCodeAt(r) : 0;
      }return n.depth = 24, n.pre_defined3 = 65535, n.config = k(t), n;
    }function k(t) {
      if (t.codecData) {
        var e = t.codecData.byteLength + 8,
            n = new Uint8Array(e),
            r = 0;n[r++] = (4278190080 & e) >> 24, n[r++] = (16711680 & e) >> 16, n[r++] = (65280 & e) >> 8, n[r++] = 255 & e;for (var i = 0; i < t.configName.length; i++) {
          n[r++] = 127 & t.configName.charCodeAt(i);
        }return n.set(t.codecData, r), n;
      }o.default.error("No codec data specified!");
    }function C(t, e) {
      var n = i.default.createBox(".mp3", e, -1);n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.reserved2 = [0, 0], n.channelcount = t.audioChannels, n.samplesize = 16, n.pre_defined = 0, n.reserved_3 = 0, n.samplerate = t.samplingRate << 16, n.entry_count = 1, n.entries = [];var r = i.default.createBox("btrt", n, -1);return r.bufferSizeDB = 4294967295, r.maxBitrate = t.bitrate, r.avgBitrate = t.bitrate, n.entries.push(r), n;
    }function F(t, e) {
      var n = i.default.createBox("mp4a", e, -1);return n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.reserved2 = [0, 0], n.channelcount = t.audioChannels, n.samplesize = 16, n.pre_defined = 0, n.reserved_3 = 0, n.samplerate = t.samplingRate << 16, n.esds = "AAC" == t.codec ? M(t) : B(t), n;
    }function B(t) {
      var e = new Uint8Array(35),
          n = 0;return e[n++] = 0, e[n++] = 0, e[n++] = 0, e[n++] = 35, e.set([101, 115, 100, 115], n), n += 4, e.set([0, 0, 0, 0], n), n += 4, e[n++] = 3, e[n++] = 21, e[n++] = (65280 & t.id) >> 8, e[n++] = 255 & t.id, e[n++] = 0, e[n++] = 4, e[n++] = 13, e[n++] = 107, e[n] = 20, e[n] |= 0, e[n++] |= 1, e[n++] = 255, e[n++] = 255, e[n++] = 255, e[n++] = (4278190080 & t.bitrate) >> 24, e[n++] = (16711680 & t.bitrate) >> 16, e[n++] = (65280 & t.bitrate) >> 8, e[n++] = 255 & t.bitrate, e[n++] = (4278190080 & t.bitrate) >> 24, e[n++] = (16711680 & t.bitrate) >> 16, e[n++] = (65280 & t.bitrate) >> 8, e[n++] = 255 & t.bitrate, e[n++] = 6, e[n++] = 1, e[n] = 2, e;
    }function M(t) {
      var e = 37 + t.codecData.byteLength,
          n = new Uint8Array(e),
          r = 0;return n[r++] = (4278190080 & e) >> 24, n[r++] = (16711680 & e) >> 16, n[r++] = (65280 & e) >> 8, n[r++] = 255 & e, n.set([101, 115, 100, 115], r), r += 4, n.set([0, 0, 0, 0], r), r += 4, n[r++] = 3, n[r++] = 23 + t.codecData.byteLength, n[r++] = (65280 & t.id) >> 8, n[r++] = 255 & t.id, n[r++] = 0, n[r++] = 4, n[r++] = 15 + t.codecData.byteLength, n[r++] = 64, n[r] = 20, n[r] |= 0, n[r++] |= 1, n[r++] = 255, n[r++] = 255, n[r++] = 255, n.set([0, 0, 0, 0, 0, 0, 0, 0], r), r += 8, n[r++] = 5, n[r++] = t.codecData.byteLength, n.set(t.codecData, r), r += t.codecData.byteLength, n[r++] = 6, n[r++] = 1, n[r] = 2, n;
    }var P = [],
        I = 1;this.init = function () {
      P = [], I = 1;
    }, this.addTrack = function (e, n) {
      var r = { id: I, type: e, curSeqNumber: 0, lastSampleDuration: 0 };return n && ("video" == e && (r.width = "width" in n ? n.width : 0, r.height = "height" in n ? n.height : 0), t(r, n), r.timescale = "timescale" in n ? n.timescale : 1e3), P.push(r), I++, r;
    }, this.setTrackParams = function (e, n) {
      var i = r(e);return i && ("width" in n && (i.width = n.width), "height" in n && (i.height = n.height), t(i, n), "sequenceNumber" in n && (i.curSeqNumber = n.sequenceNumber), o.default.debug("setTrackParams", e, n)), i;
    }, this.setBaseSample = function (t, e, n, i) {
      var s = r(t);s ? (o.default.debug("[BoxComposer] setBaseSample:", s.type, n, i), s.lastSample = { data: e, ts: n, rawts: n, altTs: Math.round(s.samplingRate / s.timescale * n), offset: i, sap: !0, altDur: s.sampleDuration }) : o.default.error("[BoxComposer] setBaseSample: track " + t + " not found!!!");
    }, this.initSegment = function () {
      var t = i.default.createFile();return c(t), l(t), t.write();
    }, this.mediaSegment = function (t, o, s) {
      var a = void 0,
          u = i.default.createFile(),
          c = r(t),
          l = [],
          p = [];if (c) {
        f(u);var v = 0,
            m = [];for (v = 0; v < o.length; v++) {
          var g = o[v],
              _ = n(c, g.sap, g.data, g.ts, g.offset);void 0 !== _ && (m.push(_), l.push(_.ts), p.push(_.sap));
        }if (s && void 0 !== c.lastSample && (c.lastSample.duration = c.lastSampleDuration, m.push(c.lastSample), l.push(m[m.length - 1].ts), p.push(m[m.length - 1].sap), c.lastSample = void 0), m.length > 0) {
          var b = h(u, c, m),
              A = d(u, c, m);i.default.createBox("mdat", u).data = e(m, b.references[0].referenced_size), b.references[0].referenced_size += 8 + A.getLength(), a = { ts: l, sap: p, sn: c ? c.curSeqNumber - 1 : void 0, data: u.write() };
        }
      }return a;
    };
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 }), e.TRANSITION_MODE = e.default = void 0;var i = r(n(88)),
      o = r(n(134)),
      s = r(n(11)),
      a = r(n(61)),
      u = { OPEN: 0, BUFFER: 1, ACTIVE: 2, CLOSED: 3 },
      c = { ABRUPT: 0, SMOOTH: 1 };e.default = function (t, e, n, r, f, l, h, d, p) {
    function v() {
      return U + 1;
    }function m(t) {
      N = R = t;
    }function g() {
      U = 0;var t = 0,
          e = {};for (t = 1; t < j.length; t++) {
        var n = j[t].ts - j[t - 1].ts;e[n] = e[n] > 0 ? e[n] + 1 : 1;
      }for (t in e) {
        if (e[t] > 0) {
          var r = parseInt(t);r > 0 && (U = r);
        }
      }s.default.debug("Max sample duration calculated: ", U);
    }function _() {
      Q = void 0, Y = void 0, H = void 0, G = void 0;
    }function b() {
      for (var t = 0; t < j.length; t++) {
        var e = j[t];E(e.sap, e.data, e.ts, e.offset);
      }j = [];
    }function A(t) {
      s.default.debug("flushAll", t);var e = 0,
          n = [];for (e = 0; e < Z.length; e++) {
        (void 0 === t || Z[e].ts < t) && n.push(Z[e]);
      }for (Z = [], e = 0; e < j.length; e++) {
        (void 0 === t || j[e].ts < t) && n.push(j[e]);
      }if (j = [], W) {
        var r = n.length;for (e = 0; e < r; e++) {
          y(n[e], t);
        }y(null, t);
      }L.filterOut(t);
    }function y(t, e) {
      var n = t ? I.mediaSegment(M, [t]) : I.mediaSegment(M, [], !0);n && (void 0 == e || n.ts[0] < e) && (L.pushSegment(n.data, n.ts[0]), C(n.ts[0], n.sn, n.sap[0]));
    }function w(t, e) {
      var n = !1;if (c.ABRUPT == K.mode) n = !0;else if (K.newSapTimes.length > 0) if (z) e && t >= K.newSapTimes[0] && (n = !0);else if (t >= K.newSapTimes[0] + N * r / 1e3 * 2) s.default.debug("Cancel current stream, because current timestamp is twice ahead possible buffer of new stream", t, K.newSapTimes[0]), n = !0;else for (var i = K.newSapTimes.length - 1; i >= 0; i--) {
        if (Math.abs(t - K.newSapTimes[i]) < v()) {
          s.default.debug("Cancel current stream. Timestamp " + t + " is near new stream key frame " + K.newSapTimes[i]), n = !0;break;
        }if (t > K.newSapTimes[i]) break;
      }return n;
    }function S(t, e) {
      var n = !1,
          i = N * r / 1e3,
          o = K.curSapTimes.length,
          a = K.newSapTimes.length;if (z && c.ABRUPT != K.mode) {
        if (o > 0 && t >= K.startupBuffer[0].ts + i) for (var u = 0, f = 0; f < o; f++) {
          if (!(K.curSapTimes[f] < K.newSapTimes[u])) {
            for (var l = u; l < a && (u = l, !(K.newSapTimes[l] > K.curSapTimes[f])); l++) {
              K.newSapTimes[l] == K.curSapTimes[f] && (s.default.debug("Switch to new stream because of SAP alignment"), n = !0);
            }if (n) break;
          }
        }!n && o >= 1 && a >= 2 && K.newSapTimes[a - 1] > K.curSapTimes[0] && (s.default.debug("Switch to new stream SAP alignment does not work!"), n = !0);
      } else if (t >= K.startupBuffer[0].ts + 2 * i && t >= K.curStreamLastBufferedTs) s.default.debug("Switch to new stream because transition buffer is twice filled"), n = !0;else if (t >= K.startupBuffer[0].ts + i) if (K.curStreamCancelled && t >= K.curStreamLastBufferedTs) s.default.debug("Switch to new stream because buffer is filled and current stream is cancelled"), n = !0;else for (var h = K.newSapTimes.length - 1; h >= 0; h--) {
        if (Math.abs(K.curStreamLastBufferedTs - K.newSapTimes[h]) < v()) {
          s.default.debug("Switch to new stream, because new key frame " + K.newSapTimes[h] + " is near to current latest timestamp " + K.curStreamLastBufferedTs), n = !0;break;
        }if (K.curStreamLastBufferedTs > K.newSapTimes[h]) break;
      }return n;
    }function x(t) {
      j.length >= 2 && void 0 !== et && void 0 !== M && (O = u.BUFFER, et(t, j[0].ts / r));
    }function E(t, e, n, r) {
      W ? k(t, e, n, r) : t && T(e, n, r);
    }function T(t, e, n) {
      I.setBaseSample(M, t, e, n), s.default.debug("process first frame", Q, Y, e), Q = void 0, H = void 0, Y = e, W = !0;
    }function k(t, e, n, i) {
      var o = void 0;if (X) {
        if (F(Z, e, n, i, t), Z[Z.length - 1].ts - Z[0].ts >= N * r / 1e3) {
          var s = Z.splice(0, 1);o = { data: s[0].data, ts: s[0].ts, offset: s[0].offset, sap: s[0].sap };
        }
      } else o = { data: e, ts: n, offset: i, sap: t };o && y(o), Y = n;
    }function C(t, e, n) {
      Q = t, q = e, n && (H = t);
    }function F(t, e, n, r, i) {
      t.push({ data: e, ts: n, offset: r, sap: i });
    }var B = t % parseInt("F0", 16),
        M = void 0,
        P = "vp8" == n || "vp9" == n ? "webm" : "mp4",
        I = "webm" == P ? new o.default() : new i.default(),
        L = void 0,
        O = u.OPEN,
        R = h.buffering,
        D = R >= 1e3 ? .2 : R / 5e3,
        N = h.buffering,
        j = [],
        U = void 0,
        V = void 0,
        W = !1,
        z = !!h.sapAlignment,
        Q = void 0,
        Y = void 0,
        H = void 0,
        G = void 0,
        q = void 0,
        J = !1,
        K = {},
        X = !1,
        Z = [],
        $ = void 0,
        tt = void 0,
        et = void 0,
        nt = void 0,
        rt = void 0;p.add(B, e, r), this.attachToMSE = function () {
      L = d.createSourceBuffer(e, n, f);
    }, this.id = function () {
      return B;
    }, this.inTransition = function (t) {
      return void 0 !== t && (J = t, K = {}), J;
    }, this.setTransitionParams = function (t) {
      (K = t).container = "vp8" == K.codec || "vp9" == K.codec ? "webm" : "mp4";
    }, this.isSupported = function () {
      var t = d.isCodecSupported(e, n);return t || s.default.error(e + " codec is not supported: ", n), t;
    }, this.isTransitionSupported = function () {
      var t = !1;return K && K.container == P && (t = d.isCodecSupported(e, K.codec)), t || s.default.error(e + " transition is not supported: ", n), t;
    }, this.startTransition = function (t) {
      K.mode = void 0 !== t ? t : c.SMOOTH, K.startupBuffer = [], K.curStreamCancelled = !1, K.newSapTimes = [], K.curSapTimes = [], X = !0, p.add(K.id, e, r);
    }, this.getStreamName = function () {
      return l;
    }, this.getTransitionStreamName = function () {
      return K.name;
    }, this.transitionStreamId = function () {
      return K.id;
    }, this.type = function () {
      return e;
    }, this.isVideo = function () {
      return "video" == e;
    }, this.isAudio = function () {
      return "audio" == e;
    }, this.isActual = function () {
      return u.CLOSED != O;
    }, this.isOpen = function () {
      return u.OPEN == O;
    }, this.isBuffering = function () {
      return u.BUFFER == O;
    }, this.sapOffset = function () {
      var t = 4e3 * (Y - H) / r;return isNaN(t) ? 0 : t;
    }, this.reset = function () {
      s.default.debug("Reset track " + l), O = u.OPEN, L.removeAll(), I.init(), M = void 0, j = [], Z = [], U = void 0, W = !1, V = void 0, J = void 0, p.remove(B), X && (B = K.id, h = K.streamOptions, l = K.name), p.add(B, e, r), X = !1, K = {}, $ = void 0, _(), m(h.buffering ? h.buffering : 1e3);
    }, this.close = function () {
      O = u.CLOSED, L.closed = !0, I = void 0, j = [], p.remove(B), void 0 !== K.id && p.remove(K.id);
    }, this.backup = function () {
      L.closed = !0, $ = L.getSegments();
    }, this.recover = function () {}, this.isRecoverable = function () {
      return L.isStartingUp();
    }, this.flush = function () {
      A();
    }, this.buffer = function (t) {
      t && m(t), O = u.BUFFER, s.default.debug("buffering...");
    }, this.activate = function () {
      u.BUFFER === O && (b(), O = u.ACTIVE, tt());
    }, this.hasLowBuffer = function (t) {
      if (u.ACTIVE == O) {
        var n = Y ? Y / r - t : 0;if (a.default.display(e + "-buffer", n), n < D) return s.default.debug(e + "LOW BUFFER ", t, Y), p.reportLowBuffer(B), !0;p.reportBufLevel(B, n);
      }
    }, this.updateBufferedState = function (t, n) {
      if (u.BUFFER == O) {
        var i = G ? G / r - n : 0;a.default.display(e + "-buffer", i);var o = G ? G / r - t : 0;s.default.debug("[Track] updateBufferedState: " + e + ", buf lvl " + o + ", real buf lvl " + i), o < D && (s.default.debug("[Track] updateBufferedState: low buffer"), p.reportLowBuffer(B)), p.reportBufLevel(B, o);
      }
    }, this.setBaseDecodeTime = function (t) {
      V = Math.round(t * r);
    }, this.onBaseDecodeTimeReady = function (t) {
      et = t;
    }, this.onSourceReady = function (t) {
      tt = t;
    }, this.onCancelStream = function (t) {
      nt = t;
    }, this.onTransitionCompleted = function (t) {
      rt = t;
    }, this.initPresentation = function (t) {
      var i = { timescale: r };"mp4" == P && (i.codecData = t), i.codec = n.toUpperCase(), "video" == e && (i.width = h.width, i.height = h.height), M = I.addTrack(e, i).id, L.pushInit(I.initSegment()), s.default.debug(e + " init segment pushed");
    }, this.initTransition = function (t) {
      var n = { timescale: r };"webm" == K.container ? (K.composer = new o.default(), n.codec = K.codec.toUpperCase()) : (K.composer = new i.default(), n.codecData = t), "video" == e && (n.width = K.streamOptions.width, n.height = K.streamOptions.height), K.cTrackId = K.composer.addTrack(e, n).id, K.initSegment = K.composer.initSegment(), s.default.debug(e + " transit stream init segment pushed");
    }, this.processFrame = function (t, n, i, o) {
      if (G = i, X) {
        if (K.curStreamCancelled) return;if (s.default.debug("curre ", i, o, t), t && K.curSapTimes.push(i), K.curStreamLastBufferedTs = i, w(i, t)) return s.default.debug("Cancel from processFrame", K.curStreamLastBufferedTs, t), nt(this), K.curStreamCancelled = !0, void F(j, n, i, o, t);
      }switch (O) {case u.OPEN:
          F(j, n, i, o, t), x(this);break;case u.BUFFER:
          var a = !1;F(j, n, i, o, t);var c = j.length;if (void 0 === U) {
            if (void 0 !== V && c > 3 && j[c - 1].ts >= V + R * r / 1e3) {
              s.default.debug(e, " finished buffering, have ", c, " samples"), g(), d.startLogging(L.stream_id), W = !1;var f = 0;for (f = 0; f < c && !(j[f].ts >= V && j[f].sap); f++) {}s.default.debug("BDT ", V), s.default.debug("1 ts last ts", j[0].ts, j[0].sap, j[c - 1].ts), s.default.debug("buf size ", c, f);for (var l = f; l < c; l++) {
                var h = j[l];E(h.sap, h.data, h.ts, h.offset);
              }s.default.debug("sapSet ", W), j = [], a = !0;
            }
          } else j[c - 1].ts - j[0].ts >= R * r / 1e3 && (b(), a = !0);a && (O = u.ACTIVE, tt(), s.default.debug("playback"));break;case u.ACTIVE:
          E(t, n, i, o);}
    }, this.processTransitionFrame = function (t, e, i, o) {
      if (t) K.newSapTimes.push(i);else if (0 == K.newSapTimes.length) return void s.default.debug("throwing useless frame ", i, o);s.default.debug("trans ", i, o, t);var a = K.startupBuffer.length;if (a > 0) {
        var c = K.startupBuffer[a - 1],
            f = i - c.ts;f < 0 ? o >= -1 * f ? (o += f, f = 0) : f = track.lastSampleDuration : f > 2 * r && (f = track.lastSampleDuration), i = c.ts + f;
      }if (F(K.startupBuffer, e, i, o, t), S(i)) {
        K.curStreamCancelled || (s.default.debug("Cancel from transit"), nt(this), K.curStreamCancelled = !0);var v = Y;K.curStreamLastBufferedTs && K.curStreamLastBufferedTs > v && (v = K.curStreamLastBufferedTs);var m = K.newSapTimes[0],
            g = 0,
            _ = Math.abs(K.newSapTimes[0] - v);for (g = K.newSapTimes.length - 1; g >= 1; g--) {
          var b = Math.abs(K.newSapTimes[g] - v);b < _ && (_ = b, m = K.newSapTimes[g]);
        }for (A(m), g = 0; g < K.startupBuffer.length && !(K.startupBuffer[g].ts >= m); g++) {}g > 0 && K.startupBuffer.splice(0, g), j = K.startupBuffer, K.startupBuffer = [], s.default.debug("buf len", j.length), s.default.debug("=====!TRANSITION EDGE!=====", Q, m, m - Q), L.pushInit(K.initSegment), K.composer.setTrackParams(K.cTrackId, { sequenceNumber: q + 1 }), p.remove(B), B = K.id, h = K.streamOptions, l = K.name, I = K.composer, M = K.cTrackId, n = K.codec, P = K.container, r = K.timescale, W = !1, V = void 0, U = void 0, J = !1, X = !1, K = {}, Q = void 0, H = void 0, G = void 0;var y = j.length;y > 0 && (Y = j[y - 1].ts), rt(this), O = u.OPEN, x(this), j.splice(j.length - 1, 1), this.processFrame(t, e, i, o), d.setPositionControl();
      }
    };
  }, e.TRANSITION_MODE = c;
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      i = {};i.appendBox = function (t, e, n) {
    if (e._parent = t, -1 !== n) if (void 0 !== n && null !== n) {
      var i,
          o = -1;if ("number" == typeof n) o = n;else {
        if ("string" == typeof n) i = n;else {
          if ("object" !== (void 0 === n ? "undefined" : r(n)) || !n.type) return void t.boxes.push(e);i = n.type;
        }for (var s = 0; s < t.boxes.length; s++) {
          if (i === t.boxes[s].type) {
            o = s + 1;break;
          }
        }
      }t.boxes.splice(o, 0, e);
    } else t.boxes.push(e);
  }, e.default = i;
}, function (t, e, n) {
  var r = n(19);t.exports = function (t, e) {
    if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);return +t;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(9),
      i = n(39),
      o = n(8);t.exports = [].copyWithin || function (t, e) {
    var n = r(this),
        s = o(n.length),
        a = i(t, s),
        u = i(e, s),
        c = arguments.length > 2 ? arguments[2] : void 0,
        f = Math.min((void 0 === c ? s : i(c, s)) - u, s - a),
        l = 1;for (u < a && a < u + f && (l = -1, u += f - 1, a += f - 1); f-- > 0;) {
      u in n ? n[a] = n[u] : delete n[a], a += l, u += l;
    }return n;
  };
}, function (t, e, n) {
  var r = n(42);t.exports = function (t, e) {
    var n = [];return r(t, !1, n.push, n, e), n;
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(9),
      o = n(47),
      s = n(8);t.exports = function (t, e, n, a, u) {
    r(e);var c = i(t),
        f = o(c),
        l = s(c.length),
        h = u ? l - 1 : 0,
        d = u ? -1 : 1;if (n < 2) for (;;) {
      if (h in f) {
        a = f[h], h += d;break;
      }if (h += d, u ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value");
    }for (; u ? h >= 0 : l > h; h += d) {
      h in f && (a = e(a, f[h], h, c));
    }return a;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(12),
      i = n(4),
      o = n(54),
      s = [].slice,
      a = {},
      u = function u(t, e, n) {
    if (!(e in a)) {
      for (var r = [], i = 0; i < e; i++) {
        r[i] = "a[" + i + "]";
      }a[e] = Function("F,a", "return new F(" + r.join(",") + ")");
    }return a[e](t, n);
  };t.exports = Function.bind || function (t) {
    var e = r(this),
        n = s.call(arguments, 1),
        a = function a() {
      var r = n.concat(s.call(arguments));return this instanceof a ? u(e, r.length, r) : o(e, r, t);
    };return i(e.prototype) && (a.prototype = e.prototype), a;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(7).f,
      i = n(34),
      o = n(37),
      s = n(26),
      a = n(32),
      u = n(20),
      c = n(42),
      f = n(72),
      l = n(102),
      h = n(38),
      d = n(6),
      p = n(29).fastKey,
      v = d ? "_s" : "size",
      m = function m(t, e) {
    var n,
        r = p(e);if ("F" !== r) return t._i[r];for (n = t._f; n; n = n.n) {
      if (n.k == e) return n;
    }
  };t.exports = { getConstructor: function getConstructor(t, e, n, f) {
      var l = t(function (t, r) {
        a(t, l, e, "_i"), t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != r && c(r, n, t[f], t);
      });return o(l.prototype, { clear: function clear() {
          for (var t = this, e = t._i, n = t._f; n; n = n.n) {
            n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
          }t._f = t._l = void 0, t[v] = 0;
        }, delete: function _delete(t) {
          var e = this,
              n = m(e, t);if (n) {
            var r = n.n,
                i = n.p;delete e._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), e._f == n && (e._f = r), e._l == n && (e._l = i), e[v]--;
          }return !!n;
        }, forEach: function forEach(t) {
          a(this, l, "forEach");for (var e, n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;) {
            for (n(e.v, e.k, this); e && e.r;) {
              e = e.p;
            }
          }
        }, has: function has(t) {
          return !!m(this, t);
        } }), d && r(l.prototype, "size", { get: function get() {
          return u(this[v]);
        } }), l;
    }, def: function def(t, e, n) {
      var r,
          i,
          o = m(t, e);return o ? o.v = n : (t._l = o = { i: i = p(e, !0), k: e, v: n, p: r = t._l, n: void 0, r: !1 }, t._f || (t._f = o), r && (r.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t;
    }, getEntry: m, setStrong: function setStrong(t, e, n) {
      f(t, e, function (t, e) {
        this._t = t, this._k = e, this._l = void 0;
      }, function () {
        for (var t = this, e = t._k, n = t._l; n && n.r;) {
          n = n.p;
        }return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? l(0, n.k) : "values" == e ? l(0, n.v) : l(0, [n.k, n.v]) : (t._t = void 0, l(1));
      }, n ? "entries" : "values", !n, !0), h(e);
    } };
}, function (t, e, n) {
  var r = n(46),
      i = n(93);t.exports = function (t) {
    return function () {
      if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");return i(this);
    };
  };
}, function (t, e, n) {
  "use strict";
  var r = n(37),
      i = n(29).getWeak,
      o = n(1),
      s = n(4),
      a = n(32),
      u = n(42),
      c = n(22),
      f = n(10),
      l = c(5),
      h = c(6),
      d = 0,
      p = function p(t) {
    return t._l || (t._l = new v());
  },
      v = function v() {
    this.a = [];
  },
      m = function m(t, e) {
    return l(t.a, function (t) {
      return t[0] === e;
    });
  };v.prototype = { get: function get(t) {
      var e = m(this, t);if (e) return e[1];
    }, has: function has(t) {
      return !!m(this, t);
    }, set: function set(t, e) {
      var n = m(this, t);n ? n[1] = e : this.a.push([t, e]);
    }, delete: function _delete(t) {
      var e = h(this.a, function (e) {
        return e[0] === t;
      });return ~e && this.a.splice(e, 1), !!~e;
    } }, t.exports = { getConstructor: function getConstructor(t, e, n, o) {
      var c = t(function (t, r) {
        a(t, c, e, "_i"), t._i = d++, t._l = void 0, void 0 != r && u(r, n, t[o], t);
      });return r(c.prototype, { delete: function _delete(t) {
          if (!s(t)) return !1;var e = i(t);return !0 === e ? p(this).delete(t) : e && f(e, this._i) && delete e[this._i];
        }, has: function has(t) {
          if (!s(t)) return !1;var e = i(t);return !0 === e ? p(this).has(t) : e && f(e, this._i);
        } }), c;
    }, def: function def(t, e, n) {
      var r = i(o(e), !0);return !0 === r ? p(t).set(e, n) : r[t._i] = n, t;
    }, ufstore: p };
}, function (t, e, n) {
  t.exports = !n(6) && !n(3)(function () {
    return 7 != Object.defineProperty(n(64)("div"), "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e, n) {
  var r = n(4),
      i = Math.floor;t.exports = function (t) {
    return !r(t) && isFinite(t) && i(t) === t;
  };
}, function (t, e, n) {
  var r = n(1);t.exports = function (t, e, n, i) {
    try {
      return i ? e(r(n)[0], n[1]) : e(n);
    } catch (e) {
      var o = t.return;throw void 0 !== o && r(o.call(t)), e;
    }
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return { value: e, done: !!t };
  };
}, function (t, e) {
  t.exports = Math.log1p || function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(36),
      i = n(58),
      o = n(48),
      s = n(9),
      a = n(47),
      u = Object.assign;t.exports = !u || n(3)(function () {
    var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
  }) ? function (t, e) {
    for (var n = s(t), u = arguments.length, c = 1, f = i.f, l = o.f; u > c;) {
      for (var h, d = a(arguments[c++]), p = f ? r(d).concat(f(d)) : r(d), v = p.length, m = 0; v > m;) {
        l.call(d, h = p[m++]) && (n[h] = d[h]);
      }
    }return n;
  } : u;
}, function (t, e, n) {
  var r = n(7),
      i = n(1),
      o = n(36);t.exports = n(6) ? Object.defineProperties : function (t, e) {
    i(t);for (var n, s = o(e), a = s.length, u = 0; a > u;) {
      r.f(t, n = s[u++], e[n]);
    }return t;
  };
}, function (t, e, n) {
  var r = n(16),
      i = n(35).f,
      o = {}.toString,
      s = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      a = function a(t) {
    try {
      return i(t);
    } catch (t) {
      return s.slice();
    }
  };t.exports.f = function (t) {
    return s && "[object Window]" == o.call(t) ? a(t) : i(r(t));
  };
}, function (t, e, n) {
  var r = n(10),
      i = n(16),
      o = n(50)(!1),
      s = n(77)("IE_PROTO");t.exports = function (t, e) {
    var n,
        a = i(t),
        u = 0,
        c = [];for (n in a) {
      n != s && r(a, n) && c.push(n);
    }for (; e.length > u;) {
      r(a, n = e[u++]) && (~o(c, n) || c.push(n));
    }return c;
  };
}, function (t, e, n) {
  var r = n(36),
      i = n(16),
      o = n(48).f;t.exports = function (t) {
    return function (e) {
      for (var n, s = i(e), a = r(s), u = a.length, c = 0, f = []; u > c;) {
        o.call(s, n = a[c++]) && f.push(t ? [n, s[n]] : s[n]);
      }return f;
    };
  };
}, function (t, e, n) {
  var r = n(35),
      i = n(58),
      o = n(1),
      s = n(2).Reflect;t.exports = s && s.ownKeys || function (t) {
    var e = r.f(o(t)),
        n = i.f;return n ? e.concat(n(t)) : e;
  };
}, function (t, e, n) {
  var r = n(2).parseFloat,
      i = n(45).trim;t.exports = 1 / r(n(82) + "-0") != -1 / 0 ? function (t) {
    var e = i(String(t), 3),
        n = r(e);return 0 === n && "-" == e.charAt(0) ? -0 : n;
  } : r;
}, function (t, e, n) {
  var r = n(2).parseInt,
      i = n(45).trim,
      o = n(82),
      s = /^[\-+]?0[xX]/;t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function (t, e) {
    var n = i(String(t), 3);return r(n, e >>> 0 || (s.test(n) ? 16 : 10));
  } : r;
}, function (t, e) {
  t.exports = Object.is || function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
  };
}, function (t, e, n) {
  var r = n(8),
      i = n(81),
      o = n(20);t.exports = function (t, e, n, s) {
    var a = String(o(t)),
        u = a.length,
        c = void 0 === n ? " " : String(n),
        f = r(e);if (f <= u || "" == c) return a;var l = f - u,
        h = i.call(c, Math.ceil(l / c.length));return h.length > l && (h = h.slice(0, l)), s ? h + a : a + h;
  };
}, function (t, e, n) {
  e.f = n(5);
}, function (t, e, n) {
  "use strict";
  var r = n(96);t.exports = n(51)("Map", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  }, { get: function get(t) {
      var e = r.getEntry(this, t);return e && e.v;
    }, set: function set(t, e) {
      return r.def(this, 0 === t ? 0 : t, e);
    } }, r, !0);
}, function (t, e, n) {
  n(6) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", { configurable: !0, get: n(53) });
}, function (t, e, n) {
  "use strict";
  var r = n(96);t.exports = n(51)("Set", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  }, { add: function add(t) {
      return r.def(this, t = 0 === t ? 0 : t, t);
    } }, r);
}, function (t, e, n) {
  "use strict";
  var r,
      i = n(22)(0),
      o = n(14),
      s = n(29),
      a = n(104),
      u = n(98),
      c = n(4),
      f = s.getWeak,
      l = Object.isExtensible,
      h = u.ufstore,
      d = {},
      p = function p(t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  },
      v = { get: function get(t) {
      if (c(t)) {
        var e = f(t);return !0 === e ? h(this).get(t) : e ? e[this._i] : void 0;
      }
    }, set: function set(t, e) {
      return u.def(this, t, e);
    } },
      m = t.exports = n(51)("WeakMap", p, v, u, !0, !0);7 != new m().set((Object.freeze || Object)(d), 7).get(d) && (a((r = u.getConstructor(p)).prototype, v), s.NEED = !0, i(["delete", "has", "get", "set"], function (t) {
    var e = m.prototype,
        n = e[t];o(e, t, function (e, i) {
      if (c(e) && !l(e)) {
        this._f || (this._f = new r());var o = this._f[t](e, i);return "set" == t ? this : o;
      }return n.call(this, e, i);
    });
  }));
}, function (t, e) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }t.exports = n;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }var i = r(n(125)),
      o = r(n(130)),
      s = r(n(11)),
      a = r(n(61));t.exports = { init: function init(t) {
      var e = Object.assign({}, { log_level: "error", log_div: !1 }, t);s.default.setLevel(e.log_level), s.default.setDiv(e.log_div), s.default.debug("SLDP Player v2.0.3"), a.default.init(e.inform_ids);var n = new i.default();return n.initialize(t), n;
    }, nimbleJS: o.default, VERSION: "v2.0.3", COMMITHASH: "95e5558d2c4148f932c837dc782f9574f586d234" };
}, function (t, e, n) {
  "use strict";
  (function (t) {
    function e(t, e, n) {
      t[e] || Object[r](t, e, { writable: !0, configurable: !0, value: n });
    }if (n(323), n(325), n(143), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill = !0;var r = "defineProperty";e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
      [][t] && e(Array, t, Function.call.bind([][t]));
    });
  }).call(e, n(119));
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = r(n(123)),
      a = r(n(89)),
      u = r(n(11)),
      c = function () {
    function t(e, n) {
      i(this, t), this._evalHandler = function () {
        if (!this.isSwitchInProgressCallback()) {
          var t = this.abrStrategy.calculateCurStreamMetric("latestLowBufferCount"),
              e = this.abrStrategy.calculateCurVideoStreamMetric("latestBufLevel");if (this.playbackStalled(e, t)) u.default.debug("[ABR controller] playback stalled!!!"), this.switchStreamCallback(this.streamsData.ordered[0].idx, a.default.ABRUPT);else if (this.phaseCnt >= 3) {
            var n = this.abrStrategy.calculateCurStreamMetric("latestBandwidth");n += this.abrStrategy.calculateProbeStreamMetric("latestBandwidth");var r = this.abrStrategy.calculateCurStreamMetric("latestRate"),
                i = this.abrStrategy.calculateCurStreamMetric("avgBandwidth");if (u.default.debug("[ABR controller] evalHandler: buf lvl " + e + ", min buf lvl " + this.stepDownBufferLevel + ", bw " + n + ", avg bw " + i + ", rate " + r), e < this.stepDownBufferLevel) {
              var o = !0;if (this.abrStrategy.isRunning() && (u.default.debug("[ABR controller] cancel strategy"), this.abrStrategy.cancel(), r < n && (o = !1)), o) {
                var s = this.abrStrategy.findRelevantStream(n, r);u.default.debug("[ABR controller] lowering to " + this.streamsData.ordered[s].rendition + "p"), this.switchStreamCallback(this.streamsData.ordered[s].idx);
              }
            } else !this.abrStrategy.isRunning() && n > 0 && 0 == t && this.abrStrategy.run();
          } else this.abrStrategy.isRunning() || this.phaseCnt++;
        }
      }.bind(this), this._onStrategyResult = function (t) {
        void 0 !== t && this.switchStreamCallback(t), this.phaseCnt = 0;
      }.bind(this), this.streamsData = [], this.bufferingTime = n, this.stepDownBufferLevel = this.bufferingTime > 1e3 ? this.bufferingTime / 3e3 : this.bufferingTime / 2500, this.abrStrategy = new s.default(e, n);
    }return o(t, [{ key: "start", value: function value() {
        this.streamsData = this.getStreamsCallback(), this.curStream = this.getCurStreamCallback(), this.streamsData.ordered.length > 1 && (u.default.debug("[ABR controller] start!"), this.phaseCnt = 0, this._clearEvalTimer(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.abrStrategy.init(this.streamsData, this.curStream), this.abrStrategy.callbacks = { onStartProbe: this.probeStartCallback, onCancelProbe: this.probeCancelCallback, onResult: this._onStrategyResult });
      } }, { key: "restart", value: function value() {
        this.start();
      } }, { key: "playbackStalled", value: function value(t, e) {
        return e > 0 && u.default.debug("[ABR Controller] low buffer count: ", e), e >= 10 || t + 2 <= 0;
      } }, { key: "scheduleInstantEvaluation", value: function value() {
        this._clearEvalTimer(), this._evalHandler(), this.evalTimer = setInterval(this._evalHandler, 1e3);
      } }, { key: "stop", value: function value() {
        u.default.debug("[ABR controller] stop!"), this.streamsData = [], this.curStream = void 0, this.phaseCnt = 0, this._clearEvalTimer(), this.abrStrategy.clear();
      } }, { key: "_clearEvalTimer", value: function value() {
        void 0 !== this.evalTimer && (clearInterval(this.evalTimer), this.evalTimer = void 0);
      } }, { key: "isProbing", value: function value(t) {
        var e = !1,
            n = this.abrStrategy.getProber();return n && n.id() === t && (e = n.isEnabled()), e;
      } }, { key: "onProbeInitReceived", value: function value() {
        this.abrStrategy.getProber().receiveInit();
      } }, { key: "onProbeDataReceived", value: function value(t, e, n) {
        this.abrStrategy.getProber().receiveFrame(t, e, n);
      } }, { key: "callbacks", set: function set(t) {
        this.switchStreamCallback = t.switchStream, this.isSwitchInProgressCallback = t.isInProgress, this.getStreamsCallback = t.getStreams, this.getCurStreamCallback = t.getCurStream, this.probeStartCallback = t.probeStream, this.probeCancelCallback = t.cancelStream;
      } }]), t;
  }();e.default = c;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = r(n(131)),
      a = r(n(11)),
      u = 3e3,
      c = function () {
    function t(e, n) {
      i(this, t), this.onProbeFinished = function () {
        this.runCurStreamMetricMethod("stopCustom");var t = this.calculateCurStreamMetric("customRangeBandwidth");a.default.debug("[Prober] onProbeFinished: streams bandwidth " + t);var e = this.metricsManager.getMetrics(this.prober.id()),
            n = Math.max(e.avgBandwidth(), e.latestBandwidth()),
            r = e.avgRate();t += n, a.default.debug("[Prober] onProbeFinished: prev bw " + this.curBandwidth + " cur bw " + t), a.default.debug("[Prober] onProbeFinished: prober bw " + n + ", prober rate " + r);var i = this.prober.period;this.destroyProber(), this.running = !1;var o = 1e3 * this.calculateCurVideoStreamMetric("latestBufLevel") >= this.enoughBufferToContinue,
            s = this.calculateCurStreamMetric("avgRate") / this.curStream.bandwidth;if (o && i >= u) {
          this.curBandwidth = t;for (var c = this.curStreamIdx + 1; c < this.streamsData.ordered.length; c++) {
            var f = this.streamsData.ordered[c].bandwidth * s;if (this.curBandwidth < 1.2 * f) break;this.curStreamIdx++;
          }this.doRun();
        } else o ? (t < this.curBandwidth && (t /= s), this.curBandwidth = Math.max(t, this.curBandwidth), this.doRun()) : this.onResultCallback(this.streamsData.ordered[this.curStreamIdx].idx);
      }.bind(this), this.onInitReceived = function () {
        this.runCurStreamMetricMethod("startCustom");
      }.bind(this), this.running = !1, this.nextProberId = 0, this.metricsManager = e, this.bufferingTime = n, this.minBufferingTime = n > 1e3 ? 200 : n / 8, this.enoughBufferToContinue = n > 1e3 ? 500 : n / 2.5;
    }return o(t, [{ key: "init", value: function value(t, e) {
        this.streamsData = t, this.curStream = e;
      } }, { key: "clear", value: function value() {
        this.running && (this.running = !1, this.prober.stop()), this.prober && (this.prober.destroy(), this.prober = void 0), this.streamsData = void 0, this.curStream = void 0;
      } }, { key: "run", value: function value() {
        this.curBandwidth = this.calculateCurStreamMetric("avgBandwidth"), this.curStreamIdx = this.curStream.orderedIdx, this.doRun();
      } }, { key: "doRun", value: function value() {
        if (a.default.debug("[ABR strategy] doRun: idx " + this.curStreamIdx + ", bw " + this.curBandwidth), this.curBandwidth > 0) if (this.nextStreamIdx = this.curStreamIdx + 1, this.nextStreamIdx < this.streamsData.ordered.length) {
          var t = this.calculateCurStreamMetric("avgRate");this.bwCorrector = t / this.curStream.bandwidth, a.default.debug("[ABR strategy] run: bwCorrector " + this.bwCorrector), a.default.debug("Bandwidth " + this.curBandwidth + ", bitrate " + t);var e = this.streamsData.ordered[this.nextStreamIdx],
              n = t,
              r = e.bandwidth * this.bwCorrector,
              i = 0,
              o = 1e3 * this.calculateCurVideoStreamMetric("latestBufLevel");this.curBandwidth < n + r && (i = (o - this.minBufferingTime) * (n + r) / (n + r - this.curBandwidth), i = Math.round(i)), (0 == i || i > u) && (i = u);var c = this.streamsData.streams[e.idx];this.prober = new s.default(this.nextProberId++, c.stream, c.stream_info.vtimescale, i, this.metricsManager), this.prober.callbacks = { onStartProbe: this.startProbeCallback, onCancelProbe: this.cancelProbeCallback, onInitReceived: this.onInitReceived, onProbeFinished: this.onProbeFinished }, this.running = !0, this.prober.start();
        } else this.onResultCallback(this.streamsData.ordered[this.curStreamIdx].idx);
      } }, { key: "calculateCurVideoStreamMetric", value: function value(t) {
        return this.metricsManager.getMetrics(this.curStream.vid)[t]();
      } }, { key: "calculateCurStreamMetric", value: function value(t) {
        var e = this.metricsManager.getMetrics(this.curStream.vid)[t]();return void 0 !== this.curStream.aid && (e += this.metricsManager.getMetrics(this.curStream.aid)[t]()), e;
      } }, { key: "calculateProbeStreamMetric", value: function value(t) {
        var e = 0;return void 0 !== this.prober && (e = this.metricsManager.getMetrics(this.prober.id())[t]()), e;
      } }, { key: "runCurStreamMetricMethod", value: function value(t) {
        this.metricsManager.getMetrics(this.curStream.vid)[t](), void 0 !== this.curStream.aid && this.metricsManager.getMetrics(this.curStream.aid)[t]();
      } }, { key: "cancel", value: function value() {
        this.running && (this.running = !1, this.prober.stop(), this.destroyProber());
      } }, { key: "findRelevantStream", value: function value(t, e) {
        var n = 0,
            r = e / this.curStream.bandwidth;a.default.debug("[ABR Strategy] findRelevantStream: bw corrector " + r + ", cur index " + this.curStream.orderedIdx);for (var i = this.curStream.orderedIdx - 1; i >= 0; i--) {
          if (t >= 1.1 * this.streamsData.ordered[i].bandwidth * r) {
            n = i;break;
          }
        }return n;
      } }, { key: "getProber", value: function value() {
        return this.prober;
      } }, { key: "destroyProber", value: function value() {
        this.prober && (this.prober.destroy(), this.prober = void 0);
      } }, { key: "isRunning", value: function value() {
        return this.running;
      } }, { key: "callbacks", set: function set(t) {
        this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.onResultCallback = t.onResult;
      } }]), t;
  }();e.default = c;
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = "\n@font-face {\n  font-family: 'glyphs';\n  src:url(data:font/opentype;base64," + function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(126)).default + ');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="sldp-icon-"], [class*=" sldp-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'glyphs\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sldp-icon-enlarge:before {\n  content: "\\e98b";\n}\n.sldp-icon-cog:before {\n  content: "\\e994";\n}\n.sldp-icon-play:before {\n  content: "\\ea1c";\n}\n.sldp-icon-pause:before {\n  content: "\\ea1d";\n}\n.sldp-icon-volume-medium:before {\n  content: "\\ea27";\n}\n.sldp-icon-volume-mute:before {\n  content: "\\ea2a";\n}\n.sldp_player_wrp {\n  background-color: #000;\n  position: relative;\n}\n.sldp_player_wrp_video {\n  display: inline-block;\n}\n.sldp_player_wrp_audio {\n  display: flex;\n  height: 42px;\n}\n.sldp_cbar {\n  display: block;\n  padding: 5px;\n  padding-left: 5px;\n  overflow: hidden;\n  z-index: 10;\n}\n.sldp_cbar_video {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  transition: opacity 0.5s linear;\n  background-color: rgba(0,0,0,0.7);\n}\n.sldp_cbar_audio {\n  position: relative;\n  margin: auto 6px auto 12px;\n  background-color: rgba(0,0,0,0.4);\n}\n.sldp_message_wrp {\n  height: 100%;\n  color: white;\n  display: flex;\n  z-index: 1;\n}\n.sldp_message_wrp_video {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n}\n.sldp_message_wrp_audio_noctrl {\n  padding-left: 20px;\n}\n.sldp_message {\n  margin: auto;\n  background: #000;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.sldp_message_pad {\n  padding: 12px 20px;\n}\n.sldp_btn {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-right: 10px;\n  color: #008ee8;\n  font-size: 18px;\n\n  -o-transition:.5s;\n  -ms-transition:.5s;\n  -moz-transition:.5s;\n  -webkit-transition:.5s;\n  transition:.5s;\n}\n.sldp_btn:hover{\n  color: #ff8814;\n}\n\n.sldp_play_pause_btn {\n  float: left;\n}\n\n.sldp_expand_btn\n{\n  float: right;\n  font-size: 16px;\n}\n\n.sldp_volume_btn\n{\n  float: left;\n}\n\n.sldp_config_btn\n{\n  float: right;\n}\n.sldp_config_btn:hover\n{\n  transform: rotate(-30deg);\n}\n\n.sldp_cfg_dialog\n{\n  width: 100px;\n  background: black;\n  position: absolute;\n  right: 25px;\n  bottom: 30px;\n  padding: 0;\n  margin: 0;\n  font-family: Arial;\n  font-size: 14px;\n  color: white;\n}\n.sldp_cfg_dialog li\n{\n  list-style: none;\n  text-align: center;\n  line-height: 24px;\n  cursor: pointer;\n}\n.sldp_cfg_dialog li:hover\n{\n  background-color: grey;\n}\n.sldp_volume_wrp{\n  overflow: hidden;\n  width: 150px;\n}\n.sldp_volume_slider_wrp {\n  float: left;\n  height: 20px;\n  cursor: pointer;\n}\n.sldp_volume_slider {\n  border-radius: 1px;\n  background: #008ee8;\n  width: 112px;\n  height: 3px;\n  margin-top: 9px;\n}\n.sldp_volume_thumb {\n  background: #008ee8;\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  position: relative;\n  left: 100px;\n  top: -4px;\n  cursor: pointer;\n}\n.sldp_volume_thumb:hover{\n  background: #ff8814;\n}\n.sldp_indicator{\n  height: 4px;\n  background-color: #008ee8;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n';e.default = function t() {
    r(this, t);var e = document.createElement("style");e.styleSheet ? e.styleSheet.cssText = i : e.appendChild(document.createTextNode(i)), document.getElementsByTagName("head")[0].appendChild(e);
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(122)),
      o = r(n(142)),
      s = r(n(129)),
      a = r(n(128)),
      u = r(n(89)),
      c = r(n(133)),
      f = r(n(11)),
      l = { NULL: 0, INIT: 1, STOP: 2, SETUP: 3, SYNC: 4, PLAY: 5, WAIT: 6, STALL: 7, ERROR: 8, RESET: 9 };e.default = function () {
    function t(t, e) {}function e(t) {
      var e = { autoplay: !0, height: "auto", width: "auto", controls: !0, buffering: 1e3, adaptive_bitrate: !0 };(rt = Object.assign({}, e, t)).autoplay = rt.autoplay || ut.isMobile();
    }function n() {
      (ct = new c.default(rt)).onPlay = S, ct.onPause = C, ct.onVolumeSet = k, ct.onUserAction = T, ct.onQualityChange = M, ct.qualities = [];
    }function r() {
      St = !0, Et || (Et = new i.default(st, rt.buffering), d());
    }function h() {
      dt = void 0, pt = void 0, vt = void 0, gt = void 0, mt = void 0, _t = void 0;
    }function d() {
      Et.callbacks = { switchStream: P, isInProgress: I, getStreams: O, getCurStream: L, probeStream: D, cancelStream: R };
    }function p() {
      ut.callbacks({ onProgress: U, onTimeUpdate: U, onSourceOpen: w, onCrash: W, onWaitUpdate: V, onPlayStarted: x, onPlayFailed: E });
    }function v() {
      at.callbacks = { onStatusReceived: Y, onInitSegmentReceived: Z, onDataReceived: nt, onConnectionClosed: Q };
    }function m() {
      Et && Et.stop(), at.close(), v();for (var t = 0; t < it.length; t++) {
        it[t].close();
      }it = [], b(), h();
    }function g() {
      ut.clear(), p(), ut.init(ct.videoElement);
    }function _() {
      Et && Et.stop(), at.close(), ct && (ct.destroy(), ct = void 0), b(), ut.clear();for (var t = 0; t < it.length; t++) {
        it[t].close();
      }it = [], h(), rt = void 0;
    }function b() {
      void 0 !== yt && (clearTimeout(yt), yt = void 0);
    }function A() {
      y(), ot = l.SETUP;
    }function y() {
      var e = ht || rt.stream_url;at.open(e);var n = e;"ws" != n.substring(0, 2) && (n = "ws://" + n), t("onConnectionStarted", n);
    }function w() {
      switch (f.default.debug("MSE initialized"), ot) {case l.STOP:
          ct.canPlay = !0, ot = l.INIT;break;case l.INIT:
          rt.autoplay || wt ? (A(), wt = !1) : ct.canPlay = !0;break;case l.ERROR:
          for (var t = 0; t < it.length; t++) {
            it[t].recover();
          }ot = l.PLAY;}
    }function S(e) {
      switch (t("onPlay"), ot) {case l.INIT:
          A();break;case l.RESET:
          g(), ot = l.INIT, wt = !0;break;case l.NULL:
          break;default:
          b(), St && dt && Et.start(), ut.handlePlay(e);}
    }function x() {
      ct.onPlaybackStarted();
    }function E() {
      ct.triggerPause();
    }function T() {
      return l.SETUP !== ot && l.SYNC !== ot && l.STALL !== ot;
    }function k(e) {
      t("onVolumeSet", e);
    }function C() {
      l.SYNC < ot && (t("onPause"), Et && Et.stop(), ut.handlePause(), rt.pause_timeout && (yt = setTimeout(F, 1e3 * rt.pause_timeout)));
    }function F() {
      B();
    }function B() {
      m(), ut.resetPosition(), ot = l.RESET;
    }function M(e) {
      var n = !1;if (I()) return f.default.warn("Quality change is in progress"), n;if (l.SYNC < ot) {
        if (f.default.debug("Switch quality to ", e), t("onChangeRendition", e), St = "Auto" == e) j(), Et.start();else {
          var r = bt[e];void 0 !== r && (Et && Et.stop(), P(r));
        }n = !0;
      }return n;
    }function P(t, e) {
      if (t != vt) {
        var n = lt[t];if (l.WAIT === ot) for (var r = 0; r < it.length; r++) {
          it[r].activate();
        }dt.inTransition(!0);var i = n.stream_info;dt.setTransitionParams({ id: At, codec: i.vcodec, timescale: i.vtimescale, name: n.stream, streamOptions: { width: i.width, height: i.height, bandwidth: i.bandwidth } }), dt.isTransitionSupported() ? (b(), f.default.debug("[Director] Change quality, send Play for " + n.stream + ", sn #" + At), H([{ stream: n.stream, sn: At, type: "video", offset: "0" }]), At++, gt = t, dt.startTransition(e), ot = l.SYNC) : f.default.error("[Director]: Transition isn't supported to ", n);
      } else j();
    }function I() {
      return void 0 !== gt || void 0 !== _t;
    }function L() {
      var t = {};if (void 0 !== vt) {
        t = { vid: dt.id(), idx: vt, bandwidth: lt[vt].stream_info.bandwidth, rendition: lt[vt].stream_info.height };for (var e = 0, n = 0; n < xt.length; n++) {
          if (xt[n].idx == vt) {
            e = n;break;
          }
        }t.orderedIdx = e, void 0 !== mt && (t.aid = pt.id());
      }return t;
    }function O() {
      return { ordered: xt, streams: lt };
    }function R(t) {
      f.default.debug("Send cancel ", t.id()), G([t.id().toString()]);
    }function D(t, e) {
      f.default.debug("[Director]: probe stream " + t.streamName() + ", sn: " + t.id() + ", offset: " + dt.sapOffset() + ", duration: " + e), H([{ stream: t.streamName(), sn: t.id(), type: "video", offset: dt.sapOffset().toString(), duration: e }]);
    }function N(e) {
      if (e.isVideo() && void 0 !== gt) {
        vt = gt, gt = void 0;var n = j();St && Et.restart(), t("onChangeRenditionComplete", n);
      } else e.isAudio() && void 0 !== _t && (mt = _t, _t = void 0);
    }function j() {
      var t = void 0;if (void 0 !== vt && (t = lt[vt].stream_info.height + "p", rt.initial_resolution = t, xt.length > 1)) if (Et) {
        if (St) {
          var e = "Auto " + t;ct.quality_ar[0] = e, ct.currentQuality = e;
        } else ct.quality_ar[0] = "Auto", ct.currentQuality = t;
      } else ct.currentQuality = t;return t;
    }function U(t) {
      if (l.PLAY == ot) for (var e = 0; e < it.length; e++) {
        if (it[e].isActual() && it[e].hasLowBuffer(t)) {
          it[e].buffer(), ut.wait(), ot = l.WAIT;break;
        }
      }
    }function V(t, e) {
      for (var n = 0; n < it.length; n++) {
        it[n].isActual() && it[n].updateBufferedState(t, e);
      }
    }function W(t) {
      if (f.default.debug("[Director] _onSourceBufferCrash"), t) return _(), void (ot = l.INIT);var e = !0,
          n = 0;for (n = 0; n < it.length; n++) {
        if (!it[n].isRecoverable()) {
          e = !1;break;
        }
      }if (e) {
        for (n = 0; n < it.length; n++) {
          it[n].backup();
        }ot = l.ERROR;
      } else m(), wt = !0, ot = l.INIT;g();
    }function z() {
      for (var t = 0; t < it.length; t++) {
        it[t].flush();
      }
    }function Q() {
      switch (f.default.debug("state ", ot), t("onConnectionClosed"), Et && Et.stop(), ot) {case l.WAIT:
          ut.continue();case l.SYNC:
          z();case l.PLAY:
          y(), ot = l.STALL;break;case l.STALL:
          B(), t("onError", "NO_PLAYABLE_SOURCE_FOUND"), ct.showNotPlaying();break;case l.RESET:case l.STOP:
          break;case l.SETUP:
          t("onError", "NO_PLAYABLE_SOURCE_FOUND"), ct.showNotPlaying();default:
          ot = l.INIT;}
    }function Y(e) {
      var n = !!rt.audio_only,
          r = !1;xt = [], Et && Et.stop();var i = 0,
          o = {};lt = e, bt = {};var s = [],
          a = void 0,
          u = [];for (i = 0; i < lt.length; i++) {
        o[lt[i].stream] = i;var c = lt[i].stream_info;c.vtimescale && (c.vtimescale = parseInt(c.vtimescale)), c.atimescale && (c.atimescale = parseInt(c.atimescale));var h = { name: lt[i].stream, bandwidth: c.bandwidth ? c.bandwidth : 0 };if (c.resolution && c.vcodec) {
          var d = c.resolution.split("x");if (c.width = parseInt(d[0]), c.height = parseInt(d[1]), h.width = c.width, h.height = c.height, h.vcodec = c.vcodec, ut.isCodecSupported("video", c.vcodec)) {
            h.video = "supported";var p = d[1] + "p";p === rt.initial_resolution && (a = i), bt[p] = i, c.bandwidth && (c.bandwidth = parseInt(c.bandwidth) / 1024);var v = 0;for (v = 0; v < xt.length && !(lt[xt[v].idx].stream_info.height > d[1]); v++) {}s.splice(v, 0, p), xt.splice(v, 0, { idx: i, bandwidth: c.bandwidth, rendition: d[1] });
          } else h.video = "not supported";
        }c.acodec && (h.acodec = c.acodec, h.audio = ut.isCodecSupported("audio", c.acodec) ? "supported" : "not supported"), u.push(h);
      }for (Et && s.length > 1 && s.splice(0, 0, "Auto"), f.default.debug("Player renditions:", s), f.default.debug("Ordered streams:", xt), ct.qualities = s, l.STALL == ot && ut.resetPosition(), i = 0; i < it.length; i++) {
        var g = void 0;g = it[i].inTransition() ? o[it[i].getTransitionStreamName()] : o[it[i].getStreamName()], it[i].isVideo() ? (vt = g, gt = void 0, void 0 !== g && lt[g].stream_info.vcodec ? (l.STALL == ot && it[i].reset(), n = !0) : it[i].inTransition(!0)) : it[i].isAudio() ? (mt = g, _t = void 0, void 0 !== g && lt[g].stream_info.acodec ? (l.STALL == ot && it[i].reset(), r = !0) : it[i].inTransition(!0)) : f.default.error("Got track of type other than video or audio!");
      }if (void 0 !== a && (n || (n = K(lt[a], a)), r || (r = X(lt[a], a))), !n) for (i = 0; i < lt.length && !(n = K(lt[i], i)); i++) {}if (!r) for (i = 0; i < lt.length && !(r = X(lt[i], i)); i++) {}for (i = it.length - 1; i >= 0; i--) {
        it[i].inTransition() && !it[i].isTransitionSupported() && (it[i].isVideo() ? dt = void 0 : pt = void 0, it[i].close(), it.splice(i, 1));
      }ut.listBuffers();var _ = [],
          b = "offset" in rt ? rt.offset.toString() : "0";for (i = 0; i < it.length; i++) {
        it[i].inTransition() ? _.push({ stream: it[i].getTransitionStreamName(), sn: it[i].transitionStreamId(), type: it[i].type(), offset: b }) : it[i].isOpen() && _.push({ stream: it[i].getStreamName(), sn: it[i].id(), type: it[i].type(), offset: b });
      }if (j(), t("onConnectionEstablished", u), n || r) {
        if (_.length > 0) {
          H(_), ot = l.SYNC, f.default.debug("[Director] Request streams:");for (var A = 0; A < _.length; A++) {
            f.default.debug("Stream #" + A + ": " + _[A].stream + ", sn: " + _[A].sn + ", offset: " + _[A].offset);
          }
        }
      } else m();
    }function H(t) {
      at.send({ command: "Play", streams: t });
    }function G(t) {
      at.send({ command: "Cancel", streams: t });
    }function q(t) {
      for (var e = void 0, n = 0; n < it.length; n++) {
        if (t == it[n].id()) {
          e = it[n];break;
        }
      }return e;
    }function J(t) {
      for (var e = void 0, n = 0; n < it.length; n++) {
        if (it[n].inTransition() && t == it[n].transitionStreamId()) {
          e = it[n];break;
        }
      }return e;
    }function K(t, e) {
      var n = !1,
          r = t.stream,
          i = t.stream_info;if (i.vcodec && i.width && i.height) {
        var o = { width: i.width, height: i.height, bandwidth: i.bandwidth, buffering: rt.buffering };"key_frame_alignment" in rt && (o.sapAlignment = rt.key_frame_alignment), dt ? dt.inTransition() && (dt.setTransitionParams({ id: At, codec: i.vcodec, timescale: i.vtimescale, name: r, streamOptions: o }), dt.isTransitionSupported() && (At++, gt = e, vt = void 0, dt.startTransition(), n = !0)) : (dt = new u.default(At, "video", i.vcodec, i.vtimescale, "video_stream_id", r, o, ut, st)).isSupported() ? (dt.attachToMSE(), it.push(dt), At++, vt = e, gt = void 0, n = !0) : dt = void 0;
      } else {
        var s = i.vcodec ? "resolution" : "video codec";f.default.error("[Director] Error: no valid " + s + " specified");
      }return n;
    }function X(t, e) {
      var n = !1,
          r = t.stream,
          i = t.stream_info;if (i.acodec) {
        var o = { buffering: rt.buffering };pt ? pt.inTransition() && (pt.setTransitionParams({ id: At, codec: i.acodec, timescale: i.atimescale, name: r, streamOptions: o }), pt.isTransitionSupported() && (At++, _t = e, mt = void 0, pt.startTransition(), n = !0)) : (pt = new u.default(At, "audio", i.acodec, i.atimescale, "audio_stream_id", r, o, ut, st)).isSupported() ? (pt.attachToMSE(), it.push(pt), At++, mt = e, _t = void 0, n = !0) : pt = void 0;
      }return n;
    }function Z(t, e) {
      if (f.default.debug("onInitSegmentReceived", t, ot), l.SYNC == ot) {
        ft = void 0;var n = q(t);n && n.isActual() ? (n.initPresentation(e), n.onBaseDecodeTimeReady(tt), n.onSourceReady(et)) : (n = J(t)) && n.isActual() && (n.initTransition(e), n.onCancelStream(R), n.onTransitionCompleted(N));
      } else Et && Et.isProbing(t) && Et.onProbeInitReceived();
    }function $() {
      for (var t = !0, e = 0; e < it.length; e++) {
        if (it[e].isActual() && it[e].isVideo()) {
          t = !1;break;
        }
      }return t;
    }function tt(t, e) {
      (!ft || ft > e) && (t.isVideo() || $()) && (ft = e);for (var n = !0, r = 0; r < it.length; r++) {
        if (it[r].isOpen() || it[r].inTransition()) {
          n = !1;break;
        }
      }if (n) for (var i = 0; i < it.length; i++) {
        it[i].isBuffering() && it[i].setBaseDecodeTime(ft);
      }
    }function et() {
      for (var t = !0, e = 0; e < it.length; e++) {
        if (it[e].isBuffering() || it[e].inTransition()) {
          t = !1;break;
        }
      }t && (l.SYNC == ot ? (ot = l.PLAY, ut.startPlayback(), St && dt && Et.start()) : l.WAIT == ot && (ot = l.PLAY, ut.continue()));
    }function nt(t, e, n, r, i) {
      if (l.SYNC == ot || l.PLAY == ot || l.WAIT == ot) {
        var o = q(t);o && o.isActual() ? o.processFrame(e, n, r, i) : Et && Et.isProbing(t) ? Et.onProbeDataReceived(e, n.byteLength, r) : (o = J(t)) && o.isActual() ? o.processTransitionFrame(e, n, r, i) : f.default.debug("Incomplete frame received", t, r);
      }
    }var rt = void 0,
        it = [],
        ot = l.NULL,
        st = new a.default(),
        at = new o.default(st),
        ut = new s.default(),
        ct = void 0,
        ft = void 0,
        lt = [],
        ht = void 0,
        dt = void 0,
        pt = void 0,
        vt = void 0,
        mt = void 0,
        gt = void 0,
        _t = void 0,
        bt = {},
        At = 0,
        yt = void 0,
        wt = !1,
        St = !1,
        xt = [],
        Et = void 0;this.initialize = function (i) {
      if (l.NULL != ot && _(), e(i), n(), !ut.isMediaSourceSupported()) return f.default.error("MediaSource is not supported"), t("onError", "MEDIA_SOURCE_NOT_SUPPORTED"), void ct.showNotSupported();ot = l.INIT, rt.adaptive_bitrate && r(), p(), v(), "latency_tolerance" in rt && ut.setLatencyTolerance(rt.latency_tolerance / 1e3, rt.buffering / 1e3), ut.init(ct.videoElement);
    }, this.destroy = function () {
      _();
    };
  };
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = "d09GRgABAAAAAAdgAAsAAAAABxQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHC2NtYXAAAAFoAAAAdAAAAHTqFqilZ2FzcAAAAdwAAAAIAAAACAAAABBnbHlmAAAB5AAAAxgAAAMYcAErl2hlYWQAAAT8AAAANgAAADYNUp3haGhlYQAABTQAAAAkAAAAJAfCA8tobXR4AAAFWAAAACgAAAAoHgABUmxvY2EAAAWAAAAAFgAAABYDMAJWbWF4cAAABZgAAAAgAAAAIAAOAFZuYW1lAAAFuAAAAYYAAAGGmUoJ+3Bvc3QAAAdAAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6ioDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAFgAAAASABAAAwACAAEAIOmL6ZTqHeon6ir//f//AAAAAAAg6YvplOoc6ifqKv/9//8AAf/jFnkWcRXqFeEV3wADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACAAD/wAQAA8AABgANAAABEScHJzcnAwcXIREXNwQAoMBgwKCgwKD+YKDAA8D+YKDAYMCg/WDAoAGgoMAAAAAAAgAS/8AD7gPAADYASgAAAS4BPgE3Jw4BIyIuAjUjFAYHDgImJwceARceAQ4BBxc+ATMyHgIVMzQ2Nz4CFhc3LgEnBSIuAjU0PgIzMh4CFRQOAgOmFAkTLyNlFTIbKEc1HskNDRU+SE0jZRYlDRQJFC4jZRUyGihHNR/JDQ0UPklMJGQVJQ3+WitLOSAgOUsrK0s5ICA5SwFeI0xJPhSvDQ4fNUcpGTIXIy4TCRSuDSQXI0xIPxSuDA4fNUcoGTEXIy4TCRSvDCQXbSA5SysrSzkgIDlLKytLOSAAAAEAwABAA0ADQAACAAATCQHAAoD9gANA/oD+gAACAIAAQAOAA0AAAwAHAAATIREhASERIYABQP7AAcABQP7AA0D9AAMA/QAAAAMAAAAAA3ADfgAfADgAUwAAJSImJyY0Nz4BNCYnJjQ3NjIXHgMVFA4CBw4BIzEnIiYnJjQ3PgE0JicmNDc2MhceARQGBw4BByImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BAtAKEQcODjExMTEODg4nDh8vIBERIC8fBxEJqwkSBw4OHh8fHg4ODigOLC0tLAcSjgYMBfZzDRMTDXP2BxMJCQsLCQMGgAcIDicOMnuCezIOJw4PDx5HTVQrK1RNRx4IB1sHBw4oDh5NUE0eDigODg4scXRxLAcH2wUE9xMNAUANE/cGBAMEEAr8wAoQBAEBAAACAAAAAAPAA34ADwAqAAABFSMnByM1Nyc1Mxc3MxUHASImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BA8BVa2tVa2tVa2tVa/5LBgwF9nMNExMNc/YHEwkJCwsJAwYBVVVra1Vra1Vra1Vr/kAFBPcTDQFADRP3BgQDBBAK/MAKEAQBAQABAAAAAQAAzKLy3V8PPPUACwQAAAAAANUZrLIAAAAA1RmssgAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAAASBAAAwAQAAIAEAAAABAAAAAAAAAAACgAUAB4APgCsALoA0AFKAYwAAAABAAAACgBUAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = r(n(132)),
      a = r(n(11)),
      u = 6,
      c = function () {
    function t(e, n, r) {
      i(this, t), this._interval1secHandler = function () {
        if (this.isStarted()) {
          this.timerCounter++, this.bw1sec.push(this.bytes1sec / 128), this.rate1sec.push(this.curRate()), this.rate1secTs1 = this.rate1secTs2 = void 0, this.bytes1sec = 0, this.lb1sec.push(this.lowBuf1sec), this.lowBuf1sec = 0;var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : 0;this.bl1sec.push(t), this.bufLvl1sec = 0, this.buf1secCnt = 0, this.timerCounter % 60 == 0 && (this.bwTotal.push(this.avgBandwidth()), this.lbTotal.push(this.lowBufTotal), t = this.bufTotalCnt > 0 ? this.bufLvlTotal / this.bufTotalCnt : 0, this.blTotal.push(t), this.rateTotal.push(this.avgRate()), this.timerCounter = 0);
        }
      }.bind(this), this.id = e, this.type = n, this.timescale = r, this.startTime = void 0, this.lastBwTime = void 0, this.pickCustom = !1, this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.bytesTotal = 0, this.bytes1sec = 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.bw1sec = new s.default(10 * u), this.bwTotal = new s.default(u), this.rate1sec = new s.default(10 * u), this.rateTotal = new s.default(u), this.lb1sec = new s.default(10 * u), this.lbTotal = new s.default(u), this.bl1sec = new s.default(10 * u), this.blTotal = new s.default(u), this.interval1sec = void 0, this.timerCounter = 0;
    }return o(t, [{ key: "clearCounters", value: function value() {
        this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.bytesTotal = 0, this.bytes1sec = 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.timerCounter = 0;
      } }, { key: "destroy", value: function value() {
        this._clear1secInterval(), this.bw1sec.clear(), this.bwTotal.clear(), this.rate1sec.clear(), this.rateTotal.clear(), this.bl1sec.clear(), this.blTotal.clear(), this.lb1sec.clear(), this.lbTotal.clear();
      } }, { key: "stop", value: function value() {
        this.enabled = !1, this.stopTime = new Date(), this._clear1secInterval();
      } }, { key: "start", value: function value() {
        this.enabled = !0, this.clearCounters(), this.startTime = new Date(), this.stopTime = void 0, this.lastBwTime = void 0, this.interval1sec = setInterval(this._interval1secHandler, 1e3);
      } }, { key: "isStarted", value: function value() {
        return this.enabled;
      } }, { key: "isReady", value: function value() {
        return void 0 === this.enabled;
      } }, { key: "startCustom", value: function value() {
        this.pickCustom = !0, this.customStart = new Date(), this.customStop = void 0, this.bytesCustom = 0;
      } }, { key: "stopCustom", value: function value() {
        this.pickCustom = !1, this.customStop = new Date();
      } }, { key: "customRangeBandwidth", value: function value() {
        var t = (this.customStop - this.customStart) / 1e3;return this.bytesCustom / (128 * t);
      } }, { key: "reportBandwidth", value: function value(t, e) {
        this.isStarted() && (this.bytesTotal += t, this.bytes1sec += t, this.pickCustom && (this.bytesCustom += t), this.lastBwTime = new Date(), void 0 === this.rate1secTs1 && (this.rate1secTs1 = e), this.rate1secTs2 = e, void 0 === this.rateTotalTs1 && (this.rateTotalTs1 = e), this.rateTotalTs2 = e);
      } }, { key: "reportLowBuffer", value: function value() {
        this.isStarted() && (this.lowBufTotal++, this.lowBuf1sec++);
      } }, { key: "reportBufLevel", value: function value(t) {
        this.isStarted() && (this.bufLvlTotal += t, this.bufLvl1sec += t, this.bufTotalCnt++, this.buf1secCnt++);
      } }, { key: "avgBandwidth", value: function value() {
        var t = 0;if (void 0 !== this.startTime) {
          var e = ((void 0 !== this.stopTime ? this.stopTime : new Date()) - this.startTime) / 1e3;e > 0 && (t = this.bytesTotal / (128 * e));
        }return t;
      } }, { key: "avgRate", value: function value() {
        var t = (this.rateTotalTs2 - this.rateTotalTs1) / this.timescale;return 0 == t || isNaN(t) ? 0 : this.bytesTotal / (128 * t);
      } }, { key: "curRate", value: function value() {
        var t = (this.rate1secTs2 - this.rate1secTs1) / this.timescale;return 0 == t || isNaN(t) ? 0 : this.bytes1sec / (128 * t);
      } }, { key: "latestBandwidth", value: function value() {
        var t = void 0;if (void 0 !== this.lastBwTime) {
          var e = ((void 0 !== this.stopTime ? this.stopTime : new Date()) - this.lastBwTime) / 1e3;e > 0 && (t = this.bytes1sec / (128 * e));
        }if (this.bw1sec.length() > 0) {
          var n = this.bw1sec.get(-1);t = void 0 === t ? n : (t + n) / 2;
        }return void 0 === t && (t = 0), t;
      } }, { key: "latestRate", value: function value() {
        var t = this.curRate();if (this.rate1sec.length() > 0) {
          var e = this.rate1sec.get(-1);t = 0 == t ? e : (t + e) / 2;
        }return t;
      } }, { key: "latestLowBufferCount", value: function value() {
        for (var t = this.lowBuf1sec, e = 0; e < 2; e++) {
          this.lb1sec.length() > e && (t += this.lb1sec.get(-1 * (e + 1)));
        }return t;
      } }, { key: "latestBufLevel", value: function value() {
        var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : void 0;if (this.bl1sec.length() > 0) {
          var e = this.bl1sec.get(-1);t = void 0 !== t ? (t + e) / 2 : e;
        }return void 0 === t && (t = 0), t;
      } }, { key: "_clear1secInterval", value: function value() {
        this.interval1sec && (clearInterval(this.interval1sec), this.interval1sec = void 0);
      } }, { key: "_printMetrics", value: function value() {
        a.default.debug("Buffer level of " + this.id + " track:"), a.default.debug("1 sec:  [" + this.bl1sec.join(", ") + "]"), a.default.debug("Total:  [" + this.blTotal.join(", ") + "]"), a.default.debug("Bandwidth:"), a.default.debug("1 sec:  [" + this.bw1sec.join(", ") + "]"), a.default.debug("Total:  [" + this.bwTotal.join(", ") + "]"), a.default.debug("Low buffer:"), a.default.debug("1 sec:  [" + this.lb1sec.join(", ") + "]"), a.default.debug("Total:  [" + this.lbTotal.join(", ") + "]");
      } }]), t;
  }();e.default = c;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = r(n(127)),
      a = r(n(11)),
      u = function () {
    function t() {
      i(this, t), this.metricsList = {};
    }return o(t, [{ key: "add", value: function value(t, e, n) {
        void 0 !== this.metricsList[t] && a.default.error("[MetricsManager] metric for track ID " + t + " already exists"), this.metricsList[t] = new s.default(t, e, n);
      } }, { key: "remove", value: function value(t) {
        this.metricsList[t] ? (this.metricsList[t].destroy(), this.metricsList[t] = void 0) : a.default.error("[MetricsManager] remove: " + t + " not found"), this.metricsList[t] = void 0;
      } }, { key: "isReadyToStart", value: function value(t) {
        return this.metricsList[t] && this.metricsList[t].isReady();
      } }, { key: "run", value: function value(t) {
        this.metricsList[t] ? this.metricsList[t].start() : a.default.error("[MetricsManager] run: " + t + " not found");
      } }, { key: "stop", value: function value(t) {
        this.metricsList[t] ? this.metricsList[t].stop() : a.default.error("[MetricsManager] stop: no metric found for " + t + " track");
      } }, { key: "reportBandwidth", value: function value(t, e, n) {
        this.metricsList[t] ? this.metricsList[t].reportBandwidth(e, n) : a.default.error("[MetricsManager] Report bandwidth: no metric found for " + t + " track");
      } }, { key: "reportLowBuffer", value: function value(t) {
        this.metricsList[t] ? this.metricsList[t].reportLowBuffer() : a.default.error("[MetricsManager] report low buffer: No metric found for " + t + " track");
      } }, { key: "reportBufLevel", value: function value(t, e) {
        this.metricsList[t] ? this.metricsList[t].reportBufLevel(e) : a.default.error("[MetricsManager] report buffer level: No metric found for " + t + " track");
      } }, { key: "getMetrics", value: function value(t) {
        if (this.metricsList[t]) return this.metricsList[t];a.default.error("[MetricsManager] get metric: No metric found for " + t + " track");
      } }]), t;
  }();e.default = u;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(11)),
      o = r(n(61));e.default = function () {
    function t(t, e) {
      var n = "vp8" == e || "vp9" == e ? "webm" : "mp4";return K && "mp4a.40.34" == e ? t + "/" + n + '; codecs="mp3"' : t + "/" + n + '; codecs="' + e + '"';
    }function e(t) {
      return t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds();
    }function n() {
      void 0 !== R && (clearTimeout(R), R = void 0);
    }function r() {
      return void 0 !== R;
    }function s() {
      i.default.debug("_cancelSeekTimer"), void 0 !== O && (i.default.debug("_cancelSeekTimer intro"), clearTimeout(O), O = void 0);
    }function a() {
      s(), i.default.debug("_setSeekTimer"), O = setTimeout(u, 5e3);
    }function u() {
      i.default.error("[MSE] error: Seek timeout!"), F = !1, O = void 0, U();
    }function c(t) {
      S.currentTime != t && (i.default.debug("seek ", t, S.currentTime), S.currentTime = t);
    }function f() {
      var t = S.buffered.length;if (t > 0) {
        i.default.debug("[MSE]: _seekToBufferedStart");for (var e = 0; e < x.length; e++) {
          x[e].buffered.length > 0 && i.default.debug("[MSE] " + x[e].stream_id + ": " + x[e].buffered.start(0));
        }try {
          l(), T.playbackTime = S.currentTime, T.bufferedTime = S.buffered.end(t - 1) - S.currentTime, T.worldTime = new Date(), E = !0;
        } catch (t) {
          i.default.debug("Seek to buffered start failed: ", t);
        }
      }
    }function l() {
      var t = S.currentTime,
          e = !1;if (S.buffered.length > 0) {
        t < S.buffered.start(0) && (t = S.buffered.start(0), i.default.debug("Current position is behind the start of the first buffered range. Seek to the start."), e = !0);for (var r = 1; r < S.buffered.length; r++) {
          if (t >= S.buffered.end(r - 1) && t < S.buffered.start(r)) {
            t = S.buffered.start(r), i.default.debug("Current position is between " + (r - 1) + " and " + r + " . Seek to the start of " + r), e = !0;break;
          }
        }if (e) c(t), n();else if (P.value == S.currentTime && P.value !== T.playbackTime) {
          P.count += 1;var o = (new Date() - P.time) / 1e3;P.count > 10 && o > 2 && (i.default.debug("Stuck on " + P.value + ". Seek by " + o), S.currentTime += o, n());
        } else P.time = new Date(), P.value = S.currentTime, P.count = 1;
      }
    }function h() {
      var t = S.currentTime;if (M && I && (t += (new Date() - I) / 1e3), void 0 === C || t - C > 30) for (var e = 0; e < x.length; e++) {
        var n = x[e];if (n.buffered.length > 0) {
          var r = t - 30;r - n.buffered.start(0) > 60 && (n.removeRange(0, Math.round(r)), C = t);
        }
      }
    }function d(t) {
      var e = S.play();void 0 !== e ? e.catch(function (t) {
        z();
      }) : tt && !et && (t ? et = !0 : z());
    }function p() {
      i.default.debug("onPlay"), f(), W();
    }function v() {
      i.default.debug("Seek start"), E && (F = !0, a());
    }function m() {
      i.default.debug("Seek end"), setTimeout(function () {
        F = !1;
      }, 1e3), s();
    }function g() {
      _();
    }function _() {
      var t = x.length;if (t > 0) {
        for (var e = 0; e < t; e++) {
          if (x[e].closed) return;
        }if (E || k) {
          if (M) h();else if (B) {
            i.default.debug("[MSE] onProgress: buffered in progress");var n = S.currentTime + (new Date() - L) / 1e3;V(n, S.currentTime);
          } else {
            var s = new Date() - T.worldTime,
                a = T.playbackTime + s / 1e3 - S.currentTime + T.bufferedTime;if (o.default.display("latency", a), F || k || S.ended) i.default.debug("[MSE] onProgress: nothing called, _seekInProgress " + F + ", _removeInProgress " + k + ", ended " + S.ended);else {
              var u = S.buffered.end(S.buffered.length - 1),
                  d = u - S.currentTime;if (H > 0 && d > G + H) return void (q ? U() : (c(u - .8 * G), q = !0));q = !1, h(), (r() || X) && l(), j(S.currentTime), b();
            }
          }
        } else f();
      }
    }function b() {
      S.paused && !M && (i.default.debug("Call play from onProgress"), d());
    }function A() {
      S.removeEventListener("canplay", A), y(1), i.default.debug("[MSE]: ", " canplay");
    }function y(t) {
      i.default.debug("[MSE]: _setPlaybackRate", t, S.readyState), S.readyState <= 2 ? S.addEventListener("canplay", A) : S.playbackRate = t;
    }var w = void 0,
        S = void 0,
        x = [],
        E = !1,
        T = {},
        k = !1,
        C = void 0,
        F = !1,
        B = !1,
        M = !1,
        P = { value: 0, count: 0, time: 0 },
        I = void 0,
        L = void 0,
        O = void 0,
        R = void 0,
        D = void 0,
        N = void 0,
        j = void 0,
        U = void 0,
        V = void 0,
        W = void 0,
        z = void 0,
        Q = !1,
        Y = void 0,
        H = -1,
        G = 0,
        q = !1,
        J = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        K = "undefined" != typeof InstallTrigger,
        X = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
        Z = !!document.documentMode,
        $ = !Z && !!window.StyleMedia,
        tt = ((!!window.chrome && !!window.chrome.webstore || J) && window.CSS, /Android|Opera Mini/i.test(navigator.userAgent)),
        et = !1;this.startLogging = function (t) {
      Q = !1, void 0 === Y && (Y = {}), void 0 === Y[t] && (Y[t] = { times: [], prevTime: 0, sumTime: 0, stamps: [], gaps: [], thresh: 60, avg: void 0 });
    }, this.setPositionControl = function () {
      n(), R = setTimeout(function () {
        n();
      }, 3e4);
    }, this.setLatencyTolerance = function (t, e) {
      (H = t) < 3 && (Z || $) && (H = 3), G = e;
    }, this.isMediaSourceSupported = function () {
      return "MediaSource" in window;
    }, this.isMobile = function () {
      return tt;
    }, this.isCodecSupported = function (e, n) {
      var r = !1;if (this.isMediaSourceSupported()) {
        if ((Z || $) && ("mp4a.40.34" == n || "mp4a.6B" == n || "mp4a.6B" == n)) return !1;r = MediaSource.isTypeSupported(t(e, n));
      }return r;
    }, this.init = function (t) {
      D && A ? ((w = new MediaSource()).addEventListener("sourceopen", D), (S = t).addEventListener("play", p), S.addEventListener("progress", _), S.addEventListener("timeupdate", g), S.addEventListener("seeking", v), S.addEventListener("seeked", m), S.src = URL.createObjectURL(w)) : i.default.error("[MSE] error: ", "necessary callbacks are not defined.");
    }, this.listBuffers = function () {
      i.default.debug("[MSE]", "listBuffers", x);
    }, this.createSourceBuffer = function (e, n, r) {
      function o(t, e) {
        var n = !0;try {
          t.appendBuffer(e);
        } catch (t) {
          i.default.error("Append exception!", t), n = !1;
        }return n;
      }function s(t, e) {
        t.updating ? t.addEventListener("updateend", function n() {
          t.updating || (t.removeEventListener("updateend", n), e());
        }) : e();
      }var a = w.addSourceBuffer(t(e, n));return a.mode = "segments", a.segments = [], a.initSeg = void 0, a.startupCount = 0, a.appendedCount = 0, a.setTimestampOffset = function (t) {
        var e = this;s(e, function () {
          e.timestampOffset = t;
        });
      }, a.setStartupCount = function (t) {
        this.startupCount = t, this.appendedCount = 0;
      }, a.filterOut = function (t) {
        if (void 0 !== t) for (var e = this.segments.length, n = 0; n < e; n++) {
          if (this.segments[n].ts >= t) {
            this.segments.splice(n, e - n);break;
          }
        }
      }, a.pushInit = function (t) {
        var e = this;e.initSeg = t, i.default.debug("[MSE]: " + e.stream_id + " pushInit"), e.pushSegment(t, []);
      }, a.pushSegment = function (t, e) {
        var n = this;if (n.segments.push({ data: t, ts: e[0] }), s(n, function () {
          var t = n.appendedCount < n.startupCount ? n.appendedCount : 0;if (t < n.segments.length && !n.closed) {
            o(n, (n.appendedCount < n.startupCount ? n.segments[t] : n.segments.shift()).data) ? ++n.appendedCount == n.startupCount && n.segments.splice(0, n.appendedCount) : U();
          }
        }), Q) for (var r = Y[this.stream_id], a = 0; a < e.length; a++) {
          var u = r.stamps.length > 0 ? e[a] - r.stamps[r.stamps.length - 1] : 0,
              c = 0;if (r.times.length > 0) {
            var f = new Date();c = f - r.prevTime, r.prevTime = f;
          } else r.prevTime = new Date();if (void 0 === r.avg) for (var l = 1; l < r.stamps.length; l++) {
            var h = r.stamps[l] - r.stamps[l - 1];if (h > 0) {
              r.avg = h;break;
            }
          }if (r.stamps.length == r.thresh) {
            if (i.default.debug("[MSE]: " + this.stream_id + " processed " + r.thresh + " frames"), 0 == r.gaps.length) r.sumTime > r.avg * r.thresh * 1.1 && (i.default.debug("Frames come slow!!!", r.sumTime, r.avg * r.thresh), i.default.debug("Intervals: [" + r.times.join(", ") + "]"));else {
              for (var d = [], p = 0; p < r.gaps.length; p++) {
                d.push("{val: " + r.gaps[p].val + ", idx: " + r.gaps[p].idx + "}");
              }i.default.debug("Gaps: [" + d.join(", ") + "], avgDuration " + r.avg), i.default.debug("Stamps: [" + r.stamps.join(", ") + "]"), r.sumTime > r.avg * r.thresh * 1.1 && i.default.debug("Frames come slow!!!", r.sumTime, r.avg * r.thresh), i.default.debug("Intervals: [" + r.times.join(", ") + "]");
            }r.times = [], r.sumTime = 0, r.stamps = [], r.gaps = [];
          }r.times.push(c), r.sumTime += c, r.stamps.push(e[a]), Math.abs(u - r.avg) > 1 && r.gaps.push({ val: u, idx: r.stamps.length - 1 });
        }
      }, a.getSegments = function () {
        return { init: this.initSeg, segments: this.segments };
      }, a.isStartingUp = function () {
        return this.appendedCount < this.startupCount;
      }, a.removeAll = function () {
        this.abort();var t = this;t.initSeg = void 0, t.segments = [];var e = t.buffered.length;e > 0 && t.removeRange(t.buffered.start(0), t.buffered.end(e - 1));
      }, a.removeRange = function (t, e) {
        var n = this;s(n, function () {
          i.default.debug("remove started", t, e, S.currentTime, n.buffered.length), k = !0, n.remove(t, e), s(n, function () {
            i.default.debug("remove ended"), k = !1;
          });
        });
      }, a.addEventListener("error", function (t) {
        i.default.error("[MSE]:", "SourceBuffer Error", t, this.stream_id);
      }), a.stream_id = r, x.push(a), a;
    }, this.startPlayback = function () {
      i.default.debug("[MSE]: startPlayback buffered ", S.buffered.length), S.buffered.length > 0 && i.default.debug("[MSE]: mse buffer", S.buffered.start(0), S.buffered.end(0)), (0 == S.currentTime || M) && d();
    }, this.continue = function () {
      i.default.debug("[MSE]: continue buffered ", S.buffered.length), S.buffered.length > 0 && i.default.debug("[MSE]: mse buffer", S.buffered.start(0), S.buffered.end(0)), y(1), F && a(), L = void 0, B = !1;
    }, this.wait = function () {
      y(0), s(), L = new Date(), B = !0;
    }, this.callbacks = function (t) {
      D = t.onSourceOpen, N = t.onTimeUpdate, j = t.onProgress, U = t.onCrash, V = t.onWaitUpdate, W = t.onPlayStarted, z = t.onPlayFailed;
    }, this.resetPosition = function () {
      i.default.debug("[MSE] Reset position"), s(), n(), S && (S.currentTime = 0), E = !1, T = {}, P = { value: 0, count: 0, time: 0 }, C = void 0, I = void 0, L = void 0, M = !1, B = !1, q = !1, k = !1, F = !1;
    }, this.handlePause = function () {
      S && (M = !0, I = new Date(), s(), S.pause(), i.default.debug("Paused at: " + e(I)));
    }, this.handlePlay = function (t) {
      if (S && (M = !1, d(t), I)) {
        var n = new Date(),
            r = n - I;i.default.debug("Play at: " + e(n)), i.default.debug("Going to seek by " + r / 1e3 + " seconds.");var o = Math.ceil(S.currentTime + r / 1e3),
            s = S.buffered.length;if (s > 0) {
          var a = S.buffered.end(s - 1);i.default.debug("Calculated position " + o + ". Buffer end is " + a), a < o && (i.default.debug("Seek to buffer end " + a + " instead of " + o), o = a);
        }c(o);
      }
    }, this.clear = function () {
      for (var t = 0; t < x.length; t++) {
        try {
          w.removeSourceBuffer(x[t]);
        } catch (t) {
          i.default.error("Failed to remove source buffer:", t);
        }
      }this.resetPosition(), x = [], S && (S.removeEventListener("play", p), S.removeEventListener("progress", _), S.removeEventListener("timeupdate", g), S.removeEventListener("seeking", v), S.removeEventListener("seeked", m), S.src = "", S = void 0), w && (w.removeEventListener("sourceopen", D), w = void 0), D = void 0, N = void 0, j = void 0, U = void 0, i.default.debug("[MSE] cleared source buffers and video element");
    };
  };
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = { name: "Nimble Player", composer: new (function (t) {
      return t && t.__esModule ? t : { default: t };
    }(n(88)).default)() };e.default = r;
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      o = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(11)),
      s = function () {
    function t(e, n, i, s, a) {
      r(this, t), this.enabled = !1, this.period = s, this.stream = n, this.timescale = i, this.streamId = parseInt("F0", 16) + e % 16, this.metricsManager = a, this.metricsManager.add(this.streamId, "probe", i), o.default.debug("[Prober] constructor: " + n + ", timescale: " + i + ", period: " + s);
    }return i(t, [{ key: "destroy", value: function value() {
        this.metricsManager.remove(this.streamId), this._clearBufCheckInterval();
      } }, { key: "id", value: function value() {
        return this.streamId;
      } }, { key: "streamName", value: function value() {
        return this.stream;
      } }, { key: "start", value: function value() {
        this.enabled = !0, this.durations = [], this.firstTimestamp = void 0, this.lastTimestamp = void 0, this.expectedEndTimestamp = void 0, this.startProbeCallback(this, this.period + 1);
      } }, { key: "isEnabled", value: function value() {
        return this.enabled;
      } }, { key: "stop", value: function value() {
        this.isEnabled() && (this.enabled = !1, this.cancelProbeCallback(this), this.metricsManager.stop(this.streamId), this._clearBufCheckInterval());
      } }, { key: "receiveInit", value: function value() {
        if (this.initTime = new Date(), this.initReceivedCallback(), this.period >= 1e3) {
          var t = this;this.bufCheckInterval = setInterval(function () {
            if (t.firstTimestamp) {
              var e = (t.lastTimestamp - t.firstTimestamp) / t.timescale - (new Date() - t.initTime) / 1e3;t.metricsManager.reportBufLevel(t.streamId, e), e <= 0 && t.metricsManager.reportLowBuffer(t.streamId);
            } else t.metricsManager.reportBufLevel(t.streamId, 0), t.metricsManager.reportLowBuffer(t.streamId);
          }, 500);
        }
      } }, { key: "receiveFrame", value: function value(t, e, n) {
        if (void 0 === this.firstTimestamp ? (o.default.debug("[Prober] receiveFrame: firstTimestamp " + n), this.firstTimestamp = n, this.expectedEndTimestamp = this.period * this.timescale / 1e3 + n) : this.durations.push(n - this.lastTimestamp), this.lastTimestamp = n, n + this._findDuration() > this.expectedEndTimestamp) {
          o.default.debug("[Prober] receiveFrame: lastTimestamp " + n);var r = (n - this.firstTimestamp) / this.timescale - (new Date() - this.initTime) / 1e3;this.metricsManager.reportBufLevel(this.streamId, r), r <= 0 && this.metricsManager.reportLowBuffer(this.streamId), this.stop(), this.probeFinishedCallback();
        }
      } }, { key: "_findDuration", value: function value() {
        var t = 0,
            e = 0,
            n = {};for (e = 0; e < this.durations.length; e++) {
          var r = this.durations[e];n[r] = n[r] > 0 ? n[r] + 1 : 1;
        }for (e in n) {
          if (n[e] > 0) {
            var i = parseInt(e);i > 0 && (t = i);
          }
        }return t;
      } }, { key: "_clearBufCheckInterval", value: function value() {
        this.bufCheckInterval && (clearInterval(this.bufCheckInterval), this.bufCheckInterval = void 0);
      } }, { key: "callbacks", set: function set(t) {
        this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.initReceivedCallback = t.onInitReceived, this.probeFinishedCallback = t.onProbeFinished;
      } }]), t;
  }();e.default = s;
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      o = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(11)),
      s = function () {
    function t(e) {
      r(this, t), e <= 0 && o.default.error("[RingBuffer] invalid size in constructor " + e), this.buffer = [], this.size = e, this.start = 0;
    }return i(t, [{ key: "push", value: function value(t) {
        this.buffer.length == this.size ? (this.buffer[this.start++] = t, this.start == this.size && (this.start = 0)) : this.buffer.push(t);
      } }, { key: "get", value: function value(t) {
        var e = void 0;if (t >= 0 && t < this.buffer.length) {
          var n = this.start + t;n >= this.buffer.length && (n -= this.buffer.length), e = this.buffer[n];
        } else if (t < 0 && -1 * t <= this.buffer.length) {
          var r = this.start + t;r < 0 && (r += this.buffer.length), e = this.buffer[r];
        } else o.default.error("[RingBuffer] attempt to read from invalid index " + t);return e;
      } }, { key: "join", value: function value(t) {
        var e = "";this.buffer.length > 0 && (e += this.buffer[this.start]);for (var n = 1; n < this.buffer.length; n++) {
          var r = this.start + n;r >= this.buffer.length && (r -= this.buffer.length), e += t + this.buffer[r];
        }return e;
      } }, { key: "clear", value: function value() {
        this.buffer = [], this.start = 0;
      } }, { key: "drop", value: function value() {
        this.buffer = [], this.size = 0, this.start = 0;
      } }, { key: "length", value: function value() {
        return this.buffer.length;
      } }]), t;
  }();e.default = s;
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function i(t) {
    var e = t.getBoundingClientRect();return { top: e.top + pageYOffset, left: e.left + pageXOffset, right: e.right + pageXOffset };
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(124)),
      a = function () {
    function t(e) {
      if (r(this, t), this._playPauseBtnClick = function (t) {
        this._isUserActionAcceptable() && (this.play_pause_button.classList.contains("sldp-icon-play") ? this._handlePlay(!0) : this._handlePause());
      }.bind(this), this._configBtnClick = function (t) {
        var e = this;if (this.cfg_dialog) return this.cfg_dialog.remove(), void delete this.cfg_dialog;this.cfg_dialog = document.createElement("ul"), this.cfg_dialog.className = "sldp_cfg_dialog";for (var n = 0; n < this.quality_ar.length; n++) {
          !function (t) {
            var n = e.quality_ar[t],
                r = document.createElement("li");n == e.cur_quality && (n = "&#10003 " + n), r.innerHTML = n, r.onclick = function () {
              this.onQualityChangeCallback && (this.onQualityChangeCallback(n), this.cfg_dialog.remove(), delete this.cfg_dialog);
            }.bind(e), e.cfg_dialog.appendChild(r);
          }(n);
        }this.player_wrapper.insertBefore(this.cfg_dialog, this.control_bar);
      }.bind(this), this._volumeBtnClick = function (t) {
        var e = 0;t.currentTarget.classList.contains("sldp-icon-volume-medium") ? this.video_element.prev_volume = this.video_element.volume : e = 100 * this.video_element.prev_volume, this._adjustVolume(e);
      }.bind(this), this._expandBtnClick = function (t) {
        var e = this.player_wrapper;this._isFullscreenMode() ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
      }.bind(this), this._fullscreenchangeHandler = function (t) {
        this._isFullscreenMode() ? (this.video_element.height_prev = this.video_element.offsetHeight, this.video_element.width_prev = this.video_element.offsetWidth, this.video_element.height = screen.height, this.video_element.width = screen.width, this.player_wrapper.style.height = screen.height + "px", this.player_wrapper.style.width = screen.width + "px") : (this.video_element.height = this.video_element.height_prev, this.video_element.width = this.video_element.width_prev, this.player_wrapper.style.height = this.video_element.height_prev + "px", this.player_wrapper.style.width = this.video_element.width_prev + "px");
      }.bind(this), this.settings = e, this.settings.controls = !0, this.container = document.getElementById(this.settings.container), this.container) {
        this.quality_ar = [], this.can_play = this.settings.autoplay, new s.default(), this._create_player_wrapper();var n = this.settings.audio_only ? "audio" : "video";this.video_element = document.createElement(n), this._setSplashScreen(), this.settings.audio_only || "number" != typeof this.settings.height || (this.video_element.height = this.settings.height, this.player_wrapper.style.height = e.height + "px"), "number" == typeof this.settings.width && (this.video_element.width = this.settings.width, this.player_wrapper.style.width = e.width + "px"), this.player_wrapper.appendChild(this.video_element), this.settings.controls && (this.video_element.onclick = function (t) {
          t.target == this.video_element && this._playPauseBtnClick(t);
        }.bind(this), this._create_controls(), this.settings.audio_only ? this.settings.audio_title && this._addMessage(this.settings.audio_title) : this._createFullscreenHandler(), this._create_loading_indicator());
      }
    }return o(t, [{ key: "destroy", value: function value() {
        for (this.settings.controls && !this.settings.audio_only && this._removeFullscreenHandler(); this.container.firstChild;) {
          this.container.removeChild(this.container.firstChild);
        }this.player_wrapper = void 0;
      } }, { key: "showNotSupported", value: function value() {
        this._removeSplashScreen(), this.settings.controls && (this.settings.audio_only || this._removeFullscreenHandler(), this._removePlayerControls()), this._addMessage("MediaSource is not supported in current browser");
      } }, { key: "showNotPlaying", value: function value() {
        this._removeSplashScreen(), this.settings.controls && this._togglePlayButton(!0), this._addMessage("No playable source found");
      } }, { key: "onPlaybackStarted", value: function value() {
        this._removeSplashScreen();
      } }, { key: "onPlaybackFinished", value: function value() {
        this._setSplashScreen();
      } }, { key: "triggerPlay", value: function value() {
        this._handlePlay();
      } }, { key: "triggerPause", value: function value() {
        this._handlePause();
      } }, { key: "triggerVolume", value: function value(t) {
        this.video_element && (t > 100 ? t = 100 : t < 0 && (t = 0), this._adjustVolume(t));
      } }, { key: "_create_player_wrapper", value: function value() {
        var t = document.createElement("div");t.className = this.settings.audio_only ? "sldp_player_wrp sldp_player_wrp_audio" : "sldp_player_wrp sldp_player_wrp_video", this.settings.controls && !this.settings.audio_only && (t.onmousemove = function (t) {
          this.control_bar.style.opacity = "1", this.control_hide_delay && clearTimeout(this.control_hide_delay), this.control_hide_delay = setTimeout(function () {
            this.control_bar.style.opacity = "0";
          }.bind(this), 2e3);
        }.bind(this), t.onmouseout = function () {
          this.control_bar.style.opacity = "0";
        }.bind(this)), this.container.appendChild(t), this.player_wrapper = t;
      } }, { key: "_addMessage", value: function value(t) {
        this._removeMessage();var e = document.createElement("div");e.className = "sldp_message_wrp";var n = document.createElement("span");this.settings.audio_only ? (e.className = this.settings.controls ? "sldp_message_wrp" : "sldp_message_wrp sldp_message_wrp_audio_noctrl", n.className = "sldp_message") : (e.className = "sldp_message_wrp sldp_message_wrp_video", n.className = "sldp_message sldp_message_pad"), n.innerHTML = t, e.appendChild(n), this.player_wrapper.appendChild(e);
      } }, { key: "_removeMessage", value: function value() {
        var t = this.player_wrapper.getElementsByClassName("sldp_message_wrp")[0];t && this.player_wrapper.removeChild(t);
      } }, { key: "_create_controls", value: function value() {
        var t = document.createElement("div");if (t.className = this.settings.audio_only ? "sldp_cbar sldp_cbar_audio" : "sldp_cbar sldp_cbar_video", !this.settings.audio_only) {
          var e = document.createElement("div");e.className = "sldp_expand_btn", e.classList.add("sldp_btn"), e.classList.add("sldp-icon-enlarge"), e.onclick = this._expandBtnClick, t.appendChild(e), this.expand_button = e;var n = document.createElement("div");n.className = "sldp_config_btn", n.classList.add("sldp_btn"), n.classList.add("sldp-icon-cog"), n.onclick = this._configBtnClick, t.appendChild(n), this.config_button = n;
        }var r = document.createElement("div");r.className = "sldp_play_pause_btn", r.classList.add("sldp_btn"), r.classList.add(this.settings.autoplay ? "sldp-icon-pause" : "sldp-icon-play"), r.onclick = this._playPauseBtnClick, t.appendChild(r);var i = document.createElement("div");i.className = "sldp_volume_wrp", this.settings.audio_only || (i.onmouseover = function (t) {
          this.volume_slider.style.display = "block";
        }.bind(this), i.onmouseout = function (t) {
          this.volume_slider.style.display = "none";
        }.bind(this)), t.appendChild(i);var o = document.createElement("div");o.className = "sldp_volume_btn", o.classList.add("sldp_btn"), o.classList.add("sldp-icon-volume-medium"), o.onclick = this._volumeBtnClick, i.appendChild(o), this.player_wrapper.appendChild(t), this.volume_button = o, this.volume_wrapper = i, this.play_pause_button = r, this.control_bar = t, this._create_volume_slider();
      } }, { key: "_create_volume_slider", value: function value() {
        var t = document.createElement("div");t.className = "sldp_volume_slider_wrp";var e = document.createElement("div");e.className = "sldp_volume_slider", this.thumb = document.createElement("div"), this.thumb.className = "sldp_volume_thumb", e.appendChild(this.thumb), t.appendChild(e), t.onmousedown = function (t) {
          var n = i(e),
              r = i(this.thumb),
              o = t.pageX - (r.right - r.left) / 2 - n.left;o < 0 ? o = 0 : o > 100 && (o = 100), this._adjustVolume(o);
        }.bind(this), this.thumb.onmousedown = function (t) {
          var n = i(this.thumb),
              r = t.pageX - n.left,
              o = i(e);return document.onmousemove = function (t) {
            var n = t.pageX - r - o.left;n < 0 ? n = 0 : n > 100 && (n = 100);var i = e.offsetWidth - this.thumb.offsetWidth;0 == i && (i = 100), n > i && (n = i), this._adjustVolume(n);
          }.bind(this), document.onmouseup = function (t) {
            document.onmousemove = document.onmouseup = null;
          }, t.stopPropagation(), !1;
        }.bind(this), this.thumb.ondragstart = function () {
          return !1;
        }, this.volume_wrapper.appendChild(t), this.volume_slider = e, this.settings.audio_only || (this.volume_slider.style.display = "none");
      } }, { key: "_adjustVolume", value: function value(t) {
        this.thumb.style.left = t + "px";var e = t / 100;this.video_element.volume !== e && (this.video_element.volume = e, this._onVolumeSet(t)), t > 0 ? (this.volume_button.classList.remove("sldp-icon-volume-mute"), this.volume_button.classList.add("sldp-icon-volume-medium")) : (this.volume_button.classList.remove("sldp-icon-volume-medium"), this.volume_button.classList.add("sldp-icon-volume-mute"));
      } }, { key: "_setSplashScreen", value: function value() {
        this.settings.splash_screen && (this.video_element.style["background-image"] = "url('" + this.settings.splash_screen + "')", this.video_element.style["background-size"] = "cover");
      } }, { key: "_removeSplashScreen", value: function value() {
        this.settings.splash_screen && (this.video_element.style["background-image"] = "", this.video_element.style["background-size"] = "", this.video_element.style.background = "#000");
      } }, { key: "_removePlayerControls", value: function value() {
        var t = this.player_wrapper.getElementsByClassName("sldp_cbar")[0];t && this.player_wrapper.removeChild(t);var e = this.player_wrapper.getElementsByClassName("sldp_indicator")[0];e && this.player_wrapper.removeChild(e);
      } }, { key: "_handlePlay", value: function value(t) {
        this.can_play && (this.settings.audio_only && this.settings.audio_title ? this._addMessage(this.settings.audio_title) : this._removeMessage(), this._togglePlayButton(!1), this.onPlayCallback && this.onPlayCallback(t));
      } }, { key: "_handlePause", value: function value() {
        this._togglePlayButton(!0), this.onPauseCallback && this.onPauseCallback();
      } }, { key: "_togglePlayButton", value: function value(t) {
        var e = this.play_pause_button,
            n = t ? "sldp-icon-pause" : "sldp-icon-play",
            r = t ? "sldp-icon-play" : "sldp-icon-pause";e.classList.remove(n), e.classList.add(r);
      } }, { key: "_isFullscreenMode", value: function value() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
      } }, { key: "_createFullscreenHandler", value: function value() {
        document.addEventListener("webkitfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("mozfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("fullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("MSFullscreenChange", this._fullscreenchangeHandler, !1);
      } }, { key: "_removeFullscreenHandler", value: function value() {
        document.removeEventListener("webkitfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("mozfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("fullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("MSFullscreenChange", this._fullscreenchangeHandler);
      } }, { key: "_create_loading_indicator", value: function value() {
        var t = document.createElement("div");t.className = "sldp_indicator", this.player_wrapper.appendChild(t), this.indicator = { ui: this, fps: 60, element: t, counter: 0, percentage: 0, max_width: 1, release_duration: .5, start: function start() {
            this.interval && clearInterval(this.interval), this.counter = 0, this.element.style.opacity = 1, this.max_width = this.ui.video_element.offsetWidth, this.interval = setInterval(this.onInterval.bind(this), 1e3 / this.fps);
          }, release: function release() {
            this.interval && clearInterval(this.interval), this.counter = 0, this.percentage_per_frame = (100 - this.percentage) / (this.release_duration * this.fps), this.opacity_per_frame = .9 / (this.release_duration * this.fps), this.interval = setInterval(this.onReleaseInterval.bind(this), 1e3 / this.fps);
          }, onInterval: function onInterval() {
            this.counter += 1, this.percentage = 8 * Math.log(this.counter), this.ajust_element_width(), 45 < this.percentage && this.release();
          }, onReleaseInterval: function onReleaseInterval() {
            this.percentage += this.percentage_per_frame, 100 <= this.percentage && (this.percentage = 100, clearInterval(this.interval)), this.ajust_element_width();var t = parseFloat(this.element.style.opacity) || 1;this.element.style.opacity = "" + (t - this.opacity_per_frame);
          }, ajust_element_width: function ajust_element_width() {
            this.element.style.width = parseInt(.01 * this.max_width * this.percentage) + "px";
          } }, this.settings.autoplay && this.indicator.start();
      } }, { key: "videoElement", get: function get() {
        return this.video_element;
      } }, { key: "qualities", set: function set(t) {
        this.quality_ar = t, this.cur_quality = t[0];
      } }, { key: "currentQuality", set: function set(t) {
        this.cur_quality = t;
      } }, { key: "onPlay", set: function set(t) {
        this.onPlayCallback = t;
      } }, { key: "onPause", set: function set(t) {
        this.onPauseCallback = t;
      } }, { key: "canPlay", set: function set(t) {
        this.can_play = !!t;
      } }, { key: "onQualityChange", set: function set(t) {
        this.onQualityChangeCallback = t;
      } }, { key: "onUserAction", set: function set(t) {
        this._isUserActionAcceptable = t;
      } }, { key: "onVolumeSet", set: function set(t) {
        this._onVolumeSet = t;
      } }]), t;
  }();e.default = a;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(139)),
      o = r(n(11));e.default = function () {
    function t(t, e, n, r, i) {
      var s = void 0,
          a = r,
          u = r - (s = t.lastSample).rawts;return (u < 0 || u > 10 * t.timescale) && (o.default.debug("Adjust DTS difference!!!", u), u = t.lastSampleDuration), r = s.ts + u, s.duration = u, s.altDur = Math.round(u / (t.timescale / 1e3)), t.lastSampleDuration = u, t.lastSample = { data: n, ts: r, rawts: a, altTs: Math.round(r / (t.timescale / 1e3)), sap: e }, s;
    }function e(t) {
      var e = i.default.createElement("EBML", t);return i.default.createElement("EBMLVersion", e, 1), i.default.createElement("EBMLReadVersion", e, 1), i.default.createElement("EBMLMaxIDLength", e, 4), i.default.createElement("EBMLMaxSizeLength", e, 8), i.default.createElement("DocType", e, "webm"), i.default.createElement("DocTypeVersion", e, 2), i.default.createElement("DocTypeReadVersion", e, 2), e;
    }function n(t) {
      var e = i.default.createElement("Segment", t);return e._unbound = !0, e;
    }function r(t) {
      var e = i.default.createElement("SegmentInfo", t);return i.default.createElement("TimecodeScale", e, 1e6), i.default.createElement("MuxingApp", e, "sldp-player"), i.default.createElement("WritingApp", e, "sldp-player"), e;
    }function s(t) {
      for (var e = i.default.createElement("Tracks", t), n = 0; n < c.length; n++) {
        var r = "video" == c[n].type,
            o = i.default.createElement("TrackEntry", e);if (i.default.createElement("TrackNumber", o, c[n].id), i.default.createElement("TrackUID", o, c[n].id), i.default.createElement("FlagLacing", o, 0), i.default.createElement("Language", o, "und"), i.default.createElement("CodecID", o, "V_" + c[n].codec), i.default.createElement("CodecName", o, c[n].codec), i.default.createElement("TrackType", o, r ? 1 : 2), r) {
          var s = i.default.createElement("Video", o);i.default.createElement("PixelWidth", s, c[n].width), i.default.createElement("PixelHeight", s, c[n].height);
        }
      }return e;
    }function a(t, e, n) {
      var r = i.default.createElement("Cluster", t);i.default.createElement("Timecode", r, n[0].altTs);for (var o = 0, s = 0; s < n.length; s++) {
        var a = i.default.createElement("SimpleBlock", r);a.sap = n[s].sap, a.timecode = o, a.trackNumber = e.id, a.frame = n[s].data, o += n[s].altDur;
      }
    }function u(t) {
      for (var e = void 0, n = 0; n < c.length; n++) {
        if (c[n].id == t) {
          e = c[n];break;
        }
      }return void 0 === e && o.default.error("[WebmComposer]: track ID " + t + " is not found!"), e;
    }var c = [],
        f = 1;this.init = function () {
      c = [], f = 1;
    }, this.addTrack = function (t, e) {
      var n = { id: f, type: t, timescale: e.timescale, curSeqNumber: 0, lastSampleDuration: 0 };switch (t) {case "video":
          n.codec = e && "codec" in e ? e.codec : "VP8", n.width = e && "width" in e ? e.width : 0, n.height = e && "height" in e ? e.height : 0;break;case "audio":
          o.default.error("[WebmComposer] addTrack: audio is not supported!");}return c.push(n), f++, n;
    }, this.setTrackParams = function (t, e) {
      var n = u(t);return n && ("width" in e && (n.width = e.width), "height" in e && (n.height = e.height), "sequenceNumber" in e && (n.curSeqNumber = e.sequenceNumber), o.default.debug("setTrackParams", t, e)), n;
    }, this.setBaseSample = function (t, e, n, r) {
      var i = u(t);i ? (o.default.debug("[WebmComposer] setBaseSample:", i.type, n), i.lastSample = { data: e, ts: n, rawts: n, altTs: Math.round(n / (i.timescale / 1e3)), sap: !0 }) : o.default.error("[WebmComposer] setBaseSample: track " + t + " not found!!!");
    }, this.initSegment = function () {
      var t = i.default.createFile();e(t);var o = n(t);return r(o), s(o), t.write();
    }, this.mediaSegment = function (e, n, r) {
      var o = void 0,
          s = i.default.createFile(),
          c = u(e),
          f = [],
          l = [];if (c) {
        var h = 0,
            d = [];for (h = 0; h < n.length; h++) {
          var p = n[h],
              v = t(c, p.sap, p.data, p.ts);void 0 !== v && (d.push(v), f.push(v.ts), l.push(v.sap));
        }r && void 0 !== c.lastSample && (c.lastSample.duration = c.lastSampleDuration, d.push(c.lastSample), f.push(d[d.length - 1].ts), l.push(d[d.length - 1].sap), c.lastSample = void 0), d.length > 0 && (a(s, c, d), o = { ts: f, sap: l, sn: c ? c.curSeqNumber - 1 : void 0, data: s.write() });
      }return o;
    };
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(138)),
      o = r(n(49)),
      s = r(n(90)),
      a = function a() {
    this._cursor = new o.default();
  };a.create = function (t) {
    var e = new a();return e.type = t, e.boxes = [], e;
  }, a.prototype._boxContainers = ["dinf", "mdia", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak"], a.prototype._boxProcessors = {}, a.prototype._writeFieldArray = function (t, e, n) {
    for (var r = 0; r < n.length; r++) {
      this._writeField(t, e, n[r]);
    }
  }, a.prototype._writeFullBox = function () {
    this._writeField("uint", 8, this.version), this._writeField("uint", 24, this.flags);
  }, a.prototype._procEntries = function (t, e, n) {
    for (var r = 0; r < e; r++) {
      n.call(this, this[t][r]);
    }
  }, a.prototype._procSubBoxes = function (t, e) {
    for (var n = 0; n < e; n++) {
      this._rawo ? this[t][n].write() : this.size += this[t][n].getLength();
    }
  }, a.prototype.append = function (t, e) {
    s.default.appendBox(this, t, e);
  }, a.prototype.getLength = function () {
    if (this._rawo = null, this.size = 0, this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type)) for (var t = 0; t < this.boxes.length; t++) {
      this.size += this.boxes[t].getLength();
    }return this._data && this._writeData(this._data), this.size;
  }, a.prototype.write = function () {
    if (this._cursor.offset = this._parent._cursor.offset, 0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size), this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type)) for (var t = 0; t < this.boxes.length; t++) {
      this.boxes[t].write();
    }return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size;
  }, a.prototype._writeInt = function (t, e) {
    if (this._rawo) {
      var n = this._cursor.offset - this._rawo.byteOffset;switch (t) {case 8:
          this._rawo.setInt8(n, e);break;case 16:
          this._rawo.setInt16(n, e);break;case 32:
          this._rawo.setInt32(n, e);break;case 64:
          var r = Math.floor(e / Math.pow(2, 32)),
              i = e - r * Math.pow(2, 32);this._rawo.setUint32(n, r), this._rawo.setUint32(n + 4, i);}this._cursor.offset += t >> 3;
    } else this.size += t >> 3;
  }, a.prototype._writeUint = function (t, e) {
    if (this._rawo) {
      var n,
          r,
          i = this._cursor.offset - this._rawo.byteOffset;switch (t) {case 8:
          this._rawo.setUint8(i, e);break;case 16:
          this._rawo.setUint16(i, e);break;case 24:
          n = (16776960 & e) >> 8, r = 255 & e, this._rawo.setUint16(i, n), this._rawo.setUint8(i + 2, r);break;case 32:
          this._rawo.setUint32(i, e);break;case 64:
          r = e - (n = Math.floor(e / Math.pow(2, 32))) * Math.pow(2, 32), this._rawo.setUint32(i, n), this._rawo.setUint32(i + 4, r);}this._cursor.offset += t >> 3;
    } else this.size += t >> 3;
  }, a.prototype._writeString = function (t, e) {
    for (var n = 0; n < t; n++) {
      this._writeUint(8, e.charCodeAt(n));
    }
  }, a.prototype._writeTerminatedString = function (t) {
    if (0 !== t.length) {
      for (var e = 0; e < t.length; e++) {
        this._writeUint(8, t.charCodeAt(e));
      }this._writeUint(8, 0);
    }
  }, a.prototype._writeTemplate = function (t, e) {
    var n = Math.floor(e),
        r = (e - n) * Math.pow(2, t / 2);this._writeUint(t / 2, n), this._writeUint(t / 2, r);
  }, a.prototype._writeData = function (t) {
    if (t instanceof Array && (t = new DataView(new Uint8Array(t).buffer)), t instanceof Uint8Array && (t = new DataView(t.buffer)), this._rawo) {
      for (var e = this._cursor.offset - this._rawo.byteOffset, n = 0; n < t.byteLength; n++) {
        this._rawo.setUint8(e + n, t.getUint8(n));
      }this._cursor.offset += t.byteLength;
    } else this.size += t.byteLength;
  }, a.prototype._writeUTF8String = function (t) {
    var e = i.default.utf8ToByteArray(t);if (this._rawo) for (var n = new DataView(this._rawo.buffer, this._cursor.offset, e.length), r = 0; r < e.length; r++) {
      n.setUint8(r, e[r]);
    } else this.size += e.length;
  }, a.prototype._writeField = function (t, e, n) {
    switch (t) {case "uint":
        this._writeUint(e, n);break;case "int":
        this._writeInt(e, n);break;case "template":
        this._writeTemplate(e, n);break;case "string":
        -1 == e ? this._writeTerminatedString(n) : this._writeString(e, n);break;case "data":
        this._writeData(n);break;case "utf8":
        this._writeUTF8String(n);}
  }, a.prototype._boxProcessors.avc1 = a.prototype._boxProcessors.encv = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeField("uint", 16, this.pre_defined1), this._writeField("uint", 16, this.reserved2), this._writeFieldArray("uint", 32, this.pre_defined2), this._writeField("uint", 16, this.width), this._writeField("uint", 16, this.height), this._writeField("template", 32, this.horizresolution), this._writeField("template", 32, this.vertresolution), this._writeField("uint", 32, this.reserved3), this._writeField("uint", 16, this.frame_count), this._writeFieldArray("uint", 8, this.compressorname), this._writeField("uint", 16, this.depth), this._writeField("int", 16, this.pre_defined3), this._writeField("data", -1, this.config);
  }, a.prototype._boxProcessors.dref = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count);
  }, a.prototype._boxProcessors.styp = a.prototype._boxProcessors.ftyp = function () {
    this._writeField("string", 4, this.major_brand), this._writeField("uint", 32, this.minor_version), this._writeFieldArray("string", 4, this.compatible_brands);
  }, a.prototype._boxProcessors.sidx = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.reference_ID), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.earliest_presentation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.first_offset), this._writeField("uint", 16, this.reserved), this._writeField("uint", 16, this.reference_count), this._procEntries("references", this.reference_count, function (t) {
      t.reference = (1 & t.reference_type) << 31, t.reference |= 2147483647 & t.referenced_size, t.sap = (1 & t.starts_with_SAP) << 31, t.sap |= (3 & t.SAP_type) << 28, t.sap |= 268435455 & t.SAP_delta_time, this._writeField("uint", 32, t.reference), this._writeField("uint", 32, t.subsegment_duration), this._writeField("uint", 32, t.sap);
    });
  }, a.prototype._boxProcessors.hdlr = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.pre_defined), this._writeField("string", 4, this.handler_type), this._writeFieldArray("uint", 32, this.reserved), this._writeField("string", -1, this.name);
  }, a.prototype._boxProcessors.mdat = function () {
    this._writeField("data", -1, this.data);
  }, a.prototype._boxProcessors.mdhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), "string" == typeof this.language && (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._writeField("uint", 16, this.language), this._writeField("uint", 16, this.pre_defined);
  }, a.prototype._boxProcessors.mehd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.fragment_duration);
  }, a.prototype._boxProcessors.mfhd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.sequence_number);
  }, a.prototype._boxProcessors.mp4a = a.prototype._boxProcessors.enca = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._writeField("data", -1, this.esds);
  }, a.prototype._boxProcessors[".mp3"] = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._procSubBoxes("entries", this.entry_count);
  }, a.prototype._boxProcessors.btrt = function () {
    this._writeField("uint", 32, this.bufferSizeDB), this._writeField("uint", 32, this.maxBitrate), this._writeField("uint", 32, this.avgBitrate);
  }, a.prototype._boxProcessors.mvhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeField("template", 32, this.rate), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved1), this._writeFieldArray("uint", 32, this.reserved2), this._writeFieldArray("template", 32, this.matrix), this._writeFieldArray("uint", 32, this.pre_defined), this._writeField("uint", 32, this.next_track_ID);
  }, a.prototype._boxProcessors.smhd = function () {
    this._writeFullBox(), this._writeField("uint", 16, this.balance), this._writeField("uint", 16, this.reserved);
  }, a.prototype._boxProcessors.stsd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count);
  }, a.prototype._boxProcessors.tfdt = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.baseMediaDecodeTime);
  }, a.prototype._boxProcessors.tfhd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.track_ID), 1 & this.flags && this._writeField("uint", 64, this.base_data_offset), 2 & this.flags && this._writeField("uint", 32, this.sample_description_offset), 8 & this.flags && this._writeField("uint", 32, this.default_sample_duration), 16 & this.flags && this._writeField("uint", 32, this.default_sample_size), 32 & this.flags && this._writeField("uint", 32, this.default_sample_flags);
  }, a.prototype._boxProcessors.tkhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.reserved1), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.layer), this._writeField("uint", 16, this.alternate_group), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved3), this._writeFieldArray("template", 32, this.matrix), this._writeField("template", 32, this.width), this._writeField("template", 32, this.height);
  }, a.prototype._boxProcessors.trex = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.default_sample_description_index), this._writeField("uint", 32, this.default_sample_duration), this._writeField("uint", 32, this.default_sample_size), this._writeField("uint", 32, this.default_sample_flags);
  }, a.prototype._boxProcessors.trun = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.sample_count), 1 & this.flags && this._writeField("int", 32, this.data_offset), 4 & this.flags && this._writeField("uint", 32, this.first_sample_flags), this._procEntries("samples", this.sample_count, function (t) {
      256 & this.flags && this._writeField("uint", 32, t.sample_duration), 512 & this.flags && this._writeField("uint", 32, t.sample_size), 1024 & this.flags && this._writeField("uint", 32, t.sample_flags), 2048 & this.flags && this._writeField(1 === this.version ? "int" : "uint", 32, t.sample_composition_time_offset);
    });
  }, a.prototype._boxProcessors["url "] = a.prototype._boxProcessors["urn "] = function () {
    this._writeFullBox(), "urn " === this.type && this._writeField("string", -1, this.name), this._writeField("string", -1, this.location);
  }, a.prototype._boxProcessors.vmhd = function () {
    this._writeFullBox(), this._writeField("uint", 16, this.graphicsmode), this._writeFieldArray("uint", 16, this.opcolor);
  }, e.default = a;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(135)),
      o = r(n(137)),
      s = {};s.createFile = function () {
    return new o.default();
  }, s.createBox = function (t, e, n) {
    var r = i.default.create(t);return e && e.append(r, n), r;
  }, s.createFullBox = function (t, e, n) {
    var r = s.createBox(t, e, n);return r.version = 0, r.flags = 0, r;
  }, e.default = s;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(49)),
      o = r(n(90)),
      s = function s() {
    this._cursor = new i.default(), this.boxes = [];
  };s.prototype.write = function () {
    var t = 0,
        e = 0;for (e = 0; e < this.boxes.length; e++) {
      t += this.boxes[e].getLength();
    }var n = new Uint8Array(t);for (this._rawo = new DataView(n.buffer), this.bytes = n, this._cursor.offset = 0, e = 0; e < this.boxes.length; e++) {
      this.boxes[e].write();
    }return n.buffer;
  }, s.prototype.append = function (t, e) {
    o.default.appendBox(this, t, e);
  }, e.default = s;
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = {};r.dataViewToString = function (t, e) {
    var n = e || "utf-8";if ("undefined" != typeof TextDecoder) return new TextDecoder(n).decode(t);var r = [],
        i = 0;if ("utf-8" === n) for (; i < t.byteLength;) {
      var o = t.getUint8(i++);o < 128 || (o < 224 ? (o = (31 & o) << 6, o |= 63 & t.getUint8(i++)) : o < 240 ? (o = (15 & o) << 12, o |= (63 & t.getUint8(i++)) << 6, o |= 63 & t.getUint8(i++)) : (o = (7 & o) << 18, o |= (63 & t.getUint8(i++)) << 12, o |= (63 & t.getUint8(i++)) << 6, o |= 63 & t.getUint8(i++))), r.push(String.fromCharCode(o));
    } else for (; i < t.byteLength;) {
      r.push(String.fromCharCode(t.getUint8(i++)));
    }return r.join("");
  }, r.utf8ToByteArray = function (t) {
    var e, n;if ("undefined" != typeof TextEncoder) e = new TextEncoder().encode(t);else for (e = [], n = 0; n < t.length; ++n) {
      var r = t.charCodeAt(n);r < 128 ? e.push(r) : r < 2048 ? (e.push(192 | r >> 6), e.push(128 | 63 & r)) : r < 65536 ? (e.push(224 | r >> 12), e.push(128 | 63 & r >> 6), e.push(128 | 63 & r)) : (e.push(240 | r >> 18), e.push(128 | 63 & r >> 12), e.push(128 | 63 & r >> 6), e.push(128 | 63 & r));
    }return e;
  }, e.default = r;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var i = r(n(140)),
      o = r(n(141)),
      s = {};s.createFile = function () {
    return new o.default();
  }, s.createElement = function (t, e, n) {
    var r = i.default.create(t, n);return e && (r._parent = e, e.elements.push(r)), r;
  }, e.default = s;
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(49)),
      i = 281474976710656,
      o = { EBML: 440786851, EBMLVersion: 17030, EBMLReadVersion: 17143, EBMLMaxIDLength: 17138, EBMLMaxSizeLength: 17139, DocType: 17026, DocTypeVersion: 17031, DocTypeReadVersion: 17029, Segment: 408125543, SegmentInfo: 357149030, TimecodeScale: 2807729, MuxingApp: 19840, WritingApp: 22337, Duration: 17545, Tracks: 374648427, TrackEntry: 174, TrackNumber: 215, TrackUID: 29637, FlagLacing: 156, Language: 2274716, CodecID: 134, CodecName: 2459272, TrackType: 131, Video: 224, PixelWidth: 176, PixelHeight: 186, Cluster: 524531317, Timecode: 231, SimpleBlock: 163 },
      s = function s() {
    this._cursor = new r.default();
  };s.create = function (t, e) {
    var n = new s();return n.id = o[t], n.elements = [], void 0 !== e && (n._data = e), n;
  }, s.prototype._elemProcessors = {}, s.prototype.getLength = function () {
    this._rawo = null, this.size = 0, this._idLength = this._measureUint(this.id);for (var t = 0; t < this.elements.length; t++) {
      this.size += this.elements[t].getLength();
    }return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._unbound ? this._sizeLength = 1 : this._sizeLength = this._measureVarInt(this.size), this.size + this._idLength + this._sizeLength;
  }, s.prototype.write = function () {
    this._cursor.offset = this._parent._cursor.offset;var t = this._idLength + this._sizeLength + this.size;0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, t), this._writeField("uint", this.id, this._idLength), this._unbound ? this._writeField("uint", 255, 1) : this._writeField("vint", this.size, this._sizeLength);for (var e = 0; e < this.elements.length; e++) {
      this.elements[e].write();
    }return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._parent._cursor.offset += t, t;
  }, s.prototype._setU8 = function (t) {
    this._rawo.setUint8(this._viewOffset, t), this._viewOffset++;
  }, s.prototype._writeData = function (t) {
    if (t instanceof Array && (t = new DataView(new Uint8Array(t).buffer)), t instanceof Uint8Array && (t = new DataView(t.buffer)), this._rawo) {
      this._cursor.offset, this._rawo.byteOffset;for (var e = 0; e < t.byteLength; e++) {
        this._setU8(t.getUint8(e));
      }this._cursor.offset += t.byteLength;
    } else this.size += t.byteLength;
  }, s.prototype._writeString = function (t) {
    if (this._rawo) {
      this._viewOffset = this._cursor.offset - this._rawo.byteOffset;for (var e = 0; e < t.length; e++) {
        this._setU8(t.charCodeAt(e));
      }this._cursor.offset += t.length;
    } else this.size += t.length;
  }, s.prototype._writeVarInt = function (t, e) {
    if (void 0 === e && (e = this._measureVarInt(t)), this._rawo) {
      switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {case 1:
          this._setU8(128 | t);break;case 2:
          this._setU8(64 | t >> 8);break;case 3:
          this._setU8(32 | t >> 16);break;case 4:
          this._setU8(16 | t >> 24);break;case 5:
          this._setU8(8 | Math.floor(t / 4294967296));break;case 6:
          this._setU8(4 | Math.floor(t / 1099511627776));break;case 7:
          this._setU8(2 | Math.floor(t / i));break;case 8:
          this._setU8(1);}switch (e) {case 8:
          this._setU8(Math.floor(t / i));case 7:
          this._setU8(Math.floor(t / 1099511627776));case 6:
          this._setU8(Math.floor(t / 4294967296));case 5:
          this._setU8(t >> 24);case 4:
          this._setU8(t >> 16);case 3:
          this._setU8(t >> 8);case 2:
          this._setU8(t);}this._cursor.offset += e;
    } else this.size += e;
  }, s.prototype._writeUint = function (t, e) {
    if (void 0 === e && (e = this._measureUint(t)), this._rawo) {
      switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {case 8:
          this._setU8(Math.floor(t / 72057594037927940));case 7:
          this._setU8(Math.floor(t / i));case 6:
          this._setU8(Math.floor(t / 1099511627776));case 5:
          this._setU8(Math.floor(t / 4294967296));case 4:
          this._setU8(t >> 24);case 3:
          this._setU8(t >> 16);case 2:
          this._setU8(t >> 8);case 1:
          this._setU8(t);break;default:
          throw new RuntimeException("Bad UINT size", e);}this._cursor.offset += e;
    } else this.size += e;
  }, s.prototype._measureVarInt = function (t) {
    if (t < 127) return 1;if (t < 16383) return 2;if (t < 2097151) return 3;if (t < 268435455) return 4;if (t < 34359738367) return 5;if (t < 4398046511103) return 6;if (t < 562949953421311) return 7;if (t < 72057594037927940) return 8;throw new RuntimeException("EBML VINT size not supported", t);
  }, s.prototype._measureUint = function (t) {
    return t < 256 ? 1 : t < 65536 ? 2 : t < 16777216 ? 3 : t < 4294967296 ? 4 : t < 1099511627776 ? 5 : t < i ? 6 : t < 72057594037927940 ? 7 : 8;
  }, s.prototype._writeField = function (t, e, n) {
    switch (t) {case "uint":
        this._writeUint(e, n);break;case "vint":
        this._writeVarInt(e, n);break;case "string":
        this._writeString(e, n);break;case "data":
        this._writeData(e);}
  }, s.prototype._processData = function (t) {
    "number" == typeof t ? this._writeField("uint", t) : "string" == typeof t ? this._writeField("string", t) : this._writeField("data", t);
  }, s.prototype._elemProcessors[163] = function () {
    this._writeField("vint", this.trackNumber), this._writeField("uint", this.timecode, 2);var t = this.sap ? 128 : 0;this._writeField("uint", t, 1), this._writeField("data", this.frame);
  }, e.default = s;
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(49)),
      i = function i() {
    this._cursor = new r.default(), this.elements = [];
  };i.prototype.write = function () {
    var t = 0,
        e = 0;for (e = 0; e < this.elements.length; e++) {
      t += this.elements[e].getLength();
    }var n = new Uint8Array(t);for (this._rawo = new DataView(n.buffer), this.bytes = n, this._cursor.offset = 0, e = 0; e < this.elements.length; e++) {
      this.elements[e].write();
    }return n.buffer;
  }, e.default = i;
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function i(t, e, n) {
    var r = [0, 0],
        i = Math.ceil(n / 4) - 1;if (i <= 1) for (var o = i; o >= 0; o--) {
      for (var s = Math.min(4, n - 4 * o), a = 0; a < s; a++) {
        r[o] |= t[e + 4 * (i - o) + a] << 8 * (s - a - 1);
      }
    }return r[1] &= 131071, r[1] * Math.pow(2, 32) + (r[0] >>> 0);
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = function (t) {
    return t && t.__esModule ? t : { default: t };
  }(n(11)),
      a = { 1e3: "CLOSE_NORMAL", 1001: "CLOSE_GOING_AWAY", 1002: "CLOSE_PROTOCOL_ERROR", 1003: "CLOSE_UNSUPPORTED", 1005: "CLOSE_NO_STATUS", 1006: "CLOSE_ABNORMAL", 1007: "Unsupported Data", 1008: "Policy Violation", 1009: "CLOSE_TOO_LARGE", 1010: "Missing Extension", 1011: "Internal Error", 1012: "Service Restart", 1013: "Try Again Later", 1015: "TLS Handshake" },
      u = { WEB_AAC_SEQUENCE_HEADER: 0, WEB_AAC_FRAME: 1, WEB_AVC_SEQUENCE_HEADER: 2, WEB_AVC_KEY_FRAME: 3, WEB_AVC_FRAME: 4, WEB_HEVC_SEQUENCE_HEADER: 5, WEB_HEVC_KEY_FRAME: 6, WEB_HEVC_FRAME: 7, WEB_VP6_KEY_FRAME: 8, WEB_VP6_FRAME: 9, WEB_VP8_KEY_FRAME: 10, WEB_VP8_FRAME: 11, WEB_VP9_KEY_FRAME: 12, WEB_VP9_FRAME: 13, WEB_MP3: 14 },
      c = function () {
    function t(e) {
      r(this, t), this.metricsManager = e, this.curSocketId = 0, this.isLogging = !1, this.loggerData = { video: { frames: [], prevTime: 0, sumTimes: 0, times: [], thresh: 60, avg: void 0 }, audio: { frames: [], prevTime: 0, sumTimes: 0, times: [], thresh: 60, avg: void 0 } };
    }return o(t, [{ key: "open", value: function value(t) {
        function e(t, e) {
          t.isLogging && void 0 === t.loggerData[e] && (t.loggerData[e] = { frames: [], prevTime: 0, sumTimes: 0, times: [], thresh: 60, avg: void 0 });
        }function n(t, e, n, r) {
          if (t.isLogging) {
            var i = t.loggerData[e],
                o = 0;if (i.times.length > 0) {
              var a = new Date();o = a - i.prevTime, i.prevTime = a;
            } else i.prevTime = new Date();if (i.frames.length == i.thresh) {
              if (s.default.debug("[WS]: received " + i.thresh + " " + e + " frames"), void 0 === i.avg) for (var u = 1; u < i.thresh; u++) {
                var c = i.frames[u][1] - i.frames[u - 1][1];if (c > 0) {
                  i.avg = c;break;
                }
              }for (var f = [], l = 0; l < i.frames.length; l++) {
                f.push("[" + i.frames[l].join(" ") + "]");
              }s.default.debug("[WS] frames: [" + f.join(", ") + "]"), i.sumTime > i.avg * i.thresh && s.default.debug("Frames come slow!!!", i.sumTime, i.avg * i.thresh), i.frames = [], i.times = [], i.sumTimes = 0;
            }i.frames.push([r, n, o]), i.sumTimes += o, i.times.push(o);
          }
        }try {
          if ("ws" != t.substring(0, 2) && (t = "ws://" + t), void 0 !== this.socket) throw s.default.error("Attempt to open socket when socket exists!", this.socket, t), "Socket open error";this.socket = new WebSocket(t, ["sldp.softvelum.com"]);
        } catch (t) {
          return void s.default.error(t.message);
        }return this.socket.binaryType = "arraybuffer", this.socket.sampleCounter = 0, this.socket.transport = this, this.socket.socketId = ++this.curSocketId, this.socket.onopen = function () {
          s.default.debug("[WS]", "Connection established.");
        }, this.socket.onclose = function (t) {
          t.wasClean ? s.default.debug("Connection closed clean") : (s.default.debug("Connection dropped", this), this.socketId == this.transport.curSocketId && (3 == this.readyState && (this.transport.socket = void 0), this.transport.onConnectionClosedCallback && (s.default.debug("Call onConnectionClosed"), this.transport.onConnectionClosedCallback())));var e = a[t.code] || "";s.default.debug("Code: " + t.code + "(" + e + ") reason: " + t.reason);
        }, this.socket.onmessage = function (t) {
          if (t.data instanceof ArrayBuffer) {
            var r = new Uint8Array(t.data),
                o = r[0],
                a = r[1],
                c = void 0,
                f = r.byteLength;switch (a) {case u.WEB_AAC_SEQUENCE_HEADER:case u.WEB_AVC_SEQUENCE_HEADER:
                if (s.default.debug("Init segment for ", o, a), this.transport.onInitSegmentReceivedCallback) {
                  var l = r.subarray(2, r.byteLength);this.transport.onInitSegmentReceivedCallback(o, l), this.transport.metricsManager.run(o), e(this.transport, o);
                }break;case u.WEB_MP3:
                if (this.transport.metricsManager.isReadyToStart(o)) {
                  var h = r.subarray(10, 14);this.transport.onInitSegmentReceivedCallback(o, h), this.transport.metricsManager.run(o), e(this.transport, o);
                }case u.WEB_AAC_FRAME:
                if (this.transport.onDataReceivedCallback) {
                  c = i(r, 2, 7);var d = r.subarray(10, r.byteLength);this.transport.onDataReceivedCallback(o, !0, d, c, 0), n(this.transport, "audio", c, o);
                }break;case u.WEB_AVC_KEY_FRAME:case u.WEB_AVC_FRAME:
                if (this.transport.onDataReceivedCallback) {
                  c = i(r, 2, 7);var p = i(r, 10, 4),
                      v = r.subarray(14, r.byteLength),
                      m = u.WEB_AVC_KEY_FRAME == a;this.transport.onDataReceivedCallback(o, m, v, c, p), n(this.transport, "video", c, o);
                }break;case u.WEB_VP8_KEY_FRAME:case u.WEB_VP9_KEY_FRAME:
                this.transport.metricsManager.isReadyToStart(o) && (this.transport.onInitSegmentReceivedCallback(o, null), this.transport.metricsManager.run(o), e(this.transport, o));case u.WEB_VP8_FRAME:case u.WEB_VP9_FRAME:
                if (this.transport.onDataReceivedCallback) {
                  c = i(r, 2, 7);var g = r.subarray(10, r.byteLength),
                      _ = u.WEB_VP8_KEY_FRAME == a || u.WEB_VP9_KEY_FRAME == a;this.transport.onDataReceivedCallback(o, _, g, c, 0);
                }break;default:
                s.default.error("Unknown type of frame received ", a);}this.transport.metricsManager.reportBandwidth(o, f, c), 0 == this.sampleCounter % 1e3 && s.default.debug("sampleCounter", this.sampleCounter), this.sampleCounter += 1;
          } else {
            s.default.debug("Received", t.data);var b = JSON.parse(t.data);"status" == b.command && this.transport.onStatusReceivedCallback && this.transport.onStatusReceivedCallback(b.info);
          }
        }, this.socket.onerror = function (t) {
          s.default.error("Error happens:", t);
        }, this.socket;
      } }, { key: "send", value: function value(t) {
        this.socket.send(JSON.stringify(t));
      } }, { key: "close", value: function value() {
        s.default.debug("Socket close ", this.socket), this.socket && (this.socket.close(1e3), this.socket = void 0), this.onStatusReceivedCallback = void 0, this.onInitSegmentReceivedCallback = void 0, this.onDataReceivedCallback = void 0, this.onConnectionClosedCallback = void 0;
      } }, { key: "callbacks", set: function set(t) {
        this.onStatusReceivedCallback = t.onStatusReceived, this.onInitSegmentReceivedCallback = t.onInitSegmentReceived, this.onDataReceivedCallback = t.onDataReceived, this.onConnectionClosedCallback = t.onConnectionClosed;
      } }]), t;
  }();e.default = c;
}, function (t, e, n) {
  n(152), t.exports = n(25).RegExp.escape;
}, function (t, e, n) {
  var r = n(4),
      i = n(70),
      o = n(5)("species");t.exports = function (t) {
    var e;return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e;
  };
}, function (t, e, n) {
  var r = n(144);t.exports = function (t, e) {
    return new (r(t))(e);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(1),
      i = n(24);t.exports = function (t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");return i(r(this), "number" != t);
  };
}, function (t, e, n) {
  var r = n(36),
      i = n(58),
      o = n(48);t.exports = function (t) {
    var e = r(t),
        n = i.f;if (n) for (var s, a = n(t), u = o.f, c = 0; a.length > c;) {
      u.call(t, s = a[c++]) && e.push(s);
    }return e;
  };
}, function (t, e, n) {
  var r = n(36),
      i = n(16);t.exports = function (t, e) {
    for (var n, o = i(t), s = r(o), a = s.length, u = 0; a > u;) {
      if (o[n = s[u++]] === e) return n;
    }
  };
}, function (t, e, n) {
  "use strict";
  var r = n(150),
      i = n(54),
      o = n(12);t.exports = function () {
    for (var t = o(this), e = arguments.length, n = Array(e), s = 0, a = r._, u = !1; e > s;) {
      (n[s] = arguments[s++]) === a && (u = !0);
    }return function () {
      var r,
          o = this,
          s = arguments.length,
          c = 0,
          f = 0;if (!u && !s) return i(t, n, o);if (r = n.slice(), u) for (; e > c; c++) {
        r[c] === a && (r[c] = arguments[f++]);
      }for (; s > f;) {
        r.push(arguments[f++]);
      }return i(t, r, o);
    };
  };
}, function (t, e, n) {
  t.exports = n(2);
}, function (t, e) {
  t.exports = function (t, e) {
    var n = e === Object(e) ? function (t) {
      return e[t];
    } : e;return function (e) {
      return String(e).replace(t, n);
    };
  };
}, function (t, e, n) {
  var r = n(0),
      i = n(151)(/[\\^$*+?.()|[\]{}]/g, "\\$&");r(r.S, "RegExp", { escape: function escape(t) {
      return i(t);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.P, "Array", { copyWithin: n(92) }), n(41)("copyWithin");
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(4);r(r.P + r.F * !n(21)([].every, !0), "Array", { every: function every(t) {
      return i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.P, "Array", { fill: n(62) }), n(41)("fill");
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(2);r(r.P + r.F * !n(21)([].filter, !0), "Array", { filter: function filter(t) {
      return i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(6),
      o = "findIndex",
      s = !0;o in [] && Array(1)[o](function () {
    s = !1;
  }), r(r.P + r.F * s, "Array", { findIndex: function findIndex(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
    } }), n(41)(o);
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(5),
      o = !0;"find" in [] && Array(1).find(function () {
    o = !1;
  }), r(r.P + r.F * o, "Array", { find: function find(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
    } }), n(41)("find");
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(0),
      o = n(21)([].forEach, !0);r(r.P + r.F * !o, "Array", { forEach: function forEach(t) {
      return i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(26),
      i = n(0),
      o = n(9),
      s = n(101),
      a = n(69),
      u = n(8),
      c = n(63),
      f = n(86);i(i.S + i.F * !n(56)(function (t) {
    Array.from(t);
  }), "Array", { from: function from(t) {
      var e,
          n,
          i,
          l,
          h = o(t),
          d = "function" == typeof this ? this : Array,
          p = arguments.length,
          v = p > 1 ? arguments[1] : void 0,
          m = void 0 !== v,
          g = 0,
          _ = f(h);if (m && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == _ || d == Array && a(_)) for (n = new d(e = u(h.length)); e > g; g++) {
        c(n, g, m ? v(h[g], g) : h[g]);
      } else for (l = _.call(h), n = new d(); !(i = l.next()).done; g++) {
        c(n, g, m ? s(l, v, [i.value, g], !0) : i.value);
      }return n.length = g, n;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(50)(!1),
      o = [].indexOf,
      s = !!o && 1 / [1].indexOf(1, -0) < 0;r(r.P + r.F * (s || !n(21)(o)), "Array", { indexOf: function indexOf(t) {
      return s ? o.apply(this, arguments) || 0 : i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Array", { isArray: n(70) });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(16),
      o = [].join;r(r.P + r.F * (n(47) != Object || !n(21)(o)), "Array", { join: function join(t) {
      return o.call(i(this), void 0 === t ? "," : t);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(16),
      o = n(31),
      s = n(8),
      a = [].lastIndexOf,
      u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;r(r.P + r.F * (u || !n(21)(a)), "Array", { lastIndexOf: function lastIndexOf(t) {
      if (u) return a.apply(this, arguments) || 0;var e = i(this),
          n = s(e.length),
          r = n - 1;for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--) {
        if (r in e && e[r] === t) return r || 0;
      }return -1;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(1);r(r.P + r.F * !n(21)([].map, !0), "Array", { map: function map(t) {
      return i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(63);r(r.S + r.F * n(3)(function () {
    function t() {}return !(Array.of.call(t) instanceof t);
  }), "Array", { of: function of() {
      for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) {
        i(n, t, arguments[t++]);
      }return n.length = e, n;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(94);r(r.P + r.F * !n(21)([].reduceRight, !0), "Array", { reduceRight: function reduceRight(t) {
      return i(this, t, arguments.length, arguments[1], !0);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(94);r(r.P + r.F * !n(21)([].reduce, !0), "Array", { reduce: function reduce(t) {
      return i(this, t, arguments.length, arguments[1], !1);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(67),
      o = n(19),
      s = n(39),
      a = n(8),
      u = [].slice;r(r.P + r.F * n(3)(function () {
    i && u.call(i);
  }), "Array", { slice: function slice(t, e) {
      var n = a(this.length),
          r = o(this);if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);for (var i = s(t, n), c = s(e, n), f = a(c - i), l = Array(f), h = 0; h < f; h++) {
        l[h] = "String" == r ? this.charAt(i + h) : this[i + h];
      }return l;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(22)(3);r(r.P + r.F * !n(21)([].some, !0), "Array", { some: function some(t) {
      return i(this, t, arguments[1]);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(12),
      o = n(9),
      s = n(3),
      a = [].sort,
      u = [1, 2, 3];r(r.P + r.F * (s(function () {
    u.sort(void 0);
  }) || !s(function () {
    u.sort(null);
  }) || !n(21)(a)), "Array", { sort: function sort(t) {
      return void 0 === t ? a.call(o(this)) : a.call(o(this), i(t));
    } });
}, function (t, e, n) {
  n(38)("Array");
}, function (t, e, n) {
  var r = n(0);r(r.S, "Date", { now: function now() {
      return new Date().getTime();
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(3),
      o = Date.prototype.getTime,
      s = function s(t) {
    return t > 9 ? t : "0" + t;
  };r(r.P + r.F * (i(function () {
    return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString();
  }) || !i(function () {
    new Date(NaN).toISOString();
  })), "Date", { toISOString: function toISOString() {
      if (!isFinite(o.call(this))) throw RangeError("Invalid time value");var t = this,
          e = t.getUTCFullYear(),
          n = t.getUTCMilliseconds(),
          r = e < 0 ? "-" : e > 9999 ? "+" : "";return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z";
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(9),
      o = n(24);r(r.P + r.F * n(3)(function () {
    return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function toISOString() {
        return 1;
      } });
  }), "Date", { toJSON: function toJSON(t) {
      var e = i(this),
          n = o(e);return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
    } });
}, function (t, e, n) {
  var r = n(5)("toPrimitive"),
      i = Date.prototype;r in i || n(13)(i, r, n(146));
}, function (t, e, n) {
  var r = Date.prototype,
      i = r.toString,
      o = r.getTime;new Date(NaN) + "" != "Invalid Date" && n(14)(r, "toString", function () {
    var t = o.call(this);return t === t ? i.call(this) : "Invalid Date";
  });
}, function (t, e, n) {
  var r = n(0);r(r.P, "Function", { bind: n(95) });
}, function (t, e, n) {
  "use strict";
  var r = n(4),
      i = n(18),
      o = n(5)("hasInstance"),
      s = Function.prototype;o in s || n(7).f(s, o, { value: function value(t) {
      if ("function" != typeof this || !r(t)) return !1;if (!r(this.prototype)) return t instanceof this;for (; t = i(t);) {
        if (this.prototype === t) return !0;
      }return !1;
    } });
}, function (t, e, n) {
  var r = n(7).f,
      i = n(30),
      o = n(10),
      s = Function.prototype,
      a = Object.isExtensible || function () {
    return !0;
  };"name" in s || n(6) && r(s, "name", { configurable: !0, get: function get() {
      try {
        var t = this,
            e = ("" + t).match(/^\s*function ([^ (]*)/)[1];return o(t, "name") || !a(t) || r(t, "name", i(5, e)), e;
      } catch (t) {
        return "";
      }
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(103),
      o = Math.sqrt,
      s = Math.acosh;r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", { acosh: function acosh(t) {
      return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
    } });
}, function (t, e, n) {
  function r(t) {
    return isFinite(t = +t) && 0 != t ? t < 0 ? -r(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t;
  }var i = n(0),
      o = Math.asinh;i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", { asinh: r });
}, function (t, e, n) {
  var r = n(0),
      i = Math.atanh;r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", { atanh: function atanh(t) {
      return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(74);r(r.S, "Math", { cbrt: function cbrt(t) {
      return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { clz32: function clz32(t) {
      return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = Math.exp;r(r.S, "Math", { cosh: function cosh(t) {
      return (i(t = +t) + i(-t)) / 2;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(73);r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
}, function (t, e, n) {
  var r = n(0),
      i = n(74),
      o = Math.pow,
      s = o(2, -52),
      a = o(2, -23),
      u = o(2, 127) * (2 - a),
      c = o(2, -126),
      f = function f(t) {
    return t + 1 / s - 1 / s;
  };r(r.S, "Math", { fround: function fround(t) {
      var e,
          n,
          r = Math.abs(t),
          o = i(t);return r < c ? o * f(r / c / a) * c * a : (e = (1 + a / s) * r, (n = e - (e - r)) > u || n != n ? o * (1 / 0) : o * n);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = Math.abs;r(r.S, "Math", { hypot: function hypot(t, e) {
      for (var n, r, o = 0, s = 0, a = arguments.length, u = 0; s < a;) {
        u < (n = i(arguments[s++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
      }return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = Math.imul;r(r.S + r.F * n(3)(function () {
    return -5 != i(4294967295, 5) || 2 != i.length;
  }), "Math", { imul: function imul(t, e) {
      var n = +t,
          r = +e,
          i = 65535 & n,
          o = 65535 & r;return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { log10: function log10(t) {
      return Math.log(t) / Math.LN10;
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { log1p: n(103) });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { log2: function log2(t) {
      return Math.log(t) / Math.LN2;
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { sign: n(74) });
}, function (t, e, n) {
  var r = n(0),
      i = n(73),
      o = Math.exp;r(r.S + r.F * n(3)(function () {
    return -2e-17 != !Math.sinh(-2e-17);
  }), "Math", { sinh: function sinh(t) {
      return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(73),
      o = Math.exp;r(r.S, "Math", { tanh: function tanh(t) {
      var e = i(t = +t),
          n = i(-t);return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t));
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { trunc: function trunc(t) {
      return (t > 0 ? Math.floor : Math.ceil)(t);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      i = n(10),
      o = n(19),
      s = n(68),
      a = n(24),
      u = n(3),
      c = n(35).f,
      f = n(17).f,
      l = n(7).f,
      h = n(45).trim,
      _d = r.Number,
      p = _d,
      v = _d.prototype,
      m = "Number" == o(n(34)(v)),
      g = "trim" in String.prototype,
      _ = function _(t) {
    var e = a(t, !1);if ("string" == typeof e && e.length > 2) {
      var n,
          r,
          i,
          o = (e = g ? e.trim() : h(e, 3)).charCodeAt(0);if (43 === o || 45 === o) {
        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
      } else if (48 === o) {
        switch (e.charCodeAt(1)) {case 66:case 98:
            r = 2, i = 49;break;case 79:case 111:
            r = 8, i = 55;break;default:
            return +e;}for (var s, u = e.slice(2), c = 0, f = u.length; c < f; c++) {
          if ((s = u.charCodeAt(c)) < 48 || s > i) return NaN;
        }return parseInt(u, r);
      }
    }return +e;
  };if (!_d(" 0o1") || !_d("0b1") || _d("+0x1")) {
    _d = function d(t) {
      var e = arguments.length < 1 ? 0 : t,
          n = this;return n instanceof _d && (m ? u(function () {
        v.valueOf.call(n);
      }) : "Number" != o(n)) ? s(new p(_(e)), n, _d) : _(e);
    };for (var b, A = n(6) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), y = 0; A.length > y; y++) {
      i(p, b = A[y]) && !i(_d, b) && l(_d, b, f(p, b));
    }_d.prototype = v, v.constructor = _d, n(14)(r, "Number", _d);
  }
}, function (t, e, n) {
  var r = n(0);r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
}, function (t, e, n) {
  var r = n(0),
      i = n(2).isFinite;r(r.S, "Number", { isFinite: function isFinite(t) {
      return "number" == typeof t && i(t);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Number", { isInteger: n(100) });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Number", { isNaN: function isNaN(t) {
      return t != t;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(100),
      o = Math.abs;r(r.S, "Number", { isSafeInteger: function isSafeInteger(t) {
      return i(t) && o(t) <= 9007199254740991;
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
}, function (t, e, n) {
  var r = n(0),
      i = n(110);r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
}, function (t, e, n) {
  var r = n(0),
      i = n(111);r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(31),
      o = n(91),
      s = n(81),
      a = 1..toFixed,
      u = Math.floor,
      c = [0, 0, 0, 0, 0, 0],
      f = "Number.toFixed: incorrect invocation!",
      l = function l(t, e) {
    for (var n = -1, r = e; ++n < 6;) {
      r += t * c[n], c[n] = r % 1e7, r = u(r / 1e7);
    }
  },
      h = function h(t) {
    for (var e = 6, n = 0; --e >= 0;) {
      n += c[e], c[e] = u(n / t), n = n % t * 1e7;
    }
  },
      d = function d() {
    for (var t = 6, e = ""; --t >= 0;) {
      if ("" !== e || 0 === t || 0 !== c[t]) {
        var n = String(c[t]);e = "" === e ? n : e + s.call("0", 7 - n.length) + n;
      }
    }return e;
  },
      p = function p(t, e, n) {
    return 0 === e ? n : e % 2 == 1 ? p(t, e - 1, n * t) : p(t * t, e / 2, n);
  },
      v = function v(t) {
    for (var e = 0, n = t; n >= 4096;) {
      e += 12, n /= 4096;
    }for (; n >= 2;) {
      e += 1, n /= 2;
    }return e;
  };r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(3)(function () {
    a.call({});
  })), "Number", { toFixed: function toFixed(t) {
      var e,
          n,
          r,
          a,
          u = o(this, f),
          c = i(t),
          m = "",
          g = "0";if (c < 0 || c > 20) throw RangeError(f);if (u != u) return "NaN";if (u <= -1e21 || u >= 1e21) return String(u);if (u < 0 && (m = "-", u = -u), u > 1e-21) if (e = v(u * p(2, 69, 1)) - 69, n = e < 0 ? u * p(2, -e, 1) : u / p(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
        for (l(0, n), r = c; r >= 7;) {
          l(1e7, 0), r -= 7;
        }for (l(p(10, r, 1), 0), r = e - 1; r >= 23;) {
          h(1 << 23), r -= 23;
        }h(1 << r), l(1, 1), h(2), g = d();
      } else l(0, n), l(1 << -e, 0), g = d() + s.call("0", c);return g = c > 0 ? m + ((a = g.length) <= c ? "0." + s.call("0", c - a) + g : g.slice(0, a - c) + "." + g.slice(a - c)) : m + g;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(3),
      o = n(91),
      s = 1..toPrecision;r(r.P + r.F * (i(function () {
    return "1" !== s.call(1, void 0);
  }) || !i(function () {
    s.call({});
  })), "Number", { toPrecision: function toPrecision(t) {
      var e = o(this, "Number#toPrecision: incorrect invocation!");return void 0 === t ? s.call(e) : s.call(e, t);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S + r.F, "Object", { assign: n(104) });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Object", { create: n(34) });
}, function (t, e, n) {
  var r = n(0);r(r.S + r.F * !n(6), "Object", { defineProperties: n(105) });
}, function (t, e, n) {
  var r = n(0);r(r.S + r.F * !n(6), "Object", { defineProperty: n(7).f });
}, function (t, e, n) {
  var r = n(4),
      i = n(29).onFreeze;n(23)("freeze", function (t) {
    return function (e) {
      return t && r(e) ? t(i(e)) : e;
    };
  });
}, function (t, e, n) {
  var r = n(16),
      i = n(17).f;n(23)("getOwnPropertyDescriptor", function () {
    return function (t, e) {
      return i(r(t), e);
    };
  });
}, function (t, e, n) {
  n(23)("getOwnPropertyNames", function () {
    return n(106).f;
  });
}, function (t, e, n) {
  var r = n(9),
      i = n(18);n(23)("getPrototypeOf", function () {
    return function (t) {
      return i(r(t));
    };
  });
}, function (t, e, n) {
  var r = n(4);n(23)("isExtensible", function (t) {
    return function (e) {
      return !!r(e) && (!t || t(e));
    };
  });
}, function (t, e, n) {
  var r = n(4);n(23)("isFrozen", function (t) {
    return function (e) {
      return !r(e) || !!t && t(e);
    };
  });
}, function (t, e, n) {
  var r = n(4);n(23)("isSealed", function (t) {
    return function (e) {
      return !r(e) || !!t && t(e);
    };
  });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Object", { is: n(112) });
}, function (t, e, n) {
  var r = n(9),
      i = n(36);n(23)("keys", function () {
    return function (t) {
      return i(r(t));
    };
  });
}, function (t, e, n) {
  var r = n(4),
      i = n(29).onFreeze;n(23)("preventExtensions", function (t) {
    return function (e) {
      return t && r(e) ? t(i(e)) : e;
    };
  });
}, function (t, e, n) {
  var r = n(4),
      i = n(29).onFreeze;n(23)("seal", function (t) {
    return function (e) {
      return t && r(e) ? t(i(e)) : e;
    };
  });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Object", { setPrototypeOf: n(76).set });
}, function (t, e, n) {
  "use strict";
  var r = n(46),
      i = {};i[n(5)("toStringTag")] = "z", i + "" != "[object z]" && n(14)(Object.prototype, "toString", function () {
    return "[object " + r(this) + "]";
  }, !0);
}, function (t, e, n) {
  var r = n(0),
      i = n(110);r(r.G + r.F * (parseFloat != i), { parseFloat: i });
}, function (t, e, n) {
  var r = n(0),
      i = n(111);r(r.G + r.F * (parseInt != i), { parseInt: i });
}, function (t, e, n) {
  "use strict";
  var r,
      i,
      o,
      s = n(33),
      a = n(2),
      u = n(26),
      c = n(46),
      f = n(0),
      l = n(4),
      h = n(12),
      d = n(32),
      p = n(42),
      v = n(78),
      m = n(83).set,
      g = n(75)(),
      _ = a.TypeError,
      b = a.process,
      _A = a.Promise,
      y = "process" == c(b = a.process),
      w = function w() {},
      S = !!function () {
    try {
      var t = _A.resolve(1),
          e = (t.constructor = {})[n(5)("species")] = function (t) {
        t(w, w);
      };return (y || "function" == typeof PromiseRejectionEvent) && t.then(w) instanceof e;
    } catch (t) {}
  }(),
      x = function x(t, e) {
    return t === e || t === _A && e === o;
  },
      E = function E(t) {
    var e;return !(!l(t) || "function" != typeof (e = t.then)) && e;
  },
      T = function T(t) {
    return x(_A, t) ? new k(t) : new i(t);
  },
      k = i = function i(t) {
    var e, n;this.promise = new t(function (t, r) {
      if (void 0 !== e || void 0 !== n) throw _("Bad Promise constructor");e = t, n = r;
    }), this.resolve = h(e), this.reject = h(n);
  },
      C = function C(t) {
    try {
      t();
    } catch (t) {
      return { error: t };
    }
  },
      F = function F(t, e) {
    if (!t._n) {
      t._n = !0;var n = t._c;g(function () {
        for (var r = t._v, i = 1 == t._s, o = 0; n.length > o;) {
          !function (e) {
            var n,
                o,
                s = i ? e.ok : e.fail,
                a = e.resolve,
                u = e.reject,
                c = e.domain;try {
              s ? (i || (2 == t._h && P(t), t._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && c.exit()), n === e.promise ? u(_("Promise-chain cycle")) : (o = E(n)) ? o.call(n, a, u) : a(n)) : u(r);
            } catch (t) {
              u(t);
            }
          }(n[o++]);
        }t._c = [], t._n = !1, e && !t._h && B(t);
      });
    }
  },
      B = function B(t) {
    m.call(a, function () {
      var e,
          n,
          r,
          i = t._v;if (M(t) && (e = C(function () {
        y ? b.emit("unhandledRejection", i, t) : (n = a.onunhandledrejection) ? n({ promise: t, reason: i }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", i);
      }), t._h = y || M(t) ? 2 : 1), t._a = void 0, e) throw e.error;
    });
  },
      M = function M(t) {
    if (1 == t._h) return !1;for (var e, n = t._a || t._c, r = 0; n.length > r;) {
      if ((e = n[r++]).fail || !M(e.promise)) return !1;
    }return !0;
  },
      P = function P(t) {
    m.call(a, function () {
      var e;y ? b.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({ promise: t, reason: t._v });
    });
  },
      I = function I(t) {
    var e = this;e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), F(e, !0));
  },
      L = function L(t) {
    var e,
        n = this;if (!n._d) {
      n._d = !0, n = n._w || n;try {
        if (n === t) throw _("Promise can't be resolved itself");(e = E(t)) ? g(function () {
          var r = { _w: n, _d: !1 };try {
            e.call(t, u(L, r, 1), u(I, r, 1));
          } catch (t) {
            I.call(r, t);
          }
        }) : (n._v = t, n._s = 1, F(n, !1));
      } catch (t) {
        I.call({ _w: n, _d: !1 }, t);
      }
    }
  };S || (_A = function A(t) {
    d(this, _A, "Promise", "_h"), h(t), r.call(this);try {
      t(u(L, this, 1), u(I, this, 1));
    } catch (t) {
      I.call(this, t);
    }
  }, (r = function r(t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
  }).prototype = n(37)(_A.prototype, { then: function then(t, e) {
      var n = T(v(this, _A));return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = y ? b.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), n.promise;
    }, catch: function _catch(t) {
      return this.then(void 0, t);
    } }), k = function k() {
    var t = new r();this.promise = t, this.resolve = u(L, t, 1), this.reject = u(I, t, 1);
  }), f(f.G + f.W + f.F * !S, { Promise: _A }), n(44)(_A, "Promise"), n(38)("Promise"), o = n(25).Promise, f(f.S + f.F * !S, "Promise", { reject: function reject(t) {
      var e = T(this);return (0, e.reject)(t), e.promise;
    } }), f(f.S + f.F * (s || !S), "Promise", { resolve: function resolve(t) {
      if (t instanceof _A && x(t.constructor, this)) return t;var e = T(this);return (0, e.resolve)(t), e.promise;
    } }), f(f.S + f.F * !(S && n(56)(function (t) {
    _A.all(t).catch(w);
  })), "Promise", { all: function all(t) {
      var e = this,
          n = T(e),
          r = n.resolve,
          i = n.reject,
          o = C(function () {
        var n = [],
            o = 0,
            s = 1;p(t, !1, function (t) {
          var a = o++,
              u = !1;n.push(void 0), s++, e.resolve(t).then(function (t) {
            u || (u = !0, n[a] = t, --s || r(n));
          }, i);
        }), --s || r(n);
      });return o && i(o.error), n.promise;
    }, race: function race(t) {
      var e = this,
          n = T(e),
          r = n.reject,
          i = C(function () {
        p(t, !1, function (t) {
          e.resolve(t).then(n.resolve, r);
        });
      });return i && r(i.error), n.promise;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(12),
      o = n(1),
      s = (n(2).Reflect || {}).apply,
      a = Function.apply;r(r.S + r.F * !n(3)(function () {
    s(function () {});
  }), "Reflect", { apply: function apply(t, e, n) {
      var r = i(t),
          u = o(n);return s ? s(r, e, u) : a.call(r, e, u);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(34),
      o = n(12),
      s = n(1),
      a = n(4),
      u = n(3),
      c = n(95),
      f = (n(2).Reflect || {}).construct,
      l = u(function () {
    function t() {}return !(f(function () {}, [], t) instanceof t);
  }),
      h = !u(function () {
    f(function () {});
  });r(r.S + r.F * (l || h), "Reflect", { construct: function construct(t, e) {
      o(t), s(e);var n = arguments.length < 3 ? t : o(arguments[2]);if (h && !l) return f(t, e, n);if (t == n) {
        switch (e.length) {case 0:
            return new t();case 1:
            return new t(e[0]);case 2:
            return new t(e[0], e[1]);case 3:
            return new t(e[0], e[1], e[2]);case 4:
            return new t(e[0], e[1], e[2], e[3]);}var r = [null];return r.push.apply(r, e), new (c.apply(t, r))();
      }var u = n.prototype,
          d = i(a(u) ? u : Object.prototype),
          p = Function.apply.call(t, d, e);return a(p) ? p : d;
    } });
}, function (t, e, n) {
  var r = n(7),
      i = n(0),
      o = n(1),
      s = n(24);i(i.S + i.F * n(3)(function () {
    Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
  }), "Reflect", { defineProperty: function defineProperty(t, e, n) {
      o(t), e = s(e, !0), o(n);try {
        return r.f(t, e, n), !0;
      } catch (t) {
        return !1;
      }
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(17).f,
      o = n(1);r(r.S, "Reflect", { deleteProperty: function deleteProperty(t, e) {
      var n = i(o(t), e);return !(n && !n.configurable) && delete t[e];
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(1),
      o = function o(t) {
    this._t = i(t), this._i = 0;var e,
        n = this._k = [];for (e in t) {
      n.push(e);
    }
  };n(71)(o, "Object", function () {
    var t,
        e = this,
        n = e._k;do {
      if (e._i >= n.length) return { value: void 0, done: !0 };
    } while (!((t = n[e._i++]) in e._t));return { value: t, done: !1 };
  }), r(r.S, "Reflect", { enumerate: function enumerate(t) {
      return new o(t);
    } });
}, function (t, e, n) {
  var r = n(17),
      i = n(0),
      o = n(1);i(i.S, "Reflect", { getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
      return r.f(o(t), e);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(18),
      o = n(1);r(r.S, "Reflect", { getPrototypeOf: function getPrototypeOf(t) {
      return i(o(t));
    } });
}, function (t, e, n) {
  function r(t, e) {
    var n,
        a,
        f = arguments.length < 3 ? t : arguments[2];return c(t) === f ? t[e] : (n = i.f(t, e)) ? s(n, "value") ? n.value : void 0 !== n.get ? n.get.call(f) : void 0 : u(a = o(t)) ? r(a, e, f) : void 0;
  }var i = n(17),
      o = n(18),
      s = n(10),
      a = n(0),
      u = n(4),
      c = n(1);a(a.S, "Reflect", { get: r });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Reflect", { has: function has(t, e) {
      return e in t;
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(1),
      o = Object.isExtensible;r(r.S, "Reflect", { isExtensible: function isExtensible(t) {
      return i(t), !o || o(t);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Reflect", { ownKeys: n(109) });
}, function (t, e, n) {
  var r = n(0),
      i = n(1),
      o = Object.preventExtensions;r(r.S, "Reflect", { preventExtensions: function preventExtensions(t) {
      i(t);try {
        return o && o(t), !0;
      } catch (t) {
        return !1;
      }
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(76);i && r(r.S, "Reflect", { setPrototypeOf: function setPrototypeOf(t, e) {
      i.check(t, e);try {
        return i.set(t, e), !0;
      } catch (t) {
        return !1;
      }
    } });
}, function (t, e, n) {
  function r(t, e, n) {
    var u,
        h,
        d = arguments.length < 4 ? t : arguments[3],
        p = o.f(f(t), e);if (!p) {
      if (l(h = s(t))) return r(h, e, n, d);p = c(0);
    }return a(p, "value") ? !(!1 === p.writable || !l(d) || (u = o.f(d, e) || c(0), u.value = n, i.f(d, e, u), 0)) : void 0 !== p.set && (p.set.call(d, n), !0);
  }var i = n(7),
      o = n(17),
      s = n(18),
      a = n(10),
      u = n(0),
      c = n(30),
      f = n(1),
      l = n(4);u(u.S, "Reflect", { set: r });
}, function (t, e, n) {
  var r = n(2),
      i = n(68),
      o = n(7).f,
      s = n(35).f,
      a = n(55),
      u = n(53),
      _c = r.RegExp,
      f = _c,
      l = _c.prototype,
      h = /a/g,
      d = /a/g,
      p = new _c(h) !== h;if (n(6) && (!p || n(3)(function () {
    return d[n(5)("match")] = !1, _c(h) != h || _c(d) == d || "/a/i" != _c(h, "i");
  }))) {
    _c = function c(t, e) {
      var n = this instanceof _c,
          r = a(t),
          o = void 0 === e;return !n && r && t.constructor === _c && o ? t : i(p ? new f(r && !o ? t.source : t, e) : f((r = t instanceof _c) ? t.source : t, r && o ? u.call(t) : e), n ? this : l, _c);
    };for (var v = s(f), m = 0; v.length > m;) {
      !function (t) {
        t in _c || o(_c, t, { configurable: !0, get: function get() {
            return f[t];
          }, set: function set(e) {
            f[t] = e;
          } });
      }(v[m++]);
    }l.constructor = _c, _c.prototype = l, n(14)(r, "RegExp", _c);
  }n(38)("RegExp");
}, function (t, e, n) {
  n(52)("match", 1, function (t, e, n) {
    return [function (n) {
      "use strict";
      var r = t(this),
          i = void 0 == n ? void 0 : n[e];return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
    }, n];
  });
}, function (t, e, n) {
  n(52)("replace", 2, function (t, e, n) {
    return [function (r, i) {
      "use strict";
      var o = t(this),
          s = void 0 == r ? void 0 : r[e];return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i);
    }, n];
  });
}, function (t, e, n) {
  n(52)("search", 1, function (t, e, n) {
    return [function (n) {
      "use strict";
      var r = t(this),
          i = void 0 == n ? void 0 : n[e];return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
    }, n];
  });
}, function (t, e, n) {
  n(52)("split", 2, function (t, e, r) {
    "use strict";
    var i = n(55),
        o = r,
        s = [].push,
        a = "length";if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[a] || 2 != "ab".split(/(?:ab)*/)[a] || 4 != ".".split(/(.?)(.?)/)[a] || ".".split(/()()/)[a] > 1 || "".split(/.?/)[a]) {
      var u = void 0 === /()??/.exec("")[1];r = function r(t, e) {
        var n = String(this);if (void 0 === t && 0 === e) return [];if (!i(t)) return o.call(n, t, e);var r,
            c,
            f,
            l,
            h,
            d = [],
            p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
            v = 0,
            m = void 0 === e ? 4294967295 : e >>> 0,
            g = new RegExp(t.source, p + "g");for (u || (r = new RegExp("^" + g.source + "$(?!\\s)", p)); (c = g.exec(n)) && !((f = c.index + c[0][a]) > v && (d.push(n.slice(v, c.index)), !u && c[a] > 1 && c[0].replace(r, function () {
          for (h = 1; h < arguments[a] - 2; h++) {
            void 0 === arguments[h] && (c[h] = void 0);
          }
        }), c[a] > 1 && c.index < n[a] && s.apply(d, c.slice(1)), l = c[0][a], v = f, d[a] >= m));) {
          g.lastIndex === c.index && g.lastIndex++;
        }return v === n[a] ? !l && g.test("") || d.push("") : d.push(n.slice(v)), d[a] > m ? d.slice(0, m) : d;
      };
    } else "0".split(void 0, 0)[a] && (r = function r(t, e) {
      return void 0 === t && 0 === e ? [] : o.call(this, t, e);
    });return [function (n, i) {
      var o = t(this),
          s = void 0 == n ? void 0 : n[e];return void 0 !== s ? s.call(n, o, i) : r.call(String(o), n, i);
    }, r];
  });
}, function (t, e, n) {
  "use strict";
  n(116);var r = n(1),
      i = n(53),
      o = n(6),
      s = /./.toString,
      a = function a(t) {
    n(14)(RegExp.prototype, "toString", t, !0);
  };n(3)(function () {
    return "/a/b" != s.call({ source: "a", flags: "b" });
  }) ? a(function () {
    var t = r(this);return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
  }) : "toString" != s.name && a(function () {
    return s.call(this);
  });
}, function (t, e, n) {
  "use strict";
  n(15)("anchor", function (t) {
    return function (e) {
      return t(this, "a", "name", e);
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("big", function (t) {
    return function () {
      return t(this, "big", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("blink", function (t) {
    return function () {
      return t(this, "blink", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("bold", function (t) {
    return function () {
      return t(this, "b", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(79)(!1);r(r.P, "String", { codePointAt: function codePointAt(t) {
      return i(this, t);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(8),
      o = n(80),
      s = "".endsWith;r(r.P + r.F * n(66)("endsWith"), "String", { endsWith: function endsWith(t) {
      var e = o(this, t, "endsWith"),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(e.length),
          a = void 0 === n ? r : Math.min(i(n), r),
          u = String(t);return s ? s.call(e, u, a) : e.slice(a - u.length, a) === u;
    } });
}, function (t, e, n) {
  "use strict";
  n(15)("fixed", function (t) {
    return function () {
      return t(this, "tt", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("fontcolor", function (t) {
    return function (e) {
      return t(this, "font", "color", e);
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("fontsize", function (t) {
    return function (e) {
      return t(this, "font", "size", e);
    };
  });
}, function (t, e, n) {
  var r = n(0),
      i = n(39),
      o = String.fromCharCode,
      s = String.fromCodePoint;r(r.S + r.F * (!!s && 1 != s.length), "String", { fromCodePoint: function fromCodePoint(t) {
      for (var e, n = [], r = arguments.length, s = 0; r > s;) {
        if (e = +arguments[s++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
      }return n.join("");
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(80);r(r.P + r.F * n(66)("includes"), "String", { includes: function includes(t) {
      return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
    } });
}, function (t, e, n) {
  "use strict";
  n(15)("italics", function (t) {
    return function () {
      return t(this, "i", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  var r = n(79)(!0);n(72)(String, "String", function (t) {
    this._t = String(t), this._i = 0;
  }, function () {
    var t,
        e = this._t,
        n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
  });
}, function (t, e, n) {
  "use strict";
  n(15)("link", function (t) {
    return function (e) {
      return t(this, "a", "href", e);
    };
  });
}, function (t, e, n) {
  var r = n(0),
      i = n(16),
      o = n(8);r(r.S, "String", { raw: function raw(t) {
      for (var e = i(t.raw), n = o(e.length), r = arguments.length, s = [], a = 0; n > a;) {
        s.push(String(e[a++])), a < r && s.push(String(arguments[a]));
      }return s.join("");
    } });
}, function (t, e, n) {
  var r = n(0);r(r.P, "String", { repeat: n(81) });
}, function (t, e, n) {
  "use strict";
  n(15)("small", function (t) {
    return function () {
      return t(this, "small", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(8),
      o = n(80),
      s = "".startsWith;r(r.P + r.F * n(66)("startsWith"), "String", { startsWith: function startsWith(t) {
      var e = o(this, t, "startsWith"),
          n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          r = String(t);return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r;
    } });
}, function (t, e, n) {
  "use strict";
  n(15)("strike", function (t) {
    return function () {
      return t(this, "strike", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("sub", function (t) {
    return function () {
      return t(this, "sub", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(15)("sup", function (t) {
    return function () {
      return t(this, "sup", "", "");
    };
  });
}, function (t, e, n) {
  "use strict";
  n(45)("trim", function (t) {
    return function () {
      return t(this, 3);
    };
  });
}, function (t, e, n) {
  "use strict";
  var r = n(2),
      i = n(10),
      o = n(6),
      s = n(0),
      a = n(14),
      u = n(29).KEY,
      c = n(3),
      f = n(59),
      l = n(44),
      h = n(40),
      d = n(5),
      p = n(114),
      v = n(85),
      m = n(148),
      g = n(147),
      _ = n(70),
      b = n(1),
      A = n(16),
      y = n(24),
      w = n(30),
      S = n(34),
      x = n(106),
      E = n(17),
      T = n(7),
      k = n(36),
      C = E.f,
      F = T.f,
      B = x.f,
      _M = r.Symbol,
      P = r.JSON,
      I = P && P.stringify,
      L = d("_hidden"),
      O = d("toPrimitive"),
      R = {}.propertyIsEnumerable,
      D = f("symbol-registry"),
      N = f("symbols"),
      j = f("op-symbols"),
      U = Object.prototype,
      V = "function" == typeof _M,
      W = r.QObject,
      z = !W || !W.prototype || !W.prototype.findChild,
      Q = o && c(function () {
    return 7 != S(F({}, "a", { get: function get() {
        return F(this, "a", { value: 7 }).a;
      } })).a;
  }) ? function (t, e, n) {
    var r = C(U, e);r && delete U[e], F(t, e, n), r && t !== U && F(U, e, r);
  } : F,
      Y = function Y(t) {
    var e = N[t] = S(_M.prototype);return e._k = t, e;
  },
      H = V && "symbol" == _typeof(_M.iterator) ? function (t) {
    return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
  } : function (t) {
    return t instanceof _M;
  },
      G = function G(t, e, n) {
    return t === U && G(j, e, n), b(t), e = y(e, !0), b(n), i(N, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = S(n, { enumerable: w(0, !1) })) : (i(t, L) || F(t, L, w(1, {})), t[L][e] = !0), Q(t, e, n)) : F(t, e, n);
  },
      q = function q(t, e) {
    b(t);for (var n, r = g(e = A(e)), i = 0, o = r.length; o > i;) {
      G(t, n = r[i++], e[n]);
    }return t;
  },
      J = function J(t) {
    var e = R.call(this, t = y(t, !0));return !(this === U && i(N, t) && !i(j, t)) && (!(e || !i(this, t) || !i(N, t) || i(this, L) && this[L][t]) || e);
  },
      K = function K(t, e) {
    if (t = A(t), e = y(e, !0), t !== U || !i(N, e) || i(j, e)) {
      var n = C(t, e);return !n || !i(N, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
    }
  },
      X = function X(t) {
    for (var e, n = B(A(t)), r = [], o = 0; n.length > o;) {
      i(N, e = n[o++]) || e == L || e == u || r.push(e);
    }return r;
  },
      Z = function Z(t) {
    for (var e, n = t === U, r = B(n ? j : A(t)), o = [], s = 0; r.length > s;) {
      !i(N, e = r[s++]) || n && !i(U, e) || o.push(N[e]);
    }return o;
  };V || (a((_M = function M() {
    if (this instanceof _M) throw TypeError("Symbol is not a constructor!");var t = h(arguments.length > 0 ? arguments[0] : void 0),
        e = function e(n) {
      this === U && e.call(j, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), Q(this, t, w(1, n));
    };return o && z && Q(U, t, { configurable: !0, set: e }), Y(t);
  }).prototype, "toString", function () {
    return this._k;
  }), E.f = K, T.f = G, n(35).f = x.f = X, n(48).f = J, n(58).f = Z, o && !n(33) && a(U, "propertyIsEnumerable", J, !0), p.f = function (t) {
    return Y(d(t));
  }), s(s.G + s.W + s.F * !V, { Symbol: _M });for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; $.length > tt;) {
    d($[tt++]);
  }for (var $ = k(d.store), tt = 0; $.length > tt;) {
    v($[tt++]);
  }s(s.S + s.F * !V, "Symbol", { for: function _for(t) {
      return i(D, t += "") ? D[t] : D[t] = _M(t);
    }, keyFor: function keyFor(t) {
      if (H(t)) return m(D, t);throw TypeError(t + " is not a symbol!");
    }, useSetter: function useSetter() {
      z = !0;
    }, useSimple: function useSimple() {
      z = !1;
    } }), s(s.S + s.F * !V, "Object", { create: function create(t, e) {
      return void 0 === e ? S(t) : q(S(t), e);
    }, defineProperty: G, defineProperties: q, getOwnPropertyDescriptor: K, getOwnPropertyNames: X, getOwnPropertySymbols: Z }), P && s(s.S + s.F * (!V || c(function () {
    var t = _M();return "[null]" != I([t]) || "{}" != I({ a: t }) || "{}" != I(Object(t));
  })), "JSON", { stringify: function stringify(t) {
      if (void 0 !== t && !H(t)) {
        for (var e, n, r = [t], i = 1; arguments.length > i;) {
          r.push(arguments[i++]);
        }return "function" == typeof (e = r[1]) && (n = e), !n && _(e) || (e = function e(t, _e) {
          if (n && (_e = n.call(this, t, _e)), !H(_e)) return _e;
        }), r[1] = e, I.apply(P, r);
      }
    } }), _M.prototype[O] || n(13)(_M.prototype, O, _M.prototype.valueOf), l(_M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0);
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(60),
      o = n(84),
      s = n(1),
      a = n(39),
      u = n(8),
      c = n(4),
      f = n(2).ArrayBuffer,
      l = n(78),
      h = o.ArrayBuffer,
      d = o.DataView,
      p = i.ABV && f.isView,
      v = h.prototype.slice,
      m = i.VIEW;r(r.G + r.W + r.F * (f !== h), { ArrayBuffer: h }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", { isView: function isView(t) {
      return p && p(t) || c(t) && m in t;
    } }), r(r.P + r.U + r.F * n(3)(function () {
    return !new h(2).slice(1, void 0).byteLength;
  }), "ArrayBuffer", { slice: function slice(t, e) {
      if (void 0 !== v && void 0 === e) return v.call(s(this), t);for (var n = s(this).byteLength, r = a(t, n), i = a(void 0 === e ? n : e, n), o = new (l(this, h))(u(i - r)), c = new d(this), f = new d(o), p = 0; r < i;) {
        f.setUint8(p++, c.getUint8(r++));
      }return o;
    } }), n(38)("ArrayBuffer");
}, function (t, e, n) {
  var r = n(0);r(r.G + r.W + r.F * !n(60).ABV, { DataView: n(84).DataView });
}, function (t, e, n) {
  n(28)("Float32", 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Float64", 8, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Int16", 2, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Int32", 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Int8", 1, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Uint16", 2, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Uint32", 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Uint8", 1, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(28)("Uint8", 1, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  }, !0);
}, function (t, e, n) {
  "use strict";
  var r = n(98);n(51)("WeakSet", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  }, { add: function add(t) {
      return r.def(this, t, !0);
    } }, r, !1, !0);
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(50)(!0);r(r.P, "Array", { includes: function includes(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
    } }), n(41)("includes");
}, function (t, e, n) {
  var r = n(0),
      i = n(75)(),
      o = n(2).process,
      s = "process" == n(19)(o);r(r.G, { asap: function asap(t) {
      var e = s && o.domain;i(e ? e.bind(t) : t);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(19);r(r.S, "Error", { isError: function isError(t) {
      return "Error" === i(t);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.P + r.R, "Map", { toJSON: n(97)("Map") });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { iaddh: function iaddh(t, e, n, r) {
      var i = t >>> 0,
          o = n >>> 0;return (e >>> 0) + (r >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31) | 0;
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { imulh: function imulh(t, e) {
      var n = +t,
          r = +e,
          i = 65535 & n,
          o = 65535 & r,
          s = n >> 16,
          a = r >> 16,
          u = (s * o >>> 0) + (i * o >>> 16);return s * a + (u >> 16) + ((i * a >>> 0) + (65535 & u) >> 16);
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { isubh: function isubh(t, e, n, r) {
      var i = t >>> 0,
          o = n >>> 0;return (e >>> 0) - (r >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31) | 0;
    } });
}, function (t, e, n) {
  var r = n(0);r(r.S, "Math", { umulh: function umulh(t, e) {
      var n = +t,
          r = +e,
          i = 65535 & n,
          o = 65535 & r,
          s = n >>> 16,
          a = r >>> 16,
          u = (s * o >>> 0) + (i * o >>> 16);return s * a + (u >>> 16) + ((i * a >>> 0) + (65535 & u) >>> 16);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(9),
      o = n(12),
      s = n(7);n(6) && r(r.P + n(57), "Object", { __defineGetter__: function __defineGetter__(t, e) {
      s.f(i(this), t, { get: o(e), enumerable: !0, configurable: !0 });
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(9),
      o = n(12),
      s = n(7);n(6) && r(r.P + n(57), "Object", { __defineSetter__: function __defineSetter__(t, e) {
      s.f(i(this), t, { set: o(e), enumerable: !0, configurable: !0 });
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(108)(!0);r(r.S, "Object", { entries: function entries(t) {
      return i(t);
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(109),
      o = n(16),
      s = n(17),
      a = n(63);r(r.S, "Object", { getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
      for (var e, n = o(t), r = s.f, u = i(n), c = {}, f = 0; u.length > f;) {
        a(c, e = u[f++], r(n, e));
      }return c;
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(9),
      o = n(24),
      s = n(18),
      a = n(17).f;n(6) && r(r.P + n(57), "Object", { __lookupGetter__: function __lookupGetter__(t) {
      var e,
          n = i(this),
          r = o(t, !0);do {
        if (e = a(n, r)) return e.get;
      } while (n = s(n));
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(9),
      o = n(24),
      s = n(18),
      a = n(17).f;n(6) && r(r.P + n(57), "Object", { __lookupSetter__: function __lookupSetter__(t) {
      var e,
          n = i(this),
          r = o(t, !0);do {
        if (e = a(n, r)) return e.set;
      } while (n = s(n));
    } });
}, function (t, e, n) {
  var r = n(0),
      i = n(108)(!1);r(r.S, "Object", { values: function values(t) {
      return i(t);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(2),
      o = n(25),
      s = n(75)(),
      a = n(5)("observable"),
      u = n(12),
      c = n(1),
      f = n(32),
      l = n(37),
      h = n(13),
      d = n(42),
      p = d.RETURN,
      v = function v(t) {
    return null == t ? void 0 : u(t);
  },
      m = function m(t) {
    var e = t._c;e && (t._c = void 0, e());
  },
      g = function g(t) {
    return void 0 === t._o;
  },
      _ = function _(t) {
    g(t) || (t._o = void 0, m(t));
  },
      b = function b(t, e) {
    c(t), this._c = void 0, this._o = t, t = new A(this);try {
      var n = e(t),
          r = n;null != n && ("function" == typeof n.unsubscribe ? n = function n() {
        r.unsubscribe();
      } : u(n), this._c = n);
    } catch (e) {
      return void t.error(e);
    }g(this) && m(this);
  };b.prototype = l({}, { unsubscribe: function unsubscribe() {
      _(this);
    } });var A = function A(t) {
    this._s = t;
  };A.prototype = l({}, { next: function next(t) {
      var e = this._s;if (!g(e)) {
        var n = e._o;try {
          var r = v(n.next);if (r) return r.call(n, t);
        } catch (t) {
          try {
            _(e);
          } finally {
            throw t;
          }
        }
      }
    }, error: function error(t) {
      var e = this._s;if (g(e)) throw t;var n = e._o;e._o = void 0;try {
        var r = v(n.error);if (!r) throw t;t = r.call(n, t);
      } catch (t) {
        try {
          m(e);
        } finally {
          throw t;
        }
      }return m(e), t;
    }, complete: function complete(t) {
      var e = this._s;if (!g(e)) {
        var n = e._o;e._o = void 0;try {
          var r = v(n.complete);t = r ? r.call(n, t) : void 0;
        } catch (t) {
          try {
            m(e);
          } finally {
            throw t;
          }
        }return m(e), t;
      }
    } });var y = function y(t) {
    f(this, y, "Observable", "_f")._f = u(t);
  };l(y.prototype, { subscribe: function subscribe(t) {
      return new b(t, this._f);
    }, forEach: function forEach(t) {
      var e = this;return new (o.Promise || i.Promise)(function (n, r) {
        u(t);var i = e.subscribe({ next: function next(e) {
            try {
              return t(e);
            } catch (t) {
              r(t), i.unsubscribe();
            }
          }, error: r, complete: n });
      });
    } }), l(y, { from: function from(t) {
      var e = "function" == typeof this ? this : y,
          n = v(c(t)[a]);if (n) {
        var r = c(n.call(t));return r.constructor === e ? r : new e(function (t) {
          return r.subscribe(t);
        });
      }return new e(function (e) {
        var n = !1;return s(function () {
          if (!n) {
            try {
              if (d(t, !1, function (t) {
                if (e.next(t), n) return p;
              }) === p) return;
            } catch (t) {
              if (n) throw t;return void e.error(t);
            }e.complete();
          }
        }), function () {
          n = !0;
        };
      });
    }, of: function of() {
      for (var t = 0, e = arguments.length, n = Array(e); t < e;) {
        n[t] = arguments[t++];
      }return new ("function" == typeof this ? this : y)(function (t) {
        var e = !1;return s(function () {
          if (!e) {
            for (var r = 0; r < n.length; ++r) {
              if (t.next(n[r]), e) return;
            }t.complete();
          }
        }), function () {
          e = !0;
        };
      });
    } }), h(y.prototype, a, function () {
    return this;
  }), r(r.G, { Observable: y }), n(38)("Observable");
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = r.key,
      s = r.set;r.exp({ defineMetadata: function defineMetadata(t, e, n, r) {
      s(t, e, i(n), o(r));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = r.key,
      s = r.map,
      a = r.store;r.exp({ deleteMetadata: function deleteMetadata(t, e) {
      var n = arguments.length < 3 ? void 0 : o(arguments[2]),
          r = s(i(e), n, !1);if (void 0 === r || !r.delete(t)) return !1;if (r.size) return !0;var u = a.get(e);return u.delete(n), !!u.size || a.delete(e);
    } });
}, function (t, e, n) {
  var r = n(117),
      i = n(93),
      o = n(27),
      s = n(1),
      a = n(18),
      u = o.keys,
      c = o.key,
      f = function f(t, e) {
    var n = u(t, e),
        o = a(t);if (null === o) return n;var s = f(o, e);return s.length ? n.length ? i(new r(n.concat(s))) : s : n;
  };o.exp({ getMetadataKeys: function getMetadataKeys(t) {
      return f(s(t), arguments.length < 2 ? void 0 : c(arguments[1]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = n(18),
      s = r.has,
      a = r.get,
      u = r.key,
      c = function c(t, e, n) {
    if (s(t, e, n)) return a(t, e, n);var r = o(e);return null !== r ? c(t, r, n) : void 0;
  };r.exp({ getMetadata: function getMetadata(t, e) {
      return c(t, i(e), arguments.length < 3 ? void 0 : u(arguments[2]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = r.keys,
      s = r.key;r.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(t) {
      return o(i(t), arguments.length < 2 ? void 0 : s(arguments[1]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = r.get,
      s = r.key;r.exp({ getOwnMetadata: function getOwnMetadata(t, e) {
      return o(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = n(18),
      s = r.has,
      a = r.key,
      u = function u(t, e, n) {
    if (s(t, e, n)) return !0;var r = o(e);return null !== r && u(t, r, n);
  };r.exp({ hasMetadata: function hasMetadata(t, e) {
      return u(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = r.has,
      s = r.key;r.exp({ hasOwnMetadata: function hasOwnMetadata(t, e) {
      return o(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]));
    } });
}, function (t, e, n) {
  var r = n(27),
      i = n(1),
      o = n(12),
      s = r.key,
      a = r.set;r.exp({ metadata: function metadata(t, e) {
      return function (n, r) {
        a(t, e, (void 0 !== r ? i : o)(n), s(r));
      };
    } });
}, function (t, e, n) {
  var r = n(0);r(r.P + r.R, "Set", { toJSON: n(97)("Set") });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(79)(!0);r(r.P, "String", { at: function at(t) {
      return i(this, t);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(20),
      o = n(8),
      s = n(55),
      a = n(53),
      u = RegExp.prototype,
      c = function c(t, e) {
    this._r = t, this._s = e;
  };n(71)(c, "RegExp String", function () {
    var t = this._r.exec(this._s);return { value: t, done: null === t };
  }), r(r.P, "String", { matchAll: function matchAll(t) {
      if (i(this), !s(t)) throw TypeError(t + " is not a regexp!");var e = String(this),
          n = "flags" in u ? String(t.flags) : a.call(t),
          r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);return r.lastIndex = o(t.lastIndex), new c(r, e);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(113);r(r.P, "String", { padEnd: function padEnd(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
    } });
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(113);r(r.P, "String", { padStart: function padStart(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
    } });
}, function (t, e, n) {
  "use strict";
  n(45)("trimLeft", function (t) {
    return function () {
      return t(this, 1);
    };
  }, "trimStart");
}, function (t, e, n) {
  "use strict";
  n(45)("trimRight", function (t) {
    return function () {
      return t(this, 2);
    };
  }, "trimEnd");
}, function (t, e, n) {
  n(85)("asyncIterator");
}, function (t, e, n) {
  n(85)("observable");
}, function (t, e, n) {
  var r = n(0);r(r.S, "System", { global: n(2) });
}, function (t, e, n) {
  for (var r = n(87), i = n(14), o = n(2), s = n(13), a = n(43), u = n(5), c = u("iterator"), f = u("toStringTag"), l = a.Array, h = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
    var p,
        v = h[d],
        m = o[v],
        g = m && m.prototype;if (g) {
      g[c] || s(g, c, l), g[f] || s(g, f, v), a[v] = l;for (p in r) {
        g[p] || i(g, p, r[p], !0);
      }
    }
  }
}, function (t, e, n) {
  var r = n(0),
      i = n(83);r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
}, function (t, e, n) {
  var r = n(2),
      i = n(0),
      o = n(54),
      s = n(149),
      a = r.navigator,
      u = !!a && /MSIE .\./.test(a.userAgent),
      c = function c(t) {
    return u ? function (e, n) {
      return t(o(s, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), n);
    } : t;
  };i(i.G + i.B + i.F * u, { setTimeout: c(r.setTimeout), setInterval: c(r.setInterval) });
}, function (t, e, n) {
  n(272), n(211), n(213), n(212), n(215), n(217), n(222), n(216), n(214), n(224), n(223), n(219), n(220), n(218), n(210), n(221), n(225), n(226), n(178), n(180), n(179), n(228), n(227), n(198), n(208), n(209), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(259), n(264), n(271), n(262), n(254), n(255), n(260), n(265), n(267), n(250), n(251), n(252), n(253), n(256), n(257), n(258), n(261), n(263), n(266), n(268), n(269), n(270), n(173), n(175), n(174), n(177), n(176), n(162), n(160), n(166), n(163), n(169), n(171), n(159), n(165), n(156), n(170), n(154), n(168), n(167), n(161), n(164), n(153), n(155), n(158), n(157), n(172), n(87), n(244), n(249), n(116), n(245), n(246), n(247), n(248), n(229), n(115), n(117), n(118), n(284), n(273), n(274), n(279), n(282), n(283), n(277), n(280), n(278), n(281), n(275), n(276), n(230), n(231), n(232), n(233), n(234), n(237), n(235), n(236), n(238), n(239), n(240), n(241), n(243), n(242), n(285), n(311), n(314), n(313), n(315), n(316), n(312), n(317), n(318), n(296), n(299), n(295), n(293), n(294), n(297), n(298), n(288), n(310), n(319), n(287), n(289), n(291), n(290), n(292), n(301), n(302), n(304), n(303), n(306), n(305), n(307), n(308), n(309), n(286), n(300), n(322), n(321), n(320), t.exports = n(25);
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }function r() {
    throw new Error("clearTimeout has not been defined");
  }function i(t) {
    if (f === setTimeout) return setTimeout(t, 0);if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);try {
      return f(t, 0);
    } catch (e) {
      try {
        return f.call(null, t, 0);
      } catch (e) {
        return f.call(this, t, 0);
      }
    }
  }function o(t) {
    if (l === clearTimeout) return clearTimeout(t);if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);try {
      return l(t);
    } catch (e) {
      try {
        return l.call(null, t);
      } catch (e) {
        return l.call(this, t);
      }
    }
  }function s() {
    v && d && (v = !1, d.length ? p = d.concat(p) : m = -1, p.length && a());
  }function a() {
    if (!v) {
      var t = i(s);v = !0;for (var e = p.length; e;) {
        for (d = p, p = []; ++m < e;) {
          d && d[m].run();
        }m = -1, e = p.length;
      }d = null, v = !1, o(t);
    }
  }function u(t, e) {
    this.fun = t, this.array = e;
  }function c() {}var f,
      l,
      h = t.exports = {};!function () {
    try {
      f = "function" == typeof setTimeout ? setTimeout : n;
    } catch (t) {
      f = n;
    }try {
      l = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      l = r;
    }
  }();var d,
      p = [],
      v = !1,
      m = -1;h.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }p.push(new u(t, e)), 1 !== p.length || v || i(a);
  }, u.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, h.cwd = function () {
    return "/";
  }, h.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, h.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  (function (e, n) {
    !function (e) {
      "use strict";
      function r(t, e, n, r) {
        var i = e && e.prototype instanceof o ? e : o,
            s = Object.create(i.prototype),
            a = new p(r || []);return s._invoke = f(t, n, a), s;
      }function i(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }function o() {}function s() {}function a() {}function u(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }function c(t) {
        function e(n, r, o, s) {
          var a = i(t[n], t, r);if ("throw" !== a.type) {
            var u = a.arg,
                c = u.value;return c && "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && b.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
              e("next", t, o, s);
            }, function (t) {
              e("throw", t, o, s);
            }) : Promise.resolve(c).then(function (t) {
              u.value = t, o(u);
            }, s);
          }s(a.arg);
        }"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.domain && (e = n.domain.bind(e));var r;this._invoke = function (t, n) {
          function i() {
            return new Promise(function (r, i) {
              e(t, n, r, i);
            });
          }return r = r ? r.then(i, i) : i();
        };
      }function f(t, e, n) {
        var r = E;return function (o, s) {
          if (r === k) throw new Error("Generator is already running");if (r === C) {
            if ("throw" === o) throw s;return m();
          }for (n.method = o, n.arg = s;;) {
            var a = n.delegate;if (a) {
              var u = l(a, n);if (u) {
                if (u === F) continue;return u;
              }
            }if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (r === E) throw r = C, n.arg;n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);r = k;var c = i(t, e, n);if ("normal" === c.type) {
              if (r = n.done ? C : T, c.arg === F) continue;return { value: c.arg, done: n.done };
            }"throw" === c.type && (r = C, n.method = "throw", n.arg = c.arg);
          }
        };
      }function l(t, e) {
        var n = t.iterator[e.method];if (n === g) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = g, l(t, e), "throw" === e.method)) return F;e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }return F;
        }var r = i(n, t.iterator, e.arg);if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, F;var o = r.arg;return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = g), e.delegate = null, F) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, F);
      }function h(t) {
        var e = { tryLoc: t[0] };1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }function d(t) {
        var e = t.completion || {};e.type = "normal", delete e.arg, t.completion = e;
      }function p(t) {
        this.tryEntries = [{ tryLoc: "root" }], t.forEach(h, this), this.reset(!0);
      }function v(t) {
        if (t) {
          var e = t[y];if (e) return e.call(t);if ("function" == typeof t.next) return t;if (!isNaN(t.length)) {
            var n = -1,
                r = function e() {
              for (; ++n < t.length;) {
                if (b.call(t, n)) return e.value = t[n], e.done = !1, e;
              }return e.value = g, e.done = !0, e;
            };return r.next = r;
          }
        }return { next: m };
      }function m() {
        return { value: g, done: !0 };
      }var g,
          _ = Object.prototype,
          b = _.hasOwnProperty,
          A = "function" == typeof Symbol ? Symbol : {},
          y = A.iterator || "@@iterator",
          w = A.toStringTag || "@@toStringTag",
          S = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)),
          x = e.regeneratorRuntime;if (x) S && (t.exports = x);else {
        (x = e.regeneratorRuntime = S ? t.exports : {}).wrap = r;var E = "suspendedStart",
            T = "suspendedYield",
            k = "executing",
            C = "completed",
            F = {},
            B = {};B[y] = function () {
          return this;
        };var M = Object.getPrototypeOf,
            P = M && M(M(v([])));P && P !== _ && b.call(P, y) && (B = P);var I = a.prototype = o.prototype = Object.create(B);s.prototype = I.constructor = a, a.constructor = s, a[w] = s.displayName = "GeneratorFunction", x.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;return !!e && (e === s || "GeneratorFunction" === (e.displayName || e.name));
        }, x.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(I), t;
        }, x.awrap = function (t) {
          return { __await: t };
        }, u(c.prototype), x.AsyncIterator = c, x.async = function (t, e, n, i) {
          var o = new c(r(t, e, n, i));return x.isGeneratorFunction(e) ? o : o.next().then(function (t) {
            return t.done ? t.value : o.next();
          });
        }, u(I), I[w] = "Generator", I.toString = function () {
          return "[object Generator]";
        }, x.keys = function (t) {
          var e = [];for (var n in t) {
            e.push(n);
          }return e.reverse(), function n() {
            for (; e.length;) {
              var r = e.pop();if (r in t) return n.value = r, n.done = !1, n;
            }return n.done = !0, n;
          };
        }, x.values = v, p.prototype = { constructor: p, reset: function reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(d), !t) for (var e in this) {
              "t" === e.charAt(0) && b.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = g);
            }
          }, stop: function stop() {
            this.done = !0;var t = this.tryEntries[0].completion;if ("throw" === t.type) throw t.arg;return this.rval;
          }, dispatchException: function dispatchException(t) {
            function e(e, r) {
              return o.type = "throw", o.arg = t, n.next = e, r && (n.method = "next", n.arg = g), !!r;
            }if (this.done) throw t;for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r],
                  o = i.completion;if ("root" === i.tryLoc) return e("end");if (i.tryLoc <= this.prev) {
                var s = b.call(i, "catchLoc"),
                    a = b.call(i, "finallyLoc");if (s && a) {
                  if (this.prev < i.catchLoc) return e(i.catchLoc, !0);if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                } else {
                  if (!a) throw new Error("try statement without catch or finally");if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                }
              }
            }
          }, abrupt: function abrupt(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];if (r.tryLoc <= this.prev && b.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var i = r;break;
              }
            }i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);var o = i ? i.completion : {};return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, F) : this.complete(o);
          }, complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), F;
          }, finish: function finish(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), d(n), F;
            }
          }, catch: function _catch(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];if (n.tryLoc === t) {
                var r = n.completion;if ("throw" === r.type) {
                  var i = r.arg;d(n);
                }return i;
              }
            }throw new Error("illegal catch attempt");
          }, delegateYield: function delegateYield(t, e, n) {
            return this.delegate = { iterator: v(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = g), F;
          } };
      }
    }("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : this);
  }).call(e, n(119), n(324));
}, function (t, e, n) {
  n(121), t.exports = n(120);
}]);
window.SLDP = SLDP;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisconnectDetector = __webpack_require__(0);

var _DisconnectDetector2 = _interopRequireDefault(_DisconnectDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// определяет разрывы и занимается переключениями

var NativePlayer = function () {
    function NativePlayer(src, room, config) {
        var _this = this;

        _classCallCheck(this, NativePlayer);

        //alert("native player");
        this.needRestart = false;

        this._onCanPlay = this._onCanPlay.bind(this);

        var wrapper = document.getElementById("sldp_player_wrapper");
        this.wrapper = wrapper;

        /*this.iframe = document.createElement("iframe");
        this.iframe.width = "100%";
        this.iframe.height = "100%";
        
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.frameborder="0";
        this.iframe.scrolling="no";
        this.iframe.style.border ="0px solid red";
        this.iframe.style.overflowY ="hidden";
        
        
        this.wrapper.appendChild(this.iframe);
        var iDoc = this.iframe.contentWindow ? this.iframe.contentWindow.document : this.iframe.contentDocument;
        
        iDoc.body.style.padding = "0px";
        iDoc.body.style.overflowY = "hidden";*/

        //iDoc.style.overflowY = "hidden";
        //iDoc.body.style.overflowY = "hidden";
        //console.log("iframe", iDoc);

        this.video = document.createElement("video"); //iDoc.createElement("video");
        try {
            this.video.src = src + "/" + room + "/playlist.m3u8"; //"http://10.0.140.41:8081/live/test/playlist.m3u8";
        } catch (e) {
            console.error("err", e);
        }
        //this.video.style.border="1px solid black";
        this.video.style.width = "100%";
        this.video.style.height = "100%";
        //this.video.autoplay = "autoplay";
        //iDoc.body.appendChild( this.video );
        this.video.controls = "controls";
        wrapper.appendChild(this.video);
        //alert("create native player 1");

        /*var DragDropDiv = document.createElement("div");
        DragDropDiv.id = "dragdropdiv";
        DragDropDiv.style.width = "100%";
        DragDropDiv.style.height = "100%";
        DragDropDiv.style.position = "absolute";
        DragDropDiv.style.left = "0px";
        DragDropDiv.style.top = "0px";
        wrapper.appendChild( DragDropDiv );*/

        this.onError = this.onError.bind(this);
        this.video.addEventListener("error", this.onError);
        //this.video.addEventListener("playing", this.onPlay);
        this.video.addEventListener("canplay", this._onCanPlay);

        this.video.load();
        this.video.muted = true;
        //this.video.setAttribute("playsinline", "");
        //this.video.setAttribute('webkit-playsinline', '');

        this.detector = new _DisconnectDetector2.default(this.video, 50000);

        //alert("create native player 2");

        this.video.addEventListener("pause", function () {
            _this.detector.stopWatch();
            //console.log("sldp pause");s
        });

        this.detector.onDisconnect = function () {
            //alert("onDisconnect");
            _this.needRestart = true;
            console.log("disconnect native player");
        };

        //alert("create native player 3");
    }

    _createClass(NativePlayer, [{
        key: "isPaused",
        value: function isPaused() {
            return this.video.paused;
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            var video = this.video;
            var r = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
            return r;
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            var video = this.video;
            /*console.log({
                currentTime: video.currentTime,
                paused:  video.paused,
                readyState: video.readyState
            });*/
            var r = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
            //console.log("r=", r);
            return r;
        }
    }, {
        key: "play",
        value: function play() {
            this.video.muted = false;
            if (this.isPlay) return;

            if (!this.isPlaying()) {
                //console.log("______ === _____ / play");
                this.video.play();
                this.detector.startWatch();
            }

            this.isPlay = true;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.video.muted = true;
            if (!this.isPlay) return;

            if (this.isPlaying()) {
                this.video.pause();
                this.detector.stopWatch();
            }
            this.isPlay = false;
        }
    }, {
        key: "destroy",
        value: function destroy(room) {
            clearTimeout(this.timeout);
            this.video.removeEventListener("error", this.onError);
            this.video.remove();
            this.detector.destroy();
            //this.iframe.remove();
        }
    }, {
        key: "onError",
        value: function onError(e) {
            this.needRestart = true;
        }
    }, {
        key: "onPlay",
        value: function onPlay() {
            console.log("play");
        }
    }, {
        key: "_onCanPlay",
        value: function _onCanPlay() {
            //var irect =this.iframe.getBoundingClientRect();
            //var vrect =this.video.getBoundingClientRect();

            this.canPlay = true;
            if (this.onCanPlay) this.onCanPlay();
        }
    }], [{
        key: "isSupported",
        value: function isSupported() {
            return true;
        }
    }]);

    return NativePlayer;
}();

exports.default = NativePlayer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashPhonerPlayer = function () {
    function FlashPhonerPlayer(src, room, params) {
        _classCallCheck(this, FlashPhonerPlayer);

        this.src = src;
        this.room = room;
        this.params = params;

        var wrapper = document.getElementById("sldp_player_wrapper");
        this.wrapper = wrapper;
        this.iframe = document.createElement("iframe");
        this.iframe.style.width = "100";
        this.iframe.style.height = "100%";
        wrapper.appendChild(this.iframe);

        var DragDropDiv = document.createElement("div");
        DragDropDiv.id = "dragdropdiv";
        DragDropDiv.style.width = "100%";
        DragDropDiv.style.height = "100%";
        DragDropDiv.style.position = "absolute";
        DragDropDiv.style.left = "0px";
        DragDropDiv.style.top = "0px";
        //DragDropDiv.style.opacity = 0;
        //DragDropDiv.style.background = "red"; 
        wrapper.appendChild(DragDropDiv);
        console.log("---=== работает плеер FlashPhoner ===---");
    }

    _createClass(FlashPhonerPlayer, [{
        key: "isPaused",
        value: function isPaused() {
            return true;
        }
    }, {
        key: "play",
        value: function play() {
            if (this.isPlay) return;
            var room = String(this.room).replace("rtmp_", ""); //уберем мусор если есть     
            //this.iframe.src = "https://teva.whenspeak.ru/player/?room=" + room; //"http://10.0.140.41:8081/live/test/playlist.m3u8";
            this.iframe.src = "https://teva.whenspeak.ru/player/?room=" + room;
            this.isPlay = true;
        }
    }, {
        key: "pause",
        value: function pause() {
            /*if(!this.isPlay)
                return; */
            this.iframe.src = "https://ya.ru/"; //на любой другой адрес переадресуем
            this.isPlay = false;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.iframe.remove();
        }
    }], [{
        key: "isSupported",
        value: function isSupported() {
            return true;
        }
    }]);

    return FlashPhonerPlayer;
}();

exports.default = FlashPhonerPlayer;

/***/ })
/******/ ]);
//# sourceMappingURL=StreamPlayer.js.map