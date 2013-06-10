describe("Conway", function(){
  //var Conway = ConwayApp.getConway();
  Conway = ConwayApp.getConway();
  describe("#getCurrentGeneration", function() {
    it("returns the current generation's model", function() {
      var currentGeneration = Conway.getCurrentGeneration();
	  
      expect(typeof currentGeneration).toBe("object");
    });
  });
  
  describe("#getNextGeneration", function() {
    describe("using a generation with 9 cells", function() {
	
     [0,1,2].forEach( function(xCoordinate){
       [0,1,2].forEach(function(yCoordinate){
         var cell = Conway.generateNewCell(xCoordinate,yCoordinate);
         Conway.getCurrentGeneration().addCell(cell);
       });
     });
	  
  describe("with a single live cell that should die", function(){	
    beforeEach(function() {
      Conway.getCurrentGeneration().getCellAt(1,1);
    });

    it("returns the generation that has been incremented by one turn", function() {
      var nextGen = Conway.getNextGeneration();

      var cellThatDied = nextGen.getCellAt(1,1);
      var oldCell = Conway.getCurrentGeneration().getCellAt(1,1);

      expect(oldCell.isAlive()).toBe(true);
      expect(cellThatDied.isAlive()).toBe(false);
    });
  });
  it("does not change the number of cells from the generation", function() {
    var currentGenSize = Object.keys(Conway.getCurrentGeneration().getCells()).length;
    var nextGenSize = Object.keys(Conway.getNextGeneration().getCells()).length;
		
    expect(nextGenSize).toEqual(currentGenSize);
  });
	  
	  it("creates new cells, that are independent of the old generation", function() {
		var oldCell = Conway.getCurrentGeneration().getCellAt(1,1);
	  
		var newCell = Conway.getNextGeneration().getCellAt(1,1);
		newCell.live();
		
		expect(newCell.isAlive()).toBe(true);
		expect(oldCell.isAlive()).toBe(false);
	  });
	});
  });
  
  describe("#generateNewCell", function() {
    it("returns a cell with the x and y attributes populated", function() {
      var cell = Conway.generateNewCell(0, 1);
	
	  expect(cell.getX()).toBe(0);
	  expect(cell.getY()).toBe(1);
    });
  
    it("throws an error if both attributes are not populated", function() {
    
	  var generateBadCell = function() {
	    Conway.generateNewCell(1);
	  };
	
	  expect(generateBadCell).toThrow();
    });
	
    it("throws an when error attributes are not Numbers", function() {
      var generateBadCell = function() {
	    Conway.generateNewCell("1", "2");
	  };
	
	  expect(generateBadCell).toThrow();
    });
  });
  
  describe("#cloneCell", function() {
  
    var originalCell;
	var clone;
	
	beforeEach(function() { originalCell = Conway.generateNewCell(1,2); });
  
    it("returns a new cell with the same x as the old cell", function() {
	  clone = Conway.cloneCell(originalCell);
	  
	  expect(clone.getX()).toEqual(originalCell.getX());
	});
	
    it("returns a new cell with the same y as the old cell", function() {
	  clone = Conway.cloneCell(originalCell);
	  
	  expect(clone.getY()).toEqual(originalCell.getY());
	});
	
	describe("when called on a live cell", function() {
	  beforeEach(function() {originalCell.live()});
	  it("returns a cell that is alive", function() {
	    clone = Conway.cloneCell(originalCell);
		expect(clone.isAlive()).toBe(true);
	  });
	});
  });
});
