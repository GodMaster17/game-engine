class Snow extends Object {
    constructor(x,y,xVel,yVel,snowSize,snowHitbox) {
        super(x,y,snowSize,snowSize,snowHitbox,snowHitbox,0,"media/snow.webp")
        this.xVel = xVel
        this.yVel = yVel
    }
    update() {
        
        if (this.y >= screenHeight) {
            super.deleteMe()
        }
        if (this.x >= screenWidth+sssssssssss) {
            super.deleteMe()
        }
        if (this.y < -15) {
            super.deleteMe()
        }
        if (this.x < -15-sssssssssss) {
            super.deleteMe()
        }
        this.y += this.yVel/2/smoothingFactor
        this.x += this.xVel/2/smoothingFactor
        super.update()
    }
}
