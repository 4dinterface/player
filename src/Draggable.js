class Draggable {

    constructor ( target , wrapper){
        this.target = target;
        this.onDragStart= this.onDragStart.bind(this);
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

    destroy(){
        this.target.removeEventListener("mousedown", this.onDragStart);
        document.removeEventListener("mousemove", this.onDragMove);
        document.removeEventListener("mouseup", this.onClick);

        this.target.removeEventListener("touchstart", this.onTouchStart);  
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
    }

    //TOUCH
    onTouchStart(e) {
        console.log("---==== touch start ===---");
        console.log(e.target);

        if(e.target.tagName !== "VIDEO" && e.target.id !== "dragdropdiv" )
            return;
            

        document.addEventListener("touchmove", this.onTouchMove);
        document.addEventListener("touchend", this.onTouchEnd);

        var touch = e.changedTouches[0];
        this.startX = touch.screenX; 
        this.startY = touch.screenY;
        e.stopPropagation();
    }

    onTouchMove(e){
        this.isMove = true;
        var touch = e.changedTouches[0];
        
        var top = touch.screenY - this.startY;
        var left =  touch.screenX - this.startX;
        this.setPosition(left, top);
       
        e.preventDefault();
        e.stopPropagation();
       // console.log((rect.top + (this.startX - e.clientX)) + "px");    

        this.startX = touch.screenX; 
        this.startY = touch.screenY;
    }

    onTouchEnd (e) {
        this.isMove = false;
        console.log("mouseup");
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
    }    

    //MOUSE
    onDragStart (e) {
        console.log("!!!!!!!!!!!!!!!!!!");
        
        if(e.target.tagName !== "VIDEO" && e.target.id !== "dragdropdiv" )
            return;
        
        //console.log("e", e);
        document.addEventListener("mousemove", this.onDragMove);
        //document.addEventListener("mouseup", this.onDragEnd);
        document.addEventListener("click", this.onClick, true);

        this.startX = e.clientX; 
        this.startY = e.clientY; 
        //e.stopPropagation();
    }

    onDragMove (e) {
        var topOffset = e.clientY - this.startY,
            leftOffset =  e.clientX - this.startX;     
            
        this.setPosition(leftOffset, topOffset);    

        this.startX = e.clientX; 
        this.startY = e.clientY;
        this.isMove=true;
    }

 
    onClick(e){
        document.removeEventListener("mousemove", this.onDragMove);
        //document.removeEventListener("mouseup", this.onDragEnd);
        document.removeEventListener("mouseup", this.onClick);

        if(this.isMove){
            e.preventDefault();
            e.stopPropagation();    
        }
        this.isMove=false;
        console.log("click");
        
    }

    setPosition(left, top){
        var docRect = document.body.getBoundingClientRect(),
            rect = this.target.getBoundingClientRect(),
            width = Math.round(docRect.width),
            height = Math.round(docRect.height),
            newTop = top + rect.top, //+ pageYOffset,
            newLeft = left + rect.left;// + pageXOffset;

        newTop = newTop > 0 ? newTop : 0;
        newLeft = newLeft > 0 ? newLeft : 0;
       
        //console.log(width);

        newLeft = newLeft>width - rect.width + 60 ? width - rect.width + 60 : newLeft;
        //top = top > height - rect.height ? width - rect.height : top; 
         // TODO заблокировать перемещение вправо
        this.target.style.top = newTop + "px";
        this.target.style.left = newLeft + "px";
    }
}

export default Draggable;