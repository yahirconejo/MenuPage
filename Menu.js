const burgernav = document.getElementById('burgernav');
const navoverlay = document.getElementById('navoverlay');
let menuOpen = false;



burgernav.addEventListener('click', () =>{
    if(!menuOpen){
      burgernav.classList.add('open');
      navoverlay.style.width = "100%";
      menuOpen = true;
    } else {
      burgernav.classList.remove('open');
      navoverlay.style.width = "0%";
      menuOpen = false;
    }
  });
  
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var coffee1 = document.getElementById("coffee1");
var coffee2 = document.getElementById("coffee2");
var coffee3 = document.getElementById("coffee3");
var coffee4 = document.getElementById("coffee4");
var btLEF = document.getElementById("buttonLeft");
var btRIT = document.getElementById("buttonRight");
var btLEF2 = document.getElementById("buttonLeft2");
var btRIT2 = document.getElementById("buttonRight2");
var NUM = 1;
var WHICH = true;
var smallName = document.getElementById("smallName");
var NTEX = document.getElementById("NTEX");
var NTRO = document.getElementById("NTRO");
var NBAR = document.getElementById("NBAR");
var NBLI = document.getElementById("NBLI");
var LNEX = document.getElementById("LNEX");
var LNRO = document.getElementById("LNRO");
var LNAR = document.getElementById("LNAR");
var LNLI = document.getElementById("LNLI");

var orderBTText = document.getElementById("orderBTText");
var orderBT = document.getElementById("orderBT");
var OBTremove = document.getElementById("OBTremove");
var OBTadd = document.getElementById("OBTadd");
// what size
C1S = 1;
C2S = 1;
C3S = 1;
C4S = 1;
//section 1
var C1_1 = 0;
var C1_2 = 0;
var C1_3 = 0;
//section 2
var C2_1 = 0;
var C2_2 = 0;
var C2_3 = 0;
//section 3
var C3_1 = 0;
var C3_2 = 0;
var C3_3 = 0;
//section 4
var C4_1 = 0;
var C4_2 = 0;
var C4_3 = 0;
// size buttons
var small = document.querySelectorAll(".S");
var medium = document.querySelectorAll(".M");
var large = document.querySelectorAll(".L");





coffee1.classList.add("changeCOF1");
//when screen small/regular
setTimeout(function(){
  NTEX.style.opacity = "1";
}, 100)
  NTRO.style.opacity = "0";
  NBAR.style.opacity = "0";
  NBLI.style.opacity = "0";
// when screen big
  setTimeout(function(){
    LNEX.style.opacity = "1";
  }, 1000)
    LNRO.style.opacity = "0";
    LNAR.style.opacity = "0";
    LNLI.style.opacity = "0";
