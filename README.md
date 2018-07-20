# BusMall Project
**Project No. 3 for Code Partners 201 class**</br>
[Lecture 10: Milestone 1](https://github.com/CodePartnersMD/MD201-01/blob/master/weeks-5-6/lecture-10/sprint3-milestone1.md "Class 10: A/V, Practical Info, and Getting the Vote Tracker Started")</br>
[Lecture 11: Milestone 2](https://github.com/CodePartnersMD/MD201-01/blob/master/weeks-5-6/lecture-11/sprint3-milestone2.md "Class 11: Adding Charts to the Vote Tracker App")</br>
[Lecture 12: Milestone 3](https://github.com/CodePartnersMD/MD201-01/blob/master/weeks-5-6/lecture-12/sprint3-milestone3.md "Class 12: Local Storage and UI/UX Concepts")</br>
</br>
[**Project Background and Problem Domain**](https://github.com/haroldwolfinger/busmall/tree/busmall-start#project-background-and-problem-domain)</br>
[**How the Project Evolved**](https://github.com/haroldwolfinger/busmall/tree/busmall-start#how-the-project-evolved)</br>
[**What i learned**](https://github.com/haroldwolfinger/busmall/tree/busmall-start#what-i-learned)</br>
[**Project Goals**](https://github.com/haroldwolfinger/busmall/tree/busmall-start#project-goals)</br>

## Project Background and Problem Domain
BusMall is conducting Focus Group Research on which products to feature in its catalogue. With help from Davis and Zach, I developed an app that displays three possible candidates at a time and requests the user to click on their favorite item.  This data (the amount of times an image is shown, as well as the number of times it is clicked) is stored until the end of the focus session, when that data is summarized and listed for the user.

The project is built on JavaScript, and was scaffolded first before testing.  It showcases a constructor function that creates object instances for each potential product, as well as event handlers and event listeners.  

## How the Project Evolved</br>
### Day 1: busmall-start branch</br>
Initially, when I was planning the scaffolding of the main.js file, the project captured three things: the number of times it was clicked ("clickYes"), the number of times it was not clicked ("clickNo"), and the amount of times an image was shown (which i entered as "totalClicks"). I understood that with just two of these items, I could calculate the third, but I thought having the additional data would be useful. I also thought i would want to store the data, and wasn't sure how to calculate it inside the object. I admit my solution was convoluted. Davis suggested simplifying the code to just track displayed ("displayed") and clicked ("clicked").

The initial code also featured some if else statements to ensure that during the testing that the same image is not duplicated (I had also imagined using if else statements to ensure that images shown in one click test are excluded from being repeated from the next turn). This was the code: 

```javascript
// if / else statement to determine no duplicate images
	if (imageIndexArray[0] != imageIndexArray[1] && imageIndexArray[0] != imageIndexArray[2] && imageIndexArray[1] != imageIndexArray[2]) {

// if > yes: assign the src to the image
    console.log(imageArray[imageIndexArray[0]].displayed)
    console.log(imageArray[imageIndexArray[1]].displayed)
    console.log(imageArray[imageIndexArray[2]].displayed)
   
    elImage1.src = imageArray[imageIndexArray[0]].filePath ;
    imageArray[imageIndexArray[0]].displayed += 1 ;
    console.log("imageArray[0].displayed: " + imageArray[imageIndexArray[0]].displayed)

    elImage2.src = imageArray[imageIndexArray[1]].filePath ;
    imageArray[imageIndexArray[1]].displayed += 1 ;
    console.log("imageArray[1].displayed: " + imageArray[imageIndexArray[1]].displayed)

    elImage3.src = imageArray[imageIndexArray[2]].filePath ;
    imageArray[imageIndexArray[2]].displayed += 1 ;
    console.log("imageArray[2].displayed: " + imageArray[imageIndexArray[2]].displayed)

}} ;
```
Unfortunately, this code didn't work properly. When duplicates were selected, such as when imageIndexArray[0] equaled imageIndexArray[1], it just wouldn't assign the src to the image so no images would display. Davis suggested that instead of the if statement, i design the random number selector to remove a number from an array when it is chosen, which would eliminate duplicates at the source. Great idea, but how?

This was my initial code:

```javascript
// come up with three random numbers (create function to do it)
let randomImages = function() {
// for loop because we need three
	for (i = 0; i < 3; i++) {
// assign random number
        let randomIndex = Math.floor(Math.random() * imageArray.length) ;
// use the random number to retrieve the corresponding image
        imageIndexArray.push (randomIndex) ;
    }
```

I ended up searching stackoverflow for answers, and came across a solution that _shuffles_ the array. Unfortunately i didn't understand how to implement it. Instead, i came up with this code:

```javascript
let imageToDisplay = []
let randomImages = function() {
    for (i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * imageArray.length)
        imageIndexArray.push (randomIndex)
        // copy value of filePath from imageArray to imageToDisplay
        imageToDisplay.push(imageArray[randomIndex].filePath)
        // splice the imageArray to prevent duplicate of entry just obtained
        imageArray.splice(randomIndex, 1)
        
    }

    elImage1.src = imageToDisplay[0] ;
    imageArray[imageIndexArray[0]].displayed += 1 ;

    elImage2.src = imageToDisplay[1] ;
    imageArray[imageIndexArray[1]].displayed += 1 ;

    elImage3.src = imageToDisplay[2] ;
    imageArray[imageIndexArray[2]].displayed += 1 ;

} ;
```

This too, did not work.

Finally, late after class about 10:15pm holed up with Patrice, i finally figured it out:

```javascript
while (x === y || x === z || y === z) {
            x = Math.floor(Math.random() * imageArray.length)
            y = Math.floor(Math.random() * imageArray.length)
            z = Math.floor(Math.random() * imageArray.length)   
    }
```

Admittedly, credit goes to Zach for suggesting i calculate the numbers independently; however, i am reallly pleased at this solution because i came to it by myself after much trial and error.

It required just one adjustment, which was made the next day: after initially running, the pictures were not changing. I spotted the fact that the while loop wouldn't run after the first instance since the values were unique. Zach helped me realize that i could just reset the values x, y, and z back to 0 before the while loop and it would run. Thanks Zach!

My final push to busmall-start occurred at 7:45pm on Thursday, July 19.  I'm ready to work on the next lecture, involving chartjs.

### Day 2: chartjs branch</br>
Wow, this was easy. I used the documentation at [chart js](http://www.chartjs.org/docs/latest/getting-started/) including [the options for the title](https://www.chartjs.org/docs/latest/configuration/title.html) and wound up creating my chart in less than an hour.

The one issue i had was that even after thinking i had the formatting correct, the chart wouldn't display properly: i was getting the title and x axis-values, but i wasn't pulling in the data properly.  

It turned out to be two problems: first, i did include a comma between my two data objects, i had brackets, which is wrong.  It is supposed to look like this: 

```javascript
data: {
        labels: [image01.name, image02.name, image03.name, image04.name, image05.name, image06.name, image07.name, image08.name, image09.name, image10.name, image11.name, image12.name, image13.name, image14.name, image15.name, image16.name, image17.name, image18.name, image19.name, image20.name],
        datasets: [{
            label: "Times Clicked", 
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [image01.clicked, image02.clicked, image03.clicked, image04.clicked, image05.clicked, image06.clicked, image07.clicked, image08.clicked, image09.clicked, image10.clicked, image11.clicked, image12.clicked, image13.clicked, image14.clicked, image15.clicked, image16.clicked, image17.clicked, image18.clicked, image19.clicked, image20.clicked],
        } ,
            {
            label: "Times Displayed",
            backgroundColor: 'purple',
            borderColor: 'purple',
            data: [image01.displayed, image02.displayed, image03.displayed, image04.displayed, image05.displayed, image06.displayed, image07.displayed, image08.displayed, image09.displayed, image10.displayed, image11.displayed, image12.displayed, image13.displayed, image14.displayed, image15.displayed, image16.displayed, image17.displayed, image18.displayed, image19.displayed, image20.displayed],
        }]
    },
```

Secondly, the code was at the bottom of my JavaScript instead of within my displayResults function.

I made the two changes and everything worked! Time for Milestone 3.

## What i learned
busmall-start: i learned how to map files to a filePath and display images stored in a folder. i also learned how to generate three unique random numbers (as opposed to one), and boned up on .innerHTML semantics to populate my list (rather than using replace.innerText). it felt good to reach the milestone on time, because initially i didn't think there was any way i could make it.

chartjs: i learned how to add a chart into my file using the <canvas> tag in html and dynamically populating it from JavaScript.

## Project Goals
[note: please see 'Goals For This Lab' for MVP requirements](https://github.com/CodePartnersMD/MD201-01/blob/master/weeks-5-6/lecture-10/sprint3-milestone1.md#goals-for-this-lab)

### Milestone 1: Stretch Goals For This Lecture 10 (busmall-start branch)
- Handle the display and voting for an arbitrary number of images
- Using a variable, declare in JavaScript how many images to show
- Based on that value, dynamically create that many <img> tags
- Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking

### Milestone 2 (chartjs branch)
- Using ChartJS, display your vote totals in a bar chart as instructed in the initial definition of the BusMall assignment. If you want to try some additional chart types, do so with some of your alternate data that you have calculated from your vote results. The size and look of your chart is up to you, just be sure to put it in the area beneath the three images. Hint: for this type of data, bar charts work well.

### Milestone 3 (local-storage branch)
- Give your BusMall app some persistence by using local storage to store your voting data! The goal is to have all of your click data persist through a page refresh or through completely closing the browser.
[Article on local storage for Class 12](http://diveintohtml5.info/storage.html "The Past, Present & Future of Local Storage for Web Applications")