class Player extends Object {
    constructor(x,y,width,height,hitX,hitY){
        super(x,y,width,height,hitX,hitY,0,"media/test.png")
        this.slowdownFactor = 1.25
    }
    update(){
        var ccc = document.getElementById("SCREEN")
        if (this.yVel < 30) {
            this.yVel += gravity/smoothingFactor;
        } else {
            this.yVel -= gravity/smoothingFactor;
        }
        if (dPressed == true) {
            if (this.xVel < 75) {
                this.xVel += 12
            }
        }
        if (aPressed == true) {
            if (this.xVel > -75) {
                this.xVel -= 12
            }
        }
        if (wPressed == true) {
            if (this.y >= ccc.height-this.hitboxY) {
            this.yVel = -45
            }
        }
        this.xVel /= (1 + (0.5/smoothingFactor)); //slowdown factor
        if (this.y > ccc.height-this.hitboxY) {
            this.y = ccc.height-this.hitboxY
            this.yVel = 0;
        }
        if (this.x > ccc.width-this.hitboxX) {
            this.x = ccc.width-this.hitboxX
        }
        if (this.x < 0) {
            this.x = 0
        }
        this.y += this.yVel/smoothingFactor
        this.x += this.xVel/smoothingFactor
        super.update()
    }
}
