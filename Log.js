class Log{
    constructor(x,y,w,h,angle){
        var option={'restitution':0.8,'density':1.0,'friction':1.0}
        this.body= bodies.rectangle(x,y,w,h,option)
       this.image=loadImage("sprites/wood2.png")
        this.w=w
        this.h = h
      Matter.Body.setAngle(this.body,angle)
      world.add( wor,this.body)
    }

      display(){
          push()

          var pos = this.body.position
          translate(pos.x,pos.y)
          imageMode(CENTER)
          rotate(this.body.angle)
      image(this.image,0,0,this.w,this.h)
         pop()
       
      
     }
}