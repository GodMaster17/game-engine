// 0: STATIC
// 1: SPRITESHEET
// 2: SPRITES (separate files)

// 1 FORMAT:
// [
// spriteSheet_src
//  sprites = [
//    [x,y,width,height,offsetX,offsetY]
//  ]
//]
// 2 FORMAT:
// sprites = [
// [src, offsetX, offsetY]
//]
// 0 FORMAT:
// src
function deleteObject(o) {
    let oo = spriteList.splice(spriteList.indexOf(o),1)
     //oo[0].obj.remove()
     delete oo[0]
 }
 class Object {
     constructor(x,y,width,height,hitboxX,hitboxY,type,spriteStuff){
     //    this.obj = document.createElement("img")
     //    this.obj.className = "sprite"
     //    this.obj.style.display = "none"
         this.x = x
         this.y = y
         this.xVel = 0
         this.yVel = 0
         this.width = width
         this.height = height
         this.hitboxX = hitboxX
         this.hitboxY = hitboxY
         this.spriteType = type
         this.currentFrame = 0
         //document.getElementById("SPRITES").append(this.obj);
         if (type == 0 ) {
             this.src = spriteStuff
         //    this.obj.src = this.src
         } else if (type == 1) {
             this.spriteSheet = spriteStuff["spriteSheet_src"]
             this.sprites = spriteStuff["sprites"]
         } else if (type == 2) {
             this.sprites = spriteStuff
         }
     }
     update(){
         if (this.spriteType == 0) {
             var canvas = document.getElementById("BUFFER")
             var ctx = canvas.getContext("2d")
             var xC = this.x
             var yC = this.y
             var width = this.width
             var height = this.height
             var img = new Image()
             img.onload = function(){
                 ctx.drawImage(img,xC,yC,width,height)
             }
             img.src = this.src
 
         }
         //document.getElementById()
         //this.obj.width = this.width
         //this.obj.height = this.height
         //this.obj.style.left = this.x + "px";
         //this.obj.style.top = this.y + "px";
         //this.obj.style.display = ""
     }
     deleteMe() {
//         this.obj.remove()
         deleteObject(this)
     }
 }
 
 //new Format
 // anims = [
 // [[frame, duration] and so on]
 //]
 //
