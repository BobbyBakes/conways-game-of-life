describe("Conway", function(){
  var Conway = getConway();

  it("#generateNewCell returns a cell with the x and y attributes populated", function() {
    var cell = Conway.generateNewCell(0, 1);
	
	expect(cell.getX()).toBe(0);
	expect(cell.getY()).toBe(1);
  });
  
  it("#generateNewCell throws an error if both attributes are not populated", function() {
    
	var generateBadCell = function() {
	  Conway.generateNewCell(1);
	};
	
	expect(generateBadCell).toThrow();
  });
	
  it("#generateNewCell throws an when error attributes are not Numbers", function() {
    var generateBadCell = function() {
	  Conway.generateNewCell("1", "2");
	};
	
	expect(generateBadCell).toThrow();
  });
  
});