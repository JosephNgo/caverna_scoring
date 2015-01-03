var totalScore = 0;

var subtract = function(){
  var subscore = 0;
  document.getElementById("dog").value --;
  subscore = document.getElementById("dog").value;
  updateScore(subscore);
};

var add = function(){
  var subscore = 0;
  document.getElementById("dog").value ++;
  subscore = Number(document.getElementById("dog").value);
  updateScore(subscore);
};


var updateScore = function(subscore){
  totalScore += subscore;
  document.getElementById("score").innerHTML = ("Score: " + totalScore );
}

// function wishlist