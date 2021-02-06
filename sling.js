class Sling {

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:500
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        
        World.add(world,this.sling);

    }
        
    display(){

        var posA = this.sling.bodyA.position;
        var pointB=this.pointB
       

        push();
        stroke(8, 247, 254);
        strokeWeight(5);
        line(posA.x,posA.y,pointB.x,pointB.y);
        pop();

    }

}