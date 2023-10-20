class Snow extends Object {
    constructor(x,y,xVel,yVel,snowSize,snowHitbox) {
        super(x,y,snowSize,snowSize,snowHitbox,snowHitbox,0,"media/snow.webp")
        this.xVel = xVel
        this.yVel = yVel
    }
    update() {
        var ccc = document.getElementById("SCREEN")
        if (this.y >= ccc.height) {
            super.deleteMe()
        }
        if (this.x >= ccc.width) {
            super.deleteMe()
        }
        if (this.y < -15) {
            super.deleteMe()
        }
        if (this.x < -15) {
            super.deleteMe()
        }
        this.y += this.yVel/smoothingFactor
        this.x += this.xVel/smoothingFactor
        super.update()
    }
}