function add(){

 btLEF.style.display = "none";
 btRIT.style.display = "none";
 btLEF2.style.zIndex = "0";
 btRIT2.style.zIndex = "0";
 btLEF2.style.opacity = "0";
 btRIT2.style.opacity = "0";
 setTimeout(function(){
  btLEF2.style.opacity = "1";
 btRIT2.style.opacity = "1";
 setTimeout(function(){
  btLEF.style.display="initial";
  btRIT.style.display = "initial";
  btLEF2.style.zIndex = "-1";
  btRIT2.style.zIndex = "-1";
 }, 300);
  
 }, 1000);

  if(NUM == 0){
    if(WHICH == true){
    coffee4.classList.remove("changeCOF1");
    coffee3.classList.remove("changeCOF2");
  }else{
    coffee4.classList.remove("changeCOF1REV");
    coffee1.classList.remove("changeCOF2REV");
  }
    coffee1.classList.add("changeCOF1");
    coffee4.classList.add("changeCOF2");
    orderBTText.innerHTML= "Affogato: S-" + C2_1 +" M-" + C2_2 + " L-" + C2_3;
//when screen small/regular
    setTimeout(function(){
      NTEX.style.opacity = "1";
    }, 500)
      NTRO.style.opacity = "0";
      NBAR.style.opacity = "0";
      NBLI.style.opacity = "0";
// when screen big
      setTimeout(function(){
        LNEX.style.opacity = "1";
      }, 1000)
        LNRO.style.opacity = "0";
        LNAR.style.opacity = "0";
        LNLI.style.opacity = "0";

    NUM = NUM + 1;

  }else if(NUM == 1){
    if(WHICH == true){
    coffee1.classList.remove("changeCOF1");
    coffee4.classList.remove("changeCOF2");
    }else{
      coffee1.classList.remove("changeCOF1REV");
      coffee2.classList.remove("changeCOF2REV");
    }
    coffee2.classList.add("changeCOF1");
    coffee1.classList.add("changeCOF2");
    orderBTText.innerHTML= "Americano: S-" + C3_1 +" M-" + C3_2 + " L-" + C3_3;
//when screen small
    setTimeout(function(){
      NTRO.style.opacity = "1";
    }, 500)
    NTEX.style.opacity = "0";
    NBAR.style.opacity = "0";
    NBLI.style.opacity = "0";
//when screen big
setTimeout(function(){
  LNRO.style.opacity = "1";
}, 1000)
  LNEX.style.opacity = "0";
  LNAR.style.opacity = "0";
  LNLI.style.opacity = "0";
    
    NUM = NUM + 1;

  }else if(NUM == 2){
    if(WHICH == true){
    coffee2.classList.remove("changeCOF1");
    coffee1.classList.remove("changeCOF2");
    }else{
      coffee2.classList.remove("changeCOF1REV");
      coffee3.classList.remove("changeCOF2REV");
    }
    coffee3.classList.add("changeCOF1");
    coffee2.classList.add("changeCOF2");
    orderBTText.innerHTML= "Cappuccino: S-" + C4_1 +" M-" + C4_2 + " L-" + C4_3;
//when screen small
    setTimeout(function(){
      NBAR.style.opacity = "1";
    }, 500)
    NTRO.style.opacity = "0";
    NTEX.style.opacity = "0";
    NBLI.style.opacity = "0";
//when screen big
setTimeout(function(){
  LNAR.style.opacity = "1";
  }, 1000)
  LNRO.style.opacity = "0";
  LNEX.style.opacity = "0";
  LNLI.style.opacity = "0";
    NUM = NUM + 1;

  }else if(NUM == 3){
    if(WHICH == true){
    coffee3.classList.remove("changeCOF1");
    coffee2.classList.remove("changeCOF2");
    }else{
      coffee3.classList.remove("changeCOF1REV");
      coffee4.classList.remove("changeCOF2REV");
    }
    coffee4.classList.add("changeCOF1");
    coffee3.classList.add("changeCOF2");
    orderBTText.innerHTML = "Red eye: S-" + C1_1 +" M-" + C1_2 + " L-" + C1_3;
//when screen small
    setTimeout(function(){
      NBLI.style.opacity = "1";
    }, 500)
    NTRO.style.opacity = "0";
    NTEX.style.opacity = "0";
    NBAR.style.opacity = "0";
//when screen big
  setTimeout(function(){
  LNLI.style.opacity = "1";
  }, 1000)
  LNRO.style.opacity = "0";
  LNEX.style.opacity = "0";
  LNAR.style.opacity = "0";

    NUM = 0;
  }
  WHICH = true;


  if(windowWidth > 1150){
    setTimeout(function(){
      orderBT.style.opacity = "1";
    }, 1000)
    orderBT.style.opacity = "0";
  }
}

