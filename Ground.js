class Ground{
    constructor(x,y,w,h){
        var option={isStatic:true}
        this.body= bodies.rectangle(x,y,w,h,option)
        
        this.w=w
        this.h = h
        world.add( wor,this.body)

    }

      display(){
          var pos = this.body.position
          fill("MAROON")
          rectMode(CENTER)
      rect(pos.x,pos.y,this.w,this.h)
     }
}