describe("a generation", function(){
  var generation;
  var Conway;
  
  beforeEach(function() {
    Conway = getConway();
  });
  
  it("does not have any cells by default", function() {
    generation = Conway.getCurrentGeneration();
	
	expect(Object.keys(generation.getCells()).length).toBe(0);
  });
});