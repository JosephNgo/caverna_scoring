$(".cust-btn").click(function(){
  $(".tab-pane").hide();
  var toggleClick = $(this);
  var toggleDiv = "#" + $(this).data("slideId");
  $(toggleDiv).slideToggle(1000);
})

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

var tileMap = {
  "dog": [0,1], // "inputID": [multiplier under 1, multiplier over 1]
  "sheep": [-1,1],
  "donkey": [-1,1],
  "boar": [-1,1],
  "cattle": [-1,1],
  "grain": [0, 0.5],
  "vegetable": [0, 1], 
  "ruby": [0,1],
  "gold": [0, 1],
  "begging": [0, -3],
  "dwarf": [0,3],
  "dwelling": [0,2]
};

var tileData = function(){
  var sum = 0;
  $(".tileData").each(function(){
    var id = $(this).attr('id');
    var inputData = parseInt($(this).val());
    var tileScore = 0;
    if (inputData < 1){
      var penalty = tileMap[id][0];
      tileScore = penalty;
      sum += tileScore;
    }
    else {
      var multiplier = tileMap[id][1];
      tileScore = inputData * multiplier;
      sum += tileScore;
    }
    
  })
  return Math.round(sum);
}

var checkboxStatus = function(tileId, bonusValue){
  if(document.getElementById(tileId).checked == true){
    console.log("checked");
    return(bonusValue);
  }
  else {
    console.log("unchecked");
    return(bonusValue*(-1));
  }
}

//function to find the id of 'this' mini-tile
// $(".mini-tile").click(function(){
//   var tileId = ($(this).find("input").attr("id"));
//   console.log(tileId);
//   var bonusValue = parseInt($(this).find(".bonus-shield").html());
//   console.log(bonusValue);
// })


$(".simpleAddTile").click(function(){
  // var bonusValue = $(this).val();
  // if($(this).is(":checked")){
  //   simpleAddTileSum(bonusValue);
  // }

  updateScore();
})

var simpleAddTileSum = function() {
  var sum = 0;
  // sum += bonusValue;


  $(".simpleAddTile").each(function(){
    if($(this).checked){
      sum += parseInt($(this).val());
      console.log("test");
    }
    console.log($(this).val());
  })
  // console.log(sum);
  return sum;
}

var updateScore = function(){
  var totalScore = tileData() + simpleAddTileSum();
  updateScoreHTML(totalScore);
  return totalScore;
}

var updateScoreHTML = function(totalScore){
  document.getElementById("score").innerHTML = ("My Score: " + totalScore );
}

window.onload = updateScore();
// function wishlist
