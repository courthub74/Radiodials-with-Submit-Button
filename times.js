// times js

// event listener for the window
window.addEventListener('load', () => {
    // query the form field
    const form = document.querySelector("#timesform");

    // query the input field
        // in this case it's the radio dials
    
    // TIME fields
    var timebuttons = document.getElementById("timebuttons");
    // test print these
    console.log('Timebuttons div:', timebuttons);
    // add event listener to each button
    timebuttons.addEventListener('click', (e) => {
        // if 2pm change the button color
        if(e.target && e.target.id === "two"){
            // test print the target
            console.log('The target id:', e.target.id);
            // get the radio-tile
            var tiletwo = document.getElementById("tiletwo");
            // test print
            console.log('Radio Tile 2:', tiletwo);
            // change the background color
            tiletwo.style.backgroundColor = "#ffffff";
            // get label
            var labeltwo = document.getElementById("labeltwo");
            // test print
            console.log('Label Two:', labeltwo);
            // change the text color
            labeltwo.style.color = "rgb(6, 68, 6)";
        }
        // if 3pm change the button color
        if(e.target && e.target.id === "three"){
            // test print the target
            console.log('The target id:', e.target.id);
            // get the radio-tile
            var tilethree = document.getElementById("tilethree");
            // test print
            console.log('Radio Tile 3:', tilethree);
            // change the background color
            tilethree.style.backgroundColor = "#ffffff";
            // get label
            var labelthree = document.getElementById("labelthree");
            // test print
            console.log('Label Three:', labelthree);
            // change the text color
            labelthree.style.color = "rgb(6, 68, 6)";
        }
    });
    // FORM field
    // first you must query each time button
    // TIME fields


    // 2pm
    // const twopm = document.querySelector("#two");

    // 3pm
    // const threepm = document.querySelector("#three");

    
    form.addEventListener('submit', (e) => {
         // keeps page from refreshing
         e.preventDefault();
         // test print the submit button
        console.log("Submit button pressed");
        
        // check for all inputs
        var timevalue = document.querySelector('input[name="timebutt"]:checked').value;

        // Error handling
            // if no value entered just alert
        if (!timevalue) {
            alert("Please select a time");
            return;
        }
       
        // FOR STYLING BACK AFTER SUBMIT BUTTON PRESSED
        // get the radio-tile for 2pm
        var tile2 = document.getElementById("tiletwo");
        // change the style back
        tile2.style.backgroundColor = "rgb(6, 68, 6)";
        tile2.style.border = "none";
        // get the label
        var label2 = document.getElementById("labeltwo");
        // change the text style back
        label2.style.color = "#ffffff";
        
        // get the radio-tile for 3pm
        var tile3 = document.getElementById("tilethree");
        // change the style back
        tile3.style.backgroundColor = "rgb(6, 68, 6)";
        tile3.style.border = "none";
        // get the label
        var label3 = document.getElementById("labelthree");
        // change the text style back
        label3.style.color = "#ffffff";

        // YOU GET THE VALUES BASED ON ALL THE INPUTS
        // THEY SHOULD GO UNDER THE SAME CLASS OR TAG
        // CHECK IF ITS CHECKED

        // THIS goes to the database
        console.log('Time Selected:', timevalue);
        // change the inner html of the output alert
        document.getElementById("submitalert").innerHTML = "A time was Submitted";
    });
});