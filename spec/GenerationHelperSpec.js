describe("GenerationHelper" , function() {
  
  var conway;
  
  beforeEach( function(){
    conway = ConwayApp.getConway();
  });
  
  describe("inspecting a cell at 1, 1", function(){
    
	var cell;
	var currentGeneration;
	
	beforeEach(function() {
	  cell = conway.generateNewCell(1,1);
      currentGeneration = conway.getCurrentGeneration();
	  currentGeneration.addCell(cell);
	});

	describe("#getLiveNeigborsForCell", function() {
	  var liveNeighbor;
	
      describe("with a live neighbor at 0,0", function(){

	    
		
		beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(0,0).live();
	      currentGeneration.addCell(liveNeighbor);
        });
		
	    it("returns one live neighor", function() {
	      var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		  expect(liveCells.length).toBe(1);
	    });
	   });
	   
	   describe("with a live neighbor at 0,1", function() {
		
		beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(0,1).live();
	      currentGeneration.addCell(liveNeighbor);
        });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });
	   
	   describe("with a live neighbor at 0,2", function() {
		
		beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(0,2).live();
	      currentGeneration.addCell(liveNeighbor);
        });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });
	   
	   describe("with a live neighbor at 1,2", function() {
		
		 beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(1,2).live();
	      currentGeneration.addCell(liveNeighbor);
         });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });
	   
	   describe("with a live neighbor at 2,2", function() {
		
		 beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(2,2).live();
	      currentGeneration.addCell(liveNeighbor);
         });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });
	   
	   describe("with a live neighbor at 2,1", function() {
		
		 beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(2,1).live();
	      currentGeneration.addCell(liveNeighbor);
         });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });

	   describe("with a live neighbor at 2,0", function() {
		
		 beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(2,0).live();
	      currentGeneration.addCell(liveNeighbor);
         });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });
	   
	   describe("with a live neighbor at 1,0", function() {
		
		 beforeEach( function(){
       	  liveNeighbor = conway.generateNewCell(1,0).live();
	      currentGeneration.addCell(liveNeighbor);
         });
	   
	     it("returns one live neighor", function() {
	       var liveCells = ConwayApp.GenerationHelper.getLiveNeighborsForCell(cell , currentGeneration);
		   
		   expect(liveCells.length).toBe(1);
	     });
	   });

    });
	
  
  });

  describe("#cellShouldLive", function() {
    var cell;
	
	beforeEach(function() {cell = conway.generateNewCell(1,1);});
	
	describe("when the cell is alive", function() {
	  beforeEach(function(){cell.live()});
	  
	  it("returns false, when there are 0 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there is 1 live neighbor", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns true, when there are 2 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2]);
	    expect(shouldLive).toBe(true);
	  });
	  
	  it("returns true, when there are 3 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3]);
	    expect(shouldLive).toBe(true);
	  });
	  
	  it("returns false, when there are 4 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 5 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 6 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 7 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6, 7]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 8 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6, 7, 8]);
	    expect(shouldLive).toBe(false);
	  });
	});
	
	describe("when the cell is dead", function() {
	
	  beforeEach(function(){cell.die()});
	
	  it("returns false, when there are 0 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there is 1 live neighbor", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1]);
	    expect(shouldLive).toBe(false);
	  });
	
	  it("returns false, when there are 2 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns true, when there are 3 live neighbors, as if by reproduction", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3]);
	    expect(shouldLive).toBe(true);
	  });
	  
	  it("returns false, when there are 4 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 5 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 6 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 7 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6, 7]);
	    expect(shouldLive).toBe(false);
	  });
	  
	  it("returns false, when there are 8 live neighbors", function() {
	    var shouldLive = ConwayApp.GenerationHelper.cellShouldLive(cell,[1, 2, 3, 4, 5, 6, 7, 8]);
	    expect(shouldLive).toBe(false);
	  });
	});
  });  
});