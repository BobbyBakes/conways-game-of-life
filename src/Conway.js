getConway = function(){

var currentCells = {};

var conway = {

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
		  },
		  
		  die : function() {
		    alive = false;
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
		  
		  addCell : function(cell) {
		    currentCells[cell.x + ":" + cell.y] = cell;
		  }
		};
		
		return currentGeneration;
	  }
	  
	}
return conway;
}