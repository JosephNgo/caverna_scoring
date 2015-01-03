


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

var updateScore = function(){
  var totalScore = dog() + sheep() + donkey() + boar() + cattle() + grain() + vegetable() + ruby() +gold() +begging();
  document.getElementById("score").innerHTML = ("My Score: " + totalScore );
}

updateScore();
// function wishlist