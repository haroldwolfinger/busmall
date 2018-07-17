// Scaffolding for the 1st milestone of Sprint 3 (BusMall)

// declare empty array that will store image objects
Let imageArray = [] ;

//find image tags in HTML so we can change the SRC attribute
Let elImage1 = document.getElementByID(‘random1’) ;
Let elImage2 = document.getElementByID(‘random2’) ;
Let elImage3 = document.getElementByID(‘random3’) ;

// declare the image index so we have global access
Let imageIndexArray = [] ;

// new Constructor for images
Let Image = (name, filePath, clickYes, clickNo, totalClicks)
	this.name = name ; 
    this.filePath = filePath ; 
    this.clickYes = clickYes ;
    this.clickNo = clickNo ; 
    this.totalClicks = totalClicks ;

// instantiate new Images
Let image01 = ('bag', './img/bag.jpg', 0, 0, 0) ; 
Let image02 = ('banana', './img/banana.jpg', 0, 0, 0) ; 
Let image03 = ('bathroom', './img/bathroom.jpg', 0, 0, 0) ;
Let image04 = ('boots', './img/boots.jpg', 0, 0, 0) ;
Let image05 = ('breakfast', './img/breakfast.jpg', 0, 0, 0) ;
Let image06 = ('bubblegum', './img/bubblegum.jpg', 0, 0, 0) ;
Let image07 = ('chair', './img/chair.jpg', 0, 0, 0) ;
Let image08 = ('cthulhu', './img/cthulhu.jpg', 0, 0, 0) ;
Let image09 = ('dog-duck', './img/dog-duck.jpg', 0, 0, 0) ;
Let image10 = ('dragon', './img/dragon.jpg', 0, 0, 0) ;
Let image11 = ('pen', './img/pen.jpg', 0, 0, 0) ;
Let image12 = ('pet-sweep', './img/pet-sweep.jpg', 0, 0, 0) ;
Let image13 = ('scissors', './img/scissors.jpg', 0, 0, 0) ;
Let image14 = ('shark', './img/shark.jpg', 0, 0, 0) ;
Let image15 = ('sweep', './img/sweep.png', 0, 0, 0) ;
Let image16 = ('tauntaun', './img/tauntaun.jpg', 0, 0, 0) ;
Let image17 = ('unicorn', './img/unicorn.jpg', 0, 0, 0) ;
Let image18 = ('usb', './img/usb.gif', 0, 0, 0) ;
Let image19 = ('water-can', './img/water-can.jpg', 0, 0, 0) ;
Let image20 = ('wine-glass', './img/wine-glass.jpg', 0, 0, 0) ;

// push images to imageArray
imageArray.push (image01, image02,image03)
// imageArray.push (image01, image02, “image03”, “image04”, “image05”, “image06”, “image07”, “image08”, “image09”, “image10”, “image11”, “image12”, “image13”, “image14”, “image15”, “image16”, “image17”, “image18”, “image19”, “image20”) ;

// come up with three random numbers (create function to do it)
Let randomImages = function() {
// for loop because we need three
	For (i = 0, i < 3, i++) {
// assign random number
		Let randomIndex = Math.floor(Math.random() * imageArray.length) ;
// use the random number to retrieve the corresponding image
		imageIndexArray[i] = imageArray[randomIndex]
	{
// if / else statement to determine no duplicate images
	If (imageIndexArray[0] != imageIndexArray[1] && 
   imageIndexArray[0] != imageIndexArray[2] &&
   imageIndexArray[1] != imageIndexArray[2]) {
// if > yes: assign the src to the image
elImage1.src = imageIndexArray[0].filePath ;
elImage2.src = imageIndexArray[1].filePath ;
elImage3.src = imageIndexArray[2].filePath ;
// if > no (else): otherwise, recalculate all the values (although better would be to just recalculate the dupe)
} else {
break
}

// event handler #1 – count how many times an image has been displayed
Let imageDisplayCount = function(e){
	For (i = 0, i < imageIndexArray.length, i++){
		imageIndexArray[i] += imageIndex.clickNo ;
	{
{

// event handler #2 – count how many times an image has been clicked
Let imageClick = function(e) {
	imageIndex.clickYes += 1 ;
	imageIndex.clickNo -= 1 ;
{

// attach Event Listeners to image tags
elImage1.addEventListener(‘load’, imageDisplayCount) ;
elImage2.addEventListener(‘load’, imageDisplayCount) ;
elImage3.addEventListener(‘load’, imageDisplayCount) ;

elImage1.addEventListener(‘click’, imageClick) ;
elImage2.addEventListener(‘click’, imageClick) ;
elImage3.addEventListener(‘click’, imageClick) ;

// call function
randomImages() ;
