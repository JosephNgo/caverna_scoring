


var subtract = function(clicked_id){
  mystring=clicked_id.replace(/^sub_/,"");
  var subvalue = parseInt(document.getElementById(mystring).value);
  subvalue --;
  document.getElementById(mystring).value = subvalue;
  updateScore();
};

var add = function(clicked_id){
  mystring=clicked_id.replace(/^add_/,"");
  var subvalue = parseInt(document.getElementById(mystring).value);
  subvalue ++;
  document.getElementById(mystring).value = subvalue;
  updateScore();
};

var getMultiplier = function(){
  return 1;
}

var dog = function(){
  subvalue = parseInt(document.getElementById("dog").value);
  return subvalue;
}

var sheep = function(){
  subvalue = parseInt(document.getElementById("sheep").value);
  if (subvalue < 1){
    return -2;
  }
  else {
    return subvalue;
  }
}

var donkey = function(){
  subvalue = parseInt(document.getElementById("donkey").value);
  if (subvalue < 1){
    return -2;
  }
  else {
    return subvalue;
  }
}

var boar = function(){
  subvalue = parseInt(document.getElementById("boar").value);
  if (subvalue < 1){
    return -2;
  }
  else {
    return subvalue;
  }
}

var cattle = function(){
  subvalue = parseInt(document.getElementById("cattle").value);
  if (subvalue < 1){
    return -2;
  }
  else {
    return subvalue;
  }
}

var grain = function(){
  subvalue = parseInt(document.getElementById("grain").value);
  return Math.round(subvalue/2);
}

var vegetable = function(){
  subvalue = parseInt(document.getElementById("vegetable").value);
  return subvalue;
}

var ruby = function(){
  subvalue = parseInt(document.getElementById("ruby").value);
  return subvalue;
}

var gold = function(){
  subvalue = parseInt(document.getElementById("gold").value);
  return subvalue;
}

var begging = function(){
  subvalue = parseInt(document.getElementById("begging").value);
  return -(subvalue*3);
}

var dwarf = function(){
  subvalue = parseInt(document.getElementById("dwarf").value);
  return subvalue*3;
}

var dwelling = function(){
  subvalue = parseInt(document.getElementById("dwelling").value);
  return subvalue*2;
  updateScore();
}

var simpleDwelling = function(){
  if(document.getElementById("simpleDwelling").checked == true){
    return 0;
  }
  else {
    return 0;
  }
}

document.getElementById("simpleDwelling").addEventListener("click", function(){
  simpleDwelling();
  updateScore();
});

var mixedDwelling = function(){
  if(document.getElementById("mixedDwelling").checked == true){
    return 4;
  }
  else {
    return 0;
  }
}

document.getElementById("mixedDwelling").addEventListener("click", function(){
  mixedDwelling();
  updateScore();
});

var couplesDwelling = function(){
  if(document.getElementById("couplesDwelling").checked == true){
    return 5;
  }
  else {
    return 0;
  }
}

// document.getElementById("couplesDwelling").addEventListener("click", function(){
//   couplesDwelling();
//   updateScore();
// });

var additionalDwelling = function(bonusValue){
  if(document.getElementById("additionalDwelling").checked == true){
    return 5;
  }
  else {
    return 0;
  }
}

// document.getElementById("additionalDwelling").addEventListener("click", function(){
//   additionalDwelling();
//   updateScore();
// });
var checkboxStatus = function(tileId, bonusValue){
  if(document.getElementById(tileId).checked == true){
    console.log("checked");
    addPoints(bonusValue);
  }
  else {
    console.log("unchecked");
    addPoints(bonusValue*(-1));
  }
}

var addPoints = function(bonusValue){
  console.log("add points:" + bonusValue);
  updateScore2(bonusValue);
}

//function to find the id of 'this' mini-tile
$(".mini-tile").click(function(){
  var tileId = ($(this).find("input").attr("id"));
  console.log(tileId);
  var bonusValue = ($(this).find(".bonus-shield").html());
  console.log(parseInt(bonusValue));
  window[tileId](bonusValue);
  checkboxStatus(tileId, bonusValue);
  updateScore();

})

document.getElementById("carpenter").addEventListener("click", function(){
  addFive("carpenter");

});

document.getElementById("blacksmith").addEventListener("click", function(){
  addFive("blacksmith");

});

var tileMap = {
  "dog": [1,.5],
  "sheep": [1,-1],
  "dwarf": [3,0],
  "dwelling": [2,0]
};

var tileData = function(){
  var sum = 0;

  $(".tileData").each(function(){
    var id = $(this).attr('id');
    if (parseInt($(this).val())<1){
      var penalty = tileMap[id][1];
      sum += penalty;
    }
    else {
      var multiplier = tileMap[id][0];
      sum += (parseInt($(this).val())*multiplier);
    }
  })
  return sum;
}

var placeholderScore = 0;

var updateScore2 = function(scoreData) {
  placeholderScore += parseInt(scoreData);
  
  
  if (placeholderScore !== placeholderScore) {
    return 0;
  }
  else {
    return placeholderScore;
  }
  console.log("updateScore2:" + placeholderScore);
}


var updateScore = function(){
  var totalScore = updateScore2() + dog() + sheep() + donkey() + boar() + cattle() + grain() + vegetable() + ruby() +gold() + begging() + dwarf() + dwelling() + simpleDwelling() + mixedDwelling() + couplesDwelling() + additionalDwelling();
  updateScoreHTML(totalScore);
  return totalScore;
}

var updateScoreHTML = function(totalScore){
  document.getElementById("score").innerHTML = ("My Score: " + totalScore );
}

window.onload = updateScore();
// function wishlist
