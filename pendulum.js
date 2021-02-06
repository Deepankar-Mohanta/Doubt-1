class Pendulum{
    constructor(x, y, color){
        var option={
            restitution: 1,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia: Infinity,
            isStatic:false
        }

        this.circle=Bodies.circle(x, y, 50, option);
       // this.x=x;
        //this.y=y;
        this.color=color;
        World.add(world, this.circle);
    }
    display(){
        
       
        ellipseMode(RADIUS);
        fill(this.color);
        stroke(8, 247, 254);
        strokeWeight(5);
        ellipse(this.circle.position.x, this.circle.position.y, 50, 50);
        
    }
}