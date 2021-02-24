class Box{
    constructor(x,y,w,h){
        var option={'restitution':0.8,'density':1.0,'friction':1.0}
        this.body= bodies.rectangle(x,y,w,h,option)
        this.image=loadImage("sprites/wood1.png")
        this.w=w
        this.h = h

        world.add( wor,this.body)
    }

      display(){
        push()
          var pos = this.body.position
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          imageMode(CENTER)
      image(this.image,0,0,this.w,this.h)
      pop()
     }
}