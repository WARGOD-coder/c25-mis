class paper
{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'isStatic':false,
            'friction':0,
            'density':1.2
        }
        this.image=loadImage("paper.png")
        this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world,this.body )
    }
    display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("lightblue");
            imageMode(CENTER)
            image(this.image,o,o,this.r)
			pop()
	}


}