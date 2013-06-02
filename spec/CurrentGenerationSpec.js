describe("CurrentGeneration", function(){
  var generation;
  var Conway;
  
  beforeEach(function() {
    Conway = ConwayApp.getConway();
  });
  
  it("does not have any cells by default", function() {
    generation = Conway.getCurrentGeneration();
	
	expect(Object.keys(generation.getCells()).length).toBe(0);
  });
  
  it("allows you to add cells", function() {
    var newCell = Conway.generateNewCell(1,1);
	
	generation.addCell(newCell);
	
	expect(Object.keys(generation.getCells()).length).toBe(1);
  });
});