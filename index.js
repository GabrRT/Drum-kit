

/*for(i=0; i<document.querySelectorAll(".drum").length ; i++)  {
document.querySelectorAll("button")[i].addEventListener ("click",function);


function handleClick () {
    alert("Ig got clicked");


}*/

// Define the handleClick function
/*
function handleClick() {
    // Create a new Audio object and play the sound
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    this.style.color = "blue"; // Co
}

// Add event listeners to each drum button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
   
}*/
// Add event listeners to each drum button
/* alternative solution 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // Corrected property to get the inner HTML of the button
        var buttonInnerHTML = this.innerHTML;
       

        // Play sound based on the button inner HTML
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                this.style.color = "blue";
                break;

            case "a":
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    this.style.color = "blue";
                    break;

            case "s":
                        var audio = new Audio('sounds/crash.mp3');
                        audio.play();
                        this.style.color = "blue";
                        break;
            case "d":
                        var audio = new Audio('sounds/kick-bass.mp3');
                        audio.play();
                        this.style.color = "blue";
                        break;
            case "j":
                        var audio = new Audio('sounds/tom-3.mp3');
                        audio.play();
                        this.style.color = "blue";
                        break;
            case "k":
                        var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
                        this.style.color = "blue";
                        break;
            case "l":
                        var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
                        this.style.color = "blue";
                        break;
            // Optional: default case
            default:
               
        }
      
            // Add additional cases for other keys if needed
       ;
        
    });
}



document.addEventListener("keypress", function(event) {
    var pressedKey = event.key.toLowerCase(); // Capture the pressed key and convert to lower case
    console.log(event);
    switch (pressedKey) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            // Replace with the correct audio file for 'a'
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
         case "d":
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
             this.style.color = "blue";
             break;
         case "j":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
             this.style.color = "blue";
            break;  
         case "k":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            this.style.color = "blue";
            break;   
        case "l":
             var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
             this.style.color = "blue";
            break; 
        case "s":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            this.style.color = "blue";
             break;  
        default:
            // Optional: handle any keys that are not mapped
            break;
    }
});
*/

/*third approach*/
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            audio = new Audio('sounds/crash.mp3');
            break;
        case "d":
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case "j":
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "k":
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case "l":
            audio = new Audio('sounds/tom-4.mp3');
            break;
        default:  
            return; // Exit if the key is not mapped
    }
    audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 300);
          // Duration of the animation effect
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
