



let hour = 19; 


if (hour >= 6 && hour < 12)
    console.log("Good morning"); 
if (hour >=12 && hour < 18)
console.log ("Good afternoon!");
else 
    console.log ("Good evening");



const chair = {
    brand: "Ikea", 
    legs: 4, 
    wheels: false,
    ergonomic: true, 
    woodType : ["oak", "maple", "ash", "beech"] 
}

// function will be to select the type of wood you would like your chair to be and display in the corresponding colours. 




// This makes the OAK button display the OAK colour of the product. 
var oakButton = document.querySelector(".oak")

oakButton.onclick = function () {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/chair.png"
    var price = document.querySelector(".price")
    price.innerHTML = "$70"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Oakley chair"

    
}

// This makes the MAPLE button display the MAPLE colour of the product. 

var mapleButton = document.querySelector(".maple")

mapleButton.onclick = function () {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/maple-chair.png"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Mapley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$79.99"
}
// This makes the ASH button display the ASH colour of the product. 

var ashButton = document.querySelector(".ash")

ashButton.onclick = function () {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/ash-chair.png"  
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Ashley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$84.99"
    
    }




// This makes the BEECH button display the BEECH colour of the product. 

var beechButton = document.querySelector(".beech")

beechButton.onclick = function () {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/beech-chair.png"  
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Beechley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$99"
}









// Colourpicker under the OAK icon to change colour of product to corresponding colour 
var colorSelector = document.querySelector(".colourpicker")

colorSelector.onclick = function() {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/chair.png"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Oakley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$70"
    
}


// Colourpicker under the  MAPLE icon to change colour of product to corresponding colour 
var colorSelector = document.querySelector(".colourpicker1")

colorSelector.onclick = function() {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/maple-chair.png"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Mapley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$79.99"
    
} 


var colorSelector = document.querySelector(".colourpicker2")

colorSelector.onclick = function() {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/ash-chair.png"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Ashley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$84.99"
      
} 

// Colourpicker under the  BEECH icon to change colour of product to corresponding colour 
var colorSelector = document.querySelector(".colourpicker3")

colorSelector.onclick = function() {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/beech-chair.png" 
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Beechley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$99"
}
