// Scaffolding for the 1st milestone of Sprint 3 (BusMall)

// declare empty array that will store image objects
let imageArray = [];
let x 
let y
let z
let increment = 0

//find image tags in HTML so we can change the SRC attribute
let elImage1 = document.getElementById('random1');
let elImage2 = document.getElementById('random2');
let elImage3 = document.getElementById('random3');

// new Constructor for images
let Image = function(name, filePath) {
	this.name = name ; 
    this.filePath = filePath ; 
    this.clicked = 0 ;
    this.displayed = 0 ;
    this.increment = function() {
        this.clicked += 1 ;
    }
}

// instantiate new Images
let image01 = new Image('bag', './img/bag.jpg') ; 
let image02 = new Image('banana', './img/banana.jpg') ; 
let image03 = new Image('bathroom', './img/bathroom.jpg') ;
let image04 = new Image('boots', './img/boots.jpg') ;
let image05 = new Image('breakfast', './img/breakfast.jpg') ;
let image06 = new Image('bubblegum', './img/bubblegum.jpg') ;
let image07 = new Image('chair', './img/chair.jpg') ;
let image08 = new Image('cthulhu', './img/cthulhu.jpg') ;
let image09 = new Image('dog-duck', './img/dog-duck.jpg') ;
let image10 = new Image('dragon', './img/dragon.jpg') ;
let image11 = new Image('pen', './img/pen.jpg') ;
let image12 = new Image('pet-sweep', './img/pet-sweep.jpg') ;
let image13 = new Image('scissors', './img/scissors.jpg') ;
let image14 = new Image('shark', './img/shark.jpg') ;
let image15 = new Image('sweep', './img/sweep.png') ;
let image16 = new Image('tauntaun', './img/tauntaun.jpg') ;
let image17 = new Image('unicorn', './img/unicorn.jpg') ;
let image18 = new Image('usb', './img/usb.gif') ;
let image19 = new Image('water-can', './img/water-can.jpg') ;
let image20 = new Image('wine-glass', './img/wine-glass.jpg') ;

// push images to imageArray
imageArray.push (image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20) ;

// create function to display results after 25 clicks
let displayResults = function(){
    if (increment > 25) {
        document.getElementById('product01').innerHTML = "Number of times " + image01.name + " clicked: " + image01.clicked + " out of " + image01.displayed + " times displayed";

        document.getElementById('product02').innerHTML = "Number of times " + image02.name + " clicked: " + image02.clicked + " out of " + image02.displayed + " times displayed";
    
        document.getElementById('product03').innerHTML = "Number of times " + image03.name + " clicked: " + image03.clicked + " out of " + image03.displayed + " times displayed";

        document.getElementById('product04').innerHTML = "Number of times " + image04.name + " clicked: " + image04.clicked + " out of " + image04.displayed + " times displayed";

        document.getElementById('product05').innerHTML = "Number of times " + image05.name + " clicked: " + image05.clicked + " out of " + image05.displayed + " times displayed";

        document.getElementById('product06').innerHTML = "Number of times " + image06.name + " clicked: " + image06.clicked + " out of " + image06.displayed + " times displayed";

        document.getElementById('product07').innerHTML = "Number of times " + image07.name + " clicked: " + image07.clicked + " out of " + image07.displayed + " times displayed";

        document.getElementById('product08').innerHTML = "Number of times " + image08.name + " clicked: " + image08.clicked + " out of " + image08.displayed + " times displayed";

        document.getElementById('product09').innerHTML = "Number of times " + image09.name + " clicked: " + image09.clicked + " out of " + image09.displayed + " times displayed";

        document.getElementById('product10').innerHTML = "Number of times " + image10.name + " clicked: " + image10.clicked + " out of " + image10.displayed + " times displayed";

        document.getElementById('product11').innerHTML = "Number of times " + image11.name + " clicked: " + image11.clicked + " out of " + image11.displayed + " times displayed";

        document.getElementById('product12').innerHTML = "Number of times " + image12.name + " clicked: " + image12.clicked + " out of " + image12.displayed + " times displayed";
    
        document.getElementById('product13').innerHTML = "Number of times " + image13.name + " clicked: " + image13.clicked + " out of " + image13.displayed + " times displayed";

        document.getElementById('product14').innerHTML = "Number of times " + image14.name + " clicked: " + image14.clicked + " out of " + image14.displayed + " times displayed";

        document.getElementById('product15').innerHTML = "Number of times " + image15.name + " clicked: " + image15.clicked + " out of " + image15.displayed + " times displayed";

        document.getElementById('product16').innerHTML = "Number of times " + image16.name + " clicked: " + image16.clicked + " out of " + image16.displayed + " times displayed";

        document.getElementById('product17').innerHTML = "Number of times " + image17.name + " clicked: " + image17.clicked + " out of " + image17.displayed + " times displayed";

        document.getElementById('product18').innerHTML = "Number of times " + image18.name + " clicked: " + image18.clicked + " out of " + image18.displayed + " times displayed";

        document.getElementById('product19').innerHTML = "Number of times " + image19.name + " clicked: " + image19.clicked + " out of " + image19.displayed + " times displayed";

        document.getElementById('product20').innerHTML = "Number of times " + image20.name + " clicked: " + image20.clicked + " out of " + image20.displayed + " times displayed";
}}

// come up with three random numbers (create function to do it)
let randomImages = function() {
    x = 0
    y = 0
    z = 0
    increment += 1
    console.log("increment: " + increment)

    while (x === y || x === z || y === z) {
            x = Math.floor(Math.random() * imageArray.length)
            y = Math.floor(Math.random() * imageArray.length)
            z = Math.floor(Math.random() * imageArray.length)   
    }

    elImage1.src = imageArray[x].filePath ;
    imageArray[x].displayed += 1 ;
    
    elImage2.src = imageArray[y].filePath ;
    imageArray[y].displayed += 1 ;
    
    elImage3.src = imageArray[z].filePath ;
    imageArray[z].displayed += 1 ;
    
    displayResults()

} ;

// event handler – count how many times an image has been clicked
let imageClick1 = function(e) {
    imageArray[x].clicked += 1
    console.log(imageArray[x].clicked)
    randomImages() ;
}

let imageClick2 = function(e) {
    imageArray[y].clicked += 1 
    console.log(imageArray[y].clicked)
    randomImages() ;
}

let imageClick3 = function(e) {
    imageArray[z].clicked += 1   
    console.log(imageArray[z].clicked)
    randomImages() ;
}

// attach Event Listeners to image tags
    elImage1.addEventListener('click', imageClick1) ;
    elImage2.addEventListener('click', imageClick2) ;
    elImage3.addEventListener('click', imageClick3) ;

// call function
randomImages() ;