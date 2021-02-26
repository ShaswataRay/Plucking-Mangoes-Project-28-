class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }


    display(){
        if(this.launcher.bodyA){
        strokeWeight(4);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
    
}