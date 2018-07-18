// Scaffolding for the 1st milestone of Sprint 3 (BusMall)

// declare empty array that will store image objects
let imageArray = [];

//find image tags in HTML so we can change the SRC attribute
let elImage1 = document.getElementById('random1');
let elImage2 = document.getElementById('random2');
let elImage3 = document.getElementById('random3');

// declare the image indices so we have global access (imageIndexArray is to associate random number with imageArray, imageToDisplay is to store the filePath property of images before we splice them from imageArray to ensure no duplications)
let imageIndexArray = [];
let imageToDisplay = []

// new Constructor for images
let Image = function(name, filePath, clicked, displayed) {
	this.name = name ; 
    this.filePath = filePath ; 
    this.clicked = clicked ;
    this.displayed = displayed ;
    this.increment = function() {
        this.clicked += 1 ;
    }
}

// instantiate new Images
let image01 = new Image('bag', './img/bag.jpg', 0, 0, 0) ; 
let image02 = new Image('banana', './img/banana.jpg', 0, 0, 0) ; 
let image03 = new Image('bathroom', './img/bathroom.jpg', 0, 0, 0) ;
let image04 = new Image('boots', './img/boots.jpg', 0, 0, 0) ;
let image05 = new Image('breakfast', './img/breakfast.jpg', 0, 0, 0) ;
let image06 = new Image('bubblegum', './img/bubblegum.jpg', 0, 0, 0) ;
let image07 = new Image('chair', './img/chair.jpg', 0, 0, 0) ;
let image08 = new Image('cthulhu', './img/cthulhu.jpg', 0, 0, 0) ;
let image09 = new Image('dog-duck', './img/dog-duck.jpg', 0, 0, 0) ;
let image10 = new Image('dragon', './img/dragon.jpg', 0, 0, 0) ;
let image11 = new Image('pen', './img/pen.jpg', 0, 0, 0) ;
let image12 = new Image('pet-sweep', './img/pet-sweep.jpg', 0, 0, 0) ;
let image13 = new Image('scissors', './img/scissors.jpg', 0, 0, 0) ;
let image14 = new Image('shark', './img/shark.jpg', 0, 0, 0) ;
let image15 = new Image('sweep', './img/sweep.png', 0, 0, 0) ;
let image16 = new Image('tauntaun', './img/tauntaun.jpg', 0, 0, 0) ;
let image17 = new Image('unicorn', './img/unicorn.jpg', 0, 0, 0) ;
let image18 = new Image('usb', './img/usb.gif', 0, 0, 0) ;
let image19 = new Image('water-can', './img/water-can.jpg', 0, 0, 0) ;
let image20 = new Image('wine-glass', './img/wine-glass.jpg', 0, 0, 0) ;

// push images to imageArray
imageArray.push (image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20) ;

// come up with three random numbers (create function to do it)
let randomImages = function() {
    // // for loop because we need three
    // for (i = 0; i < 3; i++) {
    // // assign random number
    //     let randomIndex = Math.floor(Math.random() * imageArray.length) ;
    // // use the random number to retrieve the corresponding image
    //     imageIndexArray.push (randomIndex) ;
    //     // imageArray.filePath.splice (randomIndex,1)
    //     console.log(imageArray[randomIndex])
    // }

    for (i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * imageArray.length)
        imageIndexArray.push (randomIndex)
        imageToDisplay.push(imageArray[randomIndex].filePath)
        console.log("imageArray: " + imageArray[randomIndex].filePath)
        console.log("imageToDisplay: " + imageToDisplay)
        imageArray.splice(randomIndex, 1)
        console.log("spliced: " + imageArray.splice(randomIndex,1))
    }

// if > yes: assign the src to the image
    // elImage1.src = imageArray[imageIndexArray[0]].filePath ;
    // imageArray[imageIndexArray[0]].displayed += 1 ;
    // console.log("imageArray[0].displayed: " + imageArray[imageIndexArray[0]].displayed)

    // elImage2.src = imageArray[imageIndexArray[1]].filePath ;
    // imageArray[imageIndexArray[1]].displayed += 1 ;
    // console.log("imageArray[1].displayed: " + imageArray[imageIndexArray[1]].displayed)

    // elImage3.src = imageArray[imageIndexArray[2]].filePath ;
    // imageArray[imageIndexArray[2]].displayed += 1 ;
    // console.log("imageArray[2].displayed: " + imageArray[imageIndexArray[2]].displayed)

    elImage1.src = imageToDisplay[0] ;
    imageArray[imageIndexArray[0]].displayed += 1 ;
    console.log("imageArray[0].displayed: " + imageArray[imageIndexArray[0]].displayed)

    elImage2.src = imageToDisplay[1] ;
    imageArray[imageIndexArray[1]].displayed += 1 ;
    console.log("imageArray[1].displayed: " + imageArray[imageIndexArray[1]].displayed)

    elImage3.src = imageToDisplay[2] ;
    imageArray[imageIndexArray[2]].displayed += 1 ;
    console.log("imageArray[2].displayed: " + imageArray[imageIndexArray[2]].displayed)

} ;

// event handler – count how many times an image has been clicked
let imageClick = function(e) {
    imageArray.increment
    console.log(imageArray[0].clicked)
}

// attach Event Listeners to image tags
elImage1.addEventListener('click', imageClick) ;
elImage2.addEventListener('click', imageClick) ;
elImage3.addEventListener('click', imageClick) ;

// call function
randomImages() ;