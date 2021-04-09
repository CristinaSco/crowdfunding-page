var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelToggle = this.nextElementSibling;
    if (panelToggle.style.display === "block") {
      panelToggle.style.display = "none";
      changeImage("images/icon-hamburger.svg")
    } else {
      panelToggle.style.display = "block";
      changeImage("images/icon-close-menu.svg");
    }
  });
};

function changeImage(img) {
    document.getElementById("hamburger").src = img;
};



// Function Button bookmark manca il cambio icona

$( "#buttonId" ).click(function() {
  var elem = document.getElementById("buttonId");
  var image = document.getElementsByClassName("bookmark");

  if (elem.innerHTML=="Bookmarked") {
    elem.innerHTML = "Bookmark";
    elem.style.color = "hsl(0, 0%, 48%)";
    image.src = "images/icon-bookmark.svg";
   }  else {
    elem.innerHTML = "Bookmarked";
    elem.style.color = "hsl(176, 72%, 28%)";
    image.src = "images/icon-bookmark2.svg";
  }
});

// Button Back this Project

var acc = document.getElementsByClassName("buttonOne");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelBTP = this.nextElementSibling;
    if (panelBTP.style.display === "block") {
      panelBTP.style.display = "none";
    } else {
      panelBTP.style.display = "block";
    }
  });
};

// Onclick input

var importantRowTwo = $(".importantRowTwo");
var secondMiniCard = $(".secondMiniCard");
var selectionTwo = $(".selectionTwo");


$("#radioTwo").bind('click', function(e){
  e.preventDefault();
  importantRowTwo.show();
  secondMiniCard.css("border","1px solid hsl(176, 72%, 28%)");
  selectionTwo.css("color" ,"hsl(176, 72%, 28%)");
});

var importantRowThree = $(".importantRowThree");
var thirdMiniCard = $(".thirdMiniCard");
var selectionThree = $(".selectionThree");

$("#radioThree").bind('click', function(e){
  e.preventDefault();
  importantRowThree.show();
  thirdMiniCard.css("border","1px solid hsl(176, 72%, 28%)");
  selectionThree.css("color" ,"hsl(176, 72%, 28%)");
});

// Onclick continue

var acc = document.getElementsByClassName("continue");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelThanks = this.nextElementSibling;
    if (panelThanks.style.display === "block") {
      panelThanks.style.display = "none";
    } else {
      panelThanks.style.display = "block";
    }
  });
};

// Onclick Input Radio one
var panelThanks = $(".panelThanks");

$("#radioOne").bind('click', function(e){
  e.preventDefault();
  panelThanks.show();
});


// Close Modal panelBTP
var panelBTP = $(".panelBTP");

$("#close").bind('click', function(e){
  e.preventDefault();
  panelBTP.hide();
});

// Close Modal gotIt
var panelThanks = $(".panelThanks");
var panelBTP = $(".panelBTP");

$("#end").bind('click', function(e){
  e.preventDefault();
  panelThanks.hide();
  panelBTP.hide();
});

var panelThanks = $(".panelThanks");
var panelBTP = $(".panelBTP");

$("#endTwo").bind('click', function(e){
  e.preventDefault();
  panelThanks.hide();
  panelBTP.hide();
});

var panelThanks = $(".panelThanks");
var panelBTP = $(".panelBTP");

$("#endOne").bind('click', function(e){
  e.preventDefault();
  panelThanks.hide();
  panelBTP.hide();
});
