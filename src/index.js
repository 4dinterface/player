import support from "./support.js";                        //
import Draggable from  "./Draggable.js";  
import "./polyfills/polyfill";                             // перетаскивание плеера 

import HLSPlayer from     "./players/hls/HLSPlayer.js";
import SLDPPlayer from    "./players/sldp/SLDPPlayer.js";
import NativePlayer from  "./players/native/NativePlayer.js";
//import FlashPhonerPlayer from  "./players/flashPhoner/FlashPhoner.js";
import FlashPhonerPlayer from  "./players/IFlashPhoner/FlashPhoner.js";

//alert("hello world 2");

class WhenspeakStreamer {

    constructor(params){

        var width=screen.width, // ширина  
            height=screen.height; // высота

        //alert([width, height]);
        //========================================//

        params = params ||{};
        this.params = params;

        this.wrapper = document.createElement("div");
        this.wrapper.id ="sldp_player_wrapper"; 
        this.wrapper.style.width = params.width || "400px";
        this.wrapper.style.height = params.height || "270px";
        this.wrapper.style.background = "black";
        this.wrapper.style.position = "fixed";
        this.wrapper.style.display = "none";
        this.wrapper.style.right = "0px";
        this.wrapper.style.bottom = "0px";       
        this.wrapper.style.userSelect= "none";
        
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
        image.style.paddingLeft="50%";
        image.style.marginLeft="-50px";
        image.style.paddingTop="50%";
        image.style.marginTop="-100px";
        image.style.zIndex="9999";

        this.preloader.appendChild(image);
        this.wrapper.appendChild(this.preloader);
        document.body.appendChild( this.wrapper );

        //протоколы
        var v = support.is_safari ? support.getSafaryVersion().split(".")[0]:null;
        this.sources =  params.sources;
        this.protocols =  (support.is_safari && (support.iosX || Number(v)<9)) ? params.srcProtocolsOldSafary : params.srcProtocols;  
        this.protocolIndex = 0;
        this.resetIndex();
        
        //is play
        this.isPlay = false;

        //супервизор
        this.onCanPlay = this.onCanPlay.bind(this);
        this.supervizor = this.supervizor.bind(this);
        this.supervizor(); //запускаем супервизор

        //перетаскивание окна
        this.dragManager = new Draggable(this.wrapper); //TODO draggable нельзя обьявлять здесь 

        //var fp =new FlashPhonerPlayer();
        //console.log(fp);
        //=====================================================================================
    }
    
  
    init (roomId) {
        //alert("init " + roomId);
        this.isPlay = true;
        this.wrapper.style.display = "none";
        //if(this.currentRoom !==  roomId){
            //this.protocolCount =0;
            this.protocolIndex =0;
            this.resetIndex();
            console.log("!!!!! ВНИМАНИЕ Я СБРОСИЛ ДИГРАДАЦИИ !!!!")
            this.currentRoom = roomId;
            
            if(this.instance)
                this.destroyPlayer();        
            this.instance = this.createPlayer( roomId );
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

    play () {
        //console.log("index-play");
        this.wrapper.style.display = "block";
        if(!this.instance.isPlay)
            this.instance.play();
    }

    stop () {
        //console.log("index-stop");
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>> STOP = ", this.instance.isPlay);
        this.wrapper.style.display = "none";
        if(this.instance.isPlay)
            this.instance.pause();
    }

    playstop (roomId) {
        if(!this.instance){
            console.error("no player intance")
            return;
        }
        if(this.instance.isPlay)
            this.stop();
        else
            this.play(roomId);
    }

    //======================================= low level ========================================//

    // hls - врубает hls плеер (в зависимости от устройства нативный или на JS EMS)
    // ws - врубает плеер на веб сокетах
    createPlayer( room ){
        var protocol = this.protocols[ this.protocolIndex ].split(":"),
            instance,
            params = this.params;

        if(!this.troubleTimeout){
            this.troubleTimeout = setTimeout(function(){
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
        
        if( protocol[0] == "FlashPhoner" ) {
            //let src = this.params.sources["ws"][0]; //балансировка по серверам отсутствует, поэтому пока берем всегда первый             
            //console.log("instance flash phoner");
            instance = new FlashPhonerPlayer("", room, this.params);
        } else if( protocol[0] == "hls" ) {
            //alert("пробую использовать HLS");
            let src = this.params.sources["hls"][0]; //балансировка по серверам отсутствует, поэтому берем всегда первый 
            var v= support.is_safari && support.getSafaryVersion().split(".")[0];
         
            if ((support.iosX && support.is_safari) ||  (support.is_safari && Number(v)<9)) { 
                //7alert("нативный плеер");
                instance = new NativePlayer(src, room, this.params);         
            } else {
                instance = new HLSPlayer(src, room, this.params);
                //instance = new FlashPhonerPlayer("", room, this.params);
            }
        } else if( protocol[0] == "ws" ) {
            let src = this.params.sources["ws"][0]; //балансировка по серверам отсутствует, поэтому пока берем всегда первый             
            instance = new SLDPPlayer(src, room, this.params);  
        }
        
        if(instance){
            this.instance = instance;
            this.instance.onCanPlay = this.onCanPlay;
        }
        return instance;
    };

    destroyPlayer(){
        if(this.instance){
            this.instance.destroy();
        }    
    }

    supervizor () {
        /*if(this.instance && this.instance.canPlay){
            console.log("ПРячу прелоадер");
            this.preloader.style.display="none";
        }*/   
        if(this.instance && this.instance.needRestart){
            this.protocolCount --;
            //console.log(">>>",  this.protocolCount);
            
            if(this.protocolCount<1){
                this.protocolIndex = this.protocolIndex+1<this.protocols.length ?this.protocolIndex + 1 : 0;
                //console.log("protocol index = ", this.protocolIndex);
                this.resetIndex();
            }
                
            this.destroyPlayer();
            this.createPlayer( this.currentRoom );
            this.instance.play();
        }
        setTimeout(this.supervizor, 3000)
    }

    onCanPlay(){
        //alert("onCanplay");
        clearTimeout(this.troubleTimeout);
        //console.log("ожидание трабла остановлено");
        this.troubleTimeout = null;
        this.preloader.style.display="none";        
    }
    
    resetIndex(){
        var protocol = this.protocols[ this.protocolIndex ].split(":");
        this.protocol = protocol[0];
        this.protocolCount = Number(protocol[1]);
        //console.log("protocol=", protocol);
    }

}

window.WhenSpeakStreamer = WhenspeakStreamer;