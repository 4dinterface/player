import DisconnectDetector from  "../../DisconnectDetector.js"; // определяет разрывы и занимается переключениями

class NativePlayer {
    
    constructor (src, room, config) {
            //alert("native player");
            this.needRestart = false;

            this._onCanPlay = this._onCanPlay.bind(this);
            
            var wrapper =document.getElementById("sldp_player_wrapper");
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
            try{
                this.video.src = src + "/" + room + "/playlist.m3u8"; //"http://10.0.140.41:8081/live/test/playlist.m3u8";
            } catch (e){
                console.error("err", e);
            }
            //this.video.style.border="1px solid black";
            this.video.style.width = "100%";
            this.video.style.height = "100%";
            //this.video.autoplay = "autoplay";
            //iDoc.body.appendChild( this.video );
            this.video.controls="controls";      
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

            this.detector = new DisconnectDetector(this.video, 50000);

            //alert("create native player 2");
            
            this.video.addEventListener("pause",()=>{
                this.detector.stopWatch();
                //console.log("sldp pause");s
            });

            
            this.detector.onDisconnect =()=> {
                //alert("onDisconnect");
                this.needRestart = true;
                console.log("disconnect native player");
            }

            //alert("create native player 3");
    }

    isPaused(){
        return this.video.paused;
    }

    isPlaying () {
        var video = this.video;
        var r =!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2); 
        return r;
    }

    isPlaying () {
        var video = this.video;
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
          
        if(!this.isPlaying()) {
            //console.log("______ === _____ / play");
            this.video.play();
            this.detector.startWatch();
        }

        this.isPlay = true;
             
    }

    pause(){
        this.video.muted = true;
        if(!this.isPlay)
            return;

        if(this.isPlaying()) {
            this.video.pause();
            this.detector.stopWatch();
        }
        this.isPlay = false;
    }

    destroy(room){
        clearTimeout(this.timeout);
        this.video.removeEventListener("error", this.onError);
        this.video.remove();
        this.detector.destroy();
        //this.iframe.remove();
    }

    onError(e){
        this.needRestart = true;
    }

    onPlay(){
        console.log("play");
    }

    _onCanPlay(){
        //var irect =this.iframe.getBoundingClientRect();
        //var vrect =this.video.getBoundingClientRect();
        
        this.canPlay = true;
        if(this.onCanPlay)
            this.onCanPlay();
    }

    static isSupported(){
        return true;
    }

}

export default NativePlayer;