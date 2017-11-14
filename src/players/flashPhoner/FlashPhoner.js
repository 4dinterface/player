var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS, 
    STREAM_STATUS = Flashphoner.constants.STREAM_STATUS,
    remoteVideo,
    resolution_for_wsplayer,
    stream,
    currentVolumeValue = 100,
    resolution = getUrlParam("resolution"),
    mediaProvider = getUrlParam("mediaProvider") || null,
    f;


class FlashPhonerPlayer{

    constructor(){
        //init api
        try {
            Flashphoner.init({
                flashMediaProviderSwfLocation: '/media-provider.swf',
                receiverLocation: '/dependencies/websocket-player/WSReceiver2.js',
                decoderLocation: '/dependencies/websocket-player/video-worker2.js',
                preferredMediaProvider: mediaProvider,
                forceFlashForWebRTCBrowser: true,
                maxBitRate: 100
            });

        } catch(e) {
            console.log("catch flashPhoner", e);
            $("#notifyFlash").text("Your browser doesn't support Flash or WebRTC technology necessary for work of an example");
            return;
        }

        //video display
        remoteVideo = document.getElementById("remoteVideo");
        console.log("remote video");

        this.start();        
    }

    start() {
        console.log("phoner start");
        if (Flashphoner.getMediaProviders()[0] == "WSPlayer") {
            Flashphoner.playFirstSound();
        }

        // load balancer
        //var host = 'rainbow.whenspeak.ru';
        
        var host = 'pikachu.whenspeak.ru';
        var node = host;
        console.log('Connection to node: ' + node);    
        //var url = 'wss://' + node + ':8443';
        var url = 'wss://' + host + ':8443';
        //check if we already have session
        if (Flashphoner.getSessions().length > 0) {
            var session = Flashphoner.getSessions()[0];
            if (session.getServerUrl() == url) {
                console.log("отстреливаем phoner");
                plays(session);
                return;
            } else {
                //remove session DISCONNECTED and FAILED callbacks
                session.on(SESSION_STATUS.DISCONNECTED, function(){});
                session.on(SESSION_STATUS.FAILED, function(){});
                session.disconnect();
            }
        }
        //create session
        console.log("Create new session with url " + url);
        Flashphoner.createSession({urlServer: url}).on(SESSION_STATUS.ESTABLISHED, function(session){
            console.log("open >>>", session.status())
            //setStatus(session.status());
            //session connected, start playback
            playStream(session);
        }).on(SESSION_STATUS.DISCONNECTED, function(){
            console.log("disconected >>>", session.status())
            //setStatus(SESSION_STATUS.DISCONNECTED);
            onStopped();
        }).on(SESSION_STATUS.FAILED, function(){
            console.log("filed>>>", session.status())
            //setStatus(SESSION_STATUS.FAILED);
            onStopped();
        });            
    }
        
    playStream(session) {
        var streamName = urlParams.room;
        var options = {
            name: streamName,
            display: remoteVideo
        };
        
        var resolution = this.calculate_video_size();
        options.playWidth = resolution.width;
        options.playHeight = resolution.height;
            
        stream = session.createStream(options).on(STREAM_STATUS.PLAYING, function(stream) {
            document.getElementById(stream.id()).addEventListener('resize', function(event){
                var streamResolution = stream.videoResolution();
                if (Object.keys(streamResolution).length === 0) {
                    resizeVideo(event.target);
                } else {
                    // Change aspect ratio to prevent video stretching
                    var ratio = streamResolution.width / streamResolution.height;
                    var newHeight = Math.floor(options.playWidth / ratio);
                    resizeVideo(event.target, options.playWidth, newHeight);
                }
            });
            stream.setVolume(currentVolumeValue);
            //setStatus(stream.status());
        }).on(STREAM_STATUS.STOPPED, function() {
            //setStatus(STREAM_STATUS.STOPPED);
        }).on(STREAM_STATUS.FAILED, function() {
            //setStatus(STREAM_STATUS.FAILED);
        }).on(STREAM_STATUS.NOT_ENOUGH_BANDWIDTH, function(stream){
            console.log("Not enough bandwidth, consider using lower video resolution or bitrate. Bandwidth " + (Math.round(stream.getNetworkBandwidth() / 1000)) + " bitrate " + (Math.round(stream.getRemoteBitrate() / 1000)));
        });
        stream.play();
        
        /*
        setInterval(function(){
            console.log(stream)
            console.log("Bandwidth " + (Math.round(stream.getNetworkBandwidth() / 1000)) + " bitrate " + (Math.round(stream.getRemoteBitrate() / 1000)));
        }, 1000);
        */
    }

    calculate_video_size(){
        var ratio = 320 / 240;
        var dpt = window.devicePixelRatio;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var width = 0; 
        var height = 0;
        
        var dpt = window.devicePixelRatio;

        if(windowHeight > windowWidth){
            width = windowWidth;
            height = parseInt(windowWidth / ratio);
        } else {
            width = parseInt(windowHeight * ratio);
            height = windowHeight;
        }
        
        $('#remoteVideo').height(height);
        $('#remoteVideo').width(width);

        return {width: width, height: height};
    }
    
}


export default FlashPhonerPlayer;




//show connection or remote stream status
/*function setStatus(status) {
    var statusField = $("#status");
    statusField.text(status).removeClass();
    if (status == "PLAYING") {
        statusField.attr("class","text-success");
    } else if (status == "DISCONNECTED" || status == "ESTABLISHED" || status == "STOPPED") {
        statusField.attr("class","text-muted");
    } else if (status == "FAILED") {
        statusField.attr("class","text-danger");
    }
}*/

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
		urlParams[decode(match[1])] = decode(match[2]);
		console.log("urlParams", urlParams);

	 urlParams["room"] = 4212;	
})();