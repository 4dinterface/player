import "./sldp-v2.0.3.min.js";
import DisconnectDetector from  "../../DisconnectDetector.js";

//alert(SLDP);

//TODO покумекать на тему события play
class SLDPPlayer {

    constructor (src, room, params) {
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

            this.instance =  SLDP.init({
                container: 'sldp_player_wrapper',
                //stream_url: "ws://192.168.56.1:8081/live/test",
                stream_url: src+"/"+room,
                buffering:  1000,
                height: parseInt(params.height),//"100%",
                width: parseInt(params.width),
                latency_tolerance:5500,
                //offset:1,	//позволяет ускорить запуск
                autoplay: false
            });
            console.log("sldp instance");
            console.log(this.instance);
            
            var video = this.video =wrapper.getElementsByTagName("video")[0];
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

            this.detector = new DisconnectDetector(this.video, 20000);
            this.detector.debugPrefix = "sldp";
            this.detector.stopWatch();
            //this.detector.startWatch();

            this.video.addEventListener("pause", () => {
                this.detector.stopWatch();
                console.log("sldp -> pause");
            })

            this.detector.onDisconnect =()=> {
                this.needRestart = true;
                console.log("sldp -> disconnect ");
            }

            //console.log("---=== работает плеер SLDP ===---");
            console.log("create instance SLDP 2");
        //}, 5000);
    }

    isPaused(){
        return this.video.paused;
    }

    isPlaying () {
        var video = this.video;
        if(!video)
            return;
        /*console.log({
            currentTime: video.currentTime,
            paused:  video.paused,
            readyState: video.readyState
        });*/
        var r =!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2); 
        //console.log("r=", r);
        return r;
    }

    play(){
        this.video.muted = false;

        if(this.isPlay)
            return;
        
        //console.log("-----------");
        
        if(!this.isPlaying()){
            $(".sldp_play_pause_btn").click();
            this.detector.startWatch(); // начали отслеживать при запуске
        }
        
        this.isPlay = true;
        //this.video.removeAttribute("muted", false);
        //alert(this.video.getAttribute("muted"));
    }

    pause(){
        this.video.muted = true;

        console.log("-> SLDP PAUSE FUNCTION");
        if(this.isPlaying())
            $(".sldp_play_pause_btn").click();
        this.isPlay = false;
        this.detector.stopWatch(); //остановились в случае паузы
        //this.video.removeAttribute("muted", true);
        //alert(this.video.getAttribute("muted"));        
    }

    _onCanPlay(){
        console.log("oncan play");
        this.canPlay=true;
        if(this.onCanPlay)
            this.onCanPlay();
    }

    destroy(room){
        console.log("sldp -> destroy");
        this.instance.destroy();
        this.detector.destroy();
    }

    static isSupported(){
        return true;
    }
}

export default SLDPPlayer;