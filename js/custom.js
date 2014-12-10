var totalScore = 0;
var subtract = function(){
  document.getElementById("dog").value --;
  updateScore();
};

var add = function(){
  document.getElementById("dog").value ++ ;
  updateScore();
};


var updateScore = function(){
  totalScore += 
  document.getElementById("score").innerHTML = ("Score: " + totalScore );
}

