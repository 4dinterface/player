class FlashPhonerPlayer{

    constructor(src, room, params){
        this.src = src;
        this.room = room;
        this.params = params;
        
        var wrapper = document.getElementById("sldp_player_wrapper");
        this.wrapper = wrapper;
        this.iframe = document.createElement("iframe");
        this.iframe.style.width = "100";
        this.iframe.style.height = "100%";
        wrapper.appendChild( this.iframe );

        var DragDropDiv = document.createElement("div");
        DragDropDiv.id = "dragdropdiv";
        DragDropDiv.style.width = "100%";
        DragDropDiv.style.height = "100%";
        DragDropDiv.style.position = "absolute";
        DragDropDiv.style.left = "0px";
        DragDropDiv.style.top = "0px";
        //DragDropDiv.style.opacity = 0;
        //DragDropDiv.style.background = "red"; 
        wrapper.appendChild( DragDropDiv );        
        console.log("---=== работает плеер FlashPhoner ===---");
    }

    isPaused(){
        return true;
    }

    play(){
        if(this.isPlay)
            return;
        var room = String(this.room).replace("rtmp_","");//уберем мусор если есть     
        //this.iframe.src = "https://teva.whenspeak.ru/player/?room=" + room; //"http://10.0.140.41:8081/live/test/playlist.m3u8";
        this.iframe.src = "https://teva.whenspeak.ru/player/?room=" +room;
        this.isPlay = true;
    }

    pause(){
        /*if(!this.isPlay)
            return; */
        this.iframe.src = "https://ya.ru/"; //на любой другой адрес переадресуем
        this.isPlay = false;
    }

    destroy(){
        this.iframe.remove();
    }

    static isSupported(){
        return true;
    }
}
export default FlashPhonerPlayer;