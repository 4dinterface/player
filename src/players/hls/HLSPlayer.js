import Hls from "hls.js";
import DisconnectDetector from  "../../DisconnectDetector.js";

class HLSPlayer {

    constructor (src, room, config) {
        var wrapper =document.getElementById("sldp_player_wrapper");
        this.video = document.createElement("video");
        this.video.controls="controls";
        this.video.style.width="100%";
        this.video.style.height="100%";
        //this.video.autoplay = "autoplay";
        wrapper.appendChild( this.video );
        //console.log("________________");

        if(Hls.isSupported()) {
            var hls = new Hls();
            this.hls = hls;

            //hls.loadSource('http://192.168.56.1:8081/live/test/playlist.m3u8'); 
            hls.loadSource(src + "/" + room + "/playlist.m3u8");
            //this.video.autoplay = "autoplay";
            //alert("sup");
            hls.attachMedia(this.video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                //alert("autoplay");
                //video.play();
                this._onCanPlay();//возможно стоит использовать event video
            });

            //==============================================================================//
            this.detector = new DisconnectDetector(this.video, 6000);
            
    
            this.video.addEventListener("pause",()=>{
                this.detector.stopWatch();
                console.log("hls.js pause");
            })
    
            this.detector.onDisconnect =()=> {
                this.needRestart = true;
                console.log("hls.js disconnect");
            }
           //==============================================================================//
        }
    }

    play(){
        this.video.play();
        this.detector.startWatch();
    }

    isPaused(){
        return this.video.paused;
    }

    _onCanPlay(){
        this.canPlay = true;     
        if(this.onCanPlay)
            this.onCanPlay();
    }

    destroy(room){
        //this.video.removeEventListener("error", this.onError);
        this.hls.destroy();
        this.video.remove();
        this.detector.destroy();
    }
    
    static isSupported(){
        return Hls.isSupported();
    }

}

export default HLSPlayer;