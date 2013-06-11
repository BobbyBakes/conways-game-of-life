describe("Cell", function() {

  var Conway = ConwayApp.getConway();
  var cell;
  beforeEach(function() {
    cell = Conway.generateNewCell(0, 1);
  });

  it("is dead by default", function() {
    expect(cell.isDead()).toBe(true);
  });
  
  it("#getX returns the x value that it was initialized with", function() {
    expect(cell.getX()).toBe(0);
  });
  
  it("#getY returns the y value that it was initialized with", function() {
    expect(cell.getY()).toBe(1);
  });
  
  describe("that is alive", function() {
  
  beforeEach(function(){
    cell.live();
  });

  
  it("#isAlive: returns true", function() {
    expect(cell.isAlive()).toBe(true);
  });
  
  it("#isDead: returns false", function() {
    expect(cell.isDead()).toBe(false);
  });
  
  it("#die: kills the cell", function(){
    cell.die()
    expect(cell.isDead()).toBe(true);
  });
  });
  
  describe("that is dead", function() {
  
    it("#isDead:returns true", function(){
    expect(cell.isDead()).toBe(true);
  });
  
    it("#live: brings a cell to life", function() {
      cell.live();
    
      expect(cell.isAlive()).toBe(true);
    });
  
  });
  
});