function remove(){

  btLEF.style.display = "none";
  btRIT.style.display = "none";
  btLEF2.style.zIndex = "0";
  btRIT2.style.zIndex = "0";
  btLEF2.style.opacity = "0";
  btRIT2.style.opacity = "0";
  setTimeout(function(){
  btLEF2.style.opacity = "1";
  btRIT2.style.opacity = "1";
  setTimeout(function(){
   btLEF.style.display="initial";
   btRIT.style.display = "initial";
   btLEF2.style.zIndex = "-1";
   btRIT2.style.zIndex = "-1";
  }, 300);
   
  }, 1000);

  if(NUM == 0){
    if(WHICH == false){
    coffee4.classList.remove("changeCOF1REV");
    coffee1.classList.remove("changeCOF2REV");
    }else{
      coffee4.classList.remove("changeCOF1");
      coffee3.classList.remove("changeCOF2");
    }
    coffee3.classList.add("changeCOF1REV");
    coffee4.classList.add("changeCOF2REV");
    orderBTText.innerHTML= "Cappuccino: S-" + C4_1 +" M-" + C4_2 + " L-" + C4_3;
    NUM = 3;
//when screen small
    setTimeout(function(){
      NBAR.style.opacity = "1";
    }, 500)
    NTRO.style.opacity = "0";
    NTEX.style.opacity = "0";
    NBLI.style.opacity = "0";
//when screen big
  setTimeout(function(){
  LNAR.style.opacity = "1";
  }, 1000)
  LNRO.style.opacity = "0";
  LNEX.style.opacity = "0";
  LNLI.style.opacity = "0";


  }else if(NUM == 1){
    if(WHICH == false){
    coffee1.classList.remove("changeCOF1REV");
    coffee2.classList.remove("changeCOF2REV");
    }else{
      coffee1.classList.remove("changeCOF1");
      coffee4.classList.remove("changeCOF2");
    }
    coffee4.classList.add("changeCOF1REV");
    coffee1.classList.add("changeCOF2REV");
    orderBTText.innerHTML= "Red eye: S-" + C1_1 +" M-" + C1_2 + " L-" + C1_3;
    NUM = NUM - 1;
//when screen small
    setTimeout(function(){
      NBLI.style.opacity = "1";
    }, 500)
    NTRO.style.opacity = "0";
    NTEX.style.opacity = "0";
    NBAR.style.opacity = "0";
//when screen big
    setTimeout(function(){
    LNLI.style.opacity = "1";
    }, 1000)
    LNRO.style.opacity = "0";
    LNEX.style.opacity = "0";
    LNAR.style.opacity = "0";

  }else if(NUM == 2){
    if(WHICH == false){
    coffee2.classList.remove("changeCOF1REV");
    coffee3.classList.remove("changeCOF2REV");
    }else{
      coffee2.classList.remove("changeCOF1");
      coffee1.classList.remove("changeCOF2");
    }
    coffee1.classList.add("changeCOF1REV");
    coffee2.classList.add("changeCOF2REV");
    orderBTText.innerHTML= "Affogato: S-" + C2_1 +" M-" + C2_2 + " L-" + C2_3;
    NUM = NUM - 1;
//when screen small
    setTimeout(function(){
      NTEX.style.opacity = "1";
    }, 500)
      NTRO.style.opacity = "0";
      NBAR.style.opacity = "0";
      NBLI.style.opacity = "0";
//when screen big
    setTimeout(function(){
    LNEX.style.opacity = "1";
    }, 1000)
    LNRO.style.opacity = "0";
    LNAR.style.opacity = "0";
    LNLI.style.opacity = "0";

  }else if(NUM == 3){
    if(WHICH == false){
    coffee3.classList.remove("changeCOF1REV");
    coffee4.classList.remove("changeCOF2REV");
    }else{
      coffee3.classList.remove("changeCOF1");
      coffee2.classList.remove("changeCOF2");
    }
    coffee2.classList.add("changeCOF1REV");
    coffee3.classList.add("changeCOF2REV");
    orderBTText.innerHTML = "Americano: S-" + C3_1 +" M-" + C3_2 + " L-" + C3_3;
    NUM = NUM - 1;
//when screen small
    setTimeout(function(){
      NTRO.style.opacity = "1";
    }, 500)
    NTEX.style.opacity = "0";
    NBAR.style.opacity = "0";
    NBLI.style.opacity = "0";
//when screen big
    setTimeout(function(){
    LNRO.style.opacity = "1";
    }, 1000)
    LNEX.style.opacity = "0";
    LNAR.style.opacity = "0";
    LNLI.style.opacity = "0";

  }
  WHICH = false;


  if(windowWidth > 1150){
    setTimeout(function(){
      orderBT.style.opacity = "1";
    }, 1000)
    orderBT.style.opacity = "0";
  }
}

