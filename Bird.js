class Bird{
    constructor(x,y,w,h){
        var option={'restitution':0.8,'density':1.0,'friction':1.0}
        this.body= bodies.rectangle(x,y,w,h,option)
      this.image=loadImage("sprites/bird.png")
        this.w=w
        this.h = h
       this.trajectory=[]
       this.smokeimage=loadImage("sprites/smoke.png")
        world.add( wor,this.body)
    }

      display(){
        push()
        var pos = this.body.position
        //pos.y=mouseY
        //pos.x=mouseX
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
    image(this.image,0,0,this.w,this.h)
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var loop=[pos.x,pos.y]
      this.trajectory.push(loop)
    }
    
    for(var i = 0 ; i< this.trajectory.length;i++){
    image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
    }
    
    pop()
     }
}