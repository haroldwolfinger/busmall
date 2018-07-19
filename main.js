// Scaffolding for the 1st milestone of Sprint 3 (BusMall)

// declare empty array that will store image objects
let imageArray = [];
let x 
let y
let z

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

// come up with three random numbers (create function to do it)
let randomImages = function() {
    x = 0
    y = 0
    z = 0
    
    while (x === y || x === z || y === z) {
            x = Math.floor(Math.random() * imageArray.length)
            y = Math.floor(Math.random() * imageArray.length)
            z = Math.floor(Math.random() * imageArray.length)   
    }

    console.log(x)
    console.log(y)
    console.log(z)

    elImage1.src = imageArray[x].filePath ;
    imageArray[x].displayed += 1 ;
    console.log("image1 count: " + imageArray[x].displayed)

    elImage2.src = imageArray[y].filePath ;
    imageArray[y].displayed += 1 ;
    console.log("image2 count: " + imageArray[y].displayed)

    elImage3.src = imageArray[z].filePath ;
    imageArray[z].displayed += 1 ;
    console.log("image3 count: " + imageArray[z].displayed)
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