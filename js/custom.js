


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

document.getElementById("couplesDwelling").addEventListener("click", function(){
  couplesDwelling();
  updateScore();
});

var additionalDwelling = function(){
  if(document.getElementById("additionalDwelling").checked == true){
    return 5;
  }
  else {
    return 0;
  }
}

document.getElementById("additionalDwelling").addEventListener("click", function(){
  additionalDwelling();
  updateScore();
});

var updateScore = function(){
  var totalScore = dog() + sheep() + donkey() + boar() + cattle() + grain() + vegetable() + ruby() +gold() + begging() + dwarf() + dwelling() + simpleDwelling() + mixedDwelling() + couplesDwelling() + additionalDwelling();
  document.getElementById("score").innerHTML = ("My Score: " + totalScore );
}

updateScore();
// function wishlist

var tabsContainer = ".tabs-container";
var selectTabHandler = function(event){
  $tab = $(this);
  $(tabsContainer + " li").removeClass('active');
  $tab.parent().addClass('active');
  selectedTabName = $tab.attr('href');
  console.log(selectedTabName);
  $(".tab-pane").addClass('hidden');
  $(selectedTabName).removeClass('hidden');
  event.preventDefault();
};