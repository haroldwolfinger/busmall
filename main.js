// Scaffolding for the 3rd milestone of Sprint 3 (BusMall) - using local storage to access data from before

// declare empty array that will store image objects
let imageArray = [];

// declare global variables for the three random number and the counter
let x 
let y
let z
let increment = 0

//find image tags in HTML so we can change the SRC attribute
let elImage1 = document.getElementById('random1');
let elImage2 = document.getElementById('random2');
let elImage3 = document.getElementById('random3');

// find list id in HTML so we can dynamically populate the number of clicks + times displayed
let myList = document.getElementById("productList")

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

// check to see if local storage exists, and if so, retrieve it
if (localStorage.imgArr) {
    imageArray = JSON.parse(localStorage.getItem("imgArr")) ;
} else {

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

}

// create function to display results after 25 clicks
let displayResults = function(){
// i would like to find a way to refactor this code into less lines - using jQuery perhaps? would that work?
    if (increment > 25) {
        for (i = 0; i < 20; i++) {
            let itemListing = document.createElement('li') 
            itemListing.innerHTML = "Number of times " + imageArray[i].name + " clicked: " + imageArray[i].clicked + " out of " + imageArray[i].displayed + " times displayed";
            myList.appendChild(itemListing)
            console.log(myList)
            console.log(itemListing)
        }
 
//function that will dynamically populate chart with labels and data from imageArray
function populateChart(props) {
    let labels = []
    for(let i=0; i < imageArray.length; i++) {
        labels.push(imageArray[i][props])
    }
    return labels
}

// create a chart within the canvas element
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: populateChart('name'),
        datasets: [{
            label: "Times Clicked", 
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: populateChart('clicked'),
        } ,
            {
            label: "Times Displayed",
            backgroundColor: 'purple',
            borderColor: 'purple',
            data: populateChart('displayed'),
        }]
    },
// wanted to add in options so a title would be displayed
    options: {
        display: true, 
        fontSize: 18,
        text: "Product Popularity: Number of Times Clicked + Number of Times Displayed",
        fontStyle: 'bold',
        fontFamily: "'monospace'",
        fontColor: 'rgb(4, 8, 245)',
    }
})

}}

// create a function to count the number of times the images refresh (linked to the click event and imageClick functions) - originally this was within the randomImages function, but i found a bug that would allow the increment counter to increase even if no picture was clicked (by refreshing the site): that bug has been fixed.
let countTimes = function() {
    if (localStorage.count) {
        increment = parseInt(localStorage.getItem("count"))
    }
    increment += 1
    localStorage.setItem("count", increment)
    JSON.stringify("count")
    console.log("increment: " + increment)
}

// come up with three random numbers (create function to do it)
// was having problems with this while loop initially because it would only run upon page load; then, nothing would happen. finally realized that values need to be set back equal each time to set the conditions so that the function will run.

let randomImages = function() {
    x = 0
    y = 0
    z = 0
    
// proud of this while loop - it ensures that the three numbers are unique
    while (x === y || x === z || y === z) {
            x = Math.floor(Math.random() * imageArray.length)
            y = Math.floor(Math.random() * imageArray.length)
            z = Math.floor(Math.random() * imageArray.length)   
    }

    // each image is populated to the page here and the ".displayed" property increase by 1 for later data showing
    elImage1.src = imageArray[x].filePath ;
    imageArray[x].displayed += 1 ;
    
    elImage2.src = imageArray[y].filePath ;
    imageArray[y].displayed += 1 ;
    
    elImage3.src = imageArray[z].filePath ;
    imageArray[z].displayed += 1 ;
    
    // see above for this function's code: this function displays a bar chart after images have been refreshed 25 times
    displayResults()

} ;

// event handler – count how many times an image has been clicked
// (e) = event not error. the function occurs upon the event
// the final function randomImages() tells the code to run the function that reloads the unique images
let imageClick1 = function(e) {
// create an if statement: if increment > 25 do not allow another vote
    if (increment > 25) {
        return ;
// create else statement: if increment <= 25 allow click and repopulate random images
    } else {
        imageArray[x].clicked += 1
        console.log(imageArray[x].clicked)
        countTimes() ; 
        randomImages() ;
        localStorage.setItem("imgArr", JSON.stringify(imageArray)) ; 
        console.log(localStorage) ;
    }
}

let imageClick2 = function(e) {
    if (increment > 25) {
        return ;
    } else {
        imageArray[y].clicked += 1 
        console.log(imageArray[y].clicked)
        countTimes() ; 
        randomImages() ;
        localStorage.setItem("imgArr", JSON.stringify(imageArray)) ; 
        console.log(localStorage) ;
    }
}

let imageClick3 = function(e) {
    if (increment > 25) {
        return ;
    } else {
        imageArray[z].clicked += 1
        console.log(imageArray[z].clicked)
        countTimes() ; 
        randomImages() ;
        localStorage.setItem("imgArr", JSON.stringify(imageArray)) ; 
        console.log(localStorage) ;
    }
}

// attach Event Listeners to image tags
// see keyword 'click' - that's the event, and when that event occurs, the corresponding function above is called
    elImage1.addEventListener('click', imageClick1) ;
    elImage2.addEventListener('click', imageClick2) ;
    elImage3.addEventListener('click', imageClick3) ;

// call function
randomImages() ;