# MyFirstQuiz

Link to jessilinQuery : https://jessilinlugo.github.io/MyFirstQuiz/ 


------------

Javascript is not my friend. It's not my enemy, but it's not yet my friend. 

I still find myself struggling with applying my learned concepts, but I got pretty far this time with extensive googling and testing every possible combination of everything I've learned. jQuery has been a huuuge help in understanding Javascript. Which from my understanding means I found running easier than walking. 

I established the css styling first because it's what I feel most confident in. After that, I created some div elements in HTML so that I had something to reference and append to in my JS file.

I called the HTML elements using jQuery and turned them all into variables I could use a little more loosely within my code (aka just easier to type out).

I set a variable with the index of the questions array set to 0, to ensure the quiz begins the loop from the first item within the array.

Next, I created an array which holds my individual question title, answer options, and correct answer for all 5 questions.

I created another variable that's responsible for displaying each question as text on the screen.

This next part came to be as a bit of an A-HA! moment. Because I had already established the beginning of the quiz, the meat of it, and the end, it was just a matter of hiding and showing the separate elements based on the user interaction.

Lines 52-54 hide the entire end screen element, as well as the children elements of the question tag. I discovered that hiding the entire parent, as opposed to the children, will (obviously) affect the children in the same way. So I had to basically ignore the parent element, and only focus on the children. 

I was taught that the user interaction, what kicks the entire sequence of events off, should be placed at the bottom. So above it, I created the function that reacts to the start button being clicked, added buttons to the values to allow for click through, and set the text content of the buttons themselves.

I also added an if statement which simply states that if the questions array has been completed, to show the end screen that had been hidden twice before.

From here is where my current understanding and knowledge of Javascript fails me. I was unable to complete the code to allow the buttons to cycle through the questions, no matter the answer provided. As of now, all button click produces is a console.log saying the click worked, and then increasing the counter of the log by 1 no matter which answer button is clicked. 

I spent the entire break reviewing and re-doing in class activities. I'm slowly catching up, getting a better grasp on some things, the activities help immensely, but I definitely feel like I'm treading through mud here. 


------------

** Screenshots of my start page and 1st question page **

<img src="/assets/startpage.png" alt="start page of quiz"/>
<img src="/assets/question1.png" alt="first question"/>