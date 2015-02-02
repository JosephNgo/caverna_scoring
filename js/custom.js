$(".cust-btn").click(function(){
  $(".tab-pane").hide();
  var toggleClick = $(this);
  var toggleDiv = "#" + $(this).data("slideId");
  $(toggleDiv).slideToggle(1000);
})

var subtract = function(elementId){
  var elementId = "#" + $(elementId).data("item");
  // use data-item="something" in the HTML instead of id="sub_something"
  // data is a better way to store information in the DOM than id or class
  var updatedVal = $(elementId).val();
  updatedVal--;
  $(elementId).val( updatedVal );
  updateScore();
};
// the add function below can be updated in the same way
// refer to the HTML to see the changes made there

var add = function(elementId){
  // var elementId = $(this).attr("class"); //this keeps returning 'undefined'
  var elementId = "#" + $(elementId).data("item");
  var updatedVal = $(elementId).val();
  updatedVal++;
  $(elementId).val( updatedVal );
  updateScore();
};

var tileMap = {
  // is "tileMap" the best way to describe this object? or is that how it's referred to in the game?
  // just wondering if there might be a better variable name for this.
  // instead of an array to hold the multiplier values, use another object so
  // that the key can be used in the function to more easily understand the logic
  // example:
  // "dog" : { "zero" : 0, "positive" : 1 },
  // where if the player has "zero" of the item, then the multiplier is 0, and
  // if the player has a "positive" value for the item, then the multiplier is 1 ...
  // or whatever else the value may be
  "sheep" : { "zero" : -1, "positive" : 1 },
  "dog" : { "zero" : -1, "positive" : 1 },
  "donkey" : { "zero" : -1, "positive" : 1 },
  "boar" : { "zero" : -1, "positive" : 1 },
  "cattle" : { "zero" : -1, "positive" : 1 },
  "grain" : { "zero" : 0, "positive" : 0.5 },
  "vegetable" : { "zero" : 0, "positive" : 1 },
  "ruby" : { "zero" : 0, "positive" : 1 },
  "gold" : { "zero" : 0, "positive" : 1 },
  "begging" : { "zero" : 0, "positive" : -3 },
  "dwarf" : { "zero" : 0, "positive" : 3 },
  "dwelling" : { "zero" : 0, "positive" : 2 }
};

var tileData = function(){
  var sum = 0;
  
  $(".tileData").each(function(){
    var item = $(this).attr('id');
    // perhaps "item" is a better descriptor  than "id" for each single item in the list above
    // (ie. "dog", "sheep", etc.) ... but this is just a personal opinion.
    // i could be convinced that "id" is equally suitable
    var inputData = parseInt($(this).val());
    var multiplier = inputData == 0 ? "zero" : "positive";
    // this is another way to write if inputData is equal to 0, then multiplier = "zero",
    // else multiplier = "positive"
    // if it's possible for inputData to be less than 0, as you originally wrote it,
    // then "zero" can easily be changed to some other identifier, and
    // the if statement can change the boolean from inputData == 0 to inputData < 1
    // sum += inputData * tileMap[item][multiplier];
    // sum is equal to inputData multiplied by the multiplier of the tileMap's item
    // tileMap[dog][positive] = 1
    // tielMap.dog.positive = 1
    // this is where using the object inside of the object comes in handy, as tileMap[item][multiplier]
    // should be easier to understand than tileMap[id][1]
    // sum += tileMap[item][multiplier];
    // console.log(item + ":" + inputData + ":" + multiplier);
    // console.log(tileMap[item][multiplier]);

    if(inputData < 1){
      sum += tileMap[item][multiplier];
    }
    else {
      sum += inputData * tileMap[item][multiplier];
    }
  });
  console.log(sum);
  return Math.round(sum);
};

$(".simpleAddTile").click(function(){
  updateScore();
})

var simpleAddTileSum = function() {
  var sum = 0;
  $(".simpleAddTile").each(function(){
    if($(this).is(":checked")){
      sum += parseInt($(this).val());
    }
  })
  console.log(sum);
  return sum;
}

var updateScore = function(){
  var totalScore = tileData() + simpleAddTileSum();
  updateScoreHTML(totalScore);
  return totalScore;
}

var updateScoreHTML = function(totalScore){
  document.getElementById("score").innerHTML = ( totalScore );
}

window.onload = updateScore();
// function wishlist