btLEF.addEventListener("click", function(){
  remove();
});

btRIT.addEventListener("click", function(){
  add();
});

// order button on section 1
OBTremove.addEventListener("click", function(){
  if(NUM == 0){
    if(C1S == 1 && C1_1 > 0){
      C1_1 = C1_1 - 1;
    } else if(C1S == 2 && C1_2 > 0){
      C1_2 = C1_2 - 1;
    } else if(C1S == 3 && C1_3 > 0){
      C1_3 = C1_3 - 1;
    }
    orderBTText.innerHTML= "Red eye: S-" + C1_1 +" M-" + C1_2 + " L-" + C1_3;
  }else if(NUM ==1){
    if(C2S == 1 && C2_1 > 0){
      C2_1 = C2_1 - 1;
    } else if(C2S == 2 && C2_2 > 0){
      C2_2 = C2_2 - 1;
    } else if(C2S == 3 && C2_3 > 0){
      C2_3 = C2_3 - 1;
    }
    orderBTText.innerHTML= "Affogato: S-" + C2_1 +" M-" + C2_2 + " L-" + C2_3;
  }else if(NUM == 2){
    if(C3S == 1 && C3_1 > 0){
      C3_1 = C3_1 - 1;
    } else if(C3S == 2 && C3_2 > 0){
      C3_2 = C3_2 - 1;
    } else if(C3S == 3 && C3_3 > 0){
      C3_3 = C3_3 - 1;
    }
    orderBTText.innerHTML= "Americano: S-" + C3_1 +" M-" + C3_2 + " L-" + C3_3;
  }else if(NUM == 3){
    if(C4S == 1 && C4_1 > 0){
      C4_1 = C4_1 - 1;
    } else if(C4S == 2 && C4_2 > 0){
      C4_2 = C4_2 - 1;
    } else if(C4S == 3 && C4_3 > 0){
      C4_3 = C4_3 - 1;
    }
    orderBTText.innerHTML= "Cappuccino: S-" + C4_1 +" M-" + C4_2 + " L-" + C4_3;
  }
  updateCart();
});

OBTadd.addEventListener("click", function(){
  if(NUM == 0 ){
    if(C1S == 1){
      C1_1 = C1_1 + 1;
    } else if(C1S == 2){
      C1_2 = C1_2 + 1;
    } else if(C1S == 3){
      C1_3 = C1_3 + 1;
    }
    orderBTText.innerHTML= "Red eye: S-" + C1_1 +" M-" + C1_2 + " L-" + C1_3;
  }else if(NUM ==1){
    if(C2S == 1){
      C2_1 = C2_1 + 1;
    } else if(C2S == 2){
      C2_2 = C2_2 + 1;
    } else if(C2S == 3){
      C2_3 = C2_3 + 1;
    }
    orderBTText.innerHTML= "Affogato: S-" + C2_1 +" M-" + C2_2 + " L-" + C2_3;
  }else if(NUM == 2){
    if(C3S == 1){
      C3_1 = C3_1 + 1;
    } else if(C3S == 2){
      C3_2 = C3_2 + 1;
    } else if(C3S == 3){
      C3_3 = C3_3 + 1;
    }
    orderBTText.innerHTML= "Americano: S-" + C3_1 +" M-" + C3_2 + " L-" + C3_3;
  }else if(NUM == 3){
    if(C4S == 1){
      C4_1 = C4_1 + 1;
    } else if(C4S == 2){
      C4_2 = C4_2 + 1;
    } else if(C4S == 3){
      C4_3 = C4_3 + 1;
    }
    orderBTText.innerHTML= "Cappuccino: S-" + C4_1 +" M-" + C4_2 + " L-" + C4_3;
  }
  updateCart();
});

