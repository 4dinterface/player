export default {

	isMediaSourceSupported: function(){
		return "MediaSource" in window;
	},

	//хорошо бы заюзать
	isCodecSupported: function(codec) {
		return this.isMediaSourceSupported() && MediaSource.isTypeSupported(codec)
	},

	is_safari: navigator.userAgent.toLowerCase().indexOf('safari/') > -1 && navigator.userAgent.toLowerCase().indexOf('chrome/') == -1,

	iosX: (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)),
	
	getSafaryVersion:function(){
		//alert(navigator.userAgent.toLowerCase());
		return this.is_safari ? (navigator.userAgent.split("Version/")[1]).split(" ")[0] : null;
	}

}