
ConwayApp = {

getConway : function(){

var currentCells = {};

var nextCells = {};

var conway = {

      cloneCell : function(oldCell) {
    var newCell = conway.generateNewCell(oldCell.getX(), oldCell.getY());
    
    if( oldCell.isAlive() ){
      newCell.live();
    }
    
    return newCell;
    },

    generateNewCell : function(x, y){
    
    if (typeof x != "number" || typeof y != "number"){
      throw "Error: initialize this object with an x and y value"
    }
    var x;
    var y;
    
    var alive = false;
    var cell =  {
      
      isAlive : function() {
      return alive;
      },
      
      isDead : function() {
      return !alive
      },
      
      live : function() {
      alive = true;
      return cell;
      },
      
      die : function() {
        alive = false;
      return cell;
      },
      
      getX : function() {
      return x;
      },
      
      getY : function() {
      return y;
      }
      
    };
    
    return cell;
    },

    getCurrentGeneration : function() {
    
    var currentGeneration = {
      getCells : function() {
      return currentCells;
      },
      
      getCellAt : function(x, y) {
        return currentCells[x + "," + y];
      },
      
      addCell : function(cell) {
        currentCells[cell.getX() + "," + cell.getY()] = cell;
      }
    };
    
    return currentGeneration;
    },
    
    getNextGeneration : function() {
      var getCopyOfCurrentCells = function() {
      var currentCells = conway.getCurrentGeneration().getCells();
      
      var cellKeys = Object.keys(currentCells);
      
      var nextCells = {};
      
      cellKeys.forEach( function(key) {
      
        nextCells[key] = conway.cloneCell(currentCells[key]);
      })
      
      return nextCells;
      
    }
    
    var newCells = getCopyOfCurrentCells();
    
    var nextGeneration = {
      getCells: function(){return newCells; },
      
      getCellAt : function(x, y) {
        return newCells[x + "," + y];
      },
      
    }; 
    
    return nextGeneration;
    }
    
  };
return conway;
}
};

ConwayApp.GenerationHelper = {
  cellShouldLive : function(cell, liveNeighbors) {
    if (liveNeighbors.length === 2 && cell.isAlive()) {
      return true;
    } else if (liveNeighbors.length === 3) {  
    return true;
  } else {
    return false;
  }
  },

  getLiveNeighborsForCell : function(cell , currentGeneration) {
    var currentCells = currentGeneration.getCells();
  var liveNeighbors = [];
  
  var currentX = cell.getX();
  var currentY = cell.getY();
  
  //cells that don't exist are treated as dead cells
    var neighborIsAlive = function(neighbor) {
    return (typeof neighbor != 'undefined' && neighbor.isAlive());
  }
  
  var pushLiveNeighbor = function(neighbor){
    if(neighborIsAlive(neighbor))
      liveNeighbors.push(neighbor);
  }
  
  var bottomLeftNeighbor = currentCells[(currentX - 1) + "," + (currentY - 1)];
  pushLiveNeighbor(bottomLeftNeighbor);
    
  var leftNeighbor = currentCells[(currentX - 1) + "," + currentY];
  pushLiveNeighbor(leftNeighbor);
  
  var topLeftNeighbor = currentCells[(currentX - 1) + "," + (currentY + 1)];
  pushLiveNeighbor(topLeftNeighbor);
  
  var topNeighbor = currentCells[(currentX) + "," + (currentY + 1)];
  pushLiveNeighbor(topNeighbor);
  
  var topRightNeighbor = currentCells[(currentX + 1) + "," + (currentY + 1)];
  pushLiveNeighbor(topRightNeighbor);
  
  var rightNeighbor = currentCells[(currentX + 1) + "," + currentY];
  pushLiveNeighbor(rightNeighbor);
  
  var bottomRightNeighbor = currentCells[(currentX + 1) + "," + (currentY - 1)];
  pushLiveNeighbor(bottomRightNeighbor);
  
  var bottomNeighbor = currentCells[(currentX) + "," + (currentY - 1)];
  pushLiveNeighbor(bottomNeighbor);
  
  return liveNeighbors;
  }
};