small[0].addEventListener("click", function(){
  C2S = 1;
  small[0].style.backgroundColor = "white";
  small[0].style.color = "gray";
  // change everything else back
  medium[0].style.backgroundColor = "gray";
  medium[0].style.color = "white";
  large[0].style.backgroundColor = "gray";
  large[0].style.color = "white";
});

small[1].addEventListener("click", function(){
  C3S = 1;
  small[1].style.backgroundColor = "white";
  small[1].style.color = "gray";
  // change everything else back
  medium[1].style.backgroundColor = "gray";
  medium[1].style.color = "white";
  large[1].style.backgroundColor = "gray";
  large[1].style.color = "white";
});

small[2].addEventListener("click", function(){
  C4S = 1;
  small[2].style.backgroundColor = "white";
  small[2].style.color = "gray";
  // change everything else back
  medium[2].style.backgroundColor = "gray";
  medium[2].style.color = "white";
  large[2].style.backgroundColor = "gray";
  large[2].style.color = "white";
});

small[3].addEventListener("click", function(){
  C1S = 1;
  small[3].style.backgroundColor = "white";
  small[3].style.color = "gray";
  // change everything else back
  medium[3].style.backgroundColor = "gray";
  medium[3].style.color = "white";
  large[3].style.backgroundColor = "gray";
  large[3].style.color = "white";
});

medium[0].addEventListener("click", function(){
  C2S = 2;
  medium[0].style.backgroundColor = "white";
  medium[0].style.color = "gray"
  //change everything else back
  small[0].style.backgroundColor = "gray";
  small[0].style.color = "white";
  large[0].style.backgroundColor = "gray";
  large[0].style.color = "white";
});

medium[1].addEventListener("click", function(){
  C3S = 2;
  medium[1].style.backgroundColor = "white";
  medium[1].style.color = "gray"
  //change everything else back
  small[1].style.backgroundColor = "gray";
  small[1].style.color = "white";
  large[1].style.backgroundColor = "gray";
  large[1].style.color = "white";
});

medium[2].addEventListener("click", function(){
  C4S = 2;
  medium[2].style.backgroundColor = "white";
  medium[2].style.color = "gray"
  //change everything else back
  small[2].style.backgroundColor = "gray";
  small[2].style.color = "white";
  large[2].style.backgroundColor = "gray";
  large[2].style.color = "white";
});

medium[3].addEventListener("click", function(){
  C1S = 2;
  medium[3].style.backgroundColor = "white";
  medium[3].style.color = "gray"
  //change everything else back
  small[3].style.backgroundColor = "gray";
  small[3].style.color = "white";
  large[3].style.backgroundColor = "gray";
  large[3].style.color = "white";
});

large[0].addEventListener("click", function(){
  C2S = 3;
  large[0].style.backgroundColor = "white";
  large[0].style.color = "gray"
  //change everything else back
  small[0].style.backgroundColor = "gray";
  small[0].style.color = "white";
  medium[0].style.backgroundColor = "gray";
  medium[0].style.color = "white";
});

large[1].addEventListener("click", function(){
  C3S = 3;
  large[1].style.backgroundColor = "white";
  large[1].style.color = "gray"
  //change everything else back
  small[1].style.backgroundColor = "gray";
  small[1].style.color = "white";
  medium[1].style.backgroundColor = "gray";
  medium[1].style.color = "white";
});

large[2].addEventListener("click", function(){
  C4S = 3;
  large[2].style.backgroundColor = "white";
  large[2].style.color = "gray"
  //change everything else back
  small[2].style.backgroundColor = "gray";
  small[2].style.color = "white";
  medium[2].style.backgroundColor = "gray";
  medium[2].style.color = "white";
});

