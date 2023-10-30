class Player extends Object {
    constructor(x,y,width,height,hitX,hitY){
        super(x,y,width,height,hitX,hitY,0,"media/test.png")
        this.slowdownFactor = 1.25
    }
    update(){
        if (this.yVel < 30) {
            this.yVel += gravity/smoothingFactor;
        } else {
            this.yVel -= gravity/smoothingFactor;
        }
        if (dPressed == true) {
            if (this.xVel < 75) {
                this.xVel += 6
            }
        }
        if (aPressed == true) {
            if (this.xVel > -75) {
                this.xVel -= 6
            }
        }
        if (wPressed == true) {
            if (this.y >= screenHeight-190) {
            this.yVel = -45*0.75
            }
        }
        this.xVel /= (1 + (0.5/smoothingFactor)); //slowdown factor
        if (this.y > screenHeight-190) {
            this.y = screenHeight-190
            this.yVel = 0;
        }
        if (this.x > screenWidth-this.width) {
            this.x = screenWidth-this.width
        }
        if (this.x < 0) {
            this.x = 0
        }
        this.y += this.yVel/smoothingFactor
        this.x += this.xVel/smoothingFactor
        super.update()
    }
}
