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

//import HLSPlayer from     "./players/hls/HLSPlayer.js";

//import FlashPhonerPlayer from  "./players/flashPhoner/FlashPhoner.js";


var _support = __webpack_require__(2);

var _support2 = _interopRequireDefault(_support);

var _Draggable = __webpack_require__(3);

var _Draggable2 = _interopRequireDefault(_Draggable);

__webpack_require__(4);

var _SLDPPlayer = __webpack_require__(5);

var _SLDPPlayer2 = _interopRequireDefault(_SLDPPlayer);

var _NativePlayer = __webpack_require__(7);

var _NativePlayer2 = _interopRequireDefault(_NativePlayer);

var _FlashPhoner = __webpack_require__(8);

var _FlashPhoner2 = _interopRequireDefault(_FlashPhoner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//alert("hello world 2");

var WhenspeakStreamer = function () {
    function WhenspeakStreamer(params) {
        _classCallCheck(this, WhenspeakStreamer);

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
                    //instance = new HLSPlayer(src, room, this.params);
                    instance = new _FlashPhoner2.default("", room, this.params);
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

var _sldpV141Min = __webpack_require__(6);

var _sldpV141Min2 = _interopRequireDefault(_sldpV141Min);

var _DisconnectDetector = __webpack_require__(0);

var _DisconnectDetector2 = _interopRequireDefault(_DisconnectDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO покумекать на тему события play
var SLDPPlayer = function () {
    function SLDPPlayer(src, room, params) {
        var _this = this;

        _classCallCheck(this, SLDPPlayer);

        console.log("create instance SLDP");

        //console.log("sldp params", params);
        this._onCanPlay = this._onCanPlay.bind(this);

        var wrapper = document.getElementById("sldp_player_wrapper");
        //alert("autoplay");

        this.instance = _sldpV141Min2.default.init({
            container: 'sldp_player_wrapper',
            //stream_url: "ws://192.168.56.1:8081/live/test",
            stream_url: src + "/" + room,
            buffering: 1000,
            height: parseInt(params.height), //"100%",
            width: parseInt(params.width),
            latency_tolerance: 6000,
            //offset:1,	//позволяет ускорить запуск
            autoplay: false
        });
        //console.log("sldp instance",this.instance);

        var video = this.video = wrapper.getElementsByTagName("video")[0];
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

        this.detector = new _DisconnectDetector2.default(this.video, 12000);
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
            if (this.isPlay) return;

            if (!this.isPlaying()) {
                $(".sldp_play_pause_btn").click();
                this.detector.startWatch(); // начали отслеживать при запуске
            }
            this.isPlay = true;
        }
    }, {
        key: "pause",
        value: function pause() {
            console.log("-> SLDP PAUSE FUNCTION");
            if (this.isPlaying()) $(".sldp_play_pause_btn").click();
            this.isPlay = false;
            this.detector.stopWatch(); //остановились в случае паузы
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SLDP = function (window) {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t;
        }, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default;
            } : function () {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 326);
    }([function (t, e, n) {
        var r = n(2),
            i = n(25),
            o = n(13),
            a = n(14),
            s = n(26),
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
                b = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                _ = p ? i : i[e] || (i[e] = {}),
                A = _.prototype || (_.prototype = {});
            p && (n = e);
            for (c in n) {
                f = !d && b && void 0 !== b[c], l = (f ? b : n)[c], h = g && f ? s(l, r) : m && "function" == typeof l ? s(Function.call, l) : l, b && a(b, c, l, t & u.U), _[c] != l && o(_, c, h), m && A[c] != l && (A[c] = l);
            }
        };
        r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, function (t, e, n) {
        var r = n(4);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
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
            a = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
        }).store = r;
    }, function (t, e, n) {
        t.exports = !n(3)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function get() {
                    return 7;
                }
            }).a;
        });
    }, function (t, e, n) {
        var r = n(1),
            i = n(99),
            o = n(24),
            a = Object.defineProperty;
        e.f = n(6) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return a(t, e, n);
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        };
    }, function (t, e, n) {
        var r = n(31),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    }, function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            return Object(r(t));
        };
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
            var t = "error",
                e = !1,
                n = function n() {
                if (console.log.apply(console, arguments), e) {
                    var t = Array.prototype.slice.call(arguments),
                        n = document.createElement("div"),
                        r = document.createTextNode(t.join(" "));
                    n.appendChild(r), e.appendChild(n), 30 < e.children.length && e.removeChild(e.children[0]), e.scrollTop = e.scrollHeight;
                }
            };
            return {
                setLevel: function setLevel(e) {
                    t = e;
                },
                setDiv: function setDiv(t) {
                    "string" == typeof t && (e = document.getElementById(t));
                },
                debug: function debug() {
                    "debug" == t && n.apply(this, arguments);
                },
                warn: function warn() {
                    "warn" != t && "debug" != t || n.apply(this, arguments);
                },
                error: function error() {
                    n.apply(this, arguments);
                }
            };
        }();
        e.default = r;
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    }, function (t, e, n) {
        var r = n(7),
            i = n(30);
        t.exports = n(6) ? function (t, e, n) {
            return r.f(t, e, i(1, n));
        } : function (t, e, n) {
            return t[e] = n, t;
        };
    }, function (t, e, n) {
        var r = n(2),
            i = n(13),
            o = n(10),
            a = n(40)("src"),
            s = Function.toString,
            u = ("" + s).split("toString");
        n(25).inspectSource = function (t) {
            return s.call(t);
        }, (t.exports = function (t, e, n, s) {
            var c = "function" == typeof n;
            c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, a) || i(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[a] || s.call(this);
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(3),
            o = n(20),
            a = function a(t, e, n, r) {
            var i = String(o(t)),
                a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(r).replace(/"/g, "&quot;") + '"'), a + ">" + i + "</" + e + ">";
        };
        t.exports = function (t, e) {
            var n = {};
            n[t] = e(a), r(r.P + r.F * i(function () {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3;
            }), "String", n);
        };
    }, function (t, e, n) {
        var r = n(47),
            i = n(20);
        t.exports = function (t) {
            return r(i(t));
        };
    }, function (t, e, n) {
        var r = n(48),
            i = n(30),
            o = n(16),
            a = n(24),
            s = n(10),
            u = n(99),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(6) ? c : function (t, e) {
            if (t = o(t), e = a(e, !0), u) try {
                return c(t, e);
            } catch (t) {}
            if (s(t, e)) return i(!r.f.call(t, e), t[e]);
        };
    }, function (t, e, n) {
        var r = n(10),
            i = n(9),
            o = n(77)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
        };
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e) {
            return !!t && r(function () {
                e ? t.call(null, function () {}, 1) : t.call(null);
            });
        };
    }, function (t, e, n) {
        var r = n(26),
            i = n(47),
            o = n(9),
            a = n(8),
            s = n(145);
        t.exports = function (t, e) {
            var n = 1 == t,
                u = 2 == t,
                c = 3 == t,
                f = 4 == t,
                l = 6 == t,
                h = 5 == t || l,
                d = e || s;
            return function (e, s, p) {
                for (var v, m, g = o(e), b = i(g), _ = r(s, p, 3), A = a(b.length), y = 0, w = n ? d(e, A) : u ? d(e, 0) : void 0; A > y; y++) {
                    if ((h || y in b) && (v = b[y], m = _(v, y, g), t)) if (n) w[y] = m;else if (m) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return y;
                        case 2:
                            w.push(v);
                    } else if (f) return !1;
                }return l ? -1 : c || f ? f : w;
            };
        };
    }, function (t, e, n) {
        var r = n(0),
            i = n(25),
            o = n(3);
        t.exports = function (t, e) {
            var n = (i.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), r(r.S + r.F * o(function () {
                n(1);
            }), "Object", a);
        };
    }, function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function (t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n);
    }, function (t, e, n) {
        var r = n(12);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    }, function (t, e, n) {
        var r = n(115),
            i = n(0),
            o = n(59)("metadata"),
            a = o.store || (o.store = new (n(118))()),
            s = function s(t, e, n) {
            var i = a.get(t);
            if (!i) {
                if (!n) return;
                a.set(t, i = new r());
            }
            var o = i.get(e);
            if (!o) {
                if (!n) return;
                i.set(e, o = new r());
            }
            return o;
        },
            u = function u(t, e, n) {
            var r = s(e, n, !1);
            return void 0 !== r && r.has(t);
        },
            c = function c(t, e, n) {
            var r = s(e, n, !1);
            return void 0 === r ? void 0 : r.get(t);
        },
            f = function f(t, e, n, r) {
            s(n, r, !0).set(t, e);
        },
            l = function l(t, e) {
            var n = s(t, e, !1),
                r = [];
            return n && n.forEach(function (t, e) {
                r.push(e);
            }), r;
        },
            h = function h(t) {
            return void 0 === t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : String(t);
        },
            d = function d(t) {
            i(i.S, "Reflect", t);
        };
        t.exports = {
            store: a,
            map: s,
            has: u,
            get: c,
            set: f,
            keys: l,
            key: h,
            exp: d
        };
    }, function (t, e, n) {
        "use strict";

        if (n(6)) {
            var r = n(33),
                i = n(2),
                o = n(3),
                a = n(0),
                s = n(60),
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
                b = n(10),
                _ = n(112),
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
                at = H.lastIndexOf,
                st = H.reduce,
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
                bt = s.CONSTR,
                _t = s.TYPED,
                At = s.VIEW,
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
                if (void 0 === t) throw Q("Wrong length!");
                var n = +t,
                    r = v(t);
                if (e && !_(n, r)) throw z("Wrong length!");
                return r;
            },
                Et = function Et(t, e) {
                var n = p(t);
                if (n < 0 || n % e) throw z("Wrong offset!");
                return n;
            },
                Tt = function Tt(t) {
                if (y(t) && _t in t) return t;
                throw Q(t + " is not a typed array!");
            },
                kt = function kt(t, e) {
                if (!(y(t) && mt in t)) throw Q("It is not a typed array constructor!");
                return new t(e);
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
                V(t, e, {
                    get: function get() {
                        return this._d[n];
                    }
                });
            },
                Mt = function Mt(t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = w(t),
                    u = arguments.length,
                    f = u > 1 ? arguments[1] : void 0,
                    l = void 0 !== f,
                    h = k(s);
                if (void 0 != h && !S(h)) {
                    for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++) {
                        r.push(o.value);
                    }s = r;
                }
                for (l && u > 2 && (f = c(f, arguments[2], 2)), e = 0, n = v(s.length), i = kt(this, n); n > e; e++) {
                    i[e] = l ? f(s[e], e) : s[e];
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
                Ot = {
                copyWithin: function copyWithin(t, e) {
                    return N.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                },
                every: function every(t) {
                    return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                fill: function fill(t) {
                    return D.apply(Tt(this), arguments);
                },
                filter: function filter(t) {
                    return Ct(this, K(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0));
                },
                find: function find(t) {
                    return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                findIndex: function findIndex(t) {
                    return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                forEach: function forEach(t) {
                    J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                indexOf: function indexOf(t) {
                    return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                includes: function includes(t) {
                    return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                join: function join(t) {
                    return ct.apply(Tt(this), arguments);
                },
                lastIndexOf: function lastIndexOf(t) {
                    return at.apply(Tt(this), arguments);
                },
                map: function map(t) {
                    return yt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                reduce: function reduce(t) {
                    return st.apply(Tt(this), arguments);
                },
                reduceRight: function reduceRight(t) {
                    return ut.apply(Tt(this), arguments);
                },
                reverse: function reverse() {
                    for (var t, e = this, n = Tt(e).length, r = Math.floor(n / 2), i = 0; i < r;) {
                        t = e[i], e[i++] = e[--n], e[n] = t;
                    }return e;
                },
                some: function some(t) {
                    return X(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                sort: function sort(t) {
                    return ft.call(Tt(this), t);
                },
                subarray: function subarray(t, e) {
                    var n = Tt(this),
                        r = n.length,
                        i = m(t, r);
                    return new (P(n, n[gt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? r : m(e, r)) - i));
                }
            },
                Rt = function Rt(t, e) {
                return Ct(this, lt.call(Tt(this), t, e));
            },
                Dt = function Dt(t) {
                Tt(this);
                var e = Et(arguments[1], 1),
                    n = this.length,
                    r = w(t),
                    i = v(r.length),
                    o = 0;
                if (i + e > n) throw z("Wrong length!");
                for (; o < i;) {
                    this[e + o] = r[o++];
                }
            },
                Nt = {
                entries: function entries() {
                    return ot.call(Tt(this));
                },
                keys: function keys() {
                    return it.call(Tt(this));
                },
                values: function values() {
                    return rt.call(Tt(this));
                }
            },
                jt = function jt(t, e) {
                return y(t) && t[_t] && "symbol" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && e in t && String(+e) == String(e);
            },
                Ut = function Ut(t, e) {
                return jt(t, e = g(e, !0)) ? l(2, t[e]) : W(t, e);
            },
                Vt = function Vt(t, e, n) {
                return !(jt(t, e = g(e, !0)) && y(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? V(t, e, n) : (t[e] = n.value, t);
            };
            bt || (U.f = Ut, j.f = Vt), a(a.S + a.F * !bt, "Object", {
                getOwnPropertyDescriptor: Ut,
                defineProperty: Vt
            }), o(function () {
                ht.call({});
            }) && (ht = dt = function dt() {
                return ct.call(this);
            });
            var Wt = d({}, Ot);
            d(Wt, Nt), h(Wt, pt, Nt.values), d(Wt, {
                slice: Rt,
                set: Dt,
                constructor: function constructor() {},
                toString: ht,
                toLocaleString: Lt
            }), Bt(Wt, "buffer", "b"), Bt(Wt, "byteOffset", "o"), Bt(Wt, "byteLength", "l"), Bt(Wt, "length", "e"), V(Wt, vt, {
                get: function get() {
                    return this[_t];
                }
            }), t.exports = function (t, e, n, u) {
                u = !!u;
                var c = t + (u ? "Clamped" : "") + "Array",
                    l = "Uint8Array" != c,
                    d = "get" + t,
                    p = "set" + t,
                    m = i[c],
                    g = m || {},
                    b = m && E(m),
                    _ = !m || !s.ABV,
                    w = {},
                    S = m && m.prototype,
                    k = function k(t, n) {
                    var r = t._d;
                    return r.v[d](n * e + r.o, wt);
                },
                    C = function C(t, n, r) {
                    var i = t._d;
                    u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, wt);
                },
                    F = function F(t, e) {
                    V(t, e, {
                        get: function get() {
                            return k(this, e);
                        },
                        set: function set(t) {
                            return C(this, e, t);
                        },
                        enumerable: !0
                    });
                };
                _ ? (m = n(function (t, n, r, i) {
                    f(t, m, c, "_d");
                    var o,
                        a,
                        s,
                        u,
                        l = 0,
                        d = 0;
                    if (y(n)) {
                        if (!(n instanceof G || "ArrayBuffer" == (u = A(n)) || "SharedArrayBuffer" == u)) return _t in n ? Ft(m, n) : Mt.call(m, n);
                        o = n, d = Et(r, e);
                        var p = n.byteLength;
                        if (void 0 === i) {
                            if (p % e) throw z("Wrong length!");
                            if ((a = p - d) < 0) throw z("Wrong length!");
                        } else if ((a = v(i) * e) + d > p) throw z("Wrong length!");
                        s = a / e;
                    } else s = xt(n, !0), a = s * e, o = new G(a);
                    for (h(t, "_d", {
                        b: o,
                        o: d,
                        l: a,
                        e: s,
                        v: new q(o)
                    }); l < s;) {
                        F(t, l++);
                    }
                }), S = m.prototype = x(Wt), h(S, "constructor", m)) : O(function (t) {
                    new m(null), new m(t);
                }, !0) || (m = n(function (t, n, r, i) {
                    f(t, m, c);
                    var o;
                    return y(n) ? n instanceof G || "ArrayBuffer" == (o = A(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new g(n, Et(r, e), i) : void 0 !== r ? new g(n, Et(r, e)) : new g(n) : _t in n ? Ft(m, n) : Mt.call(m, n) : new g(xt(n, l));
                }), J(b !== Function.prototype ? T(g).concat(T(b)) : T(g), function (t) {
                    t in m || h(m, t, g[t]);
                }), m.prototype = S, r || (S.constructor = m));
                var B = S[pt],
                    M = !!B && ("values" == B.name || void 0 == B.name),
                    P = Nt.values;
                h(m, mt, !0), h(S, _t, c), h(S, At, !0), h(S, gt, m), (u ? new m(1)[vt] == c : vt in S) || V(S, vt, {
                    get: function get() {
                        return c;
                    }
                }), w[c] = m, a(a.G + a.W + a.F * (m != g), w), a(a.S, c, {
                    BYTES_PER_ELEMENT: e,
                    from: Mt,
                    of: Pt
                }), "BYTES_PER_ELEMENT" in S || h(S, "BYTES_PER_ELEMENT", e), a(a.P, c, Ot), R(c), a(a.P + a.F * St, c, {
                    set: Dt
                }), a(a.P + a.F * !M, c, Nt), a(a.P + a.F * (S.toString != ht), c, {
                    toString: ht
                }), a(a.P + a.F * o(function () {
                    new m(1).slice();
                }), c, {
                    slice: Rt
                }), a(a.P + a.F * (o(function () {
                    return [1, 2].toLocaleString() != new m([1, 2]).toLocaleString();
                }) || !o(function () {
                    S.toLocaleString.call([1, 2]);
                })), c, {
                    toLocaleString: Lt
                }), L[c] = M ? B : P, r || M || h(S, pt, P);
            };
        } else t.exports = function () {};
    }, function (t, e, n) {
        var r = n(40)("meta"),
            i = n(4),
            o = n(10),
            a = n(7).f,
            s = 0,
            u = Object.isExtensible || function () {
            return !0;
        },
            c = !n(3)(function () {
            return u(Object.preventExtensions({}));
        }),
            f = function f(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            });
        },
            l = function l(t, e) {
            if (!i(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, r)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                f(t);
            }
            return t[r].i;
        },
            h = function h(t, e) {
            if (!o(t, r)) {
                if (!u(t)) return !0;
                if (!e) return !1;
                f(t);
            }
            return t[r].w;
        },
            d = function d(t) {
            return c && p.NEED && u(t) && !o(t, r) && f(t), t;
        },
            p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: l,
            getWeak: h,
            onFreeze: d
        };
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            };
        };
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
        };
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t;
        };
    }, function (t, e) {
        t.exports = !1;
    }, function (t, e, n) {
        var r = n(1),
            i = n(105),
            o = n(65),
            a = n(77)("IE_PROTO"),
            s = function s() {},
            _u = function u() {
            var t,
                e = n(64)("iframe"),
                r = o.length;
            for (e.style.display = "none", n(67).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script>"), t.close(), _u = t.F; r--;) {
                delete _u.prototype[o[r]];
            }return _u();
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[a] = t) : n = _u(), void 0 === e ? n : i(n, e);
        };
    }, function (t, e, n) {
        var r = n(107),
            i = n(65).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, i);
        };
    }, function (t, e, n) {
        var r = n(107),
            i = n(65);
        t.exports = Object.keys || function (t) {
            return r(t, i);
        };
    }, function (t, e, n) {
        var r = n(14);
        t.exports = function (t, e, n) {
            for (var i in e) {
                r(t, i, e[i], n);
            }return t;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(2),
            i = n(7),
            o = n(6),
            a = n(5)("species");
        t.exports = function (t) {
            var e = r[t];
            o && e && !e[a] && i.f(e, a, {
                configurable: !0,
                get: function get() {
                    return this;
                }
            });
        };
    }, function (t, e, n) {
        var r = n(31),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? i(t + e, 0) : o(t, e);
        };
    }, function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    }, function (t, e, n) {
        var r = n(5)("unscopables"),
            i = Array.prototype;
        void 0 == i[r] && n(13)(i, r, {}), t.exports = function (t) {
            i[r][t] = !0;
        };
    }, function (t, e, n) {
        var r = n(26),
            i = n(101),
            o = n(69),
            a = n(1),
            s = n(8),
            u = n(86),
            c = {},
            f = {},
            e = t.exports = function (t, e, n, l, h) {
            var d,
                p,
                v,
                m,
                g = h ? function () {
                return t;
            } : u(t),
                b = r(n, l, e ? 2 : 1),
                _ = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (o(g)) {
                for (d = s(t.length); d > _; _++) {
                    if ((m = e ? b(a(p = t[_])[0], p[1]) : b(t[_])) === c || m === f) return m;
                }
            } else for (v = g.call(t); !(p = v.next()).done;) {
                if ((m = i(v, b, p.value, e)) === c || m === f) return m;
            }
        };
        e.BREAK = c, e.RETURN = f;
    }, function (t, e) {
        t.exports = {};
    }, function (t, e, n) {
        var r = n(7).f,
            i = n(10),
            o = n(5)("toStringTag");
        t.exports = function (t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            });
        };
    }, function (t, e, n) {
        var r = n(0),
            i = n(20),
            o = n(3),
            a = n(82),
            s = "[" + a + "]",
            u = "​",
            c = RegExp("^" + s + s + "*"),
            f = RegExp(s + s + "*$"),
            l = function l(t, e, n) {
            var i = {},
                s = o(function () {
                return !!a[t]() || u[t]() != u;
            }),
                c = i[t] = s ? e(h) : a[t];
            n && (i[n] = c), r(r.P + r.F * s, "String", i);
        },
            h = l.trim = function (t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(f, "")), t;
        };
        t.exports = l;
    }, function (t, e, n) {
        var r = n(19),
            i = n(5)("toStringTag"),
            o = "Arguments" == r(function () {
            return arguments;
        }()),
            a = function a(t, e) {
            try {
                return t[e];
            } catch (t) {}
        };
        t.exports = function (t) {
            var e, n, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s;
        };
    }, function (t, e, n) {
        var r = n(19);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function r(t) {
            this.offset = void 0 === t ? 0 : t;
        };
        e.default = r;
    }, function (t, e, n) {
        var r = n(16),
            i = n(8),
            o = n(39);
        t.exports = function (t) {
            return function (e, n, a) {
                var s,
                    u = r(e),
                    c = i(u.length),
                    f = o(a, c);
                if (t && n != n) {
                    for (; c > f;) {
                        if ((s = u[f++]) != s) return !0;
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
            a = n(37),
            s = n(29),
            u = n(42),
            c = n(32),
            f = n(4),
            l = n(3),
            h = n(56),
            d = n(44),
            p = n(68);
        t.exports = function (t, e, n, v, m, g) {
            var b = r[t],
                _ = b,
                A = m ? "set" : "add",
                y = _ && _.prototype,
                w = {},
                S = function S(t) {
                var e = y[t];
                o(y, t, "delete" == t ? function (t) {
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
            };
            if ("function" == typeof _ && (g || y.forEach && !l(function () {
                new _().entries().next();
            }))) {
                var x = new _(),
                    E = x[A](g ? {} : -0, 1) != x,
                    T = l(function () {
                    x.has(1);
                }),
                    k = h(function (t) {
                    new _(t);
                }),
                    C = !g && l(function () {
                    for (var t = new _(), e = 5; e--;) {
                        t[A](e, e);
                    }return !t.has(-0);
                });
                k || (_ = e(function (e, n) {
                    c(e, _, t);
                    var r = p(new b(), e, _);
                    return void 0 != n && u(n, m, r[A], r), r;
                }), _.prototype = y, y.constructor = _), (T || C) && (S("delete"), S("has"), m && S("get")), (C || E) && S(A), g && y.clear && delete y.clear;
            } else _ = v.getConstructor(e, t, m, A), a(_.prototype, n), s.NEED = !0;
            return d(_, t), w[t] = _, i(i.G + i.W + i.F * (_ != b), w), g || v.setStrong(_, t, m), _;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(13),
            i = n(14),
            o = n(3),
            a = n(20),
            s = n(5);
        t.exports = function (t, e, n) {
            var u = s(t),
                c = n(a, u, ""[t]),
                f = c[0],
                l = c[1];
            o(function () {
                var e = {};
                return e[u] = function () {
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

        var r = n(1);
        t.exports = function () {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
        };
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    }, function (t, e, n) {
        var r = n(4),
            i = n(19),
            o = n(5)("match");
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
        };
    }, function (t, e, n) {
        var r = n(5)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0;
            }, Array.from(o, function () {
                throw 2;
            });
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                a.next = function () {
                    return {
                        done: n = !0
                    };
                }, o[r] = function () {
                    return a;
                }, t(o);
            } catch (t) {}
            return n;
        };
    }, function (t, e, n) {
        t.exports = n(33) || !n(3)(function () {
            var t = Math.random();
            __defineSetter__.call(null, t, function () {}), delete n(2)[t];
        });
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
        var r = n(2),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function (t) {
            return i[t] || (i[t] = {});
        };
    }, function (t, e, n) {
        for (var r, i = n(2), o = n(13), a = n(40), s = a("typed_array"), u = a("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;) {
            (r = i[h[l++]]) ? (o(r.prototype, s, !0), o(r.prototype, u, !0)) : f = !1;
        }t.exports = {
            ABV: c,
            CONSTR: f,
            TYPED: s,
            VIEW: u
        };
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = {};
            this.init = function (e) {
                if (e) for (var n in e) {
                    var r = document.getElementById(e[n]);
                    r && (t[n] = r);
                }
            }, this.display = function (e, n) {
                var r = t[e];
                r && (r.innerHTML = n);
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = new r();
        e.default = i;
    }, function (t, e, n) {
        "use strict";

        var r = n(9),
            i = n(39),
            o = n(8);
        t.exports = function (t) {
            for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > s;) {
                e[s++] = t;
            }return e;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(7),
            i = n(30);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n;
        };
    }, function (t, e, n) {
        var r = n(4),
            i = n(2).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {};
        };
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function (t, e, n) {
        var r = n(5)("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./"[t](e);
            } catch (n) {
                try {
                    return e[r] = !1, !"/./"[t](e);
                } catch (t) {}
            }
            return !0;
        };
    }, function (t, e, n) {
        t.exports = n(2).document && document.documentElement;
    }, function (t, e, n) {
        var r = n(4),
            i = n(76).set;
        t.exports = function (t, e, n) {
            var o,
                a = e.constructor;
            return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t;
        };
    }, function (t, e, n) {
        var r = n(43),
            i = n(5)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t);
        };
    }, function (t, e, n) {
        var r = n(19);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t);
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(34),
            i = n(30),
            o = n(44),
            a = {};
        n(13)(a, n(5)("iterator"), function () {
            return this;
        }), t.exports = function (t, e, n) {
            t.prototype = r(a, {
                next: i(1, n)
            }), o(t, e + " Iterator");
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(33),
            i = n(0),
            o = n(14),
            a = n(13),
            s = n(10),
            u = n(43),
            c = n(71),
            f = n(44),
            l = n(18),
            h = n(5)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function p() {
            return this;
        };
        t.exports = function (t, e, n, v, m, g, b) {
            c(n, e, v);
            var _,
                A,
                y,
                w = function w(t) {
                if (!d && t in T) return T[t];
                switch (t) {
                    case "keys":
                        return function () {
                            return new n(this, t);
                        };
                    case "values":
                        return function () {
                            return new n(this, t);
                        };
                }
                return function () {
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
                B = "Array" == e ? T.entries || k : k;
            if (B && (y = l(B.call(new t()))) !== Object.prototype && (f(y, S, !0), r || s(y, h) || a(y, h, p)), x && k && "values" !== k.name && (E = !0, C = function C() {
                return k.call(this);
            }), r && !b || !d && !E && T[h] || a(T, h, C), u[e] = C, u[S] = p, m) if (_ = {
                values: x ? C : w("values"),
                keys: g ? C : w("keys"),
                entries: F
            }, b) for (A in _) {
                A in T || o(T, A, _[A]);
            } else i(i.P + i.F * (d || E), e, _);
            return _;
        };
    }, function (t, e) {
        var n = Math.expm1;
        t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function (t) {
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
            a = r.process,
            s = r.Promise,
            u = "process" == n(19)(a);
        t.exports = function () {
            var t,
                e,
                n,
                c = function c() {
                var r, i;
                for (u && (r = a.domain) && r.exit(); t;) {
                    i = t.fn, t = t.next;
                    try {
                        i();
                    } catch (r) {
                        throw t ? n() : e = void 0, r;
                    }
                }
                e = void 0, r && r.enter();
            };
            if (u) n = function n() {
                a.nextTick(c);
            };else if (o) {
                var f = !0,
                    l = document.createTextNode("");
                new o(c).observe(l, {
                    characterData: !0
                }), n = function n() {
                    l.data = f = !f;
                };
            } else if (s && s.resolve) {
                var h = s.resolve();
                n = function n() {
                    h.then(c);
                };
            } else n = function n() {
                i.call(r, c);
            };
            return function (r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i), t || (t = i, n()), e = i;
            };
        };
    }, function (t, e, n) {
        var r = n(4),
            i = n(1),
            o = function o(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
                try {
                    r = n(26)(Function.call, n(17).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array);
                } catch (t) {
                    e = !0;
                }
                return function (t, n) {
                    return o(t, n), e ? t.__proto__ = n : r(t, n), t;
                };
            }({}, !1) : void 0),
            check: o
        };
    }, function (t, e, n) {
        var r = n(59)("keys"),
            i = n(40);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t));
        };
    }, function (t, e, n) {
        var r = n(1),
            i = n(12),
            o = n(5)("species");
        t.exports = function (t, e) {
            var n,
                a = r(t).constructor;
            return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n);
        };
    }, function (t, e, n) {
        var r = n(31),
            i = n(20);
        t.exports = function (t) {
            return function (e, n) {
                var o,
                    a,
                    s = String(i(e)),
                    u = r(n),
                    c = s.length;
                return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536);
            };
        };
    }, function (t, e, n) {
        var r = n(55),
            i = n(20);
        t.exports = function (t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(t));
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(31),
            i = n(20);
        t.exports = function (t) {
            var e = String(i(this)),
                n = "",
                o = r(t);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0; (o >>>= 1) && (e += e)) {
                1 & o && (n += e);
            }return n;
        };
    }, function (t, e) {
        t.exports = "\t\n\x0B\f\r \uFFFD \u1680\uFFFD \uFFFD\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }, function (t, e, n) {
        var r,
            i,
            o,
            a = n(26),
            s = n(54),
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
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e();
            }
        },
            b = function b(t) {
            g.call(t.data);
        };
        h && d || (h = function h(t) {
            for (var e = [], n = 1; arguments.length > n;) {
                e.push(arguments[n++]);
            }return m[++v] = function () {
                s("function" == typeof t ? t : Function(t), e);
            }, r(v), v;
        }, d = function d(t) {
            delete m[t];
        }, "process" == n(19)(l) ? r = function r(t) {
            l.nextTick(a(g, t, 1));
        } : p ? (i = new p(), o = i.port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function r(t) {
            f.postMessage(t + "", "*");
        }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
            u.appendChild(c("script")).onreadystatechange = function () {
                u.removeChild(this), g.call(t);
            };
        } : function (t) {
            setTimeout(a(g, t, 1), 0);
        }), t.exports = {
            set: h,
            clear: d
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(2),
            i = n(6),
            o = n(33),
            a = n(60),
            s = n(13),
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
            _b = r.DataView,
            _ = r.Math,
            A = r.RangeError,
            y = r.Infinity,
            w = g,
            S = _.abs,
            x = _.pow,
            E = _.floor,
            T = _.log,
            k = _.LN2,
            C = i ? "_b" : "buffer",
            F = i ? "_l" : "byteLength",
            B = i ? "_o" : "byteOffset",
            M = function M(t, e, n) {
            var r,
                i,
                o,
                a = Array(n),
                s = 8 * n - e - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                f = 23 === e ? x(2, -24) - x(2, -77) : 0,
                l = 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = S(t), t != t || t === y ? (i = t != t ? 1 : 0, r = u) : (r = E(T(t) / k), t * (o = x(2, -r)) < 1 && (r--, o *= 2), t += r + c >= 1 ? f / o : f * x(2, 1 - c), t * o >= 2 && (r++, o /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (t * o - 1) * x(2, e), r += c) : (i = t * x(2, c - 1) * x(2, e), r = 0)); e >= 8; a[l++] = 255 & i, i /= 256, e -= 8) {}
            for (r = r << e | i, s += e; s > 0; a[l++] = 255 & r, r /= 256, s -= 8) {}
            return a[--l] |= 128 * h, a;
        },
            P = function P(t, e, n) {
            var r,
                i = 8 * n - e - 1,
                o = (1 << i) - 1,
                a = o >> 1,
                s = i - 7,
                u = n - 1,
                c = t[u--],
                f = 127 & c;
            for (c >>= 7; s > 0; f = 256 * f + t[u], u--, s -= 8) {}
            for (r = f & (1 << -s) - 1, f >>= -s, s += e; s > 0; r = 256 * r + t[u], u--, s -= 8) {}
            if (0 === f) f = 1 - a;else {
                if (f === o) return r ? NaN : c ? -y : y;
                r += x(2, e), f -= a;
            }
            return (c ? -1 : 1) * r * x(2, f - e);
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
            p(t.prototype, e, {
                get: function get() {
                    return this[n];
                }
            });
        },
            U = function U(t, e, n, r) {
            var i = +n,
                o = l(i);
            if (i != o || o < 0 || o + e > t[F]) throw A("Wrong index!");
            var a = t[C]._b,
                s = o + t[B],
                u = a.slice(s, s + e);
            return r ? u : u.reverse();
        },
            V = function V(t, e, n, r, i, o) {
            var a = +n,
                s = l(a);
            if (a != s || s < 0 || s + e > t[F]) throw A("Wrong index!");
            for (var u = t[C]._b, c = s + t[B], f = r(+i), h = 0; h < e; h++) {
                u[c + h] = f[o ? h : e - h - 1];
            }
        },
            W = function W(t, e) {
            f(t, g, "ArrayBuffer");
            var n = +e,
                r = h(n);
            if (n != r) throw A("Wrong length!");
            return r;
        };
        if (a.ABV) {
            if (!c(function () {
                new g();
            }) || !c(function () {
                new g(.5);
            })) {
                g = function g(t) {
                    return new w(W(this, t));
                };
                for (var z, Q = g.prototype = w.prototype, Y = d(w), H = 0; Y.length > H;) {
                    (z = Y[H++]) in g || s(g, z, w[z]);
                }o || (Q.constructor = g);
            }
            var G = new _b(new g(2)),
                q = _b.prototype.setInt8;
            G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || u(_b.prototype, {
                setInt8: function setInt8(t, e) {
                    q.call(this, t, e << 24 >> 24);
                },
                setUint8: function setUint8(t, e) {
                    q.call(this, t, e << 24 >> 24);
                }
            }, !0);
        } else g = function g(t) {
            var e = W(this, t);
            this._b = v.call(Array(e), 0), this[F] = e;
        }, _b = function b(t, e, n) {
            f(this, _b, "DataView"), f(t, g, "DataView");
            var r = t[F],
                i = l(e);
            if (i < 0 || i > r) throw A("Wrong offset!");
            if (n = void 0 === n ? r - i : h(n), i + n > r) throw A("Wrong length!");
            this[C] = t, this[B] = i, this[F] = n;
        }, i && (j(g, "byteLength", "_l"), j(_b, "buffer", "_b"), j(_b, "byteLength", "_l"), j(_b, "byteOffset", "_o")), u(_b.prototype, {
            getInt8: function getInt8(t) {
                return U(this, 1, t)[0] << 24 >> 24;
            },
            getUint8: function getUint8(t) {
                return U(this, 1, t)[0];
            },
            getInt16: function getInt16(t) {
                var e = U(this, 2, t, arguments[1]);
                return (e[1] << 8 | e[0]) << 16 >> 16;
            },
            getUint16: function getUint16(t) {
                var e = U(this, 2, t, arguments[1]);
                return e[1] << 8 | e[0];
            },
            getInt32: function getInt32(t) {
                return I(U(this, 4, t, arguments[1]));
            },
            getUint32: function getUint32(t) {
                return I(U(this, 4, t, arguments[1])) >>> 0;
            },
            getFloat32: function getFloat32(t) {
                return P(U(this, 4, t, arguments[1]), 23, 4);
            },
            getFloat64: function getFloat64(t) {
                return P(U(this, 8, t, arguments[1]), 52, 8);
            },
            setInt8: function setInt8(t, e) {
                V(this, 1, t, L, e);
            },
            setUint8: function setUint8(t, e) {
                V(this, 1, t, L, e);
            },
            setInt16: function setInt16(t, e) {
                V(this, 2, t, O, e, arguments[2]);
            },
            setUint16: function setUint16(t, e) {
                V(this, 2, t, O, e, arguments[2]);
            },
            setInt32: function setInt32(t, e) {
                V(this, 4, t, R, e, arguments[2]);
            },
            setUint32: function setUint32(t, e) {
                V(this, 4, t, R, e, arguments[2]);
            },
            setFloat32: function setFloat32(t, e) {
                V(this, 4, t, N, e, arguments[2]);
            },
            setFloat64: function setFloat64(t, e) {
                V(this, 8, t, D, e, arguments[2]);
            }
        });
        m(g, "ArrayBuffer"), m(_b, "DataView"), s(_b.prototype, a.VIEW, !0), e.ArrayBuffer = g, e.DataView = _b;
    }, function (t, e, n) {
        var r = n(2),
            i = n(25),
            o = n(33),
            a = n(114),
            s = n(7).f;
        t.exports = function (t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            });
        };
    }, function (t, e, n) {
        var r = n(46),
            i = n(5)("iterator"),
            o = n(43);
        t.exports = n(25).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(41),
            i = n(102),
            o = n(43),
            a = n(16);
        t.exports = n(72)(Array, "Array", function (t, e) {
            this._t = a(t), this._i = 0, this._k = e;
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i() {
            function t(t, e) {
                if ("codecData" in e) switch (t.codecData = e.codecData, t.type) {
                    case "video":
                        t.codec = "AVC1";
                        break;
                    case "audio":
                        i(t, e);
                }
            }

            function e(t, e) {
                for (var n = new Uint8Array(e), r = 0, i = 0; i < t.length; i++) {
                    n.set(t[i].data, r), r += t[i].data.length;
                }return n;
            }

            function n(t, e, n, r, i) {
                var o = void 0,
                    a = r;
                o = t.lastSample;
                var s = r - o.rawts;
                (s < 0 || s > 10 * t.timescale) && (u.default.debug("Adjust DTS difference!!!", s), s = t.lastSampleDuration), r = o.ts + s;
                var c = o.altTs + t.sampleDuration;
                return Math.abs(r / t.timescale - c / t.samplingRate) > 1 && u.default.error("Alt TS discrepancy", r, c), o.duration = s, t.lastSampleDuration = s, t.lastSample = {
                    data: n,
                    ts: r,
                    altTs: c,
                    rawts: a,
                    altDur: t.sampleDuration,
                    offset: i,
                    sap: e
                }, o;
            }

            function r(t) {
                for (var e = void 0, n = 0; n < P.length; n++) {
                    if (P[n].id == t) {
                        e = P[n];
                        break;
                    }
                }return void 0 === e && u.default.error("[BoxComposer]: track ID " + t + " is not found!"), e;
            }

            function i(t, e) {
                switch (e.codec) {
                    case "MP4A.40.34":
                        t.codec = "MP3", o(t);
                        break;
                    default:
                        t.codec = "AAC", s(t);
                }
            }

            function o(t) {
                if (t.codecData) {
                    var e = [[0, 576, 1152, 384], [0, 0, 0, 0], [0, 576, 1152, 384], [0, 1152, 1152, 384]],
                        n = [[11025, 0, 22050, 44100], [12e3, 0, 24e3, 48e3], [8e3, 0, 16e3, 32e3], [0, 0, 0, 0]],
                        r = [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 8192, 8192, 32768], [0, 0, 0, 0], [0, 8192, 8192, 32768], [0, 32768, 32768, 32768]], [[0, 16384, 16384, 49152], [0, 0, 0, 0], [0, 16384, 16384, 49152], [0, 40960, 49152, 65536]], [[0, 24576, 24576, 57344], [0, 0, 0, 0], [0, 24576, 24576, 57344], [0, 49152, 57344, 98304]], [[0, 32768, 32768, 65536], [0, 0, 0, 0], [0, 32768, 32768, 65536], [0, 57344, 65536, 131072]], [[0, 40960, 40960, 81920], [0, 0, 0, 0], [0, 40960, 40960, 81920], [0, 65536, 81920, 163840]], [[0, 49152, 49152, 98304], [0, 0, 0, 0], [0, 49152, 49152, 98304], [0, 81920, 98304, 196608]], [[0, 57344, 57344, 114688], [0, 0, 0, 0], [0, 57344, 57344, 114688], [0, 98304, 114688, 229376]], [[0, 65536, 65536, 131072], [0, 0, 0, 0], [0, 65536, 65536, 131072], [0, 114688, 131072, 262144]], [[0, 81920, 81920, 147456], [0, 0, 0, 0], [0, 81920, 81920, 147456], [0, 131072, 163840, 294912]], [[0, 98304, 98304, 163840], [0, 0, 0, 0], [0, 98304, 98304, 163840], [0, 163840, 196608, 327680]], [[0, 114688, 114688, 180224], [0, 0, 0, 0], [0, 114688, 114688, 180224], [0, 196608, 229376, 360448]], [[0, 131072, 131072, 196608], [0, 0, 0, 0], [0, 131072, 131072, 196608], [0, 229376, 262144, 393216]], [[0, 147456, 147456, 229376], [0, 0, 0, 0], [0, 147456, 147456, 229376], [0, 262144, 327680, 425984]], [[0, 163840, 163840, 262144], [0, 0, 0, 0], [0, 163840, 163840, 262144], [0, 327680, 393216, 458752]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]],
                        i = t.codecData;
                    if (255 == (255 & i[0]) && 224 == (224 & i[1])) {
                        var o = i[1] >> 3 & 3;
                        1 == o && (o = 0);
                        var a = i[1] >> 1 & 3;
                        if (0 != a) {
                            t.sampleDuration = e[o][a];
                            var s = i[2] >> 4 & 21;
                            t.bitrate = r[s][o][a];
                            var u = i[2] >> 2 & 3;
                            t.samplingRate = n[u][o];
                            var c = i[3] >> 6 & 3;
                            t.audioChannels = 3 == c ? 1 : 2;
                        }
                    }
                }
            }

            function s(t) {
                if (t.codecData) {
                    var e = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
                        n = [1024, 960],
                        r = t.codecData,
                        i = r[0] >> 3,
                        o = 0;
                    o = 31 == i ? r[1] >> 1 & 15 : (7 & r[0]) << 1 | r[1] >> 7, t.bitrate = 0, 15 == o ? 31 == i ? (t.samplingRate = ((1 & r[1]) << 7 | r[2] >> 1) << 16 | ((1 & r[2]) << 7 | r[3] >> 1) << 8 | (1 & r[3]) << 7 | r[4] >> 1, t.audioChannels = (1 & r[4]) << 3 | r[5] >> 5, t.sampleDuration = n[(16 & r[5]) >> 4]) : (t.samplingRate = ((127 & r[1]) << 1 | r[2] >> 7) << 16 | ((127 & r[2]) << 1 | r[3] >> 7) << 8 | (127 & r[3]) << 1 | r[4] >> 7, t.audioChannels = (120 & r[4]) >> 3, t.sampleDuration = n[(4 & r[4]) >> 2]) : (t.samplingRate = e[o], 31 == i ? (t.audioChannels = (1 & r[1]) << 3 | r[2] >> 5, t.sampleDuration = n[(16 & r[2]) >> 4]) : (t.audioChannels = (120 & r[1]) >> 3, t.sampleDuration = n[(4 & r[1]) >> 2]));
                }
            }

            function c(t) {
                var e = a.default.createBox("ftyp", t);
                return e.major_brand = "isom", e.minor_version = 1, e.compatible_brands = [], e.compatible_brands[0] = "isom", e.compatible_brands[1] = "avc1", e.compatible_brands[2] = "dash", e;
            }

            function f(t) {
                var e = a.default.createBox("styp", t);
                return e.major_brand = "msdh", e.minor_version = 0, e.compatible_brands = [], e.compatible_brands[0] = "msdh", e.compatible_brands[1] = "msix", e;
            }

            function l(t) {
                var e = a.default.createBox("moov", t);
                p(e);
                var n = a.default.createBox("mvex", e);
                w(n);
                for (var r = 0; r < P.length; r++) {
                    var i = P[r],
                        o = a.default.createBox("trak", e);
                    v(i, o);
                    var s = a.default.createBox("mdia", o);
                    g(i, s), b(i, s);
                    var u = a.default.createBox("minf", s);
                    switch (i.type) {
                        case "video":
                            _(u);
                            break;
                        case "audio":
                            A(u);
                    }
                    y(a.default.createBox("dinf", u));
                    var c = a.default.createBox("stbl", u);
                    a.default.createFullBox("stts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0];
                    a.default.createFullBox("ctts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0];
                    a.default.createFullBox("stsc", c)._data = [0, 0, 0, 0, 0, 0, 0, 0];
                    a.default.createFullBox("stco", c)._data = [0, 0, 0, 0, 0, 0, 0, 0];
                    a.default.createFullBox("stsz", c)._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], x(i, c), S(i, n);
                }
                return e;
            }

            function h(t, e, n) {
                var r = a.default.createBox("sidx", t);
                r.flags = 0, r.version = 1, r.reference_ID = e.id, r.timescale = m(e), r.first_offset = 0, r.reserved = 0, r.earliest_presentation_time = "audio" == e.type ? n[0].altTs : n[0].ts + n[0].offset, r.reference_count = 1;
                for (var i = !1, o = 0, s = 0, u = 0, c = 0, f = 0; f < n.length; f++) {
                    o += n[f].data.byteLength, !i && n[f].sap && (i = !0, c = s), s += n[f].duration, u += n[f].altDur;
                }return r.references = [{
                    reference_type: 0,
                    referenced_size: o,
                    subsegment_duration: "audio" == e.type ? u : s,
                    starts_with_SAP: n[0].sap ? 1 : 0,
                    SAP_type: i ? 1 : 0,
                    SAP_delta_time: c
                }], r;
            }

            function d(t, e, n) {
                var r = a.default.createBox("moof", t);
                a.default.createFullBox("mfhd", r).sequence_number = e.curSeqNumber++;
                var i = a.default.createBox("traf", r),
                    o = a.default.createFullBox("tfhd", i);
                o.track_ID = e.id, o.flags = 131072;
                var s = a.default.createFullBox("tfdt", i, o);
                s.version = 1, s.flags = 0;
                var u = a.default.createFullBox("trun", i, s);
                if (u.sample_count = n.length, u.samples = [], "audio" == e.type) {
                    s.baseMediaDecodeTime = n[0].altTs, u.flags = 769;
                    for (var c = 0; c < n.length; c++) {
                        u.samples.push({
                            sample_duration: n[c].altDur,
                            sample_size: n[c].data.byteLength
                        });
                    }
                } else {
                    s.baseMediaDecodeTime = n[0].ts, u.flags = 2821, u.first_sample_flags = 0;
                    for (var f = 0; f < n.length; f++) {
                        u.samples.push({
                            sample_duration: n[f].duration,
                            sample_size: n[f].data.byteLength,
                            sample_composition_time_offset: n[f].offset
                        });
                    }
                }
                return u.data_offset = r.getLength() + 8, r;
            }

            function p(t) {
                var e = a.default.createFullBox("mvhd", t);
                return e.creation_time = 0, e.modification_time = 0, e.timescale = 1e3, e.duration = 0, e.rate = 1, e.volume = 1, e.reserved1 = 0, e.reserved2 = [0, 0], e.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], e.pre_defined = [0, 0, 0, 0, 0, 0], e.next_track_ID = I, e;
            }

            function v(t, e) {
                var n = a.default.createFullBox("tkhd", e);
                switch (n.flags = 7, n.creation_time = 0, n.modification_time = 0, n.track_ID = t.id, n.reserved1 = 0, n.duration = 0, n.reserved2 = [0, 0], n.layer = 0, n.alternate_group = 0, n.reserved3 = 0, n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], t.type) {
                    case "video":
                        n.volume = 0, n.width = t.width, n.height = t.height, n.flags |= 8;
                        break;
                    case "audio":
                        n.volume = 1, n.width = 0, n.height = 0;
                }
                return n;
            }

            function m(t) {
                return "audio" == t.type ? t.samplingRate : t.timescale;
            }

            function g(t, e) {
                var n = a.default.createFullBox("mdhd", e);
                return n.creation_time = 0, n.modification_time = 0, n.duration = 0, n.language = "und", n.pre_defined = 0, n.timescale = m(t), n;
            }

            function b(t, e) {
                var n = a.default.createFullBox("hdlr", e);
                switch (n.pre_defined = 0, t.type) {
                    case "video":
                        n.handler_type = "vide", n.name = "VideoHandler";
                        break;
                    case "audio":
                        n.handler_type = "soun", n.name = "AudioHandler";
                }
                return n.reserved = [0, 0, 0], n;
            }

            function _(t) {
                var e = a.default.createFullBox("vmhd", t);
                return e.flags = 1, e.graphicsmode = 0, e.opcolor = [0, 0, 0], e;
            }

            function A(t) {
                var e = a.default.createFullBox("smhd", t);
                return e.balance = 0, e.reserved = 0, e;
            }

            function y(t) {
                var e = a.default.createFullBox("dref", t);
                e.entry_count = 1, e.entries = [];
                var n = a.default.createFullBox("url ", e, -1);
                return n.location = "", n.flags = 1, e.entries.push(n), e;
            }

            function w(t) {
                var e = a.default.createFullBox("mehd", t);
                return e.fragment_duration = 0, e;
            }

            function S(t, e) {
                var n = a.default.createFullBox("trex", e);
                return n.track_ID = t.id, n.default_sample_description_index = 1, n.default_sample_duration = 0, n.default_sample_size = 0, n.default_sample_flags = 0, n;
            }

            function x(t, e) {
                var n = a.default.createFullBox("stsd", e);
                return n.entry_count = 1, n.entries = [], n.entries.push(E(t, n)), n;
            }

            function E(t, e) {
                switch (t.codec) {
                    case "AVC1":
                        return t.configName = "avcC", t.compressorname = "AVC Coding", T(t, e);
                    case "AAC":
                        return F(t, e);
                    case "MP3":
                        return C(t, e);
                    default:
                        u.default.error("Unsupported codec: ", t.codec);
                }
            }

            function T(t, e) {
                var n = a.default.createBox("avc1", e, -1);
                n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.pre_defined1 = 0, n.reserved2 = 0, n.pre_defined2 = [0, 0, 0], n.width = t.width, n.height = t.height, n.horizresolution = 72, n.vertresolution = 72, n.reserved3 = 0, n.frame_count = 1, n.compressorname = [t.compressorname.length];
                for (var r = 0; r < 31; r++) {
                    n.compressorname[r + 1] = r < t.compressorname.length ? 127 & t.compressorname.charCodeAt(r) : 0;
                }return n.depth = 24, n.pre_defined3 = 65535, n.config = k(t), n;
            }

            function k(t) {
                if (!t.codecData) return void u.default.error("No codec data specified!");
                var e = t.codecData.byteLength + 8,
                    n = new Uint8Array(e),
                    r = 0;
                n[r++] = (4278190080 & e) >> 24, n[r++] = (16711680 & e) >> 16, n[r++] = (65280 & e) >> 8, n[r++] = 255 & e;
                for (var i = 0; i < t.configName.length; i++) {
                    n[r++] = 127 & t.configName.charCodeAt(i);
                }return n.set(t.codecData, r), n;
            }

            function C(t, e) {
                var n = a.default.createBox(".mp3", e, -1);
                n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.reserved2 = [0, 0], n.channelcount = t.audioChannels, n.samplesize = 16, n.pre_defined = 0, n.reserved_3 = 0, n.samplerate = t.samplingRate << 16, n.entry_count = 1, n.entries = [];
                var r = a.default.createBox("btrt", n, -1);
                return r.bufferSizeDB = 4294967295, r.maxBitrate = t.bitrate, r.avgBitrate = t.bitrate, n.entries.push(r), n;
            }

            function F(t, e) {
                var n = a.default.createBox("mp4a", e, -1);
                return n.reserved1 = [0, 0, 0, 0, 0, 0], n.data_reference_index = 1, n.reserved2 = [0, 0], n.channelcount = t.audioChannels, n.samplesize = 16, n.pre_defined = 0, n.reserved_3 = 0, n.samplerate = t.samplingRate << 16, n.esds = "AAC" == t.codec ? M(t) : B(t), n;
            }

            function B(t) {
                var e = new Uint8Array(35),
                    n = 0;
                return e[n++] = 0, e[n++] = 0, e[n++] = 0, e[n++] = 35, e.set([101, 115, 100, 115], n), n += 4, e.set([0, 0, 0, 0], n), n += 4, e[n++] = 3, e[n++] = 21, e[n++] = (65280 & t.id) >> 8, e[n++] = 255 & t.id, e[n++] = 0, e[n++] = 4, e[n++] = 13, e[n++] = 107, e[n] = 20, e[n] |= 0, e[n++] |= 1, e[n++] = 255, e[n++] = 255, e[n++] = 255, e[n++] = (4278190080 & t.bitrate) >> 24, e[n++] = (16711680 & t.bitrate) >> 16, e[n++] = (65280 & t.bitrate) >> 8, e[n++] = 255 & t.bitrate, e[n++] = (4278190080 & t.bitrate) >> 24, e[n++] = (16711680 & t.bitrate) >> 16, e[n++] = (65280 & t.bitrate) >> 8, e[n++] = 255 & t.bitrate, e[n++] = 6, e[n++] = 1, e[n] = 2, e;
            }

            function M(t) {
                var e = 37 + t.codecData.byteLength,
                    n = new Uint8Array(e),
                    r = 0;
                return n[r++] = (4278190080 & e) >> 24, n[r++] = (16711680 & e) >> 16, n[r++] = (65280 & e) >> 8, n[r++] = 255 & e, n.set([101, 115, 100, 115], r), r += 4, n.set([0, 0, 0, 0], r), r += 4, n[r++] = 3, n[r++] = 23 + t.codecData.byteLength, n[r++] = (65280 & t.id) >> 8, n[r++] = 255 & t.id, n[r++] = 0, n[r++] = 4, n[r++] = 15 + t.codecData.byteLength, n[r++] = 64, n[r] = 20, n[r] |= 0, n[r++] |= 1, n[r++] = 255, n[r++] = 255, n[r++] = 255, n.set([0, 0, 0, 0, 0, 0, 0, 0], r), r += 8, n[r++] = 5, n[r++] = t.codecData.byteLength, n.set(t.codecData, r), r += t.codecData.byteLength, n[r++] = 6, n[r++] = 1, n[r] = 2, n;
            }
            var P = [],
                I = 1;
            this.init = function () {
                P = [], I = 1;
            }, this.addTrack = function (e, n) {
                var r = {
                    id: I,
                    type: e,
                    curSeqNumber: 0,
                    lastSampleDuration: 0
                };
                return n && ("video" == e && (r.width = "width" in n ? n.width : 0, r.height = "height" in n ? n.height : 0), t(r, n), r.timescale = "timescale" in n ? n.timescale : 1e3), P.push(r), I++, r;
            }, this.setTrackParams = function (e, n) {
                var i = r(e);
                return i && ("width" in n && (i.width = n.width), "height" in n && (i.height = n.height), t(i, n), "sequenceNumber" in n && (i.curSeqNumber = n.sequenceNumber), u.default.debug("setTrackParams", e, n)), i;
            }, this.setBaseSample = function (t, e, n, i) {
                var o = r(t);
                o ? (u.default.debug("[BoxComposer] setBaseSample:", o.type, n, i), o.lastSample = {
                    data: e,
                    ts: n,
                    rawts: n,
                    altTs: Math.round(o.samplingRate / o.timescale * n),
                    offset: i,
                    sap: !0,
                    altDur: o.sampleDuration
                }) : u.default.error("[BoxComposer] setBaseSample: track " + t + " not found!!!");
            }, this.initSegment = function () {
                var t = a.default.createFile();
                return c(t), l(t), t.write();
            }, this.mediaSegment = function (t, i, o) {
                var s = void 0,
                    u = a.default.createFile(),
                    c = r(t),
                    l = [],
                    p = [];
                if (c) {
                    f(u);
                    var v = 0,
                        m = [];
                    for (v = 0; v < i.length; v++) {
                        var g = i[v],
                            b = n(c, g.sap, g.data, g.ts, g.offset);
                        void 0 !== b && (m.push(b), l.push(b.ts), p.push(b.sap));
                    }
                    if (o && void 0 !== c.lastSample && (c.lastSample.duration = c.lastSampleDuration, m.push(c.lastSample), l.push(m[m.length - 1].ts), p.push(m[m.length - 1].sap), c.lastSample = void 0), m.length > 0) {
                        var _ = h(u, c, m),
                            A = d(u, c, m);
                        a.default.createBox("mdat", u).data = e(m, _.references[0].referenced_size), _.references[0].referenced_size += 8 + A.getLength(), s = {
                            ts: l,
                            sap: p,
                            sn: c ? c.curSeqNumber - 1 : void 0,
                            data: u.write()
                        };
                    }
                }
                return s;
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(136),
            a = r(o),
            s = n(11),
            u = r(s);
        e.default = i;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i(t, e, n, r, i, o, s, c, l) {
            function v() {
                return U + 1;
            }

            function m(t) {
                R = t, N = R;
            }

            function g() {
                U = 0;
                var t = 0,
                    e = {};
                for (t = 1; t < j.length; t++) {
                    var n = j[t].ts - j[t - 1].ts;
                    e[n] = e[n] > 0 ? e[n] + 1 : 1;
                }
                for (t in e) {
                    if (e[t] > 0) {
                        var r = parseInt(t);
                        r > 0 && (U = r);
                    }
                }f.default.debug("Max sample duration calculated: ", U);
            }

            function b() {
                Q = void 0, Y = void 0, H = void 0, G = void 0;
            }

            function _() {
                for (var t = 0; t < j.length; t++) {
                    var e = j[t];
                    E(e.sap, e.data, e.ts, e.offset);
                }
                j = [];
            }

            function A(t) {
                f.default.debug("flushAll", t);
                var e = 0,
                    n = [];
                for (e = 0; e < Z.length; e++) {
                    (void 0 === t || Z[e].ts < t) && n.push(Z[e]);
                }for (Z = [], e = 0; e < j.length; e++) {
                    (void 0 === t || j[e].ts < t) && n.push(j[e]);
                }if (j = [], W) {
                    var r = n.length;
                    for (e = 0; e < r; e++) {
                        y(n[e], t);
                    }y(null, t);
                }
                L.filterOut(t);
            }

            function y(t, e) {
                var n = t ? I.mediaSegment(M, [t]) : I.mediaSegment(M, [], !0);
                n && (void 0 == e || n.ts[0] < e) && (L.pushSegment(n.data, n.ts[0]), C(n.ts[0], n.sn, n.sap[0]));
            }

            function w(t, e) {
                var n = !1;
                if (p.ABRUPT == K.mode) n = !0;else if (K.newSapTimes.length > 0) if (z) e && t >= K.newSapTimes[0] && (n = !0);else if (t >= K.newSapTimes[0] + N * r / 1e3 * 2) f.default.debug("Cancel current stream, because current timestamp is twice ahead possible buffer of new stream", t, K.newSapTimes[0]), n = !0;else for (var i = K.newSapTimes.length - 1; i >= 0; i--) {
                    if (Math.abs(t - K.newSapTimes[i]) < v()) {
                        f.default.debug("Cancel current stream. Timestamp " + t + " is near new stream key frame " + K.newSapTimes[i]), n = !0;
                        break;
                    }
                    if (t > K.newSapTimes[i]) break;
                }
                return n;
            }

            function S(t, e) {
                var n = !1,
                    i = N * r / 1e3,
                    o = K.curSapTimes.length,
                    a = K.newSapTimes.length;
                if (z && p.ABRUPT != K.mode) {
                    if (o > 0 && t >= K.startupBuffer[0].ts + i) for (var s = 0, u = 0; u < o; u++) {
                        if (!(K.curSapTimes[u] < K.newSapTimes[s])) {
                            for (var c = s; c < a && (s = c, !(K.newSapTimes[c] > K.curSapTimes[u])); c++) {
                                K.newSapTimes[c] == K.curSapTimes[u] && (f.default.debug("Switch to new stream because of SAP alignment"), n = !0);
                            }if (n) break;
                        }
                    }!n && o >= 1 && a >= 2 && K.newSapTimes[a - 1] > K.curSapTimes[0] && (f.default.debug("Switch to new stream SAP alignment does not work!"), n = !0);
                } else if (t >= K.startupBuffer[0].ts + 2 * i && t >= K.curStreamLastBufferedTs) f.default.debug("Switch to new stream because transition buffer is twice filled"), n = !0;else if (t >= K.startupBuffer[0].ts + i) if (K.curStreamCancelled && t >= K.curStreamLastBufferedTs) f.default.debug("Switch to new stream because buffer is filled and current stream is cancelled"), n = !0;else for (var l = K.newSapTimes.length - 1; l >= 0; l--) {
                    if (Math.abs(K.curStreamLastBufferedTs - K.newSapTimes[l]) < v()) {
                        f.default.debug("Switch to new stream, because new key frame " + K.newSapTimes[l] + " is near to current latest timestamp " + K.curStreamLastBufferedTs), n = !0;
                        break;
                    }
                    if (K.curStreamLastBufferedTs > K.newSapTimes[l]) break;
                }
                return n;
            }

            function x(t) {
                j.length >= 2 && void 0 !== et && void 0 !== M && (O = d.BUFFER, et(t, j[0].ts / r));
            }

            function E(t, e, n, r) {
                W ? k(t, e, n, r) : t && T(e, n, r);
            }

            function T(t, e, n) {
                I.setBaseSample(M, t, e, n), f.default.debug("process first frame", Q, Y, e), Q = void 0, H = void 0, Y = e, W = !0;
            }

            function k(t, e, n, i) {
                var o = void 0;
                if (X) {
                    if (F(Z, e, n, i, t), Z[Z.length - 1].ts - Z[0].ts >= N * r / 1e3) {
                        var a = Z.splice(0, 1);
                        o = {
                            data: a[0].data,
                            ts: a[0].ts,
                            offset: a[0].offset,
                            sap: a[0].sap
                        };
                    }
                } else o = {
                    data: e,
                    ts: n,
                    offset: i,
                    sap: t
                };
                o && y(o), Y = n;
            }

            function C(t, e, n) {
                Q = t, q = e, n && (H = t);
            }

            function F(t, e, n, r, i) {
                t.push({
                    data: e,
                    ts: n,
                    offset: r,
                    sap: i
                });
            }
            var B = t % parseInt("F0", 16),
                M = void 0,
                P = "vp8" == n || "vp9" == n ? "webm" : "mp4",
                I = "webm" == P ? new u.default() : new a.default(),
                L = void 0,
                O = d.OPEN,
                R = s.buffering,
                D = R >= 1e3 ? .2 : R / 5e3,
                N = s.buffering,
                j = [],
                U = void 0,
                V = void 0,
                W = !1,
                z = !!s.sapAlignment,
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
                rt = void 0;
            l.add(B, e, r), this.attachToMSE = function () {
                L = c.createSourceBuffer(e, n, i);
            }, this.id = function () {
                return B;
            }, this.inTransition = function (t) {
                return void 0 !== t && (J = t, K = {}), J;
            }, this.setTransitionParams = function (t) {
                K = t, K.container = "vp8" == K.codec || "vp9" == K.codec ? "webm" : "mp4";
            }, this.isSupported = function () {
                var t = c.isCodecSupported(e, n);
                return t || f.default.error(e + " codec is not supported: ", n), t;
            }, this.isTransitionSupported = function () {
                var t = !1;
                return K && K.container == P && (t = c.isCodecSupported(e, K.codec)), t || f.default.error(e + " transition is not supported: ", n), t;
            }, this.startTransition = function (t) {
                K.mode = void 0 !== t ? t : p.SMOOTH, K.startupBuffer = [], K.curStreamCancelled = !1, K.newSapTimes = [], K.curSapTimes = [], X = !0, l.add(K.id, e, r);
            }, this.getStreamName = function () {
                return o;
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
                return d.CLOSED != O;
            }, this.isOpen = function () {
                return d.OPEN == O;
            }, this.isBuffering = function () {
                return d.BUFFER == O;
            }, this.sapOffset = function () {
                var t = 4e3 * (Y - H) / r;
                return isNaN(t) ? 0 : t;
            }, this.reset = function () {
                f.default.debug("Reset track " + o), O = d.OPEN, L.removeAll(), I.init(), M = void 0, j = [], Z = [], U = void 0, W = !1, V = void 0, J = void 0, l.remove(B), X && (B = K.id, s = K.streamOptions, o = K.name), l.add(B, e, r), X = !1, K = {}, $ = void 0, b(), m(s.buffering ? s.buffering : 1e3);
            }, this.close = function () {
                O = d.CLOSED, L.closed = !0, I = void 0, j = [], l.remove(B), void 0 !== K.id && l.remove(K.id);
            }, this.backup = function () {
                L.closed = !0, $ = L.getSegments();
            }, this.recover = function () {}, this.isRecoverable = function () {
                return L.isStartingUp();
            }, this.flush = function () {
                A();
            }, this.buffer = function (t) {
                t && m(t), O = d.BUFFER, f.default.debug("buffering...");
            }, this.activate = function () {
                d.BUFFER === O && (_(), O = d.ACTIVE, tt());
            }, this.hasLowBuffer = function (t) {
                if (d.ACTIVE == O) {
                    var n = Y ? Y / r - t : 0;
                    if (h.default.display(e + "-buffer", n), n < D) return f.default.debug(e + "LOW BUFFER ", t, Y), l.reportLowBuffer(B), !0;
                    l.reportBufLevel(B, n);
                }
            }, this.updateBufferedState = function (t, n) {
                if (d.BUFFER == O) {
                    var i = G ? G / r - n : 0;
                    h.default.display(e + "-buffer", i);
                    var o = G ? G / r - t : 0;
                    f.default.debug("[Track] updateBufferedState: " + e + ", buf lvl " + o + ", real buf lvl " + i), o < D && (f.default.debug("[Track] updateBufferedState: low buffer"), l.reportLowBuffer(B)), l.reportBufLevel(B, o);
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
                var i = {
                    timescale: r
                };
                "mp4" == P && (i.codecData = t), i.codec = n.toUpperCase(), "video" == e && (i.width = s.width, i.height = s.height), M = I.addTrack(e, i).id, L.pushInit(I.initSegment()), f.default.debug(e + " init segment pushed");
            }, this.initTransition = function (t) {
                var n = {
                    timescale: r
                };
                "webm" == K.container ? (K.composer = new u.default(), n.codec = K.codec.toUpperCase()) : (K.composer = new a.default(), n.codecData = t), "video" == e && (n.width = K.streamOptions.width, n.height = K.streamOptions.height), K.cTrackId = K.composer.addTrack(e, n).id, K.initSegment = K.composer.initSegment(), f.default.debug(e + " transit stream init segment pushed");
            }, this.processFrame = function (t, n, i, o) {
                if (G = i, X) {
                    if (K.curStreamCancelled) return;
                    if (f.default.debug("curre ", i, o, t), t && K.curSapTimes.push(i), K.curStreamLastBufferedTs = i, w(i, t)) return f.default.debug("Cancel from processFrame", K.curStreamLastBufferedTs, t), nt(this), K.curStreamCancelled = !0, void F(j, n, i, o, t);
                }
                switch (O) {
                    case d.OPEN:
                        F(j, n, i, o, t), x(this);
                        break;
                    case d.BUFFER:
                        var a = !1;
                        F(j, n, i, o, t);
                        var s = j.length;
                        if (void 0 === U) {
                            if (void 0 !== V && s > 3) {
                                var u = j[s - 1];
                                if (u.ts >= V + R * r / 1e3) {
                                    f.default.debug(e, " finished buffering, have ", s, " samples"), g(), c.startLogging(L.stream_id), W = !1;
                                    var l = 0;
                                    for (l = 0; l < s && !(j[l].ts >= V && j[l].sap); l++) {}
                                    f.default.debug("BDT ", V), f.default.debug("1 ts last ts", j[0].ts, j[0].sap, j[s - 1].ts), f.default.debug("buf size ", s, l);
                                    for (var h = l; h < s; h++) {
                                        var p = j[h];
                                        E(p.sap, p.data, p.ts, p.offset);
                                    }
                                    f.default.debug("sapSet ", W), j = [], a = !0;
                                }
                            }
                        } else j[s - 1].ts - j[0].ts >= R * r / 1e3 && (_(), a = !0);
                        a && (O = d.ACTIVE, tt(), f.default.debug("playback"));
                        break;
                    case d.ACTIVE:
                        E(t, n, i, o);
                }
            }, this.processTransitionFrame = function (t, e, i, a) {
                if (t) K.newSapTimes.push(i);else if (0 == K.newSapTimes.length) return void f.default.debug("throwing useless frame ", i, a);
                f.default.debug("trans ", i, a, t);
                var u = K.startupBuffer.length;
                if (u > 0) {
                    var h = K.startupBuffer[u - 1],
                        p = i - h.ts;
                    p < 0 ? a >= -1 * p ? (a += p, p = 0) : p = track.lastSampleDuration : p > 2 * r && (p = track.lastSampleDuration), i = h.ts + p;
                }
                if (F(K.startupBuffer, e, i, a, t), S(i, t)) {
                    K.curStreamCancelled || (f.default.debug("Cancel from transit"), nt(this), K.curStreamCancelled = !0);
                    var v = Y;
                    K.curStreamLastBufferedTs && K.curStreamLastBufferedTs > v && (v = K.curStreamLastBufferedTs);
                    var m = K.newSapTimes[0],
                        g = 0,
                        b = Math.abs(K.newSapTimes[0] - v);
                    for (g = K.newSapTimes.length - 1; g >= 1; g--) {
                        var _ = Math.abs(K.newSapTimes[g] - v);
                        _ < b && (b = _, m = K.newSapTimes[g]);
                    }
                    for (A(m), g = 0; g < K.startupBuffer.length && !(K.startupBuffer[g].ts >= m); g++) {}
                    g > 0 && K.startupBuffer.splice(0, g), j = K.startupBuffer, K.startupBuffer = [], f.default.debug("buf len", j.length), f.default.debug("=====!TRANSITION EDGE!=====", Q, m, m - Q), L.pushInit(K.initSegment), K.composer.setTrackParams(K.cTrackId, {
                        sequenceNumber: q + 1
                    }), l.remove(B), B = K.id, s = K.streamOptions, o = K.name, I = K.composer, M = K.cTrackId, n = K.codec, P = K.container, r = K.timescale, W = !1, V = void 0, U = void 0, J = !1, X = !1, K = {}, Q = void 0, H = void 0, G = void 0;
                    var y = j.length;
                    y > 0 && (Y = j[y - 1].ts), rt(this), O = d.OPEN, x(this), j.splice(j.length - 1, 1), this.processFrame(t, e, i, a), c.setPositionControl();
                }
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TRANSITION_MODE = e.default = void 0;
        var o = n(88),
            a = r(o),
            s = n(134),
            u = r(s),
            c = n(11),
            f = r(c),
            l = n(61),
            h = r(l),
            d = {
            OPEN: 0,
            BUFFER: 1,
            ACTIVE: 2,
            CLOSED: 3
        },
            p = {
            ABRUPT: 0,
            SMOOTH: 1
        };
        e.default = i, e.TRANSITION_MODE = p;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
            return typeof t === "undefined" ? "undefined" : _typeof(t);
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
        },
            i = {};
        i.appendBox = function (t, e, n) {
            if (e._parent = t, n !== -1) {
                if (void 0 === n || null === n) return void t.boxes.push(e);
                var i,
                    o = -1;
                if ("number" == typeof n) o = n;else {
                    if ("string" == typeof n) i = n;else {
                        if ("object" !== (void 0 === n ? "undefined" : r(n)) || !n.type) return void t.boxes.push(e);
                        i = n.type;
                    }
                    for (var a = 0; a < t.boxes.length; a++) {
                        if (i === t.boxes[a].type) {
                            o = a + 1;
                            break;
                        }
                    }
                }
                t.boxes.splice(o, 0, e);
            }
        }, e.default = i;
    }, function (t, e, n) {
        var r = n(19);
        t.exports = function (t, e) {
            if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
            return +t;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(9),
            i = n(39),
            o = n(8);
        t.exports = [].copyWithin || function (t, e) {
            var n = r(this),
                a = o(n.length),
                s = i(t, a),
                u = i(e, a),
                c = arguments.length > 2 ? arguments[2] : void 0,
                f = Math.min((void 0 === c ? a : i(c, a)) - u, a - s),
                l = 1;
            for (u < s && s < u + f && (l = -1, u += f - 1, s += f - 1); f-- > 0;) {
                u in n ? n[s] = n[u] : delete n[s], s += l, u += l;
            }return n;
        };
    }, function (t, e, n) {
        var r = n(42);
        t.exports = function (t, e) {
            var n = [];
            return r(t, !1, n.push, n, e), n;
        };
    }, function (t, e, n) {
        var r = n(12),
            i = n(9),
            o = n(47),
            a = n(8);
        t.exports = function (t, e, n, s, u) {
            r(e);
            var c = i(t),
                f = o(c),
                l = a(c.length),
                h = u ? l - 1 : 0,
                d = u ? -1 : 1;
            if (n < 2) for (;;) {
                if (h in f) {
                    s = f[h], h += d;
                    break;
                }
                if (h += d, u ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value");
            }
            for (; u ? h >= 0 : l > h; h += d) {
                h in f && (s = e(s, f[h], h, c));
            }return s;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(12),
            i = n(4),
            o = n(54),
            a = [].slice,
            s = {},
            u = function u(t, e, n) {
            if (!(e in s)) {
                for (var r = [], i = 0; i < e; i++) {
                    r[i] = "a[" + i + "]";
                }s[e] = Function("F,a", "return new F(" + r.join(",") + ")");
            }
            return s[e](t, n);
        };
        t.exports = Function.bind || function (t) {
            var e = r(this),
                n = a.call(arguments, 1),
                s = function s() {
                var r = n.concat(a.call(arguments));
                return this instanceof s ? u(e, r.length, r) : o(e, r, t);
            };
            return i(e.prototype) && (s.prototype = e.prototype), s;
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(7).f,
            i = n(34),
            o = n(37),
            a = n(26),
            s = n(32),
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
                r = p(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n) {
                if (n.k == e) return n;
            }
        };
        t.exports = {
            getConstructor: function getConstructor(t, e, n, f) {
                var l = t(function (t, r) {
                    s(t, l, e, "_i"), t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != r && c(r, n, t[f], t);
                });
                return o(l.prototype, {
                    clear: function clear() {
                        for (var t = this, e = t._i, n = t._f; n; n = n.n) {
                            n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                        }t._f = t._l = void 0, t[v] = 0;
                    },
                    delete: function _delete(t) {
                        var e = this,
                            n = m(e, t);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete e._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), e._f == n && (e._f = r), e._l == n && (e._l = i), e[v]--;
                        }
                        return !!n;
                    },
                    forEach: function forEach(t) {
                        s(this, l, "forEach");
                        for (var e, n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;) {
                            for (n(e.v, e.k, this); e && e.r;) {
                                e = e.p;
                            }
                        }
                    },
                    has: function has(t) {
                        return !!m(this, t);
                    }
                }), d && r(l.prototype, "size", {
                    get: function get() {
                        return u(this[v]);
                    }
                }), l;
            },
            def: function def(t, e, n) {
                var r,
                    i,
                    o = m(t, e);
                return o ? o.v = n : (t._l = o = {
                    i: i = p(e, !0),
                    k: e,
                    v: n,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = o), r && (r.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t;
            },
            getEntry: m,
            setStrong: function setStrong(t, e, n) {
                f(t, e, function (t, e) {
                    this._t = t, this._k = e, this._l = void 0;
                }, function () {
                    for (var t = this, e = t._k, n = t._l; n && n.r;) {
                        n = n.p;
                    }return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? l(0, n.k) : "values" == e ? l(0, n.v) : l(0, [n.k, n.v]) : (t._t = void 0, l(1));
                }, n ? "entries" : "values", !n, !0), h(e);
            }
        };
    }, function (t, e, n) {
        var r = n(46),
            i = n(93);
        t.exports = function (t) {
            return function () {
                if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                return i(this);
            };
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(37),
            i = n(29).getWeak,
            o = n(1),
            a = n(4),
            s = n(32),
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
        };
        v.prototype = {
            get: function get(t) {
                var e = m(this, t);
                if (e) return e[1];
            },
            has: function has(t) {
                return !!m(this, t);
            },
            set: function set(t, e) {
                var n = m(this, t);
                n ? n[1] = e : this.a.push([t, e]);
            },
            delete: function _delete(t) {
                var e = h(this.a, function (e) {
                    return e[0] === t;
                });
                return ~e && this.a.splice(e, 1), !!~e;
            }
        }, t.exports = {
            getConstructor: function getConstructor(t, e, n, o) {
                var c = t(function (t, r) {
                    s(t, c, e, "_i"), t._i = d++, t._l = void 0, void 0 != r && u(r, n, t[o], t);
                });
                return r(c.prototype, {
                    delete: function _delete(t) {
                        if (!a(t)) return !1;
                        var e = i(t);
                        return e === !0 ? p(this).delete(t) : e && f(e, this._i) && delete e[this._i];
                    },
                    has: function has(t) {
                        if (!a(t)) return !1;
                        var e = i(t);
                        return e === !0 ? p(this).has(t) : e && f(e, this._i);
                    }
                }), c;
            },
            def: function def(t, e, n) {
                var r = i(o(e), !0);
                return r === !0 ? p(t).set(e, n) : r[t._i] = n, t;
            },
            ufstore: p
        };
    }, function (t, e, n) {
        t.exports = !n(6) && !n(3)(function () {
            return 7 != Object.defineProperty(n(64)("div"), "a", {
                get: function get() {
                    return 7;
                }
            }).a;
        });
    }, function (t, e, n) {
        var r = n(4),
            i = Math.floor;
        t.exports = function (t) {
            return !r(t) && isFinite(t) && i(t) === t;
        };
    }, function (t, e, n) {
        var r = n(1);
        t.exports = function (t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e;
            }
        };
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                value: e,
                done: !!t
            };
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
            a = n(9),
            s = n(47),
            u = Object.assign;
        t.exports = !u || n(3)(function () {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
                e[t] = t;
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
        }) ? function (t, e) {
            for (var n = a(t), u = arguments.length, c = 1, f = i.f, l = o.f; u > c;) {
                for (var h, d = s(arguments[c++]), p = f ? r(d).concat(f(d)) : r(d), v = p.length, m = 0; v > m;) {
                    l.call(d, h = p[m++]) && (n[h] = d[h]);
                }
            }return n;
        } : u;
    }, function (t, e, n) {
        var r = n(7),
            i = n(1),
            o = n(36);
        t.exports = n(6) ? Object.defineProperties : function (t, e) {
            i(t);
            for (var n, a = o(e), s = a.length, u = 0; s > u;) {
                r.f(t, n = a[u++], e[n]);
            }return t;
        };
    }, function (t, e, n) {
        var r = n(16),
            i = n(35).f,
            o = {}.toString,
            a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function s(t) {
            try {
                return i(t);
            } catch (t) {
                return a.slice();
            }
        };
        t.exports.f = function (t) {
            return a && "[object Window]" == o.call(t) ? s(t) : i(r(t));
        };
    }, function (t, e, n) {
        var r = n(10),
            i = n(16),
            o = n(50)(!1),
            a = n(77)("IE_PROTO");
        t.exports = function (t, e) {
            var n,
                s = i(t),
                u = 0,
                c = [];
            for (n in s) {
                n != a && r(s, n) && c.push(n);
            }for (; e.length > u;) {
                r(s, n = e[u++]) && (~o(c, n) || c.push(n));
            }return c;
        };
    }, function (t, e, n) {
        var r = n(36),
            i = n(16),
            o = n(48).f;
        t.exports = function (t) {
            return function (e) {
                for (var n, a = i(e), s = r(a), u = s.length, c = 0, f = []; u > c;) {
                    o.call(a, n = s[c++]) && f.push(t ? [n, a[n]] : a[n]);
                }return f;
            };
        };
    }, function (t, e, n) {
        var r = n(35),
            i = n(58),
            o = n(1),
            a = n(2).Reflect;
        t.exports = a && a.ownKeys || function (t) {
            var e = r.f(o(t)),
                n = i.f;
            return n ? e.concat(n(t)) : e;
        };
    }, function (t, e, n) {
        var r = n(2).parseFloat,
            i = n(45).trim;
        t.exports = 1 / r(n(82) + "-0") != -(1 / 0) ? function (t) {
            var e = i(String(t), 3),
                n = r(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n;
        } : r;
    }, function (t, e, n) {
        var r = n(2).parseInt,
            i = n(45).trim,
            o = n(82),
            a = /^[\-+]?0[xX]/;
        t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function (t, e) {
            var n = i(String(t), 3);
            return r(n, e >>> 0 || (a.test(n) ? 16 : 10));
        } : r;
    }, function (t, e) {
        t.exports = Object.is || function (t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
    }, function (t, e, n) {
        var r = n(8),
            i = n(81),
            o = n(20);
        t.exports = function (t, e, n, a) {
            var s = String(o(t)),
                u = s.length,
                c = void 0 === n ? " " : String(n),
                f = r(e);
            if (f <= u || "" == c) return s;
            var l = f - u,
                h = i.call(c, Math.ceil(l / c.length));
            return h.length > l && (h = h.slice(0, l)), a ? h + s : s + h;
        };
    }, function (t, e, n) {
        e.f = n(5);
    }, function (t, e, n) {
        "use strict";

        var r = n(96);
        t.exports = n(51)("Map", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function get(t) {
                var e = r.getEntry(this, t);
                return e && e.v;
            },
            set: function set(t, e) {
                return r.def(this, 0 === t ? 0 : t, e);
            }
        }, r, !0);
    }, function (t, e, n) {
        n(6) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(53)
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(96);
        t.exports = n(51)("Set", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            add: function add(t) {
                return r.def(this, t = 0 === t ? 0 : t, t);
            }
        }, r);
    }, function (t, e, n) {
        "use strict";

        var r,
            i = n(22)(0),
            o = n(14),
            a = n(29),
            s = n(104),
            u = n(98),
            c = n(4),
            f = a.getWeak,
            l = Object.isExtensible,
            h = u.ufstore,
            d = {},
            p = function p(t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        },
            v = {
            get: function get(t) {
                if (c(t)) {
                    var e = f(t);
                    return e === !0 ? h(this).get(t) : e ? e[this._i] : void 0;
                }
            },
            set: function set(t, e) {
                return u.def(this, t, e);
            }
        },
            m = t.exports = n(51)("WeakMap", p, v, u, !0, !0);
        7 != new m().set((Object.freeze || Object)(d), 7).get(d) && (r = u.getConstructor(p), s(r.prototype, v), a.NEED = !0, i(["delete", "has", "get", "set"], function (t) {
            var e = m.prototype,
                n = e[t];
            o(e, t, function (e, i) {
                if (c(e) && !l(e)) {
                    this._f || (this._f = new r());
                    var o = this._f[t](e, i);
                    return "set" == t ? this : o;
                }
                return n.call(this, e, i);
            });
        }));
    }, function (t, e) {
        var n;
        n = function () {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
            "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
        }
        t.exports = n;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = n(125),
            o = r(i),
            a = n(130),
            s = r(a),
            u = n(11),
            c = r(u),
            f = n(61),
            l = r(f);
        t.exports = {
            init: function init(t) {
                var e = Object.assign({}, {
                    log_level: "error",
                    log_div: !1
                }, t);
                c.default.setLevel(e.log_level), c.default.setDiv(e.log_div), c.default.debug("SLDP Player v1.4.1"), l.default.init(e.inform_ids);
                var n = new o.default();
                return n.initialize(t), n;
            },
            nimbleJS: s.default,
            VERSION: "v1.4.1",
            COMMITHASH: "5ec7b0dc97dcea941468fad8128dc6483b1137f8"
        };
    }, function (t, e, n) {
        "use strict";

        (function (t) {
            function e(t, e, n) {
                t[e] || Object[r](t, e, {
                    writable: !0,
                    configurable: !0,
                    value: n
                });
            }
            //===============================================//
            if (e._babelPolyfill) return;
            //===============================================//    

            if (n(323), n(325), n(143), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
            t._babelPolyfill = !0;
            var r = "defineProperty";
            e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
                [][t] && e(Array, t, Function.call.bind([][t]));
            });
        }).call(e, n(119));
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(123),
            s = r(a),
            u = n(89),
            c = r(u),
            f = n(11),
            l = r(f),
            h = function () {
            function t(e, n) {
                i(this, t), this._evalHandler = function () {
                    if (!this.isSwitchInProgressCallback()) {
                        var t = this.abrStrategy.calculateCurStreamMetric("latestLowBufferCount"),
                            e = this.abrStrategy.calculateCurVideoStreamMetric("latestBufLevel");
                        if (this.playbackStalled(e, t)) l.default.debug("[ABR controller] playback stalled!!!"), this.switchStreamCallback(this.streamsData.ordered[0].idx, c.default.ABRUPT);else if (this.phaseCnt >= 3) {
                            var n = this.abrStrategy.calculateCurStreamMetric("latestBandwidth");
                            n += this.abrStrategy.calculateProbeStreamMetric("latestBandwidth");
                            var r = this.abrStrategy.calculateCurStreamMetric("latestRate"),
                                i = this.abrStrategy.calculateCurStreamMetric("avgBandwidth");
                            if (l.default.debug("[ABR controller] evalHandler: buf lvl " + e + ", min buf lvl " + this.stepDownBufferLevel + ", bw " + n + ", avg bw " + i + ", rate " + r), e < this.stepDownBufferLevel) {
                                var o = !0;
                                if (this.abrStrategy.isRunning() && (l.default.debug("[ABR controller] cancel strategy"), this.abrStrategy.cancel(), r < n && (o = !1)), o) {
                                    var a = this.abrStrategy.findRelevantStream(n, r);
                                    l.default.debug("[ABR controller] lowering to " + this.streamsData.ordered[a].rendition + "p"), this.switchStreamCallback(this.streamsData.ordered[a].idx);
                                }
                            } else !this.abrStrategy.isRunning() && n > 0 && 0 == t && e >= this.bufferingTime / 2e3 && this.abrStrategy.run();
                        } else this.abrStrategy.isRunning() || this.phaseCnt++;
                    }
                }.bind(this), this._onStrategyResult = function (t) {
                    void 0 !== t && this.switchStreamCallback(t), this.phaseCnt = 0;
                }.bind(this), this.streamsData = [], this.bufferingTime = n, this.stepDownBufferLevel = this.bufferingTime >= 1e3 ? this.bufferingTime / 2e3 : this.bufferingTime / 1600, this.abrStrategy = new s.default(e, n);
            }
            return o(t, [{
                key: "start",
                value: function value() {
                    this.streamsData = this.getStreamsCallback(), this.curStream = this.getCurStreamCallback(), this.streamsData.ordered.length > 1 && (l.default.debug("[ABR controller] start!"), this.phaseCnt = 0, this._clearEvalTimer(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.abrStrategy.init(this.streamsData, this.curStream), this.abrStrategy.callbacks = {
                        onStartProbe: this.probeStartCallback,
                        onCancelProbe: this.probeCancelCallback,
                        onResult: this._onStrategyResult
                    });
                }
            }, {
                key: "restart",
                value: function value() {
                    this.start();
                }
            }, {
                key: "playbackStalled",
                value: function value(t, e) {
                    return e > 0 && l.default.debug("[ABR Controller] low buffer count: ", e), e >= 10 || t + 2 <= 0;
                }
            }, {
                key: "scheduleInstantEvaluation",
                value: function value() {
                    this._clearEvalTimer(), this._evalHandler(), this.evalTimer = setInterval(this._evalHandler, 1e3);
                }
            }, {
                key: "stop",
                value: function value() {
                    l.default.debug("[ABR controller] stop!"), this.streamsData = [], this.curStream = void 0, this.phaseCnt = 0, this._clearEvalTimer(), this.abrStrategy.clear();
                }
            }, {
                key: "_clearEvalTimer",
                value: function value() {
                    void 0 !== this.evalTimer && (clearInterval(this.evalTimer), this.evalTimer = void 0);
                }
            }, {
                key: "isProbing",
                value: function value(t) {
                    var e = !1,
                        n = this.abrStrategy.getProber();
                    return n && n.id() === t && (e = n.isEnabled()), e;
                }
            }, {
                key: "onProbeInitReceived",
                value: function value() {
                    this.abrStrategy.getProber().receiveInit();
                }
            }, {
                key: "onProbeDataReceived",
                value: function value(t, e, n) {
                    this.abrStrategy.getProber().receiveFrame(t, e, n);
                }
            }, {
                key: "callbacks",
                set: function set(t) {
                    this.switchStreamCallback = t.switchStream, this.isSwitchInProgressCallback = t.isInProgress, this.getStreamsCallback = t.getStreams, this.getCurStreamCallback = t.getCurStream, this.probeStartCallback = t.probeStream, this.probeCancelCallback = t.cancelStream;
                }
            }]), t;
        }();
        e.default = h;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(131),
            s = r(a),
            u = n(11),
            c = r(u),
            f = 3e3,
            l = function () {
            function t(e, n) {
                i(this, t), this.onProbeFinished = function () {
                    this.runCurStreamMetricMethod("stopCustom");
                    var t = this.calculateCurStreamMetric("customRangeBandwidth");
                    c.default.debug("[Prober] onProbeFinished: streams bandwidth " + t);
                    var e = this.metricsManager.getMetrics(this.prober.id()),
                        n = Math.max(e.avgBandwidth(), e.latestBandwidth()),
                        r = e.avgRate();
                    t += n, c.default.debug("[Prober] onProbeFinished: prev bw " + this.curBandwidth + " cur bw " + t);
                    c.default.debug("[Prober] onProbeFinished: prober bw " + n + ", prober rate " + r);
                    var i = this.prober.period;
                    this.destroyProber(), this.running = !1;
                    var o = this.calculateCurVideoStreamMetric("latestBufLevel"),
                        a = 1e3 * o >= this.enoughBufferToContinue,
                        s = this.calculateCurStreamMetric("avgRate"),
                        u = s / this.curStream.bandwidth;
                    if (a && i >= f) {
                        this.curBandwidth = t;
                        for (var l = this.curStreamIdx + 1; l < this.streamsData.ordered.length; l++) {
                            var h = this.streamsData.ordered[l],
                                d = h.bandwidth * u;
                            if (this.curBandwidth < 1.2 * d) break;
                            this.curStreamIdx++;
                        }
                        this.doRun();
                    } else a ? (t < this.curBandwidth && (t /= u), this.curBandwidth = Math.max(t, this.curBandwidth), this.doRun()) : this.onResultCallback(this.streamsData.ordered[this.curStreamIdx].idx);
                }.bind(this), this.onInitReceived = function () {
                    this.runCurStreamMetricMethod("startCustom");
                }.bind(this), this.running = !1, this.nextProberId = 0, this.metricsManager = e, this.bufferingTime = n, this.minBufferingTime = n > 1e3 ? 200 : n / 8, this.enoughBufferToContinue = n > 1e3 ? 500 : n / 2;
            }
            return o(t, [{
                key: "init",
                value: function value(t, e) {
                    this.streamsData = t, this.curStream = e;
                }
            }, {
                key: "clear",
                value: function value() {
                    this.running && (this.running = !1, this.prober.stop()), this.prober && (this.prober.destroy(), this.prober = void 0), this.streamsData = void 0, this.curStream = void 0;
                }
            }, {
                key: "run",
                value: function value() {
                    this.curBandwidth = this.calculateCurStreamMetric("avgBandwidth"), this.curStreamIdx = this.curStream.orderedIdx, this.doRun();
                }
            }, {
                key: "doRun",
                value: function value() {
                    if (c.default.debug("[ABR strategy] doRun: idx " + this.curStreamIdx + ", bw " + this.curBandwidth), this.curBandwidth > 0) if (this.nextStreamIdx = this.curStreamIdx + 1, this.nextStreamIdx < this.streamsData.ordered.length) {
                        var t = this.calculateCurStreamMetric("avgRate");
                        this.bwCorrector = t / this.curStream.bandwidth, c.default.debug("[ABR strategy] run: bwCorrector " + this.bwCorrector), c.default.debug("Bandwidth " + this.curBandwidth + ", bitrate " + t);
                        var e = this.streamsData.ordered[this.nextStreamIdx],
                            n = t,
                            r = e.bandwidth * this.bwCorrector,
                            i = 0;
                        this.curBandwidth < n + r && (i = (this.bufferingTime - this.minBufferingTime) * (n + r) / (n + r - this.curBandwidth), i = Math.round(i)), (0 == i || i > f) && (i = f);
                        var o = this.streamsData.streams[e.idx];
                        this.prober = new s.default(this.nextProberId++, o.stream, o.stream_info.vtimescale, i, this.metricsManager), this.prober.callbacks = {
                            onStartProbe: this.startProbeCallback,
                            onCancelProbe: this.cancelProbeCallback,
                            onInitReceived: this.onInitReceived,
                            onProbeFinished: this.onProbeFinished
                        }, this.running = !0, this.prober.start();
                    } else this.onResultCallback(this.streamsData.ordered[this.curStreamIdx].idx);
                }
            }, {
                key: "calculateCurVideoStreamMetric",
                value: function value(t) {
                    return this.metricsManager.getMetrics(this.curStream.vid)[t]();
                }
            }, {
                key: "calculateCurStreamMetric",
                value: function value(t) {
                    var e = this.metricsManager.getMetrics(this.curStream.vid),
                        n = e[t]();
                    if (void 0 !== this.curStream.aid) {
                        n += this.metricsManager.getMetrics(this.curStream.aid)[t]();
                    }
                    return n;
                }
            }, {
                key: "calculateProbeStreamMetric",
                value: function value(t) {
                    var e = 0;
                    if (void 0 !== this.prober) {
                        e = this.metricsManager.getMetrics(this.prober.id())[t]();
                    }
                    return e;
                }
            }, {
                key: "runCurStreamMetricMethod",
                value: function value(t) {
                    (this.metricsManager.getMetrics(this.curStream.vid)[t](), void 0 !== this.curStream.aid) && this.metricsManager.getMetrics(this.curStream.aid)[t]();
                }
            }, {
                key: "cancel",
                value: function value() {
                    this.running && (this.running = !1, this.prober.stop(), this.destroyProber());
                }
            }, {
                key: "findRelevantStream",
                value: function value(t, e) {
                    var n = 0,
                        r = e / this.curStream.bandwidth;
                    c.default.debug("[ABR Strategy] findRelevantStream: bw corrector " + r + ", cur index " + this.curStream.orderedIdx);
                    for (var i = this.curStream.orderedIdx - 1; i >= 0; i--) {
                        if (t >= 1.1 * this.streamsData.ordered[i].bandwidth * r) {
                            n = i;
                            break;
                        }
                    }return n;
                }
            }, {
                key: "getProber",
                value: function value() {
                    return this.prober;
                }
            }, {
                key: "destroyProber",
                value: function value() {
                    this.prober && (this.prober.destroy(), this.prober = void 0);
                }
            }, {
                key: "isRunning",
                value: function value() {
                    return this.running;
                }
            }, {
                key: "callbacks",
                set: function set(t) {
                    this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.onResultCallback = t.onResult;
                }
            }]), t;
        }();
        e.default = l;
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(126),
            o = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(i),
            a = "\n@font-face {\n  font-family: 'glyphs';\n  src:url(data:font/opentype;base64," + o.default + ');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="sldp-icon-"], [class*=" sldp-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'glyphs\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sldp-icon-enlarge:before {\n  content: "\\e98b";\n}\n.sldp-icon-cog:before {\n  content: "\\e994";\n}\n.sldp-icon-play:before {\n  content: "\\ea1c";\n}\n.sldp-icon-pause:before {\n  content: "\\ea1d";\n}\n.sldp-icon-volume-medium:before {\n  content: "\\ea27";\n}\n.sldp-icon-volume-mute:before {\n  content: "\\ea2a";\n}\n\n\t.sldp_player_wrp {\n\t\tbackground-color: black;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\t.sldp_cbar {\n\t\tdisplay: block;\n\t\tpadding: 5px;\n\t\tpadding-left: 5px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tbottom: 0px;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbackground-color: rgba(0,0,0,0.7);\n\t\ttransition: opacity 0.5s linear;\n\t}\n  .sldp_message {\n    position: absolute;\n    left: 20px;\n    top: 15px;\n    color: white;\n  }\n\n\t.sldp_btn\n\t{\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tcursor: pointer;\n\t\tmargin-right: 10px;\n\t\tcolor: #008ee8;\n    \tfont-size: 18px;\n\n\t\t-o-transition:.5s;\n\t\t-ms-transition:.5s;\n\t\t-moz-transition:.5s;\n\t\t-webkit-transition:.5s;\n\t\ttransition:.5s;\n\t}\n\t.sldp_btn:hover{\n\t\tcolor: #ff8814;\n\t}\n\n\t.sldp_play_pause_btn {\n\t\tfloat: left;\n\t}\n\n\t.sldp_expand_btn\n\t{\n\t\tfloat: right;\n\t\tfont-size: 16px;\n\t}\n\n\t.sldp_volume_btn\n\t{\n\t\tfloat: left;\n\t\t\n\t}\n\n\t.sldp_config_btn\n\t{\n\t\tfloat: right;\n\t}\n\t.sldp_config_btn:hover\n\t{\n\t\ttransform: rotate(-30deg);\n\t}\n\n\t.sldp_cfg_dialog\n\t{\n\t\twidth: 100px;\n\t\tbackground: black;\n\t\tposition: absolute;\n\t\tright: 25px;\n\t\tbottom: 30px;\n\t    padding: 0;\n\t    margin: 0;\n\t\tfont-family: Arial;\n\t\tfont-size: 14px;\n\t\tcolor: white;\n\t}\n\t.sldp_cfg_dialog li\n\t{\n\t\tlist-style: none;\n\t\ttext-align: center;\n\t\tline-height: 24px;\n\t\tcursor: pointer;\n\t}\n\t.sldp_cfg_dialog li:hover\n\t{\n\t\tbackground-color: grey;\n\t}\n\n\n.sldp_volume_wrp{\noverflow: hidden;\nwidth: 160px;\n}\n\n.sldp_volume_slider {\nborder-radius: 1px;\nbackground: #008ee8;\nwidth: 112px;\nheight: 3px;\nmargin-top: 9px;\nfloat: left;\n}\n\n.sldp_volume_thumb {\nbackground: #008ee8;\nwidth: 12px;\nheight: 12px;\nborder-radius: 6px;\nposition: relative;\nleft: 100px;\ntop: -4px;\ncursor: pointer;\n}\n.sldp_volume_thumb:hover{\nbackground: #ff8814;\n}\n\n.sldp_indicator{\nheight: 4px;\nbackground-color: #008ee8;\nposition: absolute;\ntop: 0;\nleft: 0;\n}\n',
            s = function t() {
            r(this, t);
            var e = document.createElement("style");
            e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a)), document.getElementsByTagName("head")[0].appendChild(e);
        };
        e.default = s;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i() {
            function t(t) {
                var e = {
                    autoplay: !0,
                    height: "auto",
                    width: "auto",
                    controls: !0,
                    buffering: A,
                    adaptive_bitrate: !0
                };
                tt = Object.assign({}, e, t), tt.autoplay = tt.autoplay || ot.isMobile();
            }

            function e() {
                at = new m.default(tt), at.onPlay = S, at.onPause = T, at.onQualityChange = C, at.qualities = [];
            }

            function n() {
                At = !0, wt || (wt = new a.default(rt, tt.buffering), i());
            }

            function r() {
                ft = void 0, lt = void 0, ht = void 0, pt = void 0, dt = void 0, vt = void 0;
            }

            function i() {
                wt.callbacks = {
                    switchStream: F,
                    isInProgress: B,
                    getStreams: P,
                    getCurStream: M,
                    probeStream: L,
                    cancelStream: I
                };
            }

            function o() {
                ot.callbacks({
                    onProgress: D,
                    onTimeUpdate: D,
                    onSourceOpen: w,
                    onCrash: j,
                    onWaitUpdate: N,
                    onPlayStarted: x,
                    onPlayFailed: E
                });
            }

            function s() {
                it.callbacks = {
                    onStatusReceived: W,
                    onInitSegmentReceived: J,
                    onDataReceived: $,
                    onConnectionClosed: V
                };
            }

            function c() {
                wt && wt.stop(), it.close(), s();
                for (var t = 0; t < et.length; t++) {
                    et[t].close();
                }et = [], v(), r();
            }

            function l() {
                ot.clear(), o(), ot.init(at.videoElement);
            }

            function d() {
                wt && wt.stop(), it.close(), at && (at.destroy(), at = void 0), v(), ot.clear();
                for (var t = 0; t < et.length; t++) {
                    et[t].close();
                }et = [], r(), tt = void 0;
            }

            function v() {
                void 0 !== bt && (clearTimeout(bt), bt = void 0);
            }

            function g() {
                y(), nt = _.SETUP;
            }

            function y() {
                var t = ct ? ct : tt.stream_url;
                it.open(t);
            }

            function w() {
                switch (b.default.debug("MSE initialized"), nt) {
                    case _.STOP:
                        at.canPlay = !0, nt = _.INIT;
                        break;
                    case _.INIT:
                        tt.autoplay || _t ? (g(), _t = !1) : at.canPlay = !0;
                        break;
                    case _.ERROR:
                        for (var t = 0; t < et.length; t++) {
                            et[t].recover();
                        }nt = _.PLAY;
                }
            }

            function S(t) {
                switch (nt) {
                    case _.INIT:
                        g();
                        break;
                    case _.RESET:
                        l(), nt = _.INIT, _t = !0;
                        break;
                    case _.NULL:
                        break;
                    default:
                        v(), At && ft && wt.start(), ot.handlePlay(t);
                }
            }

            function x() {
                at.onPlaybackStarted();
            }

            function E() {
                at.triggerPause();
            }

            function T() {
                _.SYNC < nt && (wt && wt.stop(), ot.handlePause(), tt.pause_timeout && (bt = setTimeout(k, 1e3 * tt.pause_timeout)));
            }

            function k() {
                c(), ot.resetPosition(), nt = _.RESET;
            }

            function C(t) {
                var e = !1;
                if (B()) return b.default.warn("Quality change is in progress"), e;
                if (_.SYNC < nt) {
                    if (b.default.debug("Switch quality to ", t), At = "Auto" == t) R(), wt.start();else {
                        var n = mt[t];
                        void 0 !== n && (wt && wt.stop(), F(n));
                    }
                    e = !0;
                }
                return e;
            }

            function F(t, e) {
                if (t != ht) {
                    var n = ut[t];
                    if (_.WAIT === nt) for (var r = 0; r < et.length; r++) {
                        et[r].activate();
                    }ft.inTransition(!0);
                    var i = n.stream_info;
                    ft.setTransitionParams({
                        id: gt,
                        codec: i.vcodec,
                        timescale: i.vtimescale,
                        name: n.stream,
                        streamOptions: {
                            width: i.width,
                            height: i.height,
                            bandwidth: i.bandwidth
                        }
                    }), ft.isTransitionSupported() ? (v(), b.default.debug("[Director] Change quality, send Play for " + n.stream + ", sn #" + gt), z([{
                        stream: n.stream,
                        sn: gt,
                        type: "video",
                        offset: "0"
                    }]), gt++, pt = t, ft.startTransition(e), nt = _.SYNC) : b.default.error("[Director]: Transition isn't supported to ", n);
                } else R();
            }

            function B() {
                return void 0 !== pt || void 0 !== vt;
            }

            function M() {
                var t = {};
                if (void 0 !== ht) {
                    t = {
                        vid: ft.id(),
                        idx: ht,
                        bandwidth: ut[ht].stream_info.bandwidth,
                        rendition: ut[ht].stream_info.height
                    };
                    for (var e = 0, n = 0; n < yt.length; n++) {
                        if (yt[n].idx == ht) {
                            e = n;
                            break;
                        }
                    }t.orderedIdx = e, void 0 !== dt && (t.aid = lt.id());
                }
                return t;
            }

            function P() {
                return {
                    ordered: yt,
                    streams: ut
                };
            }

            function I(t) {
                b.default.debug("Send cancel ", t.id()), Q([t.id().toString()]);
            }

            function L(t, e) {
                b.default.debug("[Director]: probe stream " + t.streamName() + ", sn: " + t.id() + ", offset: " + ft.sapOffset() + ", duration: " + e), z([{
                    stream: t.streamName(),
                    sn: t.id(),
                    type: "video",
                    offset: ft.sapOffset().toString(),
                    duration: e
                }]);
            }

            function O(t) {
                if (t.isVideo() && void 0 !== pt) {
                    ht = pt, pt = void 0;
                    R();
                    At && wt.restart();
                } else t.isAudio() && void 0 !== vt && (dt = vt, vt = void 0);
            }

            function R() {
                var t = void 0;
                if (void 0 !== ht && (t = ut[ht].stream_info.height + "p", tt.initial_resolution = t, yt.length > 1)) if (wt) {
                    if (At) {
                        var e = "Auto " + t;
                        at.quality_ar[0] = e, at.currentQuality = e;
                    } else at.quality_ar[0] = "Auto", at.currentQuality = t;
                } else at.currentQuality = t;
                return t;
            }

            function D(t) {
                if (_.PLAY == nt) for (var e = 0; e < et.length; e++) {
                    if (et[e].isActual() && et[e].hasLowBuffer(t)) {
                        et[e].buffer(), ot.wait(), nt = _.WAIT;
                        break;
                    }
                }
            }

            function N(t, e) {
                for (var n = 0; n < et.length; n++) {
                    et[n].isActual() && et[n].updateBufferedState(t, e);
                }
            }

            function j(t) {
                if (b.default.debug("[Director] _onSourceBufferCrash"), t) return d(), void (nt = _.INIT);
                var e = !0,
                    n = 0;
                for (n = 0; n < et.length; n++) {
                    if (!et[n].isRecoverable()) {
                        e = !1;
                        break;
                    }
                }if (e) {
                    for (n = 0; n < et.length; n++) {
                        et[n].backup();
                    }nt = _.ERROR;
                } else c(), _t = !0, nt = _.INIT;
                l();
            }

            function U() {
                for (var t = 0; t < et.length; t++) {
                    et[t].flush();
                }
            }

            function V() {
                switch (b.default.debug("state ", nt), wt && wt.stop(), nt) {
                    case _.WAIT:
                        ot.continue();
                    case _.SYNC:
                        U();
                    case _.PLAY:
                        y(), nt = _.STALL;
                        break;
                    case _.RESET:
                    case _.STOP:
                        break;
                    default:
                        nt = _.INIT;
                }
            }

            function W(t) {
                var e = !1,
                    n = !1;
                yt = [], wt && wt.stop();
                var r = 0,
                    i = {};
                ut = t, mt = {};
                var o = [],
                    a = void 0;
                for (r = 0; r < ut.length; r++) {
                    i[ut[r].stream] = r;
                    var s = ut[r].stream_info;
                    if (s.vtimescale && (s.vtimescale = parseInt(s.vtimescale)), s.atimescale && (s.atimescale = parseInt(s.atimescale)), s.resolution) {
                        var u = s.resolution.split("x");
                        if (s.width = parseInt(u[0]), s.height = parseInt(u[1]), ot.isCodecSupported("video", s.vcodec)) {
                            var c = u[1] + "p";
                            c === tt.initial_resolution && (a = r), mt[c] = r, s.bandwidth && (s.bandwidth = parseInt(s.bandwidth) / 1024);
                            var f = 0;
                            for (f = 0; f < yt.length && !(ut[yt[f].idx].stream_info.height > u[1]); f++) {}
                            o.splice(f, 0, c), yt.splice(f, 0, {
                                idx: r,
                                bandwidth: s.bandwidth,
                                rendition: u[1]
                            });
                        }
                    }
                }
                for (wt && o.length > 1 && o.splice(0, 0, "Auto"), b.default.debug("Player renditions:", o), b.default.debug("Ordered streams:", yt), at.qualities = o, _.STALL == nt && ot.resetPosition(), r = 0; r < et.length; r++) {
                    var l = void 0;
                    l = et[r].inTransition() ? i[et[r].getTransitionStreamName()] : i[et[r].getStreamName()], et[r].isVideo() ? (ht = l, pt = void 0, void 0 !== l && ut[l].stream_info.vcodec ? (_.STALL == nt && et[r].reset(), e = !0) : et[r].inTransition(!0)) : et[r].isAudio() ? (dt = l, vt = void 0, void 0 !== l && ut[l].stream_info.acodec ? (_.STALL == nt && et[r].reset(), n = !0) : et[r].inTransition(!0)) : b.default.error("Got track of type other than video or audio!");
                }
                if (void 0 !== a && (e || (e = G(ut[a], a)), n || (n = q(ut[a], a))), !e) for (r = 0; r < ut.length && !(e = G(ut[r], r)); r++) {}
                if (!n) for (r = 0; r < ut.length && !(n = q(ut[r], r)); r++) {}
                for (r = et.length - 1; r >= 0; r--) {
                    et[r].inTransition() && !et[r].isTransitionSupported() && (et[r].isVideo() ? ft = void 0 : lt = void 0, et[r].close(), et.splice(r, 1));
                }ot.listBuffers();
                var h = [],
                    d = "offset" in tt ? tt.offset.toString() : "0";
                for (r = 0; r < et.length; r++) {
                    et[r].inTransition() ? h.push({
                        stream: et[r].getTransitionStreamName(),
                        sn: et[r].transitionStreamId(),
                        type: et[r].type(),
                        offset: d
                    }) : et[r].isOpen() && h.push({
                        stream: et[r].getStreamName(),
                        sn: et[r].id(),
                        type: et[r].type(),
                        offset: d
                    });
                }if (R(), e || n) {
                    if (h.length > 0) {
                        z(h), nt = _.SYNC, b.default.debug("[Director] Request streams:");
                        for (var p = 0; p < h.length; p++) {
                            b.default.debug("Stream #" + p + ": " + h[p].stream + ", sn: " + h[p].sn + ", offset: " + h[p].offset);
                        }
                    }
                } else nt = _.INIT;
            }

            function z(t) {
                it.send({
                    command: "Play",
                    streams: t
                });
            }

            function Q(t) {
                it.send({
                    command: "Cancel",
                    streams: t
                });
            }

            function Y(t) {
                for (var e = void 0, n = 0; n < et.length; n++) {
                    if (t == et[n].id()) {
                        e = et[n];
                        break;
                    }
                }return e;
            }

            function H(t) {
                for (var e = void 0, n = 0; n < et.length; n++) {
                    if (et[n].inTransition() && t == et[n].transitionStreamId()) {
                        e = et[n];
                        break;
                    }
                }return e;
            }

            function G(t, e) {
                var n = !1,
                    r = t.stream,
                    i = t.stream_info;
                if (i.vcodec && i.width && i.height) {
                    var o = {
                        width: i.width,
                        height: i.height,
                        bandwidth: i.bandwidth,
                        buffering: tt.buffering
                    };
                    "key_frame_alignment" in tt && (o.sapAlignment = tt.key_frame_alignment), ft ? ft.inTransition() && (ft.setTransitionParams({
                        id: gt,
                        codec: i.vcodec,
                        timescale: i.vtimescale,
                        name: r,
                        streamOptions: o
                    }), ft.isTransitionSupported() && (gt++, pt = e, ht = void 0, ft.startTransition(), n = !0)) : (ft = new p.default(gt, "video", i.vcodec, i.vtimescale, "video_stream_id", r, o, ot, rt), ft.isSupported() ? (ft.attachToMSE(), et.push(ft), gt++, ht = e, pt = void 0, n = !0) : ft = void 0);
                } else {
                    var a = i.vcodec ? "resolution" : "video codec";
                    b.default.error("[Director] Error: no valid " + a + " specified");
                }
                return n;
            }

            function q(t, e) {
                var n = !1,
                    r = t.stream,
                    i = t.stream_info;
                if (i.acodec) {
                    var o = {
                        buffering: tt.buffering
                    };
                    lt ? lt.inTransition() && (lt.setTransitionParams({
                        id: gt,
                        codec: i.acodec,
                        timescale: i.atimescale,
                        name: r,
                        streamOptions: o
                    }), lt.isTransitionSupported() && (gt++, vt = e, dt = void 0, lt.startTransition(), n = !0)) : (lt = new p.default(gt, "audio", i.acodec, i.atimescale, "audio_stream_id", r, o, ot, rt), lt.isSupported() ? (lt.attachToMSE(), et.push(lt), gt++, dt = e, vt = void 0, n = !0) : lt = void 0);
                }
                return n;
            }

            function J(t, e) {
                if (b.default.debug("onInitSegmentReceived", t, nt), _.SYNC == nt) {
                    st = void 0;
                    var n = Y(t);
                    n && n.isActual() ? (n.initPresentation(e), n.onBaseDecodeTimeReady(X), n.onSourceReady(Z)) : (n = H(t)) && n.isActual() && (n.initTransition(e), n.onCancelStream(I), n.onTransitionCompleted(O));
                } else wt && wt.isProbing(t) && wt.onProbeInitReceived();
            }

            function K() {
                for (var t = !0, e = 0; e < et.length; e++) {
                    if (et[e].isActual() && et[e].isVideo()) {
                        t = !1;
                        break;
                    }
                }return t;
            }

            function X(t, e) {
                (!st || st > e) && (t.isVideo() || K()) && (st = e);
                for (var n = !0, r = 0; r < et.length; r++) {
                    if (et[r].isOpen() || et[r].inTransition()) {
                        n = !1;
                        break;
                    }
                }if (n) for (var i = 0; i < et.length; i++) {
                    et[i].isBuffering() && et[i].setBaseDecodeTime(st);
                }
            }

            function Z() {
                for (var t = !0, e = 0; e < et.length; e++) {
                    if (et[e].isBuffering() || et[e].inTransition()) {
                        t = !1;
                        break;
                    }
                }t && (_.SYNC == nt ? (nt = _.PLAY, ot.startPlayback(), At && ft && wt.start()) : _.WAIT == nt && (nt = _.PLAY, ot.continue()));
            }

            function $(t, e, n, r, i) {
                if (_.SYNC == nt || _.PLAY == nt || _.WAIT == nt) {
                    var o = Y(t);
                    o && o.isActual() ? o.processFrame(e, n, r, i) : wt && wt.isProbing(t) ? wt.onProbeDataReceived(e, n.byteLength, r) : (o = H(t), o && o.isActual() ? o.processTransitionFrame(e, n, r, i) : b.default.debug("Incomplete frame received", t, r));
                }
            }
            var tt = void 0,
                et = [],
                nt = _.NULL,
                rt = new h.default(),
                it = new u.default(rt),
                ot = new f.default(),
                at = void 0,
                st = void 0,
                ut = [],
                ct = void 0,
                ft = void 0,
                lt = void 0,
                ht = void 0,
                dt = void 0,
                pt = void 0,
                vt = void 0,
                mt = {},
                gt = 0,
                bt = void 0,
                _t = !1,
                At = !1,
                yt = [],
                wt = void 0;
            this.initialize = function (r) {
                if (_.NULL != nt && d(), t(r), e(), !ot.isMediaSourceSupported()) return b.default.error("MediaSource is not supported"), void at.showNotSupported();
                nt = _.INIT, tt.adaptive_bitrate && n(), o(), s(), "latency_tolerance" in tt && ot.setLatencyTolerance(tt.latency_tolerance / 1e3, tt.buffering / 1e3), ot.init(at.videoElement);
            }, this.destroy = function () {
                d();
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(122),
            a = r(o),
            s = n(142),
            u = r(s),
            c = n(129),
            f = r(c),
            l = n(128),
            h = r(l),
            d = n(89),
            p = r(d),
            v = n(133),
            m = r(v),
            g = n(11),
            b = r(g),
            _ = {
            NULL: 0,
            INIT: 1,
            STOP: 2,
            SETUP: 3,
            SYNC: 4,
            PLAY: 5,
            WAIT: 6,
            STALL: 7,
            ERROR: 8,
            RESET: 9
        },
            A = 1e3;
        e.default = i;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = "d09GRgABAAAAAAdgAAsAAAAABxQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHC2NtYXAAAAFoAAAAdAAAAHTqFqilZ2FzcAAAAdwAAAAIAAAACAAAABBnbHlmAAAB5AAAAxgAAAMYcAErl2hlYWQAAAT8AAAANgAAADYNUp3haGhlYQAABTQAAAAkAAAAJAfCA8tobXR4AAAFWAAAACgAAAAoHgABUmxvY2EAAAWAAAAAFgAAABYDMAJWbWF4cAAABZgAAAAgAAAAIAAOAFZuYW1lAAAFuAAAAYYAAAGGmUoJ+3Bvc3QAAAdAAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6ioDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAFgAAAASABAAAwACAAEAIOmL6ZTqHeon6ir//f//AAAAAAAg6YvplOoc6ifqKv/9//8AAf/jFnkWcRXqFeEV3wADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACAAD/wAQAA8AABgANAAABEScHJzcnAwcXIREXNwQAoMBgwKCgwKD+YKDAA8D+YKDAYMCg/WDAoAGgoMAAAAAAAgAS/8AD7gPAADYASgAAAS4BPgE3Jw4BIyIuAjUjFAYHDgImJwceARceAQ4BBxc+ATMyHgIVMzQ2Nz4CFhc3LgEnBSIuAjU0PgIzMh4CFRQOAgOmFAkTLyNlFTIbKEc1HskNDRU+SE0jZRYlDRQJFC4jZRUyGihHNR/JDQ0UPklMJGQVJQ3+WitLOSAgOUsrK0s5ICA5SwFeI0xJPhSvDQ4fNUcpGTIXIy4TCRSuDSQXI0xIPxSuDA4fNUcoGTEXIy4TCRSvDCQXbSA5SysrSzkgIDlLKytLOSAAAAEAwABAA0ADQAACAAATCQHAAoD9gANA/oD+gAACAIAAQAOAA0AAAwAHAAATIREhASERIYABQP7AAcABQP7AA0D9AAMA/QAAAAMAAAAAA3ADfgAfADgAUwAAJSImJyY0Nz4BNCYnJjQ3NjIXHgMVFA4CBw4BIzEnIiYnJjQ3PgE0JicmNDc2MhceARQGBw4BByImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BAtAKEQcODjExMTEODg4nDh8vIBERIC8fBxEJqwkSBw4OHh8fHg4ODigOLC0tLAcSjgYMBfZzDRMTDXP2BxMJCQsLCQMGgAcIDicOMnuCezIOJw4PDx5HTVQrK1RNRx4IB1sHBw4oDh5NUE0eDigODg4scXRxLAcH2wUE9xMNAUANE/cGBAMEEAr8wAoQBAEBAAACAAAAAAPAA34ADwAqAAABFSMnByM1Nyc1Mxc3MxUHASImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BA8BVa2tVa2tVa2tVa/5LBgwF9nMNExMNc/YHEwkJCwsJAwYBVVVra1Vra1Vra1Vr/kAFBPcTDQFADRP3BgQDBBAK/MAKEAQBAQABAAAAAQAAzKLy3V8PPPUACwQAAAAAANUZrLIAAAAA1RmssgAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAAASBAAAwAQAAIAEAAAABAAAAAAAAAAACgAUAB4APgCsALoA0AFKAYwAAAABAAAACgBUAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(132),
            s = r(a),
            u = n(11),
            c = r(u),
            f = 6,
            l = function () {
            function t(e, n, r) {
                i(this, t), this._interval1secHandler = function () {
                    if (this.isStarted()) {
                        this.timerCounter++, this.bw1sec.push(this.bytes1sec / 128), this.rate1sec.push(this.curRate()), this.rate1secTs1 = this.rate1secTs2 = void 0, this.bytes1sec = 0, this.lb1sec.push(this.lowBuf1sec), this.lowBuf1sec = 0;
                        var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : 0;
                        this.bl1sec.push(t), this.bufLvl1sec = 0, this.buf1secCnt = 0, this.timerCounter % 60 == 0 && (this.bwTotal.push(this.avgBandwidth()), this.lbTotal.push(this.lowBufTotal), t = this.bufTotalCnt > 0 ? this.bufLvlTotal / this.bufTotalCnt : 0, this.blTotal.push(t), this.rateTotal.push(this.avgRate()), this.timerCounter = 0);
                    }
                }.bind(this), this.id = e, this.type = n, this.timescale = r, this.startTime = void 0, this.lastBwTime = void 0, this.pickCustom = !1, this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.bytesTotal = 0, this.bytes1sec = 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.bw1sec = new s.default(10 * f), this.bwTotal = new s.default(f), this.rate1sec = new s.default(10 * f), this.rateTotal = new s.default(f), this.lb1sec = new s.default(10 * f), this.lbTotal = new s.default(f), this.bl1sec = new s.default(10 * f), this.blTotal = new s.default(f), this.interval1sec = void 0, this.timerCounter = 0;
            }
            return o(t, [{
                key: "clearCounters",
                value: function value() {
                    this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.bytesTotal = 0, this.bytes1sec = 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.timerCounter = 0;
                }
            }, {
                key: "destroy",
                value: function value() {
                    this._clear1secInterval(), this.bw1sec.clear(), this.bwTotal.clear(), this.rate1sec.clear(), this.rateTotal.clear(), this.bl1sec.clear(), this.blTotal.clear(), this.lb1sec.clear(), this.lbTotal.clear();
                }
            }, {
                key: "stop",
                value: function value() {
                    this.enabled = !1, this.stopTime = new Date(), this._clear1secInterval();
                }
            }, {
                key: "start",
                value: function value() {
                    this.enabled = !0, this.clearCounters(), this.startTime = new Date(), this.stopTime = void 0, this.lastBwTime = void 0, this.interval1sec = setInterval(this._interval1secHandler, 1e3);
                }
            }, {
                key: "isStarted",
                value: function value() {
                    return this.enabled;
                }
            }, {
                key: "isReady",
                value: function value() {
                    return void 0 === this.enabled;
                }
            }, {
                key: "startCustom",
                value: function value() {
                    this.pickCustom = !0, this.customStart = new Date(), this.customStop = void 0, this.bytesCustom = 0;
                }
            }, {
                key: "stopCustom",
                value: function value() {
                    this.pickCustom = !1, this.customStop = new Date();
                }
            }, {
                key: "customRangeBandwidth",
                value: function value() {
                    var t = (this.customStop - this.customStart) / 1e3;
                    return this.bytesCustom / (128 * t);
                }
            }, {
                key: "reportBandwidth",
                value: function value(t, e) {
                    this.isStarted() && (this.bytesTotal += t, this.bytes1sec += t, this.pickCustom && (this.bytesCustom += t), this.lastBwTime = new Date(), void 0 === this.rate1secTs1 && (this.rate1secTs1 = e), this.rate1secTs2 = e, void 0 === this.rateTotalTs1 && (this.rateTotalTs1 = e), this.rateTotalTs2 = e);
                }
            }, {
                key: "reportLowBuffer",
                value: function value() {
                    this.isStarted() && (this.lowBufTotal++, this.lowBuf1sec++);
                }
            }, {
                key: "reportBufLevel",
                value: function value(t) {
                    this.isStarted() && (this.bufLvlTotal += t, this.bufLvl1sec += t, this.bufTotalCnt++, this.buf1secCnt++);
                }
            }, {
                key: "avgBandwidth",
                value: function value() {
                    var t = 0;
                    if (void 0 !== this.startTime) {
                        var e = void 0 !== this.stopTime ? this.stopTime : new Date(),
                            n = (e - this.startTime) / 1e3;
                        n > 0 && (t = this.bytesTotal / (128 * n));
                    }
                    return t;
                }
            }, {
                key: "avgRate",
                value: function value() {
                    var t = (this.rateTotalTs2 - this.rateTotalTs1) / this.timescale;
                    return 0 == t || isNaN(t) ? 0 : this.bytesTotal / (128 * t);
                }
            }, {
                key: "curRate",
                value: function value() {
                    var t = (this.rate1secTs2 - this.rate1secTs1) / this.timescale;
                    return 0 == t || isNaN(t) ? 0 : this.bytes1sec / (128 * t);
                }
            }, {
                key: "latestBandwidth",
                value: function value() {
                    var t = void 0;
                    if (void 0 !== this.lastBwTime) {
                        var e = void 0 !== this.stopTime ? this.stopTime : new Date(),
                            n = (e - this.lastBwTime) / 1e3;
                        n > 0 && (t = this.bytes1sec / (128 * n));
                    }
                    if (this.bw1sec.length() > 0) {
                        var r = this.bw1sec.get(-1);
                        t = void 0 === t ? r : (t + r) / 2;
                    }
                    return void 0 === t && (t = 0), t;
                }
            }, {
                key: "latestRate",
                value: function value() {
                    var t = this.curRate();
                    if (this.rate1sec.length() > 0) {
                        var e = this.rate1sec.get(-1);
                        t = 0 == t ? e : (t + e) / 2;
                    }
                    return t;
                }
            }, {
                key: "latestLowBufferCount",
                value: function value() {
                    for (var t = this.lowBuf1sec, e = 0; e < 2; e++) {
                        this.lb1sec.length() > e && (t += this.lb1sec.get(-1 * (e + 1)));
                    }return t;
                }
            }, {
                key: "latestBufLevel",
                value: function value() {
                    var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : void 0;
                    if (this.bl1sec.length() > 0) {
                        var e = this.bl1sec.get(-1);
                        t = void 0 !== t ? (t + e) / 2 : e;
                    }
                    return void 0 === t && (t = 0), t;
                }
            }, {
                key: "_clear1secInterval",
                value: function value() {
                    this.interval1sec && (clearInterval(this.interval1sec), this.interval1sec = void 0);
                }
            }, {
                key: "_printMetrics",
                value: function value() {
                    c.default.debug("Buffer level of " + this.id + " track:"), c.default.debug("1 sec:  [" + this.bl1sec.join(", ") + "]"), c.default.debug("Total:  [" + this.blTotal.join(", ") + "]"), c.default.debug("Bandwidth:"), c.default.debug("1 sec:  [" + this.bw1sec.join(", ") + "]"), c.default.debug("Total:  [" + this.bwTotal.join(", ") + "]"), c.default.debug("Low buffer:"), c.default.debug("1 sec:  [" + this.lb1sec.join(", ") + "]"), c.default.debug("Total:  [" + this.lbTotal.join(", ") + "]");
                }
            }]), t;
        }();
        e.default = l;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(127),
            s = r(a),
            u = n(11),
            c = r(u),
            f = function () {
            function t() {
                i(this, t), this.metricsList = {};
            }
            return o(t, [{
                key: "add",
                value: function value(t, e, n) {
                    void 0 !== this.metricsList[t] && c.default.error("[MetricsManager] metric for track ID " + t + " already exists"), this.metricsList[t] = new s.default(t, e, n);
                }
            }, {
                key: "remove",
                value: function value(t) {
                    this.metricsList[t] ? (this.metricsList[t].destroy(), this.metricsList[t] = void 0) : c.default.error("[MetricsManager] remove: " + t + " not found"), this.metricsList[t] = void 0;
                }
            }, {
                key: "isReadyToStart",
                value: function value(t) {
                    return this.metricsList[t] && this.metricsList[t].isReady();
                }
            }, {
                key: "run",
                value: function value(t) {
                    this.metricsList[t] ? this.metricsList[t].start() : c.default.error("[MetricsManager] run: " + t + " not found");
                }
            }, {
                key: "stop",
                value: function value(t) {
                    this.metricsList[t] ? this.metricsList[t].stop() : c.default.error("[MetricsManager] stop: no metric found for " + t + " track");
                }
            }, {
                key: "reportBandwidth",
                value: function value(t, e, n) {
                    this.metricsList[t] ? this.metricsList[t].reportBandwidth(e, n) : c.default.error("[MetricsManager] Report bandwidth: no metric found for " + t + " track");
                }
            }, {
                key: "reportLowBuffer",
                value: function value(t) {
                    this.metricsList[t] ? this.metricsList[t].reportLowBuffer() : c.default.error("[MetricsManager] report low buffer: No metric found for " + t + " track");
                }
            }, {
                key: "reportBufLevel",
                value: function value(t, e) {
                    this.metricsList[t] ? this.metricsList[t].reportBufLevel(e) : c.default.error("[MetricsManager] report buffer level: No metric found for " + t + " track");
                }
            }, {
                key: "getMetrics",
                value: function value(t) {
                    if (this.metricsList[t]) return this.metricsList[t];
                    c.default.error("[MetricsManager] get metric: No metric found for " + t + " track");
                }
            }]), t;
        }();
        e.default = f;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i() {
            function t(t, e) {
                var n = "vp8" == e || "vp9" == e ? "webm" : "mp4";
                return K && "mp4a.40.34" == e ? t + "/" + n + '; codecs="mp3"' : t + "/" + n + '; codecs="' + e + '"';
            }

            function e(t) {
                return t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds();
            }

            function n() {
                void 0 !== R && (clearTimeout(R), R = void 0);
            }

            function r() {
                return void 0 !== R;
            }

            function i() {
                a.default.debug("_cancelSeekTimer"), void 0 !== O && (a.default.debug("_cancelSeekTimer intro"), clearTimeout(O), O = void 0);
            }

            function o() {
                i(), a.default.debug("_setSeekTimer"), O = setTimeout(s, 5e3);
            }

            function s() {
                a.default.error("[MSE] error: Seek timeout!"), F = !1, O = void 0, U();
            }

            function c(t) {
                S.currentTime != t && (a.default.debug("seek ", t, S.currentTime), S.currentTime = t);
            }

            function f() {
                var t = S.buffered.length;
                if (t > 0) {
                    a.default.debug("[MSE]: _seekToBufferedStart");
                    for (var e = 0; e < x.length; e++) {
                        x[e].buffered.length > 0 && a.default.debug("[MSE] " + x[e].stream_id + ": " + x[e].buffered.start(0));
                    }try {
                        l(), T.playbackTime = S.currentTime, T.bufferedTime = S.buffered.end(t - 1) - S.currentTime, T.worldTime = new Date(), E = !0;
                    } catch (t) {
                        a.default.debug("Seek to buffered start failed: ", t);
                    }
                }
            }

            function l() {
                var t = S.currentTime,
                    e = !1;
                if (S.buffered.length > 0) {
                    t < S.buffered.start(0) && (t = S.buffered.start(0), a.default.debug("Current position is behind the start of the first buffered range. Seek to the start."), e = !0);
                    for (var r = 1; r < S.buffered.length; r++) {
                        if (t >= S.buffered.end(r - 1) && t < S.buffered.start(r)) {
                            t = S.buffered.start(r), a.default.debug("Current position is between " + (r - 1) + " and " + r + " . Seek to the start of " + r), e = !0;
                            break;
                        }
                    }if (e) c(t), n();else if (P.value == S.currentTime && P.value !== T.playbackTime) {
                        P.count += 1;
                        var i = (new Date() - P.time) / 1e3;
                        P.count > 10 && i > 2 && (a.default.debug("Stuck on " + P.value + ". Seek by " + i), S.currentTime += i, n());
                    } else P.time = new Date(), P.value = S.currentTime, P.count = 1;
                }
            }

            function h() {
                var t = S.currentTime;
                if (M && I) {
                    t += (new Date() - I) / 1e3;
                }
                if (void 0 === C || t - C > 30) for (var e = 0; e < x.length; e++) {
                    var n = x[e];
                    if (n.buffered.length > 0) {
                        var r = n.buffered.start(0),
                            i = t - 30;
                        i - r > 60 && (n.removeRange(0, Math.round(i)), C = t);
                    }
                }
            }

            function d(t) {
                var e = S.play();
                void 0 !== e ? e.catch(function (t) {
                    z();
                }) : et && !nt && (t ? nt = !0 : z());
            }

            function p() {
                a.default.debug("onPlay"), f(), W();
            }

            function v() {
                a.default.debug("Seek start"), E && (F = !0, o());
            }

            function m() {
                a.default.debug("Seek end"), setTimeout(function () {
                    F = !1;
                }, 1e3), i();
            }

            function g() {
                b();
            }

            function b() {
                var t = x.length;
                if (t > 0) {
                    for (var e = 0; e < t; e++) {
                        if (x[e].closed) return;
                    }if (E || k) {
                        if (M) h();else if (B) {
                            a.default.debug("[MSE] onProgress: buffered in progress");
                            var n = S.currentTime + (new Date() - L) / 1e3;
                            V(n, S.currentTime);
                        } else {
                            var i = new Date() - T.worldTime,
                                o = T.playbackTime + i / 1e3,
                                s = o - S.currentTime + T.bufferedTime;
                            if (u.default.display("latency", s), F || k || S.ended) a.default.debug("[MSE] onProgress: nothing called, _seekInProgress " + F + ", _removeInProgress " + k + ", ended " + S.ended);else {
                                var d = S.buffered.end(S.buffered.length - 1),
                                    p = d - S.currentTime;
                                if (H > 0 && p > G + H) {
                                    if (q) U();else {
                                        var v = d - .8 * G;
                                        c(v), q = !0;
                                    }
                                    return;
                                }
                                q = !1, h(), (r() || X) && l(), j(S.currentTime), _();
                            }
                        }
                    } else f();
                }
            }

            function _() {
                S.paused && !M && (a.default.debug("Call play from onProgress"), d());
            }

            function A() {
                S.removeEventListener("canplay", A), y(1), a.default.debug("[MSE]: ", " canplay");
            }

            function y(t) {
                a.default.debug("[MSE]: _setPlaybackRate", t, S.readyState), S.readyState <= 2 ? S.addEventListener("canplay", A) : S.playbackRate = t;
            }
            var w = void 0,
                S = void 0,
                x = [],
                E = !1,
                T = {},
                k = !1,
                C = void 0,
                F = !1,
                B = !1,
                M = !1,
                P = {
                value: 0,
                count: 0,
                time: 0
            },
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
                X = /constructor/i.test(window.HTMLElement) || function (t) {
                return "[object SafariRemoteNotification]" === t.toString();
            }(!window.safari || "undefined" != typeof safari && safari.pushNotification),
                Z = !!document.documentMode,
                $ = !Z && !!window.StyleMedia,
                tt = !!window.chrome && !!window.chrome.webstore,
                et = ((tt || J) && window.CSS, /Android|Opera Mini/i.test(navigator.userAgent)),
                nt = !1;
            this.startLogging = function (t) {
                Q = !1, void 0 === Y && (Y = {}), void 0 === Y[t] && (Y[t] = {
                    times: [],
                    prevTime: 0,
                    sumTime: 0,
                    stamps: [],
                    gaps: [],
                    thresh: 60,
                    avg: void 0
                });
            }, this.setPositionControl = function () {
                n(), R = setTimeout(function () {
                    n();
                }, 3e4);
            }, this.setLatencyTolerance = function (t, e) {
                H = t, H < 3 && (Z || $) && (H = 3), G = e;
            }, this.isMediaSourceSupported = function () {
                return "MediaSource" in window;
            }, this.isMobile = function () {
                return et;
            }, this.isCodecSupported = function (e, n) {
                var r = !1;
                if (this.isMediaSourceSupported()) {
                    if ((Z || $) && ("mp4a.40.34" == n || "mp4a.6B" == n || "mp4a.6B" == n)) return !1;
                    r = MediaSource.isTypeSupported(t(e, n));
                }
                return r;
            }, this.init = function (t) {
                D && A ? (w = new MediaSource(), w.addEventListener("sourceopen", D), S = t, S.addEventListener("play", p), S.addEventListener("progress", b), S.addEventListener("timeupdate", g), S.addEventListener("seeking", v), S.addEventListener("seeked", m), S.src = URL.createObjectURL(w)) : a.default.error("[MSE] error: ", "necessary callbacks are not defined.");
            }, this.listBuffers = function () {
                a.default.debug("[MSE]", "listBuffers", x);
            }, this.createSourceBuffer = function (e, n, r) {
                function i(t, e) {
                    var n = !0;
                    try {
                        t.appendBuffer(e);
                    } catch (t) {
                        a.default.error("Append exception!", t), n = !1;
                    }
                    return n;
                }

                function o(t, e) {
                    var n = function n() {
                        t.updating || (t.removeEventListener("updateend", n), e());
                    };
                    t.updating ? t.addEventListener("updateend", n) : e();
                }
                var s = w.addSourceBuffer(t(e, n));
                return s.mode = "segments", s.segments = [], s.initSeg = void 0, s.startupCount = 0, s.appendedCount = 0, s.setTimestampOffset = function (t) {
                    var e = this;
                    o(e, function () {
                        e.timestampOffset = t;
                    });
                }, s.setStartupCount = function (t) {
                    this.startupCount = t, this.appendedCount = 0;
                }, s.filterOut = function (t) {
                    if (void 0 !== t) for (var e = this.segments.length, n = 0; n < e; n++) {
                        if (this.segments[n].ts >= t) {
                            this.segments.splice(n, e - n);
                            break;
                        }
                    }
                }, s.pushInit = function (t) {
                    var e = this;
                    e.initSeg = t, a.default.debug("[MSE]: " + e.stream_id + " pushInit"), e.pushSegment(t, []);
                }, s.pushSegment = function (t, e) {
                    var n = this;
                    if (n.segments.push({
                        data: t,
                        ts: e[0]
                    }), o(n, function () {
                        var t = n.appendedCount < n.startupCount ? n.appendedCount : 0;
                        if (t < n.segments.length && !n.closed) {
                            i(n, (n.appendedCount < n.startupCount ? n.segments[t] : n.segments.shift()).data) ? ++n.appendedCount == n.startupCount && n.segments.splice(0, n.appendedCount) : U();
                        }
                    }), Q) for (var r = Y[this.stream_id], s = 0; s < e.length; s++) {
                        var u = r.stamps.length > 0 ? e[s] - r.stamps[r.stamps.length - 1] : 0,
                            c = 0;
                        if (r.times.length > 0) {
                            var f = new Date();
                            c = f - r.prevTime, r.prevTime = f;
                        } else r.prevTime = new Date();
                        if (void 0 === r.avg) for (var l = 1; l < r.stamps.length; l++) {
                            var h = r.stamps[l] - r.stamps[l - 1];
                            if (h > 0) {
                                r.avg = h;
                                break;
                            }
                        }
                        if (r.stamps.length == r.thresh) {
                            if (a.default.debug("[MSE]: " + this.stream_id + " processed " + r.thresh + " frames"), 0 == r.gaps.length) r.sumTime > r.avg * r.thresh * 1.1 && (a.default.debug("Frames come slow!!!", r.sumTime, r.avg * r.thresh), a.default.debug("Intervals: [" + r.times.join(", ") + "]"));else {
                                for (var d = [], p = 0; p < r.gaps.length; p++) {
                                    d.push("{val: " + r.gaps[p].val + ", idx: " + r.gaps[p].idx + "}");
                                }a.default.debug("Gaps: [" + d.join(", ") + "], avgDuration " + r.avg), a.default.debug("Stamps: [" + r.stamps.join(", ") + "]"), r.sumTime > r.avg * r.thresh * 1.1 && a.default.debug("Frames come slow!!!", r.sumTime, r.avg * r.thresh), a.default.debug("Intervals: [" + r.times.join(", ") + "]");
                            }
                            r.times = [], r.sumTime = 0, r.stamps = [], r.gaps = [];
                        }
                        r.times.push(c), r.sumTime += c, r.stamps.push(e[s]), Math.abs(u - r.avg) > 1 && r.gaps.push({
                            val: u,
                            idx: r.stamps.length - 1
                        });
                    }
                }, s.getSegments = function () {
                    return {
                        init: this.initSeg,
                        segments: this.segments
                    };
                }, s.isStartingUp = function () {
                    return this.appendedCount < this.startupCount;
                }, s.removeAll = function () {
                    this.abort();
                    var t = this;
                    t.initSeg = void 0, t.segments = [];
                    var e = t.buffered.length;
                    e > 0 && t.removeRange(t.buffered.start(0), t.buffered.end(e - 1));
                }, s.removeRange = function (t, e) {
                    var n = this;
                    o(n, function () {
                        a.default.debug("remove started", t, e, S.currentTime, n.buffered.length), k = !0, n.remove(t, e), o(n, function () {
                            a.default.debug("remove ended"), k = !1;
                        });
                    });
                }, s.addEventListener("error", function (t) {
                    a.default.error("[MSE]:", "SourceBuffer Error", t, this.stream_id);
                }), s.stream_id = r, x.push(s), s;
            }, this.startPlayback = function () {
                a.default.debug("[MSE]: startPlayback buffered ", S.buffered.length), S.buffered.length > 0 && a.default.debug("[MSE]: mse buffer", S.buffered.start(0), S.buffered.end(0)), (0 == S.currentTime || M) && d();
            }, this.continue = function () {
                a.default.debug("[MSE]: continue buffered ", S.buffered.length), S.buffered.length > 0 && a.default.debug("[MSE]: mse buffer", S.buffered.start(0), S.buffered.end(0)), y(1), F && o(), L = void 0, B = !1;
            }, this.wait = function () {
                y(0), i(), L = new Date(), B = !0;
            }, this.callbacks = function (t) {
                D = t.onSourceOpen, N = t.onTimeUpdate, j = t.onProgress, U = t.onCrash, V = t.onWaitUpdate, W = t.onPlayStarted, z = t.onPlayFailed;
            }, this.resetPosition = function () {
                a.default.debug("[MSE] Reset position"), i(), n(), S && (S.currentTime = 0), E = !1, T = {}, P = {
                    value: 0,
                    count: 0,
                    time: 0
                }, C = void 0, I = void 0, L = void 0, M = !1, B = !1, q = !1, k = !1, F = !1;
            }, this.handlePause = function () {
                S && (M = !0, I = new Date(), i(), S.pause(), a.default.debug("Paused at: " + e(I)));
            }, this.handlePlay = function (t) {
                if (S && (M = !1, d(t), I)) {
                    var n = new Date(),
                        r = n - I;
                    a.default.debug("Play at: " + e(n)), a.default.debug("Going to seek by " + r / 1e3 + " seconds.");
                    var i = Math.ceil(S.currentTime + r / 1e3),
                        o = S.buffered.length;
                    if (o > 0) {
                        var s = S.buffered.end(o - 1);
                        a.default.debug("Calculated position " + i + ". Buffer end is " + s), s < i && (a.default.debug("Seek to buffer end " + s + " instead of " + i), i = s);
                    }
                    c(i);
                }
            }, this.clear = function () {
                for (var t = 0; t < x.length; t++) {
                    try {
                        w.removeSourceBuffer(x[t]);
                    } catch (t) {
                        a.default.error("Failed to remove source buffer:", t);
                    }
                }this.resetPosition(), x = [], S && (S.removeEventListener("play", p), S.removeEventListener("progress", b), S.removeEventListener("timeupdate", g), S.removeEventListener("seeking", v), S.removeEventListener("seeked", m), S.src = void 0, S = void 0), w && (w.removeEventListener("sourceopen", D), w = void 0), D = void 0, N = void 0, j = void 0, U = void 0, a.default.debug("[MSE] cleared source buffers and video element");
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(11),
            a = r(o),
            s = n(61),
            u = r(s);
        e.default = i;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(88),
            i = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r),
            o = {
            name: "Nimble Player",
            composer: new i.default()
        };
        e.default = o;
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            o = n(11),
            a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(o),
            s = function () {
            function t(e, n, i, o, s) {
                r(this, t), this.enabled = !1, this.period = o, this.stream = n, this.timescale = i, this.streamId = parseInt("F0", 16) + e % 16, this.metricsManager = s, this.metricsManager.add(this.streamId, "probe", i), a.default.debug("[Prober] constructor: " + n + ", timescale: " + i + ", period: " + o);
            }
            return i(t, [{
                key: "destroy",
                value: function value() {
                    this.metricsManager.remove(this.streamId), this._clearBufCheckInterval();
                }
            }, {
                key: "id",
                value: function value() {
                    return this.streamId;
                }
            }, {
                key: "streamName",
                value: function value() {
                    return this.stream;
                }
            }, {
                key: "start",
                value: function value() {
                    this.enabled = !0, this.durations = [], this.firstTimestamp = void 0, this.lastTimestamp = void 0, this.expectedEndTimestamp = void 0, this.startProbeCallback(this, this.period + 1);
                }
            }, {
                key: "isEnabled",
                value: function value() {
                    return this.enabled;
                }
            }, {
                key: "stop",
                value: function value() {
                    this.isEnabled() && (this.enabled = !1, this.cancelProbeCallback(this), this.metricsManager.stop(this.streamId), this._clearBufCheckInterval());
                }
            }, {
                key: "receiveInit",
                value: function value() {
                    if (this.initTime = new Date(), this.initReceivedCallback(), this.period >= 1e3) {
                        var t = this;
                        this.bufCheckInterval = setInterval(function () {
                            if (t.firstTimestamp) {
                                var e = (t.lastTimestamp - t.firstTimestamp) / t.timescale,
                                    n = e - (new Date() - t.initTime) / 1e3;
                                t.metricsManager.reportBufLevel(t.streamId, n), n <= 0 && t.metricsManager.reportLowBuffer(t.streamId);
                            } else t.metricsManager.reportBufLevel(t.streamId, 0), t.metricsManager.reportLowBuffer(t.streamId);
                        }, 500);
                    }
                }
            }, {
                key: "receiveFrame",
                value: function value(t, e, n) {
                    if (void 0 === this.firstTimestamp ? (a.default.debug("[Prober] receiveFrame: firstTimestamp " + n), this.firstTimestamp = n, this.expectedEndTimestamp = this.period * this.timescale / 1e3 + n) : this.durations.push(n - this.lastTimestamp), this.lastTimestamp = n, n + this._findDuration() > this.expectedEndTimestamp) {
                        a.default.debug("[Prober] receiveFrame: lastTimestamp " + n);
                        var r = (n - this.firstTimestamp) / this.timescale,
                            i = r - (new Date() - this.initTime) / 1e3;
                        this.metricsManager.reportBufLevel(this.streamId, i), i <= 0 && this.metricsManager.reportLowBuffer(this.streamId), this.stop(), this.probeFinishedCallback();
                    }
                }
            }, {
                key: "_findDuration",
                value: function value() {
                    var t = 0,
                        e = 0,
                        n = {};
                    for (e = 0; e < this.durations.length; e++) {
                        var r = this.durations[e];
                        n[r] = n[r] > 0 ? n[r] + 1 : 1;
                    }
                    for (e in n) {
                        if (n[e] > 0) {
                            var i = parseInt(e);
                            i > 0 && (t = i);
                        }
                    }return t;
                }
            }, {
                key: "_clearBufCheckInterval",
                value: function value() {
                    this.bufCheckInterval && (clearInterval(this.bufCheckInterval), this.bufCheckInterval = void 0);
                }
            }, {
                key: "callbacks",
                set: function set(t) {
                    this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.initReceivedCallback = t.onInitReceived, this.probeFinishedCallback = t.onProbeFinished;
                }
            }]), t;
        }();
        e.default = s;
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            o = n(11),
            a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(o),
            s = function () {
            function t(e) {
                r(this, t), e <= 0 && a.default.error("[RingBuffer] invalid size in constructor " + e), this.buffer = [], this.size = e, this.start = 0;
            }
            return i(t, [{
                key: "push",
                value: function value(t) {
                    this.buffer.length == this.size ? (this.buffer[this.start++] = t, this.start == this.size && (this.start = 0)) : this.buffer.push(t);
                }
            }, {
                key: "get",
                value: function value(t) {
                    var e = void 0;
                    if (t >= 0 && t < this.buffer.length) {
                        var n = this.start + t;
                        n >= this.buffer.length && (n -= this.buffer.length), e = this.buffer[n];
                    } else if (t < 0 && -1 * t <= this.buffer.length) {
                        var r = this.start + t;
                        r < 0 && (r += this.buffer.length), e = this.buffer[r];
                    } else a.default.error("[RingBuffer] attempt to read from invalid index " + t);
                    return e;
                }
            }, {
                key: "join",
                value: function value(t) {
                    var e = "";
                    this.buffer.length > 0 && (e += this.buffer[this.start]);
                    for (var n = 1; n < this.buffer.length; n++) {
                        var r = this.start + n;
                        r >= this.buffer.length && (r -= this.buffer.length), e += t + this.buffer[r];
                    }
                    return e;
                }
            }, {
                key: "clear",
                value: function value() {
                    this.buffer = [], this.start = 0;
                }
            }, {
                key: "drop",
                value: function value() {
                    this.buffer = [], this.size = 0, this.start = 0;
                }
            }, {
                key: "length",
                value: function value() {
                    return this.buffer.length;
                }
            }]), t;
        }();
        e.default = s;
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function i(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + pageYOffset,
                left: e.left + pageXOffset
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(124),
            s = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a),
            u = function () {
            function t(e) {
                r(this, t), this._playPauseBtnClick = function (t) {
                    this.play_pause_button.classList.contains("sldp-icon-play") ? this._handlePlay(!0) : this._handlePause();
                }.bind(this), this._configBtnClick = function (t) {
                    var e = this;
                    if (this.cfg_dialog) return this.cfg_dialog.remove(), void delete this.cfg_dialog;
                    this.cfg_dialog = document.createElement("ul"), this.cfg_dialog.className = "sldp_cfg_dialog";
                    for (var n = 0; n < this.quality_ar.length; n++) {
                        !function (t) {
                            var n = e.quality_ar[t],
                                r = document.createElement("li");
                            n == e.cur_quality && (n = "&#10003 " + n), r.innerHTML = n, r.onclick = function () {
                                this.onQualityChangeCallback && (this.onQualityChangeCallback(n), this.cfg_dialog.remove(), delete this.cfg_dialog);
                            }.bind(e), e.cfg_dialog.appendChild(r);
                        }(n);
                    }this.player_wrapper.insertBefore(this.cfg_dialog, this.control_bar);
                }.bind(this), this._volumeBtnClick = function (t) {
                    var e = t.currentTarget;
                    e.classList.contains("sldp-icon-volume-medium") ? (this.video_element.prev_volume = this.video_element.volume, this.video_element.volume = 0, e.classList.remove("sldp-icon-volume-medium"), e.classList.add("sldp-icon-volume-mute")) : (this.video_element.volume = this.video_element.prev_volume, e.classList.remove("sldp-icon-volume-mute"), e.classList.add("sldp-icon-volume-medium"));
                }.bind(this), this._expandBtnClick = function (t) {
                    var e = this.player_wrapper;
                    this._isFullscreenMode() ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                }.bind(this), this._fullscreenchangeHandler = function (t) {
                    this._isFullscreenMode() ? (this.video_element.height_prev = this.video_element.offsetHeight, this.video_element.width_prev = this.video_element.offsetWidth, this.video_element.height = screen.height, this.video_element.width = screen.width, this.player_wrapper.style.height = screen.height + "px", this.player_wrapper.style.width = screen.width + "px") : (this.video_element.height = this.video_element.height_prev, this.video_element.width = this.video_element.width_prev, this.player_wrapper.style.height = this.video_element.height_prev + "px", this.player_wrapper.style.width = this.video_element.width_prev + "px");
                }.bind(this), this.settings = e, this.container = document.getElementById(this.settings.container), this.quality_ar = [], this.can_play = this.settings.autoplay;
                new s.default();
                this._create_player_wrapper(), this.video_element = document.createElement("video"), this._setSplashScreen(), "number" == typeof this.settings.height && (this.video_element.height = this.settings.height, this.player_wrapper.style.height = e.height + "px"), "number" == typeof this.settings.width && (this.video_element.width = this.settings.width, this.player_wrapper.style.width = e.width + "px"), this.video_element.onclick = function (t) {
                    t.target == this.video_element && this._playPauseBtnClick(t);
                }.bind(this), this.player_wrapper.appendChild(this.video_element), this._create_controls(), this._createFullscreenHandler(), this._create_loading_indicator();
            }
            return o(t, [{
                key: "destroy",
                value: function value() {
                    for (this._removeFullscreenHandler(); this.container.firstChild;) {
                        this.container.removeChild(this.container.firstChild);
                    }this.player_wrapper = void 0;
                }
            }, {
                key: "showNotSupported",
                value: function value() {
                    this._removeSplashScreen(), this._removePlayerControls(), this._addMessage("MediaSource is not supported in current browser");
                }
            }, {
                key: "onPlaybackStarted",
                value: function value() {
                    this._removeSplashScreen();
                }
            }, {
                key: "onPlaybackFinished",
                value: function value() {
                    this._setSplashScreen();
                }
            }, {
                key: "triggerPlay",
                value: function value() {
                    this._handlePlay();
                }
            }, {
                key: "triggerPause",
                value: function value() {
                    this._handlePause();
                }
            }, {
                key: "_create_player_wrapper",
                value: function value() {
                    var t = document.createElement("div");
                    t.className = "sldp_player_wrp", t.onmousemove = function (t) {
                        this.control_bar.style.opacity = "1", this.control_hide_dalay && clearTimeout(this.control_hide_dalay), this.control_hide_dalay = setTimeout(function () {
                            this.control_bar.style.opacity = "0";
                        }.bind(this), 2e3);
                    }.bind(this), t.onmouseout = function () {
                        this.control_bar.style.opacity = "0";
                    }.bind(this), this.container.appendChild(t), this.player_wrapper = t;
                }
            }, {
                key: "_addMessage",
                value: function value(t) {
                    var e = document.createElement("div");
                    e.className = "sldp_message", e.innerHTML = t, this.player_wrapper.appendChild(e);
                }
            }, {
                key: "_create_controls",
                value: function value() {
                    var t = document.createElement("div");
                    t.className = "sldp_cbar";
                    var e = document.createElement("div");
                    e.className = "sldp_expand_btn", e.classList.add("sldp_btn"), e.classList.add("sldp-icon-enlarge"), e.onclick = this._expandBtnClick, t.appendChild(e);
                    var n = document.createElement("div");
                    n.className = "sldp_config_btn", n.classList.add("sldp_btn"), n.classList.add("sldp-icon-cog"), n.onclick = this._configBtnClick, t.appendChild(n);
                    var r = document.createElement("div");
                    r.className = "sldp_play_pause_btn", r.classList.add("sldp_btn"), r.classList.add(this.settings.autoplay ? "sldp-icon-pause" : "sldp-icon-play"), r.onclick = this._playPauseBtnClick, t.appendChild(r);
                    var i = document.createElement("div");
                    i.className = "sldp_volume_wrp", i.onmouseover = function (t) {
                        this.volume_slider.style.display = "block";
                    }.bind(this), i.onmouseout = function (t) {
                        this.volume_slider.style.display = "none";
                    }.bind(this), t.appendChild(i);
                    var o = document.createElement("div");
                    o.className = "sldp_volume_btn", o.classList.add("sldp_btn"), o.classList.add("sldp-icon-volume-medium"), o.onclick = this._volumeBtnClick, i.appendChild(o), this.player_wrapper.appendChild(t), this.config_button = n, this.volume_button = o, this.volume_wrapper = i, this.expand_button = e, this.play_pause_button = r, this.control_bar = t, this._create_volume_slider();
                }
            }, {
                key: "_create_volume_slider",
                value: function value() {
                    var t = document.createElement("div");
                    t.className = "sldp_volume_slider";
                    var e = document.createElement("div");
                    e.className = "sldp_volume_thumb", t.appendChild(e), e.onmousedown = function (n) {
                        var r = i(e),
                            o = n.pageX - r.left,
                            a = i(t);
                        return document.onmousemove = function (n) {
                            var r = n.pageX - o - a.left;
                            r < 0 && (r = 0);
                            var i = t.offsetWidth - e.offsetWidth;
                            r > i && (r = i), e.style.left = r + "px", 0 < r && (this.video_element.volume = r / 100, this.volume_button.classList.remove("sldp-icon-volume-mute"), this.volume_button.classList.add("sldp-icon-volume-medium"));
                        }.bind(this), document.onmouseup = function () {
                            document.onmousemove = document.onmouseup = null;
                        }, !1;
                    }.bind(this), e.ondragstart = function () {
                        return !1;
                    }, this.volume_wrapper.appendChild(t), this.volume_slider = t, this.volume_slider.style.display = "none";
                }
            }, {
                key: "_setSplashScreen",
                value: function value() {
                    this.settings.splash_screen && (this.video_element.style["background-image"] = "url('" + this.settings.splash_screen + "')", this.video_element.style["background-size"] = "cover");
                }
            }, {
                key: "_removeSplashScreen",
                value: function value() {
                    this.settings.splash_screen && (this.video_element.style["background-image"] = "", this.video_element.style["background-size"] = "", this.video_element.style.background = "#000");
                }
            }, {
                key: "_removePlayerControls",
                value: function value() {
                    var t = this.player_wrapper.getElementsByClassName("sldp_cbar")[0];
                    this.player_wrapper.removeChild(t);
                    var e = this.player_wrapper.getElementsByClassName("sldp_indicator")[0];
                    this.player_wrapper.removeChild(e);
                }
            }, {
                key: "_handlePlay",
                value: function value(t) {
                    var e = this.play_pause_button;
                    this.can_play && (e.classList.remove("sldp-icon-play"), e.classList.add("sldp-icon-pause"), this.onPlayCallback && this.onPlayCallback(t));
                }
            }, {
                key: "_handlePause",
                value: function value() {
                    var t = this.play_pause_button;
                    t.classList.remove("sldp-icon-pause"), t.classList.add("sldp-icon-play"), this.onPauseCallback && this.onPauseCallback();
                }
            }, {
                key: "_isFullscreenMode",
                value: function value() {
                    return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
                }
            }, {
                key: "_createFullscreenHandler",
                value: function value() {
                    document.addEventListener("webkitfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("mozfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("fullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("MSFullscreenChange", this._fullscreenchangeHandler, !1);
                }
            }, {
                key: "_removeFullscreenHandler",
                value: function value() {
                    document.removeEventListener("webkitfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("mozfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("fullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("MSFullscreenChange", this._fullscreenchangeHandler);
                }
            }, {
                key: "_create_loading_indicator",
                value: function value() {
                    var t = document.createElement("div");
                    t.className = "sldp_indicator", this.player_wrapper.appendChild(t), this.indicator = {
                        ui: this,
                        fps: 60,
                        element: t,
                        counter: 0,
                        percentage: 0,
                        max_width: 1,
                        release_duration: .5,
                        start: function start() {
                            this.interval && clearInterval(this.interval), this.counter = 0, this.element.style.opacity = 1, this.max_width = this.ui.video_element.offsetWidth, this.interval = setInterval(this.onInterval.bind(this), 1e3 / this.fps);
                        },
                        release: function release() {
                            this.interval && clearInterval(this.interval), this.counter = 0, this.percentage_per_frame = (100 - this.percentage) / (this.release_duration * this.fps), this.opacity_per_frame = .9 / (this.release_duration * this.fps), this.interval = setInterval(this.onReleaseInterval.bind(this), 1e3 / this.fps);
                        },
                        onInterval: function onInterval() {
                            this.counter += 1, this.percentage = 8 * Math.log(this.counter), this.ajust_element_width(), 45 < this.percentage && this.release();
                        },
                        onReleaseInterval: function onReleaseInterval() {
                            this.percentage += this.percentage_per_frame, 100 <= this.percentage && (this.percentage = 100, clearInterval(this.interval)), this.ajust_element_width();
                            var t = parseFloat(this.element.style.opacity) || 1;
                            this.element.style.opacity = "" + (t - this.opacity_per_frame);
                        },
                        ajust_element_width: function ajust_element_width() {
                            this.element.style.width = parseInt(.01 * this.max_width * this.percentage) + "px";
                        }
                    }, this.settings.autoplay && this.indicator.start();
                }
            }, {
                key: "videoElement",
                get: function get() {
                    return this.video_element;
                }
            }, {
                key: "qualities",
                set: function set(t) {
                    this.quality_ar = t, this.cur_quality = t[0];
                }
            }, {
                key: "currentQuality",
                set: function set(t) {
                    this.cur_quality = t;
                }
            }, {
                key: "onPlay",
                set: function set(t) {
                    this.onPlayCallback = t;
                }
            }, {
                key: "onPause",
                set: function set(t) {
                    this.onPauseCallback = t;
                }
            }, {
                key: "canPlay",
                set: function set(t) {
                    this.can_play = !!t;
                }
            }, {
                key: "onQualityChange",
                set: function set(t) {
                    this.onQualityChangeCallback = t;
                }
            }]), t;
        }();
        e.default = u;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }

        function i() {
            function t(t, e, n, r, i) {
                var o = void 0,
                    a = r;
                o = t.lastSample;
                var s = r - o.rawts;
                return (s < 0 || s > 10 * t.timescale) && (u.default.debug("Adjust DTS difference!!!", s), s = t.lastSampleDuration), r = o.ts + s, o.duration = s, o.altDur = Math.round(s / (t.timescale / 1e3)), t.lastSampleDuration = s, t.lastSample = {
                    data: n,
                    ts: r,
                    rawts: a,
                    altTs: Math.round(r / (t.timescale / 1e3)),
                    sap: e
                }, o;
            }

            function e(t) {
                var e = a.default.createElement("EBML", t);
                return a.default.createElement("EBMLVersion", e, 1), a.default.createElement("EBMLReadVersion", e, 1), a.default.createElement("EBMLMaxIDLength", e, 4), a.default.createElement("EBMLMaxSizeLength", e, 8), a.default.createElement("DocType", e, "webm"), a.default.createElement("DocTypeVersion", e, 2), a.default.createElement("DocTypeReadVersion", e, 2), e;
            }

            function n(t) {
                var e = a.default.createElement("Segment", t);
                return e._unbound = !0, e;
            }

            function r(t) {
                var e = a.default.createElement("SegmentInfo", t);
                return a.default.createElement("TimecodeScale", e, 1e6), a.default.createElement("MuxingApp", e, "sldp-player"), a.default.createElement("WritingApp", e, "sldp-player"), e;
            }

            function i(t) {
                for (var e = a.default.createElement("Tracks", t), n = 0; n < c.length; n++) {
                    var r = "video" == c[n].type,
                        i = a.default.createElement("TrackEntry", e);
                    if (a.default.createElement("TrackNumber", i, c[n].id), a.default.createElement("TrackUID", i, c[n].id), a.default.createElement("FlagLacing", i, 0), a.default.createElement("Language", i, "und"), a.default.createElement("CodecID", i, "V_" + c[n].codec), a.default.createElement("CodecName", i, c[n].codec), a.default.createElement("TrackType", i, r ? 1 : 2), r) {
                        var o = a.default.createElement("Video", i);
                        a.default.createElement("PixelWidth", o, c[n].width), a.default.createElement("PixelHeight", o, c[n].height);
                    }
                }
                return e;
            }

            function o(t, e, n) {
                var r = a.default.createElement("Cluster", t);
                a.default.createElement("Timecode", r, n[0].altTs);
                for (var i = 0, o = 0; o < n.length; o++) {
                    var s = a.default.createElement("SimpleBlock", r);
                    s.sap = n[o].sap, s.timecode = i, s.trackNumber = e.id, s.frame = n[o].data, i += n[o].altDur;
                }
            }

            function s(t) {
                for (var e = void 0, n = 0; n < c.length; n++) {
                    if (c[n].id == t) {
                        e = c[n];
                        break;
                    }
                }return void 0 === e && u.default.error("[WebmComposer]: track ID " + t + " is not found!"), e;
            }
            var c = [],
                f = 1;
            this.init = function () {
                c = [], f = 1;
            }, this.addTrack = function (t, e) {
                var n = {
                    id: f,
                    type: t,
                    timescale: e.timescale,
                    curSeqNumber: 0,
                    lastSampleDuration: 0
                };
                switch (t) {
                    case "video":
                        n.codec = e && "codec" in e ? e.codec : "VP8", n.width = e && "width" in e ? e.width : 0, n.height = e && "height" in e ? e.height : 0;
                        break;
                    case "audio":
                        u.default.error("[WebmComposer] addTrack: audio is not supported!");
                }
                return c.push(n), f++, n;
            }, this.setTrackParams = function (t, e) {
                var n = s(t);
                return n && ("width" in e && (n.width = e.width), "height" in e && (n.height = e.height), "sequenceNumber" in e && (n.curSeqNumber = e.sequenceNumber), u.default.debug("setTrackParams", t, e)), n;
            }, this.setBaseSample = function (t, e, n, r) {
                var i = s(t);
                i ? (u.default.debug("[WebmComposer] setBaseSample:", i.type, n), i.lastSample = {
                    data: e,
                    ts: n,
                    rawts: n,
                    altTs: Math.round(n / (i.timescale / 1e3)),
                    sap: !0
                }) : u.default.error("[WebmComposer] setBaseSample: track " + t + " not found!!!");
            }, this.initSegment = function () {
                var t = a.default.createFile();
                e(t);
                var o = n(t);
                return r(o), i(o), t.write();
            }, this.mediaSegment = function (e, n, r) {
                var i = void 0,
                    u = a.default.createFile(),
                    c = s(e),
                    f = [],
                    l = [];
                if (c) {
                    var h = 0,
                        d = [];
                    for (h = 0; h < n.length; h++) {
                        var p = n[h],
                            v = t(c, p.sap, p.data, p.ts);
                        void 0 !== v && (d.push(v), f.push(v.ts), l.push(v.sap));
                    }
                    r && void 0 !== c.lastSample && (c.lastSample.duration = c.lastSampleDuration, d.push(c.lastSample), f.push(d[d.length - 1].ts), l.push(d[d.length - 1].sap), c.lastSample = void 0), d.length > 0 && (o(u, c, d), i = {
                        ts: f,
                        sap: l,
                        sn: c ? c.curSeqNumber - 1 : void 0,
                        data: u.write()
                    });
                }
                return i;
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(139),
            a = r(o),
            s = n(11),
            u = r(s);
        e.default = i;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(138),
            o = r(i),
            a = n(49),
            s = r(a),
            u = n(90),
            c = r(u),
            f = function f() {
            this._cursor = new s.default();
        };
        f.create = function (t) {
            var e = new f();
            return e.type = t, e.boxes = [], e;
        }, f.prototype._boxContainers = ["dinf", "mdia", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak"], f.prototype._boxProcessors = {}, f.prototype._writeFieldArray = function (t, e, n) {
            for (var r = 0; r < n.length; r++) {
                this._writeField(t, e, n[r]);
            }
        }, f.prototype._writeFullBox = function () {
            this._writeField("uint", 8, this.version), this._writeField("uint", 24, this.flags);
        }, f.prototype._procEntries = function (t, e, n) {
            for (var r = 0; r < e; r++) {
                n.call(this, this[t][r]);
            }
        }, f.prototype._procSubBoxes = function (t, e) {
            for (var n = 0; n < e; n++) {
                this._rawo ? this[t][n].write() : this.size += this[t][n].getLength();
            }
        }, f.prototype.append = function (t, e) {
            c.default.appendBox(this, t, e);
        }, f.prototype.getLength = function () {
            if (this._rawo = null, this.size = 0, this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), this._boxContainers.indexOf(this.type) !== -1) for (var t = 0; t < this.boxes.length; t++) {
                this.size += this.boxes[t].getLength();
            }return this._data && this._writeData(this._data), this.size;
        }, f.prototype.write = function () {
            if (this._cursor.offset = this._parent._cursor.offset, 0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size), this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), this._boxContainers.indexOf(this.type) !== -1) for (var t = 0; t < this.boxes.length; t++) {
                this.boxes[t].write();
            }return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size;
        }, f.prototype._writeInt = function (t, e) {
            if (this._rawo) {
                var n = this._cursor.offset - this._rawo.byteOffset;
                switch (t) {
                    case 8:
                        this._rawo.setInt8(n, e);
                        break;
                    case 16:
                        this._rawo.setInt16(n, e);
                        break;
                    case 32:
                        this._rawo.setInt32(n, e);
                        break;
                    case 64:
                        var r = Math.floor(e / Math.pow(2, 32)),
                            i = e - r * Math.pow(2, 32);
                        this._rawo.setUint32(n, r), this._rawo.setUint32(n + 4, i);
                }
                this._cursor.offset += t >> 3;
            } else this.size += t >> 3;
        }, f.prototype._writeUint = function (t, e) {
            if (this._rawo) {
                var n,
                    r,
                    i = this._cursor.offset - this._rawo.byteOffset;
                switch (t) {
                    case 8:
                        this._rawo.setUint8(i, e);
                        break;
                    case 16:
                        this._rawo.setUint16(i, e);
                        break;
                    case 24:
                        n = (16776960 & e) >> 8, r = 255 & e, this._rawo.setUint16(i, n), this._rawo.setUint8(i + 2, r);
                        break;
                    case 32:
                        this._rawo.setUint32(i, e);
                        break;
                    case 64:
                        n = Math.floor(e / Math.pow(2, 32)), r = e - n * Math.pow(2, 32), this._rawo.setUint32(i, n), this._rawo.setUint32(i + 4, r);
                }
                this._cursor.offset += t >> 3;
            } else this.size += t >> 3;
        }, f.prototype._writeString = function (t, e) {
            for (var n = 0; n < t; n++) {
                this._writeUint(8, e.charCodeAt(n));
            }
        }, f.prototype._writeTerminatedString = function (t) {
            if (0 !== t.length) {
                for (var e = 0; e < t.length; e++) {
                    this._writeUint(8, t.charCodeAt(e));
                }this._writeUint(8, 0);
            }
        }, f.prototype._writeTemplate = function (t, e) {
            var n = Math.floor(e),
                r = (e - n) * Math.pow(2, t / 2);
            this._writeUint(t / 2, n), this._writeUint(t / 2, r);
        }, f.prototype._writeData = function (t) {
            if (t instanceof Array && (t = new DataView(new Uint8Array(t).buffer)), t instanceof Uint8Array && (t = new DataView(t.buffer)), this._rawo) {
                for (var e = this._cursor.offset - this._rawo.byteOffset, n = 0; n < t.byteLength; n++) {
                    this._rawo.setUint8(e + n, t.getUint8(n));
                }this._cursor.offset += t.byteLength;
            } else this.size += t.byteLength;
        }, f.prototype._writeUTF8String = function (t) {
            var e = o.default.utf8ToByteArray(t);
            if (this._rawo) for (var n = new DataView(this._rawo.buffer, this._cursor.offset, e.length), r = 0; r < e.length; r++) {
                n.setUint8(r, e[r]);
            } else this.size += e.length;
        }, f.prototype._writeField = function (t, e, n) {
            switch (t) {
                case "uint":
                    this._writeUint(e, n);
                    break;
                case "int":
                    this._writeInt(e, n);
                    break;
                case "template":
                    this._writeTemplate(e, n);
                    break;
                case "string":
                    e == -1 ? this._writeTerminatedString(n) : this._writeString(e, n);
                    break;
                case "data":
                    this._writeData(n);
                    break;
                case "utf8":
                    this._writeUTF8String(n);
            }
        }, f.prototype._boxProcessors.avc1 = f.prototype._boxProcessors.encv = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeField("uint", 16, this.pre_defined1), this._writeField("uint", 16, this.reserved2), this._writeFieldArray("uint", 32, this.pre_defined2), this._writeField("uint", 16, this.width), this._writeField("uint", 16, this.height), this._writeField("template", 32, this.horizresolution), this._writeField("template", 32, this.vertresolution), this._writeField("uint", 32, this.reserved3), this._writeField("uint", 16, this.frame_count), this._writeFieldArray("uint", 8, this.compressorname), this._writeField("uint", 16, this.depth), this._writeField("int", 16, this.pre_defined3), this._writeField("data", -1, this.config);
        }, f.prototype._boxProcessors.dref = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count);
        }, f.prototype._boxProcessors.styp = f.prototype._boxProcessors.ftyp = function () {
            this._writeField("string", 4, this.major_brand), this._writeField("uint", 32, this.minor_version), this._writeFieldArray("string", 4, this.compatible_brands);
        }, f.prototype._boxProcessors.sidx = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.reference_ID), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.earliest_presentation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.first_offset), this._writeField("uint", 16, this.reserved), this._writeField("uint", 16, this.reference_count), this._procEntries("references", this.reference_count, function (t) {
                t.reference = (1 & t.reference_type) << 31, t.reference |= 2147483647 & t.referenced_size, t.sap = (1 & t.starts_with_SAP) << 31, t.sap |= (3 & t.SAP_type) << 28, t.sap |= 268435455 & t.SAP_delta_time, this._writeField("uint", 32, t.reference), this._writeField("uint", 32, t.subsegment_duration), this._writeField("uint", 32, t.sap);
            });
        }, f.prototype._boxProcessors.hdlr = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.pre_defined), this._writeField("string", 4, this.handler_type), this._writeFieldArray("uint", 32, this.reserved), this._writeField("string", -1, this.name);
        }, f.prototype._boxProcessors.mdat = function () {
            this._writeField("data", -1, this.data);
        }, f.prototype._boxProcessors.mdhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), "string" == typeof this.language && (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._writeField("uint", 16, this.language), this._writeField("uint", 16, this.pre_defined);
        }, f.prototype._boxProcessors.mehd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.fragment_duration);
        }, f.prototype._boxProcessors.mfhd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.sequence_number);
        }, f.prototype._boxProcessors.mp4a = f.prototype._boxProcessors.enca = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._writeField("data", -1, this.esds);
        }, f.prototype._boxProcessors[".mp3"] = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._procSubBoxes("entries", this.entry_count);
        }, f.prototype._boxProcessors.btrt = function () {
            this._writeField("uint", 32, this.bufferSizeDB), this._writeField("uint", 32, this.maxBitrate), this._writeField("uint", 32, this.avgBitrate);
        }, f.prototype._boxProcessors.mvhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeField("template", 32, this.rate), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved1), this._writeFieldArray("uint", 32, this.reserved2), this._writeFieldArray("template", 32, this.matrix), this._writeFieldArray("uint", 32, this.pre_defined), this._writeField("uint", 32, this.next_track_ID);
        }, f.prototype._boxProcessors.smhd = function () {
            this._writeFullBox(), this._writeField("uint", 16, this.balance), this._writeField("uint", 16, this.reserved);
        }, f.prototype._boxProcessors.stsd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count);
        }, f.prototype._boxProcessors.tfdt = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.baseMediaDecodeTime);
        }, f.prototype._boxProcessors.tfhd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.track_ID), 1 & this.flags && this._writeField("uint", 64, this.base_data_offset), 2 & this.flags && this._writeField("uint", 32, this.sample_description_offset), 8 & this.flags && this._writeField("uint", 32, this.default_sample_duration), 16 & this.flags && this._writeField("uint", 32, this.default_sample_size), 32 & this.flags && this._writeField("uint", 32, this.default_sample_flags);
        }, f.prototype._boxProcessors.tkhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.reserved1), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.layer), this._writeField("uint", 16, this.alternate_group), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved3), this._writeFieldArray("template", 32, this.matrix), this._writeField("template", 32, this.width), this._writeField("template", 32, this.height);
        }, f.prototype._boxProcessors.trex = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.default_sample_description_index), this._writeField("uint", 32, this.default_sample_duration), this._writeField("uint", 32, this.default_sample_size), this._writeField("uint", 32, this.default_sample_flags);
        }, f.prototype._boxProcessors.trun = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.sample_count), 1 & this.flags && this._writeField("int", 32, this.data_offset), 4 & this.flags && this._writeField("uint", 32, this.first_sample_flags), this._procEntries("samples", this.sample_count, function (t) {
                256 & this.flags && this._writeField("uint", 32, t.sample_duration), 512 & this.flags && this._writeField("uint", 32, t.sample_size), 1024 & this.flags && this._writeField("uint", 32, t.sample_flags), 2048 & this.flags && this._writeField(1 === this.version ? "int" : "uint", 32, t.sample_composition_time_offset);
            });
        }, f.prototype._boxProcessors["url "] = f.prototype._boxProcessors["urn "] = function () {
            this._writeFullBox(), "urn " === this.type && this._writeField("string", -1, this.name), this._writeField("string", -1, this.location);
        }, f.prototype._boxProcessors.vmhd = function () {
            this._writeFullBox(), this._writeField("uint", 16, this.graphicsmode), this._writeFieldArray("uint", 16, this.opcolor);
        }, e.default = f;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(135),
            o = r(i),
            a = n(137),
            s = r(a),
            u = {};
        u.createFile = function () {
            return new s.default();
        }, u.createBox = function (t, e, n) {
            var r = o.default.create(t);
            return e && e.append(r, n), r;
        }, u.createFullBox = function (t, e, n) {
            var r = u.createBox(t, e, n);
            return r.version = 0, r.flags = 0, r;
        }, e.default = u;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(49),
            o = r(i),
            a = n(90),
            s = r(a),
            u = function u() {
            this._cursor = new o.default(), this.boxes = [];
        };
        u.prototype.write = function () {
            var t = 0,
                e = 0;
            for (e = 0; e < this.boxes.length; e++) {
                t += this.boxes[e].getLength();
            }var n = new Uint8Array(t);
            for (this._rawo = new DataView(n.buffer), this.bytes = n, this._cursor.offset = 0, e = 0; e < this.boxes.length; e++) {
                this.boxes[e].write();
            }return n.buffer;
        }, u.prototype.append = function (t, e) {
            s.default.appendBox(this, t, e);
        }, e.default = u;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {};
        r.dataViewToString = function (t, e) {
            var n = e || "utf-8";
            if ("undefined" != typeof TextDecoder) return new TextDecoder(n).decode(t);
            var r = [],
                i = 0;
            if ("utf-8" === n) for (; i < t.byteLength;) {
                var o = t.getUint8(i++);
                o < 128 || (o < 224 ? (o = (31 & o) << 6, o |= 63 & t.getUint8(i++)) : o < 240 ? (o = (15 & o) << 12, o |= (63 & t.getUint8(i++)) << 6, o |= 63 & t.getUint8(i++)) : (o = (7 & o) << 18, o |= (63 & t.getUint8(i++)) << 12, o |= (63 & t.getUint8(i++)) << 6, o |= 63 & t.getUint8(i++))), r.push(String.fromCharCode(o));
            } else for (; i < t.byteLength;) {
                r.push(String.fromCharCode(t.getUint8(i++)));
            }return r.join("");
        }, r.utf8ToByteArray = function (t) {
            var e, n;
            if ("undefined" != typeof TextEncoder) e = new TextEncoder().encode(t);else for (e = [], n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                r < 128 ? e.push(r) : r < 2048 ? (e.push(192 | r >> 6), e.push(128 | 63 & r)) : r < 65536 ? (e.push(224 | r >> 12), e.push(128 | 63 & r >> 6), e.push(128 | 63 & r)) : (e.push(240 | r >> 18), e.push(128 | 63 & r >> 12), e.push(128 | 63 & r >> 6), e.push(128 | 63 & r));
            }
            return e;
        }, e.default = r;
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(140),
            o = r(i),
            a = n(141),
            s = r(a),
            u = {};
        u.createFile = function () {
            return new s.default();
        }, u.createElement = function (t, e, n) {
            var r = o.default.create(t, n);
            return e && (r._parent = e, e.elements.push(r)), r;
        }, e.default = u;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(49),
            i = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r),
            o = 281474976710656,
            a = {
            EBML: 440786851,
            EBMLVersion: 17030,
            EBMLReadVersion: 17143,
            EBMLMaxIDLength: 17138,
            EBMLMaxSizeLength: 17139,
            DocType: 17026,
            DocTypeVersion: 17031,
            DocTypeReadVersion: 17029,
            Segment: 408125543,
            SegmentInfo: 357149030,
            TimecodeScale: 2807729,
            MuxingApp: 19840,
            WritingApp: 22337,
            Duration: 17545,
            Tracks: 374648427,
            TrackEntry: 174,
            TrackNumber: 215,
            TrackUID: 29637,
            FlagLacing: 156,
            Language: 2274716,
            CodecID: 134,
            CodecName: 2459272,
            TrackType: 131,
            Video: 224,
            PixelWidth: 176,
            PixelHeight: 186,
            Cluster: 524531317,
            Timecode: 231,
            SimpleBlock: 163
        },
            s = function s() {
            this._cursor = new i.default();
        };
        s.create = function (t, e) {
            var n = new s();
            return n.id = a[t], n.elements = [], void 0 !== e && (n._data = e), n;
        }, s.prototype._elemProcessors = {}, s.prototype.getLength = function () {
            this._rawo = null, this.size = 0, this._idLength = this._measureUint(this.id);
            for (var t = 0; t < this.elements.length; t++) {
                this.size += this.elements[t].getLength();
            }return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._unbound ? this._sizeLength = 1 : this._sizeLength = this._measureVarInt(this.size), this.size + this._idLength + this._sizeLength;
        }, s.prototype.write = function () {
            this._cursor.offset = this._parent._cursor.offset;
            var t = this._idLength + this._sizeLength + this.size;
            0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, t), this._writeField("uint", this.id, this._idLength), this._unbound ? this._writeField("uint", 255, 1) : this._writeField("vint", this.size, this._sizeLength);
            for (var e = 0; e < this.elements.length; e++) {
                this.elements[e].write();
            }return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._parent._cursor.offset += t, t;
        }, s.prototype._setU8 = function (t) {
            this._rawo.setUint8(this._viewOffset, t), this._viewOffset++;
        }, s.prototype._writeData = function (t) {
            if (t instanceof Array && (t = new DataView(new Uint8Array(t).buffer)), t instanceof Uint8Array && (t = new DataView(t.buffer)), this._rawo) {
                for (var e = (this._cursor.offset, this._rawo.byteOffset, 0); e < t.byteLength; e++) {
                    this._setU8(t.getUint8(e));
                }this._cursor.offset += t.byteLength;
            } else this.size += t.byteLength;
        }, s.prototype._writeString = function (t) {
            if (this._rawo) {
                this._viewOffset = this._cursor.offset - this._rawo.byteOffset;
                for (var e = 0; e < t.length; e++) {
                    this._setU8(t.charCodeAt(e));
                }this._cursor.offset += t.length;
            } else this.size += t.length;
        }, s.prototype._writeVarInt = function (t, e) {
            if (void 0 === e && (e = this._measureVarInt(t)), this._rawo) {
                switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {
                    case 1:
                        this._setU8(128 | t);
                        break;
                    case 2:
                        this._setU8(64 | t >> 8);
                        break;
                    case 3:
                        this._setU8(32 | t >> 16);
                        break;
                    case 4:
                        this._setU8(16 | t >> 24);
                        break;
                    case 5:
                        this._setU8(8 | Math.floor(t / 4294967296));
                        break;
                    case 6:
                        this._setU8(4 | Math.floor(t / 1099511627776));
                        break;
                    case 7:
                        this._setU8(2 | Math.floor(t / o));
                        break;
                    case 8:
                        this._setU8(1);
                }
                switch (e) {
                    case 8:
                        this._setU8(Math.floor(t / o));
                    case 7:
                        this._setU8(Math.floor(t / 1099511627776));
                    case 6:
                        this._setU8(Math.floor(t / 4294967296));
                    case 5:
                        this._setU8(t >> 24);
                    case 4:
                        this._setU8(t >> 16);
                    case 3:
                        this._setU8(t >> 8);
                    case 2:
                        this._setU8(t);
                }
                this._cursor.offset += e;
            } else this.size += e;
        }, s.prototype._writeUint = function (t, e) {
            if (void 0 === e && (e = this._measureUint(t)), this._rawo) {
                switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {
                    case 8:
                        this._setU8(Math.floor(t / 72057594037927940));
                    case 7:
                        this._setU8(Math.floor(t / o));
                    case 6:
                        this._setU8(Math.floor(t / 1099511627776));
                    case 5:
                        this._setU8(Math.floor(t / 4294967296));
                    case 4:
                        this._setU8(t >> 24);
                    case 3:
                        this._setU8(t >> 16);
                    case 2:
                        this._setU8(t >> 8);
                    case 1:
                        this._setU8(t);
                        break;
                    default:
                        throw new RuntimeException("Bad UINT size", e);
                }
                this._cursor.offset += e;
            } else this.size += e;
        }, s.prototype._measureVarInt = function (t) {
            if (t < 127) return 1;
            if (t < 16383) return 2;
            if (t < 2097151) return 3;
            if (t < 268435455) return 4;
            if (t < 34359738367) return 5;
            if (t < 4398046511103) return 6;
            if (t < 562949953421311) return 7;
            if (t < 72057594037927940) return 8;
            throw new RuntimeException("EBML VINT size not supported", t);
        }, s.prototype._measureUint = function (t) {
            return t < 256 ? 1 : t < 65536 ? 2 : t < 16777216 ? 3 : t < 4294967296 ? 4 : t < 1099511627776 ? 5 : t < o ? 6 : t < 72057594037927940 ? 7 : 8;
        }, s.prototype._writeField = function (t, e, n) {
            switch (t) {
                case "uint":
                    this._writeUint(e, n);
                    break;
                case "vint":
                    this._writeVarInt(e, n);
                    break;
                case "string":
                    this._writeString(e, n);
                    break;
                case "data":
                    this._writeData(e);
            }
        }, s.prototype._processData = function (t) {
            "number" == typeof t ? this._writeField("uint", t) : "string" == typeof t ? this._writeField("string", t) : this._writeField("data", t);
        }, s.prototype._elemProcessors[163] = function () {
            this._writeField("vint", this.trackNumber), this._writeField("uint", this.timecode, 2);
            var t = this.sap ? 128 : 0;
            this._writeField("uint", t, 1), this._writeField("data", this.frame);
        }, e.default = s;
    }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(49),
            i = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r),
            o = function o() {
            this._cursor = new i.default(), this.elements = [];
        };
        o.prototype.write = function () {
            var t = 0,
                e = 0;
            for (e = 0; e < this.elements.length; e++) {
                t += this.elements[e].getLength();
            }var n = new Uint8Array(t);
            for (this._rawo = new DataView(n.buffer), this.bytes = n, this._cursor.offset = 0, e = 0; e < this.elements.length; e++) {
                this.elements[e].write();
            }return n.buffer;
        }, e.default = o;
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function i(t, e, n) {
            var r = [0, 0],
                i = Math.ceil(n / 4) - 1;
            if (i <= 1) for (var o = i; o >= 0; o--) {
                for (var a = Math.min(4, n - 4 * o), s = 0; s < a; s++) {
                    r[o] |= t[e + 4 * (i - o) + s] << 8 * (a - s - 1);
                }
            }return r[1] &= 131071, r[1] * Math.pow(2, 32) + (r[0] >>> 0);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(),
            a = n(11),
            s = function (t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a),
            u = {
            1e3: "CLOSE_NORMAL",
            1001: "CLOSE_GOING_AWAY",
            1002: "CLOSE_PROTOCOL_ERROR",
            1003: "CLOSE_UNSUPPORTED",
            1005: "CLOSE_NO_STATUS",
            1006: "CLOSE_ABNORMAL",
            1007: "Unsupported Data",
            1008: "Policy Violation",
            1009: "CLOSE_TOO_LARGE",
            1010: "Missing Extension",
            1011: "Internal Error",
            1012: "Service Restart",
            1013: "Try Again Later",
            1015: "TLS Handshake"
        },
            c = {
            WEB_AAC_SEQUENCE_HEADER: 0,
            WEB_AAC_FRAME: 1,
            WEB_AVC_SEQUENCE_HEADER: 2,
            WEB_AVC_KEY_FRAME: 3,
            WEB_AVC_FRAME: 4,
            WEB_HEVC_SEQUENCE_HEADER: 5,
            WEB_HEVC_KEY_FRAME: 6,
            WEB_HEVC_FRAME: 7,
            WEB_VP6_KEY_FRAME: 8,
            WEB_VP6_FRAME: 9,
            WEB_VP8_KEY_FRAME: 10,
            WEB_VP8_FRAME: 11,
            WEB_VP9_KEY_FRAME: 12,
            WEB_VP9_FRAME: 13,
            WEB_MP3: 14
        },
            f = function () {
            function t(e) {
                r(this, t), this.metricsManager = e, this.curSocketId = 0, this.isLogging = !1, this.loggerData = {
                    video: {
                        frames: [],
                        prevTime: 0,
                        sumTimes: 0,
                        times: [],
                        thresh: 60,
                        avg: void 0
                    },
                    audio: {
                        frames: [],
                        prevTime: 0,
                        sumTimes: 0,
                        times: [],
                        thresh: 60,
                        avg: void 0
                    }
                };
            }
            return o(t, [{
                key: "open",
                value: function value(t) {
                    function e(t, e) {
                        t.isLogging && void 0 === t.loggerData[e] && (t.loggerData[e] = {
                            frames: [],
                            prevTime: 0,
                            sumTimes: 0,
                            times: [],
                            thresh: 60,
                            avg: void 0
                        });
                    }

                    function n(t, e, n, r) {
                        if (t.isLogging) {
                            var i = t.loggerData[e],
                                o = 0;
                            if (i.times.length > 0) {
                                var a = new Date();
                                o = a - i.prevTime, i.prevTime = a;
                            } else i.prevTime = new Date();
                            if (i.frames.length == i.thresh) {
                                if (s.default.debug("[WS]: received " + i.thresh + " " + e + " frames"), void 0 === i.avg) for (var u = 1; u < i.thresh; u++) {
                                    var c = i.frames[u][1] - i.frames[u - 1][1];
                                    if (c > 0) {
                                        i.avg = c;
                                        break;
                                    }
                                }
                                for (var f = [], l = 0; l < i.frames.length; l++) {
                                    f.push("[" + i.frames[l].join(" ") + "]");
                                }s.default.debug("[WS] frames: [" + f.join(", ") + "]"), i.sumTime > i.avg * i.thresh && s.default.debug("Frames come slow!!!", i.sumTime, i.avg * i.thresh), i.frames = [], i.times = [], i.sumTimes = 0;
                            }
                            i.frames.push([r, n, o]), i.sumTimes += o, i.times.push(o);
                        }
                    }
                    try {
                        if ("ws" != t.substring(0, 2) && (t = "ws://" + t), void 0 !== this.socket) throw s.default.error("Attempt to open socket when socket exists!", this.socket, t), "Socket open error";
                        this.socket = new WebSocket(t, ["sldp.softvelum.com"]);
                    } catch (t) {
                        return void s.default.error(t.message);
                    }
                    return this.socket.binaryType = "arraybuffer", this.socket.sampleCounter = 0, this.socket.transport = this, this.socket.socketId = ++this.curSocketId, this.socket.onopen = function () {
                        s.default.debug("[WS]", "Connection established.");
                    }, this.socket.onclose = function (t) {
                        t.wasClean ? s.default.debug("Connection closed clean") : (s.default.debug("Connection dropped", this), this.socketId == this.transport.curSocketId && (3 == this.readyState && (this.transport.socket = void 0), this.transport.onConnectionClosedCallback && (s.default.debug("Call onConnectionClosed"), this.transport.onConnectionClosedCallback())));
                        var e = u[t.code] || "";
                        s.default.debug("Code: " + t.code + "(" + e + ") reason: " + t.reason);
                    }, this.socket.onmessage = function (t) {
                        if (t.data instanceof ArrayBuffer) {
                            var r = new Uint8Array(t.data),
                                o = r[0],
                                a = r[1],
                                u = void 0,
                                f = r.byteLength;
                            switch (a) {
                                case c.WEB_AAC_SEQUENCE_HEADER:
                                case c.WEB_AVC_SEQUENCE_HEADER:
                                    if (s.default.debug("Init segment for ", o, a), this.transport.onInitSegmentReceivedCallback) {
                                        var l = r.subarray(2, r.byteLength);
                                        this.transport.onInitSegmentReceivedCallback(o, l), this.transport.metricsManager.run(o), e(this.transport, o);
                                    }
                                    break;
                                case c.WEB_MP3:
                                    if (this.transport.metricsManager.isReadyToStart(o)) {
                                        var h = r.subarray(10, 14);
                                        this.transport.onInitSegmentReceivedCallback(o, h), this.transport.metricsManager.run(o), e(this.transport, o);
                                    }
                                case c.WEB_AAC_FRAME:
                                    if (this.transport.onDataReceivedCallback) {
                                        u = i(r, 2, 7);
                                        var d = r.subarray(10, r.byteLength);
                                        this.transport.onDataReceivedCallback(o, !0, d, u, 0), n(this.transport, "audio", u, o);
                                    }
                                    break;
                                case c.WEB_AVC_KEY_FRAME:
                                case c.WEB_AVC_FRAME:
                                    if (this.transport.onDataReceivedCallback) {
                                        u = i(r, 2, 7);
                                        var p = i(r, 10, 4),
                                            v = r.subarray(14, r.byteLength),
                                            m = c.WEB_AVC_KEY_FRAME == a;
                                        this.transport.onDataReceivedCallback(o, m, v, u, p), n(this.transport, "video", u, o);
                                    }
                                    break;
                                case c.WEB_VP8_KEY_FRAME:
                                case c.WEB_VP9_KEY_FRAME:
                                    this.transport.metricsManager.isReadyToStart(o) && (this.transport.onInitSegmentReceivedCallback(o, null), this.transport.metricsManager.run(o), e(this.transport, o));
                                case c.WEB_VP8_FRAME:
                                case c.WEB_VP9_FRAME:
                                    if (this.transport.onDataReceivedCallback) {
                                        u = i(r, 2, 7);
                                        var g = r.subarray(10, r.byteLength),
                                            b = c.WEB_VP8_KEY_FRAME == a || c.WEB_VP9_KEY_FRAME == a;
                                        this.transport.onDataReceivedCallback(o, b, g, u, 0);
                                    }
                                    break;
                                default:
                                    s.default.error("Unknown type of frame received ", a);
                            }
                            this.transport.metricsManager.reportBandwidth(o, f, u), 0 == this.sampleCounter % 1e3 && s.default.debug("sampleCounter", this.sampleCounter), this.sampleCounter += 1;
                        } else {
                            s.default.debug("Received", t.data);
                            var _ = JSON.parse(t.data);
                            "status" == _.command && this.transport.onStatusReceivedCallback && this.transport.onStatusReceivedCallback(_.info);
                        }
                    }, this.socket.onerror = function (t) {
                        s.default.error("Error happens:", t);
                    }, this.socket;
                }
            }, {
                key: "send",
                value: function value(t) {
                    this.socket.send(JSON.stringify(t));
                }
            }, {
                key: "close",
                value: function value() {
                    s.default.debug("Socket close ", this.socket), this.socket && (this.socket.close(1e3), this.socket = void 0), this.onStatusReceivedCallback = void 0, this.onInitSegmentReceivedCallback = void 0, this.onDataReceivedCallback = void 0, this.onConnectionClosedCallback = void 0;
                }
            }, {
                key: "callbacks",
                set: function set(t) {
                    this.onStatusReceivedCallback = t.onStatusReceived, this.onInitSegmentReceivedCallback = t.onInitSegmentReceived, this.onDataReceivedCallback = t.onDataReceived, this.onConnectionClosedCallback = t.onConnectionClosed;
                }
            }]), t;
        }();
        e.default = f;
    }, function (t, e, n) {
        n(152), t.exports = n(25).RegExp.escape;
    }, function (t, e, n) {
        var r = n(4),
            i = n(70),
            o = n(5)("species");
        t.exports = function (t) {
            var e;
            return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e;
        };
    }, function (t, e, n) {
        var r = n(144);
        t.exports = function (t, e) {
            return new (r(t))(e);
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(1),
            i = n(24);
        t.exports = function (t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return i(r(this), "number" != t);
        };
    }, function (t, e, n) {
        var r = n(36),
            i = n(58),
            o = n(48);
        t.exports = function (t) {
            var e = r(t),
                n = i.f;
            if (n) for (var a, s = n(t), u = o.f, c = 0; s.length > c;) {
                u.call(t, a = s[c++]) && e.push(a);
            }return e;
        };
    }, function (t, e, n) {
        var r = n(36),
            i = n(16);
        t.exports = function (t, e) {
            for (var n, o = i(t), a = r(o), s = a.length, u = 0; s > u;) {
                if (o[n = a[u++]] === e) return n;
            }
        };
    }, function (t, e, n) {
        "use strict";

        var r = n(150),
            i = n(54),
            o = n(12);
        t.exports = function () {
            for (var t = o(this), e = arguments.length, n = Array(e), a = 0, s = r._, u = !1; e > a;) {
                (n[a] = arguments[a++]) === s && (u = !0);
            }return function () {
                var r,
                    o = this,
                    a = arguments.length,
                    c = 0,
                    f = 0;
                if (!u && !a) return i(t, n, o);
                if (r = n.slice(), u) for (; e > c; c++) {
                    r[c] === s && (r[c] = arguments[f++]);
                }for (; a > f;) {
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
            } : e;
            return function (e) {
                return String(e).replace(t, n);
            };
        };
    }, function (t, e, n) {
        var r = n(0),
            i = n(151)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        r(r.S, "RegExp", {
            escape: function escape(t) {
                return i(t);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P, "Array", {
            copyWithin: n(92)
        }), n(41)("copyWithin");
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(4);
        r(r.P + r.F * !n(21)([].every, !0), "Array", {
            every: function every(t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P, "Array", {
            fill: n(62)
        }), n(41)("fill");
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(2);
        r(r.P + r.F * !n(21)([].filter, !0), "Array", {
            filter: function filter(t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            findIndex: function findIndex(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), n(41)(o);
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(5),
            o = !0;
        "find" in [] && Array(1).find(function () {
            o = !1;
        }), r(r.P + r.F * o, "Array", {
            find: function find(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), n(41)("find");
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(0),
            o = n(21)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
            forEach: function forEach(t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(26),
            i = n(0),
            o = n(9),
            a = n(101),
            s = n(69),
            u = n(8),
            c = n(63),
            f = n(86);
        i(i.S + i.F * !n(56)(function (t) {
            Array.from(t);
        }), "Array", {
            from: function from(t) {
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
                    b = f(h);
                if (m && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == b || d == Array && s(b)) for (e = u(h.length), n = new d(e); e > g; g++) {
                    c(n, g, m ? v(h[g], g) : h[g]);
                } else for (l = b.call(h), n = new d(); !(i = l.next()).done; g++) {
                    c(n, g, m ? a(l, v, [i.value, g], !0) : i.value);
                }return n.length = g, n;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(50)(!1),
            o = [].indexOf,
            a = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (a || !n(21)(o)), "Array", {
            indexOf: function indexOf(t) {
                return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Array", {
            isArray: n(70)
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(16),
            o = [].join;
        r(r.P + r.F * (n(47) != Object || !n(21)(o)), "Array", {
            join: function join(t) {
                return o.call(i(this), void 0 === t ? "," : t);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(16),
            o = n(31),
            a = n(8),
            s = [].lastIndexOf,
            u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (u || !n(21)(s)), "Array", {
            lastIndexOf: function lastIndexOf(t) {
                if (u) return s.apply(this, arguments) || 0;
                var e = i(this),
                    n = a(e.length),
                    r = n - 1;
                for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--) {
                    if (r in e && e[r] === t) return r || 0;
                }return -1;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(1);
        r(r.P + r.F * !n(21)([].map, !0), "Array", {
            map: function map(t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(63);
        r(r.S + r.F * n(3)(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t);
        }), "Array", { of: function of() {
                for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) {
                    i(n, t, arguments[t++]);
                }return n.length = e, n;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(94);
        r(r.P + r.F * !n(21)([].reduceRight, !0), "Array", {
            reduceRight: function reduceRight(t) {
                return i(this, t, arguments.length, arguments[1], !0);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(94);
        r(r.P + r.F * !n(21)([].reduce, !0), "Array", {
            reduce: function reduce(t) {
                return i(this, t, arguments.length, arguments[1], !1);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(67),
            o = n(19),
            a = n(39),
            s = n(8),
            u = [].slice;
        r(r.P + r.F * n(3)(function () {
            i && u.call(i);
        }), "Array", {
            slice: function slice(t, e) {
                var n = s(this.length),
                    r = o(this);
                if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
                for (var i = a(t, n), c = a(e, n), f = s(c - i), l = Array(f), h = 0; h < f; h++) {
                    l[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                }return l;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(22)(3);
        r(r.P + r.F * !n(21)([].some, !0), "Array", {
            some: function some(t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(12),
            o = n(9),
            a = n(3),
            s = [].sort,
            u = [1, 2, 3];
        r(r.P + r.F * (a(function () {
            u.sort(void 0);
        }) || !a(function () {
            u.sort(null);
        }) || !n(21)(s)), "Array", {
            sort: function sort(t) {
                return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t));
            }
        });
    }, function (t, e, n) {
        n(38)("Array");
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Date", {
            now: function now() {
                return new Date().getTime();
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(3),
            o = Date.prototype.getTime,
            a = function a(t) {
            return t > 9 ? t : "0" + t;
        };
        r(r.P + r.F * (i(function () {
            return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString();
        }) || !i(function () {
            new Date(NaN).toISOString();
        })), "Date", {
            toISOString: function toISOString() {
                if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
                var t = this,
                    e = t.getUTCFullYear(),
                    n = t.getUTCMilliseconds(),
                    r = e < 0 ? "-" : e > 9999 ? "+" : "";
                return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(9),
            o = n(24);
        r(r.P + r.F * n(3)(function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function toISOString() {
                    return 1;
                }
            });
        }), "Date", {
            toJSON: function toJSON(t) {
                var e = i(this),
                    n = o(e);
                return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
            }
        });
    }, function (t, e, n) {
        var r = n(5)("toPrimitive"),
            i = Date.prototype;
        r in i || n(13)(i, r, n(146));
    }, function (t, e, n) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(14)(r, "toString", function () {
            var t = o.call(this);
            return t === t ? i.call(this) : "Invalid Date";
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P, "Function", {
            bind: n(95)
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(4),
            i = n(18),
            o = n(5)("hasInstance"),
            a = Function.prototype;
        o in a || n(7).f(a, o, {
            value: function value(t) {
                if ("function" != typeof this || !r(t)) return !1;
                if (!r(this.prototype)) return t instanceof this;
                for (; t = i(t);) {
                    if (this.prototype === t) return !0;
                }return !1;
            }
        });
    }, function (t, e, n) {
        var r = n(7).f,
            i = n(30),
            o = n(10),
            a = Function.prototype,
            s = Object.isExtensible || function () {
            return !0;
        };
        "name" in a || n(6) && r(a, "name", {
            configurable: !0,
            get: function get() {
                try {
                    var t = this,
                        e = ("" + t).match(/^\s*function ([^ (]*)/)[1];
                    return o(t, "name") || !s(t) || r(t, "name", i(5, e)), e;
                } catch (t) {
                    return "";
                }
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(103),
            o = Math.sqrt,
            a = Math.acosh;
        r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
            acosh: function acosh(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
            }
        });
    }, function (t, e, n) {
        function r(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -r(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t;
        }
        var i = n(0),
            o = Math.asinh;
        i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", {
            asinh: r
        });
    }, function (t, e, n) {
        var r = n(0),
            i = Math.atanh;
        r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function atanh(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(74);
        r(r.S, "Math", {
            cbrt: function cbrt(t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            clz32: function clz32(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = Math.exp;
        r(r.S, "Math", {
            cosh: function cosh(t) {
                return (i(t = +t) + i(-t)) / 2;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(73);
        r(r.S + r.F * (i != Math.expm1), "Math", {
            expm1: i
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(74),
            o = Math.pow,
            a = o(2, -52),
            s = o(2, -23),
            u = o(2, 127) * (2 - s),
            c = o(2, -126),
            f = function f(t) {
            return t + 1 / a - 1 / a;
        };
        r(r.S, "Math", {
            fround: function fround(t) {
                var e,
                    n,
                    r = Math.abs(t),
                    o = i(t);
                return r < c ? o * f(r / c / s) * c * s : (e = (1 + s / a) * r, n = e - (e - r), n > u || n != n ? o * (1 / 0) : o * n);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = Math.abs;
        r(r.S, "Math", {
            hypot: function hypot(t, e) {
                for (var n, r, o = 0, a = 0, s = arguments.length, u = 0; a < s;) {
                    n = i(arguments[a++]), u < n ? (r = u / n, o = o * r * r + 1, u = n) : n > 0 ? (r = n / u, o += r * r) : o += n;
                }return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = Math.imul;
        r(r.S + r.F * n(3)(function () {
            return i(4294967295, 5) != -5 || 2 != i.length;
        }), "Math", {
            imul: function imul(t, e) {
                var n = +t,
                    r = +e,
                    i = 65535 & n,
                    o = 65535 & r;
                return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log10: function log10(t) {
                return Math.log(t) / Math.LN10;
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log1p: n(103)
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log2: function log2(t) {
                return Math.log(t) / Math.LN2;
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            sign: n(74)
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(73),
            o = Math.exp;
        r(r.S + r.F * n(3)(function () {
            return !Math.sinh(-2e-17) != -2e-17;
        }), "Math", {
            sinh: function sinh(t) {
                return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(73),
            o = Math.exp;
        r(r.S, "Math", {
            tanh: function tanh(t) {
                var e = i(t = +t),
                    n = i(-t);
                return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t));
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            trunc: function trunc(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(2),
            i = n(10),
            o = n(19),
            a = n(68),
            s = n(24),
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
            b = function b(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                e = g ? e.trim() : h(e, 3);
                var n,
                    r,
                    i,
                    o = e.charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +e;
                    }
                    for (var a, u = e.slice(2), c = 0, f = u.length; c < f; c++) {
                        if ((a = u.charCodeAt(c)) < 48 || a > i) return NaN;
                    }return parseInt(u, r);
                }
            }
            return +e;
        };
        if (!_d(" 0o1") || !_d("0b1") || _d("+0x1")) {
            _d = function d(t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof _d && (m ? u(function () {
                    v.valueOf.call(n);
                }) : "Number" != o(n)) ? a(new p(b(e)), n, _d) : b(e);
            };
            for (var _, A = n(6) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), y = 0; A.length > y; y++) {
                i(p, _ = A[y]) && !i(_d, _) && l(_d, _, f(p, _));
            }_d.prototype = v, v.constructor = _d, n(14)(r, "Number", _d);
        }
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            EPSILON: Math.pow(2, -52)
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(2).isFinite;
        r(r.S, "Number", {
            isFinite: function isFinite(t) {
                return "number" == typeof t && i(t);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            isInteger: n(100)
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            isNaN: function isNaN(t) {
                return t != t;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(100),
            o = Math.abs;
        r(r.S, "Number", {
            isSafeInteger: function isSafeInteger(t) {
                return i(t) && o(t) <= 9007199254740991;
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(110);
        r(r.S + r.F * (Number.parseFloat != i), "Number", {
            parseFloat: i
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(111);
        r(r.S + r.F * (Number.parseInt != i), "Number", {
            parseInt: i
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(31),
            o = n(91),
            a = n(81),
            s = 1..toFixed,
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
                    var n = String(c[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
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
        };
        r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(3)(function () {
            s.call({});
        })), "Number", {
            toFixed: function toFixed(t) {
                var e,
                    n,
                    r,
                    s,
                    u = o(this, f),
                    c = i(t),
                    m = "",
                    g = "0";
                if (c < 0 || c > 20) throw RangeError(f);
                if (u != u) return "NaN";
                if (u <= -1e21 || u >= 1e21) return String(u);
                if (u < 0 && (m = "-", u = -u), u > 1e-21) if (e = v(u * p(2, 69, 1)) - 69, n = e < 0 ? u * p(2, -e, 1) : u / p(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (l(0, n), r = c; r >= 7;) {
                        l(1e7, 0), r -= 7;
                    }for (l(p(10, r, 1), 0), r = e - 1; r >= 23;) {
                        h(1 << 23), r -= 23;
                    }h(1 << r), l(1, 1), h(2), g = d();
                } else l(0, n), l(1 << -e, 0), g = d() + a.call("0", c);
                return c > 0 ? (s = g.length, g = m + (s <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c))) : g = m + g, g;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(3),
            o = n(91),
            a = 1..toPrecision;
        r(r.P + r.F * (i(function () {
            return "1" !== a.call(1, void 0);
        }) || !i(function () {
            a.call({});
        })), "Number", {
            toPrecision: function toPrecision(t) {
                var e = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? a.call(e) : a.call(e, t);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S + r.F, "Object", {
            assign: n(104)
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            create: n(34)
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S + r.F * !n(6), "Object", {
            defineProperties: n(105)
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S + r.F * !n(6), "Object", {
            defineProperty: n(7).f
        });
    }, function (t, e, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(23)("freeze", function (t) {
            return function (e) {
                return t && r(e) ? t(i(e)) : e;
            };
        });
    }, function (t, e, n) {
        var r = n(16),
            i = n(17).f;
        n(23)("getOwnPropertyDescriptor", function () {
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
            i = n(18);
        n(23)("getPrototypeOf", function () {
            return function (t) {
                return i(r(t));
            };
        });
    }, function (t, e, n) {
        var r = n(4);
        n(23)("isExtensible", function (t) {
            return function (e) {
                return !!r(e) && (!t || t(e));
            };
        });
    }, function (t, e, n) {
        var r = n(4);
        n(23)("isFrozen", function (t) {
            return function (e) {
                return !r(e) || !!t && t(e);
            };
        });
    }, function (t, e, n) {
        var r = n(4);
        n(23)("isSealed", function (t) {
            return function (e) {
                return !r(e) || !!t && t(e);
            };
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            is: n(112)
        });
    }, function (t, e, n) {
        var r = n(9),
            i = n(36);
        n(23)("keys", function () {
            return function (t) {
                return i(r(t));
            };
        });
    }, function (t, e, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(23)("preventExtensions", function (t) {
            return function (e) {
                return t && r(e) ? t(i(e)) : e;
            };
        });
    }, function (t, e, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(23)("seal", function (t) {
            return function (e) {
                return t && r(e) ? t(i(e)) : e;
            };
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            setPrototypeOf: n(76).set
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(46),
            i = {};
        i[n(5)("toStringTag")] = "z", i + "" != "[object z]" && n(14)(Object.prototype, "toString", function () {
            return "[object " + r(this) + "]";
        }, !0);
    }, function (t, e, n) {
        var r = n(0),
            i = n(110);
        r(r.G + r.F * (parseFloat != i), {
            parseFloat: i
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(111);
        r(r.G + r.F * (parseInt != i), {
            parseInt: i
        });
    }, function (t, e, n) {
        "use strict";

        var r,
            i,
            o,
            a = n(33),
            s = n(2),
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
            b = s.TypeError,
            _ = s.process,
            _A = s.Promise,
            _ = s.process,
            y = "process" == c(_),
            w = function w() {},
            S = !!function () {
            try {
                var t = _A.resolve(1),
                    e = (t.constructor = {})[n(5)("species")] = function (t) {
                    t(w, w);
                };
                return (y || "function" == typeof PromiseRejectionEvent) && t.then(w) instanceof e;
            } catch (t) {}
        }(),
            x = function x(t, e) {
            return t === e || t === _A && e === o;
        },
            E = function E(t) {
            var e;
            return !(!l(t) || "function" != typeof (e = t.then)) && e;
        },
            T = function T(t) {
            return x(_A, t) ? new k(t) : new i(t);
        },
            k = i = function i(t) {
            var e, n;
            this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw b("Bad Promise constructor");
                e = t, n = r;
            }), this.resolve = h(e), this.reject = h(n);
        },
            C = function C(t) {
            try {
                t();
            } catch (t) {
                return {
                    error: t
                };
            }
        },
            F = function F(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                g(function () {
                    for (var r = t._v, i = 1 == t._s, o = 0; n.length > o;) {
                        !function (e) {
                            var n,
                                o,
                                a = i ? e.ok : e.fail,
                                s = e.resolve,
                                u = e.reject,
                                c = e.domain;
                            try {
                                a ? (i || (2 == t._h && P(t), t._h = 1), a === !0 ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === e.promise ? u(b("Promise-chain cycle")) : (o = E(n)) ? o.call(n, s, u) : s(n)) : u(r);
                            } catch (t) {
                                u(t);
                            }
                        }(n[o++]);
                    }t._c = [], t._n = !1, e && !t._h && B(t);
                });
            }
        },
            B = function B(t) {
            m.call(s, function () {
                var e,
                    n,
                    r,
                    i = t._v;
                if (M(t) && (e = C(function () {
                    y ? _.emit("unhandledRejection", i, t) : (n = s.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", i);
                }), t._h = y || M(t) ? 2 : 1), t._a = void 0, e) throw e.error;
            });
        },
            M = function M(t) {
            if (1 == t._h) return !1;
            for (var e, n = t._a || t._c, r = 0; n.length > r;) {
                if (e = n[r++], e.fail || !M(e.promise)) return !1;
            }return !0;
        },
            P = function P(t) {
            m.call(s, function () {
                var e;
                y ? _.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                });
            });
        },
            I = function I(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), F(e, !0));
        },
            L = function L(t) {
            var e,
                n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw b("Promise can't be resolved itself");
                    (e = E(t)) ? g(function () {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, u(L, r, 1), u(I, r, 1));
                        } catch (t) {
                            I.call(r, t);
                        }
                    }) : (n._v = t, n._s = 1, F(n, !1));
                } catch (t) {
                    I.call({
                        _w: n,
                        _d: !1
                    }, t);
                }
            }
        };
        S || (_A = function A(t) {
            d(this, _A, "Promise", "_h"), h(t), r.call(this);
            try {
                t(u(L, this, 1), u(I, this, 1));
            } catch (t) {
                I.call(this, t);
            }
        }, r = function r(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
        }, r.prototype = n(37)(_A.prototype, {
            then: function then(t, e) {
                var n = T(v(this, _A));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = y ? _.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), n.promise;
            },
            catch: function _catch(t) {
                return this.then(void 0, t);
            }
        }), k = function k() {
            var t = new r();
            this.promise = t, this.resolve = u(L, t, 1), this.reject = u(I, t, 1);
        }), f(f.G + f.W + f.F * !S, {
            Promise: _A
        }), n(44)(_A, "Promise"), n(38)("Promise"), o = n(25).Promise, f(f.S + f.F * !S, "Promise", {
            reject: function reject(t) {
                var e = T(this);
                return (0, e.reject)(t), e.promise;
            }
        }), f(f.S + f.F * (a || !S), "Promise", {
            resolve: function resolve(t) {
                if (t instanceof _A && x(t.constructor, this)) return t;
                var e = T(this);
                return (0, e.resolve)(t), e.promise;
            }
        }), f(f.S + f.F * !(S && n(56)(function (t) {
            _A.all(t).catch(w);
        })), "Promise", {
            all: function all(t) {
                var e = this,
                    n = T(e),
                    r = n.resolve,
                    i = n.reject,
                    o = C(function () {
                    var n = [],
                        o = 0,
                        a = 1;
                    p(t, !1, function (t) {
                        var s = o++,
                            u = !1;
                        n.push(void 0), a++, e.resolve(t).then(function (t) {
                            u || (u = !0, n[s] = t, --a || r(n));
                        }, i);
                    }), --a || r(n);
                });
                return o && i(o.error), n.promise;
            },
            race: function race(t) {
                var e = this,
                    n = T(e),
                    r = n.reject,
                    i = C(function () {
                    p(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r);
                    });
                });
                return i && r(i.error), n.promise;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(12),
            o = n(1),
            a = (n(2).Reflect || {}).apply,
            s = Function.apply;
        r(r.S + r.F * !n(3)(function () {
            a(function () {});
        }), "Reflect", {
            apply: function apply(t, e, n) {
                var r = i(t),
                    u = o(n);
                return a ? a(r, e, u) : s.call(r, e, u);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(34),
            o = n(12),
            a = n(1),
            s = n(4),
            u = n(3),
            c = n(95),
            f = (n(2).Reflect || {}).construct,
            l = u(function () {
            function t() {}
            return !(f(function () {}, [], t) instanceof t);
        }),
            h = !u(function () {
            f(function () {});
        });
        r(r.S + r.F * (l || h), "Reflect", {
            construct: function construct(t, e) {
                o(t), a(e);
                var n = arguments.length < 3 ? t : o(arguments[2]);
                if (h && !l) return f(t, e, n);
                if (t == n) {
                    switch (e.length) {
                        case 0:
                            return new t();
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0], e[1]);
                        case 3:
                            return new t(e[0], e[1], e[2]);
                        case 4:
                            return new t(e[0], e[1], e[2], e[3]);
                    }
                    var r = [null];
                    return r.push.apply(r, e), new (c.apply(t, r))();
                }
                var u = n.prototype,
                    d = i(s(u) ? u : Object.prototype),
                    p = Function.apply.call(t, d, e);
                return s(p) ? p : d;
            }
        });
    }, function (t, e, n) {
        var r = n(7),
            i = n(0),
            o = n(1),
            a = n(24);
        i(i.S + i.F * n(3)(function () {
            Reflect.defineProperty(r.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            });
        }), "Reflect", {
            defineProperty: function defineProperty(t, e, n) {
                o(t), e = a(e, !0), o(n);
                try {
                    return r.f(t, e, n), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(17).f,
            o = n(1);
        r(r.S, "Reflect", {
            deleteProperty: function deleteProperty(t, e) {
                var n = i(o(t), e);
                return !(n && !n.configurable) && delete t[e];
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(1),
            o = function o(t) {
            this._t = i(t), this._i = 0;
            var e,
                n = this._k = [];
            for (e in t) {
                n.push(e);
            }
        };
        n(71)(o, "Object", function () {
            var t,
                e = this,
                n = e._k;
            do {
                if (e._i >= n.length) return {
                    value: void 0,
                    done: !0
                };
            } while (!((t = n[e._i++]) in e._t));
            return {
                value: t,
                done: !1
            };
        }), r(r.S, "Reflect", {
            enumerate: function enumerate(t) {
                return new o(t);
            }
        });
    }, function (t, e, n) {
        var r = n(17),
            i = n(0),
            o = n(1);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
                return r.f(o(t), e);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(18),
            o = n(1);
        r(r.S, "Reflect", {
            getPrototypeOf: function getPrototypeOf(t) {
                return i(o(t));
            }
        });
    }, function (t, e, n) {
        function r(t, e) {
            var n,
                s,
                f = arguments.length < 3 ? t : arguments[2];
            return c(t) === f ? t[e] : (n = i.f(t, e)) ? a(n, "value") ? n.value : void 0 !== n.get ? n.get.call(f) : void 0 : u(s = o(t)) ? r(s, e, f) : void 0;
        }
        var i = n(17),
            o = n(18),
            a = n(10),
            s = n(0),
            u = n(4),
            c = n(1);
        s(s.S, "Reflect", {
            get: r
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            has: function has(t, e) {
                return e in t;
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(1),
            o = Object.isExtensible;
        r(r.S, "Reflect", {
            isExtensible: function isExtensible(t) {
                return i(t), !o || o(t);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            ownKeys: n(109)
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(1),
            o = Object.preventExtensions;
        r(r.S, "Reflect", {
            preventExtensions: function preventExtensions(t) {
                i(t);
                try {
                    return o && o(t), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(76);
        i && r(r.S, "Reflect", {
            setPrototypeOf: function setPrototypeOf(t, e) {
                i.check(t, e);
                try {
                    return i.set(t, e), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, e, n) {
        function r(t, e, n) {
            var u,
                h,
                d = arguments.length < 4 ? t : arguments[3],
                p = o.f(f(t), e);
            if (!p) {
                if (l(h = a(t))) return r(h, e, n, d);
                p = c(0);
            }
            return s(p, "value") ? !(p.writable === !1 || !l(d)) && (u = o.f(d, e) || c(0), u.value = n, i.f(d, e, u), !0) : void 0 !== p.set && (p.set.call(d, n), !0);
        }
        var i = n(7),
            o = n(17),
            a = n(18),
            s = n(10),
            u = n(0),
            c = n(30),
            f = n(1),
            l = n(4);
        u(u.S, "Reflect", {
            set: r
        });
    }, function (t, e, n) {
        var r = n(2),
            i = n(68),
            o = n(7).f,
            a = n(35).f,
            s = n(55),
            u = n(53),
            _c = r.RegExp,
            f = _c,
            l = _c.prototype,
            h = /a/g,
            d = /a/g !== new _c(/a/g);
        if (n(6) && (!d || n(3)(function () {
            return h[n(5)("match")] = !1, /a/g != _c(/a/g) || _c(h) == h || "/a/i" != _c(/a/g, "i");
        }))) {
            _c = function c(t, e) {
                var n = this instanceof _c,
                    r = s(t),
                    o = void 0 === e;
                return !n && r && t.constructor === _c && o ? t : i(d ? new f(r && !o ? t.source : t, e) : f((r = t instanceof _c) ? t.source : t, r && o ? u.call(t) : e), n ? this : l, _c);
            };
            for (var p = a(f), v = 0; p.length > v;) {
                !function (t) {
                    t in _c || o(_c, t, {
                        configurable: !0,
                        get: function get() {
                            return f[t];
                        },
                        set: function set(e) {
                            f[t] = e;
                        }
                    });
                }(p[v++]);
            }l.constructor = _c, _c.prototype = l, n(14)(r, "RegExp", _c);
        }
        n(38)("RegExp");
    }, function (t, e, n) {
        n(52)("match", 1, function (t, e, n) {
            return [function (n) {
                "use strict";

                var r = t(this),
                    i = void 0 == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
            }, n];
        });
    }, function (t, e, n) {
        n(52)("replace", 2, function (t, e, n) {
            return [function (r, i) {
                "use strict";

                var o = t(this),
                    a = void 0 == r ? void 0 : r[e];
                return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
            }, n];
        });
    }, function (t, e, n) {
        n(52)("search", 1, function (t, e, n) {
            return [function (n) {
                "use strict";

                var r = t(this),
                    i = void 0 == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
            }, n];
        });
    }, function (t, e, n) {
        n(52)("split", 2, function (t, e, r) {
            "use strict";

            var i = n(55),
                o = r,
                a = [].push,
                s = "length";
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[s] || 2 != "ab".split(/(?:ab)*/)[s] || 4 != ".".split(/(.?)(.?)/)[s] || ".".split(/()()/)[s] > 1 || "".split(/.?/)[s]) {
                var u = void 0 === /()??/.exec("")[1];
                r = function r(t, e) {
                    var n = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!i(t)) return o.call(n, t, e);
                    var r,
                        c,
                        f,
                        l,
                        h,
                        d = [],
                        p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        v = 0,
                        m = void 0 === e ? 4294967295 : e >>> 0,
                        g = new RegExp(t.source, p + "g");
                    for (u || (r = new RegExp("^" + g.source + "$(?!\\s)", p)); (c = g.exec(n)) && !((f = c.index + c[0][s]) > v && (d.push(n.slice(v, c.index)), !u && c[s] > 1 && c[0].replace(r, function () {
                        for (h = 1; h < arguments[s] - 2; h++) {
                            void 0 === arguments[h] && (c[h] = void 0);
                        }
                    }), c[s] > 1 && c.index < n[s] && a.apply(d, c.slice(1)), l = c[0][s], v = f, d[s] >= m));) {
                        g.lastIndex === c.index && g.lastIndex++;
                    }return v === n[s] ? !l && g.test("") || d.push("") : d.push(n.slice(v)), d[s] > m ? d.slice(0, m) : d;
                };
            } else "0".split(void 0, 0)[s] && (r = function r(t, e) {
                return void 0 === t && 0 === e ? [] : o.call(this, t, e);
            });
            return [function (n, i) {
                var o = t(this),
                    a = void 0 == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i);
            }, r];
        });
    }, function (t, e, n) {
        "use strict";

        n(116);
        var r = n(1),
            i = n(53),
            o = n(6),
            a = /./.toString,
            s = function s(t) {
            n(14)(RegExp.prototype, "toString", t, !0);
        };
        n(3)(function () {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            });
        }) ? s(function () {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
        }) : "toString" != a.name && s(function () {
            return a.call(this);
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
            i = n(79)(!1);
        r(r.P, "String", {
            codePointAt: function codePointAt(t) {
                return i(this, t);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(8),
            o = n(80),
            a = "".endsWith;
        r(r.P + r.F * n(66)("endsWith"), "String", {
            endsWith: function endsWith(t) {
                var e = o(this, t, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = i(e.length),
                    s = void 0 === n ? r : Math.min(i(n), r),
                    u = String(t);
                return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u;
            }
        });
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
            a = String.fromCodePoint;
        r(r.S + r.F * (!!a && 1 != a.length), "String", {
            fromCodePoint: function fromCodePoint(t) {
                for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                    if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                    n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
                }
                return n.join("");
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(80);
        r(r.P + r.F * n(66)("includes"), "String", {
            includes: function includes(t) {
                return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    }, function (t, e, n) {
        "use strict";

        n(15)("italics", function (t) {
            return function () {
                return t(this, "i", "", "");
            };
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(79)(!0);
        n(72)(String, "String", function (t) {
            this._t = String(t), this._i = 0;
        }, function () {
            var t,
                e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            });
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
            o = n(8);
        r(r.S, "String", {
            raw: function raw(t) {
                for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) {
                    a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
                }return a.join("");
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P, "String", {
            repeat: n(81)
        });
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
            a = "".startsWith;
        r(r.P + r.F * n(66)("startsWith"), "String", {
            startsWith: function startsWith(t) {
                var e = o(this, t, "startsWith"),
                    n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    r = String(t);
                return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r;
            }
        });
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
            a = n(0),
            s = n(14),
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
            b = n(70),
            _ = n(1),
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
            return 7 != S(F({}, "a", {
                get: function get() {
                    return F(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function (t, e, n) {
            var r = C(U, e);
            r && delete U[e], F(t, e, n), r && t !== U && F(U, e, r);
        } : F,
            Y = function Y(t) {
            var e = N[t] = S(_M.prototype);
            return e._k = t, e;
        },
            H = V && "symbol" == _typeof(_M.iterator) ? function (t) {
            return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
        } : function (t) {
            return t instanceof _M;
        },
            G = function G(t, e, n) {
            return t === U && G(j, e, n), _(t), e = y(e, !0), _(n), i(N, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = S(n, {
                enumerable: w(0, !1)
            })) : (i(t, L) || F(t, L, w(1, {})), t[L][e] = !0), Q(t, e, n)) : F(t, e, n);
        },
            q = function q(t, e) {
            _(t);
            for (var n, r = g(e = A(e)), i = 0, o = r.length; o > i;) {
                G(t, n = r[i++], e[n]);
            }return t;
        },
            J = function J(t, e) {
            return void 0 === e ? S(t) : q(S(t), e);
        },
            K = function K(t) {
            var e = R.call(this, t = y(t, !0));
            return !(this === U && i(N, t) && !i(j, t)) && (!(e || !i(this, t) || !i(N, t) || i(this, L) && this[L][t]) || e);
        },
            X = function X(t, e) {
            if (t = A(t), e = y(e, !0), t !== U || !i(N, e) || i(j, e)) {
                var n = C(t, e);
                return !n || !i(N, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
            }
        },
            Z = function Z(t) {
            for (var e, n = B(A(t)), r = [], o = 0; n.length > o;) {
                i(N, e = n[o++]) || e == L || e == u || r.push(e);
            }return r;
        },
            $ = function $(t) {
            for (var e, n = t === U, r = B(n ? j : A(t)), o = [], a = 0; r.length > a;) {
                !i(N, e = r[a++]) || n && !i(U, e) || o.push(N[e]);
            }return o;
        };
        V || (_M = function M() {
            if (this instanceof _M) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0),
                e = function e(n) {
                this === U && e.call(j, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), Q(this, t, w(1, n));
            };
            return o && z && Q(U, t, {
                configurable: !0,
                set: e
            }), Y(t);
        }, s(_M.prototype, "toString", function () {
            return this._k;
        }), E.f = X, T.f = G, n(35).f = x.f = Z, n(48).f = K, n(58).f = $, o && !n(33) && s(U, "propertyIsEnumerable", K, !0), p.f = function (t) {
            return Y(d(t));
        }), a(a.G + a.W + a.F * !V, {
            Symbol: _M
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) {
            d(tt[et++]);
        }for (var tt = k(d.store), et = 0; tt.length > et;) {
            v(tt[et++]);
        }a(a.S + a.F * !V, "Symbol", {
            for: function _for(t) {
                return i(D, t += "") ? D[t] : D[t] = _M(t);
            },
            keyFor: function keyFor(t) {
                if (H(t)) return m(D, t);
                throw TypeError(t + " is not a symbol!");
            },
            useSetter: function useSetter() {
                z = !0;
            },
            useSimple: function useSimple() {
                z = !1;
            }
        }), a(a.S + a.F * !V, "Object", {
            create: J,
            defineProperty: G,
            defineProperties: q,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: $
        }), P && a(a.S + a.F * (!V || c(function () {
            var t = _M();
            return "[null]" != I([t]) || "{}" != I({
                a: t
            }) || "{}" != I(Object(t));
        })), "JSON", {
            stringify: function stringify(t) {
                if (void 0 !== t && !H(t)) {
                    for (var e, n, r = [t], i = 1; arguments.length > i;) {
                        r.push(arguments[i++]);
                    }return e = r[1], "function" == typeof e && (n = e), !n && b(e) || (e = function e(t, _e) {
                        if (n && (_e = n.call(this, t, _e)), !H(_e)) return _e;
                    }), r[1] = e, I.apply(P, r);
                }
            }
        }), _M.prototype[O] || n(13)(_M.prototype, O, _M.prototype.valueOf), l(_M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0);
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(60),
            o = n(84),
            a = n(1),
            s = n(39),
            u = n(8),
            c = n(4),
            f = n(2).ArrayBuffer,
            l = n(78),
            h = o.ArrayBuffer,
            d = o.DataView,
            p = i.ABV && f.isView,
            v = h.prototype.slice,
            m = i.VIEW;
        r(r.G + r.W + r.F * (f !== h), {
            ArrayBuffer: h
        }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
            isView: function isView(t) {
                return p && p(t) || c(t) && m in t;
            }
        }), r(r.P + r.U + r.F * n(3)(function () {
            return !new h(2).slice(1, void 0).byteLength;
        }), "ArrayBuffer", {
            slice: function slice(t, e) {
                if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new (l(this, h))(u(i - r)), c = new d(this), f = new d(o), p = 0; r < i;) {
                    f.setUint8(p++, c.getUint8(r++));
                }return o;
            }
        }), n(38)("ArrayBuffer");
    }, function (t, e, n) {
        var r = n(0);
        r(r.G + r.W + r.F * !n(60).ABV, {
            DataView: n(84).DataView
        });
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

        var r = n(98);
        n(51)("WeakSet", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            add: function add(t) {
                return r.def(this, t, !0);
            }
        }, r, !1, !0);
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(50)(!0);
        r(r.P, "Array", {
            includes: function includes(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), n(41)("includes");
    }, function (t, e, n) {
        var r = n(0),
            i = n(75)(),
            o = n(2).process,
            a = "process" == n(19)(o);
        r(r.G, {
            asap: function asap(t) {
                var e = a && o.domain;
                i(e ? e.bind(t) : t);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(19);
        r(r.S, "Error", {
            isError: function isError(t) {
                return "Error" === i(t);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P + r.R, "Map", {
            toJSON: n(97)("Map")
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            iaddh: function iaddh(t, e, n, r) {
                var i = t >>> 0,
                    o = e >>> 0,
                    a = n >>> 0;
                return o + (r >>> 0) + ((i & a | (i | a) & ~(i + a >>> 0)) >>> 31) | 0;
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            imulh: function imulh(t, e) {
                var n = +t,
                    r = +e,
                    i = 65535 & n,
                    o = 65535 & r,
                    a = n >> 16,
                    s = r >> 16,
                    u = (a * o >>> 0) + (i * o >>> 16);
                return a * s + (u >> 16) + ((i * s >>> 0) + (65535 & u) >> 16);
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            isubh: function isubh(t, e, n, r) {
                var i = t >>> 0,
                    o = e >>> 0,
                    a = n >>> 0;
                return o - (r >>> 0) - ((~i & a | ~(i ^ a) & i - a >>> 0) >>> 31) | 0;
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            umulh: function umulh(t, e) {
                var n = +t,
                    r = +e,
                    i = 65535 & n,
                    o = 65535 & r,
                    a = n >>> 16,
                    s = r >>> 16,
                    u = (a * o >>> 0) + (i * o >>> 16);
                return a * s + (u >>> 16) + ((i * s >>> 0) + (65535 & u) >>> 16);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(9),
            o = n(12),
            a = n(7);
        n(6) && r(r.P + n(57), "Object", {
            __defineGetter__: function __defineGetter__(t, e) {
                a.f(i(this), t, {
                    get: o(e),
                    enumerable: !0,
                    configurable: !0
                });
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(9),
            o = n(12),
            a = n(7);
        n(6) && r(r.P + n(57), "Object", {
            __defineSetter__: function __defineSetter__(t, e) {
                a.f(i(this), t, {
                    set: o(e),
                    enumerable: !0,
                    configurable: !0
                });
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(108)(!0);
        r(r.S, "Object", {
            entries: function entries(t) {
                return i(t);
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(109),
            o = n(16),
            a = n(17),
            s = n(63);
        r(r.S, "Object", {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
                for (var e, n = o(t), r = a.f, u = i(n), c = {}, f = 0; u.length > f;) {
                    s(c, e = u[f++], r(n, e));
                }return c;
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(9),
            o = n(24),
            a = n(18),
            s = n(17).f;
        n(6) && r(r.P + n(57), "Object", {
            __lookupGetter__: function __lookupGetter__(t) {
                var e,
                    n = i(this),
                    r = o(t, !0);
                do {
                    if (e = s(n, r)) return e.get;
                } while (n = a(n));
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(9),
            o = n(24),
            a = n(18),
            s = n(17).f;
        n(6) && r(r.P + n(57), "Object", {
            __lookupSetter__: function __lookupSetter__(t) {
                var e,
                    n = i(this),
                    r = o(t, !0);
                do {
                    if (e = s(n, r)) return e.set;
                } while (n = a(n));
            }
        });
    }, function (t, e, n) {
        var r = n(0),
            i = n(108)(!1);
        r(r.S, "Object", {
            values: function values(t) {
                return i(t);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(2),
            o = n(25),
            a = n(75)(),
            s = n(5)("observable"),
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
            var e = t._c;
            e && (t._c = void 0, e());
        },
            g = function g(t) {
            return void 0 === t._o;
        },
            b = function b(t) {
            g(t) || (t._o = void 0, m(t));
        },
            _ = function _(t, e) {
            c(t), this._c = void 0, this._o = t, t = new A(this);
            try {
                var n = e(t),
                    r = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function n() {
                    r.unsubscribe();
                } : u(n), this._c = n);
            } catch (e) {
                return void t.error(e);
            }
            g(this) && m(this);
        };
        _.prototype = l({}, {
            unsubscribe: function unsubscribe() {
                b(this);
            }
        });
        var A = function A(t) {
            this._s = t;
        };
        A.prototype = l({}, {
            next: function next(t) {
                var e = this._s;
                if (!g(e)) {
                    var n = e._o;
                    try {
                        var r = v(n.next);
                        if (r) return r.call(n, t);
                    } catch (t) {
                        try {
                            b(e);
                        } finally {
                            throw t;
                        }
                    }
                }
            },
            error: function error(t) {
                var e = this._s;
                if (g(e)) throw t;
                var n = e._o;
                e._o = void 0;
                try {
                    var r = v(n.error);
                    if (!r) throw t;
                    t = r.call(n, t);
                } catch (t) {
                    try {
                        m(e);
                    } finally {
                        throw t;
                    }
                }
                return m(e), t;
            },
            complete: function complete(t) {
                var e = this._s;
                if (!g(e)) {
                    var n = e._o;
                    e._o = void 0;
                    try {
                        var r = v(n.complete);
                        t = r ? r.call(n, t) : void 0;
                    } catch (t) {
                        try {
                            m(e);
                        } finally {
                            throw t;
                        }
                    }
                    return m(e), t;
                }
            }
        });
        var y = function y(t) {
            f(this, y, "Observable", "_f")._f = u(t);
        };
        l(y.prototype, {
            subscribe: function subscribe(t) {
                return new _(t, this._f);
            },
            forEach: function forEach(t) {
                var e = this;
                return new (o.Promise || i.Promise)(function (n, r) {
                    u(t);
                    var i = e.subscribe({
                        next: function next(e) {
                            try {
                                return t(e);
                            } catch (t) {
                                r(t), i.unsubscribe();
                            }
                        },
                        error: r,
                        complete: n
                    });
                });
            }
        }), l(y, {
            from: function from(t) {
                var e = "function" == typeof this ? this : y,
                    n = v(c(t)[s]);
                if (n) {
                    var r = c(n.call(t));
                    return r.constructor === e ? r : new e(function (t) {
                        return r.subscribe(t);
                    });
                }
                return new e(function (e) {
                    var n = !1;
                    return a(function () {
                        if (!n) {
                            try {
                                if (d(t, !1, function (t) {
                                    if (e.next(t), n) return p;
                                }) === p) return;
                            } catch (t) {
                                if (n) throw t;
                                return void e.error(t);
                            }
                            e.complete();
                        }
                    }), function () {
                        n = !0;
                    };
                });
            },
            of: function of() {
                for (var t = 0, e = arguments.length, n = Array(e); t < e;) {
                    n[t] = arguments[t++];
                }return new ("function" == typeof this ? this : y)(function (t) {
                    var e = !1;
                    return a(function () {
                        if (!e) {
                            for (var r = 0; r < n.length; ++r) {
                                if (t.next(n[r]), e) return;
                            }t.complete();
                        }
                    }), function () {
                        e = !0;
                    };
                });
            }
        }), h(y.prototype, s, function () {
            return this;
        }), r(r.G, {
            Observable: y
        }), n(38)("Observable");
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = r.key,
            a = r.set;
        r.exp({
            defineMetadata: function defineMetadata(t, e, n, r) {
                a(t, e, i(n), o(r));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = r.key,
            a = r.map,
            s = r.store;
        r.exp({
            deleteMetadata: function deleteMetadata(t, e) {
                var n = arguments.length < 3 ? void 0 : o(arguments[2]),
                    r = a(i(e), n, !1);
                if (void 0 === r || !r.delete(t)) return !1;
                if (r.size) return !0;
                var u = s.get(e);
                return u.delete(n), !!u.size || s.delete(e);
            }
        });
    }, function (t, e, n) {
        var r = n(117),
            i = n(93),
            o = n(27),
            a = n(1),
            s = n(18),
            u = o.keys,
            c = o.key,
            f = function f(t, e) {
            var n = u(t, e),
                o = s(t);
            if (null === o) return n;
            var a = f(o, e);
            return a.length ? n.length ? i(new r(n.concat(a))) : a : n;
        };
        o.exp({
            getMetadataKeys: function getMetadataKeys(t) {
                return f(a(t), arguments.length < 2 ? void 0 : c(arguments[1]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = n(18),
            a = r.has,
            s = r.get,
            u = r.key,
            c = function c(t, e, n) {
            if (a(t, e, n)) return s(t, e, n);
            var r = o(e);
            return null !== r ? c(t, r, n) : void 0;
        };
        r.exp({
            getMetadata: function getMetadata(t, e) {
                return c(t, i(e), arguments.length < 3 ? void 0 : u(arguments[2]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = r.keys,
            a = r.key;
        r.exp({
            getOwnMetadataKeys: function getOwnMetadataKeys(t) {
                return o(i(t), arguments.length < 2 ? void 0 : a(arguments[1]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = r.get,
            a = r.key;
        r.exp({
            getOwnMetadata: function getOwnMetadata(t, e) {
                return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = n(18),
            a = r.has,
            s = r.key,
            u = function u(t, e, n) {
            if (a(t, e, n)) return !0;
            var r = o(e);
            return null !== r && u(t, r, n);
        };
        r.exp({
            hasMetadata: function hasMetadata(t, e) {
                return u(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = r.has,
            a = r.key;
        r.exp({
            hasOwnMetadata: function hasOwnMetadata(t, e) {
                return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]));
            }
        });
    }, function (t, e, n) {
        var r = n(27),
            i = n(1),
            o = n(12),
            a = r.key,
            s = r.set;
        r.exp({
            metadata: function metadata(t, e) {
                return function (n, r) {
                    s(t, e, (void 0 !== r ? i : o)(n), a(r));
                };
            }
        });
    }, function (t, e, n) {
        var r = n(0);
        r(r.P + r.R, "Set", {
            toJSON: n(97)("Set")
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(79)(!0);
        r(r.P, "String", {
            at: function at(t) {
                return i(this, t);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(20),
            o = n(8),
            a = n(55),
            s = n(53),
            u = RegExp.prototype,
            c = function c(t, e) {
            this._r = t, this._s = e;
        };
        n(71)(c, "RegExp String", function () {
            var t = this._r.exec(this._s);
            return {
                value: t,
                done: null === t
            };
        }), r(r.P, "String", {
            matchAll: function matchAll(t) {
                if (i(this), !a(t)) throw TypeError(t + " is not a regexp!");
                var e = String(this),
                    n = "flags" in u ? String(t.flags) : s.call(t),
                    r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
                return r.lastIndex = o(t.lastIndex), new c(r, e);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(113);
        r(r.P, "String", {
            padEnd: function padEnd(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
            }
        });
    }, function (t, e, n) {
        "use strict";

        var r = n(0),
            i = n(113);
        r(r.P, "String", {
            padStart: function padStart(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
            }
        });
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
        var r = n(0);
        r(r.S, "System", {
            global: n(2)
        });
    }, function (t, e, n) {
        for (var r = n(87), i = n(14), o = n(2), a = n(13), s = n(43), u = n(5), c = u("iterator"), f = u("toStringTag"), l = s.Array, h = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
            var p,
                v = h[d],
                m = o[v],
                g = m && m.prototype;
            if (g) {
                g[c] || a(g, c, l), g[f] || a(g, f, v), s[v] = l;
                for (p in r) {
                    g[p] || i(g, p, r[p], !0);
                }
            }
        }
    }, function (t, e, n) {
        var r = n(0),
            i = n(83);
        r(r.G + r.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        });
    }, function (t, e, n) {
        var r = n(2),
            i = n(0),
            o = n(54),
            a = n(149),
            s = r.navigator,
            u = !!s && /MSIE .\./.test(s.userAgent),
            c = function c(t) {
            return u ? function (e, n) {
                return t(o(a, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), n);
            } : t;
        };
        i(i.G + i.B + i.F * u, {
            setTimeout: c(r.setTimeout),
            setInterval: c(r.setInterval)
        });
    }, function (t, e, n) {
        n(272), n(211), n(213), n(212), n(215), n(217), n(222), n(216), n(214), n(224), n(223), n(219), n(220), n(218), n(210), n(221), n(225), n(226), n(178), n(180), n(179), n(228), n(227), n(198), n(208), n(209), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(259), n(264), n(271), n(262), n(254), n(255), n(260), n(265), n(267), n(250), n(251), n(252), n(253), n(256), n(257), n(258), n(261), n(263), n(266), n(268), n(269), n(270), n(173), n(175), n(174), n(177), n(176), n(162), n(160), n(166), n(163), n(169), n(171), n(159), n(165), n(156), n(170), n(154), n(168), n(167), n(161), n(164), n(153), n(155), n(158), n(157), n(172), n(87), n(244), n(249), n(116), n(245), n(246), n(247), n(248), n(229), n(115), n(117), n(118), n(284), n(273), n(274), n(279), n(282), n(283), n(277), n(280), n(278), n(281), n(275), n(276), n(230), n(231), n(232), n(233), n(234), n(237), n(235), n(236), n(238), n(239), n(240), n(241), n(243), n(242), n(285), n(311), n(314), n(313), n(315), n(316), n(312), n(317), n(318), n(296), n(299), n(295), n(293), n(294), n(297), n(298), n(288), n(310), n(319), n(287), n(289), n(291), n(290), n(292), n(301), n(302), n(304), n(303), n(306), n(305), n(307), n(308), n(309), n(286), n(300), n(322), n(321), n(320), t.exports = n(25);
    }, function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }

        function r() {
            throw new Error("clearTimeout has not been defined");
        }

        function i(t) {
            if (f === setTimeout) return setTimeout(t, 0);
            if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
            try {
                return f(t, 0);
            } catch (e) {
                try {
                    return f.call(null, t, 0);
                } catch (e) {
                    return f.call(this, t, 0);
                }
            }
        }

        function o(t) {
            if (l === clearTimeout) return clearTimeout(t);
            if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
            try {
                return l(t);
            } catch (e) {
                try {
                    return l.call(null, t);
                } catch (e) {
                    return l.call(this, t);
                }
            }
        }

        function a() {
            v && d && (v = !1, d.length ? p = d.concat(p) : m = -1, p.length && s());
        }

        function s() {
            if (!v) {
                var t = i(a);
                v = !0;
                for (var e = p.length; e;) {
                    for (d = p, p = []; ++m < e;) {
                        d && d[m].run();
                    }m = -1, e = p.length;
                }
                d = null, v = !1, o(t);
            }
        }

        function u(t, e) {
            this.fun = t, this.array = e;
        }

        function c() {}
        var f,
            l,
            h = t.exports = {};
        !function () {
            try {
                f = "function" == typeof setTimeout ? setTimeout : n;
            } catch (t) {
                f = n;
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (t) {
                l = r;
            }
        }();
        var d,
            p = [],
            v = !1,
            m = -1;
        h.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
                e[n - 1] = arguments[n];
            }p.push(new u(t, e)), 1 !== p.length || v || i(s);
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
                        a = Object.create(i.prototype),
                        s = new p(r || []);
                    return a._invoke = f(t, n, s), a;
                }

                function i(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        };
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        };
                    }
                }

                function o() {}

                function a() {}

                function s() {}

                function u(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t);
                        };
                    });
                }

                function c(t) {
                    function e(n, r, o, a) {
                        var s = i(t[n], t, r);
                        if ("throw" !== s.type) {
                            var u = s.arg,
                                c = u.value;
                            return c && "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && _.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                                e("next", t, o, a);
                            }, function (t) {
                                e("throw", t, o, a);
                            }) : Promise.resolve(c).then(function (t) {
                                u.value = t, o(u);
                            }, a);
                        }
                        a(s.arg);
                    }

                    function r(t, n) {
                        function r() {
                            return new Promise(function (r, i) {
                                e(t, n, r, i);
                            });
                        }
                        return o = o ? o.then(r, r) : r();
                    }
                    "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.domain && (e = n.domain.bind(e));
                    var o;
                    this._invoke = r;
                }

                function f(t, e, n) {
                    var r = E;
                    return function (o, a) {
                        if (r === k) throw new Error("Generator is already running");
                        if (r === C) {
                            if ("throw" === o) throw a;
                            return m();
                        }
                        for (n.method = o, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var u = l(s, n);
                                if (u) {
                                    if (u === F) continue;
                                    return u;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                                if (r === E) throw r = C, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = k;
                            var c = i(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? C : T, c.arg === F) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                };
                            }
                            "throw" === c.type && (r = C, n.method = "throw", n.arg = c.arg);
                        }
                    };
                }

                function l(t, e) {
                    var n = t.iterator[e.method];
                    if (n === g) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = g, l(t, e), "throw" === e.method)) return F;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return F;
                    }
                    var r = i(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, F;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = g), e.delegate = null, F) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, F);
                }

                function h(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                }

                function d(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                }

                function p(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(h, this), this.reset(!0);
                }

                function v(t) {
                    if (t) {
                        var e = t[y];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function e() {
                                for (; ++n < t.length;) {
                                    if (_.call(t, n)) return e.value = t[n], e.done = !1, e;
                                }return e.value = g, e.done = !0, e;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: m
                    };
                }

                function m() {
                    return {
                        value: g,
                        done: !0
                    };
                }
                var g,
                    b = Object.prototype,
                    _ = b.hasOwnProperty,
                    A = "function" == typeof Symbol ? Symbol : {},
                    y = A.iterator || "@@iterator",
                    w = A.toStringTag || "@@toStringTag",
                    S = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)),
                    x = e.regeneratorRuntime;
                if (x) return void (S && (t.exports = x));
                x = e.regeneratorRuntime = S ? t.exports : {}, x.wrap = r;
                var E = "suspendedStart",
                    T = "suspendedYield",
                    k = "executing",
                    C = "completed",
                    F = {},
                    B = {};
                B[y] = function () {
                    return this;
                };
                var M = Object.getPrototypeOf,
                    P = M && M(M(v([])));
                P && P !== b && _.call(P, y) && (B = P);
                var I = s.prototype = o.prototype = Object.create(B);
                a.prototype = I.constructor = s, s.constructor = a, s[w] = a.displayName = "GeneratorFunction", x.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name));
                }, x.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(I), t;
                }, x.awrap = function (t) {
                    return {
                        __await: t
                    };
                }, u(c.prototype), x.AsyncIterator = c, x.async = function (t, e, n, i) {
                    var o = new c(r(t, e, n, i));
                    return x.isGeneratorFunction(e) ? o : o.next().then(function (t) {
                        return t.done ? t.value : o.next();
                    });
                }, u(I), I[w] = "Generator", I.toString = function () {
                    return "[object Generator]";
                }, x.keys = function (t) {
                    var e = [];
                    for (var n in t) {
                        e.push(n);
                    }return e.reverse(), function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, x.values = v, p.prototype = {
                    constructor: p,
                    reset: function reset(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(d), !t) for (var e in this) {
                            "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = g);
                        }
                    },
                    stop: function stop() {
                        this.done = !0;
                        var t = this.tryEntries[0],
                            e = t.completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function dispatchException(t) {
                        function e(e, r) {
                            return o.type = "throw", o.arg = t, n.next = e, r && (n.method = "next", n.arg = g), !!r;
                        }
                        if (this.done) throw t;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return e("end");
                            if (i.tryLoc <= this.prev) {
                                var a = _.call(i, "catchLoc"),
                                    s = _.call(i, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                                } else if (a) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function abrupt(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, F) : this.complete(o);
                    },
                    complete: function complete(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), F;
                    },
                    finish: function finish(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), d(n), F;
                        }
                    },
                    catch: function _catch(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    d(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function delegateYield(t, e, n) {
                        return this.delegate = {
                            iterator: v(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = g), F;
                    }
                };
            }("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : this);
        }).call(e, n(119), n(324));
    }, function (t, e, n) {
        n(121), t.exports = n(120);
    }]);
}(Object.assign(window));

exports.default = SLDP;

/***/ }),
/* 7 */
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
/* 8 */
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
        this.iframe.src = "https://ya.ru";
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
            this.iframe.src = "https://teva.whenspeak.ru/player/?room=" + room; //"http://10.0.140.41:8081/live/test/playlist.m3u8";
            this.isPlay = true;
        }
    }, {
        key: "pause",
        value: function pause() {
            if (!this.isPlay) return;
            this.iframe.src = "https://ya.ru";
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