large[3].addEventListener("click", function(){
  C1S = 3;
  large[3].style.backgroundColor = "white";
  large[3].style.color = "gray"
  //change everything else back
  small[3].style.backgroundColor = "gray";
  small[3].style.color = "white";
  medium[3].style.backgroundColor = "gray";
  medium[3].style.color = "white";
});



  function coffeecoffeecoffee(){
    var section2 = document.getElementById("section2");
    var elementTop = section2.getBoundingClientRect().top;
    var ranText = document.getElementById("ranText");
    if(elementTop < windowHeight){
      ranText.classList.add('highlightRan');
      ranText.classList.remove('highlightRanRemove');
    } else if(elementTop > windowHeight - 50){
      ranText.classList.remove('highlightRan');
      ranText.classList.add('highlightRanRemove');
    }
  
  }

window.addEventListener("scroll", coffeecoffeecoffee);
coffeecoffeecoffee();


var addBT1 = document.getElementById("addBT1");
var removeBT1 = document.getElementById("removeBT1");
var numberCounter1 = document.getElementById("numberCounter1");
var NC1 = 0;

var addBT2 = document.getElementById("addBT2");
var removeBT2 = document.getElementById("removeBT2");
var numberCounter2 = document.getElementById("numberCounter2");
var NC2 = 0;

var addBT3 = document.getElementById("addBT3");
var removeBT3 = document.getElementById("removeBT3");
var numberCounter3 = document.getElementById("numberCounter3");
var NC3 = 0;

var addBT4 = document.getElementById("addBT4");
var removeBT4 = document.getElementById("removeBT4");
var numberCounter4 = document.getElementById("numberCounter4");
var NC4 = 0;

var addBT5 = document.getElementById("addBT5");
var removeBT5 = document.getElementById("removeBT5");
var numberCounter5 = document.getElementById("numberCounter5");
var NC5 = 0;

var addBT6 = document.getElementById("addBT6");
var removeBT6 = document.getElementById("removeBT6");
var numberCounter6 = document.getElementById("numberCounter6");
var NC6 = 0;
//1
addBT1.addEventListener("click", function(){
  NC1 = NC1 + 1;
  numberCounter1.innerHTML = NC1;
  updateCart();
});

removeBT1.addEventListener("click", function(){
  if(NC1 > 0){
    NC1 = NC1 - 1;
    numberCounter1.innerHTML = NC1;
    updateCart();
  }
});
//2
addBT2.addEventListener("click", function(){
  NC2 = NC2 + 1;
  numberCounter2.innerHTML = NC2;
  updateCart();
});

removeBT2.addEventListener("click", function(){
  if(NC2 > 0){
    NC2 = NC2 - 1;
    numberCounter2.innerHTML = NC2;
    updateCart();
  }
});
//3
addBT3.addEventListener("click", function(){
  NC3 = NC3 + 1;
  numberCounter3.innerHTML = NC3;
  updateCart();
});

removeBT3.addEventListener("click", function(){
  if(NC3 > 0){
    NC3 = NC3 - 1;
    numberCounter3.innerHTML = NC3;
    updateCart();
  }
});
//4
addBT4.addEventListener("click", function(){
  NC4 = NC4 + 1;
  numberCounter4.innerHTML = NC4;
  updateCart();
});

removeBT4.addEventListener("click", function(){
  if(NC4 > 0){
    NC4 = NC4 - 1;
    numberCounter4.innerHTML = NC4;
    updateCart();
  }
});
//5
addBT5.addEventListener("click", function(){
  NC5 = NC5 + 1;
  numberCounter5.innerHTML = NC5;
  updateCart();
});

removeBT5.addEventListener("click", function(){
  if(NC5 > 0){
    NC5 = NC5 - 1;
    numberCounter5.innerHTML = NC5;
    updateCart();
  }
});
//6
addBT6.addEventListener("click", function(){
  NC6 = NC6 + 1;
  numberCounter6.innerHTML = NC6;
  updateCart();
});

