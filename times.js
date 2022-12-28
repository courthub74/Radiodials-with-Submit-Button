// times js

// event listener for the window
window.addEventListener('load', () => {
    // query the form field
    const form = document.querySelector("#timesform");

    // query the input field
        // in this case it's the radio dials
    
    // TIME field
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
    })
})