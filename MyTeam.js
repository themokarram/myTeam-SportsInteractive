var list = document.getElementById("list");
var pitch = document.getElementById("pitch");
var field = document.getElementById("fieldpitch");
var totalplayers = document.getElementById("playerTable");
var plusicon1 = document.getElementById("plusicon1");
var minusicon1 = document.getElementById("minusicon1");
var plusicon2 = document.getElementById("plusicon2");
var minusicon2 = document.getElementById("minusicon2");
var plusicon3 = document.getElementById("plusicon3");
var minusicon3 = document.getElementById("minusicon3");
var plusicon4 = document.getElementById("plusicon4");
var minusicon4 = document.getElementById("minusicon4");
var plusicon5 = document.getElementById("plusicon5");
var minusicon5 = document.getElementById("minusicon5");
var plusicon6 = document.getElementById("plusicon6");
var minusicon6 = document.getElementById("minusicon6");
var plusicon7 = document.getElementById("plusicon7");
var minusicon7 = document.getElementById("minusicon7");
var plusicon8 = document.getElementById("plusicon8");
var minusicon8 = document.getElementById("minusicon8");

var addPlayer = document.getElementById("table-body1");
var addPlayer2 = document.getElementById("table-body2");
var addPlayer3 = document.getElementById("table-body3");
var addPlayer4 = document.getElementById("table-body4");
var addPlayer5 = document.getElementById("table-body5");
var addPlayer6 = document.getElementById("table-body6");
var addPlayer7 = document.getElementById("table-body7");
var addPlayer8 = document.getElementById("table-body8");

console.log(list);
console.log(pitch);

let activeButton = null;

list.onclick = function () {
  if (activeButton === list) {
    return;
  }

  if (activeButton) {
    activeButton.classList.remove("active");
  }

  activeButton = list;
  activeButton.classList.add("active");
  totalplayers.style.display = "block";
  field.style.display = "none";
};

pitch.onclick = function () {
  if (activeButton === pitch) {
    return;
  }

  if (activeButton) {
    activeButton.classList.remove("active");
  }

  activeButton = pitch;
  activeButton.classList.add("active");
  totalplayers.style.display = "none";
  field.style.display = "block";
};

function handleContinue() {
  field.style.display = "block";
  totalplayers.style.display = "none";
}

function handleplus() {
  plusicon1.style.display = "none";
  minusicon1.style.display = "block";
  addPlayer.classList.add("playerAdded");
}
function handleminus() {
  plusicon1.style.display = "block";
  minusicon1.style.display = "none";
  addPlayer.classList.remove("playerAdded");
}
function handleplus2() {
  plusicon2.style.display = "none";
  minusicon2.style.display = "block";
  addPlayer2.classList.add("playerAdded");
}
function handleminus2() {
  plusicon2.style.display = "block";
  minusicon2.style.display = "none";
  addPlayer2.classList.remove("playerAdded");
}
function handleplus3() {
  plusicon3.style.display = "none";
  minusicon3.style.display = "block";
  addPlayer3.classList.add("playerAdded");
}
function handleminus3() {
  plusicon3.style.display = "block";
  minusicon3.style.display = "none";
  addPlayer3.classList.remove("playerAdded");
}
function handleplus4() {
  plusicon4.style.display = "none";
  minusicon4.style.display = "block";
  addPlayer4.classList.add("playerAdded");
}
function handleminus4() {
  plusicon4.style.display = "block";
  minusicon4.style.display = "none";
  addPlayer4.classList.remove("playerAdded");
}
function handleplus5() {
  plusicon5.style.display = "none";
  minusicon5.style.display = "block";
  addPlayer5.classList.add("playerAdded");
}
function handleminus5() {
  plusicon5.style.display = "block";
  minusicon5.style.display = "none";
  addPlayer5.classList.remove("playerAdded");
}
function handleplus6() {
  plusicon6.style.display = "none";
  minusicon6.style.display = "block";
  addPlayer6.classList.add("playerAdded");
}
function handleminus6() {
  plusicon6.style.display = "block";
  minusicon6.style.display = "none";
  addPlayer6.classList.remove("playerAdded");
}
function handleplus7() {
  plusicon7.style.display = "none";
  minusicon7.style.display = "block";
  addPlayer7.classList.add("playerAdded");
}
function handleminus7() {
  plusicon7.style.display = "block";
  minusicon7.style.display = "none";
  addPlayer7.classList.remove("playerAdded");
}
function handleplus8() {
  plusicon8.style.display = "none";
  minusicon8.style.display = "block";
  addPlayer8.classList.add("playerAdded");
}
function handleminus8() {
  plusicon8.style.display = "block";
  minusicon8.style.display = "none";
  addPlayer8.classList.remove("playerAdded");
}