removeBT6.addEventListener("click", function(){
  if(NC6 > 0){
    NC6 = NC6 - 1;
    numberCounter6.innerHTML = NC6;
    updateCart();
  }
});



var cart = document.getElementById("cart");
cart.addEventListener("click", function(){
  var paymenu = document.getElementById("paymenu");
  paymenu.style.left = "0";
  var bar = document.getElementById("bar");
  bar.style.height = "70px";
  buy();
});

var getout = document.getElementById("getout");
getout.addEventListener("click", function(){
  var paymenu = document.getElementById("paymenu");
  paymenu.style.left = "-200vw";
  var bar = document.getElementById("bar");
  bar.style.height = "0px";
});

// for check out screen
function buy(){
    var TO = document.getElementById("TO");
    TO.innerHTML = "";
    var collum1var = document.getElementById("collum1");
    var collum2var = document.getElementById("collum2");
    collum1var.innerHTML = "";
    collum2var.innerHTML = ""; 
    var containerNames = document.createDocumentFragment();
    var containerPrices = document.createDocumentFragment();
    var TPCon = document.createDocumentFragment();
    var names = document.createElement("div");
    var num = document.createElement("div");
    var prices = document.createElement("div");
    var TP = document.createElement("div");
    var TPBEFOR = 0;
    TPBEFOR = 0;
    var ck = true;
    prices.style.textAlign = "right";
    prices.style.marginRight = "30vw";
    var allItemNumbers = [C1_1, C1_2, C1_3, C2_1, C2_2, C2_3, C3_1, C3_2, C3_3, C4_1, C4_2, C4_3, NC1, NC2, NC3, NC4, NC5, NC6];
    var allPrices = [7,10,13,8,11,12,9,12,14,10,14,18,4,4,4,4,4,4];
    var allItemNames = ["Small - Red eye","Medium - Red eye","Large - Red eye","Small - Affogato","Medium - Affogato","Large - Affogato","Small - Americano","Medium - Americano","Large - Americano","Small - Cappuccino","Medium - Cappuccino","Large - Cappuccino","8oz Ginger Tea","8oz Black Tea","8oz Peppermint Tea","8oz Pu-erh Tea","8oz Lemon Tea","8oz Milk Tea"];
    for(var i = 0; i < allItemNumbers.length; i++){
      if(allItemNumbers[i] > 0){
        num.textContent = allItemNumbers[i];
        names.textContent = names.textContent +"-"+ num.textContent + " - " + allItemNames[i] + "\n";
        prices.textContent = prices.textContent + "$" + num.textContent * allPrices[i] + "\n";
        TPBEFOR = TPBEFOR + num.textContent * allPrices[i];
        names.style.color = "white";
        prices.style.color = "white";
        TP.style.color = "white";
        ck = false;
      }
    }
    if(ck == true){
      TP.textContent = 0;
    }
    TP.textContent = "$ " + TPBEFOR;
     containerNames.appendChild(names);
     containerPrices.appendChild(prices);
     TPCon.appendChild(TP);
    document.getElementById("collum1").appendChild(containerNames);
    document.getElementById("collum2").appendChild(containerPrices);
    TO.appendChild(TPCon);
}

// not for check out just for menu
function updateCart(){
  var total = C1_1 + C1_2 + C1_3 + C2_1 + C2_2 + C2_3 + C3_1 + C3_2 + C3_3 + C4_1 + C4_2 + C4_3 + NC1 + NC2 + NC3 + NC4 + NC5 + NC6;
  var NumInCart = document.getElementById("NumInCart");
  NumInCart.innerHTML = total;
  if(total >= 100){
    NumInCart.style.fontSize = "3vw";
    NumInCart.style.marginLeft = "2.6vw";
  }

}

var conf = document.getElementById("confirm");
conf.addEventListener("click", function(){
  var finsih = document.getElementById("finish");
    finsih.style.zIndex = "1";
    finsih.style.opacity = "1";
  setTimeout(function(){
    location.reload();
  }, 5000);
});


