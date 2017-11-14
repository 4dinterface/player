//TODO найти решение, неотрабатываютэвенты при ожижании HLS на IOS
class DisconectDetector {

    constructor(video, time){
        //console.log("init detector");
        this.onTimeout = this.onTimeout.bind(this);
        this.updateTime = this.updateTime.bind(this);
        
        this.time = time || 6000;

        this.video = video;
    }

    startWatch(){
        //alert("startswitch");
        if(this.timeout)
            clearTimeout( this.timeout );
        this.timeout = setTimeout(this.onTimeout, this.time);
        if(this.video){
            this.video.addEventListener("timeupdate", this.updateTime);
        }
    }

    stopWatch(){
        //alert("startswitch");
        if(this.timeout)
            clearTimeout( this.timeout );
            
        if(this.video){
            this.video.removeEventListener("timeupdate", this.updateTime);
        }
    }
    

    /*progress(){
        console.log("progress");
    }*/
    
    updateTime(e){
        console.log("time update " + this.debugPrefix);
        if(this.timeStamp !== this.video.currentTime){
            //console.log("updateTime 2=", this.timeStamp );
            if(this.timeout)
                clearTimeout( this.timeout );

            this.timeout = setTimeout(this.onTimeout, 6000);
            //alert([this.timeStamp, this.video.currentTime]);
            
        }    
        this.timeStamp = this.video.currentTime;
    }
    
    onTimeout(){
        //alert(["onTimeout", this.onDisconnect]);
        if(this.onDisconnect){
            //alert("call disconect");
            this.onDisconnect();
        }
    }

    destroy(){
        this.video.removeEventListener("timeupdate", this.updateTime);
        //alert("destroy");
        clearTimeout( this.timeout );
        this.video.removeEventListener("playing", this.onPlaying);
        this.video.removeEventListener("pause",this.onPause);
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
}

export default DisconectDetector;