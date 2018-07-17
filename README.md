# BusMall Project
Project No. 3 for Code Partners 201 class

## Project Background and Problem Domain
BusMall is conducting Focus Group Research on which products to feature in its catalogue. I developed an app that displays three possible candidates at a time and requests the user to click on their favorite item.  This data (the amount of times an image is shown, as well as the number of times it is clicked or not clicked) is stored until the end of the focus session, when that data is summarized and listed for the user.

The project is built on JavaScript, and was scaffolded first before testing.  It showcases a constructor function that creates object instances for each potential product, as well as event handlers and event listeners.  The project also features some if else statements to ensure that during the testing that the same image is not duplicated, and also that images shown in one click test are excluded from being repeated for one turn.

### Stretch Goals For This Lab
- Handle the display and voting for an arbitrary number of images
- Using a variable, declare in JavaScript how many images to show
- Based on that value, dynamically create that many <img> tags
- Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking
