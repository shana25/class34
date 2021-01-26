class Rope
{
 constructor(body1,point2)
{
 var options=
 {
     bodyA : body1,
     pointB : point2,
     stiffness : 0.05,
     length : 250
 }
 
  this.sling = Constraint.create(options)
  World.add(world,this.sling)
  
}

fly()
{
  this.sling.bodyA=null;
  //this funtion will detach the birds body fron the sling
}

display()
{
  if(this.sling.bodyA)
  {
     line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
  }
}



}