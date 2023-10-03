


var chairs = [mapleChair, oakChair, ashChair, beechChair]; 

var mapleChair = {
    brand: "Ikea", 
    legs: 4, 
    wheels: false,
    ergonomic: true, 
    woodType : ["oak", "maple", "ash", "beech"] 
}

var oakChair = {
    brand: "Ikea", 
    legs: 4, 
    wheels: true,
    ergonomic: true, 
    woodType : ["oak", "maple", "ash", "beech"] 
}

var ashChair = {
    brand: "Ikea", 
    legs: 4, 
    wheels: true,
    ergonomic: true, 
    woodType : ["oak", "maple", "ash", "beech"] 
}


var beechChair = {
    brand: "Ikea", 
    legs: 4, 
    wheels: true,
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $70"
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $79.99"
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $84.99"
    
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $99"
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $70"
    
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $79.99"
} 


var colorSelector = document.querySelector(".colourpicker2")

colorSelector.onclick = function() {
    var div = document.querySelector ("#chair"); 
    div.src = "/images/ash-chair.png"
    var title = document.querySelector(".title-chair")
    title.innerHTML = "Ashley chair"
    var price = document.querySelector(".price")
    price.innerHTML = "$84.99"
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $84.99"
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
    var totalPrice = document.querySelector(".total-price")
    totalPrice.innerHTML ="Total price: $99"
}


var quanitity = document.querySelector(".beech")
quanitity.onclick  = function () {
    quanitity = 0; 
if (quanitity <1) 
    alert("Out of stock, maple is also nice")
}
