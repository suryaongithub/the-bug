class Box {
    constructor(w,h,pointA)
    {
        const group = Body.nextGroup(true);
  this.pointA = pointA;
  this.body = Composites.stack(100, 100,w, h, 0, 0, function(x, y) {
    return Bodies.rectangle(x, y, 30, 30, { collisionFilter: { group: group } });
});
      
  World.add(engine.world, this.body);
    }

    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length-1; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
             console.log("nice");
        }
    }

    drawVertices(vertices) 
    {
      beginShape();
      fill('orange')
      noStroke();
      
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }
}