class Pig{
    constructor(x,y,w,h){
        var option={'restitution':0.8,'density':1.0,'friction':0.3}
        this.body= bodies.rectangle(x,y,w,h,option)
        this.image=loadImage("sprites/enemy.png")
        this.w=w
        this.h = h
        this.Visiblity=255
        world.add( wor,this.body)

    }

      display(){
        push()
        var pos = this.body.position
        if(this.body.speed > 3){
          world.remove(wor,this.body)
          this.Visiblity=this.Visiblity-5
          tint(255,this.Visiblity)
          //imageMode(CENTER)
          image(this.image,pos.x,pos.y,this.w,this.h)
        }
        else{
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
          
        }
        //console.log(this.body.speed)
    pop()
     }
}