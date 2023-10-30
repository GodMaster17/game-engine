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
        this.x = x
        this.y = y
        this.evaluatedSrc = ""
        this.xVel = 0
        this.yVel = 0
        this.spriteSpreadsheetInfo = {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "offsetX": 0,
            "offsetY": 0,
        }
        this.width = width
        this.height = height
        this.hitboxX = hitboxX
        this.hitboxY = hitboxY
        this.spriteType = type
        this.currentFrame = 0
        if (type == 0 ) {
            this.src = spriteStuff
            this.evaluatedSrc = this.src
        } else if (type == 1) {
            this.spriteSheet = spriteStuff["spriteSheet_src"]
            this.sprites = spriteStuff["sprites"]
        } else if (type == 2) {
            this.sprites = spriteStuff
        }
    }
    update(){
        //this.obj.style.left = this.x-camX + "px";
        //this.obj.style.top = this.y + "px";
        if (this.spriteType > 0) {
            if (this.spriteType == 1) {
                this.evaluatedSrc = this.spriteSheet
                this.spriteSpreadsheetInfo.x = this.sprites[this.currentFrame][0]
                this.spriteSpreadsheetInfo.y = this.sprites[this.currentFrame][1]
                this.spriteSpreadsheetInfo.width = this.sprites[this.currentFrame][2]
                this.spriteSpreadsheetInfo.height = this.sprites[this.currentFrame][3]
                this.spriteSpreadsheetInfo.offsetX = this.sprites[this.currentFrame][4]
                this.spriteSpreadsheetInfo.offsetY = this.sprites[this.currentFrame][5]
            }
        }
        var canvas = document.getElementById("SCREEN")
        var ctx = canvas.getContext("2d")
        var xC = this.x-(globals.camX-(screenWidth/2))
        var yC = this.y-globals.camY
        var width = this.width
        var height = this.height
        if (this.evaluatedSrc in imgList) {
            var img = document.getElementById(imgList[this.evaluatedSrc])
            ctx.drawImage(img,xC,yC,width,height)
        } else {
            var img = new Image()
            img.onload = function(){
                ctx.drawImage(img,xC,yC,width,height)
            }
            img.src = this.evaluatedSrc
            img.id = "CACHE" + imgCacheIdx
            document.getElementById("CACHE").append(img)
            imgList[this.evaluatedSrc] = "CACHE" + imgCacheIdx
            imgCacheIdx += 1
        }

        if (this.spriteType == 0) {

       }
        
        //this.obj.style.display = ""
    }
    deleteMe() {
        //this.obj.remove()
        deleteObject(this)
    }
}

//new Format
// anims = [
// [[frame,duration]]
//]
//
