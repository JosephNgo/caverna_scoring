
var subtract = function(){
  document.getElementById("dog").value --;
  updateScore();
};

var add = function(){
  document.getElementById("dog").value ++ ;
  updateScore();
};


var updateScore = function(){
  var totalScore = document.getElementById("dog").value;
  document.getElementById("score").innerHTML = ("Score: " + totalScore );
}

